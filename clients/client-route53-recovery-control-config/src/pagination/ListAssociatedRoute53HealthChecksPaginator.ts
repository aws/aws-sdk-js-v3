// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListAssociatedRoute53HealthChecksCommand,
  ListAssociatedRoute53HealthChecksCommandInput,
  ListAssociatedRoute53HealthChecksCommandOutput,
} from "../commands/ListAssociatedRoute53HealthChecksCommand";
import { Route53RecoveryControlConfig } from "../Route53RecoveryControlConfig";
import { Route53RecoveryControlConfigClient } from "../Route53RecoveryControlConfigClient";
import { Route53RecoveryControlConfigPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: Route53RecoveryControlConfigClient,
  input: ListAssociatedRoute53HealthChecksCommandInput,
  ...args: any
): Promise<ListAssociatedRoute53HealthChecksCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAssociatedRoute53HealthChecksCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Route53RecoveryControlConfig,
  input: ListAssociatedRoute53HealthChecksCommandInput,
  ...args: any
): Promise<ListAssociatedRoute53HealthChecksCommandOutput> => {
  // @ts-ignore
  return await client.listAssociatedRoute53HealthChecks(input, ...args);
};
export async function* paginateListAssociatedRoute53HealthChecks(
  config: Route53RecoveryControlConfigPaginationConfiguration,
  input: ListAssociatedRoute53HealthChecksCommandInput,
  ...additionalArguments: any
): Paginator<ListAssociatedRoute53HealthChecksCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListAssociatedRoute53HealthChecksCommandOutput;
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
