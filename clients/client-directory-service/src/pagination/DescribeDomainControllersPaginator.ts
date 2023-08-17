// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  DescribeDomainControllersCommand,
  DescribeDomainControllersCommandInput,
  DescribeDomainControllersCommandOutput,
} from "../commands/DescribeDomainControllersCommand";
import { DirectoryServiceClient } from "../DirectoryServiceClient";
import { DirectoryServicePaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: DirectoryServiceClient,
  input: DescribeDomainControllersCommandInput,
  ...args: any
): Promise<DescribeDomainControllersCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeDomainControllersCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateDescribeDomainControllers(
  config: DirectoryServicePaginationConfiguration,
  input: DescribeDomainControllersCommandInput,
  ...additionalArguments: any
): Paginator<DescribeDomainControllersCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeDomainControllersCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["Limit"] = config.pageSize;
    if (config.client instanceof DirectoryServiceClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected DirectoryService | DirectoryServiceClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
