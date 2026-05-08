// smithy-typescript generated code
import {
  type WaiterConfiguration,
  type WaiterResult,
  checkExceptions,
  createWaiter,
  WaiterState,
} from "@smithy/core/client";

import {
  type DescribeSecurityGroupsCommandInput,
  type DescribeSecurityGroupsCommandOutput,
  DescribeSecurityGroupsCommand,
} from "../commands/DescribeSecurityGroupsCommand";
import type { EC2Client } from "../EC2Client";
import type { EC2ServiceException } from "../models/EC2ServiceException";

const checkState = async (client: EC2Client, input: DescribeSecurityGroupsCommandInput): Promise<WaiterResult<DescribeSecurityGroupsCommandOutput | EC2ServiceException>> => {
  let reason;
  try {
    let result: DescribeSecurityGroupsCommandOutput & any = await client.send(new DescribeSecurityGroupsCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        let flat_1: any[] = [].concat(...result.SecurityGroups);
        let projection_3 = flat_1.map((element_2: any) => {
          return element_2.GroupId;
        });
        return (projection_3.length > 0);
      }
      if (returnComparator() == true) {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
    if (exception.name === "InvalidGroup.NotFound") {
      return { state: WaiterState.RETRY, reason };
    }
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 *
 *  @deprecated Use waitUntilSecurityGroupExists instead. waitForSecurityGroupExists does not throw error in non-success cases.
 */
export const waitForSecurityGroupExists = async (
  params: WaiterConfiguration<EC2Client>,
  input: DescribeSecurityGroupsCommandInput
): Promise<WaiterResult<DescribeSecurityGroupsCommandOutput | EC2ServiceException>> => {
  const serviceDefaults = { minDelay: 5, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeSecurityGroupsCommand for polling.
 */
export const waitUntilSecurityGroupExists = async (
  params: WaiterConfiguration<EC2Client>,
  input: DescribeSecurityGroupsCommandInput
): Promise<WaiterResult<DescribeSecurityGroupsCommandOutput>> => {
  const serviceDefaults = { minDelay: 5, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result) as WaiterResult<DescribeSecurityGroupsCommandOutput>;
};
