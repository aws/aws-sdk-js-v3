// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  MetricsRecorder as __MetricsRecorder,
  PaginationConfiguration,
  Paginator,
} from "@smithy/types";

import {
  type BatchGetTokenBalanceCommandInput,
  type BatchGetTokenBalanceCommandOutput,
  BatchGetTokenBalanceCommand,
} from "./commands/BatchGetTokenBalanceCommand";
import {
  type GetAssetContractCommandInput,
  type GetAssetContractCommandOutput,
  GetAssetContractCommand,
} from "./commands/GetAssetContractCommand";
import {
  type GetTokenBalanceCommandInput,
  type GetTokenBalanceCommandOutput,
  GetTokenBalanceCommand,
} from "./commands/GetTokenBalanceCommand";
import {
  type GetTransactionCommandInput,
  type GetTransactionCommandOutput,
  GetTransactionCommand,
} from "./commands/GetTransactionCommand";
import {
  type ListAssetContractsCommandInput,
  type ListAssetContractsCommandOutput,
  ListAssetContractsCommand,
} from "./commands/ListAssetContractsCommand";
import {
  type ListFilteredTransactionEventsCommandInput,
  type ListFilteredTransactionEventsCommandOutput,
  ListFilteredTransactionEventsCommand,
} from "./commands/ListFilteredTransactionEventsCommand";
import {
  type ListTokenBalancesCommandInput,
  type ListTokenBalancesCommandOutput,
  ListTokenBalancesCommand,
} from "./commands/ListTokenBalancesCommand";
import {
  type ListTransactionEventsCommandInput,
  type ListTransactionEventsCommandOutput,
  ListTransactionEventsCommand,
} from "./commands/ListTransactionEventsCommand";
import {
  type ListTransactionsCommandInput,
  type ListTransactionsCommandOutput,
  ListTransactionsCommand,
} from "./commands/ListTransactionsCommand";
import { ManagedBlockchainQueryClient } from "./ManagedBlockchainQueryClient";
import { paginateListAssetContracts } from "./pagination/ListAssetContractsPaginator";
import { paginateListFilteredTransactionEvents } from "./pagination/ListFilteredTransactionEventsPaginator";
import { paginateListTokenBalances } from "./pagination/ListTokenBalancesPaginator";
import { paginateListTransactionEvents } from "./pagination/ListTransactionEventsPaginator";
import { paginateListTransactions } from "./pagination/ListTransactionsPaginator";

const commands = {
  BatchGetTokenBalanceCommand,
  GetAssetContractCommand,
  GetTokenBalanceCommand,
  GetTransactionCommand,
  ListAssetContractsCommand,
  ListFilteredTransactionEventsCommand,
  ListTokenBalancesCommand,
  ListTransactionEventsCommand,
  ListTransactionsCommand,
};
const paginators = {
  paginateListAssetContracts,
  paginateListFilteredTransactionEvents,
  paginateListTokenBalances,
  paginateListTransactionEvents,
  paginateListTransactions,
};

/**
 * @public
 */
export interface ManagedBlockchainQueryRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface ManagedBlockchainQuery {
  /**
   * @see {@link BatchGetTokenBalanceCommand}
   */
  batchGetTokenBalance(): Promise<BatchGetTokenBalanceCommandOutput>;
  batchGetTokenBalance(
    args: BatchGetTokenBalanceCommandInput,
    options?: ManagedBlockchainQueryRequestOptions
  ): Promise<BatchGetTokenBalanceCommandOutput>;
  batchGetTokenBalance(
    args: BatchGetTokenBalanceCommandInput,
    cb: (err: any, data?: BatchGetTokenBalanceCommandOutput) => void
  ): void;
  batchGetTokenBalance(
    args: BatchGetTokenBalanceCommandInput,
    options: ManagedBlockchainQueryRequestOptions,
    cb: (err: any, data?: BatchGetTokenBalanceCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAssetContractCommand}
   */
  getAssetContract(
    args: GetAssetContractCommandInput,
    options?: ManagedBlockchainQueryRequestOptions
  ): Promise<GetAssetContractCommandOutput>;
  getAssetContract(
    args: GetAssetContractCommandInput,
    cb: (err: any, data?: GetAssetContractCommandOutput) => void
  ): void;
  getAssetContract(
    args: GetAssetContractCommandInput,
    options: ManagedBlockchainQueryRequestOptions,
    cb: (err: any, data?: GetAssetContractCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTokenBalanceCommand}
   */
  getTokenBalance(
    args: GetTokenBalanceCommandInput,
    options?: ManagedBlockchainQueryRequestOptions
  ): Promise<GetTokenBalanceCommandOutput>;
  getTokenBalance(
    args: GetTokenBalanceCommandInput,
    cb: (err: any, data?: GetTokenBalanceCommandOutput) => void
  ): void;
  getTokenBalance(
    args: GetTokenBalanceCommandInput,
    options: ManagedBlockchainQueryRequestOptions,
    cb: (err: any, data?: GetTokenBalanceCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTransactionCommand}
   */
  getTransaction(
    args: GetTransactionCommandInput,
    options?: ManagedBlockchainQueryRequestOptions
  ): Promise<GetTransactionCommandOutput>;
  getTransaction(
    args: GetTransactionCommandInput,
    cb: (err: any, data?: GetTransactionCommandOutput) => void
  ): void;
  getTransaction(
    args: GetTransactionCommandInput,
    options: ManagedBlockchainQueryRequestOptions,
    cb: (err: any, data?: GetTransactionCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAssetContractsCommand}
   */
  listAssetContracts(
    args: ListAssetContractsCommandInput,
    options?: ManagedBlockchainQueryRequestOptions
  ): Promise<ListAssetContractsCommandOutput>;
  listAssetContracts(
    args: ListAssetContractsCommandInput,
    cb: (err: any, data?: ListAssetContractsCommandOutput) => void
  ): void;
  listAssetContracts(
    args: ListAssetContractsCommandInput,
    options: ManagedBlockchainQueryRequestOptions,
    cb: (err: any, data?: ListAssetContractsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListFilteredTransactionEventsCommand}
   */
  listFilteredTransactionEvents(
    args: ListFilteredTransactionEventsCommandInput,
    options?: ManagedBlockchainQueryRequestOptions
  ): Promise<ListFilteredTransactionEventsCommandOutput>;
  listFilteredTransactionEvents(
    args: ListFilteredTransactionEventsCommandInput,
    cb: (err: any, data?: ListFilteredTransactionEventsCommandOutput) => void
  ): void;
  listFilteredTransactionEvents(
    args: ListFilteredTransactionEventsCommandInput,
    options: ManagedBlockchainQueryRequestOptions,
    cb: (err: any, data?: ListFilteredTransactionEventsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTokenBalancesCommand}
   */
  listTokenBalances(
    args: ListTokenBalancesCommandInput,
    options?: ManagedBlockchainQueryRequestOptions
  ): Promise<ListTokenBalancesCommandOutput>;
  listTokenBalances(
    args: ListTokenBalancesCommandInput,
    cb: (err: any, data?: ListTokenBalancesCommandOutput) => void
  ): void;
  listTokenBalances(
    args: ListTokenBalancesCommandInput,
    options: ManagedBlockchainQueryRequestOptions,
    cb: (err: any, data?: ListTokenBalancesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTransactionEventsCommand}
   */
  listTransactionEvents(
    args: ListTransactionEventsCommandInput,
    options?: ManagedBlockchainQueryRequestOptions
  ): Promise<ListTransactionEventsCommandOutput>;
  listTransactionEvents(
    args: ListTransactionEventsCommandInput,
    cb: (err: any, data?: ListTransactionEventsCommandOutput) => void
  ): void;
  listTransactionEvents(
    args: ListTransactionEventsCommandInput,
    options: ManagedBlockchainQueryRequestOptions,
    cb: (err: any, data?: ListTransactionEventsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTransactionsCommand}
   */
  listTransactions(
    args: ListTransactionsCommandInput,
    options?: ManagedBlockchainQueryRequestOptions
  ): Promise<ListTransactionsCommandOutput>;
  listTransactions(
    args: ListTransactionsCommandInput,
    cb: (err: any, data?: ListTransactionsCommandOutput) => void
  ): void;
  listTransactions(
    args: ListTransactionsCommandInput,
    options: ManagedBlockchainQueryRequestOptions,
    cb: (err: any, data?: ListTransactionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAssetContractsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAssetContractsCommandOutput}.
   */
  paginateListAssetContracts(
    args: ListAssetContractsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAssetContractsCommandOutput>;

  /**
   * @see {@link ListFilteredTransactionEventsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListFilteredTransactionEventsCommandOutput}.
   */
  paginateListFilteredTransactionEvents(
    args: ListFilteredTransactionEventsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListFilteredTransactionEventsCommandOutput>;

  /**
   * @see {@link ListTokenBalancesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListTokenBalancesCommandOutput}.
   */
  paginateListTokenBalances(
    args: ListTokenBalancesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListTokenBalancesCommandOutput>;

  /**
   * @see {@link ListTransactionEventsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListTransactionEventsCommandOutput}.
   */
  paginateListTransactionEvents(
    args: ListTransactionEventsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListTransactionEventsCommandOutput>;

  /**
   * @see {@link ListTransactionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListTransactionsCommandOutput}.
   */
  paginateListTransactions(
    args: ListTransactionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListTransactionsCommandOutput>;
}

/**
 * <p>Amazon Managed Blockchain (AMB) Query provides you with convenient access to multi-blockchain network data, which makes
 *         it easier for you to extract contextual data related to blockchain activity. You can use AMB Query to
 *         read data from public blockchain networks, such as Bitcoin Mainnet and Ethereum Mainnet. You can
 *         also get information such as the current and historical balances of addresses, or you can get a
 *         list of blockchain transactions for a given time period. Additionally, you can get details of a
 *         given transaction, such as transaction events, which you can further analyze or use in business
 *         logic for your applications.</p>
 * @public
 */
export class ManagedBlockchainQuery extends ManagedBlockchainQueryClient implements ManagedBlockchainQuery {}
createAggregatedClient(commands, ManagedBlockchainQuery, { paginators });
