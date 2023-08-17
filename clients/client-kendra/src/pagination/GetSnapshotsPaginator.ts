// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  GetSnapshotsCommand,
  GetSnapshotsCommandInput,
  GetSnapshotsCommandOutput,
} from "../commands/GetSnapshotsCommand";
import { KendraClient } from "../KendraClient";
import { KendraPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: KendraClient,
  input: GetSnapshotsCommandInput,
  ...args: any
): Promise<GetSnapshotsCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetSnapshotsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateGetSnapshots(
  config: KendraPaginationConfiguration,
  input: GetSnapshotsCommandInput,
  ...additionalArguments: any
): Paginator<GetSnapshotsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetSnapshotsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof KendraClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Kendra | KendraClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
