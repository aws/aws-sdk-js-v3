// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  DescribeAffectedEntitiesForOrganizationCommand,
  DescribeAffectedEntitiesForOrganizationCommandInput,
  DescribeAffectedEntitiesForOrganizationCommandOutput,
} from "../commands/DescribeAffectedEntitiesForOrganizationCommand";
import { HealthClient } from "../HealthClient";
import { HealthPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: HealthClient,
  input: DescribeAffectedEntitiesForOrganizationCommandInput,
  ...args: any
): Promise<DescribeAffectedEntitiesForOrganizationCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeAffectedEntitiesForOrganizationCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateDescribeAffectedEntitiesForOrganization(
  config: HealthPaginationConfiguration,
  input: DescribeAffectedEntitiesForOrganizationCommandInput,
  ...additionalArguments: any
): Paginator<DescribeAffectedEntitiesForOrganizationCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeAffectedEntitiesForOrganizationCommandOutput;
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
