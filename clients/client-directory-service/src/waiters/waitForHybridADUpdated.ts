// smithy-typescript generated code
import {
  type WaiterConfiguration,
  type WaiterResult,
  checkExceptions,
  createWaiter,
  WaiterState,
} from "@smithy/core/client";

import {
  type DescribeHybridADUpdateCommandInput,
  type DescribeHybridADUpdateCommandOutput,
  DescribeHybridADUpdateCommand,
} from "../commands/DescribeHybridADUpdateCommand";
import type { DirectoryServiceClient } from "../DirectoryServiceClient";
import type { DirectoryServiceServiceException } from "../models/DirectoryServiceServiceException";

const checkState = async (client: DirectoryServiceClient, input: DescribeHybridADUpdateCommandInput): Promise<WaiterResult<DescribeHybridADUpdateCommandOutput | DirectoryServiceServiceException>> => {
  let reason;
  try {
    let result: DescribeHybridADUpdateCommandOutput & any = await client.send(new DescribeHybridADUpdateCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        let flat_1: any[] = [].concat(...result.UpdateActivities.SelfManagedInstances);
        let projection_3 = flat_1.map((element_2: any) => {
          return element_2.Status;
        });
        return projection_3;
      }
      let allStringEq_5 = (returnComparator().length > 0);
      for (let element_4 of returnComparator()) {
        allStringEq_5 = allStringEq_5 && (element_4 == "Updated")
      }
      if (allStringEq_5) {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        let flat_1: any[] = [].concat(...result.UpdateActivities.SelfManagedInstances);
        let projection_3 = flat_1.map((element_2: any) => {
          return element_2.Status;
        });
        return projection_3;
      }
      for (let anyStringEq_4 of returnComparator()) {
        if (anyStringEq_4 == "UpdateFailed") {
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
 *  @deprecated Use waitUntilHybridADUpdated instead. waitForHybridADUpdated does not throw error in non-success cases.
 */
export const waitForHybridADUpdated = async (
  params: WaiterConfiguration<DirectoryServiceClient>,
  input: DescribeHybridADUpdateCommandInput
): Promise<WaiterResult<DescribeHybridADUpdateCommandOutput | DirectoryServiceServiceException>> => {
  const serviceDefaults = { minDelay: 120, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeHybridADUpdateCommand for polling.
 */
export const waitUntilHybridADUpdated = async (
  params: WaiterConfiguration<DirectoryServiceClient>,
  input: DescribeHybridADUpdateCommandInput
): Promise<WaiterResult<DescribeHybridADUpdateCommandOutput>> => {
  const serviceDefaults = { minDelay: 120, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result) as WaiterResult<DescribeHybridADUpdateCommandOutput>;
};
