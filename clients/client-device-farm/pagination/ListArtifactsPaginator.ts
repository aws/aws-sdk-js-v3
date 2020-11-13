import { DeviceFarm } from "../DeviceFarm";
import { DeviceFarmClient } from "../DeviceFarmClient";
import {
  ListArtifactsCommand,
  ListArtifactsCommandInput,
  ListArtifactsCommandOutput,
} from "../commands/ListArtifactsCommand";
import { DeviceFarmPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: DeviceFarmClient,
  input: ListArtifactsCommandInput,
  ...args: any
): Promise<ListArtifactsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListArtifactsCommand(input), ...args);
};
const makePagedRequest = async (
  client: DeviceFarm,
  input: ListArtifactsCommandInput,
  ...args: any
): Promise<ListArtifactsCommandOutput> => {
  // @ts-ignore
  return await client.listArtifacts(input, ...args);
};
export async function* listArtifactsPaginate(
  config: DeviceFarmPaginationConfiguration,
  input: ListArtifactsCommandInput,
  ...additionalArguments: any
): Paginator<ListArtifactsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListArtifactsCommandOutput;
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
