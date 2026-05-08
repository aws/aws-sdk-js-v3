// smithy-typescript generated code
import {
  type WaiterConfiguration,
  type WaiterResult,
  checkExceptions,
  createWaiter,
  WaiterState,
} from "@smithy/core/client";

import type { AmpClient } from "../AmpClient";
import {
  type DescribeAnomalyDetectorCommandInput,
  type DescribeAnomalyDetectorCommandOutput,
  DescribeAnomalyDetectorCommand,
} from "../commands/DescribeAnomalyDetectorCommand";
import type { AmpServiceException } from "../models/AmpServiceException";
import type { ResourceNotFoundException } from "../models/errors";

const checkState = async (client: AmpClient, input: DescribeAnomalyDetectorCommandInput): Promise<WaiterResult<DescribeAnomalyDetectorCommandOutput | AmpServiceException>> => {
  let reason;
  try {
    let result: DescribeAnomalyDetectorCommandOutput & any = await client.send(new DescribeAnomalyDetectorCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.anomalyDetector.status.statusCode;
      }
      if (returnComparator() === "DELETING") {
        return { state: WaiterState.RETRY, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
    if (exception.name === "ResourceNotFoundException") {
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
): Promise<WaiterResult<DescribeAnomalyDetectorCommandOutput | AmpServiceException>> => {
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
): Promise<WaiterResult<ResourceNotFoundException>> => {
  const serviceDefaults = { minDelay: 2, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result) as WaiterResult<ResourceNotFoundException>;
};
