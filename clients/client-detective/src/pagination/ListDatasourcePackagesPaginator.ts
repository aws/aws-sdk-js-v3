// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListDatasourcePackagesCommand,
  ListDatasourcePackagesCommandInput,
  ListDatasourcePackagesCommandOutput,
} from "../commands/ListDatasourcePackagesCommand";
import { DetectiveClient } from "../DetectiveClient";
import { DetectivePaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: DetectiveClient,
  input: ListDatasourcePackagesCommandInput,
  ...args: any
): Promise<ListDatasourcePackagesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListDatasourcePackagesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListDatasourcePackages(
  config: DetectivePaginationConfiguration,
  input: ListDatasourcePackagesCommandInput,
  ...additionalArguments: any
): Paginator<ListDatasourcePackagesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListDatasourcePackagesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof DetectiveClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Detective | DetectiveClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
