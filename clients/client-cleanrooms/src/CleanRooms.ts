// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import { CleanRoomsClient } from "./CleanRoomsClient";
import {
  BatchGetCollaborationAnalysisTemplateCommand,
  BatchGetCollaborationAnalysisTemplateCommandInput,
  BatchGetCollaborationAnalysisTemplateCommandOutput,
} from "./commands/BatchGetCollaborationAnalysisTemplateCommand";
import {
  BatchGetSchemaAnalysisRuleCommand,
  BatchGetSchemaAnalysisRuleCommandInput,
  BatchGetSchemaAnalysisRuleCommandOutput,
} from "./commands/BatchGetSchemaAnalysisRuleCommand";
import {
  BatchGetSchemaCommand,
  BatchGetSchemaCommandInput,
  BatchGetSchemaCommandOutput,
} from "./commands/BatchGetSchemaCommand";
import {
  CreateAnalysisTemplateCommand,
  CreateAnalysisTemplateCommandInput,
  CreateAnalysisTemplateCommandOutput,
} from "./commands/CreateAnalysisTemplateCommand";
import {
  CreateCollaborationChangeRequestCommand,
  CreateCollaborationChangeRequestCommandInput,
  CreateCollaborationChangeRequestCommandOutput,
} from "./commands/CreateCollaborationChangeRequestCommand";
import {
  CreateCollaborationCommand,
  CreateCollaborationCommandInput,
  CreateCollaborationCommandOutput,
} from "./commands/CreateCollaborationCommand";
import {
  CreateConfiguredAudienceModelAssociationCommand,
  CreateConfiguredAudienceModelAssociationCommandInput,
  CreateConfiguredAudienceModelAssociationCommandOutput,
} from "./commands/CreateConfiguredAudienceModelAssociationCommand";
import {
  CreateConfiguredTableAnalysisRuleCommand,
  CreateConfiguredTableAnalysisRuleCommandInput,
  CreateConfiguredTableAnalysisRuleCommandOutput,
} from "./commands/CreateConfiguredTableAnalysisRuleCommand";
import {
  CreateConfiguredTableAssociationAnalysisRuleCommand,
  CreateConfiguredTableAssociationAnalysisRuleCommandInput,
  CreateConfiguredTableAssociationAnalysisRuleCommandOutput,
} from "./commands/CreateConfiguredTableAssociationAnalysisRuleCommand";
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
  CreateIdMappingTableCommand,
  CreateIdMappingTableCommandInput,
  CreateIdMappingTableCommandOutput,
} from "./commands/CreateIdMappingTableCommand";
import {
  CreateIdNamespaceAssociationCommand,
  CreateIdNamespaceAssociationCommandInput,
  CreateIdNamespaceAssociationCommandOutput,
} from "./commands/CreateIdNamespaceAssociationCommand";
import {
  CreateMembershipCommand,
  CreateMembershipCommandInput,
  CreateMembershipCommandOutput,
} from "./commands/CreateMembershipCommand";
import {
  CreatePrivacyBudgetTemplateCommand,
  CreatePrivacyBudgetTemplateCommandInput,
  CreatePrivacyBudgetTemplateCommandOutput,
} from "./commands/CreatePrivacyBudgetTemplateCommand";
import {
  DeleteAnalysisTemplateCommand,
  DeleteAnalysisTemplateCommandInput,
  DeleteAnalysisTemplateCommandOutput,
} from "./commands/DeleteAnalysisTemplateCommand";
import {
  DeleteCollaborationCommand,
  DeleteCollaborationCommandInput,
  DeleteCollaborationCommandOutput,
} from "./commands/DeleteCollaborationCommand";
import {
  DeleteConfiguredAudienceModelAssociationCommand,
  DeleteConfiguredAudienceModelAssociationCommandInput,
  DeleteConfiguredAudienceModelAssociationCommandOutput,
} from "./commands/DeleteConfiguredAudienceModelAssociationCommand";
import {
  DeleteConfiguredTableAnalysisRuleCommand,
  DeleteConfiguredTableAnalysisRuleCommandInput,
  DeleteConfiguredTableAnalysisRuleCommandOutput,
} from "./commands/DeleteConfiguredTableAnalysisRuleCommand";
import {
  DeleteConfiguredTableAssociationAnalysisRuleCommand,
  DeleteConfiguredTableAssociationAnalysisRuleCommandInput,
  DeleteConfiguredTableAssociationAnalysisRuleCommandOutput,
} from "./commands/DeleteConfiguredTableAssociationAnalysisRuleCommand";
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
  DeleteIdMappingTableCommand,
  DeleteIdMappingTableCommandInput,
  DeleteIdMappingTableCommandOutput,
} from "./commands/DeleteIdMappingTableCommand";
import {
  DeleteIdNamespaceAssociationCommand,
  DeleteIdNamespaceAssociationCommandInput,
  DeleteIdNamespaceAssociationCommandOutput,
} from "./commands/DeleteIdNamespaceAssociationCommand";
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
  DeletePrivacyBudgetTemplateCommand,
  DeletePrivacyBudgetTemplateCommandInput,
  DeletePrivacyBudgetTemplateCommandOutput,
} from "./commands/DeletePrivacyBudgetTemplateCommand";
import {
  GetAnalysisTemplateCommand,
  GetAnalysisTemplateCommandInput,
  GetAnalysisTemplateCommandOutput,
} from "./commands/GetAnalysisTemplateCommand";
import {
  GetCollaborationAnalysisTemplateCommand,
  GetCollaborationAnalysisTemplateCommandInput,
  GetCollaborationAnalysisTemplateCommandOutput,
} from "./commands/GetCollaborationAnalysisTemplateCommand";
import {
  GetCollaborationChangeRequestCommand,
  GetCollaborationChangeRequestCommandInput,
  GetCollaborationChangeRequestCommandOutput,
} from "./commands/GetCollaborationChangeRequestCommand";
import {
  GetCollaborationCommand,
  GetCollaborationCommandInput,
  GetCollaborationCommandOutput,
} from "./commands/GetCollaborationCommand";
import {
  GetCollaborationConfiguredAudienceModelAssociationCommand,
  GetCollaborationConfiguredAudienceModelAssociationCommandInput,
  GetCollaborationConfiguredAudienceModelAssociationCommandOutput,
} from "./commands/GetCollaborationConfiguredAudienceModelAssociationCommand";
import {
  GetCollaborationIdNamespaceAssociationCommand,
  GetCollaborationIdNamespaceAssociationCommandInput,
  GetCollaborationIdNamespaceAssociationCommandOutput,
} from "./commands/GetCollaborationIdNamespaceAssociationCommand";
import {
  GetCollaborationPrivacyBudgetTemplateCommand,
  GetCollaborationPrivacyBudgetTemplateCommandInput,
  GetCollaborationPrivacyBudgetTemplateCommandOutput,
} from "./commands/GetCollaborationPrivacyBudgetTemplateCommand";
import {
  GetConfiguredAudienceModelAssociationCommand,
  GetConfiguredAudienceModelAssociationCommandInput,
  GetConfiguredAudienceModelAssociationCommandOutput,
} from "./commands/GetConfiguredAudienceModelAssociationCommand";
import {
  GetConfiguredTableAnalysisRuleCommand,
  GetConfiguredTableAnalysisRuleCommandInput,
  GetConfiguredTableAnalysisRuleCommandOutput,
} from "./commands/GetConfiguredTableAnalysisRuleCommand";
import {
  GetConfiguredTableAssociationAnalysisRuleCommand,
  GetConfiguredTableAssociationAnalysisRuleCommandInput,
  GetConfiguredTableAssociationAnalysisRuleCommandOutput,
} from "./commands/GetConfiguredTableAssociationAnalysisRuleCommand";
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
  GetIdMappingTableCommand,
  GetIdMappingTableCommandInput,
  GetIdMappingTableCommandOutput,
} from "./commands/GetIdMappingTableCommand";
import {
  GetIdNamespaceAssociationCommand,
  GetIdNamespaceAssociationCommandInput,
  GetIdNamespaceAssociationCommandOutput,
} from "./commands/GetIdNamespaceAssociationCommand";
import {
  GetMembershipCommand,
  GetMembershipCommandInput,
  GetMembershipCommandOutput,
} from "./commands/GetMembershipCommand";
import {
  GetPrivacyBudgetTemplateCommand,
  GetPrivacyBudgetTemplateCommandInput,
  GetPrivacyBudgetTemplateCommandOutput,
} from "./commands/GetPrivacyBudgetTemplateCommand";
import {
  GetProtectedJobCommand,
  GetProtectedJobCommandInput,
  GetProtectedJobCommandOutput,
} from "./commands/GetProtectedJobCommand";
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
  ListAnalysisTemplatesCommand,
  ListAnalysisTemplatesCommandInput,
  ListAnalysisTemplatesCommandOutput,
} from "./commands/ListAnalysisTemplatesCommand";
import {
  ListCollaborationAnalysisTemplatesCommand,
  ListCollaborationAnalysisTemplatesCommandInput,
  ListCollaborationAnalysisTemplatesCommandOutput,
} from "./commands/ListCollaborationAnalysisTemplatesCommand";
import {
  ListCollaborationChangeRequestsCommand,
  ListCollaborationChangeRequestsCommandInput,
  ListCollaborationChangeRequestsCommandOutput,
} from "./commands/ListCollaborationChangeRequestsCommand";
import {
  ListCollaborationConfiguredAudienceModelAssociationsCommand,
  ListCollaborationConfiguredAudienceModelAssociationsCommandInput,
  ListCollaborationConfiguredAudienceModelAssociationsCommandOutput,
} from "./commands/ListCollaborationConfiguredAudienceModelAssociationsCommand";
import {
  ListCollaborationIdNamespaceAssociationsCommand,
  ListCollaborationIdNamespaceAssociationsCommandInput,
  ListCollaborationIdNamespaceAssociationsCommandOutput,
} from "./commands/ListCollaborationIdNamespaceAssociationsCommand";
import {
  ListCollaborationPrivacyBudgetsCommand,
  ListCollaborationPrivacyBudgetsCommandInput,
  ListCollaborationPrivacyBudgetsCommandOutput,
} from "./commands/ListCollaborationPrivacyBudgetsCommand";
import {
  ListCollaborationPrivacyBudgetTemplatesCommand,
  ListCollaborationPrivacyBudgetTemplatesCommandInput,
  ListCollaborationPrivacyBudgetTemplatesCommandOutput,
} from "./commands/ListCollaborationPrivacyBudgetTemplatesCommand";
import {
  ListCollaborationsCommand,
  ListCollaborationsCommandInput,
  ListCollaborationsCommandOutput,
} from "./commands/ListCollaborationsCommand";
import {
  ListConfiguredAudienceModelAssociationsCommand,
  ListConfiguredAudienceModelAssociationsCommandInput,
  ListConfiguredAudienceModelAssociationsCommandOutput,
} from "./commands/ListConfiguredAudienceModelAssociationsCommand";
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
import {
  ListIdMappingTablesCommand,
  ListIdMappingTablesCommandInput,
  ListIdMappingTablesCommandOutput,
} from "./commands/ListIdMappingTablesCommand";
import {
  ListIdNamespaceAssociationsCommand,
  ListIdNamespaceAssociationsCommandInput,
  ListIdNamespaceAssociationsCommandOutput,
} from "./commands/ListIdNamespaceAssociationsCommand";
import { ListMembersCommand, ListMembersCommandInput, ListMembersCommandOutput } from "./commands/ListMembersCommand";
import {
  ListMembershipsCommand,
  ListMembershipsCommandInput,
  ListMembershipsCommandOutput,
} from "./commands/ListMembershipsCommand";
import {
  ListPrivacyBudgetsCommand,
  ListPrivacyBudgetsCommandInput,
  ListPrivacyBudgetsCommandOutput,
} from "./commands/ListPrivacyBudgetsCommand";
import {
  ListPrivacyBudgetTemplatesCommand,
  ListPrivacyBudgetTemplatesCommandInput,
  ListPrivacyBudgetTemplatesCommandOutput,
} from "./commands/ListPrivacyBudgetTemplatesCommand";
import {
  ListProtectedJobsCommand,
  ListProtectedJobsCommandInput,
  ListProtectedJobsCommandOutput,
} from "./commands/ListProtectedJobsCommand";
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
  PopulateIdMappingTableCommand,
  PopulateIdMappingTableCommandInput,
  PopulateIdMappingTableCommandOutput,
} from "./commands/PopulateIdMappingTableCommand";
import {
  PreviewPrivacyImpactCommand,
  PreviewPrivacyImpactCommandInput,
  PreviewPrivacyImpactCommandOutput,
} from "./commands/PreviewPrivacyImpactCommand";
import {
  StartProtectedJobCommand,
  StartProtectedJobCommandInput,
  StartProtectedJobCommandOutput,
} from "./commands/StartProtectedJobCommand";
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
  UpdateAnalysisTemplateCommand,
  UpdateAnalysisTemplateCommandInput,
  UpdateAnalysisTemplateCommandOutput,
} from "./commands/UpdateAnalysisTemplateCommand";
import {
  UpdateCollaborationChangeRequestCommand,
  UpdateCollaborationChangeRequestCommandInput,
  UpdateCollaborationChangeRequestCommandOutput,
} from "./commands/UpdateCollaborationChangeRequestCommand";
import {
  UpdateCollaborationCommand,
  UpdateCollaborationCommandInput,
  UpdateCollaborationCommandOutput,
} from "./commands/UpdateCollaborationCommand";
import {
  UpdateConfiguredAudienceModelAssociationCommand,
  UpdateConfiguredAudienceModelAssociationCommandInput,
  UpdateConfiguredAudienceModelAssociationCommandOutput,
} from "./commands/UpdateConfiguredAudienceModelAssociationCommand";
import {
  UpdateConfiguredTableAnalysisRuleCommand,
  UpdateConfiguredTableAnalysisRuleCommandInput,
  UpdateConfiguredTableAnalysisRuleCommandOutput,
} from "./commands/UpdateConfiguredTableAnalysisRuleCommand";
import {
  UpdateConfiguredTableAssociationAnalysisRuleCommand,
  UpdateConfiguredTableAssociationAnalysisRuleCommandInput,
  UpdateConfiguredTableAssociationAnalysisRuleCommandOutput,
} from "./commands/UpdateConfiguredTableAssociationAnalysisRuleCommand";
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
  UpdateIdMappingTableCommand,
  UpdateIdMappingTableCommandInput,
  UpdateIdMappingTableCommandOutput,
} from "./commands/UpdateIdMappingTableCommand";
import {
  UpdateIdNamespaceAssociationCommand,
  UpdateIdNamespaceAssociationCommandInput,
  UpdateIdNamespaceAssociationCommandOutput,
} from "./commands/UpdateIdNamespaceAssociationCommand";
import {
  UpdateMembershipCommand,
  UpdateMembershipCommandInput,
  UpdateMembershipCommandOutput,
} from "./commands/UpdateMembershipCommand";
import {
  UpdatePrivacyBudgetTemplateCommand,
  UpdatePrivacyBudgetTemplateCommandInput,
  UpdatePrivacyBudgetTemplateCommandOutput,
} from "./commands/UpdatePrivacyBudgetTemplateCommand";
import {
  UpdateProtectedJobCommand,
  UpdateProtectedJobCommandInput,
  UpdateProtectedJobCommandOutput,
} from "./commands/UpdateProtectedJobCommand";
import {
  UpdateProtectedQueryCommand,
  UpdateProtectedQueryCommandInput,
  UpdateProtectedQueryCommandOutput,
} from "./commands/UpdateProtectedQueryCommand";

const commands = {
  BatchGetCollaborationAnalysisTemplateCommand,
  BatchGetSchemaCommand,
  BatchGetSchemaAnalysisRuleCommand,
  CreateAnalysisTemplateCommand,
  CreateCollaborationCommand,
  CreateCollaborationChangeRequestCommand,
  CreateConfiguredAudienceModelAssociationCommand,
  CreateConfiguredTableCommand,
  CreateConfiguredTableAnalysisRuleCommand,
  CreateConfiguredTableAssociationCommand,
  CreateConfiguredTableAssociationAnalysisRuleCommand,
  CreateIdMappingTableCommand,
  CreateIdNamespaceAssociationCommand,
  CreateMembershipCommand,
  CreatePrivacyBudgetTemplateCommand,
  DeleteAnalysisTemplateCommand,
  DeleteCollaborationCommand,
  DeleteConfiguredAudienceModelAssociationCommand,
  DeleteConfiguredTableCommand,
  DeleteConfiguredTableAnalysisRuleCommand,
  DeleteConfiguredTableAssociationCommand,
  DeleteConfiguredTableAssociationAnalysisRuleCommand,
  DeleteIdMappingTableCommand,
  DeleteIdNamespaceAssociationCommand,
  DeleteMemberCommand,
  DeleteMembershipCommand,
  DeletePrivacyBudgetTemplateCommand,
  GetAnalysisTemplateCommand,
  GetCollaborationCommand,
  GetCollaborationAnalysisTemplateCommand,
  GetCollaborationChangeRequestCommand,
  GetCollaborationConfiguredAudienceModelAssociationCommand,
  GetCollaborationIdNamespaceAssociationCommand,
  GetCollaborationPrivacyBudgetTemplateCommand,
  GetConfiguredAudienceModelAssociationCommand,
  GetConfiguredTableCommand,
  GetConfiguredTableAnalysisRuleCommand,
  GetConfiguredTableAssociationCommand,
  GetConfiguredTableAssociationAnalysisRuleCommand,
  GetIdMappingTableCommand,
  GetIdNamespaceAssociationCommand,
  GetMembershipCommand,
  GetPrivacyBudgetTemplateCommand,
  GetProtectedJobCommand,
  GetProtectedQueryCommand,
  GetSchemaCommand,
  GetSchemaAnalysisRuleCommand,
  ListAnalysisTemplatesCommand,
  ListCollaborationAnalysisTemplatesCommand,
  ListCollaborationChangeRequestsCommand,
  ListCollaborationConfiguredAudienceModelAssociationsCommand,
  ListCollaborationIdNamespaceAssociationsCommand,
  ListCollaborationPrivacyBudgetsCommand,
  ListCollaborationPrivacyBudgetTemplatesCommand,
  ListCollaborationsCommand,
  ListConfiguredAudienceModelAssociationsCommand,
  ListConfiguredTableAssociationsCommand,
  ListConfiguredTablesCommand,
  ListIdMappingTablesCommand,
  ListIdNamespaceAssociationsCommand,
  ListMembersCommand,
  ListMembershipsCommand,
  ListPrivacyBudgetsCommand,
  ListPrivacyBudgetTemplatesCommand,
  ListProtectedJobsCommand,
  ListProtectedQueriesCommand,
  ListSchemasCommand,
  ListTagsForResourceCommand,
  PopulateIdMappingTableCommand,
  PreviewPrivacyImpactCommand,
  StartProtectedJobCommand,
  StartProtectedQueryCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateAnalysisTemplateCommand,
  UpdateCollaborationCommand,
  UpdateCollaborationChangeRequestCommand,
  UpdateConfiguredAudienceModelAssociationCommand,
  UpdateConfiguredTableCommand,
  UpdateConfiguredTableAnalysisRuleCommand,
  UpdateConfiguredTableAssociationCommand,
  UpdateConfiguredTableAssociationAnalysisRuleCommand,
  UpdateIdMappingTableCommand,
  UpdateIdNamespaceAssociationCommand,
  UpdateMembershipCommand,
  UpdatePrivacyBudgetTemplateCommand,
  UpdateProtectedJobCommand,
  UpdateProtectedQueryCommand,
};

export interface CleanRooms {
  /**
   * @see {@link BatchGetCollaborationAnalysisTemplateCommand}
   */
  batchGetCollaborationAnalysisTemplate(
    args: BatchGetCollaborationAnalysisTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGetCollaborationAnalysisTemplateCommandOutput>;
  batchGetCollaborationAnalysisTemplate(
    args: BatchGetCollaborationAnalysisTemplateCommandInput,
    cb: (err: any, data?: BatchGetCollaborationAnalysisTemplateCommandOutput) => void
  ): void;
  batchGetCollaborationAnalysisTemplate(
    args: BatchGetCollaborationAnalysisTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetCollaborationAnalysisTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchGetSchemaCommand}
   */
  batchGetSchema(
    args: BatchGetSchemaCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGetSchemaCommandOutput>;
  batchGetSchema(
    args: BatchGetSchemaCommandInput,
    cb: (err: any, data?: BatchGetSchemaCommandOutput) => void
  ): void;
  batchGetSchema(
    args: BatchGetSchemaCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetSchemaCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchGetSchemaAnalysisRuleCommand}
   */
  batchGetSchemaAnalysisRule(
    args: BatchGetSchemaAnalysisRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGetSchemaAnalysisRuleCommandOutput>;
  batchGetSchemaAnalysisRule(
    args: BatchGetSchemaAnalysisRuleCommandInput,
    cb: (err: any, data?: BatchGetSchemaAnalysisRuleCommandOutput) => void
  ): void;
  batchGetSchemaAnalysisRule(
    args: BatchGetSchemaAnalysisRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetSchemaAnalysisRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateAnalysisTemplateCommand}
   */
  createAnalysisTemplate(
    args: CreateAnalysisTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAnalysisTemplateCommandOutput>;
  createAnalysisTemplate(
    args: CreateAnalysisTemplateCommandInput,
    cb: (err: any, data?: CreateAnalysisTemplateCommandOutput) => void
  ): void;
  createAnalysisTemplate(
    args: CreateAnalysisTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAnalysisTemplateCommandOutput) => void
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
   * @see {@link CreateCollaborationChangeRequestCommand}
   */
  createCollaborationChangeRequest(
    args: CreateCollaborationChangeRequestCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateCollaborationChangeRequestCommandOutput>;
  createCollaborationChangeRequest(
    args: CreateCollaborationChangeRequestCommandInput,
    cb: (err: any, data?: CreateCollaborationChangeRequestCommandOutput) => void
  ): void;
  createCollaborationChangeRequest(
    args: CreateCollaborationChangeRequestCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateCollaborationChangeRequestCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateConfiguredAudienceModelAssociationCommand}
   */
  createConfiguredAudienceModelAssociation(
    args: CreateConfiguredAudienceModelAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateConfiguredAudienceModelAssociationCommandOutput>;
  createConfiguredAudienceModelAssociation(
    args: CreateConfiguredAudienceModelAssociationCommandInput,
    cb: (err: any, data?: CreateConfiguredAudienceModelAssociationCommandOutput) => void
  ): void;
  createConfiguredAudienceModelAssociation(
    args: CreateConfiguredAudienceModelAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateConfiguredAudienceModelAssociationCommandOutput) => void
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
   * @see {@link CreateConfiguredTableAssociationAnalysisRuleCommand}
   */
  createConfiguredTableAssociationAnalysisRule(
    args: CreateConfiguredTableAssociationAnalysisRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateConfiguredTableAssociationAnalysisRuleCommandOutput>;
  createConfiguredTableAssociationAnalysisRule(
    args: CreateConfiguredTableAssociationAnalysisRuleCommandInput,
    cb: (err: any, data?: CreateConfiguredTableAssociationAnalysisRuleCommandOutput) => void
  ): void;
  createConfiguredTableAssociationAnalysisRule(
    args: CreateConfiguredTableAssociationAnalysisRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateConfiguredTableAssociationAnalysisRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateIdMappingTableCommand}
   */
  createIdMappingTable(
    args: CreateIdMappingTableCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateIdMappingTableCommandOutput>;
  createIdMappingTable(
    args: CreateIdMappingTableCommandInput,
    cb: (err: any, data?: CreateIdMappingTableCommandOutput) => void
  ): void;
  createIdMappingTable(
    args: CreateIdMappingTableCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateIdMappingTableCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateIdNamespaceAssociationCommand}
   */
  createIdNamespaceAssociation(
    args: CreateIdNamespaceAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateIdNamespaceAssociationCommandOutput>;
  createIdNamespaceAssociation(
    args: CreateIdNamespaceAssociationCommandInput,
    cb: (err: any, data?: CreateIdNamespaceAssociationCommandOutput) => void
  ): void;
  createIdNamespaceAssociation(
    args: CreateIdNamespaceAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateIdNamespaceAssociationCommandOutput) => void
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
   * @see {@link CreatePrivacyBudgetTemplateCommand}
   */
  createPrivacyBudgetTemplate(
    args: CreatePrivacyBudgetTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreatePrivacyBudgetTemplateCommandOutput>;
  createPrivacyBudgetTemplate(
    args: CreatePrivacyBudgetTemplateCommandInput,
    cb: (err: any, data?: CreatePrivacyBudgetTemplateCommandOutput) => void
  ): void;
  createPrivacyBudgetTemplate(
    args: CreatePrivacyBudgetTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePrivacyBudgetTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAnalysisTemplateCommand}
   */
  deleteAnalysisTemplate(
    args: DeleteAnalysisTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAnalysisTemplateCommandOutput>;
  deleteAnalysisTemplate(
    args: DeleteAnalysisTemplateCommandInput,
    cb: (err: any, data?: DeleteAnalysisTemplateCommandOutput) => void
  ): void;
  deleteAnalysisTemplate(
    args: DeleteAnalysisTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAnalysisTemplateCommandOutput) => void
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
   * @see {@link DeleteConfiguredAudienceModelAssociationCommand}
   */
  deleteConfiguredAudienceModelAssociation(
    args: DeleteConfiguredAudienceModelAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteConfiguredAudienceModelAssociationCommandOutput>;
  deleteConfiguredAudienceModelAssociation(
    args: DeleteConfiguredAudienceModelAssociationCommandInput,
    cb: (err: any, data?: DeleteConfiguredAudienceModelAssociationCommandOutput) => void
  ): void;
  deleteConfiguredAudienceModelAssociation(
    args: DeleteConfiguredAudienceModelAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteConfiguredAudienceModelAssociationCommandOutput) => void
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
   * @see {@link DeleteConfiguredTableAssociationAnalysisRuleCommand}
   */
  deleteConfiguredTableAssociationAnalysisRule(
    args: DeleteConfiguredTableAssociationAnalysisRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteConfiguredTableAssociationAnalysisRuleCommandOutput>;
  deleteConfiguredTableAssociationAnalysisRule(
    args: DeleteConfiguredTableAssociationAnalysisRuleCommandInput,
    cb: (err: any, data?: DeleteConfiguredTableAssociationAnalysisRuleCommandOutput) => void
  ): void;
  deleteConfiguredTableAssociationAnalysisRule(
    args: DeleteConfiguredTableAssociationAnalysisRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteConfiguredTableAssociationAnalysisRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteIdMappingTableCommand}
   */
  deleteIdMappingTable(
    args: DeleteIdMappingTableCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteIdMappingTableCommandOutput>;
  deleteIdMappingTable(
    args: DeleteIdMappingTableCommandInput,
    cb: (err: any, data?: DeleteIdMappingTableCommandOutput) => void
  ): void;
  deleteIdMappingTable(
    args: DeleteIdMappingTableCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteIdMappingTableCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteIdNamespaceAssociationCommand}
   */
  deleteIdNamespaceAssociation(
    args: DeleteIdNamespaceAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteIdNamespaceAssociationCommandOutput>;
  deleteIdNamespaceAssociation(
    args: DeleteIdNamespaceAssociationCommandInput,
    cb: (err: any, data?: DeleteIdNamespaceAssociationCommandOutput) => void
  ): void;
  deleteIdNamespaceAssociation(
    args: DeleteIdNamespaceAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteIdNamespaceAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteMemberCommand}
   */
  deleteMember(
    args: DeleteMemberCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteMemberCommandOutput>;
  deleteMember(
    args: DeleteMemberCommandInput,
    cb: (err: any, data?: DeleteMemberCommandOutput) => void
  ): void;
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
   * @see {@link DeletePrivacyBudgetTemplateCommand}
   */
  deletePrivacyBudgetTemplate(
    args: DeletePrivacyBudgetTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeletePrivacyBudgetTemplateCommandOutput>;
  deletePrivacyBudgetTemplate(
    args: DeletePrivacyBudgetTemplateCommandInput,
    cb: (err: any, data?: DeletePrivacyBudgetTemplateCommandOutput) => void
  ): void;
  deletePrivacyBudgetTemplate(
    args: DeletePrivacyBudgetTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePrivacyBudgetTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAnalysisTemplateCommand}
   */
  getAnalysisTemplate(
    args: GetAnalysisTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAnalysisTemplateCommandOutput>;
  getAnalysisTemplate(
    args: GetAnalysisTemplateCommandInput,
    cb: (err: any, data?: GetAnalysisTemplateCommandOutput) => void
  ): void;
  getAnalysisTemplate(
    args: GetAnalysisTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAnalysisTemplateCommandOutput) => void
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
   * @see {@link GetCollaborationAnalysisTemplateCommand}
   */
  getCollaborationAnalysisTemplate(
    args: GetCollaborationAnalysisTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCollaborationAnalysisTemplateCommandOutput>;
  getCollaborationAnalysisTemplate(
    args: GetCollaborationAnalysisTemplateCommandInput,
    cb: (err: any, data?: GetCollaborationAnalysisTemplateCommandOutput) => void
  ): void;
  getCollaborationAnalysisTemplate(
    args: GetCollaborationAnalysisTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCollaborationAnalysisTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCollaborationChangeRequestCommand}
   */
  getCollaborationChangeRequest(
    args: GetCollaborationChangeRequestCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCollaborationChangeRequestCommandOutput>;
  getCollaborationChangeRequest(
    args: GetCollaborationChangeRequestCommandInput,
    cb: (err: any, data?: GetCollaborationChangeRequestCommandOutput) => void
  ): void;
  getCollaborationChangeRequest(
    args: GetCollaborationChangeRequestCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCollaborationChangeRequestCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCollaborationConfiguredAudienceModelAssociationCommand}
   */
  getCollaborationConfiguredAudienceModelAssociation(
    args: GetCollaborationConfiguredAudienceModelAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCollaborationConfiguredAudienceModelAssociationCommandOutput>;
  getCollaborationConfiguredAudienceModelAssociation(
    args: GetCollaborationConfiguredAudienceModelAssociationCommandInput,
    cb: (err: any, data?: GetCollaborationConfiguredAudienceModelAssociationCommandOutput) => void
  ): void;
  getCollaborationConfiguredAudienceModelAssociation(
    args: GetCollaborationConfiguredAudienceModelAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCollaborationConfiguredAudienceModelAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCollaborationIdNamespaceAssociationCommand}
   */
  getCollaborationIdNamespaceAssociation(
    args: GetCollaborationIdNamespaceAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCollaborationIdNamespaceAssociationCommandOutput>;
  getCollaborationIdNamespaceAssociation(
    args: GetCollaborationIdNamespaceAssociationCommandInput,
    cb: (err: any, data?: GetCollaborationIdNamespaceAssociationCommandOutput) => void
  ): void;
  getCollaborationIdNamespaceAssociation(
    args: GetCollaborationIdNamespaceAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCollaborationIdNamespaceAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCollaborationPrivacyBudgetTemplateCommand}
   */
  getCollaborationPrivacyBudgetTemplate(
    args: GetCollaborationPrivacyBudgetTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCollaborationPrivacyBudgetTemplateCommandOutput>;
  getCollaborationPrivacyBudgetTemplate(
    args: GetCollaborationPrivacyBudgetTemplateCommandInput,
    cb: (err: any, data?: GetCollaborationPrivacyBudgetTemplateCommandOutput) => void
  ): void;
  getCollaborationPrivacyBudgetTemplate(
    args: GetCollaborationPrivacyBudgetTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCollaborationPrivacyBudgetTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link GetConfiguredAudienceModelAssociationCommand}
   */
  getConfiguredAudienceModelAssociation(
    args: GetConfiguredAudienceModelAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetConfiguredAudienceModelAssociationCommandOutput>;
  getConfiguredAudienceModelAssociation(
    args: GetConfiguredAudienceModelAssociationCommandInput,
    cb: (err: any, data?: GetConfiguredAudienceModelAssociationCommandOutput) => void
  ): void;
  getConfiguredAudienceModelAssociation(
    args: GetConfiguredAudienceModelAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetConfiguredAudienceModelAssociationCommandOutput) => void
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
   * @see {@link GetConfiguredTableAssociationAnalysisRuleCommand}
   */
  getConfiguredTableAssociationAnalysisRule(
    args: GetConfiguredTableAssociationAnalysisRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetConfiguredTableAssociationAnalysisRuleCommandOutput>;
  getConfiguredTableAssociationAnalysisRule(
    args: GetConfiguredTableAssociationAnalysisRuleCommandInput,
    cb: (err: any, data?: GetConfiguredTableAssociationAnalysisRuleCommandOutput) => void
  ): void;
  getConfiguredTableAssociationAnalysisRule(
    args: GetConfiguredTableAssociationAnalysisRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetConfiguredTableAssociationAnalysisRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link GetIdMappingTableCommand}
   */
  getIdMappingTable(
    args: GetIdMappingTableCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetIdMappingTableCommandOutput>;
  getIdMappingTable(
    args: GetIdMappingTableCommandInput,
    cb: (err: any, data?: GetIdMappingTableCommandOutput) => void
  ): void;
  getIdMappingTable(
    args: GetIdMappingTableCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetIdMappingTableCommandOutput) => void
  ): void;

  /**
   * @see {@link GetIdNamespaceAssociationCommand}
   */
  getIdNamespaceAssociation(
    args: GetIdNamespaceAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetIdNamespaceAssociationCommandOutput>;
  getIdNamespaceAssociation(
    args: GetIdNamespaceAssociationCommandInput,
    cb: (err: any, data?: GetIdNamespaceAssociationCommandOutput) => void
  ): void;
  getIdNamespaceAssociation(
    args: GetIdNamespaceAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetIdNamespaceAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetMembershipCommand}
   */
  getMembership(
    args: GetMembershipCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetMembershipCommandOutput>;
  getMembership(
    args: GetMembershipCommandInput,
    cb: (err: any, data?: GetMembershipCommandOutput) => void
  ): void;
  getMembership(
    args: GetMembershipCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMembershipCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPrivacyBudgetTemplateCommand}
   */
  getPrivacyBudgetTemplate(
    args: GetPrivacyBudgetTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetPrivacyBudgetTemplateCommandOutput>;
  getPrivacyBudgetTemplate(
    args: GetPrivacyBudgetTemplateCommandInput,
    cb: (err: any, data?: GetPrivacyBudgetTemplateCommandOutput) => void
  ): void;
  getPrivacyBudgetTemplate(
    args: GetPrivacyBudgetTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPrivacyBudgetTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link GetProtectedJobCommand}
   */
  getProtectedJob(
    args: GetProtectedJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetProtectedJobCommandOutput>;
  getProtectedJob(
    args: GetProtectedJobCommandInput,
    cb: (err: any, data?: GetProtectedJobCommandOutput) => void
  ): void;
  getProtectedJob(
    args: GetProtectedJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetProtectedJobCommandOutput) => void
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
  getSchema(
    args: GetSchemaCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSchemaCommandOutput>;
  getSchema(
    args: GetSchemaCommandInput,
    cb: (err: any, data?: GetSchemaCommandOutput) => void
  ): void;
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
   * @see {@link ListAnalysisTemplatesCommand}
   */
  listAnalysisTemplates(
    args: ListAnalysisTemplatesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAnalysisTemplatesCommandOutput>;
  listAnalysisTemplates(
    args: ListAnalysisTemplatesCommandInput,
    cb: (err: any, data?: ListAnalysisTemplatesCommandOutput) => void
  ): void;
  listAnalysisTemplates(
    args: ListAnalysisTemplatesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAnalysisTemplatesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCollaborationAnalysisTemplatesCommand}
   */
  listCollaborationAnalysisTemplates(
    args: ListCollaborationAnalysisTemplatesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCollaborationAnalysisTemplatesCommandOutput>;
  listCollaborationAnalysisTemplates(
    args: ListCollaborationAnalysisTemplatesCommandInput,
    cb: (err: any, data?: ListCollaborationAnalysisTemplatesCommandOutput) => void
  ): void;
  listCollaborationAnalysisTemplates(
    args: ListCollaborationAnalysisTemplatesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCollaborationAnalysisTemplatesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCollaborationChangeRequestsCommand}
   */
  listCollaborationChangeRequests(
    args: ListCollaborationChangeRequestsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCollaborationChangeRequestsCommandOutput>;
  listCollaborationChangeRequests(
    args: ListCollaborationChangeRequestsCommandInput,
    cb: (err: any, data?: ListCollaborationChangeRequestsCommandOutput) => void
  ): void;
  listCollaborationChangeRequests(
    args: ListCollaborationChangeRequestsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCollaborationChangeRequestsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCollaborationConfiguredAudienceModelAssociationsCommand}
   */
  listCollaborationConfiguredAudienceModelAssociations(
    args: ListCollaborationConfiguredAudienceModelAssociationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCollaborationConfiguredAudienceModelAssociationsCommandOutput>;
  listCollaborationConfiguredAudienceModelAssociations(
    args: ListCollaborationConfiguredAudienceModelAssociationsCommandInput,
    cb: (err: any, data?: ListCollaborationConfiguredAudienceModelAssociationsCommandOutput) => void
  ): void;
  listCollaborationConfiguredAudienceModelAssociations(
    args: ListCollaborationConfiguredAudienceModelAssociationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCollaborationConfiguredAudienceModelAssociationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCollaborationIdNamespaceAssociationsCommand}
   */
  listCollaborationIdNamespaceAssociations(
    args: ListCollaborationIdNamespaceAssociationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCollaborationIdNamespaceAssociationsCommandOutput>;
  listCollaborationIdNamespaceAssociations(
    args: ListCollaborationIdNamespaceAssociationsCommandInput,
    cb: (err: any, data?: ListCollaborationIdNamespaceAssociationsCommandOutput) => void
  ): void;
  listCollaborationIdNamespaceAssociations(
    args: ListCollaborationIdNamespaceAssociationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCollaborationIdNamespaceAssociationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCollaborationPrivacyBudgetsCommand}
   */
  listCollaborationPrivacyBudgets(
    args: ListCollaborationPrivacyBudgetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCollaborationPrivacyBudgetsCommandOutput>;
  listCollaborationPrivacyBudgets(
    args: ListCollaborationPrivacyBudgetsCommandInput,
    cb: (err: any, data?: ListCollaborationPrivacyBudgetsCommandOutput) => void
  ): void;
  listCollaborationPrivacyBudgets(
    args: ListCollaborationPrivacyBudgetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCollaborationPrivacyBudgetsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCollaborationPrivacyBudgetTemplatesCommand}
   */
  listCollaborationPrivacyBudgetTemplates(
    args: ListCollaborationPrivacyBudgetTemplatesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCollaborationPrivacyBudgetTemplatesCommandOutput>;
  listCollaborationPrivacyBudgetTemplates(
    args: ListCollaborationPrivacyBudgetTemplatesCommandInput,
    cb: (err: any, data?: ListCollaborationPrivacyBudgetTemplatesCommandOutput) => void
  ): void;
  listCollaborationPrivacyBudgetTemplates(
    args: ListCollaborationPrivacyBudgetTemplatesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCollaborationPrivacyBudgetTemplatesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCollaborationsCommand}
   */
  listCollaborations(): Promise<ListCollaborationsCommandOutput>;
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
   * @see {@link ListConfiguredAudienceModelAssociationsCommand}
   */
  listConfiguredAudienceModelAssociations(
    args: ListConfiguredAudienceModelAssociationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListConfiguredAudienceModelAssociationsCommandOutput>;
  listConfiguredAudienceModelAssociations(
    args: ListConfiguredAudienceModelAssociationsCommandInput,
    cb: (err: any, data?: ListConfiguredAudienceModelAssociationsCommandOutput) => void
  ): void;
  listConfiguredAudienceModelAssociations(
    args: ListConfiguredAudienceModelAssociationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListConfiguredAudienceModelAssociationsCommandOutput) => void
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
  listConfiguredTables(): Promise<ListConfiguredTablesCommandOutput>;
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
   * @see {@link ListIdMappingTablesCommand}
   */
  listIdMappingTables(
    args: ListIdMappingTablesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListIdMappingTablesCommandOutput>;
  listIdMappingTables(
    args: ListIdMappingTablesCommandInput,
    cb: (err: any, data?: ListIdMappingTablesCommandOutput) => void
  ): void;
  listIdMappingTables(
    args: ListIdMappingTablesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListIdMappingTablesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListIdNamespaceAssociationsCommand}
   */
  listIdNamespaceAssociations(
    args: ListIdNamespaceAssociationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListIdNamespaceAssociationsCommandOutput>;
  listIdNamespaceAssociations(
    args: ListIdNamespaceAssociationsCommandInput,
    cb: (err: any, data?: ListIdNamespaceAssociationsCommandOutput) => void
  ): void;
  listIdNamespaceAssociations(
    args: ListIdNamespaceAssociationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListIdNamespaceAssociationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListMembersCommand}
   */
  listMembers(
    args: ListMembersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListMembersCommandOutput>;
  listMembers(
    args: ListMembersCommandInput,
    cb: (err: any, data?: ListMembersCommandOutput) => void
  ): void;
  listMembers(
    args: ListMembersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListMembersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListMembershipsCommand}
   */
  listMemberships(): Promise<ListMembershipsCommandOutput>;
  listMemberships(
    args: ListMembershipsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListMembershipsCommandOutput>;
  listMemberships(
    args: ListMembershipsCommandInput,
    cb: (err: any, data?: ListMembershipsCommandOutput) => void
  ): void;
  listMemberships(
    args: ListMembershipsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListMembershipsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPrivacyBudgetsCommand}
   */
  listPrivacyBudgets(
    args: ListPrivacyBudgetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPrivacyBudgetsCommandOutput>;
  listPrivacyBudgets(
    args: ListPrivacyBudgetsCommandInput,
    cb: (err: any, data?: ListPrivacyBudgetsCommandOutput) => void
  ): void;
  listPrivacyBudgets(
    args: ListPrivacyBudgetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPrivacyBudgetsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPrivacyBudgetTemplatesCommand}
   */
  listPrivacyBudgetTemplates(
    args: ListPrivacyBudgetTemplatesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPrivacyBudgetTemplatesCommandOutput>;
  listPrivacyBudgetTemplates(
    args: ListPrivacyBudgetTemplatesCommandInput,
    cb: (err: any, data?: ListPrivacyBudgetTemplatesCommandOutput) => void
  ): void;
  listPrivacyBudgetTemplates(
    args: ListPrivacyBudgetTemplatesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPrivacyBudgetTemplatesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListProtectedJobsCommand}
   */
  listProtectedJobs(
    args: ListProtectedJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListProtectedJobsCommandOutput>;
  listProtectedJobs(
    args: ListProtectedJobsCommandInput,
    cb: (err: any, data?: ListProtectedJobsCommandOutput) => void
  ): void;
  listProtectedJobs(
    args: ListProtectedJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListProtectedJobsCommandOutput) => void
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
  listSchemas(
    args: ListSchemasCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSchemasCommandOutput>;
  listSchemas(
    args: ListSchemasCommandInput,
    cb: (err: any, data?: ListSchemasCommandOutput) => void
  ): void;
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
   * @see {@link PopulateIdMappingTableCommand}
   */
  populateIdMappingTable(
    args: PopulateIdMappingTableCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PopulateIdMappingTableCommandOutput>;
  populateIdMappingTable(
    args: PopulateIdMappingTableCommandInput,
    cb: (err: any, data?: PopulateIdMappingTableCommandOutput) => void
  ): void;
  populateIdMappingTable(
    args: PopulateIdMappingTableCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PopulateIdMappingTableCommandOutput) => void
  ): void;

  /**
   * @see {@link PreviewPrivacyImpactCommand}
   */
  previewPrivacyImpact(
    args: PreviewPrivacyImpactCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PreviewPrivacyImpactCommandOutput>;
  previewPrivacyImpact(
    args: PreviewPrivacyImpactCommandInput,
    cb: (err: any, data?: PreviewPrivacyImpactCommandOutput) => void
  ): void;
  previewPrivacyImpact(
    args: PreviewPrivacyImpactCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PreviewPrivacyImpactCommandOutput) => void
  ): void;

  /**
   * @see {@link StartProtectedJobCommand}
   */
  startProtectedJob(
    args: StartProtectedJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartProtectedJobCommandOutput>;
  startProtectedJob(
    args: StartProtectedJobCommandInput,
    cb: (err: any, data?: StartProtectedJobCommandOutput) => void
  ): void;
  startProtectedJob(
    args: StartProtectedJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartProtectedJobCommandOutput) => void
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
  tagResource(
    args: TagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TagResourceCommandOutput>;
  tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagResourceCommandOutput>;
  untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateAnalysisTemplateCommand}
   */
  updateAnalysisTemplate(
    args: UpdateAnalysisTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAnalysisTemplateCommandOutput>;
  updateAnalysisTemplate(
    args: UpdateAnalysisTemplateCommandInput,
    cb: (err: any, data?: UpdateAnalysisTemplateCommandOutput) => void
  ): void;
  updateAnalysisTemplate(
    args: UpdateAnalysisTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAnalysisTemplateCommandOutput) => void
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
   * @see {@link UpdateCollaborationChangeRequestCommand}
   */
  updateCollaborationChangeRequest(
    args: UpdateCollaborationChangeRequestCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateCollaborationChangeRequestCommandOutput>;
  updateCollaborationChangeRequest(
    args: UpdateCollaborationChangeRequestCommandInput,
    cb: (err: any, data?: UpdateCollaborationChangeRequestCommandOutput) => void
  ): void;
  updateCollaborationChangeRequest(
    args: UpdateCollaborationChangeRequestCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateCollaborationChangeRequestCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateConfiguredAudienceModelAssociationCommand}
   */
  updateConfiguredAudienceModelAssociation(
    args: UpdateConfiguredAudienceModelAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateConfiguredAudienceModelAssociationCommandOutput>;
  updateConfiguredAudienceModelAssociation(
    args: UpdateConfiguredAudienceModelAssociationCommandInput,
    cb: (err: any, data?: UpdateConfiguredAudienceModelAssociationCommandOutput) => void
  ): void;
  updateConfiguredAudienceModelAssociation(
    args: UpdateConfiguredAudienceModelAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateConfiguredAudienceModelAssociationCommandOutput) => void
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
   * @see {@link UpdateConfiguredTableAssociationAnalysisRuleCommand}
   */
  updateConfiguredTableAssociationAnalysisRule(
    args: UpdateConfiguredTableAssociationAnalysisRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateConfiguredTableAssociationAnalysisRuleCommandOutput>;
  updateConfiguredTableAssociationAnalysisRule(
    args: UpdateConfiguredTableAssociationAnalysisRuleCommandInput,
    cb: (err: any, data?: UpdateConfiguredTableAssociationAnalysisRuleCommandOutput) => void
  ): void;
  updateConfiguredTableAssociationAnalysisRule(
    args: UpdateConfiguredTableAssociationAnalysisRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateConfiguredTableAssociationAnalysisRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateIdMappingTableCommand}
   */
  updateIdMappingTable(
    args: UpdateIdMappingTableCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateIdMappingTableCommandOutput>;
  updateIdMappingTable(
    args: UpdateIdMappingTableCommandInput,
    cb: (err: any, data?: UpdateIdMappingTableCommandOutput) => void
  ): void;
  updateIdMappingTable(
    args: UpdateIdMappingTableCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateIdMappingTableCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateIdNamespaceAssociationCommand}
   */
  updateIdNamespaceAssociation(
    args: UpdateIdNamespaceAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateIdNamespaceAssociationCommandOutput>;
  updateIdNamespaceAssociation(
    args: UpdateIdNamespaceAssociationCommandInput,
    cb: (err: any, data?: UpdateIdNamespaceAssociationCommandOutput) => void
  ): void;
  updateIdNamespaceAssociation(
    args: UpdateIdNamespaceAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateIdNamespaceAssociationCommandOutput) => void
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
   * @see {@link UpdatePrivacyBudgetTemplateCommand}
   */
  updatePrivacyBudgetTemplate(
    args: UpdatePrivacyBudgetTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdatePrivacyBudgetTemplateCommandOutput>;
  updatePrivacyBudgetTemplate(
    args: UpdatePrivacyBudgetTemplateCommandInput,
    cb: (err: any, data?: UpdatePrivacyBudgetTemplateCommandOutput) => void
  ): void;
  updatePrivacyBudgetTemplate(
    args: UpdatePrivacyBudgetTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdatePrivacyBudgetTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateProtectedJobCommand}
   */
  updateProtectedJob(
    args: UpdateProtectedJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateProtectedJobCommandOutput>;
  updateProtectedJob(
    args: UpdateProtectedJobCommandInput,
    cb: (err: any, data?: UpdateProtectedJobCommandOutput) => void
  ): void;
  updateProtectedJob(
    args: UpdateProtectedJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateProtectedJobCommandOutput) => void
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
 * <p>Welcome to the <i>Clean Rooms API Reference</i>.</p> <p>Clean Rooms is an Amazon Web Services service that helps multiple parties to join their data together in a secure collaboration workspace. In the collaboration, members who can run queries and jobs and receive results can get insights into the collective datasets without either party getting access to the other party's raw data.</p> <p>To learn more about Clean Rooms concepts, procedures, and best practices, see the <a href="https://docs.aws.amazon.com/clean-rooms/latest/userguide/what-is.html">Clean Rooms User Guide</a>.</p> <p>To learn more about SQL commands, functions, and conditions supported in Clean Rooms, see the <a href="https://docs.aws.amazon.com/clean-rooms/latest/sql-reference/sql-reference.html">Clean Rooms SQL Reference</a>.</p>
 * @public
 */
export class CleanRooms extends CleanRoomsClient implements CleanRooms {}
createAggregatedClient(commands, CleanRooms);
