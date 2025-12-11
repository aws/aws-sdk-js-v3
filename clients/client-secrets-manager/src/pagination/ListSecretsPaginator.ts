// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListSecretsCommand, ListSecretsCommandInput, ListSecretsCommandOutput } from "../commands/ListSecretsCommand";
import { SecretsManagerClient } from "../SecretsManagerClient";
import { SecretsManagerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSecrets: (
  config: SecretsManagerPaginationConfiguration,
  input: ListSecretsCommandInput,
  ...rest: any[]
) => Paginator<ListSecretsCommandOutput> = createPaginator<
  SecretsManagerPaginationConfiguration,
  ListSecretsCommandInput,
  ListSecretsCommandOutput
>(SecretsManagerClient, ListSecretsCommand, "NextToken", "NextToken", "MaxResults");
