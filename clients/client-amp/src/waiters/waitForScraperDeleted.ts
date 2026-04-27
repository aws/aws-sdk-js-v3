// smithy-typescript generated code
import {
  type WaiterConfiguration,
  type WaiterResult,
  checkExceptions,
  createWaiter,
  WaiterState,
} from "@smithy/util-waiter";

import type { AmpClient } from "../AmpClient";
import {
  type DescribeScraperCommandInput,
  type DescribeScraperCommandOutput,
  DescribeScraperCommand,
} from "../commands/DescribeScraperCommand";
import type { AmpServiceException } from "../models/AmpServiceException";
import type { ResourceNotFoundException } from "../models/errors";

const checkState = async (client: AmpClient, input: DescribeScraperCommandInput): Promise<WaiterResult<DescribeScraperCommandOutput | AmpServiceException>> => {
  let reason;
  try {
    let result: DescribeScraperCommandOutput & any = await client.send(new DescribeScraperCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.scraper.status.statusCode;
      }
      if (returnComparator() === "DELETION_FAILED") {
        return { state: WaiterState.FAILURE, reason };
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
 * Wait until a scraper reaches DELETED status
 *  @deprecated Use waitUntilScraperDeleted instead. waitForScraperDeleted does not throw error in non-success cases.
 */
export const waitForScraperDeleted = async (
  params: WaiterConfiguration<AmpClient>,
  input: DescribeScraperCommandInput
): Promise<WaiterResult<DescribeScraperCommandOutput | AmpServiceException>> => {
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
): Promise<WaiterResult<ResourceNotFoundException>> => {
  const serviceDefaults = { minDelay: 2, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result) as WaiterResult<ResourceNotFoundException>;
};
