// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  DescribeOrganizationConfigurationCommand,
  DescribeOrganizationConfigurationCommandInput,
  DescribeOrganizationConfigurationCommandOutput,
} from "../commands/DescribeOrganizationConfigurationCommand";
import { GuardDutyClient } from "../GuardDutyClient";
import { GuardDutyPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: GuardDutyClient,
  input: DescribeOrganizationConfigurationCommandInput,
  ...args: any
): Promise<DescribeOrganizationConfigurationCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeOrganizationConfigurationCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateDescribeOrganizationConfiguration(
  config: GuardDutyPaginationConfiguration,
  input: DescribeOrganizationConfigurationCommandInput,
  ...additionalArguments: any
): Paginator<DescribeOrganizationConfigurationCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeOrganizationConfigurationCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof GuardDutyClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected GuardDuty | GuardDutyClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
