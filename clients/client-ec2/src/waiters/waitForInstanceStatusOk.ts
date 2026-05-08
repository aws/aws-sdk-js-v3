// smithy-typescript generated code
import {
  type WaiterConfiguration,
  type WaiterResult,
  checkExceptions,
  createWaiter,
  WaiterState,
} from "@smithy/core/client";

import {
  type DescribeInstanceStatusCommandInput,
  type DescribeInstanceStatusCommandOutput,
  DescribeInstanceStatusCommand,
} from "../commands/DescribeInstanceStatusCommand";
import type { EC2Client } from "../EC2Client";
import type { EC2ServiceException } from "../models/EC2ServiceException";

const checkState = async (client: EC2Client, input: DescribeInstanceStatusCommandInput): Promise<WaiterResult<DescribeInstanceStatusCommandOutput | EC2ServiceException>> => {
  let reason;
  try {
    let result: DescribeInstanceStatusCommandOutput & any = await client.send(new DescribeInstanceStatusCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        let flat_1: any[] = [].concat(...result.InstanceStatuses);
        let projection_3 = flat_1.map((element_2: any) => {
          return element_2.InstanceStatus.Status;
        });
        return projection_3;
      }
      let allStringEq_5 = (returnComparator().length > 0);
      for (let element_4 of returnComparator()) {
        allStringEq_5 = allStringEq_5 && (element_4 == "ok")
      }
      if (allStringEq_5) {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
    if (exception.name === "InvalidInstanceID.NotFound") {
      return { state: WaiterState.RETRY, reason };
    }
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 *
 *  @deprecated Use waitUntilInstanceStatusOk instead. waitForInstanceStatusOk does not throw error in non-success cases.
 */
export const waitForInstanceStatusOk = async (
  params: WaiterConfiguration<EC2Client>,
  input: DescribeInstanceStatusCommandInput
): Promise<WaiterResult<DescribeInstanceStatusCommandOutput | EC2ServiceException>> => {
  const serviceDefaults = { minDelay: 15, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeInstanceStatusCommand for polling.
 */
export const waitUntilInstanceStatusOk = async (
  params: WaiterConfiguration<EC2Client>,
  input: DescribeInstanceStatusCommandInput
): Promise<WaiterResult<DescribeInstanceStatusCommandOutput>> => {
  const serviceDefaults = { minDelay: 15, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result) as WaiterResult<DescribeInstanceStatusCommandOutput>;
};
