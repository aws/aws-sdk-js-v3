// smithy-typescript generated code
import {
  type WaiterConfiguration,
  type WaiterResult,
  checkExceptions,
  createWaiter,
  WaiterState,
} from "@smithy/core/client";

import { type GetImageCommandInput, type GetImageCommandOutput, GetImageCommand } from "../commands/GetImageCommand";
import type { ImagebuilderClient } from "../ImagebuilderClient";
import type { ImagebuilderServiceException } from "../models/ImagebuilderServiceException";

const checkState = async (client: ImagebuilderClient, input: GetImageCommandInput): Promise<WaiterResult<GetImageCommandOutput | ImagebuilderServiceException>> => {
  let reason;
  try {
    let result: GetImageCommandOutput & any = await client.send(new GetImageCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.image.state.status;
      }
      if (returnComparator() === "AVAILABLE") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.image.state.status;
      }
      if (returnComparator() === "FAILED") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return result.image.state.status;
      }
      if (returnComparator() === "CANCELLED") {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 * Wait until an image build version reaches the AVAILABLE state, meaning the build completed, including distribution and integration of output resources. The waiter fails if the image reaches the FAILED or CANCELLED state. Specify the full image build version ARN; wildcard version ARNs only resolve to images that are already available.
 *  @deprecated Use waitUntilImageAvailable instead. waitForImageAvailable does not throw error in non-success cases.
 */
export const waitForImageAvailable = async (
  params: WaiterConfiguration<ImagebuilderClient>,
  input: GetImageCommandInput
): Promise<WaiterResult<GetImageCommandOutput | ImagebuilderServiceException>> => {
  const serviceDefaults = { minDelay: 60, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Wait until an image build version reaches the AVAILABLE state, meaning the build completed, including distribution and integration of output resources. The waiter fails if the image reaches the FAILED or CANCELLED state. Specify the full image build version ARN; wildcard version ARNs only resolve to images that are already available.
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetImageCommand for polling.
 */
export const waitUntilImageAvailable = async (
  params: WaiterConfiguration<ImagebuilderClient>,
  input: GetImageCommandInput
): Promise<WaiterResult<GetImageCommandOutput>> => {
  const serviceDefaults = { minDelay: 60, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result) as WaiterResult<GetImageCommandOutput>;
};
