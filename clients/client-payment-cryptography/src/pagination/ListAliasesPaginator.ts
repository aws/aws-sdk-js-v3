// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListAliasesCommand, ListAliasesCommandInput, ListAliasesCommandOutput } from "../commands/ListAliasesCommand";
import { PaymentCryptographyClient } from "../PaymentCryptographyClient";
import { PaymentCryptographyPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAliases: (
  config: PaymentCryptographyPaginationConfiguration,
  input: ListAliasesCommandInput,
  ...rest: any[]
) => Paginator<ListAliasesCommandOutput> = createPaginator<
  PaymentCryptographyPaginationConfiguration,
  ListAliasesCommandInput,
  ListAliasesCommandOutput
>(PaymentCryptographyClient, ListAliasesCommand, "NextToken", "NextToken", "MaxResults");
