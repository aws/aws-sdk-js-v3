import { KMS } from "../KMS";
import { KMSClient } from "../KMSClient";
import { ListAliasesCommand, ListAliasesCommandInput, ListAliasesCommandOutput } from "../commands/ListAliasesCommand";
import { KMSPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: KMSClient,
  input: ListAliasesCommandInput,
  ...args: any
): Promise<ListAliasesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAliasesCommand(input, ...args));
};
const makePagedRequest = async (
  client: KMS,
  input: ListAliasesCommandInput,
  ...args: any
): Promise<ListAliasesCommandOutput> => {
  // @ts-ignore
  return await client.listAliases(input, ...args);
};
export async function* listAliasesPaginate(
  config: KMSPaginationConfiguration,
  input: ListAliasesCommandInput,
  ...additionalArguments: any
): Paginator<ListAliasesCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListAliasesCommandOutput;
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
