// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListGraphSnapshotsCommand,
  ListGraphSnapshotsCommandInput,
  ListGraphSnapshotsCommandOutput,
} from "../commands/ListGraphSnapshotsCommand";
import { NeptuneGraphClient } from "../NeptuneGraphClient";
import { NeptuneGraphPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: NeptuneGraphClient,
  input: ListGraphSnapshotsCommandInput,
  ...args: any
): Promise<ListGraphSnapshotsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListGraphSnapshotsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListGraphSnapshots(
  config: NeptuneGraphPaginationConfiguration,
  input: ListGraphSnapshotsCommandInput,
  ...additionalArguments: any
): Paginator<ListGraphSnapshotsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListGraphSnapshotsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof NeptuneGraphClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected NeptuneGraph | NeptuneGraphClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
