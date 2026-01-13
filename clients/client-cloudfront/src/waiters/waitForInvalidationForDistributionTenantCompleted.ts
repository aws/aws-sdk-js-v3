// smithy-typescript generated code
import { checkExceptions, createWaiter, WaiterConfiguration, WaiterResult, WaiterState } from "@smithy/util-waiter";

import { CloudFrontClient } from "../CloudFrontClient";
import {
  GetInvalidationForDistributionTenantCommand,
  GetInvalidationForDistributionTenantCommandInput,
} from "../commands/GetInvalidationForDistributionTenantCommand";

const checkState = async (client: CloudFrontClient, input: GetInvalidationForDistributionTenantCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    let result: any = await client.send(new GetInvalidationForDistributionTenantCommand(input));
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
): Promise<WaiterResult> => {
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
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 20, maxDelay: 600 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
