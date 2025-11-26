// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListWebExperiencesCommand,
  ListWebExperiencesCommandInput,
  ListWebExperiencesCommandOutput,
} from "../commands/ListWebExperiencesCommand";
import { QBusinessClient } from "../QBusinessClient";
import { QBusinessPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListWebExperiences: (
  config: QBusinessPaginationConfiguration,
  input: ListWebExperiencesCommandInput,
  ...rest: any[]
) => Paginator<ListWebExperiencesCommandOutput> = createPaginator<
  QBusinessPaginationConfiguration,
  ListWebExperiencesCommandInput,
  ListWebExperiencesCommandOutput
>(QBusinessClient, ListWebExperiencesCommand, "nextToken", "nextToken", "maxResults");
