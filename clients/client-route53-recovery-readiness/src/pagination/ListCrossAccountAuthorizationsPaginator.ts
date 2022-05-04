// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListCrossAccountAuthorizationsCommand,
  ListCrossAccountAuthorizationsCommandInput,
  ListCrossAccountAuthorizationsCommandOutput,
} from "../commands/ListCrossAccountAuthorizationsCommand";
import { Route53RecoveryReadiness } from "../Route53RecoveryReadiness";
import { Route53RecoveryReadinessClient } from "../Route53RecoveryReadinessClient";
import { Route53RecoveryReadinessPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: Route53RecoveryReadinessClient,
  input: ListCrossAccountAuthorizationsCommandInput,
  ...args: any
): Promise<ListCrossAccountAuthorizationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListCrossAccountAuthorizationsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Route53RecoveryReadiness,
  input: ListCrossAccountAuthorizationsCommandInput,
  ...args: any
): Promise<ListCrossAccountAuthorizationsCommandOutput> => {
  // @ts-ignore
  return await client.listCrossAccountAuthorizations(input, ...args);
};
export async function* paginateListCrossAccountAuthorizations(
  config: Route53RecoveryReadinessPaginationConfiguration,
  input: ListCrossAccountAuthorizationsCommandInput,
  ...additionalArguments: any
): Paginator<ListCrossAccountAuthorizationsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListCrossAccountAuthorizationsCommandOutput;
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
