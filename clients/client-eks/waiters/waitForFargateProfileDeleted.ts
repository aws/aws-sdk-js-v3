import { EKSClient } from "../EKSClient";
import {
  DescribeFargateProfileCommand,
  DescribeFargateProfileCommandInput,
} from "../commands/DescribeFargateProfileCommand";
import { WaiterConfiguration, WaiterResult, WaiterState, checkExceptions, createWaiter } from "@aws-sdk/util-waiter";

const checkState = async (client: EKSClient, input: DescribeFargateProfileCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    let result: any = await client.send(new DescribeFargateProfileCommand(input));
    reason = result;
    try {
      let returnComparator = () => {
        return result.fargateProfile.status;
      };
      if (returnComparator() === "DELETE_FAILED") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
    if (exception.name && exception.name == "ResourceNotFoundException") {
      return { state: WaiterState.SUCCESS, reason };
    }
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 *
 *  @deprecated Use waitUntilFargateProfileDeleted instead. waitForFargateProfileDeleted does not throw error in non-success cases.
 */
export const waitForFargateProfileDeleted = async (
  params: WaiterConfiguration<EKSClient>,
  input: DescribeFargateProfileCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 30, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeFargateProfileCommand for polling.
 */
export const waitUntilFargateProfileDeleted = async (
  params: WaiterConfiguration<EKSClient>,
  input: DescribeFargateProfileCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 30, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
