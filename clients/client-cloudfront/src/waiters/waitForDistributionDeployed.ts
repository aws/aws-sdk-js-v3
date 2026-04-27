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
  type GetDistributionCommandInput,
  type GetDistributionCommandOutput,
  GetDistributionCommand,
} from "../commands/GetDistributionCommand";
import type { CloudFrontServiceException } from "../models/CloudFrontServiceException";

const checkState = async (client: CloudFrontClient, input: GetDistributionCommandInput): Promise<WaiterResult<GetDistributionCommandOutput | CloudFrontServiceException>> => {
  let reason;
  try {
    let result: GetDistributionCommandOutput & any = await client.send(new GetDistributionCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.Distribution.Status;
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
 * Wait until a distribution is deployed.
 *  @deprecated Use waitUntilDistributionDeployed instead. waitForDistributionDeployed does not throw error in non-success cases.
 */
export const waitForDistributionDeployed = async (
  params: WaiterConfiguration<CloudFrontClient>,
  input: GetDistributionCommandInput
): Promise<WaiterResult<GetDistributionCommandOutput | CloudFrontServiceException>> => {
  const serviceDefaults = { minDelay: 60, maxDelay: 2100 };
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
): Promise<WaiterResult<GetDistributionCommandOutput>> => {
  const serviceDefaults = { minDelay: 60, maxDelay: 2100 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result) as WaiterResult<GetDistributionCommandOutput>;
};
