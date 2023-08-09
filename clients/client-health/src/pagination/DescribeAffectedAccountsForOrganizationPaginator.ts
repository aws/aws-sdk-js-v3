// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  DescribeAffectedAccountsForOrganizationCommand,
  DescribeAffectedAccountsForOrganizationCommandInput,
  DescribeAffectedAccountsForOrganizationCommandOutput,
} from "../commands/DescribeAffectedAccountsForOrganizationCommand";
import { HealthClient } from "../HealthClient";
import { HealthPaginationConfiguration } from "./Interfaces";

/**
 * @internal
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
 * @public
 */
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
    if (config.client instanceof HealthClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Health | HealthClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
