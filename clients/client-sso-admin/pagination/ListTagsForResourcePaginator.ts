import { SSOAdmin } from "../SSOAdmin";
import { SSOAdminClient } from "../SSOAdminClient";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { SSOAdminPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: SSOAdminClient,
  input: ListTagsForResourceCommandInput,
  ...args: any
): Promise<ListTagsForResourceCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListTagsForResourceCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: SSOAdmin,
  input: ListTagsForResourceCommandInput,
  ...args: any
): Promise<ListTagsForResourceCommandOutput> => {
  // @ts-ignore
  return await client.listTagsForResource(input, ...args);
};
export async function* paginateListTagsForResource(
  config: SSOAdminPaginationConfiguration,
  input: ListTagsForResourceCommandInput,
  ...additionalArguments: any
): Paginator<ListTagsForResourceCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListTagsForResourceCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    if (config.client instanceof SSOAdmin) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof SSOAdminClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SSOAdmin | SSOAdminClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
