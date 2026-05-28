// smithy-typescript generated code
import {
  type WaiterConfiguration,
  type WaiterResult,
  checkExceptions,
  createWaiter,
  WaiterState,
} from "@smithy/core/client";

import {
  type ListReportsCommandInput,
  type ListReportsCommandOutput,
  ListReportsCommand,
} from "../commands/ListReportsCommand";
import type { Resiliencehubv2ServiceException } from "../models/Resiliencehubv2ServiceException";
import type { Resiliencehubv2Client } from "../Resiliencehubv2Client";

const checkState = async (client: Resiliencehubv2Client, input: ListReportsCommandInput): Promise<WaiterResult<ListReportsCommandOutput | Resiliencehubv2ServiceException>> => {
  let reason;
  try {
    let result: ListReportsCommandOutput & any = await client.send(new ListReportsCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        let flat_1: any[] = [].concat(...result.reportGenerationResults);
        return (flat_1.length == 0);
      }
      if (returnComparator() == true) {
        return { state: WaiterState.RETRY, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        let flat_1: any[] = [].concat(...result.reportGenerationResults);
        let projection_3 = flat_1.map((element_2: any) => {
          return element_2.status;
        });
        return projection_3;
      }
      let allStringEq_5 = (returnComparator().length > 0);
      for (let element_4 of returnComparator()) {
        allStringEq_5 = allStringEq_5 && (element_4 == "SUCCEEDED")
      }
      if (allStringEq_5) {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        let flat_1: any[] = [].concat(...result.reportGenerationResults);
        let projection_3 = flat_1.map((element_2: any) => {
          return element_2.status;
        });
        return projection_3;
      }
      for (let anyStringEq_4 of returnComparator()) {
        if (anyStringEq_4 == "FAILED") {
          return { state: WaiterState.FAILURE, reason };
        }
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 * Wait until report generation succeeds
 *  @deprecated Use waitUntilReportSucceeded instead. waitForReportSucceeded does not throw error in non-success cases.
 */
export const waitForReportSucceeded = async (
  params: WaiterConfiguration<Resiliencehubv2Client>,
  input: ListReportsCommandInput
): Promise<WaiterResult<ListReportsCommandOutput | Resiliencehubv2ServiceException>> => {
  const serviceDefaults = { minDelay: 30, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Wait until report generation succeeds
 *  @param params - Waiter configuration options.
 *  @param input - The input to ListReportsCommand for polling.
 */
export const waitUntilReportSucceeded = async (
  params: WaiterConfiguration<Resiliencehubv2Client>,
  input: ListReportsCommandInput
): Promise<WaiterResult<ListReportsCommandOutput>> => {
  const serviceDefaults = { minDelay: 30, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result) as WaiterResult<ListReportsCommandOutput>;
};
