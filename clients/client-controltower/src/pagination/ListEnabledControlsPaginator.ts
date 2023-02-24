// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListEnabledControlsCommand,
  ListEnabledControlsCommandInput,
  ListEnabledControlsCommandOutput,
} from "../commands/ListEnabledControlsCommand";
import { ControlTower } from "../ControlTower";
import { ControlTowerClient } from "../ControlTowerClient";
import { ControlTowerPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ControlTowerClient,
  input: ListEnabledControlsCommandInput,
  ...args: any
): Promise<ListEnabledControlsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListEnabledControlsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: ControlTower,
  input: ListEnabledControlsCommandInput,
  ...args: any
): Promise<ListEnabledControlsCommandOutput> => {
  // @ts-ignore
  return await client.listEnabledControls(input, ...args);
};
export async function* paginateListEnabledControls(
  config: ControlTowerPaginationConfiguration,
  input: ListEnabledControlsCommandInput,
  ...additionalArguments: any
): Paginator<ListEnabledControlsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListEnabledControlsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof ControlTower) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ControlTowerClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ControlTower | ControlTowerClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
