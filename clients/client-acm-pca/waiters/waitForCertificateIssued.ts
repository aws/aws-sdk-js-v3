import { ACMPCAClient } from "../ACMPCAClient";
import { GetCertificateCommand, GetCertificateCommandInput } from "../commands/GetCertificateCommand";
import { WaiterConfiguration, WaiterResult, WaiterState, createWaiter } from "@aws-sdk/util-waiter";

const checkState = async (client: ACMPCAClient, input: GetCertificateCommandInput): Promise<WaiterResult> => {
  try {
    let result: any = await client.send(new GetCertificateCommand(input));
    return { state: WaiterState.SUCCESS };
  } catch (exception) {
    if (exception.name && exception.name == "RequestInProgressException") {
      return { state: WaiterState.RETRY };
    }
  }
  return { state: WaiterState.RETRY };
};
/**
 * Wait until a certificate is issued
 *  @param params : Waiter configuration options.
 *  @param input : the input to GetCertificateCommand for polling.
 */
export const waitForCertificateIssued = async (
  params: WaiterConfiguration<ACMPCAClient>,
  input: GetCertificateCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 3, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
