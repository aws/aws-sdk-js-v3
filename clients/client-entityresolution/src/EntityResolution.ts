// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  CreateMatchingWorkflowCommand,
  CreateMatchingWorkflowCommandInput,
  CreateMatchingWorkflowCommandOutput,
} from "./commands/CreateMatchingWorkflowCommand";
import {
  CreateSchemaMappingCommand,
  CreateSchemaMappingCommandInput,
  CreateSchemaMappingCommandOutput,
} from "./commands/CreateSchemaMappingCommand";
import {
  DeleteMatchingWorkflowCommand,
  DeleteMatchingWorkflowCommandInput,
  DeleteMatchingWorkflowCommandOutput,
} from "./commands/DeleteMatchingWorkflowCommand";
import {
  DeleteSchemaMappingCommand,
  DeleteSchemaMappingCommandInput,
  DeleteSchemaMappingCommandOutput,
} from "./commands/DeleteSchemaMappingCommand";
import { GetMatchIdCommand, GetMatchIdCommandInput, GetMatchIdCommandOutput } from "./commands/GetMatchIdCommand";
import {
  GetMatchingJobCommand,
  GetMatchingJobCommandInput,
  GetMatchingJobCommandOutput,
} from "./commands/GetMatchingJobCommand";
import {
  GetMatchingWorkflowCommand,
  GetMatchingWorkflowCommandInput,
  GetMatchingWorkflowCommandOutput,
} from "./commands/GetMatchingWorkflowCommand";
import {
  GetSchemaMappingCommand,
  GetSchemaMappingCommandInput,
  GetSchemaMappingCommandOutput,
} from "./commands/GetSchemaMappingCommand";
import {
  ListMatchingJobsCommand,
  ListMatchingJobsCommandInput,
  ListMatchingJobsCommandOutput,
} from "./commands/ListMatchingJobsCommand";
import {
  ListMatchingWorkflowsCommand,
  ListMatchingWorkflowsCommandInput,
  ListMatchingWorkflowsCommandOutput,
} from "./commands/ListMatchingWorkflowsCommand";
import {
  ListSchemaMappingsCommand,
  ListSchemaMappingsCommandInput,
  ListSchemaMappingsCommandOutput,
} from "./commands/ListSchemaMappingsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  StartMatchingJobCommand,
  StartMatchingJobCommandInput,
  StartMatchingJobCommandOutput,
} from "./commands/StartMatchingJobCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateMatchingWorkflowCommand,
  UpdateMatchingWorkflowCommandInput,
  UpdateMatchingWorkflowCommandOutput,
} from "./commands/UpdateMatchingWorkflowCommand";
import { EntityResolutionClient, EntityResolutionClientConfig } from "./EntityResolutionClient";

const commands = {
  CreateMatchingWorkflowCommand,
  CreateSchemaMappingCommand,
  DeleteMatchingWorkflowCommand,
  DeleteSchemaMappingCommand,
  GetMatchIdCommand,
  GetMatchingJobCommand,
  GetMatchingWorkflowCommand,
  GetSchemaMappingCommand,
  ListMatchingJobsCommand,
  ListMatchingWorkflowsCommand,
  ListSchemaMappingsCommand,
  ListTagsForResourceCommand,
  StartMatchingJobCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateMatchingWorkflowCommand,
};

export interface EntityResolution {
  /**
   * @see {@link CreateMatchingWorkflowCommand}
   */
  createMatchingWorkflow(
    args: CreateMatchingWorkflowCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateMatchingWorkflowCommandOutput>;
  createMatchingWorkflow(
    args: CreateMatchingWorkflowCommandInput,
    cb: (err: any, data?: CreateMatchingWorkflowCommandOutput) => void
  ): void;
  createMatchingWorkflow(
    args: CreateMatchingWorkflowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateMatchingWorkflowCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateSchemaMappingCommand}
   */
  createSchemaMapping(
    args: CreateSchemaMappingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSchemaMappingCommandOutput>;
  createSchemaMapping(
    args: CreateSchemaMappingCommandInput,
    cb: (err: any, data?: CreateSchemaMappingCommandOutput) => void
  ): void;
  createSchemaMapping(
    args: CreateSchemaMappingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSchemaMappingCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteMatchingWorkflowCommand}
   */
  deleteMatchingWorkflow(
    args: DeleteMatchingWorkflowCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteMatchingWorkflowCommandOutput>;
  deleteMatchingWorkflow(
    args: DeleteMatchingWorkflowCommandInput,
    cb: (err: any, data?: DeleteMatchingWorkflowCommandOutput) => void
  ): void;
  deleteMatchingWorkflow(
    args: DeleteMatchingWorkflowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteMatchingWorkflowCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteSchemaMappingCommand}
   */
  deleteSchemaMapping(
    args: DeleteSchemaMappingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSchemaMappingCommandOutput>;
  deleteSchemaMapping(
    args: DeleteSchemaMappingCommandInput,
    cb: (err: any, data?: DeleteSchemaMappingCommandOutput) => void
  ): void;
  deleteSchemaMapping(
    args: DeleteSchemaMappingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSchemaMappingCommandOutput) => void
  ): void;

  /**
   * @see {@link GetMatchIdCommand}
   */
  getMatchId(args: GetMatchIdCommandInput, options?: __HttpHandlerOptions): Promise<GetMatchIdCommandOutput>;
  getMatchId(args: GetMatchIdCommandInput, cb: (err: any, data?: GetMatchIdCommandOutput) => void): void;
  getMatchId(
    args: GetMatchIdCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMatchIdCommandOutput) => void
  ): void;

  /**
   * @see {@link GetMatchingJobCommand}
   */
  getMatchingJob(
    args: GetMatchingJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetMatchingJobCommandOutput>;
  getMatchingJob(args: GetMatchingJobCommandInput, cb: (err: any, data?: GetMatchingJobCommandOutput) => void): void;
  getMatchingJob(
    args: GetMatchingJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMatchingJobCommandOutput) => void
  ): void;

  /**
   * @see {@link GetMatchingWorkflowCommand}
   */
  getMatchingWorkflow(
    args: GetMatchingWorkflowCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetMatchingWorkflowCommandOutput>;
  getMatchingWorkflow(
    args: GetMatchingWorkflowCommandInput,
    cb: (err: any, data?: GetMatchingWorkflowCommandOutput) => void
  ): void;
  getMatchingWorkflow(
    args: GetMatchingWorkflowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMatchingWorkflowCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSchemaMappingCommand}
   */
  getSchemaMapping(
    args: GetSchemaMappingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSchemaMappingCommandOutput>;
  getSchemaMapping(
    args: GetSchemaMappingCommandInput,
    cb: (err: any, data?: GetSchemaMappingCommandOutput) => void
  ): void;
  getSchemaMapping(
    args: GetSchemaMappingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSchemaMappingCommandOutput) => void
  ): void;

  /**
   * @see {@link ListMatchingJobsCommand}
   */
  listMatchingJobs(
    args: ListMatchingJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListMatchingJobsCommandOutput>;
  listMatchingJobs(
    args: ListMatchingJobsCommandInput,
    cb: (err: any, data?: ListMatchingJobsCommandOutput) => void
  ): void;
  listMatchingJobs(
    args: ListMatchingJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListMatchingJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListMatchingWorkflowsCommand}
   */
  listMatchingWorkflows(
    args: ListMatchingWorkflowsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListMatchingWorkflowsCommandOutput>;
  listMatchingWorkflows(
    args: ListMatchingWorkflowsCommandInput,
    cb: (err: any, data?: ListMatchingWorkflowsCommandOutput) => void
  ): void;
  listMatchingWorkflows(
    args: ListMatchingWorkflowsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListMatchingWorkflowsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSchemaMappingsCommand}
   */
  listSchemaMappings(
    args: ListSchemaMappingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSchemaMappingsCommandOutput>;
  listSchemaMappings(
    args: ListSchemaMappingsCommandInput,
    cb: (err: any, data?: ListSchemaMappingsCommandOutput) => void
  ): void;
  listSchemaMappings(
    args: ListSchemaMappingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSchemaMappingsCommandOutput) => void
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
   * @see {@link StartMatchingJobCommand}
   */
  startMatchingJob(
    args: StartMatchingJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartMatchingJobCommandOutput>;
  startMatchingJob(
    args: StartMatchingJobCommandInput,
    cb: (err: any, data?: StartMatchingJobCommandOutput) => void
  ): void;
  startMatchingJob(
    args: StartMatchingJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartMatchingJobCommandOutput) => void
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
   * @see {@link UpdateMatchingWorkflowCommand}
   */
  updateMatchingWorkflow(
    args: UpdateMatchingWorkflowCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateMatchingWorkflowCommandOutput>;
  updateMatchingWorkflow(
    args: UpdateMatchingWorkflowCommandInput,
    cb: (err: any, data?: UpdateMatchingWorkflowCommandOutput) => void
  ): void;
  updateMatchingWorkflow(
    args: UpdateMatchingWorkflowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateMatchingWorkflowCommandOutput) => void
  ): void;
}

/**
 * @public
 * <p>Welcome to the <i>AWS Entity Resolution API Reference</i>.</p>
 *          <p>AWS Entity Resolution is an AWS service that provides pre-configured entity resolution capabilities
 *          that enable developers and analysts at advertising and marketing companies to build an accurate and
 *         complete view of their consumers.</p>
 *          <p>
 *          With AWS Entity Resolution, you have the ability to match source records containing consumer identifiers,
 *          such as name, email address, and phone number. This holds true even when these records have incomplete or
 *          conflicting identifiers. For example, AWS Entity Resolution can effectively match a source record from a
 *          customer relationship management (CRM) system, which includes account information like first name, last name,
 *          postal address, phone number, and email address, with a source record from a marketing system containing
 *          campaign information, such as username and email address.</p>
 *          <p>To learn more about AWS Entity Resolution concepts, procedures, and best practices, see the
 *          <a href="https://docs.aws.amazon.com/entityresolution/latest/userguide/what-is-service.html">AWS Entity Resolution
 *             User Guide</a>.</p>
 */
export class EntityResolution extends EntityResolutionClient implements EntityResolution {}
createAggregatedClient(commands, EntityResolution);
