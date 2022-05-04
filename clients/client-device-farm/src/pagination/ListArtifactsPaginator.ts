// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListArtifactsCommand,
  ListArtifactsCommandInput,
  ListArtifactsCommandOutput,
} from "../commands/ListArtifactsCommand";
import { DeviceFarm } from "../DeviceFarm";
import { DeviceFarmClient } from "../DeviceFarmClient";
import { DeviceFarmPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: DeviceFarmClient,
  input: ListArtifactsCommandInput,
  ...args: any
): Promise<ListArtifactsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListArtifactsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: DeviceFarm,
  input: ListArtifactsCommandInput,
  ...args: any
): Promise<ListArtifactsCommandOutput> => {
  // @ts-ignore
  return await client.listArtifacts(input, ...args);
};
export async function* paginateListArtifacts(
  config: DeviceFarmPaginationConfiguration,
  input: ListArtifactsCommandInput,
  ...additionalArguments: any
): Paginator<ListArtifactsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
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
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
