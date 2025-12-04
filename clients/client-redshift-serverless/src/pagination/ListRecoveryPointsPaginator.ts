// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListRecoveryPointsCommand,
  ListRecoveryPointsCommandInput,
  ListRecoveryPointsCommandOutput,
} from "../commands/ListRecoveryPointsCommand";
import { RedshiftServerlessClient } from "../RedshiftServerlessClient";
import { RedshiftServerlessPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListRecoveryPoints: (
  config: RedshiftServerlessPaginationConfiguration,
  input: ListRecoveryPointsCommandInput,
  ...rest: any[]
) => Paginator<ListRecoveryPointsCommandOutput> = createPaginator<
  RedshiftServerlessPaginationConfiguration,
  ListRecoveryPointsCommandInput,
  ListRecoveryPointsCommandOutput
>(RedshiftServerlessClient, ListRecoveryPointsCommand, "nextToken", "nextToken", "maxResults");
