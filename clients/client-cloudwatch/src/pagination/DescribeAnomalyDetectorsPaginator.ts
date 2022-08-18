// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { CloudWatch } from "../CloudWatch";
import { CloudWatchClient } from "../CloudWatchClient";
import {
  DescribeAnomalyDetectorsCommand,
  DescribeAnomalyDetectorsCommandInput,
  DescribeAnomalyDetectorsCommandOutput,
} from "../commands/DescribeAnomalyDetectorsCommand";
import { CloudWatchPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: CloudWatchClient,
  input: DescribeAnomalyDetectorsCommandInput,
  ...args: any
): Promise<DescribeAnomalyDetectorsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeAnomalyDetectorsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: CloudWatch,
  input: DescribeAnomalyDetectorsCommandInput,
  ...args: any
): Promise<DescribeAnomalyDetectorsCommandOutput> => {
  // @ts-ignore
  return await client.describeAnomalyDetectors(input, ...args);
};
export async function* paginateDescribeAnomalyDetectors(
  config: CloudWatchPaginationConfiguration,
  input: DescribeAnomalyDetectorsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeAnomalyDetectorsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeAnomalyDetectorsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof CloudWatch) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof CloudWatchClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected CloudWatch | CloudWatchClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
