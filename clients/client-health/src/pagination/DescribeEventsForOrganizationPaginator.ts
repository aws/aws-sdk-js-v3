import { Health } from "../Health";
import { HealthClient } from "../HealthClient";
import {
  DescribeEventsForOrganizationCommand,
  DescribeEventsForOrganizationCommandInput,
  DescribeEventsForOrganizationCommandOutput,
} from "../commands/DescribeEventsForOrganizationCommand";
import { HealthPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: HealthClient,
  input: DescribeEventsForOrganizationCommandInput,
  ...args: any
): Promise<DescribeEventsForOrganizationCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeEventsForOrganizationCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Health,
  input: DescribeEventsForOrganizationCommandInput,
  ...args: any
): Promise<DescribeEventsForOrganizationCommandOutput> => {
  // @ts-ignore
  return await client.describeEventsForOrganization(input, ...args);
};
export async function* paginateDescribeEventsForOrganization(
  config: HealthPaginationConfiguration,
  input: DescribeEventsForOrganizationCommandInput,
  ...additionalArguments: any
): Paginator<DescribeEventsForOrganizationCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeEventsForOrganizationCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof Health) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof HealthClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Health | HealthClient");
    }
    yield page;
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
