import { Redshift } from "../Redshift";
import { RedshiftClient } from "../RedshiftClient";
import {
  DescribeClusterSubnetGroupsCommand,
  DescribeClusterSubnetGroupsCommandInput,
  DescribeClusterSubnetGroupsCommandOutput,
} from "../commands/DescribeClusterSubnetGroupsCommand";
import { RedshiftPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: RedshiftClient,
  input: DescribeClusterSubnetGroupsCommandInput,
  ...args: any
): Promise<DescribeClusterSubnetGroupsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeClusterSubnetGroupsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Redshift,
  input: DescribeClusterSubnetGroupsCommandInput,
  ...args: any
): Promise<DescribeClusterSubnetGroupsCommandOutput> => {
  // @ts-ignore
  return await client.describeClusterSubnetGroups(input, ...args);
};
export async function* paginateDescribeClusterSubnetGroups(
  config: RedshiftPaginationConfiguration,
  input: DescribeClusterSubnetGroupsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeClusterSubnetGroupsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.Marker
  let token: typeof input.Marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeClusterSubnetGroupsCommandOutput;
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
