import { DeviceFarm } from "../DeviceFarm";
import { DeviceFarmClient } from "../DeviceFarmClient";
import {
  ListTestGridSessionsCommand,
  ListTestGridSessionsCommandInput,
  ListTestGridSessionsCommandOutput,
} from "../commands/ListTestGridSessionsCommand";
import { DeviceFarmPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: DeviceFarmClient,
  input: ListTestGridSessionsCommandInput,
  ...args: any
): Promise<ListTestGridSessionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListTestGridSessionsCommand(input), ...args);
};
const makePagedRequest = async (
  client: DeviceFarm,
  input: ListTestGridSessionsCommandInput,
  ...args: any
): Promise<ListTestGridSessionsCommandOutput> => {
  // @ts-ignore
  return await client.listTestGridSessions(input, ...args);
};
export async function* paginateListTestGridSessions(
  config: DeviceFarmPaginationConfiguration,
  input: ListTestGridSessionsCommandInput,
  ...additionalArguments: any
): Paginator<ListTestGridSessionsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListTestGridSessionsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResult"] = config.pageSize;
    if (config.client instanceof DeviceFarm) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof DeviceFarmClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected DeviceFarm | DeviceFarmClient");
    }
    yield page;
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
