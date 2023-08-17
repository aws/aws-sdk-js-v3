// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListPackagingConfigurationsCommand,
  ListPackagingConfigurationsCommandInput,
  ListPackagingConfigurationsCommandOutput,
} from "../commands/ListPackagingConfigurationsCommand";
import { MediaPackageVodClient } from "../MediaPackageVodClient";
import { MediaPackageVodPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: MediaPackageVodClient,
  input: ListPackagingConfigurationsCommandInput,
  ...args: any
): Promise<ListPackagingConfigurationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListPackagingConfigurationsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListPackagingConfigurations(
  config: MediaPackageVodPaginationConfiguration,
  input: ListPackagingConfigurationsCommandInput,
  ...additionalArguments: any
): Paginator<ListPackagingConfigurationsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListPackagingConfigurationsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof MediaPackageVodClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected MediaPackageVod | MediaPackageVodClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
