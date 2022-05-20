// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { CloudFormation } from "../CloudFormation";
import { CloudFormationClient } from "../CloudFormationClient";
import {
  ListStackInstancesCommand,
  ListStackInstancesCommandInput,
  ListStackInstancesCommandOutput,
} from "../commands/ListStackInstancesCommand";
import { CloudFormationPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: CloudFormationClient,
  input: ListStackInstancesCommandInput,
  ...args: any
): Promise<ListStackInstancesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListStackInstancesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: CloudFormation,
  input: ListStackInstancesCommandInput,
  ...args: any
): Promise<ListStackInstancesCommandOutput> => {
  // @ts-ignore
  return await client.listStackInstances(input, ...args);
};
export async function* paginateListStackInstances(
  config: CloudFormationPaginationConfiguration,
  input: ListStackInstancesCommandInput,
  ...additionalArguments: any
): Paginator<ListStackInstancesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListStackInstancesCommandOutput;
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
