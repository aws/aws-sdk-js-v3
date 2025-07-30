// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListADAssessmentsCommand,
  ListADAssessmentsCommandInput,
  ListADAssessmentsCommandOutput,
} from "../commands/ListADAssessmentsCommand";
import { DirectoryServiceClient } from "../DirectoryServiceClient";
import { DirectoryServicePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListADAssessments: (
  config: DirectoryServicePaginationConfiguration,
  input: ListADAssessmentsCommandInput,
  ...rest: any[]
) => Paginator<ListADAssessmentsCommandOutput> = createPaginator<
  DirectoryServicePaginationConfiguration,
  ListADAssessmentsCommandInput,
  ListADAssessmentsCommandOutput
>(DirectoryServiceClient, ListADAssessmentsCommand, "NextToken", "NextToken", "Limit");
