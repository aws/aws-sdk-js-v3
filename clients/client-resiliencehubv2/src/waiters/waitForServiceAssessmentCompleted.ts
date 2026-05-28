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
import type { Resiliencehubv2ServiceException } from "../models/Resiliencehubv2ServiceException";
import type { Resiliencehubv2Client } from "../Resiliencehubv2Client";

const checkState = async (client: Resiliencehubv2Client, input: GetServiceCommandInput): Promise<WaiterResult<GetServiceCommandOutput | Resiliencehubv2ServiceException>> => {
  let reason;
  try {
    let result: GetServiceCommandOutput & any = await client.send(new GetServiceCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.service.assessmentStatus;
      }
      if (returnComparator() === "SUCCESS") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.service.assessmentStatus;
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
 * Wait until a service assessment completes successfully
 *  @deprecated Use waitUntilServiceAssessmentCompleted instead. waitForServiceAssessmentCompleted does not throw error in non-success cases.
 */
export const waitForServiceAssessmentCompleted = async (
  params: WaiterConfiguration<Resiliencehubv2Client>,
  input: GetServiceCommandInput
): Promise<WaiterResult<GetServiceCommandOutput | Resiliencehubv2ServiceException>> => {
  const serviceDefaults = { minDelay: 30, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Wait until a service assessment completes successfully
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetServiceCommand for polling.
 */
export const waitUntilServiceAssessmentCompleted = async (
  params: WaiterConfiguration<Resiliencehubv2Client>,
  input: GetServiceCommandInput
): Promise<WaiterResult<GetServiceCommandOutput>> => {
  const serviceDefaults = { minDelay: 30, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result) as WaiterResult<GetServiceCommandOutput>;
};
