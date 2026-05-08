// smithy-typescript generated code
import {
  type WaiterConfiguration,
  type WaiterResult,
  checkExceptions,
  createWaiter,
  WaiterState,
} from "@smithy/core/client";

import {
  type GetPasswordDataCommandInput,
  type GetPasswordDataCommandOutput,
  GetPasswordDataCommand,
} from "../commands/GetPasswordDataCommand";
import type { EC2Client } from "../EC2Client";
import type { EC2ServiceException } from "../models/EC2ServiceException";

const checkState = async (client: EC2Client, input: GetPasswordDataCommandInput): Promise<WaiterResult<GetPasswordDataCommandOutput | EC2ServiceException>> => {
  let reason;
  try {
    let result: GetPasswordDataCommandOutput & any = await client.send(new GetPasswordDataCommand(input));
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
): Promise<WaiterResult<GetPasswordDataCommandOutput | EC2ServiceException>> => {
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
): Promise<WaiterResult<GetPasswordDataCommandOutput>> => {
  const serviceDefaults = { minDelay: 15, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result) as WaiterResult<GetPasswordDataCommandOutput>;
};
