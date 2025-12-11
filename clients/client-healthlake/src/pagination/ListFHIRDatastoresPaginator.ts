// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListFHIRDatastoresCommand,
  ListFHIRDatastoresCommandInput,
  ListFHIRDatastoresCommandOutput,
} from "../commands/ListFHIRDatastoresCommand";
import { HealthLakeClient } from "../HealthLakeClient";
import { HealthLakePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListFHIRDatastores: (
  config: HealthLakePaginationConfiguration,
  input: ListFHIRDatastoresCommandInput,
  ...rest: any[]
) => Paginator<ListFHIRDatastoresCommandOutput> = createPaginator<
  HealthLakePaginationConfiguration,
  ListFHIRDatastoresCommandInput,
  ListFHIRDatastoresCommandOutput
>(HealthLakeClient, ListFHIRDatastoresCommand, "NextToken", "NextToken", "MaxResults");
