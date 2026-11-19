// smithy-typescript generated code
import {
  type WaiterConfiguration,
  type WaiterResult,
  checkExceptions,
  createWaiter,
  WaiterState,
} from "@smithy/core/client";

import {
  type GetHealthCheckSourceCommandInput,
  type GetHealthCheckSourceCommandOutput,
  GetHealthCheckSourceCommand,
} from "../commands/GetHealthCheckSourceCommand";
import type { NoSuchHealthCheckSource } from "../models/errors";
import type { Route53ServiceException } from "../models/Route53ServiceException";
import type { Route53Client } from "../Route53Client";

const checkState = async (client: Route53Client, input: GetHealthCheckSourceCommandInput): Promise<WaiterResult<GetHealthCheckSourceCommandOutput | Route53ServiceException>> => {
  let reason;
  try {
    let result: GetHealthCheckSourceCommandOutput & any = await client.send(new GetHealthCheckSourceCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.HealthCheckSource.HealthCheckSourceStatus;
      }
      if (returnComparator() === "DELETE_COMPLETED") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.HealthCheckSource.HealthCheckSourceStatus;
      }
      if (returnComparator() === "DELETE_FAILED") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
    if (exception.name === "NoSuchHealthCheckSource") {
      return { state: WaiterState.SUCCESS, reason };
    }
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 *
 *  @deprecated Use waitUntilHealthCheckSourceDeleted instead. waitForHealthCheckSourceDeleted does not throw error in non-success cases.
 */
export const waitForHealthCheckSourceDeleted = async (
  params: WaiterConfiguration<Route53Client>,
  input: GetHealthCheckSourceCommandInput
): Promise<WaiterResult<GetHealthCheckSourceCommandOutput | Route53ServiceException>> => {
  const serviceDefaults = { minDelay: 15, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetHealthCheckSourceCommand for polling.
 */
export const waitUntilHealthCheckSourceDeleted = async (
  params: WaiterConfiguration<Route53Client>,
  input: GetHealthCheckSourceCommandInput
): Promise<WaiterResult<GetHealthCheckSourceCommandOutput | NoSuchHealthCheckSource>> => {
  const serviceDefaults = { minDelay: 15, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result) as WaiterResult<GetHealthCheckSourceCommandOutput | NoSuchHealthCheckSource>;
};
