// smithy-typescript generated code
import {
  type WaiterConfiguration,
  type WaiterResult,
  checkExceptions,
  createWaiter,
  WaiterState,
} from "@smithy/util-waiter";

import {
  type DescribeSecondaryNetworksCommandInput,
  DescribeSecondaryNetworksCommand,
} from "../commands/DescribeSecondaryNetworksCommand";
import type { EC2Client } from "../EC2Client";

const checkState = async (client: EC2Client, input: DescribeSecondaryNetworksCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    let result: any = await client.send(new DescribeSecondaryNetworksCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        let flat_1: any[] = [].concat(...result.SecondaryNetworks);
        let projection_3 = flat_1.map((element_2: any) => {
          return element_2.State;
        });
        return projection_3;
      }
      let allStringEq_5 = (returnComparator().length > 0);
      for (let element_4 of returnComparator()) {
        allStringEq_5 = allStringEq_5 && (element_4 == "delete-complete")
      }
      if (allStringEq_5) {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        let flat_1: any[] = [].concat(...result.SecondaryNetworks);
        let projection_3 = flat_1.map((element_2: any) => {
          return element_2.State;
        });
        return projection_3;
      }
      for (let anyStringEq_4 of returnComparator()) {
        if (anyStringEq_4 == "delete-failed") {
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
 *  @deprecated Use waitUntilSecondaryNetworkDeleteComplete instead. waitForSecondaryNetworkDeleteComplete does not throw error in non-success cases.
 */
export const waitForSecondaryNetworkDeleteComplete = async (
  params: WaiterConfiguration<EC2Client>,
  input: DescribeSecondaryNetworksCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 10, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeSecondaryNetworksCommand for polling.
 */
export const waitUntilSecondaryNetworkDeleteComplete = async (
  params: WaiterConfiguration<EC2Client>,
  input: DescribeSecondaryNetworksCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 10, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
