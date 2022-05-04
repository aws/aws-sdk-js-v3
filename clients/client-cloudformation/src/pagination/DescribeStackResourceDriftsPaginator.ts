// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { CloudFormation } from "../CloudFormation";
import { CloudFormationClient } from "../CloudFormationClient";
import {
  DescribeStackResourceDriftsCommand,
  DescribeStackResourceDriftsCommandInput,
  DescribeStackResourceDriftsCommandOutput,
} from "../commands/DescribeStackResourceDriftsCommand";
import { CloudFormationPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: CloudFormationClient,
  input: DescribeStackResourceDriftsCommandInput,
  ...args: any
): Promise<DescribeStackResourceDriftsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeStackResourceDriftsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: CloudFormation,
  input: DescribeStackResourceDriftsCommandInput,
  ...args: any
): Promise<DescribeStackResourceDriftsCommandOutput> => {
  // @ts-ignore
  return await client.describeStackResourceDrifts(input, ...args);
};
export async function* paginateDescribeStackResourceDrifts(
  config: CloudFormationPaginationConfiguration,
  input: DescribeStackResourceDriftsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeStackResourceDriftsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeStackResourceDriftsCommandOutput;
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
