// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListEventPredictionsCommand,
  ListEventPredictionsCommandInput,
  ListEventPredictionsCommandOutput,
} from "../commands/ListEventPredictionsCommand";
import { FraudDetectorClient } from "../FraudDetectorClient";
import { FraudDetectorPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: FraudDetectorClient,
  input: ListEventPredictionsCommandInput,
  ...args: any
): Promise<ListEventPredictionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListEventPredictionsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListEventPredictions(
  config: FraudDetectorPaginationConfiguration,
  input: ListEventPredictionsCommandInput,
  ...additionalArguments: any
): Paginator<ListEventPredictionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListEventPredictionsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof FraudDetectorClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected FraudDetector | FraudDetectorClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
