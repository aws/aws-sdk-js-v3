// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListExperienceEntitiesCommand,
  ListExperienceEntitiesCommandInput,
  ListExperienceEntitiesCommandOutput,
} from "../commands/ListExperienceEntitiesCommand";
import { KendraClient } from "../KendraClient";
import { KendraPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListExperienceEntities: (
  config: KendraPaginationConfiguration,
  input: ListExperienceEntitiesCommandInput,
  ...rest: any[]
) => Paginator<ListExperienceEntitiesCommandOutput> = createPaginator<
  KendraPaginationConfiguration,
  ListExperienceEntitiesCommandInput,
  ListExperienceEntitiesCommandOutput
>(KendraClient, ListExperienceEntitiesCommand, "NextToken", "NextToken", "");
