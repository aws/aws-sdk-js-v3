// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { CloudFormationClient } from "../CloudFormationClient";
import {
  DescribeStacksCommand,
  DescribeStacksCommandInput,
  DescribeStacksCommandOutput,
} from "../commands/DescribeStacksCommand";
import { CloudFormationPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: CloudFormationClient,
  input: DescribeStacksCommandInput,
  ...args: any
): Promise<DescribeStacksCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeStacksCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateDescribeStacks(
  config: CloudFormationPaginationConfiguration,
  input: DescribeStacksCommandInput,
  ...additionalArguments: any
): Paginator<DescribeStacksCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeStacksCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    if (config.client instanceof CloudFormationClient) {
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
