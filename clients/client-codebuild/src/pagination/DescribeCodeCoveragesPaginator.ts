// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { CodeBuild } from "../CodeBuild";
import { CodeBuildClient } from "../CodeBuildClient";
import {
  DescribeCodeCoveragesCommand,
  DescribeCodeCoveragesCommandInput,
  DescribeCodeCoveragesCommandOutput,
} from "../commands/DescribeCodeCoveragesCommand";
import { CodeBuildPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: CodeBuildClient,
  input: DescribeCodeCoveragesCommandInput,
  ...args: any
): Promise<DescribeCodeCoveragesCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeCodeCoveragesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: CodeBuild,
  input: DescribeCodeCoveragesCommandInput,
  ...args: any
): Promise<DescribeCodeCoveragesCommandOutput> => {
  // @ts-ignore
  return await client.describeCodeCoverages(input, ...args);
};
export async function* paginateDescribeCodeCoverages(
  config: CodeBuildPaginationConfiguration,
  input: DescribeCodeCoveragesCommandInput,
  ...additionalArguments: any
): Paginator<DescribeCodeCoveragesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeCodeCoveragesCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof CodeBuild) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof CodeBuildClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected CodeBuild | CodeBuildClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
