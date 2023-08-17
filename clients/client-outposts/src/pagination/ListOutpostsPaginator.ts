// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListOutpostsCommand,
  ListOutpostsCommandInput,
  ListOutpostsCommandOutput,
} from "../commands/ListOutpostsCommand";
import { OutpostsClient } from "../OutpostsClient";
import { OutpostsPaginationConfiguration } from "./Interfaces";

/**
 * @internal
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
 * @public
 */
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
    if (config.client instanceof OutpostsClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Outposts | OutpostsClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
