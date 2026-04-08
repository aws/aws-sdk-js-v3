// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions, PaginationConfiguration, Paginator } from "@smithy/types";

import {
  type GetListingCommandInput,
  type GetListingCommandOutput,
  GetListingCommand,
} from "./commands/GetListingCommand";
import { type GetOfferCommandInput, type GetOfferCommandOutput, GetOfferCommand } from "./commands/GetOfferCommand";
import {
  type GetOfferSetCommandInput,
  type GetOfferSetCommandOutput,
  GetOfferSetCommand,
} from "./commands/GetOfferSetCommand";
import {
  type GetOfferTermsCommandInput,
  type GetOfferTermsCommandOutput,
  GetOfferTermsCommand,
} from "./commands/GetOfferTermsCommand";
import {
  type GetProductCommandInput,
  type GetProductCommandOutput,
  GetProductCommand,
} from "./commands/GetProductCommand";
import {
  type ListFulfillmentOptionsCommandInput,
  type ListFulfillmentOptionsCommandOutput,
  ListFulfillmentOptionsCommand,
} from "./commands/ListFulfillmentOptionsCommand";
import {
  type ListPurchaseOptionsCommandInput,
  type ListPurchaseOptionsCommandOutput,
  ListPurchaseOptionsCommand,
} from "./commands/ListPurchaseOptionsCommand";
import {
  type SearchFacetsCommandInput,
  type SearchFacetsCommandOutput,
  SearchFacetsCommand,
} from "./commands/SearchFacetsCommand";
import {
  type SearchListingsCommandInput,
  type SearchListingsCommandOutput,
  SearchListingsCommand,
} from "./commands/SearchListingsCommand";
import { MarketplaceDiscoveryClient } from "./MarketplaceDiscoveryClient";
import { paginateGetOfferTerms } from "./pagination/GetOfferTermsPaginator";
import { paginateListFulfillmentOptions } from "./pagination/ListFulfillmentOptionsPaginator";
import { paginateListPurchaseOptions } from "./pagination/ListPurchaseOptionsPaginator";
import { paginateSearchFacets } from "./pagination/SearchFacetsPaginator";
import { paginateSearchListings } from "./pagination/SearchListingsPaginator";

const commands = {
  GetListingCommand,
  GetOfferCommand,
  GetOfferSetCommand,
  GetOfferTermsCommand,
  GetProductCommand,
  ListFulfillmentOptionsCommand,
  ListPurchaseOptionsCommand,
  SearchFacetsCommand,
  SearchListingsCommand,
};
const paginators = {
  paginateGetOfferTerms,
  paginateListFulfillmentOptions,
  paginateListPurchaseOptions,
  paginateSearchFacets,
  paginateSearchListings,
};

export interface MarketplaceDiscovery {
  /**
   * @see {@link GetListingCommand}
   */
  getListing(
    args: GetListingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetListingCommandOutput>;
  getListing(
    args: GetListingCommandInput,
    cb: (err: any, data?: GetListingCommandOutput) => void
  ): void;
  getListing(
    args: GetListingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetListingCommandOutput) => void
  ): void;

  /**
   * @see {@link GetOfferCommand}
   */
  getOffer(
    args: GetOfferCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetOfferCommandOutput>;
  getOffer(
    args: GetOfferCommandInput,
    cb: (err: any, data?: GetOfferCommandOutput) => void
  ): void;
  getOffer(
    args: GetOfferCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetOfferCommandOutput) => void
  ): void;

  /**
   * @see {@link GetOfferSetCommand}
   */
  getOfferSet(
    args: GetOfferSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetOfferSetCommandOutput>;
  getOfferSet(
    args: GetOfferSetCommandInput,
    cb: (err: any, data?: GetOfferSetCommandOutput) => void
  ): void;
  getOfferSet(
    args: GetOfferSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetOfferSetCommandOutput) => void
  ): void;

  /**
   * @see {@link GetOfferTermsCommand}
   */
  getOfferTerms(
    args: GetOfferTermsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetOfferTermsCommandOutput>;
  getOfferTerms(
    args: GetOfferTermsCommandInput,
    cb: (err: any, data?: GetOfferTermsCommandOutput) => void
  ): void;
  getOfferTerms(
    args: GetOfferTermsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetOfferTermsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetProductCommand}
   */
  getProduct(
    args: GetProductCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetProductCommandOutput>;
  getProduct(
    args: GetProductCommandInput,
    cb: (err: any, data?: GetProductCommandOutput) => void
  ): void;
  getProduct(
    args: GetProductCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetProductCommandOutput) => void
  ): void;

  /**
   * @see {@link ListFulfillmentOptionsCommand}
   */
  listFulfillmentOptions(
    args: ListFulfillmentOptionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListFulfillmentOptionsCommandOutput>;
  listFulfillmentOptions(
    args: ListFulfillmentOptionsCommandInput,
    cb: (err: any, data?: ListFulfillmentOptionsCommandOutput) => void
  ): void;
  listFulfillmentOptions(
    args: ListFulfillmentOptionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFulfillmentOptionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPurchaseOptionsCommand}
   */
  listPurchaseOptions(): Promise<ListPurchaseOptionsCommandOutput>;
  listPurchaseOptions(
    args: ListPurchaseOptionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPurchaseOptionsCommandOutput>;
  listPurchaseOptions(
    args: ListPurchaseOptionsCommandInput,
    cb: (err: any, data?: ListPurchaseOptionsCommandOutput) => void
  ): void;
  listPurchaseOptions(
    args: ListPurchaseOptionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPurchaseOptionsCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchFacetsCommand}
   */
  searchFacets(): Promise<SearchFacetsCommandOutput>;
  searchFacets(
    args: SearchFacetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchFacetsCommandOutput>;
  searchFacets(
    args: SearchFacetsCommandInput,
    cb: (err: any, data?: SearchFacetsCommandOutput) => void
  ): void;
  searchFacets(
    args: SearchFacetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchFacetsCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchListingsCommand}
   */
  searchListings(): Promise<SearchListingsCommandOutput>;
  searchListings(
    args: SearchListingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchListingsCommandOutput>;
  searchListings(
    args: SearchListingsCommandInput,
    cb: (err: any, data?: SearchListingsCommandOutput) => void
  ): void;
  searchListings(
    args: SearchListingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchListingsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetOfferTermsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetOfferTermsCommandOutput}.
   */
  paginateGetOfferTerms(
    args: GetOfferTermsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetOfferTermsCommandOutput>;

  /**
   * @see {@link ListFulfillmentOptionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListFulfillmentOptionsCommandOutput}.
   */
  paginateListFulfillmentOptions(
    args: ListFulfillmentOptionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListFulfillmentOptionsCommandOutput>;

  /**
   * @see {@link ListPurchaseOptionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListPurchaseOptionsCommandOutput}.
   */
  paginateListPurchaseOptions(
    args?: ListPurchaseOptionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListPurchaseOptionsCommandOutput>;

  /**
   * @see {@link SearchFacetsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link SearchFacetsCommandOutput}.
   */
  paginateSearchFacets(
    args?: SearchFacetsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<SearchFacetsCommandOutput>;

  /**
   * @see {@link SearchListingsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link SearchListingsCommandOutput}.
   */
  paginateSearchListings(
    args?: SearchListingsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<SearchListingsCommandOutput>;
}

/**
 * <p>The AWS Marketplace Discovery API provides programmatic access to the AWS Marketplace catalog, including searching and browsing listings, retrieving product details and fulfillment options, and accessing public and private offer pricing and terms.</p>
 * @public
 */
export class MarketplaceDiscovery extends MarketplaceDiscoveryClient implements MarketplaceDiscovery {}
createAggregatedClient(commands, MarketplaceDiscovery, { paginators });
