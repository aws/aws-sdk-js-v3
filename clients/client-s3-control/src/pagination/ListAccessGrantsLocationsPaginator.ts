// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAccessGrantsLocationsCommand,
  ListAccessGrantsLocationsCommandInput,
  ListAccessGrantsLocationsCommandOutput,
} from "../commands/ListAccessGrantsLocationsCommand";
import { S3ControlClient } from "../S3ControlClient";
import { S3ControlPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAccessGrantsLocations: (
  config: S3ControlPaginationConfiguration,
  input: ListAccessGrantsLocationsCommandInput,
  ...rest: any[]
) => Paginator<ListAccessGrantsLocationsCommandOutput> = createPaginator<
  S3ControlPaginationConfiguration,
  ListAccessGrantsLocationsCommandInput,
  ListAccessGrantsLocationsCommandOutput
>(S3ControlClient, ListAccessGrantsLocationsCommand, "NextToken", "NextToken", "MaxResults");
