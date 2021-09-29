import { Outposts } from "../Outposts";
import { OutpostsClient } from "../OutpostsClient";
import {
  ListOutpostsCommand,
  ListOutpostsCommandInput,
  ListOutpostsCommandOutput,
} from "../commands/ListOutpostsCommand";
import { OutpostsPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: OutpostsClient,
  input: ListOutpostsCommandInput,
  ...args: any
): Promise<ListOutpostsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListOutpostsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Outposts,
  input: ListOutpostsCommandInput,
  ...args: any
): Promise<ListOutpostsCommandOutput> => {
  // @ts-ignore
  return await client.listOutposts(input, ...args);
};
export async function* paginateListOutposts(
  config: OutpostsPaginationConfiguration,
  input: ListOutpostsCommandInput,
  ...additionalArguments: any
): Paginator<ListOutpostsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListOutpostsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Outposts) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof OutpostsClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Outposts | OutpostsClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
