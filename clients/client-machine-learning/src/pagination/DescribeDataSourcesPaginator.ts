// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  DescribeDataSourcesCommand,
  DescribeDataSourcesCommandInput,
  DescribeDataSourcesCommandOutput,
} from "../commands/DescribeDataSourcesCommand";
import { MachineLearningClient } from "../MachineLearningClient";
import { MachineLearningPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: MachineLearningClient,
  input: DescribeDataSourcesCommandInput,
  ...args: any
): Promise<DescribeDataSourcesCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeDataSourcesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateDescribeDataSources(
  config: MachineLearningPaginationConfiguration,
  input: DescribeDataSourcesCommandInput,
  ...additionalArguments: any
): Paginator<DescribeDataSourcesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeDataSourcesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["Limit"] = config.pageSize;
    if (config.client instanceof MachineLearningClient) {
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
