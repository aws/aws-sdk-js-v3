import { IoTThingsGraph } from "../IoTThingsGraph";
import { IoTThingsGraphClient } from "../IoTThingsGraphClient";
import {
  GetSystemTemplateRevisionsCommand,
  GetSystemTemplateRevisionsCommandInput,
  GetSystemTemplateRevisionsCommandOutput,
} from "../commands/GetSystemTemplateRevisionsCommand";
import { IoTThingsGraphPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: IoTThingsGraphClient,
  input: GetSystemTemplateRevisionsCommandInput,
  ...args: any
): Promise<GetSystemTemplateRevisionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetSystemTemplateRevisionsCommand(input, ...args));
};
const makePagedRequest = async (
  client: IoTThingsGraph,
  input: GetSystemTemplateRevisionsCommandInput,
  ...args: any
): Promise<GetSystemTemplateRevisionsCommandOutput> => {
  // @ts-ignore
  return await client.getSystemTemplateRevisions(input, ...args);
};
export async function* getSystemTemplateRevisionsPaginate(
  config: IoTThingsGraphPaginationConfiguration,
  input: GetSystemTemplateRevisionsCommandInput,
  ...additionalArguments: any
): Paginator<GetSystemTemplateRevisionsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: GetSystemTemplateRevisionsCommandOutput;
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
