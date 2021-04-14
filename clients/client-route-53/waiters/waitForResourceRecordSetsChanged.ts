import { Route53Client } from "../Route53Client";
import { GetChangeCommand, GetChangeCommandInput } from "../commands/GetChangeCommand";
import { WaiterConfiguration, WaiterResult, WaiterState, createWaiter } from "@aws-sdk/util-waiter";

const checkState = async (client: Route53Client, input: GetChangeCommandInput): Promise<WaiterResult> => {
  try {
    let result: any = await client.send(new GetChangeCommand(input));
    try {
      let returnComparator = () => {
        return result.ChangeInfo.Status;
      };
      if (returnComparator() === "INSYNC") {
        return { state: WaiterState.SUCCESS };
      }
    } catch (e) {}
  } catch (exception) {}
  return { state: WaiterState.RETRY };
};
/**
 *
 *  @param params : Waiter configuration options.
 *  @param input : the input to GetChangeCommand for polling.
 */
export const waitForResourceRecordSetsChanged = async (
  params: WaiterConfiguration<Route53Client>,
  input: GetChangeCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 30, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
