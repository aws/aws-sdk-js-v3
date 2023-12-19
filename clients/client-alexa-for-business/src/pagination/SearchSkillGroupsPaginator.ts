// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import { AlexaForBusinessClient } from "../AlexaForBusinessClient";
import {
  SearchSkillGroupsCommand,
  SearchSkillGroupsCommandInput,
  SearchSkillGroupsCommandOutput,
} from "../commands/SearchSkillGroupsCommand";
import { AlexaForBusinessPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateSearchSkillGroups: (
  config: AlexaForBusinessPaginationConfiguration,
  input: SearchSkillGroupsCommandInput,
  ...rest: any[]
) => Paginator<SearchSkillGroupsCommandOutput> = createPaginator<
  AlexaForBusinessPaginationConfiguration,
  SearchSkillGroupsCommandInput,
  SearchSkillGroupsCommandOutput
>(AlexaForBusinessClient, SearchSkillGroupsCommand, "NextToken", "NextToken", "MaxResults");
