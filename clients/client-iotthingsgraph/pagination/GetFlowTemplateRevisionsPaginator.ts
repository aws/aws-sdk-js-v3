import { IoTThingsGraph } from "../IoTThingsGraph";
import { IoTThingsGraphClient } from "../IoTThingsGraphClient";
import {
  GetFlowTemplateRevisionsCommand,
  GetFlowTemplateRevisionsCommandInput,
  GetFlowTemplateRevisionsCommandOutput,
} from "../commands/GetFlowTemplateRevisionsCommand";
import { IoTThingsGraphPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: IoTThingsGraphClient,
  input: GetFlowTemplateRevisionsCommandInput,
  ...args: any
): Promise<GetFlowTemplateRevisionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetFlowTemplateRevisionsCommand(input, ...args));
};
const makePagedRequest = async (
  client: IoTThingsGraph,
  input: GetFlowTemplateRevisionsCommandInput,
  ...args: any
): Promise<GetFlowTemplateRevisionsCommandOutput> => {
  // @ts-ignore
  return await client.getFlowTemplateRevisions(input, ...args);
};
export async function* getFlowTemplateRevisionsPaginate(
  config: IoTThingsGraphPaginationConfiguration,
  input: GetFlowTemplateRevisionsCommandInput,
  ...additionalArguments: any
): Paginator<GetFlowTemplateRevisionsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: GetFlowTemplateRevisionsCommandOutput;
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
