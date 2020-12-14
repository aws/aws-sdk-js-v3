import { OpsWorksCMClient } from "../OpsWorksCMClient";
import {
  DescribeNodeAssociationStatusCommand,
  DescribeNodeAssociationStatusCommandInput,
} from "../commands/DescribeNodeAssociationStatusCommand";
import { WaiterConfiguration, WaiterResult, WaiterState, createWaiter } from "@aws-sdk/util-waiter";

const checkState = async (
  client: OpsWorksCMClient,
  input: DescribeNodeAssociationStatusCommandInput
): Promise<WaiterResult> => {
  try {
    let result: any = await client.send(new DescribeNodeAssociationStatusCommand(input));
    try {
      let returnComparator = () => {
        return result.NodeAssociationStatus;
      };
      if (returnComparator() === "SUCCESS") {
        return { state: WaiterState.SUCCESS };
      }
    } catch (e) {}
    try {
      let returnComparator = () => {
        return result.NodeAssociationStatus;
      };
      if (returnComparator() === "FAILED") {
        return { state: WaiterState.FAILURE };
      }
    } catch (e) {}
  } catch (exception) {}
  return { state: WaiterState.RETRY };
};
/**
 * Wait until node is associated or disassociated.
 *  @param params : Waiter configuration options.
 *  @param input : the input to DescribeNodeAssociationStatusCommand for polling.
 */
export const waitForNodeAssociated = async (
  params: WaiterConfiguration<OpsWorksCMClient>,
  input: DescribeNodeAssociationStatusCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 15, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
