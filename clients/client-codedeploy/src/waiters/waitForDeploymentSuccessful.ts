// smithy-typescript generated code
import {
  type WaiterConfiguration,
  type WaiterResult,
  checkExceptions,
  createWaiter,
  WaiterState,
} from "@smithy/core/client";

import type { CodeDeployClient } from "../CodeDeployClient";
import {
  type GetDeploymentCommandInput,
  type GetDeploymentCommandOutput,
  GetDeploymentCommand,
} from "../commands/GetDeploymentCommand";
import type { CodeDeployServiceException } from "../models/CodeDeployServiceException";

const checkState = async (client: CodeDeployClient, input: GetDeploymentCommandInput): Promise<WaiterResult<GetDeploymentCommandOutput | CodeDeployServiceException>> => {
  let reason;
  try {
    let result: GetDeploymentCommandOutput & any = await client.send(new GetDeploymentCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.deploymentInfo.status;
      }
      if (returnComparator() === "Succeeded") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.deploymentInfo.status;
      }
      if (returnComparator() === "Failed") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.deploymentInfo.status;
      }
      if (returnComparator() === "Stopped") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 *
 *  @deprecated Use waitUntilDeploymentSuccessful instead. waitForDeploymentSuccessful does not throw error in non-success cases.
 */
export const waitForDeploymentSuccessful = async (
  params: WaiterConfiguration<CodeDeployClient>,
  input: GetDeploymentCommandInput
): Promise<WaiterResult<GetDeploymentCommandOutput | CodeDeployServiceException>> => {
  const serviceDefaults = { minDelay: 15, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetDeploymentCommand for polling.
 */
export const waitUntilDeploymentSuccessful = async (
  params: WaiterConfiguration<CodeDeployClient>,
  input: GetDeploymentCommandInput
): Promise<WaiterResult<GetDeploymentCommandOutput>> => {
  const serviceDefaults = { minDelay: 15, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result) as WaiterResult<GetDeploymentCommandOutput>;
};
