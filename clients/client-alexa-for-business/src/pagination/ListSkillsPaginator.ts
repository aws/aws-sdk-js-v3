// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import { AlexaForBusinessClient } from "../AlexaForBusinessClient";
import { ListSkillsCommand, ListSkillsCommandInput, ListSkillsCommandOutput } from "../commands/ListSkillsCommand";
import { AlexaForBusinessPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSkills: (
  config: AlexaForBusinessPaginationConfiguration,
  input: ListSkillsCommandInput,
  ...rest: any[]
) => Paginator<ListSkillsCommandOutput> = createPaginator<
  AlexaForBusinessPaginationConfiguration,
  ListSkillsCommandInput,
  ListSkillsCommandOutput
>(AlexaForBusinessClient, ListSkillsCommand, "NextToken", "NextToken", "MaxResults");
