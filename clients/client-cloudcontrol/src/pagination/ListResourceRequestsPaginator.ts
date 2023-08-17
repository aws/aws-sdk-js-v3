// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { CloudControlClient } from "../CloudControlClient";
import {
  ListResourceRequestsCommand,
  ListResourceRequestsCommandInput,
  ListResourceRequestsCommandOutput,
} from "../commands/ListResourceRequestsCommand";
import { CloudControlPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: CloudControlClient,
  input: ListResourceRequestsCommandInput,
  ...args: any
): Promise<ListResourceRequestsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListResourceRequestsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListResourceRequests(
  config: CloudControlPaginationConfiguration,
  input: ListResourceRequestsCommandInput,
  ...additionalArguments: any
): Paginator<ListResourceRequestsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListResourceRequestsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof CloudControlClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected CloudControl | CloudControlClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
