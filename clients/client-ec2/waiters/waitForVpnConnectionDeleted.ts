import { EC2Client } from "../EC2Client";
import {
  DescribeVpnConnectionsCommand,
  DescribeVpnConnectionsCommandInput,
} from "../commands/DescribeVpnConnectionsCommand";
import { WaiterConfiguration, WaiterResult, WaiterState, createWaiter } from "@aws-sdk/util-waiter";

const checkState = async (client: EC2Client, input: DescribeVpnConnectionsCommandInput): Promise<WaiterResult> => {
  try {
    let result: any = await client.send(new DescribeVpnConnectionsCommand(input));
    try {
      let returnComparator = () => {
        let flat_1: any[] = [].concat(...result.VpnConnections);
        let projection_3 = flat_1.map((element_2: any) => {
          return element_2.State;
        });
        return projection_3;
      };
      let allStringEq_5 = returnComparator().length > 0;
      for (let element_4 of returnComparator()) {
        allStringEq_5 = allStringEq_5 && element_4 == "deleted";
      }
      if (allStringEq_5) {
        return { state: WaiterState.SUCCESS };
      }
    } catch (e) {}
    try {
      let returnComparator = () => {
        let flat_1: any[] = [].concat(...result.VpnConnections);
        let projection_3 = flat_1.map((element_2: any) => {
          return element_2.State;
        });
        return projection_3;
      };
      for (let anyStringEq_4 of returnComparator()) {
        if (anyStringEq_4 == "pending") {
          return { state: WaiterState.FAILURE };
        }
      }
    } catch (e) {}
  } catch (exception) {}
  return { state: WaiterState.RETRY };
};
/**
 *
 *  @param params : Waiter configuration options.
 *  @param input : the input to DescribeVpnConnectionsCommand for polling.
 */
export const waitForVpnConnectionDeleted = async (
  params: WaiterConfiguration<EC2Client>,
  input: DescribeVpnConnectionsCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 15, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
