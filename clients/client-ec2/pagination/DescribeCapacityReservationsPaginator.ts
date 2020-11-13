import { EC2 } from "../EC2";
import { EC2Client } from "../EC2Client";
import {
  DescribeCapacityReservationsCommand,
  DescribeCapacityReservationsCommandInput,
  DescribeCapacityReservationsCommandOutput,
} from "../commands/DescribeCapacityReservationsCommand";
import { EC2PaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: EC2Client,
  input: DescribeCapacityReservationsCommandInput,
  ...args: any
): Promise<DescribeCapacityReservationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeCapacityReservationsCommand(input), ...args);
};
const makePagedRequest = async (
  client: EC2,
  input: DescribeCapacityReservationsCommandInput,
  ...args: any
): Promise<DescribeCapacityReservationsCommandOutput> => {
  // @ts-ignore
  return await client.describeCapacityReservations(input, ...args);
};
export async function* describeCapacityReservationsPaginate(
  config: EC2PaginationConfiguration,
  input: DescribeCapacityReservationsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeCapacityReservationsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeCapacityReservationsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof EC2) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof EC2Client) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected EC2 | EC2Client");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
