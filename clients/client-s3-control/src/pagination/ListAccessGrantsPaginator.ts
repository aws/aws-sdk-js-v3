// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAccessGrantsCommand,
  ListAccessGrantsCommandInput,
  ListAccessGrantsCommandOutput,
} from "../commands/ListAccessGrantsCommand";
import { S3ControlClient } from "../S3ControlClient";
import { S3ControlPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAccessGrants: (
  config: S3ControlPaginationConfiguration,
  input: ListAccessGrantsCommandInput,
  ...rest: any[]
) => Paginator<ListAccessGrantsCommandOutput> = createPaginator<
  S3ControlPaginationConfiguration,
  ListAccessGrantsCommandInput,
  ListAccessGrantsCommandOutput
>(S3ControlClient, ListAccessGrantsCommand, "NextToken", "NextToken", "MaxResults");
