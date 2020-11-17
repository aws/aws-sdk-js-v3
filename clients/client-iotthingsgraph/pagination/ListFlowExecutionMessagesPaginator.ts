import { IoTThingsGraph } from "../IoTThingsGraph";
import { IoTThingsGraphClient } from "../IoTThingsGraphClient";
import {
  ListFlowExecutionMessagesCommand,
  ListFlowExecutionMessagesCommandInput,
  ListFlowExecutionMessagesCommandOutput,
} from "../commands/ListFlowExecutionMessagesCommand";
import { IoTThingsGraphPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: IoTThingsGraphClient,
  input: ListFlowExecutionMessagesCommandInput,
  ...args: any
): Promise<ListFlowExecutionMessagesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListFlowExecutionMessagesCommand(input), ...args);
};
const makePagedRequest = async (
  client: IoTThingsGraph,
  input: ListFlowExecutionMessagesCommandInput,
  ...args: any
): Promise<ListFlowExecutionMessagesCommandOutput> => {
  // @ts-ignore
  return await client.listFlowExecutionMessages(input, ...args);
};
export async function* paginateListFlowExecutionMessages(
  config: IoTThingsGraphPaginationConfiguration,
  input: ListFlowExecutionMessagesCommandInput,
  ...additionalArguments: any
): Paginator<ListFlowExecutionMessagesCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListFlowExecutionMessagesCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof IoTThingsGraph) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof IoTThingsGraphClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected IoTThingsGraph | IoTThingsGraphClient");
    }
    yield page;
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
