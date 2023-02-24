// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  DescribeTrustsCommand,
  DescribeTrustsCommandInput,
  DescribeTrustsCommandOutput,
} from "../commands/DescribeTrustsCommand";
import { DirectoryService } from "../DirectoryService";
import { DirectoryServiceClient } from "../DirectoryServiceClient";
import { DirectoryServicePaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: DirectoryServiceClient,
  input: DescribeTrustsCommandInput,
  ...args: any
): Promise<DescribeTrustsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeTrustsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: DirectoryService,
  input: DescribeTrustsCommandInput,
  ...args: any
): Promise<DescribeTrustsCommandOutput> => {
  // @ts-ignore
  return await client.describeTrusts(input, ...args);
};
export async function* paginateDescribeTrusts(
  config: DirectoryServicePaginationConfiguration,
  input: DescribeTrustsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeTrustsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeTrustsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["Limit"] = config.pageSize;
    if (config.client instanceof DirectoryService) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof DirectoryServiceClient) {
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
