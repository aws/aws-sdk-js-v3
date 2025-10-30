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
    const result: any = await client.send(new DescribeAnomalyDetectorCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.anomalyDetector.status.statusCode;
      };
      if (returnComparator() === "DELETING") {
        return { state: WaiterState.RETRY, reason };
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
 * Wait until the anomaly detector reaches DELETED status
 *  @deprecated Use waitUntilAnomalyDetectorDeleted instead. waitForAnomalyDetectorDeleted does not throw error in non-success cases.
 */
export const waitForAnomalyDetectorDeleted = async (
  params: WaiterConfiguration<AmpClient>,
  input: DescribeAnomalyDetectorCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 2, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Wait until the anomaly detector reaches DELETED status
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeAnomalyDetectorCommand for polling.
 */
export const waitUntilAnomalyDetectorDeleted = async (
  params: WaiterConfiguration<AmpClient>,
  input: DescribeAnomalyDetectorCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 2, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
