// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListConfigurationCheckDefinitionsCommand,
  ListConfigurationCheckDefinitionsCommandInput,
  ListConfigurationCheckDefinitionsCommandOutput,
} from "../commands/ListConfigurationCheckDefinitionsCommand";
import { SsmSapClient } from "../SsmSapClient";
import { SsmSapPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListConfigurationCheckDefinitions: (
  config: SsmSapPaginationConfiguration,
  input: ListConfigurationCheckDefinitionsCommandInput,
  ...rest: any[]
) => Paginator<ListConfigurationCheckDefinitionsCommandOutput> = createPaginator<
  SsmSapPaginationConfiguration,
  ListConfigurationCheckDefinitionsCommandInput,
  ListConfigurationCheckDefinitionsCommandOutput
>(SsmSapClient, ListConfigurationCheckDefinitionsCommand, "NextToken", "NextToken", "MaxResults");
