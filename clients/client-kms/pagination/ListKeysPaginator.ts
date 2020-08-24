import { KMS } from "../KMS";
import { KMSClient } from "../KMSClient";
import { ListKeysCommand, ListKeysCommandInput, ListKeysCommandOutput } from "../commands/ListKeysCommand";
import { KMSPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: KMSClient,
  input: ListKeysCommandInput,
  ...args: any
): Promise<ListKeysCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListKeysCommand(input, ...args));
};
const makePagedRequest = async (
  client: KMS,
  input: ListKeysCommandInput,
  ...args: any
): Promise<ListKeysCommandOutput> => {
  // @ts-ignore
  return await client.listKeys(input, ...args);
};
export async function* listKeysPaginate(
  config: KMSPaginationConfiguration,
  input: ListKeysCommandInput,
  ...additionalArguments: any
): Paginator<ListKeysCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListKeysCommandOutput;
  while (hasNext) {
    input["Marker"] = token;
    input["Limit"] = config.pageSize;
    if (config.client instanceof KMS) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof KMSClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected KMS | KMSClient");
    }
    yield page;
    token = page["NextMarker"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
