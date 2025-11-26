// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListModelVersionsCommand,
  ListModelVersionsCommandInput,
  ListModelVersionsCommandOutput,
} from "../commands/ListModelVersionsCommand";
import { LookoutEquipmentClient } from "../LookoutEquipmentClient";
import { LookoutEquipmentPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListModelVersions: (
  config: LookoutEquipmentPaginationConfiguration,
  input: ListModelVersionsCommandInput,
  ...rest: any[]
) => Paginator<ListModelVersionsCommandOutput> = createPaginator<
  LookoutEquipmentPaginationConfiguration,
  ListModelVersionsCommandInput,
  ListModelVersionsCommandOutput
>(LookoutEquipmentClient, ListModelVersionsCommand, "NextToken", "NextToken", "MaxResults");
