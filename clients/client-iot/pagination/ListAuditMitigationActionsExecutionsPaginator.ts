import { IoT } from "../IoT";
import { IoTClient } from "../IoTClient";
import {
  ListAuditMitigationActionsExecutionsCommand,
  ListAuditMitigationActionsExecutionsCommandInput,
  ListAuditMitigationActionsExecutionsCommandOutput,
} from "../commands/ListAuditMitigationActionsExecutionsCommand";
import { IoTPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: IoTClient,
  input: ListAuditMitigationActionsExecutionsCommandInput,
  ...args: any
): Promise<ListAuditMitigationActionsExecutionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAuditMitigationActionsExecutionsCommand(input), ...args);
};
const makePagedRequest = async (
  client: IoT,
  input: ListAuditMitigationActionsExecutionsCommandInput,
  ...args: any
): Promise<ListAuditMitigationActionsExecutionsCommandOutput> => {
  // @ts-ignore
  return await client.listAuditMitigationActionsExecutions(input, ...args);
};
export async function* listAuditMitigationActionsExecutionsPaginate(
  config: IoTPaginationConfiguration,
  input: ListAuditMitigationActionsExecutionsCommandInput,
  ...additionalArguments: any
): Paginator<ListAuditMitigationActionsExecutionsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListAuditMitigationActionsExecutionsCommandOutput;
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
