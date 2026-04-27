// smithy-typescript generated code
import {
  type WaiterConfiguration,
  type WaiterResult,
  checkExceptions,
  createWaiter,
  WaiterState,
} from "@smithy/util-waiter";

import type { CloudFrontClient } from "../CloudFrontClient";
import {
  type GetInvalidationForDistributionTenantCommandInput,
  type GetInvalidationForDistributionTenantCommandOutput,
  GetInvalidationForDistributionTenantCommand,
} from "../commands/GetInvalidationForDistributionTenantCommand";
import type { CloudFrontServiceException } from "../models/CloudFrontServiceException";

const checkState = async (client: CloudFrontClient, input: GetInvalidationForDistributionTenantCommandInput): Promise<WaiterResult<GetInvalidationForDistributionTenantCommandOutput | CloudFrontServiceException>> => {
  let reason;
  try {
    let result: GetInvalidationForDistributionTenantCommandOutput & any = await client.send(new GetInvalidationForDistributionTenantCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.Invalidation.Status;
      }
      if (returnComparator() === "Completed") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 * Wait until an invalidation for distribution tenant has completed.
 *  @deprecated Use waitUntilInvalidationForDistributionTenantCompleted instead. waitForInvalidationForDistributionTenantCompleted does not throw error in non-success cases.
 */
export const waitForInvalidationForDistributionTenantCompleted = async (
  params: WaiterConfiguration<CloudFrontClient>,
  input: GetInvalidationForDistributionTenantCommandInput
): Promise<WaiterResult<GetInvalidationForDistributionTenantCommandOutput | CloudFrontServiceException>> => {
  const serviceDefaults = { minDelay: 20, maxDelay: 600 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Wait until an invalidation for distribution tenant has completed.
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetInvalidationForDistributionTenantCommand for polling.
 */
export const waitUntilInvalidationForDistributionTenantCompleted = async (
  params: WaiterConfiguration<CloudFrontClient>,
  input: GetInvalidationForDistributionTenantCommandInput
): Promise<WaiterResult<GetInvalidationForDistributionTenantCommandOutput>> => {
  const serviceDefaults = { minDelay: 20, maxDelay: 600 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result) as WaiterResult<GetInvalidationForDistributionTenantCommandOutput>;
};
