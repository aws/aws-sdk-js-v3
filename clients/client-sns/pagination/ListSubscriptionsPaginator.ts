import { SNS } from "../SNS";
import { SNSClient } from "../SNSClient";
import {
  ListSubscriptionsCommand,
  ListSubscriptionsCommandInput,
  ListSubscriptionsCommandOutput,
} from "../commands/ListSubscriptionsCommand";
import { SNSPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: SNSClient,
  input: ListSubscriptionsCommandInput,
  ...args: any
): Promise<ListSubscriptionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListSubscriptionsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: SNS,
  input: ListSubscriptionsCommandInput,
  ...args: any
): Promise<ListSubscriptionsCommandOutput> => {
  // @ts-ignore
  return await client.listSubscriptions(input, ...args);
};
export async function* paginateListSubscriptions(
  config: SNSPaginationConfiguration,
  input: ListSubscriptionsCommandInput,
  ...additionalArguments: any
): Paginator<ListSubscriptionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListSubscriptionsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    if (config.client instanceof SNS) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof SNSClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SNS | SNSClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
