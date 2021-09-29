import { RDS } from "../RDS";
import { RDSClient } from "../RDSClient";
import {
  DescribeEventSubscriptionsCommand,
  DescribeEventSubscriptionsCommandInput,
  DescribeEventSubscriptionsCommandOutput,
} from "../commands/DescribeEventSubscriptionsCommand";
import { RDSPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: RDSClient,
  input: DescribeEventSubscriptionsCommandInput,
  ...args: any
): Promise<DescribeEventSubscriptionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeEventSubscriptionsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: RDS,
  input: DescribeEventSubscriptionsCommandInput,
  ...args: any
): Promise<DescribeEventSubscriptionsCommandOutput> => {
  // @ts-ignore
  return await client.describeEventSubscriptions(input, ...args);
};
export async function* paginateDescribeEventSubscriptions(
  config: RDSPaginationConfiguration,
  input: DescribeEventSubscriptionsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeEventSubscriptionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.Marker
  let token: typeof input.Marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeEventSubscriptionsCommandOutput;
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
