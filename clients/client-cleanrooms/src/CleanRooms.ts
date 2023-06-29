// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import { CleanRoomsClient, CleanRoomsClientConfig } from "./CleanRoomsClient";
import {
  BatchGetSchemaCommand,
  BatchGetSchemaCommandInput,
  BatchGetSchemaCommandOutput,
} from "./commands/BatchGetSchemaCommand";
import {
  CreateCollaborationCommand,
  CreateCollaborationCommandInput,
  CreateCollaborationCommandOutput,
} from "./commands/CreateCollaborationCommand";
import {
  CreateConfiguredTableAnalysisRuleCommand,
  CreateConfiguredTableAnalysisRuleCommandInput,
  CreateConfiguredTableAnalysisRuleCommandOutput,
} from "./commands/CreateConfiguredTableAnalysisRuleCommand";
import {
  CreateConfiguredTableAssociationCommand,
  CreateConfiguredTableAssociationCommandInput,
  CreateConfiguredTableAssociationCommandOutput,
} from "./commands/CreateConfiguredTableAssociationCommand";
import {
  CreateConfiguredTableCommand,
  CreateConfiguredTableCommandInput,
  CreateConfiguredTableCommandOutput,
} from "./commands/CreateConfiguredTableCommand";
import {
  CreateMembershipCommand,
  CreateMembershipCommandInput,
  CreateMembershipCommandOutput,
} from "./commands/CreateMembershipCommand";
import {
  DeleteCollaborationCommand,
  DeleteCollaborationCommandInput,
  DeleteCollaborationCommandOutput,
} from "./commands/DeleteCollaborationCommand";
import {
  DeleteConfiguredTableAnalysisRuleCommand,
  DeleteConfiguredTableAnalysisRuleCommandInput,
  DeleteConfiguredTableAnalysisRuleCommandOutput,
} from "./commands/DeleteConfiguredTableAnalysisRuleCommand";
import {
  DeleteConfiguredTableAssociationCommand,
  DeleteConfiguredTableAssociationCommandInput,
  DeleteConfiguredTableAssociationCommandOutput,
} from "./commands/DeleteConfiguredTableAssociationCommand";
import {
  DeleteConfiguredTableCommand,
  DeleteConfiguredTableCommandInput,
  DeleteConfiguredTableCommandOutput,
} from "./commands/DeleteConfiguredTableCommand";
import {
  DeleteMemberCommand,
  DeleteMemberCommandInput,
  DeleteMemberCommandOutput,
} from "./commands/DeleteMemberCommand";
import {
  DeleteMembershipCommand,
  DeleteMembershipCommandInput,
  DeleteMembershipCommandOutput,
} from "./commands/DeleteMembershipCommand";
import {
  GetCollaborationCommand,
  GetCollaborationCommandInput,
  GetCollaborationCommandOutput,
} from "./commands/GetCollaborationCommand";
import {
  GetConfiguredTableAnalysisRuleCommand,
  GetConfiguredTableAnalysisRuleCommandInput,
  GetConfiguredTableAnalysisRuleCommandOutput,
} from "./commands/GetConfiguredTableAnalysisRuleCommand";
import {
  GetConfiguredTableAssociationCommand,
  GetConfiguredTableAssociationCommandInput,
  GetConfiguredTableAssociationCommandOutput,
} from "./commands/GetConfiguredTableAssociationCommand";
import {
  GetConfiguredTableCommand,
  GetConfiguredTableCommandInput,
  GetConfiguredTableCommandOutput,
} from "./commands/GetConfiguredTableCommand";
import {
  GetMembershipCommand,
  GetMembershipCommandInput,
  GetMembershipCommandOutput,
} from "./commands/GetMembershipCommand";
import {
  GetProtectedQueryCommand,
  GetProtectedQueryCommandInput,
  GetProtectedQueryCommandOutput,
} from "./commands/GetProtectedQueryCommand";
import {
  GetSchemaAnalysisRuleCommand,
  GetSchemaAnalysisRuleCommandInput,
  GetSchemaAnalysisRuleCommandOutput,
} from "./commands/GetSchemaAnalysisRuleCommand";
import { GetSchemaCommand, GetSchemaCommandInput, GetSchemaCommandOutput } from "./commands/GetSchemaCommand";
import {
  ListCollaborationsCommand,
  ListCollaborationsCommandInput,
  ListCollaborationsCommandOutput,
} from "./commands/ListCollaborationsCommand";
import {
  ListConfiguredTableAssociationsCommand,
  ListConfiguredTableAssociationsCommandInput,
  ListConfiguredTableAssociationsCommandOutput,
} from "./commands/ListConfiguredTableAssociationsCommand";
import {
  ListConfiguredTablesCommand,
  ListConfiguredTablesCommandInput,
  ListConfiguredTablesCommandOutput,
} from "./commands/ListConfiguredTablesCommand";
import { ListMembersCommand, ListMembersCommandInput, ListMembersCommandOutput } from "./commands/ListMembersCommand";
import {
  ListMembershipsCommand,
  ListMembershipsCommandInput,
  ListMembershipsCommandOutput,
} from "./commands/ListMembershipsCommand";
import {
  ListProtectedQueriesCommand,
  ListProtectedQueriesCommandInput,
  ListProtectedQueriesCommandOutput,
} from "./commands/ListProtectedQueriesCommand";
import { ListSchemasCommand, ListSchemasCommandInput, ListSchemasCommandOutput } from "./commands/ListSchemasCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  StartProtectedQueryCommand,
  StartProtectedQueryCommandInput,
  StartProtectedQueryCommandOutput,
} from "./commands/StartProtectedQueryCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateCollaborationCommand,
  UpdateCollaborationCommandInput,
  UpdateCollaborationCommandOutput,
} from "./commands/UpdateCollaborationCommand";
import {
  UpdateConfiguredTableAnalysisRuleCommand,
  UpdateConfiguredTableAnalysisRuleCommandInput,
  UpdateConfiguredTableAnalysisRuleCommandOutput,
} from "./commands/UpdateConfiguredTableAnalysisRuleCommand";
import {
  UpdateConfiguredTableAssociationCommand,
  UpdateConfiguredTableAssociationCommandInput,
  UpdateConfiguredTableAssociationCommandOutput,
} from "./commands/UpdateConfiguredTableAssociationCommand";
import {
  UpdateConfiguredTableCommand,
  UpdateConfiguredTableCommandInput,
  UpdateConfiguredTableCommandOutput,
} from "./commands/UpdateConfiguredTableCommand";
import {
  UpdateMembershipCommand,
  UpdateMembershipCommandInput,
  UpdateMembershipCommandOutput,
} from "./commands/UpdateMembershipCommand";
import {
  UpdateProtectedQueryCommand,
  UpdateProtectedQueryCommandInput,
  UpdateProtectedQueryCommandOutput,
} from "./commands/UpdateProtectedQueryCommand";

const commands = {
  BatchGetSchemaCommand,
  CreateCollaborationCommand,
  CreateConfiguredTableCommand,
  CreateConfiguredTableAnalysisRuleCommand,
  CreateConfiguredTableAssociationCommand,
  CreateMembershipCommand,
  DeleteCollaborationCommand,
  DeleteConfiguredTableCommand,
  DeleteConfiguredTableAnalysisRuleCommand,
  DeleteConfiguredTableAssociationCommand,
  DeleteMemberCommand,
  DeleteMembershipCommand,
  GetCollaborationCommand,
  GetConfiguredTableCommand,
  GetConfiguredTableAnalysisRuleCommand,
  GetConfiguredTableAssociationCommand,
  GetMembershipCommand,
  GetProtectedQueryCommand,
  GetSchemaCommand,
  GetSchemaAnalysisRuleCommand,
  ListCollaborationsCommand,
  ListConfiguredTableAssociationsCommand,
  ListConfiguredTablesCommand,
  ListMembersCommand,
  ListMembershipsCommand,
  ListProtectedQueriesCommand,
  ListSchemasCommand,
  ListTagsForResourceCommand,
  StartProtectedQueryCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateCollaborationCommand,
  UpdateConfiguredTableCommand,
  UpdateConfiguredTableAnalysisRuleCommand,
  UpdateConfiguredTableAssociationCommand,
  UpdateMembershipCommand,
  UpdateProtectedQueryCommand,
};

export interface CleanRooms {
  /**
   * @see {@link BatchGetSchemaCommand}
   */
  batchGetSchema(
    args: BatchGetSchemaCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGetSchemaCommandOutput>;
  batchGetSchema(args: BatchGetSchemaCommandInput, cb: (err: any, data?: BatchGetSchemaCommandOutput) => void): void;
  batchGetSchema(
    args: BatchGetSchemaCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetSchemaCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateCollaborationCommand}
   */
  createCollaboration(
    args: CreateCollaborationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateCollaborationCommandOutput>;
  createCollaboration(
    args: CreateCollaborationCommandInput,
    cb: (err: any, data?: CreateCollaborationCommandOutput) => void
  ): void;
  createCollaboration(
    args: CreateCollaborationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateCollaborationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateConfiguredTableCommand}
   */
  createConfiguredTable(
    args: CreateConfiguredTableCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateConfiguredTableCommandOutput>;
  createConfiguredTable(
    args: CreateConfiguredTableCommandInput,
    cb: (err: any, data?: CreateConfiguredTableCommandOutput) => void
  ): void;
  createConfiguredTable(
    args: CreateConfiguredTableCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateConfiguredTableCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateConfiguredTableAnalysisRuleCommand}
   */
  createConfiguredTableAnalysisRule(
    args: CreateConfiguredTableAnalysisRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateConfiguredTableAnalysisRuleCommandOutput>;
  createConfiguredTableAnalysisRule(
    args: CreateConfiguredTableAnalysisRuleCommandInput,
    cb: (err: any, data?: CreateConfiguredTableAnalysisRuleCommandOutput) => void
  ): void;
  createConfiguredTableAnalysisRule(
    args: CreateConfiguredTableAnalysisRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateConfiguredTableAnalysisRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateConfiguredTableAssociationCommand}
   */
  createConfiguredTableAssociation(
    args: CreateConfiguredTableAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateConfiguredTableAssociationCommandOutput>;
  createConfiguredTableAssociation(
    args: CreateConfiguredTableAssociationCommandInput,
    cb: (err: any, data?: CreateConfiguredTableAssociationCommandOutput) => void
  ): void;
  createConfiguredTableAssociation(
    args: CreateConfiguredTableAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateConfiguredTableAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateMembershipCommand}
   */
  createMembership(
    args: CreateMembershipCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateMembershipCommandOutput>;
  createMembership(
    args: CreateMembershipCommandInput,
    cb: (err: any, data?: CreateMembershipCommandOutput) => void
  ): void;
  createMembership(
    args: CreateMembershipCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateMembershipCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteCollaborationCommand}
   */
  deleteCollaboration(
    args: DeleteCollaborationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteCollaborationCommandOutput>;
  deleteCollaboration(
    args: DeleteCollaborationCommandInput,
    cb: (err: any, data?: DeleteCollaborationCommandOutput) => void
  ): void;
  deleteCollaboration(
    args: DeleteCollaborationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteCollaborationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteConfiguredTableCommand}
   */
  deleteConfiguredTable(
    args: DeleteConfiguredTableCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteConfiguredTableCommandOutput>;
  deleteConfiguredTable(
    args: DeleteConfiguredTableCommandInput,
    cb: (err: any, data?: DeleteConfiguredTableCommandOutput) => void
  ): void;
  deleteConfiguredTable(
    args: DeleteConfiguredTableCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteConfiguredTableCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteConfiguredTableAnalysisRuleCommand}
   */
  deleteConfiguredTableAnalysisRule(
    args: DeleteConfiguredTableAnalysisRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteConfiguredTableAnalysisRuleCommandOutput>;
  deleteConfiguredTableAnalysisRule(
    args: DeleteConfiguredTableAnalysisRuleCommandInput,
    cb: (err: any, data?: DeleteConfiguredTableAnalysisRuleCommandOutput) => void
  ): void;
  deleteConfiguredTableAnalysisRule(
    args: DeleteConfiguredTableAnalysisRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteConfiguredTableAnalysisRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteConfiguredTableAssociationCommand}
   */
  deleteConfiguredTableAssociation(
    args: DeleteConfiguredTableAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteConfiguredTableAssociationCommandOutput>;
  deleteConfiguredTableAssociation(
    args: DeleteConfiguredTableAssociationCommandInput,
    cb: (err: any, data?: DeleteConfiguredTableAssociationCommandOutput) => void
  ): void;
  deleteConfiguredTableAssociation(
    args: DeleteConfiguredTableAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteConfiguredTableAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteMemberCommand}
   */
  deleteMember(args: DeleteMemberCommandInput, options?: __HttpHandlerOptions): Promise<DeleteMemberCommandOutput>;
  deleteMember(args: DeleteMemberCommandInput, cb: (err: any, data?: DeleteMemberCommandOutput) => void): void;
  deleteMember(
    args: DeleteMemberCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteMemberCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteMembershipCommand}
   */
  deleteMembership(
    args: DeleteMembershipCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteMembershipCommandOutput>;
  deleteMembership(
    args: DeleteMembershipCommandInput,
    cb: (err: any, data?: DeleteMembershipCommandOutput) => void
  ): void;
  deleteMembership(
    args: DeleteMembershipCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteMembershipCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCollaborationCommand}
   */
  getCollaboration(
    args: GetCollaborationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCollaborationCommandOutput>;
  getCollaboration(
    args: GetCollaborationCommandInput,
    cb: (err: any, data?: GetCollaborationCommandOutput) => void
  ): void;
  getCollaboration(
    args: GetCollaborationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCollaborationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetConfiguredTableCommand}
   */
  getConfiguredTable(
    args: GetConfiguredTableCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetConfiguredTableCommandOutput>;
  getConfiguredTable(
    args: GetConfiguredTableCommandInput,
    cb: (err: any, data?: GetConfiguredTableCommandOutput) => void
  ): void;
  getConfiguredTable(
    args: GetConfiguredTableCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetConfiguredTableCommandOutput) => void
  ): void;

  /**
   * @see {@link GetConfiguredTableAnalysisRuleCommand}
   */
  getConfiguredTableAnalysisRule(
    args: GetConfiguredTableAnalysisRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetConfiguredTableAnalysisRuleCommandOutput>;
  getConfiguredTableAnalysisRule(
    args: GetConfiguredTableAnalysisRuleCommandInput,
    cb: (err: any, data?: GetConfiguredTableAnalysisRuleCommandOutput) => void
  ): void;
  getConfiguredTableAnalysisRule(
    args: GetConfiguredTableAnalysisRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetConfiguredTableAnalysisRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link GetConfiguredTableAssociationCommand}
   */
  getConfiguredTableAssociation(
    args: GetConfiguredTableAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetConfiguredTableAssociationCommandOutput>;
  getConfiguredTableAssociation(
    args: GetConfiguredTableAssociationCommandInput,
    cb: (err: any, data?: GetConfiguredTableAssociationCommandOutput) => void
  ): void;
  getConfiguredTableAssociation(
    args: GetConfiguredTableAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetConfiguredTableAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetMembershipCommand}
   */
  getMembership(args: GetMembershipCommandInput, options?: __HttpHandlerOptions): Promise<GetMembershipCommandOutput>;
  getMembership(args: GetMembershipCommandInput, cb: (err: any, data?: GetMembershipCommandOutput) => void): void;
  getMembership(
    args: GetMembershipCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMembershipCommandOutput) => void
  ): void;

  /**
   * @see {@link GetProtectedQueryCommand}
   */
  getProtectedQuery(
    args: GetProtectedQueryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetProtectedQueryCommandOutput>;
  getProtectedQuery(
    args: GetProtectedQueryCommandInput,
    cb: (err: any, data?: GetProtectedQueryCommandOutput) => void
  ): void;
  getProtectedQuery(
    args: GetProtectedQueryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetProtectedQueryCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSchemaCommand}
   */
  getSchema(args: GetSchemaCommandInput, options?: __HttpHandlerOptions): Promise<GetSchemaCommandOutput>;
  getSchema(args: GetSchemaCommandInput, cb: (err: any, data?: GetSchemaCommandOutput) => void): void;
  getSchema(
    args: GetSchemaCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSchemaCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSchemaAnalysisRuleCommand}
   */
  getSchemaAnalysisRule(
    args: GetSchemaAnalysisRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSchemaAnalysisRuleCommandOutput>;
  getSchemaAnalysisRule(
    args: GetSchemaAnalysisRuleCommandInput,
    cb: (err: any, data?: GetSchemaAnalysisRuleCommandOutput) => void
  ): void;
  getSchemaAnalysisRule(
    args: GetSchemaAnalysisRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSchemaAnalysisRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCollaborationsCommand}
   */
  listCollaborations(
    args: ListCollaborationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCollaborationsCommandOutput>;
  listCollaborations(
    args: ListCollaborationsCommandInput,
    cb: (err: any, data?: ListCollaborationsCommandOutput) => void
  ): void;
  listCollaborations(
    args: ListCollaborationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCollaborationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListConfiguredTableAssociationsCommand}
   */
  listConfiguredTableAssociations(
    args: ListConfiguredTableAssociationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListConfiguredTableAssociationsCommandOutput>;
  listConfiguredTableAssociations(
    args: ListConfiguredTableAssociationsCommandInput,
    cb: (err: any, data?: ListConfiguredTableAssociationsCommandOutput) => void
  ): void;
  listConfiguredTableAssociations(
    args: ListConfiguredTableAssociationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListConfiguredTableAssociationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListConfiguredTablesCommand}
   */
  listConfiguredTables(
    args: ListConfiguredTablesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListConfiguredTablesCommandOutput>;
  listConfiguredTables(
    args: ListConfiguredTablesCommandInput,
    cb: (err: any, data?: ListConfiguredTablesCommandOutput) => void
  ): void;
  listConfiguredTables(
    args: ListConfiguredTablesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListConfiguredTablesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListMembersCommand}
   */
  listMembers(args: ListMembersCommandInput, options?: __HttpHandlerOptions): Promise<ListMembersCommandOutput>;
  listMembers(args: ListMembersCommandInput, cb: (err: any, data?: ListMembersCommandOutput) => void): void;
  listMembers(
    args: ListMembersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListMembersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListMembershipsCommand}
   */
  listMemberships(
    args: ListMembershipsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListMembershipsCommandOutput>;
  listMemberships(args: ListMembershipsCommandInput, cb: (err: any, data?: ListMembershipsCommandOutput) => void): void;
  listMemberships(
    args: ListMembershipsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListMembershipsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListProtectedQueriesCommand}
   */
  listProtectedQueries(
    args: ListProtectedQueriesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListProtectedQueriesCommandOutput>;
  listProtectedQueries(
    args: ListProtectedQueriesCommandInput,
    cb: (err: any, data?: ListProtectedQueriesCommandOutput) => void
  ): void;
  listProtectedQueries(
    args: ListProtectedQueriesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListProtectedQueriesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSchemasCommand}
   */
  listSchemas(args: ListSchemasCommandInput, options?: __HttpHandlerOptions): Promise<ListSchemasCommandOutput>;
  listSchemas(args: ListSchemasCommandInput, cb: (err: any, data?: ListSchemasCommandOutput) => void): void;
  listSchemas(
    args: ListSchemasCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSchemasCommandOutput) => void
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
   * @see {@link StartProtectedQueryCommand}
   */
  startProtectedQuery(
    args: StartProtectedQueryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartProtectedQueryCommandOutput>;
  startProtectedQuery(
    args: StartProtectedQueryCommandInput,
    cb: (err: any, data?: StartProtectedQueryCommandOutput) => void
  ): void;
  startProtectedQuery(
    args: StartProtectedQueryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartProtectedQueryCommandOutput) => void
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
   * @see {@link UpdateCollaborationCommand}
   */
  updateCollaboration(
    args: UpdateCollaborationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateCollaborationCommandOutput>;
  updateCollaboration(
    args: UpdateCollaborationCommandInput,
    cb: (err: any, data?: UpdateCollaborationCommandOutput) => void
  ): void;
  updateCollaboration(
    args: UpdateCollaborationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateCollaborationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateConfiguredTableCommand}
   */
  updateConfiguredTable(
    args: UpdateConfiguredTableCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateConfiguredTableCommandOutput>;
  updateConfiguredTable(
    args: UpdateConfiguredTableCommandInput,
    cb: (err: any, data?: UpdateConfiguredTableCommandOutput) => void
  ): void;
  updateConfiguredTable(
    args: UpdateConfiguredTableCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateConfiguredTableCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateConfiguredTableAnalysisRuleCommand}
   */
  updateConfiguredTableAnalysisRule(
    args: UpdateConfiguredTableAnalysisRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateConfiguredTableAnalysisRuleCommandOutput>;
  updateConfiguredTableAnalysisRule(
    args: UpdateConfiguredTableAnalysisRuleCommandInput,
    cb: (err: any, data?: UpdateConfiguredTableAnalysisRuleCommandOutput) => void
  ): void;
  updateConfiguredTableAnalysisRule(
    args: UpdateConfiguredTableAnalysisRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateConfiguredTableAnalysisRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateConfiguredTableAssociationCommand}
   */
  updateConfiguredTableAssociation(
    args: UpdateConfiguredTableAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateConfiguredTableAssociationCommandOutput>;
  updateConfiguredTableAssociation(
    args: UpdateConfiguredTableAssociationCommandInput,
    cb: (err: any, data?: UpdateConfiguredTableAssociationCommandOutput) => void
  ): void;
  updateConfiguredTableAssociation(
    args: UpdateConfiguredTableAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateConfiguredTableAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateMembershipCommand}
   */
  updateMembership(
    args: UpdateMembershipCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateMembershipCommandOutput>;
  updateMembership(
    args: UpdateMembershipCommandInput,
    cb: (err: any, data?: UpdateMembershipCommandOutput) => void
  ): void;
  updateMembership(
    args: UpdateMembershipCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateMembershipCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateProtectedQueryCommand}
   */
  updateProtectedQuery(
    args: UpdateProtectedQueryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateProtectedQueryCommandOutput>;
  updateProtectedQuery(
    args: UpdateProtectedQueryCommandInput,
    cb: (err: any, data?: UpdateProtectedQueryCommandOutput) => void
  ): void;
  updateProtectedQuery(
    args: UpdateProtectedQueryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateProtectedQueryCommandOutput) => void
  ): void;
}

/**
 * @public
 * <p>Welcome to the <i>Clean Rooms API Reference</i>.</p>
 *          <p>Clean Rooms  is an Amazon Web Services service that helps multiple parties to join their data
 *          together in a secure collaboration workspace. In the collaboration, members who can query
 *          and receive results can get insights into the collective datasets without either party getting
 *          access to the other party's raw data.</p>
 *          <p>To learn more about Clean Rooms  concepts, procedures, and best practices, see the
 *          <a href="https://docs.aws.amazon.com/clean-rooms/latest/userguide/what-is.html">Clean Rooms User Guide</a>.</p>
 */
export class CleanRooms extends CleanRoomsClient implements CleanRooms {}
createAggregatedClient(commands, CleanRooms);
