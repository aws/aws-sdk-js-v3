import { CloudWatchClient } from "../CloudWatchClient";
import { DescribeAlarmsCommand, DescribeAlarmsCommandInput } from "../commands/DescribeAlarmsCommand";
import { WaiterConfiguration, WaiterResult, WaiterState, createWaiter } from "@aws-sdk/util-waiter";

const checkState = async (client: CloudWatchClient, input: DescribeAlarmsCommandInput): Promise<WaiterResult> => {
  try {
    let result: any = await client.send(new DescribeAlarmsCommand(input));
    try {
      let returnComparator = () => {
        let flat_1: any[] = [].concat(...result.MetricAlarms);
        return flat_1.length > 0.0;
      };
      if (returnComparator() == true) {
        return { state: WaiterState.SUCCESS };
      }
    } catch (e) {}
  } catch (exception) {}
  return { state: WaiterState.RETRY };
};
/**
 *
 *  @param params : Waiter configuration options.
 *  @param input : the input to DescribeAlarmsCommand for polling.
 */
export const waitForAlarmExists = async (
  params: WaiterConfiguration<CloudWatchClient>,
  input: DescribeAlarmsCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 5, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
