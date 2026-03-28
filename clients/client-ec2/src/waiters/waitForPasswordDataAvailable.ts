// smithy-typescript generated code
import {
  type WaiterConfiguration,
  type WaiterResult,
  checkExceptions,
  createWaiter,
  WaiterState,
} from "@smithy/util-waiter";

import { type GetPasswordDataCommandInput, GetPasswordDataCommand } from "../commands/GetPasswordDataCommand";
import type { EC2Client } from "../EC2Client";

const checkState = async (client: EC2Client, input: GetPasswordDataCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    let result: any = await client.send(new GetPasswordDataCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return (result.PasswordData.length > 0);
      }
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
