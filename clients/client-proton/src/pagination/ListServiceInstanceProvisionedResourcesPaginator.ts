// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListServiceInstanceProvisionedResourcesCommand,
  ListServiceInstanceProvisionedResourcesCommandInput,
  ListServiceInstanceProvisionedResourcesCommandOutput,
} from "../commands/ListServiceInstanceProvisionedResourcesCommand";
import { Proton } from "../Proton";
import { ProtonClient } from "../ProtonClient";
import { ProtonPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ProtonClient,
  input: ListServiceInstanceProvisionedResourcesCommandInput,
  ...args: any
): Promise<ListServiceInstanceProvisionedResourcesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListServiceInstanceProvisionedResourcesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Proton,
  input: ListServiceInstanceProvisionedResourcesCommandInput,
  ...args: any
): Promise<ListServiceInstanceProvisionedResourcesCommandOutput> => {
  // @ts-ignore
  return await client.listServiceInstanceProvisionedResources(input, ...args);
};
export async function* paginateListServiceInstanceProvisionedResources(
  config: ProtonPaginationConfiguration,
  input: ListServiceInstanceProvisionedResourcesCommandInput,
  ...additionalArguments: any
): Paginator<ListServiceInstanceProvisionedResourcesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListServiceInstanceProvisionedResourcesCommandOutput;
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
