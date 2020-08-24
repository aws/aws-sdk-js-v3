import { SNS } from "../SNS";
import { SNSClient } from "../SNSClient";
import {
  ListSubscriptionsCommand,
  ListSubscriptionsCommandInput,
  ListSubscriptionsCommandOutput,
} from "../commands/ListSubscriptionsCommand";
import { SNSPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: SNSClient,
  input: ListSubscriptionsCommandInput,
  ...args: any
): Promise<ListSubscriptionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListSubscriptionsCommand(input, ...args));
};
const makePagedRequest = async (
  client: SNS,
  input: ListSubscriptionsCommandInput,
  ...args: any
): Promise<ListSubscriptionsCommandOutput> => {
  // @ts-ignore
  return await client.listSubscriptions(input, ...args);
};
export async function* listSubscriptionsPaginate(
  config: SNSPaginationConfiguration,
  input: ListSubscriptionsCommandInput,
  ...additionalArguments: any
): Paginator<ListSubscriptionsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListSubscriptionsCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    if (config.client instanceof SNS) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof SNSClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SNS | SNSClient");
    }
    yield page;
    token = page["NextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
