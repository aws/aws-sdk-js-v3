// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetAccountBalanceCommand,
  GetAccountBalanceCommandInput,
  GetAccountBalanceCommandOutput,
} from "../commands/GetAccountBalanceCommand";
import { PaymentsClient } from "../PaymentsClient";
import type { PaymentsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetAccountBalance: (
  config: PaymentsPaginationConfiguration,
  input: GetAccountBalanceCommandInput,
  ...rest: any[]
) => Paginator<GetAccountBalanceCommandOutput> = createPaginator<
  PaymentsPaginationConfiguration,
  GetAccountBalanceCommandInput,
  GetAccountBalanceCommandOutput
>(PaymentsClient, GetAccountBalanceCommand, "nextToken", "nextToken", "maxResults");
