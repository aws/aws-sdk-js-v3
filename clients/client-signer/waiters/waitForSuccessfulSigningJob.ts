import { SignerClient } from "../SignerClient";
import { DescribeSigningJobCommand, DescribeSigningJobCommandInput } from "../commands/DescribeSigningJobCommand";
import { WaiterConfiguration, WaiterResult, WaiterState, createWaiter } from "@aws-sdk/util-waiter";

const checkState = async (client: SignerClient, input: DescribeSigningJobCommandInput): Promise<WaiterResult> => {
  try {
    let result: any = await client.send(new DescribeSigningJobCommand(input));
    try {
      let returnComparator = () => {
        return result.status;
      };
      if (returnComparator() === "Succeeded") {
        return { state: WaiterState.SUCCESS };
      }
    } catch (e) {}
    try {
      let returnComparator = () => {
        return result.status;
      };
      if (returnComparator() === "Failed") {
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
 *  @param input : the input to DescribeSigningJobCommand for polling.
 */
export const waitForSuccessfulSigningJob = async (
  params: WaiterConfiguration<SignerClient>,
  input: DescribeSigningJobCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 20, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
