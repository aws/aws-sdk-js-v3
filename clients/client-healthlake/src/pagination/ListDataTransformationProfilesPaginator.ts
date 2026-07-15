// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListDataTransformationProfilesCommand,
  ListDataTransformationProfilesCommandInput,
  ListDataTransformationProfilesCommandOutput,
} from "../commands/ListDataTransformationProfilesCommand";
import { HealthLakeClient } from "../HealthLakeClient";
import type { HealthLakePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDataTransformationProfiles: (
  config: HealthLakePaginationConfiguration,
  input: ListDataTransformationProfilesCommandInput,
  ...rest: any[]
) => Paginator<ListDataTransformationProfilesCommandOutput> = createPaginator<
  HealthLakePaginationConfiguration,
  ListDataTransformationProfilesCommandInput,
  ListDataTransformationProfilesCommandOutput
>(HealthLakeClient, ListDataTransformationProfilesCommand, "NextToken", "NextToken", "MaxResults");
