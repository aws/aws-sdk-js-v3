// smithy-typescript generated code
import { checkExceptions, createWaiter, WaiterConfiguration, WaiterResult, WaiterState } from "@aws-sdk/util-waiter";

import { DescribeContactCommand, DescribeContactCommandInput } from "../commands/DescribeContactCommand";
import { GroundStationClient } from "../GroundStationClient";

const checkState = async (client: GroundStationClient, input: DescribeContactCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    const result: any = await client.send(new DescribeContactCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.contactStatus;
      };
      if (returnComparator() === "FAILED_TO_SCHEDULE") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.contactStatus;
      };
      if (returnComparator() === "SCHEDULED") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 * Waits until a contact has been scheduled
 *  @deprecated Use waitUntilContactScheduled instead. waitForContactScheduled does not throw error in non-success cases.
 */
export const waitForContactScheduled = async (
  params: WaiterConfiguration<GroundStationClient>,
  input: DescribeContactCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 5, maxDelay: 900 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Waits until a contact has been scheduled
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeContactCommand for polling.
 */
export const waitUntilContactScheduled = async (
  params: WaiterConfiguration<GroundStationClient>,
  input: DescribeContactCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 5, maxDelay: 900 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
