// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  DescribeEcsClustersCommand,
  DescribeEcsClustersCommandInput,
  DescribeEcsClustersCommandOutput,
} from "../commands/DescribeEcsClustersCommand";
import { OpsWorks } from "../OpsWorks";
import { OpsWorksClient } from "../OpsWorksClient";
import { OpsWorksPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: OpsWorksClient,
  input: DescribeEcsClustersCommandInput,
  ...args: any
): Promise<DescribeEcsClustersCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeEcsClustersCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: OpsWorks,
  input: DescribeEcsClustersCommandInput,
  ...args: any
): Promise<DescribeEcsClustersCommandOutput> => {
  // @ts-ignore
  return await client.describeEcsClusters(input, ...args);
};
export async function* paginateDescribeEcsClusters(
  config: OpsWorksPaginationConfiguration,
  input: DescribeEcsClustersCommandInput,
  ...additionalArguments: any
): Paginator<DescribeEcsClustersCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeEcsClustersCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof OpsWorks) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof OpsWorksClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected OpsWorks | OpsWorksClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
