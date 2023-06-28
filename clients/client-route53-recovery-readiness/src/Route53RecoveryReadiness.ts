// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import { CreateCellCommand, CreateCellCommandInput, CreateCellCommandOutput } from "./commands/CreateCellCommand";
import {
  CreateCrossAccountAuthorizationCommand,
  CreateCrossAccountAuthorizationCommandInput,
  CreateCrossAccountAuthorizationCommandOutput,
} from "./commands/CreateCrossAccountAuthorizationCommand";
import {
  CreateReadinessCheckCommand,
  CreateReadinessCheckCommandInput,
  CreateReadinessCheckCommandOutput,
} from "./commands/CreateReadinessCheckCommand";
import {
  CreateRecoveryGroupCommand,
  CreateRecoveryGroupCommandInput,
  CreateRecoveryGroupCommandOutput,
} from "./commands/CreateRecoveryGroupCommand";
import {
  CreateResourceSetCommand,
  CreateResourceSetCommandInput,
  CreateResourceSetCommandOutput,
} from "./commands/CreateResourceSetCommand";
import { DeleteCellCommand, DeleteCellCommandInput, DeleteCellCommandOutput } from "./commands/DeleteCellCommand";
import {
  DeleteCrossAccountAuthorizationCommand,
  DeleteCrossAccountAuthorizationCommandInput,
  DeleteCrossAccountAuthorizationCommandOutput,
} from "./commands/DeleteCrossAccountAuthorizationCommand";
import {
  DeleteReadinessCheckCommand,
  DeleteReadinessCheckCommandInput,
  DeleteReadinessCheckCommandOutput,
} from "./commands/DeleteReadinessCheckCommand";
import {
  DeleteRecoveryGroupCommand,
  DeleteRecoveryGroupCommandInput,
  DeleteRecoveryGroupCommandOutput,
} from "./commands/DeleteRecoveryGroupCommand";
import {
  DeleteResourceSetCommand,
  DeleteResourceSetCommandInput,
  DeleteResourceSetCommandOutput,
} from "./commands/DeleteResourceSetCommand";
import {
  GetArchitectureRecommendationsCommand,
  GetArchitectureRecommendationsCommandInput,
  GetArchitectureRecommendationsCommandOutput,
} from "./commands/GetArchitectureRecommendationsCommand";
import { GetCellCommand, GetCellCommandInput, GetCellCommandOutput } from "./commands/GetCellCommand";
import {
  GetCellReadinessSummaryCommand,
  GetCellReadinessSummaryCommandInput,
  GetCellReadinessSummaryCommandOutput,
} from "./commands/GetCellReadinessSummaryCommand";
import {
  GetReadinessCheckCommand,
  GetReadinessCheckCommandInput,
  GetReadinessCheckCommandOutput,
} from "./commands/GetReadinessCheckCommand";
import {
  GetReadinessCheckResourceStatusCommand,
  GetReadinessCheckResourceStatusCommandInput,
  GetReadinessCheckResourceStatusCommandOutput,
} from "./commands/GetReadinessCheckResourceStatusCommand";
import {
  GetReadinessCheckStatusCommand,
  GetReadinessCheckStatusCommandInput,
  GetReadinessCheckStatusCommandOutput,
} from "./commands/GetReadinessCheckStatusCommand";
import {
  GetRecoveryGroupCommand,
  GetRecoveryGroupCommandInput,
  GetRecoveryGroupCommandOutput,
} from "./commands/GetRecoveryGroupCommand";
import {
  GetRecoveryGroupReadinessSummaryCommand,
  GetRecoveryGroupReadinessSummaryCommandInput,
  GetRecoveryGroupReadinessSummaryCommandOutput,
} from "./commands/GetRecoveryGroupReadinessSummaryCommand";
import {
  GetResourceSetCommand,
  GetResourceSetCommandInput,
  GetResourceSetCommandOutput,
} from "./commands/GetResourceSetCommand";
import { ListCellsCommand, ListCellsCommandInput, ListCellsCommandOutput } from "./commands/ListCellsCommand";
import {
  ListCrossAccountAuthorizationsCommand,
  ListCrossAccountAuthorizationsCommandInput,
  ListCrossAccountAuthorizationsCommandOutput,
} from "./commands/ListCrossAccountAuthorizationsCommand";
import {
  ListReadinessChecksCommand,
  ListReadinessChecksCommandInput,
  ListReadinessChecksCommandOutput,
} from "./commands/ListReadinessChecksCommand";
import {
  ListRecoveryGroupsCommand,
  ListRecoveryGroupsCommandInput,
  ListRecoveryGroupsCommandOutput,
} from "./commands/ListRecoveryGroupsCommand";
import {
  ListResourceSetsCommand,
  ListResourceSetsCommandInput,
  ListResourceSetsCommandOutput,
} from "./commands/ListResourceSetsCommand";
import { ListRulesCommand, ListRulesCommandInput, ListRulesCommandOutput } from "./commands/ListRulesCommand";
import {
  ListTagsForResourcesCommand,
  ListTagsForResourcesCommandInput,
  ListTagsForResourcesCommandOutput,
} from "./commands/ListTagsForResourcesCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import { UpdateCellCommand, UpdateCellCommandInput, UpdateCellCommandOutput } from "./commands/UpdateCellCommand";
import {
  UpdateReadinessCheckCommand,
  UpdateReadinessCheckCommandInput,
  UpdateReadinessCheckCommandOutput,
} from "./commands/UpdateReadinessCheckCommand";
import {
  UpdateRecoveryGroupCommand,
  UpdateRecoveryGroupCommandInput,
  UpdateRecoveryGroupCommandOutput,
} from "./commands/UpdateRecoveryGroupCommand";
import {
  UpdateResourceSetCommand,
  UpdateResourceSetCommandInput,
  UpdateResourceSetCommandOutput,
} from "./commands/UpdateResourceSetCommand";
import { Route53RecoveryReadinessClient, Route53RecoveryReadinessClientConfig } from "./Route53RecoveryReadinessClient";

const commands = {
  CreateCellCommand,
  CreateCrossAccountAuthorizationCommand,
  CreateReadinessCheckCommand,
  CreateRecoveryGroupCommand,
  CreateResourceSetCommand,
  DeleteCellCommand,
  DeleteCrossAccountAuthorizationCommand,
  DeleteReadinessCheckCommand,
  DeleteRecoveryGroupCommand,
  DeleteResourceSetCommand,
  GetArchitectureRecommendationsCommand,
  GetCellCommand,
  GetCellReadinessSummaryCommand,
  GetReadinessCheckCommand,
  GetReadinessCheckResourceStatusCommand,
  GetReadinessCheckStatusCommand,
  GetRecoveryGroupCommand,
  GetRecoveryGroupReadinessSummaryCommand,
  GetResourceSetCommand,
  ListCellsCommand,
  ListCrossAccountAuthorizationsCommand,
  ListReadinessChecksCommand,
  ListRecoveryGroupsCommand,
  ListResourceSetsCommand,
  ListRulesCommand,
  ListTagsForResourcesCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateCellCommand,
  UpdateReadinessCheckCommand,
  UpdateRecoveryGroupCommand,
  UpdateResourceSetCommand,
};

export interface Route53RecoveryReadiness {
  /**
   * @see {@link CreateCellCommand}
   */
  createCell(args: CreateCellCommandInput, options?: __HttpHandlerOptions): Promise<CreateCellCommandOutput>;
  createCell(args: CreateCellCommandInput, cb: (err: any, data?: CreateCellCommandOutput) => void): void;
  createCell(
    args: CreateCellCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateCellCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateCrossAccountAuthorizationCommand}
   */
  createCrossAccountAuthorization(
    args: CreateCrossAccountAuthorizationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateCrossAccountAuthorizationCommandOutput>;
  createCrossAccountAuthorization(
    args: CreateCrossAccountAuthorizationCommandInput,
    cb: (err: any, data?: CreateCrossAccountAuthorizationCommandOutput) => void
  ): void;
  createCrossAccountAuthorization(
    args: CreateCrossAccountAuthorizationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateCrossAccountAuthorizationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateReadinessCheckCommand}
   */
  createReadinessCheck(
    args: CreateReadinessCheckCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateReadinessCheckCommandOutput>;
  createReadinessCheck(
    args: CreateReadinessCheckCommandInput,
    cb: (err: any, data?: CreateReadinessCheckCommandOutput) => void
  ): void;
  createReadinessCheck(
    args: CreateReadinessCheckCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateReadinessCheckCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateRecoveryGroupCommand}
   */
  createRecoveryGroup(
    args: CreateRecoveryGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateRecoveryGroupCommandOutput>;
  createRecoveryGroup(
    args: CreateRecoveryGroupCommandInput,
    cb: (err: any, data?: CreateRecoveryGroupCommandOutput) => void
  ): void;
  createRecoveryGroup(
    args: CreateRecoveryGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateRecoveryGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateResourceSetCommand}
   */
  createResourceSet(
    args: CreateResourceSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateResourceSetCommandOutput>;
  createResourceSet(
    args: CreateResourceSetCommandInput,
    cb: (err: any, data?: CreateResourceSetCommandOutput) => void
  ): void;
  createResourceSet(
    args: CreateResourceSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateResourceSetCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteCellCommand}
   */
  deleteCell(args: DeleteCellCommandInput, options?: __HttpHandlerOptions): Promise<DeleteCellCommandOutput>;
  deleteCell(args: DeleteCellCommandInput, cb: (err: any, data?: DeleteCellCommandOutput) => void): void;
  deleteCell(
    args: DeleteCellCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteCellCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteCrossAccountAuthorizationCommand}
   */
  deleteCrossAccountAuthorization(
    args: DeleteCrossAccountAuthorizationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteCrossAccountAuthorizationCommandOutput>;
  deleteCrossAccountAuthorization(
    args: DeleteCrossAccountAuthorizationCommandInput,
    cb: (err: any, data?: DeleteCrossAccountAuthorizationCommandOutput) => void
  ): void;
  deleteCrossAccountAuthorization(
    args: DeleteCrossAccountAuthorizationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteCrossAccountAuthorizationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteReadinessCheckCommand}
   */
  deleteReadinessCheck(
    args: DeleteReadinessCheckCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteReadinessCheckCommandOutput>;
  deleteReadinessCheck(
    args: DeleteReadinessCheckCommandInput,
    cb: (err: any, data?: DeleteReadinessCheckCommandOutput) => void
  ): void;
  deleteReadinessCheck(
    args: DeleteReadinessCheckCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteReadinessCheckCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteRecoveryGroupCommand}
   */
  deleteRecoveryGroup(
    args: DeleteRecoveryGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRecoveryGroupCommandOutput>;
  deleteRecoveryGroup(
    args: DeleteRecoveryGroupCommandInput,
    cb: (err: any, data?: DeleteRecoveryGroupCommandOutput) => void
  ): void;
  deleteRecoveryGroup(
    args: DeleteRecoveryGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRecoveryGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteResourceSetCommand}
   */
  deleteResourceSet(
    args: DeleteResourceSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteResourceSetCommandOutput>;
  deleteResourceSet(
    args: DeleteResourceSetCommandInput,
    cb: (err: any, data?: DeleteResourceSetCommandOutput) => void
  ): void;
  deleteResourceSet(
    args: DeleteResourceSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteResourceSetCommandOutput) => void
  ): void;

  /**
   * @see {@link GetArchitectureRecommendationsCommand}
   */
  getArchitectureRecommendations(
    args: GetArchitectureRecommendationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetArchitectureRecommendationsCommandOutput>;
  getArchitectureRecommendations(
    args: GetArchitectureRecommendationsCommandInput,
    cb: (err: any, data?: GetArchitectureRecommendationsCommandOutput) => void
  ): void;
  getArchitectureRecommendations(
    args: GetArchitectureRecommendationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetArchitectureRecommendationsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCellCommand}
   */
  getCell(args: GetCellCommandInput, options?: __HttpHandlerOptions): Promise<GetCellCommandOutput>;
  getCell(args: GetCellCommandInput, cb: (err: any, data?: GetCellCommandOutput) => void): void;
  getCell(
    args: GetCellCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCellCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCellReadinessSummaryCommand}
   */
  getCellReadinessSummary(
    args: GetCellReadinessSummaryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCellReadinessSummaryCommandOutput>;
  getCellReadinessSummary(
    args: GetCellReadinessSummaryCommandInput,
    cb: (err: any, data?: GetCellReadinessSummaryCommandOutput) => void
  ): void;
  getCellReadinessSummary(
    args: GetCellReadinessSummaryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCellReadinessSummaryCommandOutput) => void
  ): void;

  /**
   * @see {@link GetReadinessCheckCommand}
   */
  getReadinessCheck(
    args: GetReadinessCheckCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetReadinessCheckCommandOutput>;
  getReadinessCheck(
    args: GetReadinessCheckCommandInput,
    cb: (err: any, data?: GetReadinessCheckCommandOutput) => void
  ): void;
  getReadinessCheck(
    args: GetReadinessCheckCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetReadinessCheckCommandOutput) => void
  ): void;

  /**
   * @see {@link GetReadinessCheckResourceStatusCommand}
   */
  getReadinessCheckResourceStatus(
    args: GetReadinessCheckResourceStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetReadinessCheckResourceStatusCommandOutput>;
  getReadinessCheckResourceStatus(
    args: GetReadinessCheckResourceStatusCommandInput,
    cb: (err: any, data?: GetReadinessCheckResourceStatusCommandOutput) => void
  ): void;
  getReadinessCheckResourceStatus(
    args: GetReadinessCheckResourceStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetReadinessCheckResourceStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link GetReadinessCheckStatusCommand}
   */
  getReadinessCheckStatus(
    args: GetReadinessCheckStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetReadinessCheckStatusCommandOutput>;
  getReadinessCheckStatus(
    args: GetReadinessCheckStatusCommandInput,
    cb: (err: any, data?: GetReadinessCheckStatusCommandOutput) => void
  ): void;
  getReadinessCheckStatus(
    args: GetReadinessCheckStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetReadinessCheckStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRecoveryGroupCommand}
   */
  getRecoveryGroup(
    args: GetRecoveryGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRecoveryGroupCommandOutput>;
  getRecoveryGroup(
    args: GetRecoveryGroupCommandInput,
    cb: (err: any, data?: GetRecoveryGroupCommandOutput) => void
  ): void;
  getRecoveryGroup(
    args: GetRecoveryGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRecoveryGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRecoveryGroupReadinessSummaryCommand}
   */
  getRecoveryGroupReadinessSummary(
    args: GetRecoveryGroupReadinessSummaryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRecoveryGroupReadinessSummaryCommandOutput>;
  getRecoveryGroupReadinessSummary(
    args: GetRecoveryGroupReadinessSummaryCommandInput,
    cb: (err: any, data?: GetRecoveryGroupReadinessSummaryCommandOutput) => void
  ): void;
  getRecoveryGroupReadinessSummary(
    args: GetRecoveryGroupReadinessSummaryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRecoveryGroupReadinessSummaryCommandOutput) => void
  ): void;

  /**
   * @see {@link GetResourceSetCommand}
   */
  getResourceSet(
    args: GetResourceSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetResourceSetCommandOutput>;
  getResourceSet(args: GetResourceSetCommandInput, cb: (err: any, data?: GetResourceSetCommandOutput) => void): void;
  getResourceSet(
    args: GetResourceSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetResourceSetCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCellsCommand}
   */
  listCells(args: ListCellsCommandInput, options?: __HttpHandlerOptions): Promise<ListCellsCommandOutput>;
  listCells(args: ListCellsCommandInput, cb: (err: any, data?: ListCellsCommandOutput) => void): void;
  listCells(
    args: ListCellsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCellsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCrossAccountAuthorizationsCommand}
   */
  listCrossAccountAuthorizations(
    args: ListCrossAccountAuthorizationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCrossAccountAuthorizationsCommandOutput>;
  listCrossAccountAuthorizations(
    args: ListCrossAccountAuthorizationsCommandInput,
    cb: (err: any, data?: ListCrossAccountAuthorizationsCommandOutput) => void
  ): void;
  listCrossAccountAuthorizations(
    args: ListCrossAccountAuthorizationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCrossAccountAuthorizationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListReadinessChecksCommand}
   */
  listReadinessChecks(
    args: ListReadinessChecksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListReadinessChecksCommandOutput>;
  listReadinessChecks(
    args: ListReadinessChecksCommandInput,
    cb: (err: any, data?: ListReadinessChecksCommandOutput) => void
  ): void;
  listReadinessChecks(
    args: ListReadinessChecksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListReadinessChecksCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRecoveryGroupsCommand}
   */
  listRecoveryGroups(
    args: ListRecoveryGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRecoveryGroupsCommandOutput>;
  listRecoveryGroups(
    args: ListRecoveryGroupsCommandInput,
    cb: (err: any, data?: ListRecoveryGroupsCommandOutput) => void
  ): void;
  listRecoveryGroups(
    args: ListRecoveryGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRecoveryGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListResourceSetsCommand}
   */
  listResourceSets(
    args: ListResourceSetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListResourceSetsCommandOutput>;
  listResourceSets(
    args: ListResourceSetsCommandInput,
    cb: (err: any, data?: ListResourceSetsCommandOutput) => void
  ): void;
  listResourceSets(
    args: ListResourceSetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListResourceSetsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRulesCommand}
   */
  listRules(args: ListRulesCommandInput, options?: __HttpHandlerOptions): Promise<ListRulesCommandOutput>;
  listRules(args: ListRulesCommandInput, cb: (err: any, data?: ListRulesCommandOutput) => void): void;
  listRules(
    args: ListRulesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRulesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourcesCommand}
   */
  listTagsForResources(
    args: ListTagsForResourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourcesCommandOutput>;
  listTagsForResources(
    args: ListTagsForResourcesCommandInput,
    cb: (err: any, data?: ListTagsForResourcesCommandOutput) => void
  ): void;
  listTagsForResources(
    args: ListTagsForResourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourcesCommandOutput) => void
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
   * @see {@link UpdateCellCommand}
   */
  updateCell(args: UpdateCellCommandInput, options?: __HttpHandlerOptions): Promise<UpdateCellCommandOutput>;
  updateCell(args: UpdateCellCommandInput, cb: (err: any, data?: UpdateCellCommandOutput) => void): void;
  updateCell(
    args: UpdateCellCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateCellCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateReadinessCheckCommand}
   */
  updateReadinessCheck(
    args: UpdateReadinessCheckCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateReadinessCheckCommandOutput>;
  updateReadinessCheck(
    args: UpdateReadinessCheckCommandInput,
    cb: (err: any, data?: UpdateReadinessCheckCommandOutput) => void
  ): void;
  updateReadinessCheck(
    args: UpdateReadinessCheckCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateReadinessCheckCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateRecoveryGroupCommand}
   */
  updateRecoveryGroup(
    args: UpdateRecoveryGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateRecoveryGroupCommandOutput>;
  updateRecoveryGroup(
    args: UpdateRecoveryGroupCommandInput,
    cb: (err: any, data?: UpdateRecoveryGroupCommandOutput) => void
  ): void;
  updateRecoveryGroup(
    args: UpdateRecoveryGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRecoveryGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateResourceSetCommand}
   */
  updateResourceSet(
    args: UpdateResourceSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateResourceSetCommandOutput>;
  updateResourceSet(
    args: UpdateResourceSetCommandInput,
    cb: (err: any, data?: UpdateResourceSetCommandOutput) => void
  ): void;
  updateResourceSet(
    args: UpdateResourceSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateResourceSetCommandOutput) => void
  ): void;
}

/**
 * @public
 * <p>Recovery readiness</p>
 */
export class Route53RecoveryReadiness extends Route53RecoveryReadinessClient implements Route53RecoveryReadiness {}
createAggregatedClient(commands, Route53RecoveryReadiness);
