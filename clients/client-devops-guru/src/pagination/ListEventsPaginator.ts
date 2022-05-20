// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { ListEventsCommand, ListEventsCommandInput, ListEventsCommandOutput } from "../commands/ListEventsCommand";
import { DevOpsGuru } from "../DevOpsGuru";
import { DevOpsGuruClient } from "../DevOpsGuruClient";
import { DevOpsGuruPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: DevOpsGuruClient,
  input: ListEventsCommandInput,
  ...args: any
): Promise<ListEventsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListEventsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: DevOpsGuru,
  input: ListEventsCommandInput,
  ...args: any
): Promise<ListEventsCommandOutput> => {
  // @ts-ignore
  return await client.listEvents(input, ...args);
};
export async function* paginateListEvents(
  config: DevOpsGuruPaginationConfiguration,
  input: ListEventsCommandInput,
  ...additionalArguments: any
): Paginator<ListEventsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListEventsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof DevOpsGuru) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof DevOpsGuruClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected DevOpsGuru | DevOpsGuruClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
