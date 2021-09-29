import { Redshift } from "../Redshift";
import { RedshiftClient } from "../RedshiftClient";
import {
  DescribeEndpointAccessCommand,
  DescribeEndpointAccessCommandInput,
  DescribeEndpointAccessCommandOutput,
} from "../commands/DescribeEndpointAccessCommand";
import { RedshiftPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: RedshiftClient,
  input: DescribeEndpointAccessCommandInput,
  ...args: any
): Promise<DescribeEndpointAccessCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeEndpointAccessCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Redshift,
  input: DescribeEndpointAccessCommandInput,
  ...args: any
): Promise<DescribeEndpointAccessCommandOutput> => {
  // @ts-ignore
  return await client.describeEndpointAccess(input, ...args);
};
export async function* paginateDescribeEndpointAccess(
  config: RedshiftPaginationConfiguration,
  input: DescribeEndpointAccessCommandInput,
  ...additionalArguments: any
): Paginator<DescribeEndpointAccessCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.Marker
  let token: typeof input.Marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeEndpointAccessCommandOutput;
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
