// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListResourcesCommand,
  ListResourcesCommandInput,
  ListResourcesCommandOutput,
} from "../commands/ListResourcesCommand";
import { LakeFormationClient } from "../LakeFormationClient";
import { LakeFormationPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListResources: (
  config: LakeFormationPaginationConfiguration,
  input: ListResourcesCommandInput,
  ...rest: any[]
) => Paginator<ListResourcesCommandOutput> = createPaginator<
  LakeFormationPaginationConfiguration,
  ListResourcesCommandInput,
  ListResourcesCommandOutput
>(LakeFormationClient, ListResourcesCommand, "NextToken", "NextToken", "MaxResults");
