// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListResourceSetsCommand,
  ListResourceSetsCommandInput,
  ListResourceSetsCommandOutput,
} from "../commands/ListResourceSetsCommand";
import { Route53RecoveryReadiness } from "../Route53RecoveryReadiness";
import { Route53RecoveryReadinessClient } from "../Route53RecoveryReadinessClient";
import { Route53RecoveryReadinessPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: Route53RecoveryReadinessClient,
  input: ListResourceSetsCommandInput,
  ...args: any
): Promise<ListResourceSetsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListResourceSetsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Route53RecoveryReadiness,
  input: ListResourceSetsCommandInput,
  ...args: any
): Promise<ListResourceSetsCommandOutput> => {
  // @ts-ignore
  return await client.listResourceSets(input, ...args);
};
export async function* paginateListResourceSets(
  config: Route53RecoveryReadinessPaginationConfiguration,
  input: ListResourceSetsCommandInput,
  ...additionalArguments: any
): Paginator<ListResourceSetsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListResourceSetsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Route53RecoveryReadiness) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof Route53RecoveryReadinessClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Route53RecoveryReadiness | Route53RecoveryReadinessClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
