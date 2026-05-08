// smithy-typescript generated code
import {
  type WaiterConfiguration,
  type WaiterResult,
  checkExceptions,
  createWaiter,
  WaiterState,
} from "@smithy/core/client";

import {
  type DescribeSecondaryNetworksCommandInput,
  type DescribeSecondaryNetworksCommandOutput,
  DescribeSecondaryNetworksCommand,
} from "../commands/DescribeSecondaryNetworksCommand";
import type { EC2Client } from "../EC2Client";
import type { EC2ServiceException } from "../models/EC2ServiceException";

const checkState = async (client: EC2Client, input: DescribeSecondaryNetworksCommandInput): Promise<WaiterResult<DescribeSecondaryNetworksCommandOutput | EC2ServiceException>> => {
  let reason;
  try {
    let result: DescribeSecondaryNetworksCommandOutput & any = await client.send(new DescribeSecondaryNetworksCommand(input));
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
        allStringEq_5 = allStringEq_5 && (element_4 == "create-complete")
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
        if (anyStringEq_4 == "create-failed") {
          return { state: WaiterState.FAILURE, reason };
        }
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
    if (exception.name === "InvalidSecondaryNetworkId.NotFound") {
      return { state: WaiterState.RETRY, reason };
    }
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 *
 *  @deprecated Use waitUntilSecondaryNetworkCreateComplete instead. waitForSecondaryNetworkCreateComplete does not throw error in non-success cases.
 */
export const waitForSecondaryNetworkCreateComplete = async (
  params: WaiterConfiguration<EC2Client>,
  input: DescribeSecondaryNetworksCommandInput
): Promise<WaiterResult<DescribeSecondaryNetworksCommandOutput | EC2ServiceException>> => {
  const serviceDefaults = { minDelay: 10, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeSecondaryNetworksCommand for polling.
 */
export const waitUntilSecondaryNetworkCreateComplete = async (
  params: WaiterConfiguration<EC2Client>,
  input: DescribeSecondaryNetworksCommandInput
): Promise<WaiterResult<DescribeSecondaryNetworksCommandOutput>> => {
  const serviceDefaults = { minDelay: 10, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result) as WaiterResult<DescribeSecondaryNetworksCommandOutput>;
};
