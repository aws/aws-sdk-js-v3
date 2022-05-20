// smithy-typescript generated code
import { checkExceptions, createWaiter, WaiterConfiguration, WaiterResult, WaiterState } from "@aws-sdk/util-waiter";

import { GetChangeCommand, GetChangeCommandInput } from "../commands/GetChangeCommand";
import { Route53Client } from "../Route53Client";

const checkState = async (client: Route53Client, input: GetChangeCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    const result: any = await client.send(new GetChangeCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.ChangeInfo.Status;
      };
      if (returnComparator() === "INSYNC") {
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
 *  @deprecated Use waitUntilResourceRecordSetsChanged instead. waitForResourceRecordSetsChanged does not throw error in non-success cases.
 */
export const waitForResourceRecordSetsChanged = async (
  params: WaiterConfiguration<Route53Client>,
  input: GetChangeCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 30, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetChangeCommand for polling.
 */
export const waitUntilResourceRecordSetsChanged = async (
  params: WaiterConfiguration<Route53Client>,
  input: GetChangeCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 30, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
