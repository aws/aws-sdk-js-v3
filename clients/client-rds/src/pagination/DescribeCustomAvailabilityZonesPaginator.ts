import { RDS } from "../RDS";
import { RDSClient } from "../RDSClient";
import {
  DescribeCustomAvailabilityZonesCommand,
  DescribeCustomAvailabilityZonesCommandInput,
  DescribeCustomAvailabilityZonesCommandOutput,
} from "../commands/DescribeCustomAvailabilityZonesCommand";
import { RDSPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: RDSClient,
  input: DescribeCustomAvailabilityZonesCommandInput,
  ...args: any
): Promise<DescribeCustomAvailabilityZonesCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeCustomAvailabilityZonesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: RDS,
  input: DescribeCustomAvailabilityZonesCommandInput,
  ...args: any
): Promise<DescribeCustomAvailabilityZonesCommandOutput> => {
  // @ts-ignore
  return await client.describeCustomAvailabilityZones(input, ...args);
};
export async function* paginateDescribeCustomAvailabilityZones(
  config: RDSPaginationConfiguration,
  input: DescribeCustomAvailabilityZonesCommandInput,
  ...additionalArguments: any
): Paginator<DescribeCustomAvailabilityZonesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.Marker
  let token: typeof input.Marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeCustomAvailabilityZonesCommandOutput;
  while (hasNext) {
    input.Marker = token;
    input["MaxRecords"] = config.pageSize;
    if (config.client instanceof RDS) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof RDSClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected RDS | RDSClient");
    }
    yield page;
    token = page.Marker;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
