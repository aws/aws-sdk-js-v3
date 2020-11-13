import { Redshift } from "../Redshift";
import { RedshiftClient } from "../RedshiftClient";
import {
  DescribeClusterSecurityGroupsCommand,
  DescribeClusterSecurityGroupsCommandInput,
  DescribeClusterSecurityGroupsCommandOutput,
} from "../commands/DescribeClusterSecurityGroupsCommand";
import { RedshiftPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: RedshiftClient,
  input: DescribeClusterSecurityGroupsCommandInput,
  ...args: any
): Promise<DescribeClusterSecurityGroupsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeClusterSecurityGroupsCommand(input), ...args);
};
const makePagedRequest = async (
  client: Redshift,
  input: DescribeClusterSecurityGroupsCommandInput,
  ...args: any
): Promise<DescribeClusterSecurityGroupsCommandOutput> => {
  // @ts-ignore
  return await client.describeClusterSecurityGroups(input, ...args);
};
export async function* describeClusterSecurityGroupsPaginate(
  config: RedshiftPaginationConfiguration,
  input: DescribeClusterSecurityGroupsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeClusterSecurityGroupsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeClusterSecurityGroupsCommandOutput;
  while (hasNext) {
    input.Marker = token;
    input["MaxRecords"] = config.pageSize;
    if (config.client instanceof Redshift) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof RedshiftClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Redshift | RedshiftClient");
    }
    yield page;
    token = page.Marker;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
