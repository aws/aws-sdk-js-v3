import { ACMPCAClient } from "../ACMPCAClient";
import {
  GetCertificateAuthorityCsrCommand,
  GetCertificateAuthorityCsrCommandInput,
} from "../commands/GetCertificateAuthorityCsrCommand";
import { WaiterConfiguration, WaiterResult, WaiterState, createWaiter } from "@aws-sdk/util-waiter";

const checkState = async (
  client: ACMPCAClient,
  input: GetCertificateAuthorityCsrCommandInput
): Promise<WaiterResult> => {
  try {
    let result: any = await client.send(new GetCertificateAuthorityCsrCommand(input));
    return { state: WaiterState.SUCCESS };
  } catch (exception) {
    if (exception.name && exception.name == "RequestInProgressException") {
      return { state: WaiterState.RETRY };
    }
  }
  return { state: WaiterState.RETRY };
};
/**
 * Wait until a Certificate Authority CSR is created
 *  @param params : Waiter configuration options.
 *  @param input : the input to GetCertificateAuthorityCsrCommand for polling.
 */
export const waitForCertificateAuthorityCSRCreated = async (
  params: WaiterConfiguration<ACMPCAClient>,
  input: GetCertificateAuthorityCsrCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 3, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
