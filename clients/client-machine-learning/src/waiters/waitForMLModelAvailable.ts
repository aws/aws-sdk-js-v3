// smithy-typescript generated code
import {
  type WaiterConfiguration,
  type WaiterResult,
  checkExceptions,
  createWaiter,
  WaiterState,
} from "@smithy/util-waiter";

import {
  type DescribeMLModelsCommandInput,
  type DescribeMLModelsCommandOutput,
  DescribeMLModelsCommand,
} from "../commands/DescribeMLModelsCommand";
import type { MachineLearningClient } from "../MachineLearningClient";
import type { MachineLearningServiceException } from "../models/MachineLearningServiceException";

const checkState = async (client: MachineLearningClient, input: DescribeMLModelsCommandInput): Promise<WaiterResult<DescribeMLModelsCommandOutput | MachineLearningServiceException>> => {
  let reason;
  try {
    let result: DescribeMLModelsCommandOutput & any = await client.send(new DescribeMLModelsCommand(input));
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
 *  @deprecated Use waitUntilMLModelAvailable instead. waitForMLModelAvailable does not throw error in non-success cases.
 */
export const waitForMLModelAvailable = async (
  params: WaiterConfiguration<MachineLearningClient>,
  input: DescribeMLModelsCommandInput
): Promise<WaiterResult<DescribeMLModelsCommandOutput | MachineLearningServiceException>> => {
  const serviceDefaults = { minDelay: 30, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeMLModelsCommand for polling.
 */
export const waitUntilMLModelAvailable = async (
  params: WaiterConfiguration<MachineLearningClient>,
  input: DescribeMLModelsCommandInput
): Promise<WaiterResult<DescribeMLModelsCommandOutput>> => {
  const serviceDefaults = { minDelay: 30, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result) as WaiterResult<DescribeMLModelsCommandOutput>;
};
