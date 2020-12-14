import { EMRClient } from "../EMRClient";
import { DescribeClusterCommand, DescribeClusterCommandInput } from "../commands/DescribeClusterCommand";
import { WaiterConfiguration, WaiterResult, WaiterState, createWaiter } from "@aws-sdk/util-waiter";

const checkState = async (client: EMRClient, input: DescribeClusterCommandInput): Promise<WaiterResult> => {
  try {
    let result: any = await client.send(new DescribeClusterCommand(input));
    try {
      let returnComparator = () => {
        return result.Cluster.Status.State;
      };
      if (returnComparator() === "TERMINATED") {
        return { state: WaiterState.SUCCESS };
      }
    } catch (e) {}
    try {
      let returnComparator = () => {
        return result.Cluster.Status.State;
      };
      if (returnComparator() === "TERMINATED_WITH_ERRORS") {
        return { state: WaiterState.FAILURE };
      }
    } catch (e) {}
  } catch (exception) {}
  return { state: WaiterState.RETRY };
};
/**
 *
 *  @param params : Waiter configuration options.
 *  @param input : the input to DescribeClusterCommand for polling.
 */
export const waitForClusterTerminated = async (
  params: WaiterConfiguration<EMRClient>,
  input: DescribeClusterCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 30, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
