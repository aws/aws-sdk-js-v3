// smithy-typescript generated code
import {
  type WaiterConfiguration,
  type WaiterResult,
  checkExceptions,
  createWaiter,
  WaiterState,
} from "@smithy/core/client";

import type { AbuseSignalClient } from "../AbuseSignalClient";
import {
  type GetAbuseReportStatusCommandInput,
  type GetAbuseReportStatusCommandOutput,
  GetAbuseReportStatusCommand,
} from "../commands/GetAbuseReportStatusCommand";
import type { AbuseSignalServiceException } from "../models/AbuseSignalServiceException";

const checkState = async (client: AbuseSignalClient, input: GetAbuseReportStatusCommandInput): Promise<WaiterResult<GetAbuseReportStatusCommandOutput | AbuseSignalServiceException>> => {
  let reason;
  try {
    let result: GetAbuseReportStatusCommandOutput & any = await client.send(new GetAbuseReportStatusCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.status;
      }
      if (returnComparator() === "PROCESSING") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.status;
      }
      if (returnComparator() === "COMPLETED") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
    if (exception.name === "ResourceNotFoundException") {
      return { state: WaiterState.RETRY, reason };
    }
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 * Wait until an abuse report has at least reached PROCESSING.
 *
 * A report advances QUEUED -> PROCESSING -> COMPLETED. A report can
 * go from QUEUED all the way to COMPLETED in well under a second,
 * so a poller that only accepts PROCESSING can miss the transient
 * PROCESSING window entirely and then poll forever. COMPLETED
 * therefore also satisfies this waiter: it implies the report already
 * passed through PROCESSING.
 *  @deprecated Use waitUntilReportProcessing instead. waitForReportProcessing does not throw error in non-success cases.
 */
export const waitForReportProcessing = async (
  params: WaiterConfiguration<AbuseSignalClient>,
  input: GetAbuseReportStatusCommandInput
): Promise<WaiterResult<GetAbuseReportStatusCommandOutput | AbuseSignalServiceException>> => {
  const serviceDefaults = { minDelay: 1, maxDelay: 5 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Wait until an abuse report has at least reached PROCESSING.
 *
 * A report advances QUEUED -> PROCESSING -> COMPLETED. A report can
 * go from QUEUED all the way to COMPLETED in well under a second,
 * so a poller that only accepts PROCESSING can miss the transient
 * PROCESSING window entirely and then poll forever. COMPLETED
 * therefore also satisfies this waiter: it implies the report already
 * passed through PROCESSING.
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetAbuseReportStatusCommand for polling.
 */
export const waitUntilReportProcessing = async (
  params: WaiterConfiguration<AbuseSignalClient>,
  input: GetAbuseReportStatusCommandInput
): Promise<WaiterResult<GetAbuseReportStatusCommandOutput>> => {
  const serviceDefaults = { minDelay: 1, maxDelay: 5 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result) as WaiterResult<GetAbuseReportStatusCommandOutput>;
};
