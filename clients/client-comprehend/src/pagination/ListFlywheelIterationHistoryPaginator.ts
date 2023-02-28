// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListFlywheelIterationHistoryCommand,
  ListFlywheelIterationHistoryCommandInput,
  ListFlywheelIterationHistoryCommandOutput,
} from "../commands/ListFlywheelIterationHistoryCommand";
import { Comprehend } from "../Comprehend";
import { ComprehendClient } from "../ComprehendClient";
import { ComprehendPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ComprehendClient,
  input: ListFlywheelIterationHistoryCommandInput,
  ...args: any
): Promise<ListFlywheelIterationHistoryCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListFlywheelIterationHistoryCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Comprehend,
  input: ListFlywheelIterationHistoryCommandInput,
  ...args: any
): Promise<ListFlywheelIterationHistoryCommandOutput> => {
  // @ts-ignore
  return await client.listFlywheelIterationHistory(input, ...args);
};
export async function* paginateListFlywheelIterationHistory(
  config: ComprehendPaginationConfiguration,
  input: ListFlywheelIterationHistoryCommandInput,
  ...additionalArguments: any
): Paginator<ListFlywheelIterationHistoryCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListFlywheelIterationHistoryCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Comprehend) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ComprehendClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Comprehend | ComprehendClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
