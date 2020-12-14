import { SchemasClient } from "../SchemasClient";
import { DescribeCodeBindingCommand, DescribeCodeBindingCommandInput } from "../commands/DescribeCodeBindingCommand";
import { WaiterConfiguration, WaiterResult, WaiterState, createWaiter } from "@aws-sdk/util-waiter";

const checkState = async (client: SchemasClient, input: DescribeCodeBindingCommandInput): Promise<WaiterResult> => {
  try {
    let result: any = await client.send(new DescribeCodeBindingCommand(input));
    try {
      let returnComparator = () => {
        return result.Status;
      };
      if (returnComparator() === "CREATE_COMPLETE") {
        return { state: WaiterState.SUCCESS };
      }
    } catch (e) {}
    try {
      let returnComparator = () => {
        return result.Status;
      };
      if (returnComparator() === "CREATE_IN_PROGRESS") {
        return { state: WaiterState.RETRY };
      }
    } catch (e) {}
    try {
      let returnComparator = () => {
        return result.Status;
      };
      if (returnComparator() === "CREATE_FAILED") {
        return { state: WaiterState.FAILURE };
      }
    } catch (e) {}
  } catch (exception) {
    if (exception.name && exception.name == "NotFoundException") {
      return { state: WaiterState.FAILURE };
    }
  }
  return { state: WaiterState.RETRY };
};
/**
 * Wait until code binding is generated
 *  @param params : Waiter configuration options.
 *  @param input : the input to DescribeCodeBindingCommand for polling.
 */
export const waitForCodeBindingExists = async (
  params: WaiterConfiguration<SchemasClient>,
  input: DescribeCodeBindingCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 2, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
