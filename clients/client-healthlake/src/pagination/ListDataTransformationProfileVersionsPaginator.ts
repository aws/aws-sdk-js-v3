// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListDataTransformationProfileVersionsCommand,
  ListDataTransformationProfileVersionsCommandInput,
  ListDataTransformationProfileVersionsCommandOutput,
} from "../commands/ListDataTransformationProfileVersionsCommand";
import { HealthLakeClient } from "../HealthLakeClient";
import type { HealthLakePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDataTransformationProfileVersions: (
  config: HealthLakePaginationConfiguration,
  input: ListDataTransformationProfileVersionsCommandInput,
  ...rest: any[]
) => Paginator<ListDataTransformationProfileVersionsCommandOutput> = createPaginator<
  HealthLakePaginationConfiguration,
  ListDataTransformationProfileVersionsCommandInput,
  ListDataTransformationProfileVersionsCommandOutput
>(HealthLakeClient, ListDataTransformationProfileVersionsCommand, "NextToken", "NextToken", "MaxResults");
