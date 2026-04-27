// smithy-typescript generated code
import {
  type WaiterConfiguration,
  type WaiterResult,
  checkExceptions,
  createWaiter,
  WaiterState,
} from "@smithy/util-waiter";

import {
  type DescribePortalCommandInput,
  type DescribePortalCommandOutput,
  DescribePortalCommand,
} from "../commands/DescribePortalCommand";
import type { IoTSiteWiseClient } from "../IoTSiteWiseClient";
import type { ResourceNotFoundException } from "../models/errors";
import type { IoTSiteWiseServiceException } from "../models/IoTSiteWiseServiceException";

const checkState = async (client: IoTSiteWiseClient, input: DescribePortalCommandInput): Promise<WaiterResult<DescribePortalCommandOutput | IoTSiteWiseServiceException>> => {
  let reason;
  try {
    let result: DescribePortalCommandOutput & any = await client.send(new DescribePortalCommand(input));
    reason = result;
  } catch (exception) {
    reason = exception;
    if (exception.name === "ResourceNotFoundException") {
      return { state: WaiterState.SUCCESS, reason };
    }
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 *
 *  @deprecated Use waitUntilPortalNotExists instead. waitForPortalNotExists does not throw error in non-success cases.
 */
export const waitForPortalNotExists = async (
  params: WaiterConfiguration<IoTSiteWiseClient>,
  input: DescribePortalCommandInput
): Promise<WaiterResult<DescribePortalCommandOutput | IoTSiteWiseServiceException>> => {
  const serviceDefaults = { minDelay: 3, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribePortalCommand for polling.
 */
export const waitUntilPortalNotExists = async (
  params: WaiterConfiguration<IoTSiteWiseClient>,
  input: DescribePortalCommandInput
): Promise<WaiterResult<ResourceNotFoundException>> => {
  const serviceDefaults = { minDelay: 3, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result) as WaiterResult<ResourceNotFoundException>;
};
