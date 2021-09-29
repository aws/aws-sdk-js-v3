import { MTurk } from "../MTurk";
import { MTurkClient } from "../MTurkClient";
import { ListHITsCommand, ListHITsCommandInput, ListHITsCommandOutput } from "../commands/ListHITsCommand";
import { MTurkPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: MTurkClient,
  input: ListHITsCommandInput,
  ...args: any
): Promise<ListHITsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListHITsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: MTurk,
  input: ListHITsCommandInput,
  ...args: any
): Promise<ListHITsCommandOutput> => {
  // @ts-ignore
  return await client.listHITs(input, ...args);
};
export async function* paginateListHITs(
  config: MTurkPaginationConfiguration,
  input: ListHITsCommandInput,
  ...additionalArguments: any
): Paginator<ListHITsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListHITsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof MTurk) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof MTurkClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected MTurk | MTurkClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
