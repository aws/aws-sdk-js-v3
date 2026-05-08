// smithy-typescript generated code
import {
  type WaiterConfiguration,
  type WaiterResult,
  checkExceptions,
  createWaiter,
  WaiterState,
} from "@smithy/core/client";

import {
  type DescribeContributorInsightsCommandInput,
  type DescribeContributorInsightsCommandOutput,
  DescribeContributorInsightsCommand,
} from "../commands/DescribeContributorInsightsCommand";
import type { DynamoDBClient } from "../DynamoDBClient";
import type { DynamoDBServiceException } from "../models/DynamoDBServiceException";

const checkState = async (client: DynamoDBClient, input: DescribeContributorInsightsCommandInput): Promise<WaiterResult<DescribeContributorInsightsCommandOutput | DynamoDBServiceException>> => {
  let reason;
  try {
    let result: DescribeContributorInsightsCommandOutput & any = await client.send(new DescribeContributorInsightsCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.ContributorInsightsStatus;
      }
      if (returnComparator() === "ENABLED") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.ContributorInsightsStatus;
      }
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
 *
 *  @deprecated Use waitUntilContributorInsightsEnabled instead. waitForContributorInsightsEnabled does not throw error in non-success cases.
 */
export const waitForContributorInsightsEnabled = async (
  params: WaiterConfiguration<DynamoDBClient>,
  input: DescribeContributorInsightsCommandInput
): Promise<WaiterResult<DescribeContributorInsightsCommandOutput | DynamoDBServiceException>> => {
  const serviceDefaults = { minDelay: 20, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeContributorInsightsCommand for polling.
 */
export const waitUntilContributorInsightsEnabled = async (
  params: WaiterConfiguration<DynamoDBClient>,
  input: DescribeContributorInsightsCommandInput
): Promise<WaiterResult<DescribeContributorInsightsCommandOutput>> => {
  const serviceDefaults = { minDelay: 20, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result) as WaiterResult<DescribeContributorInsightsCommandOutput>;
};
