// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListProjectMembershipsCommand,
  ListProjectMembershipsCommandInput,
  ListProjectMembershipsCommandOutput,
} from "../commands/ListProjectMembershipsCommand";
import { DataZoneClient } from "../DataZoneClient";
import { DataZonePaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: DataZoneClient,
  input: ListProjectMembershipsCommandInput,
  ...args: any
): Promise<ListProjectMembershipsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListProjectMembershipsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListProjectMemberships(
  config: DataZonePaginationConfiguration,
  input: ListProjectMembershipsCommandInput,
  ...additionalArguments: any
): Paginator<ListProjectMembershipsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListProjectMembershipsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof DataZoneClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected DataZone | DataZoneClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
