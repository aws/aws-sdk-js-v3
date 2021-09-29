import { EC2Client } from "../EC2Client";
import {
  DescribeSpotInstanceRequestsCommand,
  DescribeSpotInstanceRequestsCommandInput,
} from "../commands/DescribeSpotInstanceRequestsCommand";
import { WaiterConfiguration, WaiterResult, WaiterState, checkExceptions, createWaiter } from "@aws-sdk/util-waiter";

const checkState = async (
  client: EC2Client,
  input: DescribeSpotInstanceRequestsCommandInput
): Promise<WaiterResult> => {
  let reason;
  try {
    let result: any = await client.send(new DescribeSpotInstanceRequestsCommand(input));
    reason = result;
    try {
      let returnComparator = () => {
        let flat_1: any[] = [].concat(...result.SpotInstanceRequests);
        let projection_3 = flat_1.map((element_2: any) => {
          return element_2.Status.Code;
        });
        return projection_3;
      };
      let allStringEq_5 = returnComparator().length > 0;
      for (let element_4 of returnComparator()) {
        allStringEq_5 = allStringEq_5 && element_4 == "fulfilled";
      }
      if (allStringEq_5) {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      let returnComparator = () => {
        let flat_1: any[] = [].concat(...result.SpotInstanceRequests);
        let projection_3 = flat_1.map((element_2: any) => {
          return element_2.Status.Code;
        });
        return projection_3;
      };
      let allStringEq_5 = returnComparator().length > 0;
      for (let element_4 of returnComparator()) {
        allStringEq_5 = allStringEq_5 && element_4 == "request-canceled-and-instance-running";
      }
      if (allStringEq_5) {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      let returnComparator = () => {
        let flat_1: any[] = [].concat(...result.SpotInstanceRequests);
        let projection_3 = flat_1.map((element_2: any) => {
          return element_2.Status.Code;
        });
        return projection_3;
      };
      for (let anyStringEq_4 of returnComparator()) {
        if (anyStringEq_4 == "schedule-expired") {
          return { state: WaiterState.FAILURE, reason };
        }
      }
    } catch (e) {}
    try {
      let returnComparator = () => {
        let flat_1: any[] = [].concat(...result.SpotInstanceRequests);
        let projection_3 = flat_1.map((element_2: any) => {
          return element_2.Status.Code;
        });
        return projection_3;
      };
      for (let anyStringEq_4 of returnComparator()) {
        if (anyStringEq_4 == "canceled-before-fulfillment") {
          return { state: WaiterState.FAILURE, reason };
        }
      }
    } catch (e) {}
    try {
      let returnComparator = () => {
        let flat_1: any[] = [].concat(...result.SpotInstanceRequests);
        let projection_3 = flat_1.map((element_2: any) => {
          return element_2.Status.Code;
        });
        return projection_3;
      };
      for (let anyStringEq_4 of returnComparator()) {
        if (anyStringEq_4 == "bad-parameters") {
          return { state: WaiterState.FAILURE, reason };
        }
      }
    } catch (e) {}
    try {
      let returnComparator = () => {
        let flat_1: any[] = [].concat(...result.SpotInstanceRequests);
        let projection_3 = flat_1.map((element_2: any) => {
          return element_2.Status.Code;
        });
        return projection_3;
      };
      for (let anyStringEq_4 of returnComparator()) {
        if (anyStringEq_4 == "system-error") {
          return { state: WaiterState.FAILURE, reason };
        }
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
    if (exception.name && exception.name == "InvalidSpotInstanceRequestID.NotFound") {
      return { state: WaiterState.RETRY, reason };
    }
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 *
 *  @deprecated Use waitUntilSpotInstanceRequestFulfilled instead. waitForSpotInstanceRequestFulfilled does not throw error in non-success cases.
 */
export const waitForSpotInstanceRequestFulfilled = async (
  params: WaiterConfiguration<EC2Client>,
  input: DescribeSpotInstanceRequestsCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 15, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeSpotInstanceRequestsCommand for polling.
 */
export const waitUntilSpotInstanceRequestFulfilled = async (
  params: WaiterConfiguration<EC2Client>,
  input: DescribeSpotInstanceRequestsCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 15, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
