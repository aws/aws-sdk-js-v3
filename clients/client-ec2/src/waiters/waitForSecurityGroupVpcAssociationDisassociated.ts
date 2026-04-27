// smithy-typescript generated code
import {
  type WaiterConfiguration,
  type WaiterResult,
  checkExceptions,
  createWaiter,
  WaiterState,
} from "@smithy/util-waiter";

import {
  type DescribeSecurityGroupVpcAssociationsCommandInput,
  type DescribeSecurityGroupVpcAssociationsCommandOutput,
  DescribeSecurityGroupVpcAssociationsCommand,
} from "../commands/DescribeSecurityGroupVpcAssociationsCommand";
import type { EC2Client } from "../EC2Client";
import type { EC2ServiceException } from "../models/EC2ServiceException";

const checkState = async (client: EC2Client, input: DescribeSecurityGroupVpcAssociationsCommandInput): Promise<WaiterResult<DescribeSecurityGroupVpcAssociationsCommandOutput | EC2ServiceException>> => {
  let reason;
  try {
    let result: DescribeSecurityGroupVpcAssociationsCommandOutput & any = await client.send(new DescribeSecurityGroupVpcAssociationsCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        let flat_1: any[] = [].concat(...result.SecurityGroupVpcAssociations);
        let projection_3 = flat_1.map((element_2: any) => {
          return element_2.State;
        });
        return projection_3;
      }
      let allStringEq_5 = (returnComparator().length > 0);
      for (let element_4 of returnComparator()) {
        allStringEq_5 = allStringEq_5 && (element_4 == "disassociated")
      }
      if (allStringEq_5) {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        let flat_1: any[] = [].concat(...result.SecurityGroupVpcAssociations);
        let projection_3 = flat_1.map((element_2: any) => {
          return element_2.State;
        });
        return projection_3;
      }
      for (let anyStringEq_4 of returnComparator()) {
        if (anyStringEq_4 == "disassociating") {
          return { state: WaiterState.RETRY, reason };
        }
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        let flat_1: any[] = [].concat(...result.SecurityGroupVpcAssociations);
        let projection_3 = flat_1.map((element_2: any) => {
          return element_2.State;
        });
        return projection_3;
      }
      for (let anyStringEq_4 of returnComparator()) {
        if (anyStringEq_4 == "disassociation-failed") {
          return { state: WaiterState.FAILURE, reason };
        }
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        let flat_1: any[] = [].concat(...result.SecurityGroupVpcAssociations);
        return (flat_1.length == 0);
      }
      if (returnComparator() == true) {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 *
 *  @deprecated Use waitUntilSecurityGroupVpcAssociationDisassociated instead. waitForSecurityGroupVpcAssociationDisassociated does not throw error in non-success cases.
 */
export const waitForSecurityGroupVpcAssociationDisassociated = async (
  params: WaiterConfiguration<EC2Client>,
  input: DescribeSecurityGroupVpcAssociationsCommandInput
): Promise<WaiterResult<DescribeSecurityGroupVpcAssociationsCommandOutput | EC2ServiceException>> => {
  const serviceDefaults = { minDelay: 10, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeSecurityGroupVpcAssociationsCommand for polling.
 */
export const waitUntilSecurityGroupVpcAssociationDisassociated = async (
  params: WaiterConfiguration<EC2Client>,
  input: DescribeSecurityGroupVpcAssociationsCommandInput
): Promise<WaiterResult<DescribeSecurityGroupVpcAssociationsCommandOutput>> => {
  const serviceDefaults = { minDelay: 10, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result) as WaiterResult<DescribeSecurityGroupVpcAssociationsCommandOutput>;
};
