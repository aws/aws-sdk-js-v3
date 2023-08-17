// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { AppConfigClient } from "../AppConfigClient";
import {
  ListDeploymentsCommand,
  ListDeploymentsCommandInput,
  ListDeploymentsCommandOutput,
} from "../commands/ListDeploymentsCommand";
import { AppConfigPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: AppConfigClient,
  input: ListDeploymentsCommandInput,
  ...args: any
): Promise<ListDeploymentsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListDeploymentsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListDeployments(
  config: AppConfigPaginationConfiguration,
  input: ListDeploymentsCommandInput,
  ...additionalArguments: any
): Paginator<ListDeploymentsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListDeploymentsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof AppConfigClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected AppConfig | AppConfigClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
