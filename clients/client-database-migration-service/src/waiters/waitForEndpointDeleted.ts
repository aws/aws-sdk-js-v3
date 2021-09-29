import { DatabaseMigrationServiceClient } from "../DatabaseMigrationServiceClient";
import { DescribeEndpointsCommand, DescribeEndpointsCommandInput } from "../commands/DescribeEndpointsCommand";
import { WaiterConfiguration, WaiterResult, WaiterState, checkExceptions, createWaiter } from "@aws-sdk/util-waiter";

const checkState = async (
  client: DatabaseMigrationServiceClient,
  input: DescribeEndpointsCommandInput
): Promise<WaiterResult> => {
  let reason;
  try {
    let result: any = await client.send(new DescribeEndpointsCommand(input));
    reason = result;
    try {
      let returnComparator = () => {
        let flat_1: any[] = [].concat(...result.Endpoints);
        let projection_3 = flat_1.map((element_2: any) => {
          return element_2.Status;
        });
        return projection_3;
      };
      for (let anyStringEq_4 of returnComparator()) {
        if (anyStringEq_4 == "active") {
          return { state: WaiterState.FAILURE, reason };
        }
      }
    } catch (e) {}
    try {
      let returnComparator = () => {
        let flat_1: any[] = [].concat(...result.Endpoints);
        let projection_3 = flat_1.map((element_2: any) => {
          return element_2.Status;
        });
        return projection_3;
      };
      for (let anyStringEq_4 of returnComparator()) {
        if (anyStringEq_4 == "creating") {
          return { state: WaiterState.FAILURE, reason };
        }
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
    if (exception.name && exception.name == "ResourceNotFoundFault") {
      return { state: WaiterState.SUCCESS, reason };
    }
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 * Wait until testing endpoint is deleted.
 *  @deprecated Use waitUntilEndpointDeleted instead. waitForEndpointDeleted does not throw error in non-success cases.
 */
export const waitForEndpointDeleted = async (
  params: WaiterConfiguration<DatabaseMigrationServiceClient>,
  input: DescribeEndpointsCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 5, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 * Wait until testing endpoint is deleted.
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeEndpointsCommand for polling.
 */
export const waitUntilEndpointDeleted = async (
  params: WaiterConfiguration<DatabaseMigrationServiceClient>,
  input: DescribeEndpointsCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 5, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
