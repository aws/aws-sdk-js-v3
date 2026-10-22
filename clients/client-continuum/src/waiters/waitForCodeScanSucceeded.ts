// smithy-typescript generated code
import {
  type WaiterConfiguration,
  type WaiterResult,
  checkExceptions,
  createWaiter,
  WaiterState,
} from "@smithy/core/client";

import {
  type GetCodeScanCommandInput,
  type GetCodeScanCommandOutput,
  GetCodeScanCommand,
} from "../commands/GetCodeScanCommand";
import type { ContinuumClient } from "../ContinuumClient";
import type { ContinuumServiceException } from "../models/ContinuumServiceException";

const checkState = async (client: ContinuumClient, input: GetCodeScanCommandInput): Promise<WaiterResult<GetCodeScanCommandOutput | ContinuumServiceException>> => {
  let reason;
  try {
    let result: GetCodeScanCommandOutput & any = await client.send(new GetCodeScanCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.scan.status;
      }
      if (returnComparator() === "SUCCEEDED") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.scan.status;
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
 * Waits until the scan reaches SUCCEEDED, at which point the scan has finished and its findings are available from ListCodeFindings (filter on scanRunId). Triage of those findings and creation of issues continue asynchronously after the scan succeeds. Fails if the scan reaches FAILED. Scans run a build followed by analysis and can take from minutes to several hours. SDKs that use exponential backoff wait at least 60 seconds between polls and back off to at most 8 hours between polls, until the caller's maximum wait time elapses. SDKs and the AWS CLI that use a fixed delay poll every 60 seconds for up to 480 attempts (8 hours).
 *  @deprecated Use waitUntilCodeScanSucceeded instead. waitForCodeScanSucceeded does not throw error in non-success cases.
 */
export const waitForCodeScanSucceeded = async (
  params: WaiterConfiguration<ContinuumClient>,
  input: GetCodeScanCommandInput
): Promise<WaiterResult<GetCodeScanCommandOutput | ContinuumServiceException>> => {
  const serviceDefaults = { minDelay: 60, maxDelay: 28800 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Waits until the scan reaches SUCCEEDED, at which point the scan has finished and its findings are available from ListCodeFindings (filter on scanRunId). Triage of those findings and creation of issues continue asynchronously after the scan succeeds. Fails if the scan reaches FAILED. Scans run a build followed by analysis and can take from minutes to several hours. SDKs that use exponential backoff wait at least 60 seconds between polls and back off to at most 8 hours between polls, until the caller's maximum wait time elapses. SDKs and the AWS CLI that use a fixed delay poll every 60 seconds for up to 480 attempts (8 hours).
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetCodeScanCommand for polling.
 */
export const waitUntilCodeScanSucceeded = async (
  params: WaiterConfiguration<ContinuumClient>,
  input: GetCodeScanCommandInput
): Promise<WaiterResult<GetCodeScanCommandOutput>> => {
  const serviceDefaults = { minDelay: 60, maxDelay: 28800 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result) as WaiterResult<GetCodeScanCommandOutput>;
};
