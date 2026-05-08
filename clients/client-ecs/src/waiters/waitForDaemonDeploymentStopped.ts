// smithy-typescript generated code
import {
  type WaiterConfiguration,
  type WaiterResult,
  checkExceptions,
  createWaiter,
  WaiterState,
} from "@smithy/core/client";

import {
  type DescribeDaemonDeploymentsCommandInput,
  type DescribeDaemonDeploymentsCommandOutput,
  DescribeDaemonDeploymentsCommand,
} from "../commands/DescribeDaemonDeploymentsCommand";
import type { ECSClient } from "../ECSClient";
import type { ECSServiceException } from "../models/ECSServiceException";

const checkState = async (client: ECSClient, input: DescribeDaemonDeploymentsCommandInput): Promise<WaiterResult<DescribeDaemonDeploymentsCommandOutput | ECSServiceException>> => {
  let reason;
  try {
    let result: DescribeDaemonDeploymentsCommandOutput & any = await client.send(new DescribeDaemonDeploymentsCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        let flat_1: any[] = [].concat(...result.daemonDeployments);
        let projection_3 = flat_1.map((element_2: any) => {
          return element_2.status;
        });
        return projection_3;
      }
      let allStringEq_5 = (returnComparator().length > 0);
      for (let element_4 of returnComparator()) {
        allStringEq_5 = allStringEq_5 && (element_4 == "STOPPED")
      }
      if (allStringEq_5) {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        let flat_1: any[] = [].concat(...result.failures);
        let projection_3 = flat_1.map((element_2: any) => {
          return element_2.reason;
        });
        return projection_3;
      }
      for (let anyStringEq_4 of returnComparator()) {
        if (anyStringEq_4 == "MISSING") {
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
 *
 *  @deprecated Use waitUntilDaemonDeploymentStopped instead. waitForDaemonDeploymentStopped does not throw error in non-success cases.
 */
export const waitForDaemonDeploymentStopped = async (
  params: WaiterConfiguration<ECSClient>,
  input: DescribeDaemonDeploymentsCommandInput
): Promise<WaiterResult<DescribeDaemonDeploymentsCommandOutput | ECSServiceException>> => {
  const serviceDefaults = { minDelay: 15, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeDaemonDeploymentsCommand for polling.
 */
export const waitUntilDaemonDeploymentStopped = async (
  params: WaiterConfiguration<ECSClient>,
  input: DescribeDaemonDeploymentsCommandInput
): Promise<WaiterResult<DescribeDaemonDeploymentsCommandOutput>> => {
  const serviceDefaults = { minDelay: 15, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result) as WaiterResult<DescribeDaemonDeploymentsCommandOutput>;
};
