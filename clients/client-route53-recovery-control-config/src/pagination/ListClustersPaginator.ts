// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListClustersCommand,
  ListClustersCommandInput,
  ListClustersCommandOutput,
} from "../commands/ListClustersCommand";
import { Route53RecoveryControlConfig } from "../Route53RecoveryControlConfig";
import { Route53RecoveryControlConfigClient } from "../Route53RecoveryControlConfigClient";
import { Route53RecoveryControlConfigPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: Route53RecoveryControlConfigClient,
  input: ListClustersCommandInput,
  ...args: any
): Promise<ListClustersCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListClustersCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Route53RecoveryControlConfig,
  input: ListClustersCommandInput,
  ...args: any
): Promise<ListClustersCommandOutput> => {
  // @ts-ignore
  return await client.listClusters(input, ...args);
};
export async function* paginateListClusters(
  config: Route53RecoveryControlConfigPaginationConfiguration,
  input: ListClustersCommandInput,
  ...additionalArguments: any
): Paginator<ListClustersCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListClustersCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Route53RecoveryControlConfig) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof Route53RecoveryControlConfigClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Route53RecoveryControlConfig | Route53RecoveryControlConfigClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
