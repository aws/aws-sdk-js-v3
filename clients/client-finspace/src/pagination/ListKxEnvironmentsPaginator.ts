// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListKxEnvironmentsCommand,
  ListKxEnvironmentsCommandInput,
  ListKxEnvironmentsCommandOutput,
} from "../commands/ListKxEnvironmentsCommand";
import { FinspaceClient } from "../FinspaceClient";
import { FinspacePaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: FinspaceClient,
  input: ListKxEnvironmentsCommandInput,
  ...args: any
): Promise<ListKxEnvironmentsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListKxEnvironmentsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListKxEnvironments(
  config: FinspacePaginationConfiguration,
  input: ListKxEnvironmentsCommandInput,
  ...additionalArguments: any
): Paginator<ListKxEnvironmentsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListKxEnvironmentsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof FinspaceClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Finspace | FinspaceClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
