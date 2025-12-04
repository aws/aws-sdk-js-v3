// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListCodeSigningConfigsCommand,
  ListCodeSigningConfigsCommandInput,
  ListCodeSigningConfigsCommandOutput,
} from "../commands/ListCodeSigningConfigsCommand";
import { LambdaClient } from "../LambdaClient";
import { LambdaPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListCodeSigningConfigs: (
  config: LambdaPaginationConfiguration,
  input: ListCodeSigningConfigsCommandInput,
  ...rest: any[]
) => Paginator<ListCodeSigningConfigsCommandOutput> = createPaginator<
  LambdaPaginationConfiguration,
  ListCodeSigningConfigsCommandInput,
  ListCodeSigningConfigsCommandOutput
>(LambdaClient, ListCodeSigningConfigsCommand, "Marker", "NextMarker", "MaxItems");
