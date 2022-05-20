// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListSpeechSynthesisTasksCommand,
  ListSpeechSynthesisTasksCommandInput,
  ListSpeechSynthesisTasksCommandOutput,
} from "../commands/ListSpeechSynthesisTasksCommand";
import { Polly } from "../Polly";
import { PollyClient } from "../PollyClient";
import { PollyPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: PollyClient,
  input: ListSpeechSynthesisTasksCommandInput,
  ...args: any
): Promise<ListSpeechSynthesisTasksCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListSpeechSynthesisTasksCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Polly,
  input: ListSpeechSynthesisTasksCommandInput,
  ...args: any
): Promise<ListSpeechSynthesisTasksCommandOutput> => {
  // @ts-ignore
  return await client.listSpeechSynthesisTasks(input, ...args);
};
export async function* paginateListSpeechSynthesisTasks(
  config: PollyPaginationConfiguration,
  input: ListSpeechSynthesisTasksCommandInput,
  ...additionalArguments: any
): Paginator<ListSpeechSynthesisTasksCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListSpeechSynthesisTasksCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Polly) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof PollyClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Polly | PollyClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
