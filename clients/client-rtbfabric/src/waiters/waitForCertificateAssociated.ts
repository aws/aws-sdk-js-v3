// smithy-typescript generated code
import {
  type WaiterConfiguration,
  type WaiterResult,
  checkExceptions,
  createWaiter,
  WaiterState,
} from "@smithy/core/client";

import {
  type GetCertificateAssociationCommandInput,
  type GetCertificateAssociationCommandOutput,
  GetCertificateAssociationCommand,
} from "../commands/GetCertificateAssociationCommand";
import type { RTBFabricServiceException } from "../models/RTBFabricServiceException";
import type { RTBFabricClient } from "../RTBFabricClient";

const checkState = async (client: RTBFabricClient, input: GetCertificateAssociationCommandInput): Promise<WaiterResult<GetCertificateAssociationCommandOutput | RTBFabricServiceException>> => {
  let reason;
  try {
    let result: GetCertificateAssociationCommandOutput & any = await client.send(new GetCertificateAssociationCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.status;
      }
      if (returnComparator() === "ASSOCIATED") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.status;
      }
      if (returnComparator() === "FAILED") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.status;
      }
      if (returnComparator() === "DISASSOCIATED") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.status;
      }
      if (returnComparator() === "PENDING_DISASSOCIATION") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
    if (exception.name === "ResourceNotFoundException") {
      return { state: WaiterState.FAILURE, reason };
    }
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 *
 *  @deprecated Use waitUntilCertificateAssociated instead. waitForCertificateAssociated does not throw error in non-success cases.
 */
export const waitForCertificateAssociated = async (
  params: WaiterConfiguration<RTBFabricClient>,
  input: GetCertificateAssociationCommandInput
): Promise<WaiterResult<GetCertificateAssociationCommandOutput | RTBFabricServiceException>> => {
  const serviceDefaults = { minDelay: 15, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetCertificateAssociationCommand for polling.
 */
export const waitUntilCertificateAssociated = async (
  params: WaiterConfiguration<RTBFabricClient>,
  input: GetCertificateAssociationCommandInput
): Promise<WaiterResult<GetCertificateAssociationCommandOutput>> => {
  const serviceDefaults = { minDelay: 15, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result) as WaiterResult<GetCertificateAssociationCommandOutput>;
};
