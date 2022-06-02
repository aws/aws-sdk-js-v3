// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListComponentProvisionedResourcesCommand,
  ListComponentProvisionedResourcesCommandInput,
  ListComponentProvisionedResourcesCommandOutput,
} from "../commands/ListComponentProvisionedResourcesCommand";
import { Proton } from "../Proton";
import { ProtonClient } from "../ProtonClient";
import { ProtonPaginationConfiguration } from "./Interfaces";

/**
 * @private
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
 * @private
 */
const makePagedRequest = async (
  client: Proton,
  input: ListComponentProvisionedResourcesCommandInput,
  ...args: any
): Promise<ListComponentProvisionedResourcesCommandOutput> => {
  // @ts-ignore
  return await client.listComponentProvisionedResources(input, ...args);
};
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
    if (config.client instanceof Proton) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ProtonClient) {
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
