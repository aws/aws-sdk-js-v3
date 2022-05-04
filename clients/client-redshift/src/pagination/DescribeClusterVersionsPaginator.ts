// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  DescribeClusterVersionsCommand,
  DescribeClusterVersionsCommandInput,
  DescribeClusterVersionsCommandOutput,
} from "../commands/DescribeClusterVersionsCommand";
import { Redshift } from "../Redshift";
import { RedshiftClient } from "../RedshiftClient";
import { RedshiftPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: RedshiftClient,
  input: DescribeClusterVersionsCommandInput,
  ...args: any
): Promise<DescribeClusterVersionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeClusterVersionsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Redshift,
  input: DescribeClusterVersionsCommandInput,
  ...args: any
): Promise<DescribeClusterVersionsCommandOutput> => {
  // @ts-ignore
  return await client.describeClusterVersions(input, ...args);
};
export async function* paginateDescribeClusterVersions(
  config: RedshiftPaginationConfiguration,
  input: DescribeClusterVersionsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeClusterVersionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.Marker
  let token: typeof input.Marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeClusterVersionsCommandOutput;
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
    const prevToken = token;
    token = page.Marker;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
