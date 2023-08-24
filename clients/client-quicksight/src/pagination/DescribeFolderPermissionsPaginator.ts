// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  DescribeFolderPermissionsCommand,
  DescribeFolderPermissionsCommandInput,
  DescribeFolderPermissionsCommandOutput,
} from "../commands/DescribeFolderPermissionsCommand";
import { QuickSightClient } from "../QuickSightClient";
import { QuickSightPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: QuickSightClient,
  input: DescribeFolderPermissionsCommandInput,
  ...args: any
): Promise<DescribeFolderPermissionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeFolderPermissionsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateDescribeFolderPermissions(
  config: QuickSightPaginationConfiguration,
  input: DescribeFolderPermissionsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeFolderPermissionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeFolderPermissionsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof QuickSightClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected QuickSight | QuickSightClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
