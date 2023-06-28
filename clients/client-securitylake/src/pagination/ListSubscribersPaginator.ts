// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListSubscribersCommand,
  ListSubscribersCommandInput,
  ListSubscribersCommandOutput,
} from "../commands/ListSubscribersCommand";
import { SecurityLakeClient } from "../SecurityLakeClient";
import { SecurityLakePaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: SecurityLakeClient,
  input: ListSubscribersCommandInput,
  ...args: any
): Promise<ListSubscribersCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListSubscribersCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListSubscribers(
  config: SecurityLakePaginationConfiguration,
  input: ListSubscribersCommandInput,
  ...additionalArguments: any
): Paginator<ListSubscribersCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListSubscribersCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof SecurityLakeClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SecurityLake | SecurityLakeClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
