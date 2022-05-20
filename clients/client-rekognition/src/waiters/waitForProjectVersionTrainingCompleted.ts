// smithy-typescript generated code
import { checkExceptions, createWaiter, WaiterConfiguration, WaiterResult, WaiterState } from "@aws-sdk/util-waiter";

import {
  DescribeProjectVersionsCommand,
  DescribeProjectVersionsCommandInput,
} from "../commands/DescribeProjectVersionsCommand";
import { RekognitionClient } from "../RekognitionClient";

const checkState = async (
  client: RekognitionClient,
  input: DescribeProjectVersionsCommandInput
): Promise<WaiterResult> => {
  let reason;
  try {
    const result: any = await client.send(new DescribeProjectVersionsCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        const flat_1: any[] = [].concat(...result.ProjectVersionDescriptions);
        const projection_3 = flat_1.map((element_2: any) => {
          return element_2.Status;
        });
        return projection_3;
      };
      let allStringEq_5 = returnComparator().length > 0;
      for (const element_4 of returnComparator()) {
        allStringEq_5 = allStringEq_5 && element_4 == "TRAINING_COMPLETED";
      }
      if (allStringEq_5) {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        const flat_1: any[] = [].concat(...result.ProjectVersionDescriptions);
        const projection_3 = flat_1.map((element_2: any) => {
          return element_2.Status;
        });
        return projection_3;
      };
      for (const anyStringEq_4 of returnComparator()) {
        if (anyStringEq_4 == "TRAINING_FAILED") {
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
 * Wait until the ProjectVersion training completes.
 *  @deprecated Use waitUntilProjectVersionTrainingCompleted instead. waitForProjectVersionTrainingCompleted does not throw error in non-success cases.
 */
export const waitForProjectVersionTrainingCompleted = async (
  params: WaiterConfiguration<RekognitionClient>,
  input: DescribeProjectVersionsCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 120, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Wait until the ProjectVersion training completes.
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeProjectVersionsCommand for polling.
 */
export const waitUntilProjectVersionTrainingCompleted = async (
  params: WaiterConfiguration<RekognitionClient>,
  input: DescribeProjectVersionsCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 120, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
