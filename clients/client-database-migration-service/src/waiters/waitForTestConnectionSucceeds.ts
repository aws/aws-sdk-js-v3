import { DatabaseMigrationServiceClient } from "../DatabaseMigrationServiceClient";
import { DescribeConnectionsCommand, DescribeConnectionsCommandInput } from "../commands/DescribeConnectionsCommand";
import { WaiterConfiguration, WaiterResult, WaiterState, checkExceptions, createWaiter } from "@aws-sdk/util-waiter";

const checkState = async (
  client: DatabaseMigrationServiceClient,
  input: DescribeConnectionsCommandInput
): Promise<WaiterResult> => {
  let reason;
  try {
    let result: any = await client.send(new DescribeConnectionsCommand(input));
    reason = result;
    try {
      let returnComparator = () => {
        let flat_1: any[] = [].concat(...result.Connections);
        let projection_3 = flat_1.map((element_2: any) => {
          return element_2.Status;
        });
        return projection_3;
      };
      let allStringEq_5 = returnComparator().length > 0;
      for (let element_4 of returnComparator()) {
        allStringEq_5 = allStringEq_5 && element_4 == "successful";
      }
      if (allStringEq_5) {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      let returnComparator = () => {
        let flat_1: any[] = [].concat(...result.Connections);
        let projection_3 = flat_1.map((element_2: any) => {
          return element_2.Status;
        });
        return projection_3;
      };
      for (let anyStringEq_4 of returnComparator()) {
        if (anyStringEq_4 == "failed") {
          return { state: WaiterState.FAILURE, reason };
        }
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 * Wait until testing connection succeeds.
 *  @deprecated Use waitUntilTestConnectionSucceeds instead. waitForTestConnectionSucceeds does not throw error in non-success cases.
 */
export const waitForTestConnectionSucceeds = async (
  params: WaiterConfiguration<DatabaseMigrationServiceClient>,
  input: DescribeConnectionsCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 5, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Wait until testing connection succeeds.
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeConnectionsCommand for polling.
 */
export const waitUntilTestConnectionSucceeds = async (
  params: WaiterConfiguration<DatabaseMigrationServiceClient>,
  input: DescribeConnectionsCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 5, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
