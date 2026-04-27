// smithy-typescript generated code
import {
  type WaiterConfiguration,
  type WaiterResult,
  checkExceptions,
  createWaiter,
  WaiterState,
} from "@smithy/util-waiter";

import {
  type DescribeDaemonTaskDefinitionCommandInput,
  type DescribeDaemonTaskDefinitionCommandOutput,
  DescribeDaemonTaskDefinitionCommand,
} from "../commands/DescribeDaemonTaskDefinitionCommand";
import type { ECSClient } from "../ECSClient";
import type { ECSServiceException } from "../models/ECSServiceException";

const checkState = async (client: ECSClient, input: DescribeDaemonTaskDefinitionCommandInput): Promise<WaiterResult<DescribeDaemonTaskDefinitionCommandOutput | ECSServiceException>> => {
  let reason;
  try {
    let result: DescribeDaemonTaskDefinitionCommandOutput & any = await client.send(new DescribeDaemonTaskDefinitionCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.daemonTaskDefinition.status;
      }
      if (returnComparator() === "ACTIVE") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.daemonTaskDefinition.status;
      }
      if (returnComparator() === "DELETE_IN_PROGRESS") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.daemonTaskDefinition.status;
      }
      if (returnComparator() === "DELETED") {
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
 *  @deprecated Use waitUntilDaemonTaskDefinitionActive instead. waitForDaemonTaskDefinitionActive does not throw error in non-success cases.
 */
export const waitForDaemonTaskDefinitionActive = async (
  params: WaiterConfiguration<ECSClient>,
  input: DescribeDaemonTaskDefinitionCommandInput
): Promise<WaiterResult<DescribeDaemonTaskDefinitionCommandOutput | ECSServiceException>> => {
  const serviceDefaults = { minDelay: 15, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeDaemonTaskDefinitionCommand for polling.
 */
export const waitUntilDaemonTaskDefinitionActive = async (
  params: WaiterConfiguration<ECSClient>,
  input: DescribeDaemonTaskDefinitionCommandInput
): Promise<WaiterResult<DescribeDaemonTaskDefinitionCommandOutput>> => {
  const serviceDefaults = { minDelay: 15, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result) as WaiterResult<DescribeDaemonTaskDefinitionCommandOutput>;
};
