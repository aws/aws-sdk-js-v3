// smithy-typescript generated code
import { checkExceptions, createWaiter, WaiterConfiguration, WaiterResult, WaiterState } from "@aws-sdk/util-waiter";

import {
  DescribeBatchPredictionsCommand,
  DescribeBatchPredictionsCommandInput,
} from "../commands/DescribeBatchPredictionsCommand";
import { MachineLearningClient } from "../MachineLearningClient";

const checkState = async (
  client: MachineLearningClient,
  input: DescribeBatchPredictionsCommandInput
): Promise<WaiterResult> => {
  let reason;
  try {
    const result: any = await client.send(new DescribeBatchPredictionsCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        const flat_1: any[] = [].concat(...result.Results);
        const projection_3 = flat_1.map((element_2: any) => {
          return element_2.Status;
        });
        return projection_3;
      };
      let allStringEq_5 = returnComparator().length > 0;
      for (const element_4 of returnComparator()) {
        allStringEq_5 = allStringEq_5 && element_4 == "COMPLETED";
      }
      if (allStringEq_5) {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        const flat_1: any[] = [].concat(...result.Results);
        const projection_3 = flat_1.map((element_2: any) => {
          return element_2.Status;
        });
        return projection_3;
      };
      for (const anyStringEq_4 of returnComparator()) {
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
): Promise<WaiterResult> => {
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
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 30, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
