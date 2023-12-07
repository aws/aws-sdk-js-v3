// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListSoftwareSetsCommand,
  ListSoftwareSetsCommandInput,
  ListSoftwareSetsCommandOutput,
} from "../commands/ListSoftwareSetsCommand";
import { WorkSpacesThinClientClient } from "../WorkSpacesThinClientClient";
import { WorkSpacesThinClientPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: WorkSpacesThinClientClient,
  input: ListSoftwareSetsCommandInput,
  ...args: any
): Promise<ListSoftwareSetsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListSoftwareSetsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListSoftwareSets(
  config: WorkSpacesThinClientPaginationConfiguration,
  input: ListSoftwareSetsCommandInput,
  ...additionalArguments: any
): Paginator<ListSoftwareSetsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListSoftwareSetsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof WorkSpacesThinClientClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected WorkSpacesThinClient | WorkSpacesThinClientClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
