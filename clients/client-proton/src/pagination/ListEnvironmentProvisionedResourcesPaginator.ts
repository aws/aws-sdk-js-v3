// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListEnvironmentProvisionedResourcesCommand,
  ListEnvironmentProvisionedResourcesCommandInput,
  ListEnvironmentProvisionedResourcesCommandOutput,
} from "../commands/ListEnvironmentProvisionedResourcesCommand";
import { ProtonClient } from "../ProtonClient";
import { ProtonPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: ProtonClient,
  input: ListEnvironmentProvisionedResourcesCommandInput,
  ...args: any
): Promise<ListEnvironmentProvisionedResourcesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListEnvironmentProvisionedResourcesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListEnvironmentProvisionedResources(
  config: ProtonPaginationConfiguration,
  input: ListEnvironmentProvisionedResourcesCommandInput,
  ...additionalArguments: any
): Paginator<ListEnvironmentProvisionedResourcesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListEnvironmentProvisionedResourcesCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    if (config.client instanceof ProtonClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Proton | ProtonClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
