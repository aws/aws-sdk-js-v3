// smithy-typescript generated code
import { checkExceptions, createWaiter, WaiterConfiguration, WaiterResult, WaiterState } from "@smithy/util-waiter";

import { AmpClient } from "../AmpClient";
import {
  DescribeAnomalyDetectorCommand,
  DescribeAnomalyDetectorCommandInput,
} from "../commands/DescribeAnomalyDetectorCommand";

const checkState = async (client: AmpClient, input: DescribeAnomalyDetectorCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    let result: any = await client.send(new DescribeAnomalyDetectorCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.anomalyDetector.status.statusCode;
      }
      if (returnComparator() === "ACTIVE") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.anomalyDetector.status.statusCode;
      }
      if (returnComparator() === "CREATING") {
        return { state: WaiterState.RETRY, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.anomalyDetector.status.statusCode;
      }
      if (returnComparator() === "UPDATING") {
        return { state: WaiterState.RETRY, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 * Wait until the anomaly detector reaches ACTIVE status
 *  @deprecated Use waitUntilAnomalyDetectorActive instead. waitForAnomalyDetectorActive does not throw error in non-success cases.
 */
export const waitForAnomalyDetectorActive = async (
  params: WaiterConfiguration<AmpClient>,
  input: DescribeAnomalyDetectorCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 2, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Wait until the anomaly detector reaches ACTIVE status
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeAnomalyDetectorCommand for polling.
 */
export const waitUntilAnomalyDetectorActive = async (
  params: WaiterConfiguration<AmpClient>,
  input: DescribeAnomalyDetectorCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 2, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
