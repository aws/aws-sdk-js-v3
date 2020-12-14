import { NeptuneClient } from "../NeptuneClient";
import { DescribeDBInstancesCommand, DescribeDBInstancesCommandInput } from "../commands/DescribeDBInstancesCommand";
import { WaiterConfiguration, WaiterResult, WaiterState, createWaiter } from "@aws-sdk/util-waiter";

const checkState = async (client: NeptuneClient, input: DescribeDBInstancesCommandInput): Promise<WaiterResult> => {
  try {
    let result: any = await client.send(new DescribeDBInstancesCommand(input));
    try {
      let returnComparator = () => {
        let flat_1: any[] = [].concat(...result.DBInstances);
        let projection_3 = flat_1.map((element_2: any) => {
          return element_2.DBInstanceStatus;
        });
        return projection_3;
      };
      let allStringEq_5 = returnComparator().length > 0;
      for (let element_4 of returnComparator()) {
        allStringEq_5 = allStringEq_5 && element_4 == "available";
      }
      if (allStringEq_5) {
        return { state: WaiterState.SUCCESS };
      }
    } catch (e) {}
    try {
      let returnComparator = () => {
        let flat_1: any[] = [].concat(...result.DBInstances);
        let projection_3 = flat_1.map((element_2: any) => {
          return element_2.DBInstanceStatus;
        });
        return projection_3;
      };
      for (let anyStringEq_4 of returnComparator()) {
        if (anyStringEq_4 == "deleted") {
          return { state: WaiterState.FAILURE };
        }
      }
    } catch (e) {}
    try {
      let returnComparator = () => {
        let flat_1: any[] = [].concat(...result.DBInstances);
        let projection_3 = flat_1.map((element_2: any) => {
          return element_2.DBInstanceStatus;
        });
        return projection_3;
      };
      for (let anyStringEq_4 of returnComparator()) {
        if (anyStringEq_4 == "deleting") {
          return { state: WaiterState.FAILURE };
        }
      }
    } catch (e) {}
    try {
      let returnComparator = () => {
        let flat_1: any[] = [].concat(...result.DBInstances);
        let projection_3 = flat_1.map((element_2: any) => {
          return element_2.DBInstanceStatus;
        });
        return projection_3;
      };
      for (let anyStringEq_4 of returnComparator()) {
        if (anyStringEq_4 == "failed") {
          return { state: WaiterState.FAILURE };
        }
      }
    } catch (e) {}
    try {
      let returnComparator = () => {
        let flat_1: any[] = [].concat(...result.DBInstances);
        let projection_3 = flat_1.map((element_2: any) => {
          return element_2.DBInstanceStatus;
        });
        return projection_3;
      };
      for (let anyStringEq_4 of returnComparator()) {
        if (anyStringEq_4 == "incompatible-restore") {
          return { state: WaiterState.FAILURE };
        }
      }
    } catch (e) {}
    try {
      let returnComparator = () => {
        let flat_1: any[] = [].concat(...result.DBInstances);
        let projection_3 = flat_1.map((element_2: any) => {
          return element_2.DBInstanceStatus;
        });
        return projection_3;
      };
      for (let anyStringEq_4 of returnComparator()) {
        if (anyStringEq_4 == "incompatible-parameters") {
          return { state: WaiterState.FAILURE };
        }
      }
    } catch (e) {}
  } catch (exception) {}
  return { state: WaiterState.RETRY };
};
/**
 *
 *  @param params : Waiter configuration options.
 *  @param input : the input to DescribeDBInstancesCommand for polling.
 */
export const waitForDBInstanceAvailable = async (
  params: WaiterConfiguration<NeptuneClient>,
  input: DescribeDBInstancesCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 30, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
