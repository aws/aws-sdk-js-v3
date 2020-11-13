import { CloudFormation } from "../CloudFormation";
import { CloudFormationClient } from "../CloudFormationClient";
import {
  DescribeStacksCommand,
  DescribeStacksCommandInput,
  DescribeStacksCommandOutput,
} from "../commands/DescribeStacksCommand";
import { CloudFormationPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: CloudFormationClient,
  input: DescribeStacksCommandInput,
  ...args: any
): Promise<DescribeStacksCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeStacksCommand(input), ...args);
};
const makePagedRequest = async (
  client: CloudFormation,
  input: DescribeStacksCommandInput,
  ...args: any
): Promise<DescribeStacksCommandOutput> => {
  // @ts-ignore
  return await client.describeStacks(input, ...args);
};
export async function* describeStacksPaginate(
  config: CloudFormationPaginationConfiguration,
  input: DescribeStacksCommandInput,
  ...additionalArguments: any
): Paginator<DescribeStacksCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeStacksCommandOutput;
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
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
