import { ACMPCAClient } from "../ACMPCAClient";
import {
  DescribeCertificateAuthorityAuditReportCommand,
  DescribeCertificateAuthorityAuditReportCommandInput,
} from "../commands/DescribeCertificateAuthorityAuditReportCommand";
import { WaiterConfiguration, WaiterResult, WaiterState, createWaiter } from "@aws-sdk/util-waiter";

const checkState = async (
  client: ACMPCAClient,
  input: DescribeCertificateAuthorityAuditReportCommandInput
): Promise<WaiterResult> => {
  try {
    let result: any = await client.send(new DescribeCertificateAuthorityAuditReportCommand(input));
    try {
      let returnComparator = () => {
        return result.AuditReportStatus;
      };
      if (returnComparator() === "SUCCESS") {
        return { state: WaiterState.SUCCESS };
      }
    } catch (e) {}
    try {
      let returnComparator = () => {
        return result.AuditReportStatus;
      };
      if (returnComparator() === "FAILED") {
        return { state: WaiterState.FAILURE };
      }
    } catch (e) {}
  } catch (exception) {}
  return { state: WaiterState.RETRY };
};
/**
 * Wait until a Audit Report is created
 *  @param params : Waiter configuration options.
 *  @param input : the input to DescribeCertificateAuthorityAuditReportCommand for polling.
 */
export const waitForAuditReportCreated = async (
  params: WaiterConfiguration<ACMPCAClient>,
  input: DescribeCertificateAuthorityAuditReportCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 3, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
