// smithy-typescript generated code
import { checkExceptions, createWaiter, WaiterConfiguration, WaiterResult, WaiterState } from "@smithy/util-waiter";

import { AmpClient } from "../AmpClient";
import { DescribeScraperCommand, DescribeScraperCommandInput } from "../commands/DescribeScraperCommand";

const checkState = async (client: AmpClient, input: DescribeScraperCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    const result: any = await client.send(new DescribeScraperCommand(input));
    reason = result;
    try {
      let returnComparator = () => {
        return result.scraper.status.statusCode;
      }
      if (returnComparator() === "ACTIVE") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      let returnComparator = () => {
        return result.scraper.status.statusCode;
      }
      if (returnComparator() === "CREATION_FAILED") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 * Wait until a scraper reaches ACTIVE status
 *  @deprecated Use waitUntilScraperActive instead. waitForScraperActive does not throw error in non-success cases.
 */
export const waitForScraperActive = async (
  params: WaiterConfiguration<AmpClient>,
  input: DescribeScraperCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 2, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Wait until a scraper reaches ACTIVE status
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeScraperCommand for polling.
 */
export const waitUntilScraperActive = async (
  params: WaiterConfiguration<AmpClient>,
  input: DescribeScraperCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 2, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
