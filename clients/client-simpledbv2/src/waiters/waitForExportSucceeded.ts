// smithy-typescript generated code
import {
  type WaiterConfiguration,
  type WaiterResult,
  checkExceptions,
  createWaiter,
  WaiterState,
} from "@smithy/util-waiter";

import { type GetExportCommandInput, GetExportCommand } from "../commands/GetExportCommand";
import type { SimpleDBv2Client } from "../SimpleDBv2Client";

const checkState = async (client: SimpleDBv2Client, input: GetExportCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    let result: any = await client.send(new GetExportCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.exportStatus;
      }
      if (returnComparator() === "SUCCEEDED") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.exportStatus;
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
 *
 *  @deprecated Use waitUntilExportSucceeded instead. waitForExportSucceeded does not throw error in non-success cases.
 */
export const waitForExportSucceeded = async (
  params: WaiterConfiguration<SimpleDBv2Client>,
  input: GetExportCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 30, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetExportCommand for polling.
 */
export const waitUntilExportSucceeded = async (
  params: WaiterConfiguration<SimpleDBv2Client>,
  input: GetExportCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 30, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
