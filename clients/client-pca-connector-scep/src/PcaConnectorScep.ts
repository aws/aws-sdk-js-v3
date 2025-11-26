// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  CreateChallengeCommand,
  CreateChallengeCommandInput,
  CreateChallengeCommandOutput,
} from "./commands/CreateChallengeCommand";
import {
  CreateConnectorCommand,
  CreateConnectorCommandInput,
  CreateConnectorCommandOutput,
} from "./commands/CreateConnectorCommand";
import {
  DeleteChallengeCommand,
  DeleteChallengeCommandInput,
  DeleteChallengeCommandOutput,
} from "./commands/DeleteChallengeCommand";
import {
  DeleteConnectorCommand,
  DeleteConnectorCommandInput,
  DeleteConnectorCommandOutput,
} from "./commands/DeleteConnectorCommand";
import {
  GetChallengeMetadataCommand,
  GetChallengeMetadataCommandInput,
  GetChallengeMetadataCommandOutput,
} from "./commands/GetChallengeMetadataCommand";
import {
  GetChallengePasswordCommand,
  GetChallengePasswordCommandInput,
  GetChallengePasswordCommandOutput,
} from "./commands/GetChallengePasswordCommand";
import {
  GetConnectorCommand,
  GetConnectorCommandInput,
  GetConnectorCommandOutput,
} from "./commands/GetConnectorCommand";
import {
  ListChallengeMetadataCommand,
  ListChallengeMetadataCommandInput,
  ListChallengeMetadataCommandOutput,
} from "./commands/ListChallengeMetadataCommand";
import {
  ListConnectorsCommand,
  ListConnectorsCommandInput,
  ListConnectorsCommandOutput,
} from "./commands/ListConnectorsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import { PcaConnectorScepClient } from "./PcaConnectorScepClient";

const commands = {
  CreateChallengeCommand,
  CreateConnectorCommand,
  DeleteChallengeCommand,
  DeleteConnectorCommand,
  GetChallengeMetadataCommand,
  GetChallengePasswordCommand,
  GetConnectorCommand,
  ListChallengeMetadataCommand,
  ListConnectorsCommand,
  ListTagsForResourceCommand,
  TagResourceCommand,
  UntagResourceCommand,
};

export interface PcaConnectorScep {
  /**
   * @see {@link CreateChallengeCommand}
   */
  createChallenge(
    args: CreateChallengeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateChallengeCommandOutput>;
  createChallenge(args: CreateChallengeCommandInput, cb: (err: any, data?: CreateChallengeCommandOutput) => void): void;
  createChallenge(
    args: CreateChallengeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateChallengeCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateConnectorCommand}
   */
  createConnector(
    args: CreateConnectorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateConnectorCommandOutput>;
  createConnector(args: CreateConnectorCommandInput, cb: (err: any, data?: CreateConnectorCommandOutput) => void): void;
  createConnector(
    args: CreateConnectorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateConnectorCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteChallengeCommand}
   */
  deleteChallenge(
    args: DeleteChallengeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteChallengeCommandOutput>;
  deleteChallenge(args: DeleteChallengeCommandInput, cb: (err: any, data?: DeleteChallengeCommandOutput) => void): void;
  deleteChallenge(
    args: DeleteChallengeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteChallengeCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteConnectorCommand}
   */
  deleteConnector(
    args: DeleteConnectorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteConnectorCommandOutput>;
  deleteConnector(args: DeleteConnectorCommandInput, cb: (err: any, data?: DeleteConnectorCommandOutput) => void): void;
  deleteConnector(
    args: DeleteConnectorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteConnectorCommandOutput) => void
  ): void;

  /**
   * @see {@link GetChallengeMetadataCommand}
   */
  getChallengeMetadata(
    args: GetChallengeMetadataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetChallengeMetadataCommandOutput>;
  getChallengeMetadata(
    args: GetChallengeMetadataCommandInput,
    cb: (err: any, data?: GetChallengeMetadataCommandOutput) => void
  ): void;
  getChallengeMetadata(
    args: GetChallengeMetadataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetChallengeMetadataCommandOutput) => void
  ): void;

  /**
   * @see {@link GetChallengePasswordCommand}
   */
  getChallengePassword(
    args: GetChallengePasswordCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetChallengePasswordCommandOutput>;
  getChallengePassword(
    args: GetChallengePasswordCommandInput,
    cb: (err: any, data?: GetChallengePasswordCommandOutput) => void
  ): void;
  getChallengePassword(
    args: GetChallengePasswordCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetChallengePasswordCommandOutput) => void
  ): void;

  /**
   * @see {@link GetConnectorCommand}
   */
  getConnector(args: GetConnectorCommandInput, options?: __HttpHandlerOptions): Promise<GetConnectorCommandOutput>;
  getConnector(args: GetConnectorCommandInput, cb: (err: any, data?: GetConnectorCommandOutput) => void): void;
  getConnector(
    args: GetConnectorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetConnectorCommandOutput) => void
  ): void;

  /**
   * @see {@link ListChallengeMetadataCommand}
   */
  listChallengeMetadata(
    args: ListChallengeMetadataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListChallengeMetadataCommandOutput>;
  listChallengeMetadata(
    args: ListChallengeMetadataCommandInput,
    cb: (err: any, data?: ListChallengeMetadataCommandOutput) => void
  ): void;
  listChallengeMetadata(
    args: ListChallengeMetadataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListChallengeMetadataCommandOutput) => void
  ): void;

  /**
   * @see {@link ListConnectorsCommand}
   */
  listConnectors(): Promise<ListConnectorsCommandOutput>;
  listConnectors(
    args: ListConnectorsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListConnectorsCommandOutput>;
  listConnectors(args: ListConnectorsCommandInput, cb: (err: any, data?: ListConnectorsCommandOutput) => void): void;
  listConnectors(
    args: ListConnectorsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListConnectorsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
  untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
}

/**
 * <p>Connector for SCEP creates a connector between Amazon Web Services Private CA and your SCEP-enabled clients and devices. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/scep-connector.htmlconnector-for-scep.html">Connector for SCEP</a> in the <i>Amazon Web Services Private CA User Guide</i>.</p>
 * @public
 */
export class PcaConnectorScep extends PcaConnectorScepClient implements PcaConnectorScep {}
createAggregatedClient(commands, PcaConnectorScep);
