// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListRotationShiftsCommand,
  ListRotationShiftsCommandInput,
  ListRotationShiftsCommandOutput,
} from "../commands/ListRotationShiftsCommand";
import { SSMContactsClient } from "../SSMContactsClient";
import { SSMContactsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListRotationShifts: (
  config: SSMContactsPaginationConfiguration,
  input: ListRotationShiftsCommandInput,
  ...rest: any[]
) => Paginator<ListRotationShiftsCommandOutput> = createPaginator<
  SSMContactsPaginationConfiguration,
  ListRotationShiftsCommandInput,
  ListRotationShiftsCommandOutput
>(SSMContactsClient, ListRotationShiftsCommand, "NextToken", "NextToken", "MaxResults");
