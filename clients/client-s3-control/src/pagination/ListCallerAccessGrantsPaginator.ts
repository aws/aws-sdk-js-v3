// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListCallerAccessGrantsCommand,
  ListCallerAccessGrantsCommandInput,
  ListCallerAccessGrantsCommandOutput,
} from "../commands/ListCallerAccessGrantsCommand";
import { S3ControlClient } from "../S3ControlClient";
import { S3ControlPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListCallerAccessGrants: (
  config: S3ControlPaginationConfiguration,
  input: ListCallerAccessGrantsCommandInput,
  ...rest: any[]
) => Paginator<ListCallerAccessGrantsCommandOutput> = createPaginator<
  S3ControlPaginationConfiguration,
  ListCallerAccessGrantsCommandInput,
  ListCallerAccessGrantsCommandOutput
>(S3ControlClient, ListCallerAccessGrantsCommand, "NextToken", "NextToken", "MaxResults");
