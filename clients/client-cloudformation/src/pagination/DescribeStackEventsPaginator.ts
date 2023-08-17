// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { CloudFormationClient } from "../CloudFormationClient";
import {
  DescribeStackEventsCommand,
  DescribeStackEventsCommandInput,
  DescribeStackEventsCommandOutput,
} from "../commands/DescribeStackEventsCommand";
import { CloudFormationPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: CloudFormationClient,
  input: DescribeStackEventsCommandInput,
  ...args: any
): Promise<DescribeStackEventsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeStackEventsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateDescribeStackEvents(
  config: CloudFormationPaginationConfiguration,
  input: DescribeStackEventsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeStackEventsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeStackEventsCommandOutput;
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
