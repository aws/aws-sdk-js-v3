// smithy-typescript generated code
import {
  type WaiterConfiguration,
  type WaiterResult,
  checkExceptions,
  createWaiter,
  WaiterState,
} from "@smithy/core/client";

import {
  type DescribePortalCommandInput,
  type DescribePortalCommandOutput,
  DescribePortalCommand,
} from "../commands/DescribePortalCommand";
import type { IoTSiteWiseClient } from "../IoTSiteWiseClient";
import type { IoTSiteWiseServiceException } from "../models/IoTSiteWiseServiceException";

const checkState = async (client: IoTSiteWiseClient, input: DescribePortalCommandInput): Promise<WaiterResult<DescribePortalCommandOutput | IoTSiteWiseServiceException>> => {
  let reason;
  try {
    let result: DescribePortalCommandOutput & any = await client.send(new DescribePortalCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.portalStatus.state;
      }
      if (returnComparator() === "ACTIVE") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 *
 *  @deprecated Use waitUntilPortalActive instead. waitForPortalActive does not throw error in non-success cases.
 */
export const waitForPortalActive = async (
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
export const waitUntilPortalActive = async (
  params: WaiterConfiguration<IoTSiteWiseClient>,
  input: DescribePortalCommandInput
): Promise<WaiterResult<DescribePortalCommandOutput>> => {
  const serviceDefaults = { minDelay: 3, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result) as WaiterResult<DescribePortalCommandOutput>;
};
