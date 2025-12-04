// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListScramSecretsCommand,
  ListScramSecretsCommandInput,
  ListScramSecretsCommandOutput,
} from "../commands/ListScramSecretsCommand";
import { KafkaClient } from "../KafkaClient";
import { KafkaPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListScramSecrets: (
  config: KafkaPaginationConfiguration,
  input: ListScramSecretsCommandInput,
  ...rest: any[]
) => Paginator<ListScramSecretsCommandOutput> = createPaginator<
  KafkaPaginationConfiguration,
  ListScramSecretsCommandInput,
  ListScramSecretsCommandOutput
>(KafkaClient, ListScramSecretsCommand, "NextToken", "NextToken", "MaxResults");
