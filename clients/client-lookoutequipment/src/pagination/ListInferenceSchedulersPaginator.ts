// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListInferenceSchedulersCommand,
  ListInferenceSchedulersCommandInput,
  ListInferenceSchedulersCommandOutput,
} from "../commands/ListInferenceSchedulersCommand";
import { LookoutEquipmentClient } from "../LookoutEquipmentClient";
import { LookoutEquipmentPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListInferenceSchedulers: (
  config: LookoutEquipmentPaginationConfiguration,
  input: ListInferenceSchedulersCommandInput,
  ...rest: any[]
) => Paginator<ListInferenceSchedulersCommandOutput> = createPaginator<
  LookoutEquipmentPaginationConfiguration,
  ListInferenceSchedulersCommandInput,
  ListInferenceSchedulersCommandOutput
>(LookoutEquipmentClient, ListInferenceSchedulersCommand, "NextToken", "NextToken", "MaxResults");
