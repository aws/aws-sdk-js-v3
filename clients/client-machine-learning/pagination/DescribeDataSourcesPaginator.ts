import { MachineLearning } from "../MachineLearning";
import { MachineLearningClient } from "../MachineLearningClient";
import {
  DescribeDataSourcesCommand,
  DescribeDataSourcesCommandInput,
  DescribeDataSourcesCommandOutput,
} from "../commands/DescribeDataSourcesCommand";
import { MachineLearningPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: MachineLearningClient,
  input: DescribeDataSourcesCommandInput,
  ...args: any
): Promise<DescribeDataSourcesCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeDataSourcesCommand(input), ...args);
};
const makePagedRequest = async (
  client: MachineLearning,
  input: DescribeDataSourcesCommandInput,
  ...args: any
): Promise<DescribeDataSourcesCommandOutput> => {
  // @ts-ignore
  return await client.describeDataSources(input, ...args);
};
export async function* describeDataSourcesPaginate(
  config: MachineLearningPaginationConfiguration,
  input: DescribeDataSourcesCommandInput,
  ...additionalArguments: any
): Paginator<DescribeDataSourcesCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeDataSourcesCommandOutput;
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
