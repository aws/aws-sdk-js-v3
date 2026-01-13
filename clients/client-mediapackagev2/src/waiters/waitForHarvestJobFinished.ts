// smithy-typescript generated code
import { checkExceptions, createWaiter, WaiterConfiguration, WaiterResult, WaiterState } from "@smithy/util-waiter";

import { GetHarvestJobCommand, GetHarvestJobCommandInput } from "../commands/GetHarvestJobCommand";
import { MediaPackageV2Client } from "../MediaPackageV2Client";

const checkState = async (client: MediaPackageV2Client, input: GetHarvestJobCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    let result: any = await client.send(new GetHarvestJobCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.Status;
      }
      if (returnComparator() === "COMPLETED") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.Status;
      }
      if (returnComparator() === "CANCELLED") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.Status;
      }
      if (returnComparator() === "FAILED") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.Status;
      }
      if (returnComparator() === "QUEUED") {
        return { state: WaiterState.RETRY, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.Status;
      }
      if (returnComparator() === "IN_PROGRESS") {
        return { state: WaiterState.RETRY, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 *
 *  @deprecated Use waitUntilHarvestJobFinished instead. waitForHarvestJobFinished does not throw error in non-success cases.
 */
export const waitForHarvestJobFinished = async (
  params: WaiterConfiguration<MediaPackageV2Client>,
  input: GetHarvestJobCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 2, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetHarvestJobCommand for polling.
 */
export const waitUntilHarvestJobFinished = async (
  params: WaiterConfiguration<MediaPackageV2Client>,
  input: GetHarvestJobCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 2, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
