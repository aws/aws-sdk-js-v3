import { Redshift } from "../Redshift";
import { RedshiftClient } from "../RedshiftClient";
import {
  DescribeClusterParametersCommand,
  DescribeClusterParametersCommandInput,
  DescribeClusterParametersCommandOutput,
} from "../commands/DescribeClusterParametersCommand";
import { RedshiftPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: RedshiftClient,
  input: DescribeClusterParametersCommandInput,
  ...args: any
): Promise<DescribeClusterParametersCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeClusterParametersCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Redshift,
  input: DescribeClusterParametersCommandInput,
  ...args: any
): Promise<DescribeClusterParametersCommandOutput> => {
  // @ts-ignore
  return await client.describeClusterParameters(input, ...args);
};
export async function* paginateDescribeClusterParameters(
  config: RedshiftPaginationConfiguration,
  input: DescribeClusterParametersCommandInput,
  ...additionalArguments: any
): Paginator<DescribeClusterParametersCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.Marker
  let token: typeof input.Marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeClusterParametersCommandOutput;
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
