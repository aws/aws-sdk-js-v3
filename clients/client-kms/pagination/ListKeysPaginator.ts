import { KMS } from "../KMS";
import { KMSClient } from "../KMSClient";
import { ListKeysCommand, ListKeysCommandInput, ListKeysCommandOutput } from "../commands/ListKeysCommand";
import { KMSPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: KMSClient,
  input: ListKeysCommandInput,
  ...args: any
): Promise<ListKeysCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListKeysCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: KMS,
  input: ListKeysCommandInput,
  ...args: any
): Promise<ListKeysCommandOutput> => {
  // @ts-ignore
  return await client.listKeys(input, ...args);
};
export async function* paginateListKeys(
  config: KMSPaginationConfiguration,
  input: ListKeysCommandInput,
  ...additionalArguments: any
): Paginator<ListKeysCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.Marker
  let token: typeof input.Marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListKeysCommandOutput;
  while (hasNext) {
    input.Marker = token;
    input["Limit"] = config.pageSize;
    if (config.client instanceof KMS) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof KMSClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected KMS | KMSClient");
    }
    yield page;
    token = page.NextMarker;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
