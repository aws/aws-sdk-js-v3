// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions, PaginationConfiguration, Paginator } from "@smithy/types";

import { GetControlCommand, GetControlCommandInput, GetControlCommandOutput } from "./commands/GetControlCommand";
import {
  ListCommonControlsCommand,
  ListCommonControlsCommandInput,
  ListCommonControlsCommandOutput,
} from "./commands/ListCommonControlsCommand";
import {
  ListControlMappingsCommand,
  ListControlMappingsCommandInput,
  ListControlMappingsCommandOutput,
} from "./commands/ListControlMappingsCommand";
import {
  ListControlsCommand,
  ListControlsCommandInput,
  ListControlsCommandOutput,
} from "./commands/ListControlsCommand";
import { ListDomainsCommand, ListDomainsCommandInput, ListDomainsCommandOutput } from "./commands/ListDomainsCommand";
import {
  ListObjectivesCommand,
  ListObjectivesCommandInput,
  ListObjectivesCommandOutput,
} from "./commands/ListObjectivesCommand";
import { ControlCatalogClient } from "./ControlCatalogClient";
import { paginateListCommonControls } from "./pagination/ListCommonControlsPaginator";
import { paginateListControlMappings } from "./pagination/ListControlMappingsPaginator";
import { paginateListControls } from "./pagination/ListControlsPaginator";
import { paginateListDomains } from "./pagination/ListDomainsPaginator";
import { paginateListObjectives } from "./pagination/ListObjectivesPaginator";

const commands = {
  GetControlCommand,
  ListCommonControlsCommand,
  ListControlMappingsCommand,
  ListControlsCommand,
  ListDomainsCommand,
  ListObjectivesCommand,
};
const paginators = {
  paginateListCommonControls,
  paginateListControlMappings,
  paginateListControls,
  paginateListDomains,
  paginateListObjectives,
};

export interface ControlCatalog {
  /**
   * @see {@link GetControlCommand}
   */
  getControl(
    args: GetControlCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetControlCommandOutput>;
  getControl(
    args: GetControlCommandInput,
    cb: (err: any, data?: GetControlCommandOutput) => void
  ): void;
  getControl(
    args: GetControlCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetControlCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCommonControlsCommand}
   */
  listCommonControls(): Promise<ListCommonControlsCommandOutput>;
  listCommonControls(
    args: ListCommonControlsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCommonControlsCommandOutput>;
  listCommonControls(
    args: ListCommonControlsCommandInput,
    cb: (err: any, data?: ListCommonControlsCommandOutput) => void
  ): void;
  listCommonControls(
    args: ListCommonControlsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCommonControlsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListControlMappingsCommand}
   */
  listControlMappings(): Promise<ListControlMappingsCommandOutput>;
  listControlMappings(
    args: ListControlMappingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListControlMappingsCommandOutput>;
  listControlMappings(
    args: ListControlMappingsCommandInput,
    cb: (err: any, data?: ListControlMappingsCommandOutput) => void
  ): void;
  listControlMappings(
    args: ListControlMappingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListControlMappingsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListControlsCommand}
   */
  listControls(): Promise<ListControlsCommandOutput>;
  listControls(
    args: ListControlsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListControlsCommandOutput>;
  listControls(
    args: ListControlsCommandInput,
    cb: (err: any, data?: ListControlsCommandOutput) => void
  ): void;
  listControls(
    args: ListControlsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListControlsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDomainsCommand}
   */
  listDomains(): Promise<ListDomainsCommandOutput>;
  listDomains(
    args: ListDomainsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDomainsCommandOutput>;
  listDomains(
    args: ListDomainsCommandInput,
    cb: (err: any, data?: ListDomainsCommandOutput) => void
  ): void;
  listDomains(
    args: ListDomainsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDomainsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListObjectivesCommand}
   */
  listObjectives(): Promise<ListObjectivesCommandOutput>;
  listObjectives(
    args: ListObjectivesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListObjectivesCommandOutput>;
  listObjectives(
    args: ListObjectivesCommandInput,
    cb: (err: any, data?: ListObjectivesCommandOutput) => void
  ): void;
  listObjectives(
    args: ListObjectivesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListObjectivesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCommonControlsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListCommonControlsCommandOutput}.
   */
  paginateListCommonControls(
    args?: ListCommonControlsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListCommonControlsCommandOutput>;

  /**
   * @see {@link ListControlMappingsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListControlMappingsCommandOutput}.
   */
  paginateListControlMappings(
    args?: ListControlMappingsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListControlMappingsCommandOutput>;

  /**
   * @see {@link ListControlsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListControlsCommandOutput}.
   */
  paginateListControls(
    args?: ListControlsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListControlsCommandOutput>;

  /**
   * @see {@link ListDomainsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListDomainsCommandOutput}.
   */
  paginateListDomains(
    args?: ListDomainsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListDomainsCommandOutput>;

  /**
   * @see {@link ListObjectivesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListObjectivesCommandOutput}.
   */
  paginateListObjectives(
    args?: ListObjectivesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListObjectivesCommandOutput>;
}

/**
 * <p>Welcome to the Control Catalog API reference. This guide is for developers who need detailed information about how to programmatically identify and filter the common controls and related metadata that are available to Amazon Web Services customers. This API reference provides descriptions, syntax, and usage examples for each of the actions and data types that are supported by Control Catalog. </p> <p>Use the following links to get started with the Control Catalog API:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/controlcatalog/latest/APIReference/API_Operations.html">Actions</a>: An alphabetical list of all Control Catalog API operations.</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/controlcatalog/latest/APIReference/API_Types.html">Data types</a>: An alphabetical list of all Control Catalog data types.</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/controlcatalog/latest/APIReference/CommonParameters.html">Common parameters</a>: Parameters that all operations can use.</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/controlcatalog/latest/APIReference/CommonErrors.html">Common errors</a>: Client and server errors that all operations can return.</p> </li> </ul>
 * @public
 */
export class ControlCatalog extends ControlCatalogClient implements ControlCatalog {}
createAggregatedClient(commands, ControlCatalog, { paginators });
