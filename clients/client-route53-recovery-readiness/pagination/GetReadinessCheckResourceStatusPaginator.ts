import { Route53RecoveryReadiness } from "../Route53RecoveryReadiness";
import { Route53RecoveryReadinessClient } from "../Route53RecoveryReadinessClient";
import {
  GetReadinessCheckResourceStatusCommand,
  GetReadinessCheckResourceStatusCommandInput,
  GetReadinessCheckResourceStatusCommandOutput,
} from "../commands/GetReadinessCheckResourceStatusCommand";
import { Route53RecoveryReadinessPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: Route53RecoveryReadinessClient,
  input: GetReadinessCheckResourceStatusCommandInput,
  ...args: any
): Promise<GetReadinessCheckResourceStatusCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetReadinessCheckResourceStatusCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Route53RecoveryReadiness,
  input: GetReadinessCheckResourceStatusCommandInput,
  ...args: any
): Promise<GetReadinessCheckResourceStatusCommandOutput> => {
  // @ts-ignore
  return await client.getReadinessCheckResourceStatus(input, ...args);
};
export async function* paginateGetReadinessCheckResourceStatus(
  config: Route53RecoveryReadinessPaginationConfiguration,
  input: GetReadinessCheckResourceStatusCommandInput,
  ...additionalArguments: any
): Paginator<GetReadinessCheckResourceStatusCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetReadinessCheckResourceStatusCommandOutput;
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
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
