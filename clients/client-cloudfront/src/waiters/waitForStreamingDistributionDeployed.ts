// smithy-typescript generated code
import {
  type WaiterConfiguration,
  type WaiterResult,
  checkExceptions,
  createWaiter,
  WaiterState,
} from "@smithy/core/client";

import type { CloudFrontClient } from "../CloudFrontClient";
import {
  type GetStreamingDistributionCommandInput,
  type GetStreamingDistributionCommandOutput,
  GetStreamingDistributionCommand,
} from "../commands/GetStreamingDistributionCommand";
import type { CloudFrontServiceException } from "../models/CloudFrontServiceException";

const checkState = async (client: CloudFrontClient, input: GetStreamingDistributionCommandInput): Promise<WaiterResult<GetStreamingDistributionCommandOutput | CloudFrontServiceException>> => {
  let reason;
  try {
    let result: GetStreamingDistributionCommandOutput & any = await client.send(new GetStreamingDistributionCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.StreamingDistribution.Status;
      }
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
): Promise<WaiterResult<GetStreamingDistributionCommandOutput | CloudFrontServiceException>> => {
  const serviceDefaults = { minDelay: 60, maxDelay: 1500 };
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
): Promise<WaiterResult<GetStreamingDistributionCommandOutput>> => {
  const serviceDefaults = { minDelay: 60, maxDelay: 1500 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result) as WaiterResult<GetStreamingDistributionCommandOutput>;
};
