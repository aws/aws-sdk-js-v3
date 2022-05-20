// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListSimulationJobBatchesCommand,
  ListSimulationJobBatchesCommandInput,
  ListSimulationJobBatchesCommandOutput,
} from "../commands/ListSimulationJobBatchesCommand";
import { RoboMaker } from "../RoboMaker";
import { RoboMakerClient } from "../RoboMakerClient";
import { RoboMakerPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: RoboMakerClient,
  input: ListSimulationJobBatchesCommandInput,
  ...args: any
): Promise<ListSimulationJobBatchesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListSimulationJobBatchesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: RoboMaker,
  input: ListSimulationJobBatchesCommandInput,
  ...args: any
): Promise<ListSimulationJobBatchesCommandOutput> => {
  // @ts-ignore
  return await client.listSimulationJobBatches(input, ...args);
};
export async function* paginateListSimulationJobBatches(
  config: RoboMakerPaginationConfiguration,
  input: ListSimulationJobBatchesCommandInput,
  ...additionalArguments: any
): Paginator<ListSimulationJobBatchesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListSimulationJobBatchesCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof RoboMaker) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof RoboMakerClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected RoboMaker | RoboMakerClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
