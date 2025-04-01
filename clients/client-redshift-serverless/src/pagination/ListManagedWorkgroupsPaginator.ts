// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListManagedWorkgroupsCommand,
  ListManagedWorkgroupsCommandInput,
  ListManagedWorkgroupsCommandOutput,
} from "../commands/ListManagedWorkgroupsCommand";
import { RedshiftServerlessClient } from "../RedshiftServerlessClient";
import { RedshiftServerlessPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListManagedWorkgroups: (
  config: RedshiftServerlessPaginationConfiguration,
  input: ListManagedWorkgroupsCommandInput,
  ...rest: any[]
) => Paginator<ListManagedWorkgroupsCommandOutput> = createPaginator<
  RedshiftServerlessPaginationConfiguration,
  ListManagedWorkgroupsCommandInput,
  ListManagedWorkgroupsCommandOutput
>(RedshiftServerlessClient, ListManagedWorkgroupsCommand, "nextToken", "nextToken", "maxResults");
