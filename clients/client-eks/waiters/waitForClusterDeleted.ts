import { EKSClient } from "../EKSClient";
import { DescribeClusterCommand, DescribeClusterCommandInput } from "../commands/DescribeClusterCommand";
import { WaiterConfiguration, WaiterResult, WaiterState, createWaiter } from "@aws-sdk/util-waiter";

const checkState = async (client: EKSClient, input: DescribeClusterCommandInput): Promise<WaiterResult> => {
  try {
    let result: any = await client.send(new DescribeClusterCommand(input));
    try {
      let returnComparator = () => {
        return result.cluster.status;
      };
      if (returnComparator() === "ACTIVE") {
        return { state: WaiterState.FAILURE };
      }
    } catch (e) {}
    try {
      let returnComparator = () => {
        return result.cluster.status;
      };
      if (returnComparator() === "CREATING") {
        return { state: WaiterState.FAILURE };
      }
    } catch (e) {}
  } catch (exception) {
    if (exception.name && exception.name == "ResourceNotFoundException") {
      return { state: WaiterState.SUCCESS };
    }
  }
  return { state: WaiterState.RETRY };
};
/**
 *
 *  @param params : Waiter configuration options.
 *  @param input : the input to DescribeClusterCommand for polling.
 */
export const waitForClusterDeleted = async (
  params: WaiterConfiguration<EKSClient>,
  input: DescribeClusterCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 30, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
