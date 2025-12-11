// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListExperiencesCommand,
  ListExperiencesCommandInput,
  ListExperiencesCommandOutput,
} from "../commands/ListExperiencesCommand";
import { KendraClient } from "../KendraClient";
import { KendraPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListExperiences: (
  config: KendraPaginationConfiguration,
  input: ListExperiencesCommandInput,
  ...rest: any[]
) => Paginator<ListExperiencesCommandOutput> = createPaginator<
  KendraPaginationConfiguration,
  ListExperiencesCommandInput,
  ListExperiencesCommandOutput
>(KendraClient, ListExperiencesCommand, "NextToken", "NextToken", "MaxResults");
