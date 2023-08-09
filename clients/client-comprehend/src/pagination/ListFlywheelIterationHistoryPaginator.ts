// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListFlywheelIterationHistoryCommand,
  ListFlywheelIterationHistoryCommandInput,
  ListFlywheelIterationHistoryCommandOutput,
} from "../commands/ListFlywheelIterationHistoryCommand";
import { ComprehendClient } from "../ComprehendClient";
import { ComprehendPaginationConfiguration } from "./Interfaces";

/**
 * @internal
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
 * @public
 */
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
    if (config.client instanceof ComprehendClient) {
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
