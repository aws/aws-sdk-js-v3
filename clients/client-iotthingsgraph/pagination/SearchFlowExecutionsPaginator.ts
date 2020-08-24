import { IoTThingsGraph } from "../IoTThingsGraph";
import { IoTThingsGraphClient } from "../IoTThingsGraphClient";
import {
  SearchFlowExecutionsCommand,
  SearchFlowExecutionsCommandInput,
  SearchFlowExecutionsCommandOutput,
} from "../commands/SearchFlowExecutionsCommand";
import { IoTThingsGraphPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: IoTThingsGraphClient,
  input: SearchFlowExecutionsCommandInput,
  ...args: any
): Promise<SearchFlowExecutionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new SearchFlowExecutionsCommand(input, ...args));
};
const makePagedRequest = async (
  client: IoTThingsGraph,
  input: SearchFlowExecutionsCommandInput,
  ...args: any
): Promise<SearchFlowExecutionsCommandOutput> => {
  // @ts-ignore
  return await client.searchFlowExecutions(input, ...args);
};
export async function* searchFlowExecutionsPaginate(
  config: IoTThingsGraphPaginationConfiguration,
  input: SearchFlowExecutionsCommandInput,
  ...additionalArguments: any
): Paginator<SearchFlowExecutionsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: SearchFlowExecutionsCommandOutput;
  while (hasNext) {
    input["nextToken"] = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof IoTThingsGraph) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof IoTThingsGraphClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected IoTThingsGraph | IoTThingsGraphClient");
    }
    yield page;
    token = page["nextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
