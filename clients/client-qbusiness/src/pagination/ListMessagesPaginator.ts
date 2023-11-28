// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListMessagesCommand,
  ListMessagesCommandInput,
  ListMessagesCommandOutput,
} from "../commands/ListMessagesCommand";
import { QBusinessClient } from "../QBusinessClient";
import { QBusinessPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: QBusinessClient,
  input: ListMessagesCommandInput,
  ...args: any
): Promise<ListMessagesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListMessagesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListMessages(
  config: QBusinessPaginationConfiguration,
  input: ListMessagesCommandInput,
  ...additionalArguments: any
): Paginator<ListMessagesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListMessagesCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof QBusinessClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected QBusiness | QBusinessClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
