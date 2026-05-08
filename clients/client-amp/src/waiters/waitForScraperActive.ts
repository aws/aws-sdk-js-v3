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
  type DescribeScraperCommandInput,
  type DescribeScraperCommandOutput,
  DescribeScraperCommand,
} from "../commands/DescribeScraperCommand";
import type { AmpServiceException } from "../models/AmpServiceException";

const checkState = async (client: AmpClient, input: DescribeScraperCommandInput): Promise<WaiterResult<DescribeScraperCommandOutput | AmpServiceException>> => {
  let reason;
  try {
    let result: DescribeScraperCommandOutput & any = await client.send(new DescribeScraperCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.scraper.status.statusCode;
      }
      if (returnComparator() === "ACTIVE") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
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
): Promise<WaiterResult<DescribeScraperCommandOutput | AmpServiceException>> => {
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
): Promise<WaiterResult<DescribeScraperCommandOutput>> => {
  const serviceDefaults = { minDelay: 2, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result) as WaiterResult<DescribeScraperCommandOutput>;
};
