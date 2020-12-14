import { SSMClient } from "../SSMClient";
import { GetCommandInvocationCommand, GetCommandInvocationCommandInput } from "../commands/GetCommandInvocationCommand";
import { WaiterConfiguration, WaiterResult, WaiterState, createWaiter } from "@aws-sdk/util-waiter";

const checkState = async (client: SSMClient, input: GetCommandInvocationCommandInput): Promise<WaiterResult> => {
  try {
    let result: any = await client.send(new GetCommandInvocationCommand(input));
    try {
      let returnComparator = () => {
        return result.Status;
      };
      if (returnComparator() === "Pending") {
        return { state: WaiterState.RETRY };
      }
    } catch (e) {}
    try {
      let returnComparator = () => {
        return result.Status;
      };
      if (returnComparator() === "InProgress") {
        return { state: WaiterState.RETRY };
      }
    } catch (e) {}
    try {
      let returnComparator = () => {
        return result.Status;
      };
      if (returnComparator() === "Delayed") {
        return { state: WaiterState.RETRY };
      }
    } catch (e) {}
    try {
      let returnComparator = () => {
        return result.Status;
      };
      if (returnComparator() === "Success") {
        return { state: WaiterState.SUCCESS };
      }
    } catch (e) {}
    try {
      let returnComparator = () => {
        return result.Status;
      };
      if (returnComparator() === "Cancelled") {
        return { state: WaiterState.FAILURE };
      }
    } catch (e) {}
    try {
      let returnComparator = () => {
        return result.Status;
      };
      if (returnComparator() === "TimedOut") {
        return { state: WaiterState.FAILURE };
      }
    } catch (e) {}
    try {
      let returnComparator = () => {
        return result.Status;
      };
      if (returnComparator() === "Failed") {
        return { state: WaiterState.FAILURE };
      }
    } catch (e) {}
    try {
      let returnComparator = () => {
        return result.Status;
      };
      if (returnComparator() === "Cancelling") {
        return { state: WaiterState.FAILURE };
      }
    } catch (e) {}
  } catch (exception) {}
  return { state: WaiterState.RETRY };
};
/**
 *
 *  @param params : Waiter configuration options.
 *  @param input : the input to GetCommandInvocationCommand for polling.
 */
export const waitForCommandExecuted = async (
  params: WaiterConfiguration<SSMClient>,
  input: GetCommandInvocationCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 5, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
