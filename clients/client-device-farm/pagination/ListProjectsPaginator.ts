import { DeviceFarm } from "../DeviceFarm";
import { DeviceFarmClient } from "../DeviceFarmClient";
import {
  ListProjectsCommand,
  ListProjectsCommandInput,
  ListProjectsCommandOutput,
} from "../commands/ListProjectsCommand";
import { DeviceFarmPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: DeviceFarmClient,
  input: ListProjectsCommandInput,
  ...args: any
): Promise<ListProjectsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListProjectsCommand(input, ...args));
};
const makePagedRequest = async (
  client: DeviceFarm,
  input: ListProjectsCommandInput,
  ...args: any
): Promise<ListProjectsCommandOutput> => {
  // @ts-ignore
  return await client.listProjects(input, ...args);
};
export async function* listProjectsPaginate(
  config: DeviceFarmPaginationConfiguration,
  input: ListProjectsCommandInput,
  ...additionalArguments: any
): Paginator<ListProjectsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListProjectsCommandOutput;
  while (hasNext) {
    input["nextToken"] = token;
    if (config.client instanceof DeviceFarm) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof DeviceFarmClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected DeviceFarm | DeviceFarmClient");
    }
    yield page;
    token = page["nextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
