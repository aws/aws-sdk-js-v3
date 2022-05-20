// smithy-typescript generated code
import { checkExceptions, createWaiter, WaiterConfiguration, WaiterResult, WaiterState } from "@aws-sdk/util-waiter";

import { ACMPCAClient } from "../ACMPCAClient";
import {
  GetCertificateAuthorityCsrCommand,
  GetCertificateAuthorityCsrCommandInput,
} from "../commands/GetCertificateAuthorityCsrCommand";

const checkState = async (
  client: ACMPCAClient,
  input: GetCertificateAuthorityCsrCommandInput
): Promise<WaiterResult> => {
  let reason;
  try {
    const result: any = await client.send(new GetCertificateAuthorityCsrCommand(input));
    reason = result;
    return { state: WaiterState.SUCCESS, reason };
  } catch (exception) {
    reason = exception;
    if (exception.name && exception.name == "RequestInProgressException") {
      return { state: WaiterState.RETRY, reason };
    }
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 * Wait until a Certificate Authority CSR is created
 *  @deprecated Use waitUntilCertificateAuthorityCSRCreated instead. waitForCertificateAuthorityCSRCreated does not throw error in non-success cases.
 */
export const waitForCertificateAuthorityCSRCreated = async (
  params: WaiterConfiguration<ACMPCAClient>,
  input: GetCertificateAuthorityCsrCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 3, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Wait until a Certificate Authority CSR is created
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetCertificateAuthorityCsrCommand for polling.
 */
export const waitUntilCertificateAuthorityCSRCreated = async (
  params: WaiterConfiguration<ACMPCAClient>,
  input: GetCertificateAuthorityCsrCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 3, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
