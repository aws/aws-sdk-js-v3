// smithy-typescript generated code
import {
  type WaiterConfiguration,
  type WaiterResult,
  checkExceptions,
  createWaiter,
  WaiterState,
} from "@smithy/core/client";

import {
  type DescribeBatchPredictionsCommandInput,
  type DescribeBatchPredictionsCommandOutput,
  DescribeBatchPredictionsCommand,
} from "../commands/DescribeBatchPredictionsCommand";
import type { MachineLearningClient } from "../MachineLearningClient";
import type { MachineLearningServiceException } from "../models/MachineLearningServiceException";

const checkState = async (client: MachineLearningClient, input: DescribeBatchPredictionsCommandInput): Promise<WaiterResult<DescribeBatchPredictionsCommandOutput | MachineLearningServiceException>> => {
  let reason;
  try {
    let result: DescribeBatchPredictionsCommandOutput & any = await client.send(new DescribeBatchPredictionsCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        let flat_1: any[] = [].concat(...result.Results);
        let projection_3 = flat_1.map((element_2: any) => {
          return element_2.Status;
        });
        return projection_3;
      }
      let allStringEq_5 = (returnComparator().length > 0);
      for (let element_4 of returnComparator()) {
        allStringEq_5 = allStringEq_5 && (element_4 == "COMPLETED")
      }
      if (allStringEq_5) {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        let flat_1: any[] = [].concat(...result.Results);
        let projection_3 = flat_1.map((element_2: any) => {
          return element_2.Status;
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
 *
 *  @deprecated Use waitUntilBatchPredictionAvailable instead. waitForBatchPredictionAvailable does not throw error in non-success cases.
 */
export const waitForBatchPredictionAvailable = async (
  params: WaiterConfiguration<MachineLearningClient>,
  input: DescribeBatchPredictionsCommandInput
): Promise<WaiterResult<DescribeBatchPredictionsCommandOutput | MachineLearningServiceException>> => {
  const serviceDefaults = { minDelay: 30, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeBatchPredictionsCommand for polling.
 */
export const waitUntilBatchPredictionAvailable = async (
  params: WaiterConfiguration<MachineLearningClient>,
  input: DescribeBatchPredictionsCommandInput
): Promise<WaiterResult<DescribeBatchPredictionsCommandOutput>> => {
  const serviceDefaults = { minDelay: 30, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result) as WaiterResult<DescribeBatchPredictionsCommandOutput>;
};
