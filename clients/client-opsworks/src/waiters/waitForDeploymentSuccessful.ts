// smithy-typescript generated code
import { checkExceptions, createWaiter, WaiterConfiguration, WaiterResult, WaiterState } from "@aws-sdk/util-waiter";

import { DescribeDeploymentsCommand, DescribeDeploymentsCommandInput } from "../commands/DescribeDeploymentsCommand";
import { OpsWorksClient } from "../OpsWorksClient";

const checkState = async (client: OpsWorksClient, input: DescribeDeploymentsCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    const result: any = await client.send(new DescribeDeploymentsCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        const flat_1: any[] = [].concat(...result.Deployments);
        const projection_3 = flat_1.map((element_2: any) => {
          return element_2.Status;
        });
        return projection_3;
      };
      let allStringEq_5 = returnComparator().length > 0;
      for (const element_4 of returnComparator()) {
        allStringEq_5 = allStringEq_5 && element_4 == "successful";
      }
      if (allStringEq_5) {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        const flat_1: any[] = [].concat(...result.Deployments);
        const projection_3 = flat_1.map((element_2: any) => {
          return element_2.Status;
        });
        return projection_3;
      };
      for (const anyStringEq_4 of returnComparator()) {
        if (anyStringEq_4 == "failed") {
          return { state: WaiterState.FAILURE, reason };
        }
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 * Wait until a deployment has completed successfully.
 *  @deprecated Use waitUntilDeploymentSuccessful instead. waitForDeploymentSuccessful does not throw error in non-success cases.
 */
export const waitForDeploymentSuccessful = async (
  params: WaiterConfiguration<OpsWorksClient>,
  input: DescribeDeploymentsCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 15, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Wait until a deployment has completed successfully.
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeDeploymentsCommand for polling.
 */
export const waitUntilDeploymentSuccessful = async (
  params: WaiterConfiguration<OpsWorksClient>,
  input: DescribeDeploymentsCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 15, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
