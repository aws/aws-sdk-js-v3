// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  DescribeMLModelsCommand,
  DescribeMLModelsCommandInput,
  DescribeMLModelsCommandOutput,
} from "../commands/DescribeMLModelsCommand";
import { MachineLearning } from "../MachineLearning";
import { MachineLearningClient } from "../MachineLearningClient";
import { MachineLearningPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: MachineLearningClient,
  input: DescribeMLModelsCommandInput,
  ...args: any
): Promise<DescribeMLModelsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeMLModelsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: MachineLearning,
  input: DescribeMLModelsCommandInput,
  ...args: any
): Promise<DescribeMLModelsCommandOutput> => {
  // @ts-ignore
  return await client.describeMLModels(input, ...args);
};
export async function* paginateDescribeMLModels(
  config: MachineLearningPaginationConfiguration,
  input: DescribeMLModelsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeMLModelsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeMLModelsCommandOutput;
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
