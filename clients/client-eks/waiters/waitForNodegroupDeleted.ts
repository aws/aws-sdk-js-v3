import { EKSClient } from "../EKSClient";
import { DescribeNodegroupCommand, DescribeNodegroupCommandInput } from "../commands/DescribeNodegroupCommand";
import { WaiterConfiguration, WaiterResult, WaiterState, createWaiter } from "@aws-sdk/util-waiter";

const checkState = async (client: EKSClient, input: DescribeNodegroupCommandInput): Promise<WaiterResult> => {
  try {
    let result: any = await client.send(new DescribeNodegroupCommand(input));
    try {
      let returnComparator = () => {
        return result.nodegroup.status;
      };
      if (returnComparator() === "DELETE_FAILED") {
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
 *  @param input : the input to DescribeNodegroupCommand for polling.
 */
export const waitForNodegroupDeleted = async (
  params: WaiterConfiguration<EKSClient>,
  input: DescribeNodegroupCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 30, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
