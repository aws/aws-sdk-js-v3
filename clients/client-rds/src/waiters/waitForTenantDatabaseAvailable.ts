// smithy-typescript generated code
import { checkExceptions, createWaiter, WaiterConfiguration, WaiterResult, WaiterState } from "@smithy/util-waiter";

import {
  DescribeTenantDatabasesCommand,
  DescribeTenantDatabasesCommandInput,
} from "../commands/DescribeTenantDatabasesCommand";
import { RDSClient } from "../RDSClient";

const checkState = async (client: RDSClient, input: DescribeTenantDatabasesCommandInput): Promise<WaiterResult> => {
  let reason;
  try {
    const result: any = await client.send(new DescribeTenantDatabasesCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        const flat_1: any[] = [].concat(...result.TenantDatabases);
        const projection_3 = flat_1.map((element_2: any) => {
          return element_2.Status;
        });
        return projection_3;
      };
      let allStringEq_5 = returnComparator().length > 0;
      for (const element_4 of returnComparator()) {
        allStringEq_5 = allStringEq_5 && element_4 == "available";
      }
      if (allStringEq_5) {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        const flat_1: any[] = [].concat(...result.TenantDatabases);
        const projection_3 = flat_1.map((element_2: any) => {
          return element_2.Status;
        });
        return projection_3;
      };
      for (const anyStringEq_4 of returnComparator()) {
        if (anyStringEq_4 == "deleted") {
          return { state: WaiterState.FAILURE, reason };
        }
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        const flat_1: any[] = [].concat(...result.TenantDatabases);
        const projection_3 = flat_1.map((element_2: any) => {
          return element_2.Status;
        });
        return projection_3;
      };
      for (const anyStringEq_4 of returnComparator()) {
        if (anyStringEq_4 == "incompatible-parameters") {
          return { state: WaiterState.FAILURE, reason };
        }
      }
    } catch (e) {}
    try {
      const returnComparator = () => {
        const flat_1: any[] = [].concat(...result.TenantDatabases);
        const projection_3 = flat_1.map((element_2: any) => {
          return element_2.Status;
        });
        return projection_3;
      };
      for (const anyStringEq_4 of returnComparator()) {
        if (anyStringEq_4 == "incompatible-restore") {
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
 *
 *  @deprecated Use waitUntilTenantDatabaseAvailable instead. waitForTenantDatabaseAvailable does not throw error in non-success cases.
 */
export const waitForTenantDatabaseAvailable = async (
  params: WaiterConfiguration<RDSClient>,
  input: DescribeTenantDatabasesCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 30, maxDelay: 120 };
  return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeTenantDatabasesCommand for polling.
 */
export const waitUntilTenantDatabaseAvailable = async (
  params: WaiterConfiguration<RDSClient>,
  input: DescribeTenantDatabasesCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 30, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
