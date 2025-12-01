// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListWorkgroupsCommand,
  ListWorkgroupsCommandInput,
  ListWorkgroupsCommandOutput,
} from "../commands/ListWorkgroupsCommand";
import { RedshiftServerlessClient } from "../RedshiftServerlessClient";
import { RedshiftServerlessPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListWorkgroups: (
  config: RedshiftServerlessPaginationConfiguration,
  input: ListWorkgroupsCommandInput,
  ...rest: any[]
) => Paginator<ListWorkgroupsCommandOutput> = createPaginator<
  RedshiftServerlessPaginationConfiguration,
  ListWorkgroupsCommandInput,
  ListWorkgroupsCommandOutput
>(RedshiftServerlessClient, ListWorkgroupsCommand, "nextToken", "nextToken", "maxResults");
