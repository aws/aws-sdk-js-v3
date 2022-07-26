// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListDatasourcePackagesCommand,
  ListDatasourcePackagesCommandInput,
  ListDatasourcePackagesCommandOutput,
} from "../commands/ListDatasourcePackagesCommand";
import { Detective } from "../Detective";
import { DetectiveClient } from "../DetectiveClient";
import { DetectivePaginationConfiguration } from "./Interfaces";

/**
 * @private
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
 * @private
 */
const makePagedRequest = async (
  client: Detective,
  input: ListDatasourcePackagesCommandInput,
  ...args: any
): Promise<ListDatasourcePackagesCommandOutput> => {
  // @ts-ignore
  return await client.listDatasourcePackages(input, ...args);
};
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
    if (config.client instanceof Detective) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof DetectiveClient) {
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
