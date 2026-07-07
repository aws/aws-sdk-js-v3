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
        let flat_1: any[] = [].concat(...result.items);
        let projection_3 = flat_1.map((element_2: any) => {
          return element_2.health.connectorStatus;
        });
        return projection_3;
      }
      let allStringEq_5 = (returnComparator().length > 0);
      for (let element_4 of returnComparator()) {
        allStringEq_5 = allStringEq_5 && (element_4 == "CONNECTED")
      }
      if (allStringEq_5) {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        let flat_1: any[] = [].concat(...result.items);
        let projection_3 = flat_1.map((element_2: any) => {
          return element_2.health.connectorStatus;
        });
        return projection_3;
      }
      for (let anyStringEq_4 of returnComparator()) {
        if (anyStringEq_4 == "FAILED_TO_CONNECT") {
          return { state: WaiterState.FAILURE, reason };
        }
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
        if (anyStringEq_4 == "FAILED_TO_ENABLE") {
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
 * Wait until a connector reaches the CONNECTED health status, typically after CreateConnector or UpdateConnector + ConnectorEnabled. Caller MUST filter ListConnectors by the specific connector ARN so the matchers apply only to the target connector. Success when all returned items have health.connectorStatus == CONNECTED. Failure when any item is in health.connectorStatus == FAILED_TO_CONNECT or enablementStatus == FAILED_TO_ENABLE.
 *  @deprecated Use waitUntilConnectorConnected instead. waitForConnectorConnected does not throw error in non-success cases.
 */
export const waitForConnectorConnected = async (
  params: WaiterConfiguration<Inspector2Client>,
  input: ListConnectorsCommandInput
): Promise<WaiterResult<ListConnectorsCommandOutput | Inspector2ServiceException>> => {
  const serviceDefaults = { minDelay: 30, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Wait until a connector reaches the CONNECTED health status, typically after CreateConnector or UpdateConnector + ConnectorEnabled. Caller MUST filter ListConnectors by the specific connector ARN so the matchers apply only to the target connector. Success when all returned items have health.connectorStatus == CONNECTED. Failure when any item is in health.connectorStatus == FAILED_TO_CONNECT or enablementStatus == FAILED_TO_ENABLE.
 *  @param params - Waiter configuration options.
 *  @param input - The input to ListConnectorsCommand for polling.
 */
export const waitUntilConnectorConnected = async (
  params: WaiterConfiguration<Inspector2Client>,
  input: ListConnectorsCommandInput
): Promise<WaiterResult<ListConnectorsCommandOutput>> => {
  const serviceDefaults = { minDelay: 30, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result) as WaiterResult<ListConnectorsCommandOutput>;
};
