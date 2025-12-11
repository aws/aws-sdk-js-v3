// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAccessPointsCommand,
  ListAccessPointsCommandInput,
  ListAccessPointsCommandOutput,
} from "../commands/ListAccessPointsCommand";
import { S3ControlClient } from "../S3ControlClient";
import { S3ControlPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAccessPoints: (
  config: S3ControlPaginationConfiguration,
  input: ListAccessPointsCommandInput,
  ...rest: any[]
) => Paginator<ListAccessPointsCommandOutput> = createPaginator<
  S3ControlPaginationConfiguration,
  ListAccessPointsCommandInput,
  ListAccessPointsCommandOutput
>(S3ControlClient, ListAccessPointsCommand, "NextToken", "NextToken", "MaxResults");
