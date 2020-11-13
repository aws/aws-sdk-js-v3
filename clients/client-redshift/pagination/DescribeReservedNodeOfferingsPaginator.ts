import { Redshift } from "../Redshift";
import { RedshiftClient } from "../RedshiftClient";
import {
  DescribeReservedNodeOfferingsCommand,
  DescribeReservedNodeOfferingsCommandInput,
  DescribeReservedNodeOfferingsCommandOutput,
} from "../commands/DescribeReservedNodeOfferingsCommand";
import { RedshiftPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: RedshiftClient,
  input: DescribeReservedNodeOfferingsCommandInput,
  ...args: any
): Promise<DescribeReservedNodeOfferingsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeReservedNodeOfferingsCommand(input), ...args);
};
const makePagedRequest = async (
  client: Redshift,
  input: DescribeReservedNodeOfferingsCommandInput,
  ...args: any
): Promise<DescribeReservedNodeOfferingsCommandOutput> => {
  // @ts-ignore
  return await client.describeReservedNodeOfferings(input, ...args);
};
export async function* describeReservedNodeOfferingsPaginate(
  config: RedshiftPaginationConfiguration,
  input: DescribeReservedNodeOfferingsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeReservedNodeOfferingsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeReservedNodeOfferingsCommandOutput;
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
