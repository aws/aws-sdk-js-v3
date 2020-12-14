import { ElasticTranscoderClient } from "../ElasticTranscoderClient";
import { ReadJobCommand, ReadJobCommandInput } from "../commands/ReadJobCommand";
import { WaiterConfiguration, WaiterResult, WaiterState, createWaiter } from "@aws-sdk/util-waiter";

const checkState = async (client: ElasticTranscoderClient, input: ReadJobCommandInput): Promise<WaiterResult> => {
  try {
    let result: any = await client.send(new ReadJobCommand(input));
    try {
      let returnComparator = () => {
        return result.Job.Status;
      };
      if (returnComparator() === "Complete") {
        return { state: WaiterState.SUCCESS };
      }
    } catch (e) {}
    try {
      let returnComparator = () => {
        return result.Job.Status;
      };
      if (returnComparator() === "Canceled") {
        return { state: WaiterState.FAILURE };
      }
    } catch (e) {}
    try {
      let returnComparator = () => {
        return result.Job.Status;
      };
      if (returnComparator() === "Error") {
        return { state: WaiterState.FAILURE };
      }
    } catch (e) {}
  } catch (exception) {}
  return { state: WaiterState.RETRY };
};
/**
 *
 *  @param params : Waiter configuration options.
 *  @param input : the input to ReadJobCommand for polling.
 */
export const waitForJobComplete = async (
  params: WaiterConfiguration<ElasticTranscoderClient>,
  input: ReadJobCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 30, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
