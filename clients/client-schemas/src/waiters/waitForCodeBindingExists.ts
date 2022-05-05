// smithy-typescript generated code
import { checkExceptions, createWaiter, WaiterConfiguration, WaiterResult, WaiterState } from "@aws-sdk/util-waiter";

import { DescribeCodeBindingCommand, DescribeCodeBindingCommandInput } from "../commands/DescribeCodeBindingCommand";
import { SchemasClient } from "../SchemasClient";

const checkState = async (client: SchemasClient, input: DescribeCodeBindingCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    const result: any = await client.send(new DescribeCodeBindingCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.Status;
      };
      if (returnComparator() === "CREATE_COMPLETE") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.Status;
      };
      if (returnComparator() === "CREATE_IN_PROGRESS") {
        return { state: WaiterState.RETRY, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.Status;
      };
      if (returnComparator() === "CREATE_FAILED") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
    if (exception.name && exception.name == "NotFoundException") {
      return { state: WaiterState.FAILURE, reason };
    }
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 * Wait until code binding is generated
 *  @deprecated Use waitUntilCodeBindingExists instead. waitForCodeBindingExists does not throw error in non-success cases.
 */
export const waitForCodeBindingExists = async (
  params: WaiterConfiguration<SchemasClient>,
  input: DescribeCodeBindingCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 2, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Wait until code binding is generated
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeCodeBindingCommand for polling.
 */
export const waitUntilCodeBindingExists = async (
  params: WaiterConfiguration<SchemasClient>,
  input: DescribeCodeBindingCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 2, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
