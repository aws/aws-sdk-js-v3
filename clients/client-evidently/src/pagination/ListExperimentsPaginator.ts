// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListExperimentsCommand,
  ListExperimentsCommandInput,
  ListExperimentsCommandOutput,
} from "../commands/ListExperimentsCommand";
import { EvidentlyClient } from "../EvidentlyClient";
import { EvidentlyPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: EvidentlyClient,
  input: ListExperimentsCommandInput,
  ...args: any
): Promise<ListExperimentsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListExperimentsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListExperiments(
  config: EvidentlyPaginationConfiguration,
  input: ListExperimentsCommandInput,
  ...additionalArguments: any
): Paginator<ListExperimentsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListExperimentsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof EvidentlyClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Evidently | EvidentlyClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
