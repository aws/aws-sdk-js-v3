// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListProjectsCommand,
  ListProjectsCommandInput,
  ListProjectsCommandOutput,
} from "../commands/ListProjectsCommand";
import { IoT1ClickProjects } from "../IoT1ClickProjects";
import { IoT1ClickProjectsClient } from "../IoT1ClickProjectsClient";
import { IoT1ClickProjectsPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: IoT1ClickProjectsClient,
  input: ListProjectsCommandInput,
  ...args: any
): Promise<ListProjectsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListProjectsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: IoT1ClickProjects,
  input: ListProjectsCommandInput,
  ...args: any
): Promise<ListProjectsCommandOutput> => {
  // @ts-ignore
  return await client.listProjects(input, ...args);
};
export async function* paginateListProjects(
  config: IoT1ClickProjectsPaginationConfiguration,
  input: ListProjectsCommandInput,
  ...additionalArguments: any
): Paginator<ListProjectsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListProjectsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof IoT1ClickProjects) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof IoT1ClickProjectsClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected IoT1ClickProjects | IoT1ClickProjectsClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
