// smithy-typescript generated code
import { checkExceptions, createWaiter, WaiterConfiguration, WaiterResult, WaiterState } from "@aws-sdk/util-waiter";

import {
  GetIdentityVerificationAttributesCommand,
  GetIdentityVerificationAttributesCommandInput,
} from "../commands/GetIdentityVerificationAttributesCommand";
import { SESClient } from "../SESClient";

const checkState = async (
  client: SESClient,
  input: GetIdentityVerificationAttributesCommandInput
): Promise<WaiterResult> => {
  let reason;
  try {
    const result: any = await client.send(new GetIdentityVerificationAttributesCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        const objectProjection_2 = Object.values(result.VerificationAttributes).map((element_1: any) => {
          return element_1.VerificationStatus;
        });
        return objectProjection_2;
      };
      let allStringEq_4 = returnComparator().length > 0;
      for (const element_3 of returnComparator()) {
        allStringEq_4 = allStringEq_4 && element_3 == "Success";
      }
      if (allStringEq_4) {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 *
 *  @deprecated Use waitUntilIdentityExists instead. waitForIdentityExists does not throw error in non-success cases.
 */
export const waitForIdentityExists = async (
  params: WaiterConfiguration<SESClient>,
  input: GetIdentityVerificationAttributesCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 3, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetIdentityVerificationAttributesCommand for polling.
 */
export const waitUntilIdentityExists = async (
  params: WaiterConfiguration<SESClient>,
  input: GetIdentityVerificationAttributesCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 3, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
