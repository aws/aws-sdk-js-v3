// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListRetrieversCommand,
  ListRetrieversCommandInput,
  ListRetrieversCommandOutput,
} from "../commands/ListRetrieversCommand";
import { QBusinessClient } from "../QBusinessClient";
import { QBusinessPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: QBusinessClient,
  input: ListRetrieversCommandInput,
  ...args: any
): Promise<ListRetrieversCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListRetrieversCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListRetrievers(
  config: QBusinessPaginationConfiguration,
  input: ListRetrieversCommandInput,
  ...additionalArguments: any
): Paginator<ListRetrieversCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListRetrieversCommandOutput;
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
