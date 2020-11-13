import { MachineLearning } from "../MachineLearning";
import { MachineLearningClient } from "../MachineLearningClient";
import {
  DescribeMLModelsCommand,
  DescribeMLModelsCommandInput,
  DescribeMLModelsCommandOutput,
} from "../commands/DescribeMLModelsCommand";
import { MachineLearningPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: MachineLearningClient,
  input: DescribeMLModelsCommandInput,
  ...args: any
): Promise<DescribeMLModelsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeMLModelsCommand(input), ...args);
};
const makePagedRequest = async (
  client: MachineLearning,
  input: DescribeMLModelsCommandInput,
  ...args: any
): Promise<DescribeMLModelsCommandOutput> => {
  // @ts-ignore
  return await client.describeMLModels(input, ...args);
};
export async function* describeMLModelsPaginate(
  config: MachineLearningPaginationConfiguration,
  input: DescribeMLModelsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeMLModelsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
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
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
