// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListPreviewRotationShiftsCommand,
  ListPreviewRotationShiftsCommandInput,
  ListPreviewRotationShiftsCommandOutput,
} from "../commands/ListPreviewRotationShiftsCommand";
import { SSMContactsClient } from "../SSMContactsClient";
import { SSMContactsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListPreviewRotationShifts: (
  config: SSMContactsPaginationConfiguration,
  input: ListPreviewRotationShiftsCommandInput,
  ...rest: any[]
) => Paginator<ListPreviewRotationShiftsCommandOutput> = createPaginator<
  SSMContactsPaginationConfiguration,
  ListPreviewRotationShiftsCommandInput,
  ListPreviewRotationShiftsCommandOutput
>(SSMContactsClient, ListPreviewRotationShiftsCommand, "NextToken", "NextToken", "MaxResults");
