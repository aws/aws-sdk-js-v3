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
    let result: any = await client.send(new DescribeTenantDatabasesCommand(input));
    reason = result;
    try {
      const returnComparator = () => {
        return (result.TenantDatabases.length == 0.0);
      }
      if (returnComparator() == true) {
        return { state: WaiterState.SUCCESS, reason };
      }
    } catch (e) {}
  } catch (exception) {
    reason = exception;
    if (exception.name && exception.name == "DBInstanceNotFoundFault") {
      return { state: WaiterState.SUCCESS, reason };
    }
  }
  return { state: WaiterState.RETRY, reason };
};
/**
 *
 *  @deprecated Use waitUntilTenantDatabaseDeleted instead. waitForTenantDatabaseDeleted does not throw error in non-success cases.
 */
export const waitForTenantDatabaseDeleted = async (
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
export const waitUntilTenantDatabaseDeleted = async (
  params: WaiterConfiguration<RDSClient>,
  input: DescribeTenantDatabasesCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 30, maxDelay: 120 };
  const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
  return checkExceptions(result);
};
