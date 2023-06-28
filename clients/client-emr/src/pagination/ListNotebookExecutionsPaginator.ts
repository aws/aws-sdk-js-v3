// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListNotebookExecutionsCommand,
  ListNotebookExecutionsCommandInput,
  ListNotebookExecutionsCommandOutput,
} from "../commands/ListNotebookExecutionsCommand";
import { EMRClient } from "../EMRClient";
import { EMRPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: EMRClient,
  input: ListNotebookExecutionsCommandInput,
  ...args: any
): Promise<ListNotebookExecutionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListNotebookExecutionsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListNotebookExecutions(
  config: EMRPaginationConfiguration,
  input: ListNotebookExecutionsCommandInput,
  ...additionalArguments: any
): Paginator<ListNotebookExecutionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.Marker
  let token: typeof input.Marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListNotebookExecutionsCommandOutput;
  while (hasNext) {
    input.Marker = token;
    if (config.client instanceof EMRClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected EMR | EMRClient");
    }
    yield page;
    const prevToken = token;
    token = page.Marker;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
