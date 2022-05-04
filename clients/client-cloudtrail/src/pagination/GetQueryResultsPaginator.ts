// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { CloudTrail } from "../CloudTrail";
import { CloudTrailClient } from "../CloudTrailClient";
import {
  GetQueryResultsCommand,
  GetQueryResultsCommandInput,
  GetQueryResultsCommandOutput,
} from "../commands/GetQueryResultsCommand";
import { CloudTrailPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: CloudTrailClient,
  input: GetQueryResultsCommandInput,
  ...args: any
): Promise<GetQueryResultsCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetQueryResultsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: CloudTrail,
  input: GetQueryResultsCommandInput,
  ...args: any
): Promise<GetQueryResultsCommandOutput> => {
  // @ts-ignore
  return await client.getQueryResults(input, ...args);
};
export async function* paginateGetQueryResults(
  config: CloudTrailPaginationConfiguration,
  input: GetQueryResultsCommandInput,
  ...additionalArguments: any
): Paginator<GetQueryResultsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetQueryResultsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    if (config.client instanceof CloudTrail) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof CloudTrailClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected CloudTrail | CloudTrailClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
