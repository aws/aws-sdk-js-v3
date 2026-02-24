// smithy-typescript generated code
import { checkExceptions, createWaiter, WaiterConfiguration, WaiterResult, WaiterState } from "@smithy/util-waiter";

import { GetFeedCommand, GetFeedCommandInput } from "../commands/GetFeedCommand";
import { ElementalInferenceClient } from "../ElementalInferenceClient";

const checkState = async (client: ElementalInferenceClient, input: GetFeedCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    let result: any = await client.send(new GetFeedCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.status;
      }
      if (returnComparator() === "DELETED") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.status;
      }
      if (returnComparator() === "DELETING") {
        return { state: WaiterState.RETRY, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
    if (exception.name && exception.name == "ResourceNotFoundException") {
      return { state: WaiterState.SUCCESS, reason };
    }
    if (exception.name && exception.name == "InternalServerErrorException") {
      return { state: WaiterState.RETRY, reason };
    }
    if (exception.name && exception.name == "TooManyRequestException") {
      return { state: WaiterState.RETRY, reason };
    }
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 * Wait until a Feed is deleted
 *  @deprecated Use waitUntilFeedDeleted instead. waitForFeedDeleted does not throw error in non-success cases.
 */
export const waitForFeedDeleted = async (
  params: WaiterConfiguration<ElementalInferenceClient>,
  input: GetFeedCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 3, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Wait until a Feed is deleted
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetFeedCommand for polling.
 */
export const waitUntilFeedDeleted = async (
  params: WaiterConfiguration<ElementalInferenceClient>,
  input: GetFeedCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 3, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
