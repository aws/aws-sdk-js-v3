import { DynamoDBClient } from "../DynamoDBClient";
import { DescribeTableCommand, DescribeTableCommandInput } from "../commands/DescribeTableCommand";
import { WaiterConfiguration, WaiterResult, WaiterState, createWaiter } from "@aws-sdk/util-waiter";

const checkState = async (client: DynamoDBClient, input: DescribeTableCommandInput): Promise<WaiterResult> => {
  try {
    let result: any = await client.send(new DescribeTableCommand(input));
  } catch (exception) {
    if (exception.name && exception.name == "ResourceNotFoundException") {
      return { state: WaiterState.SUCCESS };
    }
  }
  return { state: WaiterState.RETRY };
};
/**
 *
 *  @param params : Waiter configuration options.
 *  @param input : the input to DescribeTableCommand for polling.
 */
export const waitForTableNotExists = async (
  params: WaiterConfiguration<DynamoDBClient>,
  input: DescribeTableCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 20, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
