// smithy-typescript generated code
import { checkExceptions, createWaiter, WaiterConfiguration, WaiterResult, WaiterState } from "@aws-sdk/util-waiter";

import { ACMPCAClient } from "../ACMPCAClient";
import {
  DescribeCertificateAuthorityAuditReportCommand,
  DescribeCertificateAuthorityAuditReportCommandInput,
} from "../commands/DescribeCertificateAuthorityAuditReportCommand";

const checkState = async (
  client: ACMPCAClient,
  input: DescribeCertificateAuthorityAuditReportCommandInput
): Promise<WaiterResult> => {
  let reason;
  try {
    const result: any = await client.send(new DescribeCertificateAuthorityAuditReportCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.AuditReportStatus;
      };
      if (returnComparator() === "SUCCESS") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.AuditReportStatus;
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
 * Wait until a Audit Report is created
 *  @deprecated Use waitUntilAuditReportCreated instead. waitForAuditReportCreated does not throw error in non-success cases.
 */
export const waitForAuditReportCreated = async (
  params: WaiterConfiguration<ACMPCAClient>,
  input: DescribeCertificateAuthorityAuditReportCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 3, maxDelay: 120 };
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
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 3, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
