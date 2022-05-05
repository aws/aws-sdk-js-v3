// smithy-typescript generated code
import { checkExceptions, createWaiter, WaiterConfiguration, WaiterResult, WaiterState } from "@aws-sdk/util-waiter";

import { CloudFrontClient } from "../CloudFrontClient";
import {
  GetStreamingDistributionCommand,
  GetStreamingDistributionCommandInput,
} from "../commands/GetStreamingDistributionCommand";

const checkState = async (
  client: CloudFrontClient,
  input: GetStreamingDistributionCommandInput
): Promise<WaiterResult> => {
  let reason;
  try {
    const result: any = await client.send(new GetStreamingDistributionCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.StreamingDistribution.Status;
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
 * Wait until a streaming distribution is deployed.
 *  @deprecated Use waitUntilStreamingDistributionDeployed instead. waitForStreamingDistributionDeployed does not throw error in non-success cases.
 */
export const waitForStreamingDistributionDeployed = async (
  params: WaiterConfiguration<CloudFrontClient>,
  input: GetStreamingDistributionCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 60, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Wait until a streaming distribution is deployed.
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetStreamingDistributionCommand for polling.
 */
export const waitUntilStreamingDistributionDeployed = async (
  params: WaiterConfiguration<CloudFrontClient>,
  input: GetStreamingDistributionCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 60, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
