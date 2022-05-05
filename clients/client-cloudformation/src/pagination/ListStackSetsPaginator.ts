// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { CloudFormation } from "../CloudFormation";
import { CloudFormationClient } from "../CloudFormationClient";
import {
  ListStackSetsCommand,
  ListStackSetsCommandInput,
  ListStackSetsCommandOutput,
} from "../commands/ListStackSetsCommand";
import { CloudFormationPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: CloudFormationClient,
  input: ListStackSetsCommandInput,
  ...args: any
): Promise<ListStackSetsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListStackSetsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: CloudFormation,
  input: ListStackSetsCommandInput,
  ...args: any
): Promise<ListStackSetsCommandOutput> => {
  // @ts-ignore
  return await client.listStackSets(input, ...args);
};
export async function* paginateListStackSets(
  config: CloudFormationPaginationConfiguration,
  input: ListStackSetsCommandInput,
  ...additionalArguments: any
): Paginator<ListStackSetsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListStackSetsCommandOutput;
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
