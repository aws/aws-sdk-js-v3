// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListKeysCommand, ListKeysCommandInput, ListKeysCommandOutput } from "../commands/ListKeysCommand";
import { PaymentCryptographyClient } from "../PaymentCryptographyClient";
import { PaymentCryptographyPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListKeys: (
  config: PaymentCryptographyPaginationConfiguration,
  input: ListKeysCommandInput,
  ...rest: any[]
) => Paginator<ListKeysCommandOutput> = createPaginator<
  PaymentCryptographyPaginationConfiguration,
  ListKeysCommandInput,
  ListKeysCommandOutput
>(PaymentCryptographyClient, ListKeysCommand, "NextToken", "NextToken", "MaxResults");
