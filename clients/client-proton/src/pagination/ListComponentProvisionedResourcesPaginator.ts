// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListComponentProvisionedResourcesCommand,
  ListComponentProvisionedResourcesCommandInput,
  ListComponentProvisionedResourcesCommandOutput,
} from "../commands/ListComponentProvisionedResourcesCommand";
import { ProtonClient } from "../ProtonClient";
import { ProtonPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: ProtonClient,
  input: ListComponentProvisionedResourcesCommandInput,
  ...args: any
): Promise<ListComponentProvisionedResourcesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListComponentProvisionedResourcesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListComponentProvisionedResources(
  config: ProtonPaginationConfiguration,
  input: ListComponentProvisionedResourcesCommandInput,
  ...additionalArguments: any
): Paginator<ListComponentProvisionedResourcesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListComponentProvisionedResourcesCommandOutput;
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
