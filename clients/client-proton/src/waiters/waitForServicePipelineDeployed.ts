// smithy-typescript generated code
import {
  type WaiterConfiguration,
  type WaiterResult,
  checkExceptions,
  createWaiter,
  WaiterState,
} from "@smithy/core/client";

import {
  type GetServiceCommandInput,
  type GetServiceCommandOutput,
  GetServiceCommand,
} from "../commands/GetServiceCommand";
import type { ProtonServiceException } from "../models/ProtonServiceException";
import type { ProtonClient } from "../ProtonClient";

const checkState = async (client: ProtonClient, input: GetServiceCommandInput): Promise<WaiterResult<GetServiceCommandOutput | ProtonServiceException>> => {
  let reason;
  try {
    let result: GetServiceCommandOutput & any = await client.send(new GetServiceCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.service.pipeline.deploymentStatus;
      }
      if (returnComparator() === "SUCCEEDED") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.service.pipeline.deploymentStatus;
      }
      if (returnComparator() === "FAILED") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 * Wait until an ServicePipeline is deployed. Use this after invoking CreateService or UpdateServicePipeline
 *  @deprecated Use waitUntilServicePipelineDeployed instead. waitForServicePipelineDeployed does not throw error in non-success cases.
 */
export const waitForServicePipelineDeployed = async (
  params: WaiterConfiguration<ProtonClient>,
  input: GetServiceCommandInput
): Promise<WaiterResult<GetServiceCommandOutput | ProtonServiceException>> => {
  const serviceDefaults = { minDelay: 10, maxDelay: 3600 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Wait until an ServicePipeline is deployed. Use this after invoking CreateService or UpdateServicePipeline
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetServiceCommand for polling.
 */
export const waitUntilServicePipelineDeployed = async (
  params: WaiterConfiguration<ProtonClient>,
  input: GetServiceCommandInput
): Promise<WaiterResult<GetServiceCommandOutput>> => {
  const serviceDefaults = { minDelay: 10, maxDelay: 3600 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result) as WaiterResult<GetServiceCommandOutput>;
};
