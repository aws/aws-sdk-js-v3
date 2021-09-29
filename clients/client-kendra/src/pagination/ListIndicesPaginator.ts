import { Kendra } from "../Kendra";
import { KendraClient } from "../KendraClient";
import { ListIndicesCommand, ListIndicesCommandInput, ListIndicesCommandOutput } from "../commands/ListIndicesCommand";
import { KendraPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: KendraClient,
  input: ListIndicesCommandInput,
  ...args: any
): Promise<ListIndicesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListIndicesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Kendra,
  input: ListIndicesCommandInput,
  ...args: any
): Promise<ListIndicesCommandOutput> => {
  // @ts-ignore
  return await client.listIndices(input, ...args);
};
export async function* paginateListIndices(
  config: KendraPaginationConfiguration,
  input: ListIndicesCommandInput,
  ...additionalArguments: any
): Paginator<ListIndicesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListIndicesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Kendra) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof KendraClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Kendra | KendraClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
