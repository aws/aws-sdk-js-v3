import { ProtonClient } from "../ProtonClient";
import { GetServiceCommand, GetServiceCommandInput } from "../commands/GetServiceCommand";
import { WaiterConfiguration, WaiterResult, WaiterState, checkExceptions, createWaiter } from "@aws-sdk/util-waiter";

const checkState = async (client: ProtonClient, input: GetServiceCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    let result: any = await client.send(new GetServiceCommand(input));
    reason = result;
    try {
      let returnComparator = () => {
        return result.service.pipeline.deploymentStatus;
      };
      if (returnComparator() === "SUCCEEDED") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      let returnComparator = () => {
        return result.service.pipeline.deploymentStatus;
      };
      if (returnComparator() === "FAILED") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 * Wait until an ServicePipeline is deployed. Use this after invoking CreateService or UpdateServicePipeline
 *  @deprecated Use waitUntilServicePipelineDeployed instead. waitForServicePipelineDeployed does not throw error in non-success cases.
 */
export const waitForServicePipelineDeployed = async (
  params: WaiterConfiguration<ProtonClient>,
  input: GetServiceCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 10, maxDelay: 3600 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Wait until an ServicePipeline is deployed. Use this after invoking CreateService or UpdateServicePipeline
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetServiceCommand for polling.
 */
export const waitUntilServicePipelineDeployed = async (
  params: WaiterConfiguration<ProtonClient>,
  input: GetServiceCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 10, maxDelay: 3600 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
