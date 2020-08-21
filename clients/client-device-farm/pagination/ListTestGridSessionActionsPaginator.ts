import { DeviceFarm } from "../DeviceFarm";
import { DeviceFarmClient } from "../DeviceFarmClient";
import {
  ListTestGridSessionActionsCommand,
  ListTestGridSessionActionsCommandInput,
  ListTestGridSessionActionsCommandOutput,
} from "../commands/ListTestGridSessionActionsCommand";
import { DeviceFarmPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: DeviceFarmClient,
  input: ListTestGridSessionActionsCommandInput,
  ...args: any
): Promise<ListTestGridSessionActionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListTestGridSessionActionsCommand(input, ...args));
};
const makePagedRequest = async (
  client: DeviceFarm,
  input: ListTestGridSessionActionsCommandInput,
  ...args: any
): Promise<ListTestGridSessionActionsCommandOutput> => {
  // @ts-ignore
  return await client.listTestGridSessionActions(input, ...args);
};
export async function* listTestGridSessionActionsPaginate(
  config: DeviceFarmPaginationConfiguration,
  input: ListTestGridSessionActionsCommandInput,
  ...additionalArguments: any
): Paginator<ListTestGridSessionActionsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListTestGridSessionActionsCommandOutput;
  while (hasNext) {
    input["nextToken"] = token;
    input["maxResult"] = config.pageSize;
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
