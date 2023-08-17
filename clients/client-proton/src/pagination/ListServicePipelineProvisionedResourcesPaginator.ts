// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListServicePipelineProvisionedResourcesCommand,
  ListServicePipelineProvisionedResourcesCommandInput,
  ListServicePipelineProvisionedResourcesCommandOutput,
} from "../commands/ListServicePipelineProvisionedResourcesCommand";
import { ProtonClient } from "../ProtonClient";
import { ProtonPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: ProtonClient,
  input: ListServicePipelineProvisionedResourcesCommandInput,
  ...args: any
): Promise<ListServicePipelineProvisionedResourcesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListServicePipelineProvisionedResourcesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListServicePipelineProvisionedResources(
  config: ProtonPaginationConfiguration,
  input: ListServicePipelineProvisionedResourcesCommandInput,
  ...additionalArguments: any
): Paginator<ListServicePipelineProvisionedResourcesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListServicePipelineProvisionedResourcesCommandOutput;
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
