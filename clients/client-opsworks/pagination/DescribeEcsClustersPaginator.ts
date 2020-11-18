import { OpsWorks } from "../OpsWorks";
import { OpsWorksClient } from "../OpsWorksClient";
import {
  DescribeEcsClustersCommand,
  DescribeEcsClustersCommandInput,
  DescribeEcsClustersCommandOutput,
} from "../commands/DescribeEcsClustersCommand";
import { OpsWorksPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: OpsWorksClient,
  input: DescribeEcsClustersCommandInput,
  ...args: any
): Promise<DescribeEcsClustersCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeEcsClustersCommand(input), ...args);
};
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
  let token: string | undefined = config.startingToken || undefined;
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
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
