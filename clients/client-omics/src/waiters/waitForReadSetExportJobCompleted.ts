// smithy-typescript generated code
import { checkExceptions, createWaiter, WaiterConfiguration, WaiterResult, WaiterState } from "@aws-sdk/util-waiter";

import { GetReadSetExportJobCommand, GetReadSetExportJobCommandInput } from "../commands/GetReadSetExportJobCommand";
import { OmicsClient } from "../OmicsClient";

const checkState = async (client: OmicsClient, input: GetReadSetExportJobCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    const result: any = await client.send(new GetReadSetExportJobCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.status;
      };
      if (returnComparator() === "COMPLETED") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.status;
      };
      if (returnComparator() === "SUBMITTED") {
        return { state: WaiterState.RETRY, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.status;
      };
      if (returnComparator() === "IN_PROGRESS") {
        return { state: WaiterState.RETRY, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.status;
      };
      if (returnComparator() === "CANCELLING") {
        return { state: WaiterState.RETRY, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.status;
      };
      if (returnComparator() === "CANCELLED") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.status;
      };
      if (returnComparator() === "FAILED") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.status;
      };
      if (returnComparator() === "COMPLETED_WITH_FAILURES") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 * Wait until a job is completed.
 *  @deprecated Use waitUntilReadSetExportJobCompleted instead. waitForReadSetExportJobCompleted does not throw error in non-success cases.
 */
export const waitForReadSetExportJobCompleted = async (
  params: WaiterConfiguration<OmicsClient>,
  input: GetReadSetExportJobCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 30, maxDelay: 600 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Wait until a job is completed.
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetReadSetExportJobCommand for polling.
 */
export const waitUntilReadSetExportJobCompleted = async (
  params: WaiterConfiguration<OmicsClient>,
  input: GetReadSetExportJobCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 30, maxDelay: 600 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
