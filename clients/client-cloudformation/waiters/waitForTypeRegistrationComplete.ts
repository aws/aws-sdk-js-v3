import { CloudFormationClient } from "../CloudFormationClient";
import {
  DescribeTypeRegistrationCommand,
  DescribeTypeRegistrationCommandInput,
} from "../commands/DescribeTypeRegistrationCommand";
import { WaiterConfiguration, WaiterResult, WaiterState, createWaiter } from "@aws-sdk/util-waiter";

const checkState = async (
  client: CloudFormationClient,
  input: DescribeTypeRegistrationCommandInput
): Promise<WaiterResult> => {
  try {
    let result: any = await client.send(new DescribeTypeRegistrationCommand(input));
    try {
      let returnComparator = () => {
        return result.ProgressStatus;
      };
      if (returnComparator() === "COMPLETE") {
        return { state: WaiterState.SUCCESS };
      }
    } catch (e) {}
    try {
      let returnComparator = () => {
        return result.ProgressStatus;
      };
      if (returnComparator() === "FAILED") {
        return { state: WaiterState.FAILURE };
      }
    } catch (e) {}
  } catch (exception) {}
  return { state: WaiterState.RETRY };
};
/**
 * Wait until type registration is COMPLETE.
 *  @param params : Waiter configuration options.
 *  @param input : the input to DescribeTypeRegistrationCommand for polling.
 */
export const waitForTypeRegistrationComplete = async (
  params: WaiterConfiguration<CloudFormationClient>,
  input: DescribeTypeRegistrationCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 30, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
