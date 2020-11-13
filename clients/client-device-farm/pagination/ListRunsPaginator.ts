import { DeviceFarm } from "../DeviceFarm";
import { DeviceFarmClient } from "../DeviceFarmClient";
import { ListRunsCommand, ListRunsCommandInput, ListRunsCommandOutput } from "../commands/ListRunsCommand";
import { DeviceFarmPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: DeviceFarmClient,
  input: ListRunsCommandInput,
  ...args: any
): Promise<ListRunsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListRunsCommand(input), ...args);
};
const makePagedRequest = async (
  client: DeviceFarm,
  input: ListRunsCommandInput,
  ...args: any
): Promise<ListRunsCommandOutput> => {
  // @ts-ignore
  return await client.listRuns(input, ...args);
};
export async function* listRunsPaginate(
  config: DeviceFarmPaginationConfiguration,
  input: ListRunsCommandInput,
  ...additionalArguments: any
): Paginator<ListRunsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListRunsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
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
