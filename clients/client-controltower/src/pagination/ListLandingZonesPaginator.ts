// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListLandingZonesCommand,
  ListLandingZonesCommandInput,
  ListLandingZonesCommandOutput,
} from "../commands/ListLandingZonesCommand";
import { ControlTowerClient } from "../ControlTowerClient";
import { ControlTowerPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: ControlTowerClient,
  input: ListLandingZonesCommandInput,
  ...args: any
): Promise<ListLandingZonesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListLandingZonesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListLandingZones(
  config: ControlTowerPaginationConfiguration,
  input: ListLandingZonesCommandInput,
  ...additionalArguments: any
): Paginator<ListLandingZonesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListLandingZonesCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof ControlTowerClient) {
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
