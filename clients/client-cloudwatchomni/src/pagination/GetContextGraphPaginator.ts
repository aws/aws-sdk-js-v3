// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CloudWatchOmniClient } from "../CloudWatchOmniClient";
import {
  GetContextGraphCommand,
  GetContextGraphCommandInput,
  GetContextGraphCommandOutput,
} from "../commands/GetContextGraphCommand";
import type { CloudWatchOmniPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetContextGraph: (
  config: CloudWatchOmniPaginationConfiguration,
  input: GetContextGraphCommandInput,
  ...rest: any[]
) => Paginator<GetContextGraphCommandOutput> = createPaginator<
  CloudWatchOmniPaginationConfiguration,
  GetContextGraphCommandInput,
  GetContextGraphCommandOutput
>(CloudWatchOmniClient, GetContextGraphCommand, "nextToken", "nextToken", "maxResults");
