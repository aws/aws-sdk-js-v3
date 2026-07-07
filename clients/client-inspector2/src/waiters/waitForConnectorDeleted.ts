// smithy-typescript generated code
import {
  type WaiterConfiguration,
  type WaiterResult,
  checkExceptions,
  createWaiter,
  WaiterState,
} from "@smithy/core/client";

import {
  type ListConnectorsCommandInput,
  type ListConnectorsCommandOutput,
  ListConnectorsCommand,
} from "../commands/ListConnectorsCommand";
import type { Inspector2Client } from "../Inspector2Client";
import type { Inspector2ServiceException } from "../models/Inspector2ServiceException";

const checkState = async (client: Inspector2Client, input: ListConnectorsCommandInput): Promise<WaiterResult<ListConnectorsCommandOutput | Inspector2ServiceException>> => {
  let reason;
  try {
    let result: ListConnectorsCommandOutput & any = await client.send(new ListConnectorsCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return (result.items.length == 0);
      }
      if (returnComparator() == true) {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        let flat_1: any[] = [].concat(...result.items);
        let projection_3 = flat_1.map((element_2: any) => {
          return element_2.enablementStatus;
        });
        return projection_3;
      }
      for (let anyStringEq_4 of returnComparator()) {
        if (anyStringEq_4 == "FAILED_TO_DELETE") {
          return { state: WaiterState.FAILURE, reason };
        }
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 * Wait until a connector is no longer returned by ListConnectors. Caller MUST filter ListConnectors by the specific connector ARN; success is reached when the filtered result returns zero items. Failure when the deletion terminally fails (FAILED_TO_DELETE).
 *  @deprecated Use waitUntilConnectorDeleted instead. waitForConnectorDeleted does not throw error in non-success cases.
 */
export const waitForConnectorDeleted = async (
  params: WaiterConfiguration<Inspector2Client>,
  input: ListConnectorsCommandInput
): Promise<WaiterResult<ListConnectorsCommandOutput | Inspector2ServiceException>> => {
  const serviceDefaults = { minDelay: 30, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Wait until a connector is no longer returned by ListConnectors. Caller MUST filter ListConnectors by the specific connector ARN; success is reached when the filtered result returns zero items. Failure when the deletion terminally fails (FAILED_TO_DELETE).
 *  @param params - Waiter configuration options.
 *  @param input - The input to ListConnectorsCommand for polling.
 */
export const waitUntilConnectorDeleted = async (
  params: WaiterConfiguration<Inspector2Client>,
  input: ListConnectorsCommandInput
): Promise<WaiterResult<ListConnectorsCommandOutput>> => {
  const serviceDefaults = { minDelay: 30, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result) as WaiterResult<ListConnectorsCommandOutput>;
};
