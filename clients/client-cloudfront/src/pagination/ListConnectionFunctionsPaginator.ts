// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CloudFrontClient } from "../CloudFrontClient";
import {
  ListConnectionFunctionsCommand,
  ListConnectionFunctionsCommandInput,
  ListConnectionFunctionsCommandOutput,
} from "../commands/ListConnectionFunctionsCommand";
import { CloudFrontPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListConnectionFunctions: (
  config: CloudFrontPaginationConfiguration,
  input: ListConnectionFunctionsCommandInput,
  ...rest: any[]
) => Paginator<ListConnectionFunctionsCommandOutput> = createPaginator<
  CloudFrontPaginationConfiguration,
  ListConnectionFunctionsCommandInput,
  ListConnectionFunctionsCommandOutput
>(CloudFrontClient, ListConnectionFunctionsCommand, "Marker", "NextMarker", "MaxItems");
