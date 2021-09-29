import { EC2Client } from "../EC2Client";
import { GetPasswordDataCommand, GetPasswordDataCommandInput } from "../commands/GetPasswordDataCommand";
import { WaiterConfiguration, WaiterResult, WaiterState, checkExceptions, createWaiter } from "@aws-sdk/util-waiter";

const checkState = async (client: EC2Client, input: GetPasswordDataCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    let result: any = await client.send(new GetPasswordDataCommand(input));
    reason = result;
    try {
      let returnComparator = () => {
        return result.PasswordData.length > 0.0;
      };
      if (returnComparator() == true) {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 *
 *  @deprecated Use waitUntilPasswordDataAvailable instead. waitForPasswordDataAvailable does not throw error in non-success cases.
 */
export const waitForPasswordDataAvailable = async (
  params: WaiterConfiguration<EC2Client>,
  input: GetPasswordDataCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 15, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetPasswordDataCommand for polling.
 */
export const waitUntilPasswordDataAvailable = async (
  params: WaiterConfiguration<EC2Client>,
  input: GetPasswordDataCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 15, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
