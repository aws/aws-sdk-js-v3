import { RDS } from "../RDS";
import { RDSClient } from "../RDSClient";
import {
  DescribeReservedDBInstancesOfferingsCommand,
  DescribeReservedDBInstancesOfferingsCommandInput,
  DescribeReservedDBInstancesOfferingsCommandOutput,
} from "../commands/DescribeReservedDBInstancesOfferingsCommand";
import { RDSPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: RDSClient,
  input: DescribeReservedDBInstancesOfferingsCommandInput,
  ...args: any
): Promise<DescribeReservedDBInstancesOfferingsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeReservedDBInstancesOfferingsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: RDS,
  input: DescribeReservedDBInstancesOfferingsCommandInput,
  ...args: any
): Promise<DescribeReservedDBInstancesOfferingsCommandOutput> => {
  // @ts-ignore
  return await client.describeReservedDBInstancesOfferings(input, ...args);
};
export async function* paginateDescribeReservedDBInstancesOfferings(
  config: RDSPaginationConfiguration,
  input: DescribeReservedDBInstancesOfferingsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeReservedDBInstancesOfferingsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.Marker
  let token: typeof input.Marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeReservedDBInstancesOfferingsCommandOutput;
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
