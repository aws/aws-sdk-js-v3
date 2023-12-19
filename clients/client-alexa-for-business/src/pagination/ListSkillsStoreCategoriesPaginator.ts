// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import { AlexaForBusinessClient } from "../AlexaForBusinessClient";
import {
  ListSkillsStoreCategoriesCommand,
  ListSkillsStoreCategoriesCommandInput,
  ListSkillsStoreCategoriesCommandOutput,
} from "../commands/ListSkillsStoreCategoriesCommand";
import { AlexaForBusinessPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSkillsStoreCategories: (
  config: AlexaForBusinessPaginationConfiguration,
  input: ListSkillsStoreCategoriesCommandInput,
  ...rest: any[]
) => Paginator<ListSkillsStoreCategoriesCommandOutput> = createPaginator<
  AlexaForBusinessPaginationConfiguration,
  ListSkillsStoreCategoriesCommandInput,
  ListSkillsStoreCategoriesCommandOutput
>(AlexaForBusinessClient, ListSkillsStoreCategoriesCommand, "NextToken", "NextToken", "MaxResults");
