import { EMRClient } from "../EMRClient";
import { DescribeStepCommand, DescribeStepCommandInput } from "../commands/DescribeStepCommand";
import { WaiterConfiguration, WaiterResult, WaiterState, createWaiter } from "@aws-sdk/util-waiter";

const checkState = async (client: EMRClient, input: DescribeStepCommandInput): Promise<WaiterResult> => {
  try {
    let result: any = await client.send(new DescribeStepCommand(input));
    try {
      let returnComparator = () => {
        return result.Step.Status.State;
      };
      if (returnComparator() === "COMPLETED") {
        return { state: WaiterState.SUCCESS };
      }
    } catch (e) {}
    try {
      let returnComparator = () => {
        return result.Step.Status.State;
      };
      if (returnComparator() === "FAILED") {
        return { state: WaiterState.FAILURE };
      }
    } catch (e) {}
    try {
      let returnComparator = () => {
        return result.Step.Status.State;
      };
      if (returnComparator() === "CANCELLED") {
        return { state: WaiterState.FAILURE };
      }
    } catch (e) {}
  } catch (exception) {}
  return { state: WaiterState.RETRY };
};
/**
 *
 *  @param params : Waiter configuration options.
 *  @param input : the input to DescribeStepCommand for polling.
 */
export const waitForStepComplete = async (
  params: WaiterConfiguration<EMRClient>,
  input: DescribeStepCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 30, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
