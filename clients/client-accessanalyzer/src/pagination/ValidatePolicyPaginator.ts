// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { AccessAnalyzerClient } from "../AccessAnalyzerClient";
import {
  ValidatePolicyCommand,
  ValidatePolicyCommandInput,
  ValidatePolicyCommandOutput,
} from "../commands/ValidatePolicyCommand";
import { AccessAnalyzerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateValidatePolicy: (
  config: AccessAnalyzerPaginationConfiguration,
  input: ValidatePolicyCommandInput,
  ...rest: any[]
) => Paginator<ValidatePolicyCommandOutput> = createPaginator<
  AccessAnalyzerPaginationConfiguration,
  ValidatePolicyCommandInput,
  ValidatePolicyCommandOutput
>(AccessAnalyzerClient, ValidatePolicyCommand, "nextToken", "nextToken", "maxResults");
