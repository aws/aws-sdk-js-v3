// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { CloudFormation } from "../CloudFormation";
import { CloudFormationClient } from "../CloudFormationClient";
import {
  ListStackSetOperationResultsCommand,
  ListStackSetOperationResultsCommandInput,
  ListStackSetOperationResultsCommandOutput,
} from "../commands/ListStackSetOperationResultsCommand";
import { CloudFormationPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: CloudFormationClient,
  input: ListStackSetOperationResultsCommandInput,
  ...args: any
): Promise<ListStackSetOperationResultsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListStackSetOperationResultsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: CloudFormation,
  input: ListStackSetOperationResultsCommandInput,
  ...args: any
): Promise<ListStackSetOperationResultsCommandOutput> => {
  // @ts-ignore
  return await client.listStackSetOperationResults(input, ...args);
};
export async function* paginateListStackSetOperationResults(
  config: CloudFormationPaginationConfiguration,
  input: ListStackSetOperationResultsCommandInput,
  ...additionalArguments: any
): Paginator<ListStackSetOperationResultsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListStackSetOperationResultsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof CloudFormation) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof CloudFormationClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected CloudFormation | CloudFormationClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
