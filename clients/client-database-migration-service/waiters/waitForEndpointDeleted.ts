import { DatabaseMigrationServiceClient } from "../DatabaseMigrationServiceClient";
import { DescribeEndpointsCommand, DescribeEndpointsCommandInput } from "../commands/DescribeEndpointsCommand";
import { WaiterConfiguration, WaiterResult, WaiterState, createWaiter } from "@aws-sdk/util-waiter";

const checkState = async (
  client: DatabaseMigrationServiceClient,
  input: DescribeEndpointsCommandInput
): Promise<WaiterResult> => {
  try {
    let result: any = await client.send(new DescribeEndpointsCommand(input));
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
          return { state: WaiterState.FAILURE };
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
          return { state: WaiterState.FAILURE };
        }
      }
    } catch (e) {}
  } catch (exception) {
    if (exception.name && exception.name == "ResourceNotFoundFault") {
      return { state: WaiterState.SUCCESS };
    }
  }
  return { state: WaiterState.RETRY };
};
/**
 * Wait until testing endpoint is deleted.
 *  @param params : Waiter configuration options.
 *  @param input : the input to DescribeEndpointsCommand for polling.
 */
export const waitForEndpointDeleted = async (
  params: WaiterConfiguration<DatabaseMigrationServiceClient>,
  input: DescribeEndpointsCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 5, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
