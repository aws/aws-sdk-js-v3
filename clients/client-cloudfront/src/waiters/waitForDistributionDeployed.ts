// smithy-typescript generated code
import { checkExceptions, createWaiter, WaiterConfiguration, WaiterResult, WaiterState } from "@aws-sdk/util-waiter";

import { CloudFrontClient } from "../CloudFrontClient";
import { GetDistributionCommand, GetDistributionCommandInput } from "../commands/GetDistributionCommand";

const checkState = async (client: CloudFrontClient, input: GetDistributionCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    const result: any = await client.send(new GetDistributionCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.Distribution.Status;
      };
      if (returnComparator() === "Deployed") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 * Wait until a distribution is deployed.
 *  @deprecated Use waitUntilDistributionDeployed instead. waitForDistributionDeployed does not throw error in non-success cases.
 */
export const waitForDistributionDeployed = async (
  params: WaiterConfiguration<CloudFrontClient>,
  input: GetDistributionCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 60, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Wait until a distribution is deployed.
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetDistributionCommand for polling.
 */
export const waitUntilDistributionDeployed = async (
  params: WaiterConfiguration<CloudFrontClient>,
  input: GetDistributionCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 60, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
