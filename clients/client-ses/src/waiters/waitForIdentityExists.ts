// smithy-typescript generated code
import {
  type WaiterConfiguration,
  type WaiterResult,
  checkExceptions,
  createWaiter,
  WaiterState,
} from "@smithy/core/client";

import {
  type GetIdentityVerificationAttributesCommandInput,
  type GetIdentityVerificationAttributesCommandOutput,
  GetIdentityVerificationAttributesCommand,
} from "../commands/GetIdentityVerificationAttributesCommand";
import type { SESServiceException } from "../models/SESServiceException";
import type { SESClient } from "../SESClient";

const checkState = async (client: SESClient, input: GetIdentityVerificationAttributesCommandInput): Promise<WaiterResult<GetIdentityVerificationAttributesCommandOutput | SESServiceException>> => {
  let reason;
  try {
    let result: GetIdentityVerificationAttributesCommandOutput & any = await client.send(new GetIdentityVerificationAttributesCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        let objectProjection_2 = Object.values(result.VerificationAttributes).map((element_1: any) => {
          return element_1.VerificationStatus;
        });
        return objectProjection_2;
      }
      let allStringEq_4 = (returnComparator().length > 0);
      for (let element_3 of returnComparator()) {
        allStringEq_4 = allStringEq_4 && (element_3 == "Success")
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
): Promise<WaiterResult<GetIdentityVerificationAttributesCommandOutput | SESServiceException>> => {
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
): Promise<WaiterResult<GetIdentityVerificationAttributesCommandOutput>> => {
  const serviceDefaults = { minDelay: 3, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result) as WaiterResult<GetIdentityVerificationAttributesCommandOutput>;
};
