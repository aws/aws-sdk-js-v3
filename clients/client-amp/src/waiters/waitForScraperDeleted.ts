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
      if (returnComparator() === "DELETION_FAILED") {
        return { state: WaiterState.FAILURE, reason };
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
 * Wait until a scraper reaches DELETED status
 *  @deprecated Use waitUntilScraperDeleted instead. waitForScraperDeleted does not throw error in non-success cases.
 */
export const waitForScraperDeleted = async (
  params: WaiterConfiguration<AmpClient>,
  input: DescribeScraperCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 2, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Wait until a scraper reaches DELETED status
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeScraperCommand for polling.
 */
export const waitUntilScraperDeleted = async (
  params: WaiterConfiguration<AmpClient>,
  input: DescribeScraperCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 2, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
