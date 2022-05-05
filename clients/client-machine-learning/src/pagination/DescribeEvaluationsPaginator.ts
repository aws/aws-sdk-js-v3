// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  DescribeEvaluationsCommand,
  DescribeEvaluationsCommandInput,
  DescribeEvaluationsCommandOutput,
} from "../commands/DescribeEvaluationsCommand";
import { MachineLearning } from "../MachineLearning";
import { MachineLearningClient } from "../MachineLearningClient";
import { MachineLearningPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: MachineLearningClient,
  input: DescribeEvaluationsCommandInput,
  ...args: any
): Promise<DescribeEvaluationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeEvaluationsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: MachineLearning,
  input: DescribeEvaluationsCommandInput,
  ...args: any
): Promise<DescribeEvaluationsCommandOutput> => {
  // @ts-ignore
  return await client.describeEvaluations(input, ...args);
};
export async function* paginateDescribeEvaluations(
  config: MachineLearningPaginationConfiguration,
  input: DescribeEvaluationsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeEvaluationsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeEvaluationsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["Limit"] = config.pageSize;
    if (config.client instanceof MachineLearning) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof MachineLearningClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected MachineLearning | MachineLearningClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
