// smithy-typescript generated code
import {
  type WaiterConfiguration,
  type WaiterResult,
  checkExceptions,
  createWaiter,
  WaiterState,
} from "@smithy/core/client";

import { type GetVoiceCommandInput, type GetVoiceCommandOutput, GetVoiceCommand } from "../commands/GetVoiceCommand";
import type { PollyServiceException } from "../models/PollyServiceException";
import type { PollyClient } from "../PollyClient";

const checkState = async (client: PollyClient, input: GetVoiceCommandInput): Promise<WaiterResult<GetVoiceCommandOutput | PollyServiceException>> => {
  let reason;
  try {
    let result: GetVoiceCommandOutput & any = await client.send(new GetVoiceCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.Voice.Status;
      }
      if (returnComparator() === "active") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.Voice.Status;
      }
      if (returnComparator() === "failed") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 * Wait until a custom voice is active and can be used for speech synthesis.
 *  @deprecated Use waitUntilVoiceActive instead. waitForVoiceActive does not throw error in non-success cases.
 */
export const waitForVoiceActive = async (
  params: WaiterConfiguration<PollyClient>,
  input: GetVoiceCommandInput
): Promise<WaiterResult<GetVoiceCommandOutput | PollyServiceException>> => {
  const serviceDefaults = { minDelay: 15, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Wait until a custom voice is active and can be used for speech synthesis.
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetVoiceCommand for polling.
 */
export const waitUntilVoiceActive = async (
  params: WaiterConfiguration<PollyClient>,
  input: GetVoiceCommandInput
): Promise<WaiterResult<GetVoiceCommandOutput>> => {
  const serviceDefaults = { minDelay: 15, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result) as WaiterResult<GetVoiceCommandOutput>;
};
