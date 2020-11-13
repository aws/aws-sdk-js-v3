import { DeviceFarm } from "../DeviceFarm";
import { DeviceFarmClient } from "../DeviceFarmClient";
import {
  ListTestGridSessionArtifactsCommand,
  ListTestGridSessionArtifactsCommandInput,
  ListTestGridSessionArtifactsCommandOutput,
} from "../commands/ListTestGridSessionArtifactsCommand";
import { DeviceFarmPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: DeviceFarmClient,
  input: ListTestGridSessionArtifactsCommandInput,
  ...args: any
): Promise<ListTestGridSessionArtifactsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListTestGridSessionArtifactsCommand(input), ...args);
};
const makePagedRequest = async (
  client: DeviceFarm,
  input: ListTestGridSessionArtifactsCommandInput,
  ...args: any
): Promise<ListTestGridSessionArtifactsCommandOutput> => {
  // @ts-ignore
  return await client.listTestGridSessionArtifacts(input, ...args);
};
export async function* listTestGridSessionArtifactsPaginate(
  config: DeviceFarmPaginationConfiguration,
  input: ListTestGridSessionArtifactsCommandInput,
  ...additionalArguments: any
): Paginator<ListTestGridSessionArtifactsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListTestGridSessionArtifactsCommandOutput;
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
