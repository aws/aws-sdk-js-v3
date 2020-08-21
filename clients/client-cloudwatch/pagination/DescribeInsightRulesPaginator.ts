import { CloudWatch } from "../CloudWatch";
import { CloudWatchClient } from "../CloudWatchClient";
import {
  DescribeInsightRulesCommand,
  DescribeInsightRulesCommandInput,
  DescribeInsightRulesCommandOutput,
} from "../commands/DescribeInsightRulesCommand";
import { CloudWatchPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: CloudWatchClient,
  input: DescribeInsightRulesCommandInput,
  ...args: any
): Promise<DescribeInsightRulesCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeInsightRulesCommand(input, ...args));
};
const makePagedRequest = async (
  client: CloudWatch,
  input: DescribeInsightRulesCommandInput,
  ...args: any
): Promise<DescribeInsightRulesCommandOutput> => {
  // @ts-ignore
  return await client.describeInsightRules(input, ...args);
};
export async function* describeInsightRulesPaginate(
  config: CloudWatchPaginationConfiguration,
  input: DescribeInsightRulesCommandInput,
  ...additionalArguments: any
): Paginator<DescribeInsightRulesCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: DescribeInsightRulesCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof CloudWatch) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof CloudWatchClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected CloudWatch | CloudWatchClient");
    }
    yield page;
    token = page["NextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
