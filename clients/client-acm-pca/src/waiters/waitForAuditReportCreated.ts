// smithy-typescript generated code
import {
  type WaiterConfiguration,
  type WaiterResult,
  checkExceptions,
  createWaiter,
  WaiterState,
} from "@smithy/core/client";

import type { ACMPCAClient } from "../ACMPCAClient";
import {
  type DescribeCertificateAuthorityAuditReportCommandInput,
  type DescribeCertificateAuthorityAuditReportCommandOutput,
  DescribeCertificateAuthorityAuditReportCommand,
} from "../commands/DescribeCertificateAuthorityAuditReportCommand";
import type { ACMPCAServiceException } from "../models/ACMPCAServiceException";

const checkState = async (client: ACMPCAClient, input: DescribeCertificateAuthorityAuditReportCommandInput): Promise<WaiterResult<DescribeCertificateAuthorityAuditReportCommandOutput | ACMPCAServiceException>> => {
  let reason;
  try {
    let result: DescribeCertificateAuthorityAuditReportCommandOutput & any = await client.send(new DescribeCertificateAuthorityAuditReportCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.AuditReportStatus;
      }
      if (returnComparator() === "SUCCESS") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.AuditReportStatus;
      }
      if (returnComparator() === "FAILED") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
    if (exception.name === "AccessDeniedException") {
      return { state: WaiterState.FAILURE, reason };
    }
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 * Wait until a Audit Report is created
 *  @deprecated Use waitUntilAuditReportCreated instead. waitForAuditReportCreated does not throw error in non-success cases.
 */
export const waitForAuditReportCreated = async (
  params: WaiterConfiguration<ACMPCAClient>,
  input: DescribeCertificateAuthorityAuditReportCommandInput
): Promise<WaiterResult<DescribeCertificateAuthorityAuditReportCommandOutput | ACMPCAServiceException>> => {
  const serviceDefaults = { minDelay: 3, maxDelay: 180 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Wait until a Audit Report is created
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeCertificateAuthorityAuditReportCommand for polling.
 */
export const waitUntilAuditReportCreated = async (
  params: WaiterConfiguration<ACMPCAClient>,
  input: DescribeCertificateAuthorityAuditReportCommandInput
): Promise<WaiterResult<DescribeCertificateAuthorityAuditReportCommandOutput>> => {
  const serviceDefaults = { minDelay: 3, maxDelay: 180 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result) as WaiterResult<DescribeCertificateAuthorityAuditReportCommandOutput>;
};
