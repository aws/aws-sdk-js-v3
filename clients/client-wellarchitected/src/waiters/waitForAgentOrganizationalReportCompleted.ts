// smithy-typescript generated code
import {
  type WaiterConfiguration,
  type WaiterResult,
  checkExceptions,
  createWaiter,
  WaiterState,
} from "@smithy/core/client";

import {
  type GetAgentOrganizationalReportCommandInput,
  type GetAgentOrganizationalReportCommandOutput,
  GetAgentOrganizationalReportCommand,
} from "../commands/GetAgentOrganizationalReportCommand";
import type { WellArchitectedServiceException } from "../models/WellArchitectedServiceException";
import type { WellArchitectedClient } from "../WellArchitectedClient";

const checkState = async (client: WellArchitectedClient, input: GetAgentOrganizationalReportCommandInput): Promise<WaiterResult<GetAgentOrganizationalReportCommandOutput | WellArchitectedServiceException>> => {
  let reason;
  try {
    let result: GetAgentOrganizationalReportCommandOutput & any = await client.send(new GetAgentOrganizationalReportCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.state;
      }
      if (returnComparator() === "COMPLETED") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.state;
      }
      if (returnComparator() === "FAILED") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.state;
      }
      if (returnComparator() === "DELETING") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 *
 *  @deprecated Use waitUntilAgentOrganizationalReportCompleted instead. waitForAgentOrganizationalReportCompleted does not throw error in non-success cases.
 */
export const waitForAgentOrganizationalReportCompleted = async (
  params: WaiterConfiguration<WellArchitectedClient>,
  input: GetAgentOrganizationalReportCommandInput
): Promise<WaiterResult<GetAgentOrganizationalReportCommandOutput | WellArchitectedServiceException>> => {
  const serviceDefaults = { minDelay: 15, maxDelay: 600 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetAgentOrganizationalReportCommand for polling.
 */
export const waitUntilAgentOrganizationalReportCompleted = async (
  params: WaiterConfiguration<WellArchitectedClient>,
  input: GetAgentOrganizationalReportCommandInput
): Promise<WaiterResult<GetAgentOrganizationalReportCommandOutput>> => {
  const serviceDefaults = { minDelay: 15, maxDelay: 600 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result) as WaiterResult<GetAgentOrganizationalReportCommandOutput>;
};
