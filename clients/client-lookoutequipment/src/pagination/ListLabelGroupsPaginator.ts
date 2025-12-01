// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListLabelGroupsCommand,
  ListLabelGroupsCommandInput,
  ListLabelGroupsCommandOutput,
} from "../commands/ListLabelGroupsCommand";
import { LookoutEquipmentClient } from "../LookoutEquipmentClient";
import { LookoutEquipmentPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListLabelGroups: (
  config: LookoutEquipmentPaginationConfiguration,
  input: ListLabelGroupsCommandInput,
  ...rest: any[]
) => Paginator<ListLabelGroupsCommandOutput> = createPaginator<
  LookoutEquipmentPaginationConfiguration,
  ListLabelGroupsCommandInput,
  ListLabelGroupsCommandOutput
>(LookoutEquipmentClient, ListLabelGroupsCommand, "NextToken", "NextToken", "MaxResults");
