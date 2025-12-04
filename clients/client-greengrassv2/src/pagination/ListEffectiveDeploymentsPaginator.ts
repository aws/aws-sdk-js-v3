// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListEffectiveDeploymentsCommand,
  ListEffectiveDeploymentsCommandInput,
  ListEffectiveDeploymentsCommandOutput,
} from "../commands/ListEffectiveDeploymentsCommand";
import { GreengrassV2Client } from "../GreengrassV2Client";
import { GreengrassV2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListEffectiveDeployments: (
  config: GreengrassV2PaginationConfiguration,
  input: ListEffectiveDeploymentsCommandInput,
  ...rest: any[]
) => Paginator<ListEffectiveDeploymentsCommandOutput> = createPaginator<
  GreengrassV2PaginationConfiguration,
  ListEffectiveDeploymentsCommandInput,
  ListEffectiveDeploymentsCommandOutput
>(GreengrassV2Client, ListEffectiveDeploymentsCommand, "nextToken", "nextToken", "maxResults");
