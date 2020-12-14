import { ECSClient } from "../ECSClient";
import { DescribeServicesCommand, DescribeServicesCommandInput } from "../commands/DescribeServicesCommand";
import { WaiterConfiguration, WaiterResult, WaiterState, createWaiter } from "@aws-sdk/util-waiter";

const checkState = async (client: ECSClient, input: DescribeServicesCommandInput): Promise<WaiterResult> => {
  try {
    let result: any = await client.send(new DescribeServicesCommand(input));
    try {
      let returnComparator = () => {
        let flat_1: any[] = [].concat(...result.failures);
        let projection_3 = flat_1.map((element_2: any) => {
          return element_2.reason;
        });
        return projection_3;
      };
      for (let anyStringEq_4 of returnComparator()) {
        if (anyStringEq_4 == "MISSING") {
          return { state: WaiterState.FAILURE };
        }
      }
    } catch (e) {}
    try {
      let returnComparator = () => {
        let flat_1: any[] = [].concat(...result.services);
        let projection_3 = flat_1.map((element_2: any) => {
          return element_2.status;
        });
        return projection_3;
      };
      for (let anyStringEq_4 of returnComparator()) {
        if (anyStringEq_4 == "INACTIVE") {
          return { state: WaiterState.SUCCESS };
        }
      }
    } catch (e) {}
  } catch (exception) {}
  return { state: WaiterState.RETRY };
};
/**
 *
 *  @param params : Waiter configuration options.
 *  @param input : the input to DescribeServicesCommand for polling.
 */
export const waitForServicesInactive = async (
  params: WaiterConfiguration<ECSClient>,
  input: DescribeServicesCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 15, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
