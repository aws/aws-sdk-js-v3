// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import { AlexaForBusinessClient } from "../AlexaForBusinessClient";
import {
  ListSkillsStoreSkillsByCategoryCommand,
  ListSkillsStoreSkillsByCategoryCommandInput,
  ListSkillsStoreSkillsByCategoryCommandOutput,
} from "../commands/ListSkillsStoreSkillsByCategoryCommand";
import { AlexaForBusinessPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSkillsStoreSkillsByCategory: (
  config: AlexaForBusinessPaginationConfiguration,
  input: ListSkillsStoreSkillsByCategoryCommandInput,
  ...rest: any[]
) => Paginator<ListSkillsStoreSkillsByCategoryCommandOutput> = createPaginator<
  AlexaForBusinessPaginationConfiguration,
  ListSkillsStoreSkillsByCategoryCommandInput,
  ListSkillsStoreSkillsByCategoryCommandOutput
>(AlexaForBusinessClient, ListSkillsStoreSkillsByCategoryCommand, "NextToken", "NextToken", "MaxResults");
