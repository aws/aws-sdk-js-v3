// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListStorageLensConfigurationsCommand,
  ListStorageLensConfigurationsCommandInput,
  ListStorageLensConfigurationsCommandOutput,
} from "../commands/ListStorageLensConfigurationsCommand";
import { S3ControlClient } from "../S3ControlClient";
import { S3ControlPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListStorageLensConfigurations: (
  config: S3ControlPaginationConfiguration,
  input: ListStorageLensConfigurationsCommandInput,
  ...rest: any[]
) => Paginator<ListStorageLensConfigurationsCommandOutput> = createPaginator<
  S3ControlPaginationConfiguration,
  ListStorageLensConfigurationsCommandInput,
  ListStorageLensConfigurationsCommandOutput
>(S3ControlClient, ListStorageLensConfigurationsCommand, "NextToken", "NextToken", "");
