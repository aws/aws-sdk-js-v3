// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  BatchGetTokenBalanceCommand,
  BatchGetTokenBalanceCommandInput,
  BatchGetTokenBalanceCommandOutput,
} from "./commands/BatchGetTokenBalanceCommand";
import {
  GetAssetContractCommand,
  GetAssetContractCommandInput,
  GetAssetContractCommandOutput,
} from "./commands/GetAssetContractCommand";
import {
  GetTokenBalanceCommand,
  GetTokenBalanceCommandInput,
  GetTokenBalanceCommandOutput,
} from "./commands/GetTokenBalanceCommand";
import {
  GetTransactionCommand,
  GetTransactionCommandInput,
  GetTransactionCommandOutput,
} from "./commands/GetTransactionCommand";
import {
  ListAssetContractsCommand,
  ListAssetContractsCommandInput,
  ListAssetContractsCommandOutput,
} from "./commands/ListAssetContractsCommand";
import {
  ListTokenBalancesCommand,
  ListTokenBalancesCommandInput,
  ListTokenBalancesCommandOutput,
} from "./commands/ListTokenBalancesCommand";
import {
  ListTransactionEventsCommand,
  ListTransactionEventsCommandInput,
  ListTransactionEventsCommandOutput,
} from "./commands/ListTransactionEventsCommand";
import {
  ListTransactionsCommand,
  ListTransactionsCommandInput,
  ListTransactionsCommandOutput,
} from "./commands/ListTransactionsCommand";
import { ManagedBlockchainQueryClient, ManagedBlockchainQueryClientConfig } from "./ManagedBlockchainQueryClient";

const commands = {
  BatchGetTokenBalanceCommand,
  GetAssetContractCommand,
  GetTokenBalanceCommand,
  GetTransactionCommand,
  ListAssetContractsCommand,
  ListTokenBalancesCommand,
  ListTransactionEventsCommand,
  ListTransactionsCommand,
};

export interface ManagedBlockchainQuery {
  /**
   * @see {@link BatchGetTokenBalanceCommand}
   */
  batchGetTokenBalance(
    args: BatchGetTokenBalanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGetTokenBalanceCommandOutput>;
  batchGetTokenBalance(
    args: BatchGetTokenBalanceCommandInput,
    cb: (err: any, data?: BatchGetTokenBalanceCommandOutput) => void
  ): void;
  batchGetTokenBalance(
    args: BatchGetTokenBalanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetTokenBalanceCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAssetContractCommand}
   */
  getAssetContract(
    args: GetAssetContractCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAssetContractCommandOutput>;
  getAssetContract(
    args: GetAssetContractCommandInput,
    cb: (err: any, data?: GetAssetContractCommandOutput) => void
  ): void;
  getAssetContract(
    args: GetAssetContractCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAssetContractCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTokenBalanceCommand}
   */
  getTokenBalance(
    args: GetTokenBalanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTokenBalanceCommandOutput>;
  getTokenBalance(args: GetTokenBalanceCommandInput, cb: (err: any, data?: GetTokenBalanceCommandOutput) => void): void;
  getTokenBalance(
    args: GetTokenBalanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTokenBalanceCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTransactionCommand}
   */
  getTransaction(
    args: GetTransactionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTransactionCommandOutput>;
  getTransaction(args: GetTransactionCommandInput, cb: (err: any, data?: GetTransactionCommandOutput) => void): void;
  getTransaction(
    args: GetTransactionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTransactionCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAssetContractsCommand}
   */
  listAssetContracts(
    args: ListAssetContractsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAssetContractsCommandOutput>;
  listAssetContracts(
    args: ListAssetContractsCommandInput,
    cb: (err: any, data?: ListAssetContractsCommandOutput) => void
  ): void;
  listAssetContracts(
    args: ListAssetContractsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAssetContractsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTokenBalancesCommand}
   */
  listTokenBalances(
    args: ListTokenBalancesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTokenBalancesCommandOutput>;
  listTokenBalances(
    args: ListTokenBalancesCommandInput,
    cb: (err: any, data?: ListTokenBalancesCommandOutput) => void
  ): void;
  listTokenBalances(
    args: ListTokenBalancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTokenBalancesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTransactionEventsCommand}
   */
  listTransactionEvents(
    args: ListTransactionEventsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTransactionEventsCommandOutput>;
  listTransactionEvents(
    args: ListTransactionEventsCommandInput,
    cb: (err: any, data?: ListTransactionEventsCommandOutput) => void
  ): void;
  listTransactionEvents(
    args: ListTransactionEventsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTransactionEventsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTransactionsCommand}
   */
  listTransactions(
    args: ListTransactionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTransactionsCommandOutput>;
  listTransactions(
    args: ListTransactionsCommandInput,
    cb: (err: any, data?: ListTransactionsCommandOutput) => void
  ): void;
  listTransactions(
    args: ListTransactionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTransactionsCommandOutput) => void
  ): void;
}

/**
 * @public
 * <p>Amazon Managed Blockchain (AMB) Query provides you with convenient access to multi-blockchain network data, which makes
 *         it easier for you to extract contextual data related to blockchain activity. You can use AMB Query to
 *         read data from public blockchain networks, such as Bitcoin Mainnet and Ethereum Mainnet. You can
 *         also get information such as the current and historical balances of addresses, or you can get a
 *         list of blockchain transactions for a given time period. Additionally, you can get details of a
 *         given transaction, such as transaction events, which you can further analyze or use in business
 *         logic for your applications.</p>
 */
export class ManagedBlockchainQuery extends ManagedBlockchainQueryClient implements ManagedBlockchainQuery {}
createAggregatedClient(commands, ManagedBlockchainQuery);
