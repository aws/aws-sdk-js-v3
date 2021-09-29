import { EMR } from "../EMR";
import { EMRClient } from "../EMRClient";
import {
  ListNotebookExecutionsCommand,
  ListNotebookExecutionsCommandInput,
  ListNotebookExecutionsCommandOutput,
} from "../commands/ListNotebookExecutionsCommand";
import { EMRPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
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
 * @private
 */
const makePagedRequest = async (
  client: EMR,
  input: ListNotebookExecutionsCommandInput,
  ...args: any
): Promise<ListNotebookExecutionsCommandOutput> => {
  // @ts-ignore
  return await client.listNotebookExecutions(input, ...args);
};
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
    if (config.client instanceof EMR) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof EMRClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected EMR | EMRClient");
    }
    yield page;
    token = page.Marker;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
