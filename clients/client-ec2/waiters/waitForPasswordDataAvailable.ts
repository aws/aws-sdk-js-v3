import { EC2Client } from "../EC2Client";
import { GetPasswordDataCommand, GetPasswordDataCommandInput } from "../commands/GetPasswordDataCommand";
import { WaiterConfiguration, WaiterResult, WaiterState, createWaiter } from "@aws-sdk/util-waiter";

const checkState = async (client: EC2Client, input: GetPasswordDataCommandInput): Promise<WaiterResult> => {
  try {
    let result: any = await client.send(new GetPasswordDataCommand(input));
    try {
      let returnComparator = () => {
        return result.PasswordData.length > 0.0;
      };
      if (returnComparator() == true) {
        return { state: WaiterState.SUCCESS };
      }
    } catch (e) {}
  } catch (exception) {}
  return { state: WaiterState.RETRY };
};
/**
 *
 *  @param params : Waiter configuration options.
 *  @param input : the input to GetPasswordDataCommand for polling.
 */
export const waitForPasswordDataAvailable = async (
  params: WaiterConfiguration<EC2Client>,
  input: GetPasswordDataCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 15, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
