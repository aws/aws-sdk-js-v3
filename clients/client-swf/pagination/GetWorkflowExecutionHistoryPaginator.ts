import { SWF } from "../SWF";
import { SWFClient } from "../SWFClient";
import {
  GetWorkflowExecutionHistoryCommand,
  GetWorkflowExecutionHistoryCommandInput,
  GetWorkflowExecutionHistoryCommandOutput,
} from "../commands/GetWorkflowExecutionHistoryCommand";
import { SWFPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: SWFClient,
  input: GetWorkflowExecutionHistoryCommandInput,
  ...args: any
): Promise<GetWorkflowExecutionHistoryCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetWorkflowExecutionHistoryCommand(input, ...args));
};
const makePagedRequest = async (
  client: SWF,
  input: GetWorkflowExecutionHistoryCommandInput,
  ...args: any
): Promise<GetWorkflowExecutionHistoryCommandOutput> => {
  // @ts-ignore
  return await client.getWorkflowExecutionHistory(input, ...args);
};
export async function* getWorkflowExecutionHistoryPaginate(
  config: SWFPaginationConfiguration,
  input: GetWorkflowExecutionHistoryCommandInput,
  ...additionalArguments: any
): Paginator<GetWorkflowExecutionHistoryCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: GetWorkflowExecutionHistoryCommandOutput;
  while (hasNext) {
    input["nextPageToken"] = token;
    input["maximumPageSize"] = config.pageSize;
    if (config.client instanceof SWF) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof SWFClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SWF | SWFClient");
    }
    yield page;
    token = page["nextPageToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
