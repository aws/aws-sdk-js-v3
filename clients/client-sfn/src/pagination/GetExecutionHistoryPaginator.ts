// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  GetExecutionHistoryCommand,
  GetExecutionHistoryCommandInput,
  GetExecutionHistoryCommandOutput,
} from "../commands/GetExecutionHistoryCommand";
import { SFN } from "../SFN";
import { SFNClient } from "../SFNClient";
import { SFNPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: SFNClient,
  input: GetExecutionHistoryCommandInput,
  ...args: any
): Promise<GetExecutionHistoryCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetExecutionHistoryCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: SFN,
  input: GetExecutionHistoryCommandInput,
  ...args: any
): Promise<GetExecutionHistoryCommandOutput> => {
  // @ts-ignore
  return await client.getExecutionHistory(input, ...args);
};
export async function* paginateGetExecutionHistory(
  config: SFNPaginationConfiguration,
  input: GetExecutionHistoryCommandInput,
  ...additionalArguments: any
): Paginator<GetExecutionHistoryCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetExecutionHistoryCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof SFN) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof SFNClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SFN | SFNClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
