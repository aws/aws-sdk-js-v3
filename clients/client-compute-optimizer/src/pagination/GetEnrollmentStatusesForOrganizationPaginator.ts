// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  GetEnrollmentStatusesForOrganizationCommand,
  GetEnrollmentStatusesForOrganizationCommandInput,
  GetEnrollmentStatusesForOrganizationCommandOutput,
} from "../commands/GetEnrollmentStatusesForOrganizationCommand";
import { ComputeOptimizer } from "../ComputeOptimizer";
import { ComputeOptimizerClient } from "../ComputeOptimizerClient";
import { ComputeOptimizerPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ComputeOptimizerClient,
  input: GetEnrollmentStatusesForOrganizationCommandInput,
  ...args: any
): Promise<GetEnrollmentStatusesForOrganizationCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetEnrollmentStatusesForOrganizationCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: ComputeOptimizer,
  input: GetEnrollmentStatusesForOrganizationCommandInput,
  ...args: any
): Promise<GetEnrollmentStatusesForOrganizationCommandOutput> => {
  // @ts-ignore
  return await client.getEnrollmentStatusesForOrganization(input, ...args);
};
export async function* paginateGetEnrollmentStatusesForOrganization(
  config: ComputeOptimizerPaginationConfiguration,
  input: GetEnrollmentStatusesForOrganizationCommandInput,
  ...additionalArguments: any
): Paginator<GetEnrollmentStatusesForOrganizationCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetEnrollmentStatusesForOrganizationCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof ComputeOptimizer) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ComputeOptimizerClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ComputeOptimizer | ComputeOptimizerClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
