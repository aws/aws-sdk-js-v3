// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  DescribeRepositoriesCommand,
  DescribeRepositoriesCommandInput,
  DescribeRepositoriesCommandOutput,
} from "../commands/DescribeRepositoriesCommand";
import { ECR } from "../ECR";
import { ECRClient } from "../ECRClient";
import { ECRPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ECRClient,
  input: DescribeRepositoriesCommandInput,
  ...args: any
): Promise<DescribeRepositoriesCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeRepositoriesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: ECR,
  input: DescribeRepositoriesCommandInput,
  ...args: any
): Promise<DescribeRepositoriesCommandOutput> => {
  // @ts-ignore
  return await client.describeRepositories(input, ...args);
};
export async function* paginateDescribeRepositories(
  config: ECRPaginationConfiguration,
  input: DescribeRepositoriesCommandInput,
  ...additionalArguments: any
): Paginator<DescribeRepositoriesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeRepositoriesCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof ECR) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ECRClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ECR | ECRClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
