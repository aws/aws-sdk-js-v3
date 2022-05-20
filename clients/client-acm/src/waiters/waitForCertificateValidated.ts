// smithy-typescript generated code
import { checkExceptions, createWaiter, WaiterConfiguration, WaiterResult, WaiterState } from "@aws-sdk/util-waiter";

import { ACMClient } from "../ACMClient";
import { DescribeCertificateCommand, DescribeCertificateCommandInput } from "../commands/DescribeCertificateCommand";

const checkState = async (client: ACMClient, input: DescribeCertificateCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    const result: any = await client.send(new DescribeCertificateCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        const flat_1: any[] = [].concat(...result.Certificate.DomainValidationOptions);
        const projection_3 = flat_1.map((element_2: any) => {
          return element_2.ValidationStatus;
        });
        return projection_3;
      };
      let allStringEq_5 = returnComparator().length > 0;
      for (const element_4 of returnComparator()) {
        allStringEq_5 = allStringEq_5 && element_4 == "SUCCESS";
      }
      if (allStringEq_5) {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        const flat_1: any[] = [].concat(...result.Certificate.DomainValidationOptions);
        const projection_3 = flat_1.map((element_2: any) => {
          return element_2.ValidationStatus;
        });
        return projection_3;
      };
      for (const anyStringEq_4 of returnComparator()) {
        if (anyStringEq_4 == "PENDING_VALIDATION") {
          return { state: WaiterState.RETRY, reason };
        }
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.Certificate.Status;
      };
      if (returnComparator() === "FAILED") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
    if (exception.name && exception.name == "ResourceNotFoundException") {
      return { state: WaiterState.FAILURE, reason };
    }
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 *
 *  @deprecated Use waitUntilCertificateValidated instead. waitForCertificateValidated does not throw error in non-success cases.
 */
export const waitForCertificateValidated = async (
  params: WaiterConfiguration<ACMClient>,
  input: DescribeCertificateCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 60, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeCertificateCommand for polling.
 */
export const waitUntilCertificateValidated = async (
  params: WaiterConfiguration<ACMClient>,
  input: DescribeCertificateCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 60, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
