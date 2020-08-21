import { IoT1ClickProjects } from "../IoT1ClickProjects";
import { IoT1ClickProjectsClient } from "../IoT1ClickProjectsClient";
import {
  ListPlacementsCommand,
  ListPlacementsCommandInput,
  ListPlacementsCommandOutput,
} from "../commands/ListPlacementsCommand";
import { IoT1ClickProjectsPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: IoT1ClickProjectsClient,
  input: ListPlacementsCommandInput,
  ...args: any
): Promise<ListPlacementsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListPlacementsCommand(input, ...args));
};
const makePagedRequest = async (
  client: IoT1ClickProjects,
  input: ListPlacementsCommandInput,
  ...args: any
): Promise<ListPlacementsCommandOutput> => {
  // @ts-ignore
  return await client.listPlacements(input, ...args);
};
export async function* listPlacementsPaginate(
  config: IoT1ClickProjectsPaginationConfiguration,
  input: ListPlacementsCommandInput,
  ...additionalArguments: any
): Paginator<ListPlacementsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListPlacementsCommandOutput;
  while (hasNext) {
    input["nextToken"] = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof IoT1ClickProjects) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof IoT1ClickProjectsClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected IoT1ClickProjects | IoT1ClickProjectsClient");
    }
    yield page;
    token = page["nextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
