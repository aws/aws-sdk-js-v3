// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListSegmentsCommand,
  ListSegmentsCommandInput,
  ListSegmentsCommandOutput,
} from "../commands/ListSegmentsCommand";
import { Evidently } from "../Evidently";
import { EvidentlyClient } from "../EvidentlyClient";
import { EvidentlyPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: EvidentlyClient,
  input: ListSegmentsCommandInput,
  ...args: any
): Promise<ListSegmentsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListSegmentsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Evidently,
  input: ListSegmentsCommandInput,
  ...args: any
): Promise<ListSegmentsCommandOutput> => {
  // @ts-ignore
  return await client.listSegments(input, ...args);
};
export async function* paginateListSegments(
  config: EvidentlyPaginationConfiguration,
  input: ListSegmentsCommandInput,
  ...additionalArguments: any
): Paginator<ListSegmentsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListSegmentsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof Evidently) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof EvidentlyClient) {
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
