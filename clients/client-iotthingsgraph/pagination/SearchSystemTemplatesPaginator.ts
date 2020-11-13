import { IoTThingsGraph } from "../IoTThingsGraph";
import { IoTThingsGraphClient } from "../IoTThingsGraphClient";
import {
  SearchSystemTemplatesCommand,
  SearchSystemTemplatesCommandInput,
  SearchSystemTemplatesCommandOutput,
} from "../commands/SearchSystemTemplatesCommand";
import { IoTThingsGraphPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: IoTThingsGraphClient,
  input: SearchSystemTemplatesCommandInput,
  ...args: any
): Promise<SearchSystemTemplatesCommandOutput> => {
  // @ts-ignore
  return await client.send(new SearchSystemTemplatesCommand(input), ...args);
};
const makePagedRequest = async (
  client: IoTThingsGraph,
  input: SearchSystemTemplatesCommandInput,
  ...args: any
): Promise<SearchSystemTemplatesCommandOutput> => {
  // @ts-ignore
  return await client.searchSystemTemplates(input, ...args);
};
export async function* searchSystemTemplatesPaginate(
  config: IoTThingsGraphPaginationConfiguration,
  input: SearchSystemTemplatesCommandInput,
  ...additionalArguments: any
): Paginator<SearchSystemTemplatesCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: SearchSystemTemplatesCommandOutput;
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
