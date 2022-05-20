// smithy-typescript generated code
import { checkExceptions, createWaiter, WaiterConfiguration, WaiterResult, WaiterState } from "@aws-sdk/util-waiter";

import {
  DescribeNodeAssociationStatusCommand,
  DescribeNodeAssociationStatusCommandInput,
} from "../commands/DescribeNodeAssociationStatusCommand";
import { OpsWorksCMClient } from "../OpsWorksCMClient";

const checkState = async (
  client: OpsWorksCMClient,
  input: DescribeNodeAssociationStatusCommandInput
): Promise<WaiterResult> => {
  let reason;
  try {
    const result: any = await client.send(new DescribeNodeAssociationStatusCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.NodeAssociationStatus;
      };
      if (returnComparator() === "SUCCESS") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.NodeAssociationStatus;
      };
      if (returnComparator() === "FAILED") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 * Wait until node is associated or disassociated.
 *  @deprecated Use waitUntilNodeAssociated instead. waitForNodeAssociated does not throw error in non-success cases.
 */
export const waitForNodeAssociated = async (
  params: WaiterConfiguration<OpsWorksCMClient>,
  input: DescribeNodeAssociationStatusCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 15, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Wait until node is associated or disassociated.
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeNodeAssociationStatusCommand for polling.
 */
export const waitUntilNodeAssociated = async (
  params: WaiterConfiguration<OpsWorksCMClient>,
  input: DescribeNodeAssociationStatusCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 15, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
