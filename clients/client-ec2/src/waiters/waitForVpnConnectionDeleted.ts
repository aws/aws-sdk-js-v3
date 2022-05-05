// smithy-typescript generated code
import { checkExceptions, createWaiter, WaiterConfiguration, WaiterResult, WaiterState } from "@aws-sdk/util-waiter";

import {
  DescribeVpnConnectionsCommand,
  DescribeVpnConnectionsCommandInput,
} from "../commands/DescribeVpnConnectionsCommand";
import { EC2Client } from "../EC2Client";

const checkState = async (client: EC2Client, input: DescribeVpnConnectionsCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    const result: any = await client.send(new DescribeVpnConnectionsCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        const flat_1: any[] = [].concat(...result.VpnConnections);
        const projection_3 = flat_1.map((element_2: any) => {
          return element_2.State;
        });
        return projection_3;
      };
      let allStringEq_5 = returnComparator().length > 0;
      for (const element_4 of returnComparator()) {
        allStringEq_5 = allStringEq_5 && element_4 == "deleted";
      }
      if (allStringEq_5) {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        const flat_1: any[] = [].concat(...result.VpnConnections);
        const projection_3 = flat_1.map((element_2: any) => {
          return element_2.State;
        });
        return projection_3;
      };
      for (const anyStringEq_4 of returnComparator()) {
        if (anyStringEq_4 == "pending") {
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
 *  @deprecated Use waitUntilVpnConnectionDeleted instead. waitForVpnConnectionDeleted does not throw error in non-success cases.
 */
export const waitForVpnConnectionDeleted = async (
  params: WaiterConfiguration<EC2Client>,
  input: DescribeVpnConnectionsCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 15, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeVpnConnectionsCommand for polling.
 */
export const waitUntilVpnConnectionDeleted = async (
  params: WaiterConfiguration<EC2Client>,
  input: DescribeVpnConnectionsCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 15, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
