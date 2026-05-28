// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListServiceFunctionsCommand,
  ListServiceFunctionsCommandInput,
  ListServiceFunctionsCommandOutput,
} from "../commands/ListServiceFunctionsCommand";
import { Resiliencehubv2Client } from "../Resiliencehubv2Client";
import type { Resiliencehubv2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListServiceFunctions: (
  config: Resiliencehubv2PaginationConfiguration,
  input: ListServiceFunctionsCommandInput,
  ...rest: any[]
) => Paginator<ListServiceFunctionsCommandOutput> = createPaginator<
  Resiliencehubv2PaginationConfiguration,
  ListServiceFunctionsCommandInput,
  ListServiceFunctionsCommandOutput
>(Resiliencehubv2Client, ListServiceFunctionsCommand, "nextToken", "nextToken", "maxResults");
