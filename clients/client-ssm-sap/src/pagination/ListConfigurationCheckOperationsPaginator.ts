// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListConfigurationCheckOperationsCommand,
  ListConfigurationCheckOperationsCommandInput,
  ListConfigurationCheckOperationsCommandOutput,
} from "../commands/ListConfigurationCheckOperationsCommand";
import { SsmSapClient } from "../SsmSapClient";
import { SsmSapPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListConfigurationCheckOperations: (
  config: SsmSapPaginationConfiguration,
  input: ListConfigurationCheckOperationsCommandInput,
  ...rest: any[]
) => Paginator<ListConfigurationCheckOperationsCommandOutput> = createPaginator<
  SsmSapPaginationConfiguration,
  ListConfigurationCheckOperationsCommandInput,
  ListConfigurationCheckOperationsCommandOutput
>(SsmSapClient, ListConfigurationCheckOperationsCommand, "NextToken", "NextToken", "MaxResults");
