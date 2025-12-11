// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAccessPointsForObjectLambdaCommand,
  ListAccessPointsForObjectLambdaCommandInput,
  ListAccessPointsForObjectLambdaCommandOutput,
} from "../commands/ListAccessPointsForObjectLambdaCommand";
import { S3ControlClient } from "../S3ControlClient";
import { S3ControlPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAccessPointsForObjectLambda: (
  config: S3ControlPaginationConfiguration,
  input: ListAccessPointsForObjectLambdaCommandInput,
  ...rest: any[]
) => Paginator<ListAccessPointsForObjectLambdaCommandOutput> = createPaginator<
  S3ControlPaginationConfiguration,
  ListAccessPointsForObjectLambdaCommandInput,
  ListAccessPointsForObjectLambdaCommandOutput
>(S3ControlClient, ListAccessPointsForObjectLambdaCommand, "NextToken", "NextToken", "MaxResults");
