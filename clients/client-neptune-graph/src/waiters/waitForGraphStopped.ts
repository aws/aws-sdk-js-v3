// smithy-typescript generated code
import {
  type WaiterConfiguration,
  type WaiterResult,
  checkExceptions,
  createWaiter,
  WaiterState,
} from "@smithy/util-waiter";

import { type GetGraphCommandInput, type GetGraphCommandOutput, GetGraphCommand } from "../commands/GetGraphCommand";
import type { NeptuneGraphServiceException } from "../models/NeptuneGraphServiceException";
import type { NeptuneGraphClient } from "../NeptuneGraphClient";

const checkState = async (client: NeptuneGraphClient, input: GetGraphCommandInput): Promise<WaiterResult<GetGraphCommandOutput | NeptuneGraphServiceException>> => {
  let reason;
  try {
    let result: GetGraphCommandOutput & any = await client.send(new GetGraphCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return result.status;
      }
      if (returnComparator() === "STOPPED") {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        return (result.status != "STOPPING");
      }
      if (returnComparator() == true) {
        return { state: WaiterState.FAILURE, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 * Wait until Graph is Stopped
 *  @deprecated Use waitUntilGraphStopped instead. waitForGraphStopped does not throw error in non-success cases.
 */
export const waitForGraphStopped = async (
  params: WaiterConfiguration<NeptuneGraphClient>,
  input: GetGraphCommandInput
): Promise<WaiterResult<GetGraphCommandOutput | NeptuneGraphServiceException>> => {
  const serviceDefaults = { minDelay: 20, maxDelay: 1800 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Wait until Graph is Stopped
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetGraphCommand for polling.
 */
export const waitUntilGraphStopped = async (
  params: WaiterConfiguration<NeptuneGraphClient>,
  input: GetGraphCommandInput
): Promise<WaiterResult<GetGraphCommandOutput>> => {
  const serviceDefaults = { minDelay: 20, maxDelay: 1800 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result) as WaiterResult<GetGraphCommandOutput>;
};
