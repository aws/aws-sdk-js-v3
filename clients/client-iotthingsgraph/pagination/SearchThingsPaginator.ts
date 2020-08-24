import { IoTThingsGraph } from "../IoTThingsGraph";
import { IoTThingsGraphClient } from "../IoTThingsGraphClient";
import {
  SearchThingsCommand,
  SearchThingsCommandInput,
  SearchThingsCommandOutput,
} from "../commands/SearchThingsCommand";
import { IoTThingsGraphPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: IoTThingsGraphClient,
  input: SearchThingsCommandInput,
  ...args: any
): Promise<SearchThingsCommandOutput> => {
  // @ts-ignore
  return await client.send(new SearchThingsCommand(input, ...args));
};
const makePagedRequest = async (
  client: IoTThingsGraph,
  input: SearchThingsCommandInput,
  ...args: any
): Promise<SearchThingsCommandOutput> => {
  // @ts-ignore
  return await client.searchThings(input, ...args);
};
export async function* searchThingsPaginate(
  config: IoTThingsGraphPaginationConfiguration,
  input: SearchThingsCommandInput,
  ...additionalArguments: any
): Paginator<SearchThingsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: SearchThingsCommandOutput;
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
