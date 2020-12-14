import { ACMClient } from "../ACMClient";
import { DescribeCertificateCommand, DescribeCertificateCommandInput } from "../commands/DescribeCertificateCommand";
import { WaiterConfiguration, WaiterResult, WaiterState, createWaiter } from "@aws-sdk/util-waiter";

const checkState = async (client: ACMClient, input: DescribeCertificateCommandInput): Promise<WaiterResult> => {
  try {
    let result: any = await client.send(new DescribeCertificateCommand(input));
    try {
      let returnComparator = () => {
        let flat_1: any[] = [].concat(...result.Certificate.DomainValidationOptions);
        let projection_3 = flat_1.map((element_2: any) => {
          return element_2.ValidationStatus;
        });
        return projection_3;
      };
      let allStringEq_5 = returnComparator().length > 0;
      for (let element_4 of returnComparator()) {
        allStringEq_5 = allStringEq_5 && element_4 == "SUCCESS";
      }
      if (allStringEq_5) {
        return { state: WaiterState.SUCCESS };
      }
    } catch (e) {}
    try {
      let returnComparator = () => {
        let flat_1: any[] = [].concat(...result.Certificate.DomainValidationOptions);
        let projection_3 = flat_1.map((element_2: any) => {
          return element_2.ValidationStatus;
        });
        return projection_3;
      };
      for (let anyStringEq_4 of returnComparator()) {
        if (anyStringEq_4 == "PENDING_VALIDATION") {
          return { state: WaiterState.RETRY };
        }
      }
    } catch (e) {}
    try {
      let returnComparator = () => {
        return result.Certificate.Status;
      };
      if (returnComparator() === "FAILED") {
        return { state: WaiterState.FAILURE };
      }
    } catch (e) {}
  } catch (exception) {
    if (exception.name && exception.name == "ResourceNotFoundException") {
      return { state: WaiterState.FAILURE };
    }
  }
  return { state: WaiterState.RETRY };
};
/**
 *
 *  @param params : Waiter configuration options.
 *  @param input : the input to DescribeCertificateCommand for polling.
 */
export const waitForCertificateValidated = async (
  params: WaiterConfiguration<ACMClient>,
  input: DescribeCertificateCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 60, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
