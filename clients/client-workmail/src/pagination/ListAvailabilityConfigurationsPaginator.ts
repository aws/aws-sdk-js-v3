// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListAvailabilityConfigurationsCommand,
  ListAvailabilityConfigurationsCommandInput,
  ListAvailabilityConfigurationsCommandOutput,
} from "../commands/ListAvailabilityConfigurationsCommand";
import { WorkMailClient } from "../WorkMailClient";
import { WorkMailPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: WorkMailClient,
  input: ListAvailabilityConfigurationsCommandInput,
  ...args: any
): Promise<ListAvailabilityConfigurationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAvailabilityConfigurationsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListAvailabilityConfigurations(
  config: WorkMailPaginationConfiguration,
  input: ListAvailabilityConfigurationsCommandInput,
  ...additionalArguments: any
): Paginator<ListAvailabilityConfigurationsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListAvailabilityConfigurationsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof WorkMailClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected WorkMail | WorkMailClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
