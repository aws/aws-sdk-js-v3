// smithy-typescript generated code
import { checkExceptions, createWaiter, WaiterConfiguration, WaiterResult, WaiterState } from "@aws-sdk/util-waiter";

import {
  GetServiceTemplateVersionCommand,
  GetServiceTemplateVersionCommandInput,
} from "../commands/GetServiceTemplateVersionCommand";
import { ProtonClient } from "../ProtonClient";

const checkState = async (
  client: ProtonClient,
  input: GetServiceTemplateVersionCommandInput
): Promise<WaiterResult> => {
  let reason;
  try {
    const result: any = await client.send(new GetServiceTemplateVersionCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.serviceTemplateVersion.status;
      };
      if (returnComparator() === "DRAFT") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.serviceTemplateVersion.status;
      };
      if (returnComparator() === "PUBLISHED") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.serviceTemplateVersion.status;
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
 * Wait until a ServiceTemplateVersion is registered. Use this after invoking CreateServiceTemplateVersion
 *  @deprecated Use waitUntilServiceTemplateVersionRegistered instead. waitForServiceTemplateVersionRegistered does not throw error in non-success cases.
 */
export const waitForServiceTemplateVersionRegistered = async (
  params: WaiterConfiguration<ProtonClient>,
  input: GetServiceTemplateVersionCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 2, maxDelay: 300 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Wait until a ServiceTemplateVersion is registered. Use this after invoking CreateServiceTemplateVersion
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetServiceTemplateVersionCommand for polling.
 */
export const waitUntilServiceTemplateVersionRegistered = async (
  params: WaiterConfiguration<ProtonClient>,
  input: GetServiceTemplateVersionCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 2, maxDelay: 300 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
