// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { CloudFormation } from "../CloudFormation";
import { CloudFormationClient } from "../CloudFormationClient";
import {
  ListStackResourcesCommand,
  ListStackResourcesCommandInput,
  ListStackResourcesCommandOutput,
} from "../commands/ListStackResourcesCommand";
import { CloudFormationPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: CloudFormationClient,
  input: ListStackResourcesCommandInput,
  ...args: any
): Promise<ListStackResourcesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListStackResourcesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: CloudFormation,
  input: ListStackResourcesCommandInput,
  ...args: any
): Promise<ListStackResourcesCommandOutput> => {
  // @ts-ignore
  return await client.listStackResources(input, ...args);
};
export async function* paginateListStackResources(
  config: CloudFormationPaginationConfiguration,
  input: ListStackResourcesCommandInput,
  ...additionalArguments: any
): Paginator<ListStackResourcesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListStackResourcesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
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
