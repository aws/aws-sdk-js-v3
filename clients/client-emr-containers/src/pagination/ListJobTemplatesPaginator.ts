// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListJobTemplatesCommand,
  ListJobTemplatesCommandInput,
  ListJobTemplatesCommandOutput,
} from "../commands/ListJobTemplatesCommand";
import { EMRContainers } from "../EMRContainers";
import { EMRContainersClient } from "../EMRContainersClient";
import { EMRContainersPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: EMRContainersClient,
  input: ListJobTemplatesCommandInput,
  ...args: any
): Promise<ListJobTemplatesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListJobTemplatesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: EMRContainers,
  input: ListJobTemplatesCommandInput,
  ...args: any
): Promise<ListJobTemplatesCommandOutput> => {
  // @ts-ignore
  return await client.listJobTemplates(input, ...args);
};
export async function* paginateListJobTemplates(
  config: EMRContainersPaginationConfiguration,
  input: ListJobTemplatesCommandInput,
  ...additionalArguments: any
): Paginator<ListJobTemplatesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListJobTemplatesCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof EMRContainers) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof EMRContainersClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected EMRContainers | EMRContainersClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
