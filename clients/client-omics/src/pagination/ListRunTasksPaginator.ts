// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListRunTasksCommand,
  ListRunTasksCommandInput,
  ListRunTasksCommandOutput,
} from "../commands/ListRunTasksCommand";
import { Omics } from "../Omics";
import { OmicsClient } from "../OmicsClient";
import { OmicsPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: OmicsClient,
  input: ListRunTasksCommandInput,
  ...args: any
): Promise<ListRunTasksCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListRunTasksCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Omics,
  input: ListRunTasksCommandInput,
  ...args: any
): Promise<ListRunTasksCommandOutput> => {
  // @ts-ignore
  return await client.listRunTasks(input, ...args);
};
export async function* paginateListRunTasks(
  config: OmicsPaginationConfiguration,
  input: ListRunTasksCommandInput,
  ...additionalArguments: any
): Paginator<ListRunTasksCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.startingToken
  let token: typeof input.startingToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListRunTasksCommandOutput;
  while (hasNext) {
    input.startingToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof Omics) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof OmicsClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Omics | OmicsClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
