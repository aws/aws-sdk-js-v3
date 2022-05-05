// smithy-typescript generated code
import { checkExceptions, createWaiter, WaiterConfiguration, WaiterResult, WaiterState } from "@aws-sdk/util-waiter";

import { ACMPCAClient } from "../ACMPCAClient";
import { GetCertificateCommand, GetCertificateCommandInput } from "../commands/GetCertificateCommand";

const checkState = async (client: ACMPCAClient, input: GetCertificateCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    const result: any = await client.send(new GetCertificateCommand(input));
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
 * Wait until a certificate is issued
 *  @deprecated Use waitUntilCertificateIssued instead. waitForCertificateIssued does not throw error in non-success cases.
 */
export const waitForCertificateIssued = async (
  params: WaiterConfiguration<ACMPCAClient>,
  input: GetCertificateCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 3, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Wait until a certificate is issued
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetCertificateCommand for polling.
 */
export const waitUntilCertificateIssued = async (
  params: WaiterConfiguration<ACMPCAClient>,
  input: GetCertificateCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 3, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
