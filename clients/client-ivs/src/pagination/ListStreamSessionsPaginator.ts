// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListStreamSessionsCommand,
  ListStreamSessionsCommandInput,
  ListStreamSessionsCommandOutput,
} from "../commands/ListStreamSessionsCommand";
import { IvsClient } from "../IvsClient";
import { IvsPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: IvsClient,
  input: ListStreamSessionsCommandInput,
  ...args: any
): Promise<ListStreamSessionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListStreamSessionsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListStreamSessions(
  config: IvsPaginationConfiguration,
  input: ListStreamSessionsCommandInput,
  ...additionalArguments: any
): Paginator<ListStreamSessionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListStreamSessionsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof IvsClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Ivs | IvsClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
