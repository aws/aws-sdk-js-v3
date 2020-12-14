import { Health } from "../Health";
import { HealthClient } from "../HealthClient";
import {
  DescribeAffectedAccountsForOrganizationCommand,
  DescribeAffectedAccountsForOrganizationCommandInput,
  DescribeAffectedAccountsForOrganizationCommandOutput,
} from "../commands/DescribeAffectedAccountsForOrganizationCommand";
import { HealthPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: HealthClient,
  input: DescribeAffectedAccountsForOrganizationCommandInput,
  ...args: any
): Promise<DescribeAffectedAccountsForOrganizationCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeAffectedAccountsForOrganizationCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Health,
  input: DescribeAffectedAccountsForOrganizationCommandInput,
  ...args: any
): Promise<DescribeAffectedAccountsForOrganizationCommandOutput> => {
  // @ts-ignore
  return await client.describeAffectedAccountsForOrganization(input, ...args);
};
export async function* paginateDescribeAffectedAccountsForOrganization(
  config: HealthPaginationConfiguration,
  input: DescribeAffectedAccountsForOrganizationCommandInput,
  ...additionalArguments: any
): Paginator<DescribeAffectedAccountsForOrganizationCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeAffectedAccountsForOrganizationCommandOutput;
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
