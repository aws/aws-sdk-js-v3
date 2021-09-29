import { SignerClient } from "../SignerClient";
import { DescribeSigningJobCommand, DescribeSigningJobCommandInput } from "../commands/DescribeSigningJobCommand";
import { WaiterConfiguration, WaiterResult, WaiterState, checkExceptions, createWaiter } from "@aws-sdk/util-waiter";

const checkState = async (client: SignerClient, input: DescribeSigningJobCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    let result: any = await client.send(new DescribeSigningJobCommand(input));
    reason = result;
    try {
      let returnComparator = () => {
        return result.status;
      };
      if (returnComparator() === "Succeeded") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      let returnComparator = () => {
        return result.status;
      };
      if (returnComparator() === "Failed") {
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
 *  @deprecated Use waitUntilSuccessfulSigningJob instead. waitForSuccessfulSigningJob does not throw error in non-success cases.
 */
export const waitForSuccessfulSigningJob = async (
  params: WaiterConfiguration<SignerClient>,
  input: DescribeSigningJobCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 20, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeSigningJobCommand for polling.
 */
export const waitUntilSuccessfulSigningJob = async (
  params: WaiterConfiguration<SignerClient>,
  input: DescribeSigningJobCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 20, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
