// smithy-typescript generated code
import { checkExceptions, createWaiter, WaiterConfiguration, WaiterResult, WaiterState } from "@smithy/util-waiter";

import {
  DescribeKinesisStreamingDestinationCommand,
  DescribeKinesisStreamingDestinationCommandInput,
} from "../commands/DescribeKinesisStreamingDestinationCommand";
import { DynamoDBClient } from "../DynamoDBClient";

const checkState = async (client: DynamoDBClient, input: DescribeKinesisStreamingDestinationCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    let result: any = await client.send(new DescribeKinesisStreamingDestinationCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        let flat_1: any[] = [].concat(...result.KinesisDataStreamDestinations);
        let projection_3 = flat_1.map((element_2: any) => {
          return element_2.DestinationStatus;
        });
        return projection_3;
      }
      for (let anyStringEq_4 of returnComparator()) {
        if (anyStringEq_4 == "ACTIVE") {
          return { state: WaiterState.SUCCESS, reason };
        }
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        let filterRes_2 = result.KinesisDataStreamDestinations.filter((element_1: any) => {
          return (((element_1.DestinationStatus == "DISABLED") || (element_1.DestinationStatus == "ENABLE_FAILED")) && ((element_1.DestinationStatus == "ENABLE_FAILED") || (element_1.DestinationStatus == "DISABLED"))) ;
        });
        return ((result.KinesisDataStreamDestinations.length > 0) && (filterRes_2.length == result.KinesisDataStreamDestinations.length));
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
 *
 *  @deprecated Use waitUntilKinesisStreamingDestinationActive instead. waitForKinesisStreamingDestinationActive does not throw error in non-success cases.
 */
export const waitForKinesisStreamingDestinationActive = async (
  params: WaiterConfiguration<DynamoDBClient>,
  input: DescribeKinesisStreamingDestinationCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 20, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeKinesisStreamingDestinationCommand for polling.
 */
export const waitUntilKinesisStreamingDestinationActive = async (
  params: WaiterConfiguration<DynamoDBClient>,
  input: DescribeKinesisStreamingDestinationCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 20, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
