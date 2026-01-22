// smithy-typescript generated code
import { checkExceptions, createWaiter, WaiterConfiguration, WaiterResult, WaiterState } from "@smithy/util-waiter";

import {
  DescribeContributorInsightsCommand,
  DescribeContributorInsightsCommandInput,
} from "../commands/DescribeContributorInsightsCommand";
import { DynamoDBClient } from "../DynamoDBClient";

const checkState = async (client: DynamoDBClient, input: DescribeContributorInsightsCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    let result: any = await client.send(new DescribeContributorInsightsCommand(input));
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
): Promise<WaiterResult> => {
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
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 20, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
