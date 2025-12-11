// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListSecretVersionIdsCommand,
  ListSecretVersionIdsCommandInput,
  ListSecretVersionIdsCommandOutput,
} from "../commands/ListSecretVersionIdsCommand";
import { SecretsManagerClient } from "../SecretsManagerClient";
import { SecretsManagerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSecretVersionIds: (
  config: SecretsManagerPaginationConfiguration,
  input: ListSecretVersionIdsCommandInput,
  ...rest: any[]
) => Paginator<ListSecretVersionIdsCommandOutput> = createPaginator<
  SecretsManagerPaginationConfiguration,
  ListSecretVersionIdsCommandInput,
  ListSecretVersionIdsCommandOutput
>(SecretsManagerClient, ListSecretVersionIdsCommand, "NextToken", "NextToken", "MaxResults");
