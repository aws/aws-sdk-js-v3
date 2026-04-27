// smithy-typescript generated code
import {
  type WaiterConfiguration,
  type WaiterResult,
  checkExceptions,
  createWaiter,
  WaiterState,
} from "@smithy/util-waiter";

import {
  type DescribeCodeBindingCommandInput,
  type DescribeCodeBindingCommandOutput,
  DescribeCodeBindingCommand,
} from "../commands/DescribeCodeBindingCommand";
import type { SchemasServiceException } from "../models/SchemasServiceException";
import type { SchemasClient } from "../SchemasClient";

const checkState = async (client: SchemasClient, input: DescribeCodeBindingCommandInput): Promise<WaiterResult<DescribeCodeBindingCommandOutput | SchemasServiceException>> => {
  let reason;
  try {
    let result: DescribeCodeBindingCommandOutput & any = await client.send(new DescribeCodeBindingCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.Status;
      }
      if (returnComparator() === "CREATE_COMPLETE") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.Status;
      }
      if (returnComparator() === "CREATE_IN_PROGRESS") {
        return { state: WaiterState.RETRY, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.Status;
      }
      if (returnComparator() === "CREATE_FAILED") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
    if (exception.name === "NotFoundException") {
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
): Promise<WaiterResult<DescribeCodeBindingCommandOutput | SchemasServiceException>> => {
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
): Promise<WaiterResult<DescribeCodeBindingCommandOutput>> => {
  const serviceDefaults = { minDelay: 2, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result) as WaiterResult<DescribeCodeBindingCommandOutput>;
};
