// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { CloudControl } from "../CloudControl";
import { CloudControlClient } from "../CloudControlClient";
import {
  ListResourceRequestsCommand,
  ListResourceRequestsCommandInput,
  ListResourceRequestsCommandOutput,
} from "../commands/ListResourceRequestsCommand";
import { CloudControlPaginationConfiguration } from "./Interfaces";

/**
 * @private
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
 * @private
 */
const makePagedRequest = async (
  client: CloudControl,
  input: ListResourceRequestsCommandInput,
  ...args: any
): Promise<ListResourceRequestsCommandOutput> => {
  // @ts-ignore
  return await client.listResourceRequests(input, ...args);
};
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
    if (config.client instanceof CloudControl) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof CloudControlClient) {
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
