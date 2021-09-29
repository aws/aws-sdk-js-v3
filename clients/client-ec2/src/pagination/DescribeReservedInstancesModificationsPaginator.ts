import { EC2 } from "../EC2";
import { EC2Client } from "../EC2Client";
import {
  DescribeReservedInstancesModificationsCommand,
  DescribeReservedInstancesModificationsCommandInput,
  DescribeReservedInstancesModificationsCommandOutput,
} from "../commands/DescribeReservedInstancesModificationsCommand";
import { EC2PaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: EC2Client,
  input: DescribeReservedInstancesModificationsCommandInput,
  ...args: any
): Promise<DescribeReservedInstancesModificationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeReservedInstancesModificationsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: EC2,
  input: DescribeReservedInstancesModificationsCommandInput,
  ...args: any
): Promise<DescribeReservedInstancesModificationsCommandOutput> => {
  // @ts-ignore
  return await client.describeReservedInstancesModifications(input, ...args);
};
export async function* paginateDescribeReservedInstancesModifications(
  config: EC2PaginationConfiguration,
  input: DescribeReservedInstancesModificationsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeReservedInstancesModificationsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeReservedInstancesModificationsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
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
