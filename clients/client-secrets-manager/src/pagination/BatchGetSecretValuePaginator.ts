// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  BatchGetSecretValueCommand,
  BatchGetSecretValueCommandInput,
  BatchGetSecretValueCommandOutput,
} from "../commands/BatchGetSecretValueCommand";
import { SecretsManagerClient } from "../SecretsManagerClient";
import { SecretsManagerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateBatchGetSecretValue: (
  config: SecretsManagerPaginationConfiguration,
  input: BatchGetSecretValueCommandInput,
  ...rest: any[]
) => Paginator<BatchGetSecretValueCommandOutput> = createPaginator<
  SecretsManagerPaginationConfiguration,
  BatchGetSecretValueCommandInput,
  BatchGetSecretValueCommandOutput
>(SecretsManagerClient, BatchGetSecretValueCommand, "NextToken", "NextToken", "MaxResults");
