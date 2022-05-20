// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListOriginationNumbersCommand,
  ListOriginationNumbersCommandInput,
  ListOriginationNumbersCommandOutput,
} from "../commands/ListOriginationNumbersCommand";
import { SNS } from "../SNS";
import { SNSClient } from "../SNSClient";
import { SNSPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: SNSClient,
  input: ListOriginationNumbersCommandInput,
  ...args: any
): Promise<ListOriginationNumbersCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListOriginationNumbersCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: SNS,
  input: ListOriginationNumbersCommandInput,
  ...args: any
): Promise<ListOriginationNumbersCommandOutput> => {
  // @ts-ignore
  return await client.listOriginationNumbers(input, ...args);
};
export async function* paginateListOriginationNumbers(
  config: SNSPaginationConfiguration,
  input: ListOriginationNumbersCommandInput,
  ...additionalArguments: any
): Paginator<ListOriginationNumbersCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListOriginationNumbersCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof SNS) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof SNSClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SNS | SNSClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
