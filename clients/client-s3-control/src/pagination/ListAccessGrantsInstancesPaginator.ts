// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAccessGrantsInstancesCommand,
  ListAccessGrantsInstancesCommandInput,
  ListAccessGrantsInstancesCommandOutput,
} from "../commands/ListAccessGrantsInstancesCommand";
import { S3ControlClient } from "../S3ControlClient";
import { S3ControlPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAccessGrantsInstances: (
  config: S3ControlPaginationConfiguration,
  input: ListAccessGrantsInstancesCommandInput,
  ...rest: any[]
) => Paginator<ListAccessGrantsInstancesCommandOutput> = createPaginator<
  S3ControlPaginationConfiguration,
  ListAccessGrantsInstancesCommandInput,
  ListAccessGrantsInstancesCommandOutput
>(S3ControlClient, ListAccessGrantsInstancesCommand, "NextToken", "NextToken", "MaxResults");
