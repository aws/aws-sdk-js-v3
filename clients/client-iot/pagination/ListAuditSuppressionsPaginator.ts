import { IoT } from "../IoT";
import { IoTClient } from "../IoTClient";
import {
  ListAuditSuppressionsCommand,
  ListAuditSuppressionsCommandInput,
  ListAuditSuppressionsCommandOutput,
} from "../commands/ListAuditSuppressionsCommand";
import { IoTPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: IoTClient,
  input: ListAuditSuppressionsCommandInput,
  ...args: any
): Promise<ListAuditSuppressionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAuditSuppressionsCommand(input), ...args);
};
const makePagedRequest = async (
  client: IoT,
  input: ListAuditSuppressionsCommandInput,
  ...args: any
): Promise<ListAuditSuppressionsCommandOutput> => {
  // @ts-ignore
  return await client.listAuditSuppressions(input, ...args);
};
export async function* listAuditSuppressionsPaginate(
  config: IoTPaginationConfiguration,
  input: ListAuditSuppressionsCommandInput,
  ...additionalArguments: any
): Paginator<ListAuditSuppressionsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListAuditSuppressionsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof IoT) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof IoTClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected IoT | IoTClient");
    }
    yield page;
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
