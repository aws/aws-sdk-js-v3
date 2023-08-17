// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  DescribeAffectedEntitiesCommand,
  DescribeAffectedEntitiesCommandInput,
  DescribeAffectedEntitiesCommandOutput,
} from "../commands/DescribeAffectedEntitiesCommand";
import { HealthClient } from "../HealthClient";
import { HealthPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: HealthClient,
  input: DescribeAffectedEntitiesCommandInput,
  ...args: any
): Promise<DescribeAffectedEntitiesCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeAffectedEntitiesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateDescribeAffectedEntities(
  config: HealthPaginationConfiguration,
  input: DescribeAffectedEntitiesCommandInput,
  ...additionalArguments: any
): Paginator<DescribeAffectedEntitiesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeAffectedEntitiesCommandOutput;
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
