import { ProtonClient } from "../ProtonClient";
import {
  GetEnvironmentTemplateVersionCommand,
  GetEnvironmentTemplateVersionCommandInput,
} from "../commands/GetEnvironmentTemplateVersionCommand";
import { WaiterConfiguration, WaiterResult, WaiterState, checkExceptions, createWaiter } from "@aws-sdk/util-waiter";

const checkState = async (
  client: ProtonClient,
  input: GetEnvironmentTemplateVersionCommandInput
): Promise<WaiterResult> => {
  let reason;
  try {
    let result: any = await client.send(new GetEnvironmentTemplateVersionCommand(input));
    reason = result;
    try {
      let returnComparator = () => {
        return result.environmentTemplateVersion.status;
      };
      if (returnComparator() === "DRAFT") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      let returnComparator = () => {
        return result.environmentTemplateVersion.status;
      };
      if (returnComparator() === "PUBLISHED") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      let returnComparator = () => {
        return result.environmentTemplateVersion.status;
      };
      if (returnComparator() === "REGISTRATION_FAILED") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 * Wait until an EnvironmentTemplateVersion is registered. Use this after invoking CreateEnvironmentTemplateVersion
 *  @deprecated Use waitUntilEnvironmentTemplateVersionRegistered instead. waitForEnvironmentTemplateVersionRegistered does not throw error in non-success cases.
 */
export const waitForEnvironmentTemplateVersionRegistered = async (
  params: WaiterConfiguration<ProtonClient>,
  input: GetEnvironmentTemplateVersionCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 2, maxDelay: 300 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Wait until an EnvironmentTemplateVersion is registered. Use this after invoking CreateEnvironmentTemplateVersion
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetEnvironmentTemplateVersionCommand for polling.
 */
export const waitUntilEnvironmentTemplateVersionRegistered = async (
  params: WaiterConfiguration<ProtonClient>,
  input: GetEnvironmentTemplateVersionCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 2, maxDelay: 300 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
