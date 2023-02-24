// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListCheckSummariesCommand,
  ListCheckSummariesCommandInput,
  ListCheckSummariesCommandOutput,
} from "../commands/ListCheckSummariesCommand";
import { WellArchitected } from "../WellArchitected";
import { WellArchitectedClient } from "../WellArchitectedClient";
import { WellArchitectedPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: WellArchitectedClient,
  input: ListCheckSummariesCommandInput,
  ...args: any
): Promise<ListCheckSummariesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListCheckSummariesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: WellArchitected,
  input: ListCheckSummariesCommandInput,
  ...args: any
): Promise<ListCheckSummariesCommandOutput> => {
  // @ts-ignore
  return await client.listCheckSummaries(input, ...args);
};
export async function* paginateListCheckSummaries(
  config: WellArchitectedPaginationConfiguration,
  input: ListCheckSummariesCommandInput,
  ...additionalArguments: any
): Paginator<ListCheckSummariesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListCheckSummariesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof WellArchitected) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof WellArchitectedClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected WellArchitected | WellArchitectedClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
