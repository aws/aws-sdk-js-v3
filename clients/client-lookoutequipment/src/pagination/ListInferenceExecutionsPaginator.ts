// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListInferenceExecutionsCommand,
  ListInferenceExecutionsCommandInput,
  ListInferenceExecutionsCommandOutput,
} from "../commands/ListInferenceExecutionsCommand";
import { LookoutEquipmentClient } from "../LookoutEquipmentClient";
import { LookoutEquipmentPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListInferenceExecutions: (
  config: LookoutEquipmentPaginationConfiguration,
  input: ListInferenceExecutionsCommandInput,
  ...rest: any[]
) => Paginator<ListInferenceExecutionsCommandOutput> = createPaginator<
  LookoutEquipmentPaginationConfiguration,
  ListInferenceExecutionsCommandInput,
  ListInferenceExecutionsCommandOutput
>(LookoutEquipmentClient, ListInferenceExecutionsCommand, "NextToken", "NextToken", "MaxResults");
