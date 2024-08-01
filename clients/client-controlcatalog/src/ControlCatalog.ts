// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import { GetControlCommand, GetControlCommandInput, GetControlCommandOutput } from "./commands/GetControlCommand";
import {
  ListCommonControlsCommand,
  ListCommonControlsCommandInput,
  ListCommonControlsCommandOutput,
} from "./commands/ListCommonControlsCommand";
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
import { ControlCatalogClient, ControlCatalogClientConfig } from "./ControlCatalogClient";

const commands = {
  GetControlCommand,
  ListCommonControlsCommand,
  ListControlsCommand,
  ListDomainsCommand,
  ListObjectivesCommand,
};

export interface ControlCatalog {
  /**
   * @see {@link GetControlCommand}
   */
  getControl(args: GetControlCommandInput, options?: __HttpHandlerOptions): Promise<GetControlCommandOutput>;
  getControl(args: GetControlCommandInput, cb: (err: any, data?: GetControlCommandOutput) => void): void;
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
   * @see {@link ListControlsCommand}
   */
  listControls(): Promise<ListControlsCommandOutput>;
  listControls(args: ListControlsCommandInput, options?: __HttpHandlerOptions): Promise<ListControlsCommandOutput>;
  listControls(args: ListControlsCommandInput, cb: (err: any, data?: ListControlsCommandOutput) => void): void;
  listControls(
    args: ListControlsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListControlsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDomainsCommand}
   */
  listDomains(): Promise<ListDomainsCommandOutput>;
  listDomains(args: ListDomainsCommandInput, options?: __HttpHandlerOptions): Promise<ListDomainsCommandOutput>;
  listDomains(args: ListDomainsCommandInput, cb: (err: any, data?: ListDomainsCommandOutput) => void): void;
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
  listObjectives(args: ListObjectivesCommandInput, cb: (err: any, data?: ListObjectivesCommandOutput) => void): void;
  listObjectives(
    args: ListObjectivesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListObjectivesCommandOutput) => void
  ): void;
}

/**
 * <p>Welcome to the Amazon Web Services Control Catalog API reference. This guide is for
 *       developers who need detailed information about how to programmatically identify and filter
 *       the common controls and related metadata that are available to Amazon Web Services customers. This API reference provides
 *       descriptions, syntax, and usage examples for each of the actions and data types that are
 *       supported by Amazon Web Services Control Catalog. </p>
 *          <p>Use the following links to get started with the Amazon Web Services Control Catalog API:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/controlcatalog/latest/APIReference/API_Operations.html">Actions</a>: An
 *           alphabetical list of all Control Catalog API operations.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/controlcatalog/latest/APIReference/API_Types.html">Data types</a>: An
 *           alphabetical list of all Control Catalog data types.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/controlcatalog/latest/APIReference/CommonParameters.html">Common
 *           parameters</a>: Parameters that all operations can use.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/controlcatalog/latest/APIReference/CommonErrors.html">Common errors</a>:
 *           Client and server errors that all operations can return.</p>
 *             </li>
 *          </ul>
 * @public
 */
export class ControlCatalog extends ControlCatalogClient implements ControlCatalog {}
createAggregatedClient(commands, ControlCatalog);
