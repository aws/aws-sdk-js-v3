// smithy-typescript generated code
import { checkExceptions, createWaiter, WaiterConfiguration, WaiterResult, WaiterState } from "@aws-sdk/util-waiter";

import { DescribeServicesCommand, DescribeServicesCommandInput } from "../commands/DescribeServicesCommand";
import { ECSClient } from "../ECSClient";

const checkState = async (client: ECSClient, input: DescribeServicesCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    const result: any = await client.send(new DescribeServicesCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        const flat_1: any[] = [].concat(...result.failures);
        const projection_3 = flat_1.map((element_2: any) => {
          return element_2.reason;
        });
        return projection_3;
      };
      for (const anyStringEq_4 of returnComparator()) {
        if (anyStringEq_4 == "MISSING") {
          return { state: WaiterState.FAILURE, reason };
        }
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        const flat_1: any[] = [].concat(...result.services);
        const projection_3 = flat_1.map((element_2: any) => {
          return element_2.status;
        });
        return projection_3;
      };
      for (const anyStringEq_4 of returnComparator()) {
        if (anyStringEq_4 == "INACTIVE") {
          return { state: WaiterState.SUCCESS, reason };
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
 *  @deprecated Use waitUntilServicesInactive instead. waitForServicesInactive does not throw error in non-success cases.
 */
export const waitForServicesInactive = async (
  params: WaiterConfiguration<ECSClient>,
  input: DescribeServicesCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 15, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeServicesCommand for polling.
 */
export const waitUntilServicesInactive = async (
  params: WaiterConfiguration<ECSClient>,
  input: DescribeServicesCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 15, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
