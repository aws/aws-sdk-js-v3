import { SESClient } from "../SESClient";
import {
  GetIdentityVerificationAttributesCommand,
  GetIdentityVerificationAttributesCommandInput,
} from "../commands/GetIdentityVerificationAttributesCommand";
import { WaiterConfiguration, WaiterResult, WaiterState, createWaiter } from "@aws-sdk/util-waiter";

const checkState = async (
  client: SESClient,
  input: GetIdentityVerificationAttributesCommandInput
): Promise<WaiterResult> => {
  try {
    let result: any = await client.send(new GetIdentityVerificationAttributesCommand(input));
    try {
      let returnComparator = () => {
        let objectProjection_2 = Object.values(result.VerificationAttributes).map((element_1: any) => {
          return element_1.VerificationStatus;
        });
        return objectProjection_2;
      };
      let allStringEq_4 = returnComparator().length > 0;
      for (let element_3 of returnComparator()) {
        allStringEq_4 = allStringEq_4 && element_3 == "Success";
      }
      if (allStringEq_4) {
        return { state: WaiterState.SUCCESS };
      }
    } catch (e) {}
  } catch (exception) {}
  return { state: WaiterState.RETRY };
};
/**
 *
 *  @param params : Waiter configuration options.
 *  @param input : the input to GetIdentityVerificationAttributesCommand for polling.
 */
export const waitForIdentityExists = async (
  params: WaiterConfiguration<SESClient>,
  input: GetIdentityVerificationAttributesCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 3, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
