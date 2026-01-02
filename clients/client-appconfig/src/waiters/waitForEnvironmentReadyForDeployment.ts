// smithy-typescript generated code
import { checkExceptions, createWaiter, WaiterConfiguration, WaiterResult, WaiterState } from "@smithy/util-waiter";

import { AppConfigClient } from "../AppConfigClient";
import { GetEnvironmentCommand, GetEnvironmentCommandInput } from "../commands/GetEnvironmentCommand";

const checkState = async (client: AppConfigClient, input: GetEnvironmentCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    let result: any = await client.send(new GetEnvironmentCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.State;
      }
      if (returnComparator() === "ReadyForDeployment") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.State;
      }
      if (returnComparator() === "RolledBack") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.State;
      }
      if (returnComparator() === "Reverted") {
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
 *  @deprecated Use waitUntilEnvironmentReadyForDeployment instead. waitForEnvironmentReadyForDeployment does not throw error in non-success cases.
 */
export const waitForEnvironmentReadyForDeployment = async (
  params: WaiterConfiguration<AppConfigClient>,
  input: GetEnvironmentCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 30, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetEnvironmentCommand for polling.
 */
export const waitUntilEnvironmentReadyForDeployment = async (
  params: WaiterConfiguration<AppConfigClient>,
  input: GetEnvironmentCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 30, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
