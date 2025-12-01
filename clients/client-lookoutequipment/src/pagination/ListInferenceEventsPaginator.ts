// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListInferenceEventsCommand,
  ListInferenceEventsCommandInput,
  ListInferenceEventsCommandOutput,
} from "../commands/ListInferenceEventsCommand";
import { LookoutEquipmentClient } from "../LookoutEquipmentClient";
import { LookoutEquipmentPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListInferenceEvents: (
  config: LookoutEquipmentPaginationConfiguration,
  input: ListInferenceEventsCommandInput,
  ...rest: any[]
) => Paginator<ListInferenceEventsCommandOutput> = createPaginator<
  LookoutEquipmentPaginationConfiguration,
  ListInferenceEventsCommandInput,
  ListInferenceEventsCommandOutput
>(LookoutEquipmentClient, ListInferenceEventsCommand, "NextToken", "NextToken", "MaxResults");
