// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListTestGridSessionArtifactsCommand,
  ListTestGridSessionArtifactsCommandInput,
  ListTestGridSessionArtifactsCommandOutput,
} from "../commands/ListTestGridSessionArtifactsCommand";
import { DeviceFarm } from "../DeviceFarm";
import { DeviceFarmClient } from "../DeviceFarmClient";
import { DeviceFarmPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: DeviceFarmClient,
  input: ListTestGridSessionArtifactsCommandInput,
  ...args: any
): Promise<ListTestGridSessionArtifactsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListTestGridSessionArtifactsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: DeviceFarm,
  input: ListTestGridSessionArtifactsCommandInput,
  ...args: any
): Promise<ListTestGridSessionArtifactsCommandOutput> => {
  // @ts-ignore
  return await client.listTestGridSessionArtifacts(input, ...args);
};
export async function* paginateListTestGridSessionArtifacts(
  config: DeviceFarmPaginationConfiguration,
  input: ListTestGridSessionArtifactsCommandInput,
  ...additionalArguments: any
): Paginator<ListTestGridSessionArtifactsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
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
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
