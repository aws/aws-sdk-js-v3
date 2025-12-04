// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  CreateEncoderConfigurationCommand,
  CreateEncoderConfigurationCommandInput,
  CreateEncoderConfigurationCommandOutput,
} from "./commands/CreateEncoderConfigurationCommand";
import {
  CreateIngestConfigurationCommand,
  CreateIngestConfigurationCommandInput,
  CreateIngestConfigurationCommandOutput,
} from "./commands/CreateIngestConfigurationCommand";
import {
  CreateParticipantTokenCommand,
  CreateParticipantTokenCommandInput,
  CreateParticipantTokenCommandOutput,
} from "./commands/CreateParticipantTokenCommand";
import { CreateStageCommand, CreateStageCommandInput, CreateStageCommandOutput } from "./commands/CreateStageCommand";
import {
  CreateStorageConfigurationCommand,
  CreateStorageConfigurationCommandInput,
  CreateStorageConfigurationCommandOutput,
} from "./commands/CreateStorageConfigurationCommand";
import {
  DeleteEncoderConfigurationCommand,
  DeleteEncoderConfigurationCommandInput,
  DeleteEncoderConfigurationCommandOutput,
} from "./commands/DeleteEncoderConfigurationCommand";
import {
  DeleteIngestConfigurationCommand,
  DeleteIngestConfigurationCommandInput,
  DeleteIngestConfigurationCommandOutput,
} from "./commands/DeleteIngestConfigurationCommand";
import {
  DeletePublicKeyCommand,
  DeletePublicKeyCommandInput,
  DeletePublicKeyCommandOutput,
} from "./commands/DeletePublicKeyCommand";
import { DeleteStageCommand, DeleteStageCommandInput, DeleteStageCommandOutput } from "./commands/DeleteStageCommand";
import {
  DeleteStorageConfigurationCommand,
  DeleteStorageConfigurationCommandInput,
  DeleteStorageConfigurationCommandOutput,
} from "./commands/DeleteStorageConfigurationCommand";
import {
  DisconnectParticipantCommand,
  DisconnectParticipantCommandInput,
  DisconnectParticipantCommandOutput,
} from "./commands/DisconnectParticipantCommand";
import {
  GetCompositionCommand,
  GetCompositionCommandInput,
  GetCompositionCommandOutput,
} from "./commands/GetCompositionCommand";
import {
  GetEncoderConfigurationCommand,
  GetEncoderConfigurationCommandInput,
  GetEncoderConfigurationCommandOutput,
} from "./commands/GetEncoderConfigurationCommand";
import {
  GetIngestConfigurationCommand,
  GetIngestConfigurationCommandInput,
  GetIngestConfigurationCommandOutput,
} from "./commands/GetIngestConfigurationCommand";
import {
  GetParticipantCommand,
  GetParticipantCommandInput,
  GetParticipantCommandOutput,
} from "./commands/GetParticipantCommand";
import {
  GetPublicKeyCommand,
  GetPublicKeyCommandInput,
  GetPublicKeyCommandOutput,
} from "./commands/GetPublicKeyCommand";
import { GetStageCommand, GetStageCommandInput, GetStageCommandOutput } from "./commands/GetStageCommand";
import {
  GetStageSessionCommand,
  GetStageSessionCommandInput,
  GetStageSessionCommandOutput,
} from "./commands/GetStageSessionCommand";
import {
  GetStorageConfigurationCommand,
  GetStorageConfigurationCommandInput,
  GetStorageConfigurationCommandOutput,
} from "./commands/GetStorageConfigurationCommand";
import {
  ImportPublicKeyCommand,
  ImportPublicKeyCommandInput,
  ImportPublicKeyCommandOutput,
} from "./commands/ImportPublicKeyCommand";
import {
  ListCompositionsCommand,
  ListCompositionsCommandInput,
  ListCompositionsCommandOutput,
} from "./commands/ListCompositionsCommand";
import {
  ListEncoderConfigurationsCommand,
  ListEncoderConfigurationsCommandInput,
  ListEncoderConfigurationsCommandOutput,
} from "./commands/ListEncoderConfigurationsCommand";
import {
  ListIngestConfigurationsCommand,
  ListIngestConfigurationsCommandInput,
  ListIngestConfigurationsCommandOutput,
} from "./commands/ListIngestConfigurationsCommand";
import {
  ListParticipantEventsCommand,
  ListParticipantEventsCommandInput,
  ListParticipantEventsCommandOutput,
} from "./commands/ListParticipantEventsCommand";
import {
  ListParticipantReplicasCommand,
  ListParticipantReplicasCommandInput,
  ListParticipantReplicasCommandOutput,
} from "./commands/ListParticipantReplicasCommand";
import {
  ListParticipantsCommand,
  ListParticipantsCommandInput,
  ListParticipantsCommandOutput,
} from "./commands/ListParticipantsCommand";
import {
  ListPublicKeysCommand,
  ListPublicKeysCommandInput,
  ListPublicKeysCommandOutput,
} from "./commands/ListPublicKeysCommand";
import { ListStagesCommand, ListStagesCommandInput, ListStagesCommandOutput } from "./commands/ListStagesCommand";
import {
  ListStageSessionsCommand,
  ListStageSessionsCommandInput,
  ListStageSessionsCommandOutput,
} from "./commands/ListStageSessionsCommand";
import {
  ListStorageConfigurationsCommand,
  ListStorageConfigurationsCommandInput,
  ListStorageConfigurationsCommandOutput,
} from "./commands/ListStorageConfigurationsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  StartCompositionCommand,
  StartCompositionCommandInput,
  StartCompositionCommandOutput,
} from "./commands/StartCompositionCommand";
import {
  StartParticipantReplicationCommand,
  StartParticipantReplicationCommandInput,
  StartParticipantReplicationCommandOutput,
} from "./commands/StartParticipantReplicationCommand";
import {
  StopCompositionCommand,
  StopCompositionCommandInput,
  StopCompositionCommandOutput,
} from "./commands/StopCompositionCommand";
import {
  StopParticipantReplicationCommand,
  StopParticipantReplicationCommandInput,
  StopParticipantReplicationCommandOutput,
} from "./commands/StopParticipantReplicationCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateIngestConfigurationCommand,
  UpdateIngestConfigurationCommandInput,
  UpdateIngestConfigurationCommandOutput,
} from "./commands/UpdateIngestConfigurationCommand";
import { UpdateStageCommand, UpdateStageCommandInput, UpdateStageCommandOutput } from "./commands/UpdateStageCommand";
import { IVSRealTimeClient } from "./IVSRealTimeClient";

const commands = {
  CreateEncoderConfigurationCommand,
  CreateIngestConfigurationCommand,
  CreateParticipantTokenCommand,
  CreateStageCommand,
  CreateStorageConfigurationCommand,
  DeleteEncoderConfigurationCommand,
  DeleteIngestConfigurationCommand,
  DeletePublicKeyCommand,
  DeleteStageCommand,
  DeleteStorageConfigurationCommand,
  DisconnectParticipantCommand,
  GetCompositionCommand,
  GetEncoderConfigurationCommand,
  GetIngestConfigurationCommand,
  GetParticipantCommand,
  GetPublicKeyCommand,
  GetStageCommand,
  GetStageSessionCommand,
  GetStorageConfigurationCommand,
  ImportPublicKeyCommand,
  ListCompositionsCommand,
  ListEncoderConfigurationsCommand,
  ListIngestConfigurationsCommand,
  ListParticipantEventsCommand,
  ListParticipantReplicasCommand,
  ListParticipantsCommand,
  ListPublicKeysCommand,
  ListStagesCommand,
  ListStageSessionsCommand,
  ListStorageConfigurationsCommand,
  ListTagsForResourceCommand,
  StartCompositionCommand,
  StartParticipantReplicationCommand,
  StopCompositionCommand,
  StopParticipantReplicationCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateIngestConfigurationCommand,
  UpdateStageCommand,
};

export interface IVSRealTime {
  /**
   * @see {@link CreateEncoderConfigurationCommand}
   */
  createEncoderConfiguration(): Promise<CreateEncoderConfigurationCommandOutput>;
  createEncoderConfiguration(
    args: CreateEncoderConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateEncoderConfigurationCommandOutput>;
  createEncoderConfiguration(
    args: CreateEncoderConfigurationCommandInput,
    cb: (err: any, data?: CreateEncoderConfigurationCommandOutput) => void
  ): void;
  createEncoderConfiguration(
    args: CreateEncoderConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateEncoderConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateIngestConfigurationCommand}
   */
  createIngestConfiguration(
    args: CreateIngestConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateIngestConfigurationCommandOutput>;
  createIngestConfiguration(
    args: CreateIngestConfigurationCommandInput,
    cb: (err: any, data?: CreateIngestConfigurationCommandOutput) => void
  ): void;
  createIngestConfiguration(
    args: CreateIngestConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateIngestConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateParticipantTokenCommand}
   */
  createParticipantToken(
    args: CreateParticipantTokenCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateParticipantTokenCommandOutput>;
  createParticipantToken(
    args: CreateParticipantTokenCommandInput,
    cb: (err: any, data?: CreateParticipantTokenCommandOutput) => void
  ): void;
  createParticipantToken(
    args: CreateParticipantTokenCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateParticipantTokenCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateStageCommand}
   */
  createStage(): Promise<CreateStageCommandOutput>;
  createStage(args: CreateStageCommandInput, options?: __HttpHandlerOptions): Promise<CreateStageCommandOutput>;
  createStage(args: CreateStageCommandInput, cb: (err: any, data?: CreateStageCommandOutput) => void): void;
  createStage(
    args: CreateStageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateStageCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateStorageConfigurationCommand}
   */
  createStorageConfiguration(
    args: CreateStorageConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateStorageConfigurationCommandOutput>;
  createStorageConfiguration(
    args: CreateStorageConfigurationCommandInput,
    cb: (err: any, data?: CreateStorageConfigurationCommandOutput) => void
  ): void;
  createStorageConfiguration(
    args: CreateStorageConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateStorageConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteEncoderConfigurationCommand}
   */
  deleteEncoderConfiguration(
    args: DeleteEncoderConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteEncoderConfigurationCommandOutput>;
  deleteEncoderConfiguration(
    args: DeleteEncoderConfigurationCommandInput,
    cb: (err: any, data?: DeleteEncoderConfigurationCommandOutput) => void
  ): void;
  deleteEncoderConfiguration(
    args: DeleteEncoderConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteEncoderConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteIngestConfigurationCommand}
   */
  deleteIngestConfiguration(
    args: DeleteIngestConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteIngestConfigurationCommandOutput>;
  deleteIngestConfiguration(
    args: DeleteIngestConfigurationCommandInput,
    cb: (err: any, data?: DeleteIngestConfigurationCommandOutput) => void
  ): void;
  deleteIngestConfiguration(
    args: DeleteIngestConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteIngestConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeletePublicKeyCommand}
   */
  deletePublicKey(
    args: DeletePublicKeyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeletePublicKeyCommandOutput>;
  deletePublicKey(args: DeletePublicKeyCommandInput, cb: (err: any, data?: DeletePublicKeyCommandOutput) => void): void;
  deletePublicKey(
    args: DeletePublicKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePublicKeyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteStageCommand}
   */
  deleteStage(args: DeleteStageCommandInput, options?: __HttpHandlerOptions): Promise<DeleteStageCommandOutput>;
  deleteStage(args: DeleteStageCommandInput, cb: (err: any, data?: DeleteStageCommandOutput) => void): void;
  deleteStage(
    args: DeleteStageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteStageCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteStorageConfigurationCommand}
   */
  deleteStorageConfiguration(
    args: DeleteStorageConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteStorageConfigurationCommandOutput>;
  deleteStorageConfiguration(
    args: DeleteStorageConfigurationCommandInput,
    cb: (err: any, data?: DeleteStorageConfigurationCommandOutput) => void
  ): void;
  deleteStorageConfiguration(
    args: DeleteStorageConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteStorageConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DisconnectParticipantCommand}
   */
  disconnectParticipant(
    args: DisconnectParticipantCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisconnectParticipantCommandOutput>;
  disconnectParticipant(
    args: DisconnectParticipantCommandInput,
    cb: (err: any, data?: DisconnectParticipantCommandOutput) => void
  ): void;
  disconnectParticipant(
    args: DisconnectParticipantCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisconnectParticipantCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCompositionCommand}
   */
  getComposition(
    args: GetCompositionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCompositionCommandOutput>;
  getComposition(args: GetCompositionCommandInput, cb: (err: any, data?: GetCompositionCommandOutput) => void): void;
  getComposition(
    args: GetCompositionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCompositionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetEncoderConfigurationCommand}
   */
  getEncoderConfiguration(
    args: GetEncoderConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetEncoderConfigurationCommandOutput>;
  getEncoderConfiguration(
    args: GetEncoderConfigurationCommandInput,
    cb: (err: any, data?: GetEncoderConfigurationCommandOutput) => void
  ): void;
  getEncoderConfiguration(
    args: GetEncoderConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetEncoderConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetIngestConfigurationCommand}
   */
  getIngestConfiguration(
    args: GetIngestConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetIngestConfigurationCommandOutput>;
  getIngestConfiguration(
    args: GetIngestConfigurationCommandInput,
    cb: (err: any, data?: GetIngestConfigurationCommandOutput) => void
  ): void;
  getIngestConfiguration(
    args: GetIngestConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetIngestConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetParticipantCommand}
   */
  getParticipant(
    args: GetParticipantCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetParticipantCommandOutput>;
  getParticipant(args: GetParticipantCommandInput, cb: (err: any, data?: GetParticipantCommandOutput) => void): void;
  getParticipant(
    args: GetParticipantCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetParticipantCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPublicKeyCommand}
   */
  getPublicKey(args: GetPublicKeyCommandInput, options?: __HttpHandlerOptions): Promise<GetPublicKeyCommandOutput>;
  getPublicKey(args: GetPublicKeyCommandInput, cb: (err: any, data?: GetPublicKeyCommandOutput) => void): void;
  getPublicKey(
    args: GetPublicKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPublicKeyCommandOutput) => void
  ): void;

  /**
   * @see {@link GetStageCommand}
   */
  getStage(args: GetStageCommandInput, options?: __HttpHandlerOptions): Promise<GetStageCommandOutput>;
  getStage(args: GetStageCommandInput, cb: (err: any, data?: GetStageCommandOutput) => void): void;
  getStage(
    args: GetStageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetStageCommandOutput) => void
  ): void;

  /**
   * @see {@link GetStageSessionCommand}
   */
  getStageSession(
    args: GetStageSessionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetStageSessionCommandOutput>;
  getStageSession(args: GetStageSessionCommandInput, cb: (err: any, data?: GetStageSessionCommandOutput) => void): void;
  getStageSession(
    args: GetStageSessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetStageSessionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetStorageConfigurationCommand}
   */
  getStorageConfiguration(
    args: GetStorageConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetStorageConfigurationCommandOutput>;
  getStorageConfiguration(
    args: GetStorageConfigurationCommandInput,
    cb: (err: any, data?: GetStorageConfigurationCommandOutput) => void
  ): void;
  getStorageConfiguration(
    args: GetStorageConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetStorageConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link ImportPublicKeyCommand}
   */
  importPublicKey(
    args: ImportPublicKeyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ImportPublicKeyCommandOutput>;
  importPublicKey(args: ImportPublicKeyCommandInput, cb: (err: any, data?: ImportPublicKeyCommandOutput) => void): void;
  importPublicKey(
    args: ImportPublicKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ImportPublicKeyCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCompositionsCommand}
   */
  listCompositions(): Promise<ListCompositionsCommandOutput>;
  listCompositions(
    args: ListCompositionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCompositionsCommandOutput>;
  listCompositions(
    args: ListCompositionsCommandInput,
    cb: (err: any, data?: ListCompositionsCommandOutput) => void
  ): void;
  listCompositions(
    args: ListCompositionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCompositionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListEncoderConfigurationsCommand}
   */
  listEncoderConfigurations(): Promise<ListEncoderConfigurationsCommandOutput>;
  listEncoderConfigurations(
    args: ListEncoderConfigurationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListEncoderConfigurationsCommandOutput>;
  listEncoderConfigurations(
    args: ListEncoderConfigurationsCommandInput,
    cb: (err: any, data?: ListEncoderConfigurationsCommandOutput) => void
  ): void;
  listEncoderConfigurations(
    args: ListEncoderConfigurationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListEncoderConfigurationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListIngestConfigurationsCommand}
   */
  listIngestConfigurations(): Promise<ListIngestConfigurationsCommandOutput>;
  listIngestConfigurations(
    args: ListIngestConfigurationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListIngestConfigurationsCommandOutput>;
  listIngestConfigurations(
    args: ListIngestConfigurationsCommandInput,
    cb: (err: any, data?: ListIngestConfigurationsCommandOutput) => void
  ): void;
  listIngestConfigurations(
    args: ListIngestConfigurationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListIngestConfigurationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListParticipantEventsCommand}
   */
  listParticipantEvents(
    args: ListParticipantEventsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListParticipantEventsCommandOutput>;
  listParticipantEvents(
    args: ListParticipantEventsCommandInput,
    cb: (err: any, data?: ListParticipantEventsCommandOutput) => void
  ): void;
  listParticipantEvents(
    args: ListParticipantEventsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListParticipantEventsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListParticipantReplicasCommand}
   */
  listParticipantReplicas(
    args: ListParticipantReplicasCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListParticipantReplicasCommandOutput>;
  listParticipantReplicas(
    args: ListParticipantReplicasCommandInput,
    cb: (err: any, data?: ListParticipantReplicasCommandOutput) => void
  ): void;
  listParticipantReplicas(
    args: ListParticipantReplicasCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListParticipantReplicasCommandOutput) => void
  ): void;

  /**
   * @see {@link ListParticipantsCommand}
   */
  listParticipants(
    args: ListParticipantsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListParticipantsCommandOutput>;
  listParticipants(
    args: ListParticipantsCommandInput,
    cb: (err: any, data?: ListParticipantsCommandOutput) => void
  ): void;
  listParticipants(
    args: ListParticipantsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListParticipantsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPublicKeysCommand}
   */
  listPublicKeys(): Promise<ListPublicKeysCommandOutput>;
  listPublicKeys(
    args: ListPublicKeysCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPublicKeysCommandOutput>;
  listPublicKeys(args: ListPublicKeysCommandInput, cb: (err: any, data?: ListPublicKeysCommandOutput) => void): void;
  listPublicKeys(
    args: ListPublicKeysCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPublicKeysCommandOutput) => void
  ): void;

  /**
   * @see {@link ListStagesCommand}
   */
  listStages(): Promise<ListStagesCommandOutput>;
  listStages(args: ListStagesCommandInput, options?: __HttpHandlerOptions): Promise<ListStagesCommandOutput>;
  listStages(args: ListStagesCommandInput, cb: (err: any, data?: ListStagesCommandOutput) => void): void;
  listStages(
    args: ListStagesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListStagesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListStageSessionsCommand}
   */
  listStageSessions(
    args: ListStageSessionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListStageSessionsCommandOutput>;
  listStageSessions(
    args: ListStageSessionsCommandInput,
    cb: (err: any, data?: ListStageSessionsCommandOutput) => void
  ): void;
  listStageSessions(
    args: ListStageSessionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListStageSessionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListStorageConfigurationsCommand}
   */
  listStorageConfigurations(): Promise<ListStorageConfigurationsCommandOutput>;
  listStorageConfigurations(
    args: ListStorageConfigurationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListStorageConfigurationsCommandOutput>;
  listStorageConfigurations(
    args: ListStorageConfigurationsCommandInput,
    cb: (err: any, data?: ListStorageConfigurationsCommandOutput) => void
  ): void;
  listStorageConfigurations(
    args: ListStorageConfigurationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListStorageConfigurationsCommandOutput) => void
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
   * @see {@link StartCompositionCommand}
   */
  startComposition(
    args: StartCompositionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartCompositionCommandOutput>;
  startComposition(
    args: StartCompositionCommandInput,
    cb: (err: any, data?: StartCompositionCommandOutput) => void
  ): void;
  startComposition(
    args: StartCompositionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartCompositionCommandOutput) => void
  ): void;

  /**
   * @see {@link StartParticipantReplicationCommand}
   */
  startParticipantReplication(
    args: StartParticipantReplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartParticipantReplicationCommandOutput>;
  startParticipantReplication(
    args: StartParticipantReplicationCommandInput,
    cb: (err: any, data?: StartParticipantReplicationCommandOutput) => void
  ): void;
  startParticipantReplication(
    args: StartParticipantReplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartParticipantReplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link StopCompositionCommand}
   */
  stopComposition(
    args: StopCompositionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopCompositionCommandOutput>;
  stopComposition(args: StopCompositionCommandInput, cb: (err: any, data?: StopCompositionCommandOutput) => void): void;
  stopComposition(
    args: StopCompositionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopCompositionCommandOutput) => void
  ): void;

  /**
   * @see {@link StopParticipantReplicationCommand}
   */
  stopParticipantReplication(
    args: StopParticipantReplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopParticipantReplicationCommandOutput>;
  stopParticipantReplication(
    args: StopParticipantReplicationCommandInput,
    cb: (err: any, data?: StopParticipantReplicationCommandOutput) => void
  ): void;
  stopParticipantReplication(
    args: StopParticipantReplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopParticipantReplicationCommandOutput) => void
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

  /**
   * @see {@link UpdateIngestConfigurationCommand}
   */
  updateIngestConfiguration(
    args: UpdateIngestConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateIngestConfigurationCommandOutput>;
  updateIngestConfiguration(
    args: UpdateIngestConfigurationCommandInput,
    cb: (err: any, data?: UpdateIngestConfigurationCommandOutput) => void
  ): void;
  updateIngestConfiguration(
    args: UpdateIngestConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateIngestConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateStageCommand}
   */
  updateStage(args: UpdateStageCommandInput, options?: __HttpHandlerOptions): Promise<UpdateStageCommandOutput>;
  updateStage(args: UpdateStageCommandInput, cb: (err: any, data?: UpdateStageCommandOutput) => void): void;
  updateStage(
    args: UpdateStageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateStageCommandOutput) => void
  ): void;
}

/**
 * <p>The Amazon Interactive Video Service (IVS) real-time API is REST compatible, using a standard HTTP
 * 	  API and an AWS EventBridge event stream for responses. JSON is used for both requests and responses,
 * 	  including errors.
 *     </p>
 *          <p>
 *             <b>Key Concepts</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>Stage</b> — A virtual space where participants can exchange video in real time.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Participant token</b> — A token that authenticates a participant when they join a stage.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Participant object</b> — Represents participants (people) in the stage and
 *             contains information about them. When a token is created, it includes a participant ID;
 *             when a participant uses that token to join a stage, the participant is associated with
 *             that participant ID. There is a 1:1 mapping between participant tokens and
 *             participants.</p>
 *             </li>
 *          </ul>
 *          <p>For server-side composition:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>Composition process</b> — Composites participants
 *             of a stage into a single video and forwards it to a set of outputs (e.g., IVS channels).
 *             Composition operations support this process.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Composition</b> — Controls the look of the outputs,
 *             including how participants are positioned in the video.</p>
 *             </li>
 *          </ul>
 *          <p>For participant replication:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>Source stage</b> — The stage where the participant originally joined, which is used as the source for
 * 			replication.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Destination stage</b> — The stage to which the participant is replicated.
 * 				</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Replicated participant</b> — A participant in a stage that is replicated to one or more destination stages.
 * 				</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Replica participant</b> — A participant in a destination stage that is replicated from another stage
 * 			(the source stage).</p>
 *             </li>
 *          </ul>
 *          <p>For more information about your IVS live stream, also see <a href="https://docs.aws.amazon.com/ivs/latest/RealTimeUserGuide/getting-started.html">Getting Started with Amazon IVS Real-Time Streaming</a>.</p>
 *          <p>
 *             <b>Tagging</b>
 *          </p>
 *          <p>A <i>tag</i> is a metadata label that you assign to an AWS resource. A tag
 *       comprises a <i>key</i> and a <i>value</i>, both set by you. For
 *       example, you might set a tag as <code>topic:nature</code> to label a particular video
 *       category. See <a href="https://docs.aws.amazon.com/tag-editor/latest/userguide/best-practices-and-strats.html">Best practices and strategies</a>
 *       in <i>Tagging AWS Resources and Tag Editor</i> for details, including restrictions that apply to tags and "Tag naming
 *       limits and requirements"; Amazon IVS stages has no service-specific constraints beyond what is documented there.</p>
 *          <p>Tags can help you identify and organize your AWS resources. For example, you can use the
 *       same tag for different resources to indicate that they are related. You can also use tags to
 *       manage access (see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_tags.html">Access Tags</a>).</p>
 *          <p>The Amazon IVS real-time API has these tag-related operations: <a>TagResource</a>, <a>UntagResource</a>, and
 *       <a>ListTagsForResource</a>. The following resource supports tagging: Stage.</p>
 *          <p>At most 50 tags can be applied to a resource.</p>
 * @public
 */
export class IVSRealTime extends IVSRealTimeClient implements IVSRealTime {}
createAggregatedClient(commands, IVSRealTime);
