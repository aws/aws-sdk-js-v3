// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  MetricsRecorder as __MetricsRecorder,
  PaginationConfiguration,
  Paginator,
} from "@smithy/types";

import { CleanRoomsClient } from "./CleanRoomsClient";
import {
  type BatchGetCollaborationAnalysisTemplateCommandInput,
  type BatchGetCollaborationAnalysisTemplateCommandOutput,
  BatchGetCollaborationAnalysisTemplateCommand,
} from "./commands/BatchGetCollaborationAnalysisTemplateCommand";
import {
  type BatchGetSchemaAnalysisRuleCommandInput,
  type BatchGetSchemaAnalysisRuleCommandOutput,
  BatchGetSchemaAnalysisRuleCommand,
} from "./commands/BatchGetSchemaAnalysisRuleCommand";
import {
  type BatchGetSchemaCommandInput,
  type BatchGetSchemaCommandOutput,
  BatchGetSchemaCommand,
} from "./commands/BatchGetSchemaCommand";
import {
  type CreateAnalysisTemplateCommandInput,
  type CreateAnalysisTemplateCommandOutput,
  CreateAnalysisTemplateCommand,
} from "./commands/CreateAnalysisTemplateCommand";
import {
  type CreateCollaborationChangeRequestCommandInput,
  type CreateCollaborationChangeRequestCommandOutput,
  CreateCollaborationChangeRequestCommand,
} from "./commands/CreateCollaborationChangeRequestCommand";
import {
  type CreateCollaborationCommandInput,
  type CreateCollaborationCommandOutput,
  CreateCollaborationCommand,
} from "./commands/CreateCollaborationCommand";
import {
  type CreateConfiguredAudienceModelAssociationCommandInput,
  type CreateConfiguredAudienceModelAssociationCommandOutput,
  CreateConfiguredAudienceModelAssociationCommand,
} from "./commands/CreateConfiguredAudienceModelAssociationCommand";
import {
  type CreateConfiguredTableAnalysisRuleCommandInput,
  type CreateConfiguredTableAnalysisRuleCommandOutput,
  CreateConfiguredTableAnalysisRuleCommand,
} from "./commands/CreateConfiguredTableAnalysisRuleCommand";
import {
  type CreateConfiguredTableAssociationAnalysisRuleCommandInput,
  type CreateConfiguredTableAssociationAnalysisRuleCommandOutput,
  CreateConfiguredTableAssociationAnalysisRuleCommand,
} from "./commands/CreateConfiguredTableAssociationAnalysisRuleCommand";
import {
  type CreateConfiguredTableAssociationCommandInput,
  type CreateConfiguredTableAssociationCommandOutput,
  CreateConfiguredTableAssociationCommand,
} from "./commands/CreateConfiguredTableAssociationCommand";
import {
  type CreateConfiguredTableCommandInput,
  type CreateConfiguredTableCommandOutput,
  CreateConfiguredTableCommand,
} from "./commands/CreateConfiguredTableCommand";
import {
  type CreateIdMappingTableCommandInput,
  type CreateIdMappingTableCommandOutput,
  CreateIdMappingTableCommand,
} from "./commands/CreateIdMappingTableCommand";
import {
  type CreateIdNamespaceAssociationCommandInput,
  type CreateIdNamespaceAssociationCommandOutput,
  CreateIdNamespaceAssociationCommand,
} from "./commands/CreateIdNamespaceAssociationCommand";
import {
  type CreateIntermediateTableAnalysisRuleCommandInput,
  type CreateIntermediateTableAnalysisRuleCommandOutput,
  CreateIntermediateTableAnalysisRuleCommand,
} from "./commands/CreateIntermediateTableAnalysisRuleCommand";
import {
  type CreateIntermediateTableCommandInput,
  type CreateIntermediateTableCommandOutput,
  CreateIntermediateTableCommand,
} from "./commands/CreateIntermediateTableCommand";
import {
  type CreateMembershipCommandInput,
  type CreateMembershipCommandOutput,
  CreateMembershipCommand,
} from "./commands/CreateMembershipCommand";
import {
  type CreatePrivacyBudgetTemplateCommandInput,
  type CreatePrivacyBudgetTemplateCommandOutput,
  CreatePrivacyBudgetTemplateCommand,
} from "./commands/CreatePrivacyBudgetTemplateCommand";
import {
  type DeleteAnalysisTemplateCommandInput,
  type DeleteAnalysisTemplateCommandOutput,
  DeleteAnalysisTemplateCommand,
} from "./commands/DeleteAnalysisTemplateCommand";
import {
  type DeleteCollaborationCommandInput,
  type DeleteCollaborationCommandOutput,
  DeleteCollaborationCommand,
} from "./commands/DeleteCollaborationCommand";
import {
  type DeleteConfiguredAudienceModelAssociationCommandInput,
  type DeleteConfiguredAudienceModelAssociationCommandOutput,
  DeleteConfiguredAudienceModelAssociationCommand,
} from "./commands/DeleteConfiguredAudienceModelAssociationCommand";
import {
  type DeleteConfiguredTableAnalysisRuleCommandInput,
  type DeleteConfiguredTableAnalysisRuleCommandOutput,
  DeleteConfiguredTableAnalysisRuleCommand,
} from "./commands/DeleteConfiguredTableAnalysisRuleCommand";
import {
  type DeleteConfiguredTableAssociationAnalysisRuleCommandInput,
  type DeleteConfiguredTableAssociationAnalysisRuleCommandOutput,
  DeleteConfiguredTableAssociationAnalysisRuleCommand,
} from "./commands/DeleteConfiguredTableAssociationAnalysisRuleCommand";
import {
  type DeleteConfiguredTableAssociationCommandInput,
  type DeleteConfiguredTableAssociationCommandOutput,
  DeleteConfiguredTableAssociationCommand,
} from "./commands/DeleteConfiguredTableAssociationCommand";
import {
  type DeleteConfiguredTableCommandInput,
  type DeleteConfiguredTableCommandOutput,
  DeleteConfiguredTableCommand,
} from "./commands/DeleteConfiguredTableCommand";
import {
  type DeleteIdMappingTableCommandInput,
  type DeleteIdMappingTableCommandOutput,
  DeleteIdMappingTableCommand,
} from "./commands/DeleteIdMappingTableCommand";
import {
  type DeleteIdNamespaceAssociationCommandInput,
  type DeleteIdNamespaceAssociationCommandOutput,
  DeleteIdNamespaceAssociationCommand,
} from "./commands/DeleteIdNamespaceAssociationCommand";
import {
  type DeleteIntermediateTableAnalysisRuleCommandInput,
  type DeleteIntermediateTableAnalysisRuleCommandOutput,
  DeleteIntermediateTableAnalysisRuleCommand,
} from "./commands/DeleteIntermediateTableAnalysisRuleCommand";
import {
  type DeleteIntermediateTableCommandInput,
  type DeleteIntermediateTableCommandOutput,
  DeleteIntermediateTableCommand,
} from "./commands/DeleteIntermediateTableCommand";
import {
  type DeleteMemberCommandInput,
  type DeleteMemberCommandOutput,
  DeleteMemberCommand,
} from "./commands/DeleteMemberCommand";
import {
  type DeleteMembershipCommandInput,
  type DeleteMembershipCommandOutput,
  DeleteMembershipCommand,
} from "./commands/DeleteMembershipCommand";
import {
  type DeletePrivacyBudgetTemplateCommandInput,
  type DeletePrivacyBudgetTemplateCommandOutput,
  DeletePrivacyBudgetTemplateCommand,
} from "./commands/DeletePrivacyBudgetTemplateCommand";
import {
  type DisallowIntermediateTableCommandInput,
  type DisallowIntermediateTableCommandOutput,
  DisallowIntermediateTableCommand,
} from "./commands/DisallowIntermediateTableCommand";
import {
  type GetAnalysisLogExportCommandInput,
  type GetAnalysisLogExportCommandOutput,
  GetAnalysisLogExportCommand,
} from "./commands/GetAnalysisLogExportCommand";
import {
  type GetAnalysisTemplateCommandInput,
  type GetAnalysisTemplateCommandOutput,
  GetAnalysisTemplateCommand,
} from "./commands/GetAnalysisTemplateCommand";
import {
  type GetCollaborationAnalysisTemplateCommandInput,
  type GetCollaborationAnalysisTemplateCommandOutput,
  GetCollaborationAnalysisTemplateCommand,
} from "./commands/GetCollaborationAnalysisTemplateCommand";
import {
  type GetCollaborationChangeRequestCommandInput,
  type GetCollaborationChangeRequestCommandOutput,
  GetCollaborationChangeRequestCommand,
} from "./commands/GetCollaborationChangeRequestCommand";
import {
  type GetCollaborationCommandInput,
  type GetCollaborationCommandOutput,
  GetCollaborationCommand,
} from "./commands/GetCollaborationCommand";
import {
  type GetCollaborationConfiguredAudienceModelAssociationCommandInput,
  type GetCollaborationConfiguredAudienceModelAssociationCommandOutput,
  GetCollaborationConfiguredAudienceModelAssociationCommand,
} from "./commands/GetCollaborationConfiguredAudienceModelAssociationCommand";
import {
  type GetCollaborationIdNamespaceAssociationCommandInput,
  type GetCollaborationIdNamespaceAssociationCommandOutput,
  GetCollaborationIdNamespaceAssociationCommand,
} from "./commands/GetCollaborationIdNamespaceAssociationCommand";
import {
  type GetCollaborationPrivacyBudgetTemplateCommandInput,
  type GetCollaborationPrivacyBudgetTemplateCommandOutput,
  GetCollaborationPrivacyBudgetTemplateCommand,
} from "./commands/GetCollaborationPrivacyBudgetTemplateCommand";
import {
  type GetConfiguredAudienceModelAssociationCommandInput,
  type GetConfiguredAudienceModelAssociationCommandOutput,
  GetConfiguredAudienceModelAssociationCommand,
} from "./commands/GetConfiguredAudienceModelAssociationCommand";
import {
  type GetConfiguredTableAnalysisRuleCommandInput,
  type GetConfiguredTableAnalysisRuleCommandOutput,
  GetConfiguredTableAnalysisRuleCommand,
} from "./commands/GetConfiguredTableAnalysisRuleCommand";
import {
  type GetConfiguredTableAssociationAnalysisRuleCommandInput,
  type GetConfiguredTableAssociationAnalysisRuleCommandOutput,
  GetConfiguredTableAssociationAnalysisRuleCommand,
} from "./commands/GetConfiguredTableAssociationAnalysisRuleCommand";
import {
  type GetConfiguredTableAssociationCommandInput,
  type GetConfiguredTableAssociationCommandOutput,
  GetConfiguredTableAssociationCommand,
} from "./commands/GetConfiguredTableAssociationCommand";
import {
  type GetConfiguredTableCommandInput,
  type GetConfiguredTableCommandOutput,
  GetConfiguredTableCommand,
} from "./commands/GetConfiguredTableCommand";
import {
  type GetIdMappingTableCommandInput,
  type GetIdMappingTableCommandOutput,
  GetIdMappingTableCommand,
} from "./commands/GetIdMappingTableCommand";
import {
  type GetIdNamespaceAssociationCommandInput,
  type GetIdNamespaceAssociationCommandOutput,
  GetIdNamespaceAssociationCommand,
} from "./commands/GetIdNamespaceAssociationCommand";
import {
  type GetIntermediateTableAnalysisRuleCommandInput,
  type GetIntermediateTableAnalysisRuleCommandOutput,
  GetIntermediateTableAnalysisRuleCommand,
} from "./commands/GetIntermediateTableAnalysisRuleCommand";
import {
  type GetIntermediateTableCommandInput,
  type GetIntermediateTableCommandOutput,
  GetIntermediateTableCommand,
} from "./commands/GetIntermediateTableCommand";
import {
  type GetMembershipCommandInput,
  type GetMembershipCommandOutput,
  GetMembershipCommand,
} from "./commands/GetMembershipCommand";
import {
  type GetPrivacyBudgetTemplateCommandInput,
  type GetPrivacyBudgetTemplateCommandOutput,
  GetPrivacyBudgetTemplateCommand,
} from "./commands/GetPrivacyBudgetTemplateCommand";
import {
  type GetProtectedJobCommandInput,
  type GetProtectedJobCommandOutput,
  GetProtectedJobCommand,
} from "./commands/GetProtectedJobCommand";
import {
  type GetProtectedQueryCommandInput,
  type GetProtectedQueryCommandOutput,
  GetProtectedQueryCommand,
} from "./commands/GetProtectedQueryCommand";
import {
  type GetSchemaAnalysisRuleCommandInput,
  type GetSchemaAnalysisRuleCommandOutput,
  GetSchemaAnalysisRuleCommand,
} from "./commands/GetSchemaAnalysisRuleCommand";
import { type GetSchemaCommandInput, type GetSchemaCommandOutput, GetSchemaCommand } from "./commands/GetSchemaCommand";
import {
  type ListAnalysisLogExportsCommandInput,
  type ListAnalysisLogExportsCommandOutput,
  ListAnalysisLogExportsCommand,
} from "./commands/ListAnalysisLogExportsCommand";
import {
  type ListAnalysisTemplatesCommandInput,
  type ListAnalysisTemplatesCommandOutput,
  ListAnalysisTemplatesCommand,
} from "./commands/ListAnalysisTemplatesCommand";
import {
  type ListCollaborationAnalysisTemplatesCommandInput,
  type ListCollaborationAnalysisTemplatesCommandOutput,
  ListCollaborationAnalysisTemplatesCommand,
} from "./commands/ListCollaborationAnalysisTemplatesCommand";
import {
  type ListCollaborationChangeRequestsCommandInput,
  type ListCollaborationChangeRequestsCommandOutput,
  ListCollaborationChangeRequestsCommand,
} from "./commands/ListCollaborationChangeRequestsCommand";
import {
  type ListCollaborationConfiguredAudienceModelAssociationsCommandInput,
  type ListCollaborationConfiguredAudienceModelAssociationsCommandOutput,
  ListCollaborationConfiguredAudienceModelAssociationsCommand,
} from "./commands/ListCollaborationConfiguredAudienceModelAssociationsCommand";
import {
  type ListCollaborationIdNamespaceAssociationsCommandInput,
  type ListCollaborationIdNamespaceAssociationsCommandOutput,
  ListCollaborationIdNamespaceAssociationsCommand,
} from "./commands/ListCollaborationIdNamespaceAssociationsCommand";
import {
  type ListCollaborationPrivacyBudgetsCommandInput,
  type ListCollaborationPrivacyBudgetsCommandOutput,
  ListCollaborationPrivacyBudgetsCommand,
} from "./commands/ListCollaborationPrivacyBudgetsCommand";
import {
  type ListCollaborationPrivacyBudgetTemplatesCommandInput,
  type ListCollaborationPrivacyBudgetTemplatesCommandOutput,
  ListCollaborationPrivacyBudgetTemplatesCommand,
} from "./commands/ListCollaborationPrivacyBudgetTemplatesCommand";
import {
  type ListCollaborationsCommandInput,
  type ListCollaborationsCommandOutput,
  ListCollaborationsCommand,
} from "./commands/ListCollaborationsCommand";
import {
  type ListConfiguredAudienceModelAssociationsCommandInput,
  type ListConfiguredAudienceModelAssociationsCommandOutput,
  ListConfiguredAudienceModelAssociationsCommand,
} from "./commands/ListConfiguredAudienceModelAssociationsCommand";
import {
  type ListConfiguredTableAssociationsCommandInput,
  type ListConfiguredTableAssociationsCommandOutput,
  ListConfiguredTableAssociationsCommand,
} from "./commands/ListConfiguredTableAssociationsCommand";
import {
  type ListConfiguredTablesCommandInput,
  type ListConfiguredTablesCommandOutput,
  ListConfiguredTablesCommand,
} from "./commands/ListConfiguredTablesCommand";
import {
  type ListIdMappingTablesCommandInput,
  type ListIdMappingTablesCommandOutput,
  ListIdMappingTablesCommand,
} from "./commands/ListIdMappingTablesCommand";
import {
  type ListIdNamespaceAssociationsCommandInput,
  type ListIdNamespaceAssociationsCommandOutput,
  ListIdNamespaceAssociationsCommand,
} from "./commands/ListIdNamespaceAssociationsCommand";
import {
  type ListIntermediateTablesCommandInput,
  type ListIntermediateTablesCommandOutput,
  ListIntermediateTablesCommand,
} from "./commands/ListIntermediateTablesCommand";
import {
  type ListIntermediateTableVersionsCommandInput,
  type ListIntermediateTableVersionsCommandOutput,
  ListIntermediateTableVersionsCommand,
} from "./commands/ListIntermediateTableVersionsCommand";
import {
  type ListMembersCommandInput,
  type ListMembersCommandOutput,
  ListMembersCommand,
} from "./commands/ListMembersCommand";
import {
  type ListMembershipsCommandInput,
  type ListMembershipsCommandOutput,
  ListMembershipsCommand,
} from "./commands/ListMembershipsCommand";
import {
  type ListPrivacyBudgetsCommandInput,
  type ListPrivacyBudgetsCommandOutput,
  ListPrivacyBudgetsCommand,
} from "./commands/ListPrivacyBudgetsCommand";
import {
  type ListPrivacyBudgetTemplatesCommandInput,
  type ListPrivacyBudgetTemplatesCommandOutput,
  ListPrivacyBudgetTemplatesCommand,
} from "./commands/ListPrivacyBudgetTemplatesCommand";
import {
  type ListProtectedJobsCommandInput,
  type ListProtectedJobsCommandOutput,
  ListProtectedJobsCommand,
} from "./commands/ListProtectedJobsCommand";
import {
  type ListProtectedQueriesCommandInput,
  type ListProtectedQueriesCommandOutput,
  ListProtectedQueriesCommand,
} from "./commands/ListProtectedQueriesCommand";
import {
  type ListSchemasCommandInput,
  type ListSchemasCommandOutput,
  ListSchemasCommand,
} from "./commands/ListSchemasCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import {
  type PopulateIdMappingTableCommandInput,
  type PopulateIdMappingTableCommandOutput,
  PopulateIdMappingTableCommand,
} from "./commands/PopulateIdMappingTableCommand";
import {
  type PopulateIntermediateTableCommandInput,
  type PopulateIntermediateTableCommandOutput,
  PopulateIntermediateTableCommand,
} from "./commands/PopulateIntermediateTableCommand";
import {
  type PreviewPrivacyImpactCommandInput,
  type PreviewPrivacyImpactCommandOutput,
  PreviewPrivacyImpactCommand,
} from "./commands/PreviewPrivacyImpactCommand";
import {
  type StartAnalysisLogExportCommandInput,
  type StartAnalysisLogExportCommandOutput,
  StartAnalysisLogExportCommand,
} from "./commands/StartAnalysisLogExportCommand";
import {
  type StartProtectedJobCommandInput,
  type StartProtectedJobCommandOutput,
  StartProtectedJobCommand,
} from "./commands/StartProtectedJobCommand";
import {
  type StartProtectedQueryCommandInput,
  type StartProtectedQueryCommandOutput,
  StartProtectedQueryCommand,
} from "./commands/StartProtectedQueryCommand";
import {
  type TagResourceCommandInput,
  type TagResourceCommandOutput,
  TagResourceCommand,
} from "./commands/TagResourceCommand";
import {
  type UntagResourceCommandInput,
  type UntagResourceCommandOutput,
  UntagResourceCommand,
} from "./commands/UntagResourceCommand";
import {
  type UpdateAnalysisTemplateCommandInput,
  type UpdateAnalysisTemplateCommandOutput,
  UpdateAnalysisTemplateCommand,
} from "./commands/UpdateAnalysisTemplateCommand";
import {
  type UpdateCollaborationChangeRequestCommandInput,
  type UpdateCollaborationChangeRequestCommandOutput,
  UpdateCollaborationChangeRequestCommand,
} from "./commands/UpdateCollaborationChangeRequestCommand";
import {
  type UpdateCollaborationCommandInput,
  type UpdateCollaborationCommandOutput,
  UpdateCollaborationCommand,
} from "./commands/UpdateCollaborationCommand";
import {
  type UpdateConfiguredAudienceModelAssociationCommandInput,
  type UpdateConfiguredAudienceModelAssociationCommandOutput,
  UpdateConfiguredAudienceModelAssociationCommand,
} from "./commands/UpdateConfiguredAudienceModelAssociationCommand";
import {
  type UpdateConfiguredTableAnalysisRuleCommandInput,
  type UpdateConfiguredTableAnalysisRuleCommandOutput,
  UpdateConfiguredTableAnalysisRuleCommand,
} from "./commands/UpdateConfiguredTableAnalysisRuleCommand";
import {
  type UpdateConfiguredTableAssociationAnalysisRuleCommandInput,
  type UpdateConfiguredTableAssociationAnalysisRuleCommandOutput,
  UpdateConfiguredTableAssociationAnalysisRuleCommand,
} from "./commands/UpdateConfiguredTableAssociationAnalysisRuleCommand";
import {
  type UpdateConfiguredTableAssociationCommandInput,
  type UpdateConfiguredTableAssociationCommandOutput,
  UpdateConfiguredTableAssociationCommand,
} from "./commands/UpdateConfiguredTableAssociationCommand";
import {
  type UpdateConfiguredTableCommandInput,
  type UpdateConfiguredTableCommandOutput,
  UpdateConfiguredTableCommand,
} from "./commands/UpdateConfiguredTableCommand";
import {
  type UpdateIdMappingTableCommandInput,
  type UpdateIdMappingTableCommandOutput,
  UpdateIdMappingTableCommand,
} from "./commands/UpdateIdMappingTableCommand";
import {
  type UpdateIdNamespaceAssociationCommandInput,
  type UpdateIdNamespaceAssociationCommandOutput,
  UpdateIdNamespaceAssociationCommand,
} from "./commands/UpdateIdNamespaceAssociationCommand";
import {
  type UpdateIntermediateTableAnalysisRuleCommandInput,
  type UpdateIntermediateTableAnalysisRuleCommandOutput,
  UpdateIntermediateTableAnalysisRuleCommand,
} from "./commands/UpdateIntermediateTableAnalysisRuleCommand";
import {
  type UpdateIntermediateTableCommandInput,
  type UpdateIntermediateTableCommandOutput,
  UpdateIntermediateTableCommand,
} from "./commands/UpdateIntermediateTableCommand";
import {
  type UpdateMembershipCommandInput,
  type UpdateMembershipCommandOutput,
  UpdateMembershipCommand,
} from "./commands/UpdateMembershipCommand";
import {
  type UpdatePrivacyBudgetTemplateCommandInput,
  type UpdatePrivacyBudgetTemplateCommandOutput,
  UpdatePrivacyBudgetTemplateCommand,
} from "./commands/UpdatePrivacyBudgetTemplateCommand";
import {
  type UpdateProtectedJobCommandInput,
  type UpdateProtectedJobCommandOutput,
  UpdateProtectedJobCommand,
} from "./commands/UpdateProtectedJobCommand";
import {
  type UpdateProtectedQueryCommandInput,
  type UpdateProtectedQueryCommandOutput,
  UpdateProtectedQueryCommand,
} from "./commands/UpdateProtectedQueryCommand";
import { paginateListAnalysisLogExports } from "./pagination/ListAnalysisLogExportsPaginator";
import { paginateListAnalysisTemplates } from "./pagination/ListAnalysisTemplatesPaginator";
import { paginateListCollaborationAnalysisTemplates } from "./pagination/ListCollaborationAnalysisTemplatesPaginator";
import { paginateListCollaborationChangeRequests } from "./pagination/ListCollaborationChangeRequestsPaginator";
import {
  paginateListCollaborationConfiguredAudienceModelAssociations,
} from "./pagination/ListCollaborationConfiguredAudienceModelAssociationsPaginator";
import {
  paginateListCollaborationIdNamespaceAssociations,
} from "./pagination/ListCollaborationIdNamespaceAssociationsPaginator";
import { paginateListCollaborationPrivacyBudgets } from "./pagination/ListCollaborationPrivacyBudgetsPaginator";
import {
  paginateListCollaborationPrivacyBudgetTemplates,
} from "./pagination/ListCollaborationPrivacyBudgetTemplatesPaginator";
import { paginateListCollaborations } from "./pagination/ListCollaborationsPaginator";
import {
  paginateListConfiguredAudienceModelAssociations,
} from "./pagination/ListConfiguredAudienceModelAssociationsPaginator";
import { paginateListConfiguredTableAssociations } from "./pagination/ListConfiguredTableAssociationsPaginator";
import { paginateListConfiguredTables } from "./pagination/ListConfiguredTablesPaginator";
import { paginateListIdMappingTables } from "./pagination/ListIdMappingTablesPaginator";
import { paginateListIdNamespaceAssociations } from "./pagination/ListIdNamespaceAssociationsPaginator";
import { paginateListIntermediateTables } from "./pagination/ListIntermediateTablesPaginator";
import { paginateListIntermediateTableVersions } from "./pagination/ListIntermediateTableVersionsPaginator";
import { paginateListMemberships } from "./pagination/ListMembershipsPaginator";
import { paginateListMembers } from "./pagination/ListMembersPaginator";
import { paginateListPrivacyBudgets } from "./pagination/ListPrivacyBudgetsPaginator";
import { paginateListPrivacyBudgetTemplates } from "./pagination/ListPrivacyBudgetTemplatesPaginator";
import { paginateListProtectedJobs } from "./pagination/ListProtectedJobsPaginator";
import { paginateListProtectedQueries } from "./pagination/ListProtectedQueriesPaginator";
import { paginateListSchemas } from "./pagination/ListSchemasPaginator";

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
  CreateIntermediateTableCommand,
  CreateIntermediateTableAnalysisRuleCommand,
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
  DeleteIntermediateTableCommand,
  DeleteIntermediateTableAnalysisRuleCommand,
  DeleteMemberCommand,
  DeleteMembershipCommand,
  DeletePrivacyBudgetTemplateCommand,
  DisallowIntermediateTableCommand,
  GetAnalysisLogExportCommand,
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
  GetIntermediateTableCommand,
  GetIntermediateTableAnalysisRuleCommand,
  GetMembershipCommand,
  GetPrivacyBudgetTemplateCommand,
  GetProtectedJobCommand,
  GetProtectedQueryCommand,
  GetSchemaCommand,
  GetSchemaAnalysisRuleCommand,
  ListAnalysisLogExportsCommand,
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
  ListIntermediateTablesCommand,
  ListIntermediateTableVersionsCommand,
  ListMembersCommand,
  ListMembershipsCommand,
  ListPrivacyBudgetsCommand,
  ListPrivacyBudgetTemplatesCommand,
  ListProtectedJobsCommand,
  ListProtectedQueriesCommand,
  ListSchemasCommand,
  ListTagsForResourceCommand,
  PopulateIdMappingTableCommand,
  PopulateIntermediateTableCommand,
  PreviewPrivacyImpactCommand,
  StartAnalysisLogExportCommand,
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
  UpdateIntermediateTableCommand,
  UpdateIntermediateTableAnalysisRuleCommand,
  UpdateMembershipCommand,
  UpdatePrivacyBudgetTemplateCommand,
  UpdateProtectedJobCommand,
  UpdateProtectedQueryCommand,
};
const paginators = {
  paginateListAnalysisLogExports,
  paginateListAnalysisTemplates,
  paginateListCollaborationAnalysisTemplates,
  paginateListCollaborationChangeRequests,
  paginateListCollaborationConfiguredAudienceModelAssociations,
  paginateListCollaborationIdNamespaceAssociations,
  paginateListCollaborationPrivacyBudgets,
  paginateListCollaborationPrivacyBudgetTemplates,
  paginateListCollaborations,
  paginateListConfiguredAudienceModelAssociations,
  paginateListConfiguredTableAssociations,
  paginateListConfiguredTables,
  paginateListIdMappingTables,
  paginateListIdNamespaceAssociations,
  paginateListIntermediateTables,
  paginateListIntermediateTableVersions,
  paginateListMembers,
  paginateListMemberships,
  paginateListPrivacyBudgets,
  paginateListPrivacyBudgetTemplates,
  paginateListProtectedJobs,
  paginateListProtectedQueries,
  paginateListSchemas,
};

/**
 * @public
 */
export interface CleanRoomsRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface CleanRooms {
  /**
   * @see {@link BatchGetCollaborationAnalysisTemplateCommand}
   */
  batchGetCollaborationAnalysisTemplate(
    args: BatchGetCollaborationAnalysisTemplateCommandInput,
    options?: CleanRoomsRequestOptions
  ): Promise<BatchGetCollaborationAnalysisTemplateCommandOutput>;
  batchGetCollaborationAnalysisTemplate(
    args: BatchGetCollaborationAnalysisTemplateCommandInput,
    cb: (err: any, data?: BatchGetCollaborationAnalysisTemplateCommandOutput) => void
  ): void;
  batchGetCollaborationAnalysisTemplate(
    args: BatchGetCollaborationAnalysisTemplateCommandInput,
    options: CleanRoomsRequestOptions,
    cb: (err: any, data?: BatchGetCollaborationAnalysisTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchGetSchemaCommand}
   */
  batchGetSchema(
    args: BatchGetSchemaCommandInput,
    options?: CleanRoomsRequestOptions
  ): Promise<BatchGetSchemaCommandOutput>;
  batchGetSchema(
    args: BatchGetSchemaCommandInput,
    cb: (err: any, data?: BatchGetSchemaCommandOutput) => void
  ): void;
  batchGetSchema(
    args: BatchGetSchemaCommandInput,
    options: CleanRoomsRequestOptions,
    cb: (err: any, data?: BatchGetSchemaCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchGetSchemaAnalysisRuleCommand}
   */
  batchGetSchemaAnalysisRule(
    args: BatchGetSchemaAnalysisRuleCommandInput,
    options?: CleanRoomsRequestOptions
  ): Promise<BatchGetSchemaAnalysisRuleCommandOutput>;
  batchGetSchemaAnalysisRule(
    args: BatchGetSchemaAnalysisRuleCommandInput,
    cb: (err: any, data?: BatchGetSchemaAnalysisRuleCommandOutput) => void
  ): void;
  batchGetSchemaAnalysisRule(
    args: BatchGetSchemaAnalysisRuleCommandInput,
    options: CleanRoomsRequestOptions,
    cb: (err: any, data?: BatchGetSchemaAnalysisRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateAnalysisTemplateCommand}
   */
  createAnalysisTemplate(
    args: CreateAnalysisTemplateCommandInput,
    options?: CleanRoomsRequestOptions
  ): Promise<CreateAnalysisTemplateCommandOutput>;
  createAnalysisTemplate(
    args: CreateAnalysisTemplateCommandInput,
    cb: (err: any, data?: CreateAnalysisTemplateCommandOutput) => void
  ): void;
  createAnalysisTemplate(
    args: CreateAnalysisTemplateCommandInput,
    options: CleanRoomsRequestOptions,
    cb: (err: any, data?: CreateAnalysisTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateCollaborationCommand}
   */
  createCollaboration(
    args: CreateCollaborationCommandInput,
    options?: CleanRoomsRequestOptions
  ): Promise<CreateCollaborationCommandOutput>;
  createCollaboration(
    args: CreateCollaborationCommandInput,
    cb: (err: any, data?: CreateCollaborationCommandOutput) => void
  ): void;
  createCollaboration(
    args: CreateCollaborationCommandInput,
    options: CleanRoomsRequestOptions,
    cb: (err: any, data?: CreateCollaborationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateCollaborationChangeRequestCommand}
   */
  createCollaborationChangeRequest(
    args: CreateCollaborationChangeRequestCommandInput,
    options?: CleanRoomsRequestOptions
  ): Promise<CreateCollaborationChangeRequestCommandOutput>;
  createCollaborationChangeRequest(
    args: CreateCollaborationChangeRequestCommandInput,
    cb: (err: any, data?: CreateCollaborationChangeRequestCommandOutput) => void
  ): void;
  createCollaborationChangeRequest(
    args: CreateCollaborationChangeRequestCommandInput,
    options: CleanRoomsRequestOptions,
    cb: (err: any, data?: CreateCollaborationChangeRequestCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateConfiguredAudienceModelAssociationCommand}
   */
  createConfiguredAudienceModelAssociation(
    args: CreateConfiguredAudienceModelAssociationCommandInput,
    options?: CleanRoomsRequestOptions
  ): Promise<CreateConfiguredAudienceModelAssociationCommandOutput>;
  createConfiguredAudienceModelAssociation(
    args: CreateConfiguredAudienceModelAssociationCommandInput,
    cb: (err: any, data?: CreateConfiguredAudienceModelAssociationCommandOutput) => void
  ): void;
  createConfiguredAudienceModelAssociation(
    args: CreateConfiguredAudienceModelAssociationCommandInput,
    options: CleanRoomsRequestOptions,
    cb: (err: any, data?: CreateConfiguredAudienceModelAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateConfiguredTableCommand}
   */
  createConfiguredTable(
    args: CreateConfiguredTableCommandInput,
    options?: CleanRoomsRequestOptions
  ): Promise<CreateConfiguredTableCommandOutput>;
  createConfiguredTable(
    args: CreateConfiguredTableCommandInput,
    cb: (err: any, data?: CreateConfiguredTableCommandOutput) => void
  ): void;
  createConfiguredTable(
    args: CreateConfiguredTableCommandInput,
    options: CleanRoomsRequestOptions,
    cb: (err: any, data?: CreateConfiguredTableCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateConfiguredTableAnalysisRuleCommand}
   */
  createConfiguredTableAnalysisRule(
    args: CreateConfiguredTableAnalysisRuleCommandInput,
    options?: CleanRoomsRequestOptions
  ): Promise<CreateConfiguredTableAnalysisRuleCommandOutput>;
  createConfiguredTableAnalysisRule(
    args: CreateConfiguredTableAnalysisRuleCommandInput,
    cb: (err: any, data?: CreateConfiguredTableAnalysisRuleCommandOutput) => void
  ): void;
  createConfiguredTableAnalysisRule(
    args: CreateConfiguredTableAnalysisRuleCommandInput,
    options: CleanRoomsRequestOptions,
    cb: (err: any, data?: CreateConfiguredTableAnalysisRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateConfiguredTableAssociationCommand}
   */
  createConfiguredTableAssociation(
    args: CreateConfiguredTableAssociationCommandInput,
    options?: CleanRoomsRequestOptions
  ): Promise<CreateConfiguredTableAssociationCommandOutput>;
  createConfiguredTableAssociation(
    args: CreateConfiguredTableAssociationCommandInput,
    cb: (err: any, data?: CreateConfiguredTableAssociationCommandOutput) => void
  ): void;
  createConfiguredTableAssociation(
    args: CreateConfiguredTableAssociationCommandInput,
    options: CleanRoomsRequestOptions,
    cb: (err: any, data?: CreateConfiguredTableAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateConfiguredTableAssociationAnalysisRuleCommand}
   */
  createConfiguredTableAssociationAnalysisRule(
    args: CreateConfiguredTableAssociationAnalysisRuleCommandInput,
    options?: CleanRoomsRequestOptions
  ): Promise<CreateConfiguredTableAssociationAnalysisRuleCommandOutput>;
  createConfiguredTableAssociationAnalysisRule(
    args: CreateConfiguredTableAssociationAnalysisRuleCommandInput,
    cb: (err: any, data?: CreateConfiguredTableAssociationAnalysisRuleCommandOutput) => void
  ): void;
  createConfiguredTableAssociationAnalysisRule(
    args: CreateConfiguredTableAssociationAnalysisRuleCommandInput,
    options: CleanRoomsRequestOptions,
    cb: (err: any, data?: CreateConfiguredTableAssociationAnalysisRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateIdMappingTableCommand}
   */
  createIdMappingTable(
    args: CreateIdMappingTableCommandInput,
    options?: CleanRoomsRequestOptions
  ): Promise<CreateIdMappingTableCommandOutput>;
  createIdMappingTable(
    args: CreateIdMappingTableCommandInput,
    cb: (err: any, data?: CreateIdMappingTableCommandOutput) => void
  ): void;
  createIdMappingTable(
    args: CreateIdMappingTableCommandInput,
    options: CleanRoomsRequestOptions,
    cb: (err: any, data?: CreateIdMappingTableCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateIdNamespaceAssociationCommand}
   */
  createIdNamespaceAssociation(
    args: CreateIdNamespaceAssociationCommandInput,
    options?: CleanRoomsRequestOptions
  ): Promise<CreateIdNamespaceAssociationCommandOutput>;
  createIdNamespaceAssociation(
    args: CreateIdNamespaceAssociationCommandInput,
    cb: (err: any, data?: CreateIdNamespaceAssociationCommandOutput) => void
  ): void;
  createIdNamespaceAssociation(
    args: CreateIdNamespaceAssociationCommandInput,
    options: CleanRoomsRequestOptions,
    cb: (err: any, data?: CreateIdNamespaceAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateIntermediateTableCommand}
   */
  createIntermediateTable(
    args: CreateIntermediateTableCommandInput,
    options?: CleanRoomsRequestOptions
  ): Promise<CreateIntermediateTableCommandOutput>;
  createIntermediateTable(
    args: CreateIntermediateTableCommandInput,
    cb: (err: any, data?: CreateIntermediateTableCommandOutput) => void
  ): void;
  createIntermediateTable(
    args: CreateIntermediateTableCommandInput,
    options: CleanRoomsRequestOptions,
    cb: (err: any, data?: CreateIntermediateTableCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateIntermediateTableAnalysisRuleCommand}
   */
  createIntermediateTableAnalysisRule(
    args: CreateIntermediateTableAnalysisRuleCommandInput,
    options?: CleanRoomsRequestOptions
  ): Promise<CreateIntermediateTableAnalysisRuleCommandOutput>;
  createIntermediateTableAnalysisRule(
    args: CreateIntermediateTableAnalysisRuleCommandInput,
    cb: (err: any, data?: CreateIntermediateTableAnalysisRuleCommandOutput) => void
  ): void;
  createIntermediateTableAnalysisRule(
    args: CreateIntermediateTableAnalysisRuleCommandInput,
    options: CleanRoomsRequestOptions,
    cb: (err: any, data?: CreateIntermediateTableAnalysisRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateMembershipCommand}
   */
  createMembership(
    args: CreateMembershipCommandInput,
    options?: CleanRoomsRequestOptions
  ): Promise<CreateMembershipCommandOutput>;
  createMembership(
    args: CreateMembershipCommandInput,
    cb: (err: any, data?: CreateMembershipCommandOutput) => void
  ): void;
  createMembership(
    args: CreateMembershipCommandInput,
    options: CleanRoomsRequestOptions,
    cb: (err: any, data?: CreateMembershipCommandOutput) => void
  ): void;

  /**
   * @see {@link CreatePrivacyBudgetTemplateCommand}
   */
  createPrivacyBudgetTemplate(
    args: CreatePrivacyBudgetTemplateCommandInput,
    options?: CleanRoomsRequestOptions
  ): Promise<CreatePrivacyBudgetTemplateCommandOutput>;
  createPrivacyBudgetTemplate(
    args: CreatePrivacyBudgetTemplateCommandInput,
    cb: (err: any, data?: CreatePrivacyBudgetTemplateCommandOutput) => void
  ): void;
  createPrivacyBudgetTemplate(
    args: CreatePrivacyBudgetTemplateCommandInput,
    options: CleanRoomsRequestOptions,
    cb: (err: any, data?: CreatePrivacyBudgetTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAnalysisTemplateCommand}
   */
  deleteAnalysisTemplate(
    args: DeleteAnalysisTemplateCommandInput,
    options?: CleanRoomsRequestOptions
  ): Promise<DeleteAnalysisTemplateCommandOutput>;
  deleteAnalysisTemplate(
    args: DeleteAnalysisTemplateCommandInput,
    cb: (err: any, data?: DeleteAnalysisTemplateCommandOutput) => void
  ): void;
  deleteAnalysisTemplate(
    args: DeleteAnalysisTemplateCommandInput,
    options: CleanRoomsRequestOptions,
    cb: (err: any, data?: DeleteAnalysisTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteCollaborationCommand}
   */
  deleteCollaboration(
    args: DeleteCollaborationCommandInput,
    options?: CleanRoomsRequestOptions
  ): Promise<DeleteCollaborationCommandOutput>;
  deleteCollaboration(
    args: DeleteCollaborationCommandInput,
    cb: (err: any, data?: DeleteCollaborationCommandOutput) => void
  ): void;
  deleteCollaboration(
    args: DeleteCollaborationCommandInput,
    options: CleanRoomsRequestOptions,
    cb: (err: any, data?: DeleteCollaborationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteConfiguredAudienceModelAssociationCommand}
   */
  deleteConfiguredAudienceModelAssociation(
    args: DeleteConfiguredAudienceModelAssociationCommandInput,
    options?: CleanRoomsRequestOptions
  ): Promise<DeleteConfiguredAudienceModelAssociationCommandOutput>;
  deleteConfiguredAudienceModelAssociation(
    args: DeleteConfiguredAudienceModelAssociationCommandInput,
    cb: (err: any, data?: DeleteConfiguredAudienceModelAssociationCommandOutput) => void
  ): void;
  deleteConfiguredAudienceModelAssociation(
    args: DeleteConfiguredAudienceModelAssociationCommandInput,
    options: CleanRoomsRequestOptions,
    cb: (err: any, data?: DeleteConfiguredAudienceModelAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteConfiguredTableCommand}
   */
  deleteConfiguredTable(
    args: DeleteConfiguredTableCommandInput,
    options?: CleanRoomsRequestOptions
  ): Promise<DeleteConfiguredTableCommandOutput>;
  deleteConfiguredTable(
    args: DeleteConfiguredTableCommandInput,
    cb: (err: any, data?: DeleteConfiguredTableCommandOutput) => void
  ): void;
  deleteConfiguredTable(
    args: DeleteConfiguredTableCommandInput,
    options: CleanRoomsRequestOptions,
    cb: (err: any, data?: DeleteConfiguredTableCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteConfiguredTableAnalysisRuleCommand}
   */
  deleteConfiguredTableAnalysisRule(
    args: DeleteConfiguredTableAnalysisRuleCommandInput,
    options?: CleanRoomsRequestOptions
  ): Promise<DeleteConfiguredTableAnalysisRuleCommandOutput>;
  deleteConfiguredTableAnalysisRule(
    args: DeleteConfiguredTableAnalysisRuleCommandInput,
    cb: (err: any, data?: DeleteConfiguredTableAnalysisRuleCommandOutput) => void
  ): void;
  deleteConfiguredTableAnalysisRule(
    args: DeleteConfiguredTableAnalysisRuleCommandInput,
    options: CleanRoomsRequestOptions,
    cb: (err: any, data?: DeleteConfiguredTableAnalysisRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteConfiguredTableAssociationCommand}
   */
  deleteConfiguredTableAssociation(
    args: DeleteConfiguredTableAssociationCommandInput,
    options?: CleanRoomsRequestOptions
  ): Promise<DeleteConfiguredTableAssociationCommandOutput>;
  deleteConfiguredTableAssociation(
    args: DeleteConfiguredTableAssociationCommandInput,
    cb: (err: any, data?: DeleteConfiguredTableAssociationCommandOutput) => void
  ): void;
  deleteConfiguredTableAssociation(
    args: DeleteConfiguredTableAssociationCommandInput,
    options: CleanRoomsRequestOptions,
    cb: (err: any, data?: DeleteConfiguredTableAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteConfiguredTableAssociationAnalysisRuleCommand}
   */
  deleteConfiguredTableAssociationAnalysisRule(
    args: DeleteConfiguredTableAssociationAnalysisRuleCommandInput,
    options?: CleanRoomsRequestOptions
  ): Promise<DeleteConfiguredTableAssociationAnalysisRuleCommandOutput>;
  deleteConfiguredTableAssociationAnalysisRule(
    args: DeleteConfiguredTableAssociationAnalysisRuleCommandInput,
    cb: (err: any, data?: DeleteConfiguredTableAssociationAnalysisRuleCommandOutput) => void
  ): void;
  deleteConfiguredTableAssociationAnalysisRule(
    args: DeleteConfiguredTableAssociationAnalysisRuleCommandInput,
    options: CleanRoomsRequestOptions,
    cb: (err: any, data?: DeleteConfiguredTableAssociationAnalysisRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteIdMappingTableCommand}
   */
  deleteIdMappingTable(
    args: DeleteIdMappingTableCommandInput,
    options?: CleanRoomsRequestOptions
  ): Promise<DeleteIdMappingTableCommandOutput>;
  deleteIdMappingTable(
    args: DeleteIdMappingTableCommandInput,
    cb: (err: any, data?: DeleteIdMappingTableCommandOutput) => void
  ): void;
  deleteIdMappingTable(
    args: DeleteIdMappingTableCommandInput,
    options: CleanRoomsRequestOptions,
    cb: (err: any, data?: DeleteIdMappingTableCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteIdNamespaceAssociationCommand}
   */
  deleteIdNamespaceAssociation(
    args: DeleteIdNamespaceAssociationCommandInput,
    options?: CleanRoomsRequestOptions
  ): Promise<DeleteIdNamespaceAssociationCommandOutput>;
  deleteIdNamespaceAssociation(
    args: DeleteIdNamespaceAssociationCommandInput,
    cb: (err: any, data?: DeleteIdNamespaceAssociationCommandOutput) => void
  ): void;
  deleteIdNamespaceAssociation(
    args: DeleteIdNamespaceAssociationCommandInput,
    options: CleanRoomsRequestOptions,
    cb: (err: any, data?: DeleteIdNamespaceAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteIntermediateTableCommand}
   */
  deleteIntermediateTable(
    args: DeleteIntermediateTableCommandInput,
    options?: CleanRoomsRequestOptions
  ): Promise<DeleteIntermediateTableCommandOutput>;
  deleteIntermediateTable(
    args: DeleteIntermediateTableCommandInput,
    cb: (err: any, data?: DeleteIntermediateTableCommandOutput) => void
  ): void;
  deleteIntermediateTable(
    args: DeleteIntermediateTableCommandInput,
    options: CleanRoomsRequestOptions,
    cb: (err: any, data?: DeleteIntermediateTableCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteIntermediateTableAnalysisRuleCommand}
   */
  deleteIntermediateTableAnalysisRule(
    args: DeleteIntermediateTableAnalysisRuleCommandInput,
    options?: CleanRoomsRequestOptions
  ): Promise<DeleteIntermediateTableAnalysisRuleCommandOutput>;
  deleteIntermediateTableAnalysisRule(
    args: DeleteIntermediateTableAnalysisRuleCommandInput,
    cb: (err: any, data?: DeleteIntermediateTableAnalysisRuleCommandOutput) => void
  ): void;
  deleteIntermediateTableAnalysisRule(
    args: DeleteIntermediateTableAnalysisRuleCommandInput,
    options: CleanRoomsRequestOptions,
    cb: (err: any, data?: DeleteIntermediateTableAnalysisRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteMemberCommand}
   */
  deleteMember(
    args: DeleteMemberCommandInput,
    options?: CleanRoomsRequestOptions
  ): Promise<DeleteMemberCommandOutput>;
  deleteMember(
    args: DeleteMemberCommandInput,
    cb: (err: any, data?: DeleteMemberCommandOutput) => void
  ): void;
  deleteMember(
    args: DeleteMemberCommandInput,
    options: CleanRoomsRequestOptions,
    cb: (err: any, data?: DeleteMemberCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteMembershipCommand}
   */
  deleteMembership(
    args: DeleteMembershipCommandInput,
    options?: CleanRoomsRequestOptions
  ): Promise<DeleteMembershipCommandOutput>;
  deleteMembership(
    args: DeleteMembershipCommandInput,
    cb: (err: any, data?: DeleteMembershipCommandOutput) => void
  ): void;
  deleteMembership(
    args: DeleteMembershipCommandInput,
    options: CleanRoomsRequestOptions,
    cb: (err: any, data?: DeleteMembershipCommandOutput) => void
  ): void;

  /**
   * @see {@link DeletePrivacyBudgetTemplateCommand}
   */
  deletePrivacyBudgetTemplate(
    args: DeletePrivacyBudgetTemplateCommandInput,
    options?: CleanRoomsRequestOptions
  ): Promise<DeletePrivacyBudgetTemplateCommandOutput>;
  deletePrivacyBudgetTemplate(
    args: DeletePrivacyBudgetTemplateCommandInput,
    cb: (err: any, data?: DeletePrivacyBudgetTemplateCommandOutput) => void
  ): void;
  deletePrivacyBudgetTemplate(
    args: DeletePrivacyBudgetTemplateCommandInput,
    options: CleanRoomsRequestOptions,
    cb: (err: any, data?: DeletePrivacyBudgetTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link DisallowIntermediateTableCommand}
   */
  disallowIntermediateTable(
    args: DisallowIntermediateTableCommandInput,
    options?: CleanRoomsRequestOptions
  ): Promise<DisallowIntermediateTableCommandOutput>;
  disallowIntermediateTable(
    args: DisallowIntermediateTableCommandInput,
    cb: (err: any, data?: DisallowIntermediateTableCommandOutput) => void
  ): void;
  disallowIntermediateTable(
    args: DisallowIntermediateTableCommandInput,
    options: CleanRoomsRequestOptions,
    cb: (err: any, data?: DisallowIntermediateTableCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAnalysisLogExportCommand}
   */
  getAnalysisLogExport(
    args: GetAnalysisLogExportCommandInput,
    options?: CleanRoomsRequestOptions
  ): Promise<GetAnalysisLogExportCommandOutput>;
  getAnalysisLogExport(
    args: GetAnalysisLogExportCommandInput,
    cb: (err: any, data?: GetAnalysisLogExportCommandOutput) => void
  ): void;
  getAnalysisLogExport(
    args: GetAnalysisLogExportCommandInput,
    options: CleanRoomsRequestOptions,
    cb: (err: any, data?: GetAnalysisLogExportCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAnalysisTemplateCommand}
   */
  getAnalysisTemplate(
    args: GetAnalysisTemplateCommandInput,
    options?: CleanRoomsRequestOptions
  ): Promise<GetAnalysisTemplateCommandOutput>;
  getAnalysisTemplate(
    args: GetAnalysisTemplateCommandInput,
    cb: (err: any, data?: GetAnalysisTemplateCommandOutput) => void
  ): void;
  getAnalysisTemplate(
    args: GetAnalysisTemplateCommandInput,
    options: CleanRoomsRequestOptions,
    cb: (err: any, data?: GetAnalysisTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCollaborationCommand}
   */
  getCollaboration(
    args: GetCollaborationCommandInput,
    options?: CleanRoomsRequestOptions
  ): Promise<GetCollaborationCommandOutput>;
  getCollaboration(
    args: GetCollaborationCommandInput,
    cb: (err: any, data?: GetCollaborationCommandOutput) => void
  ): void;
  getCollaboration(
    args: GetCollaborationCommandInput,
    options: CleanRoomsRequestOptions,
    cb: (err: any, data?: GetCollaborationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCollaborationAnalysisTemplateCommand}
   */
  getCollaborationAnalysisTemplate(
    args: GetCollaborationAnalysisTemplateCommandInput,
    options?: CleanRoomsRequestOptions
  ): Promise<GetCollaborationAnalysisTemplateCommandOutput>;
  getCollaborationAnalysisTemplate(
    args: GetCollaborationAnalysisTemplateCommandInput,
    cb: (err: any, data?: GetCollaborationAnalysisTemplateCommandOutput) => void
  ): void;
  getCollaborationAnalysisTemplate(
    args: GetCollaborationAnalysisTemplateCommandInput,
    options: CleanRoomsRequestOptions,
    cb: (err: any, data?: GetCollaborationAnalysisTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCollaborationChangeRequestCommand}
   */
  getCollaborationChangeRequest(
    args: GetCollaborationChangeRequestCommandInput,
    options?: CleanRoomsRequestOptions
  ): Promise<GetCollaborationChangeRequestCommandOutput>;
  getCollaborationChangeRequest(
    args: GetCollaborationChangeRequestCommandInput,
    cb: (err: any, data?: GetCollaborationChangeRequestCommandOutput) => void
  ): void;
  getCollaborationChangeRequest(
    args: GetCollaborationChangeRequestCommandInput,
    options: CleanRoomsRequestOptions,
    cb: (err: any, data?: GetCollaborationChangeRequestCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCollaborationConfiguredAudienceModelAssociationCommand}
   */
  getCollaborationConfiguredAudienceModelAssociation(
    args: GetCollaborationConfiguredAudienceModelAssociationCommandInput,
    options?: CleanRoomsRequestOptions
  ): Promise<GetCollaborationConfiguredAudienceModelAssociationCommandOutput>;
  getCollaborationConfiguredAudienceModelAssociation(
    args: GetCollaborationConfiguredAudienceModelAssociationCommandInput,
    cb: (err: any, data?: GetCollaborationConfiguredAudienceModelAssociationCommandOutput) => void
  ): void;
  getCollaborationConfiguredAudienceModelAssociation(
    args: GetCollaborationConfiguredAudienceModelAssociationCommandInput,
    options: CleanRoomsRequestOptions,
    cb: (err: any, data?: GetCollaborationConfiguredAudienceModelAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCollaborationIdNamespaceAssociationCommand}
   */
  getCollaborationIdNamespaceAssociation(
    args: GetCollaborationIdNamespaceAssociationCommandInput,
    options?: CleanRoomsRequestOptions
  ): Promise<GetCollaborationIdNamespaceAssociationCommandOutput>;
  getCollaborationIdNamespaceAssociation(
    args: GetCollaborationIdNamespaceAssociationCommandInput,
    cb: (err: any, data?: GetCollaborationIdNamespaceAssociationCommandOutput) => void
  ): void;
  getCollaborationIdNamespaceAssociation(
    args: GetCollaborationIdNamespaceAssociationCommandInput,
    options: CleanRoomsRequestOptions,
    cb: (err: any, data?: GetCollaborationIdNamespaceAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCollaborationPrivacyBudgetTemplateCommand}
   */
  getCollaborationPrivacyBudgetTemplate(
    args: GetCollaborationPrivacyBudgetTemplateCommandInput,
    options?: CleanRoomsRequestOptions
  ): Promise<GetCollaborationPrivacyBudgetTemplateCommandOutput>;
  getCollaborationPrivacyBudgetTemplate(
    args: GetCollaborationPrivacyBudgetTemplateCommandInput,
    cb: (err: any, data?: GetCollaborationPrivacyBudgetTemplateCommandOutput) => void
  ): void;
  getCollaborationPrivacyBudgetTemplate(
    args: GetCollaborationPrivacyBudgetTemplateCommandInput,
    options: CleanRoomsRequestOptions,
    cb: (err: any, data?: GetCollaborationPrivacyBudgetTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link GetConfiguredAudienceModelAssociationCommand}
   */
  getConfiguredAudienceModelAssociation(
    args: GetConfiguredAudienceModelAssociationCommandInput,
    options?: CleanRoomsRequestOptions
  ): Promise<GetConfiguredAudienceModelAssociationCommandOutput>;
  getConfiguredAudienceModelAssociation(
    args: GetConfiguredAudienceModelAssociationCommandInput,
    cb: (err: any, data?: GetConfiguredAudienceModelAssociationCommandOutput) => void
  ): void;
  getConfiguredAudienceModelAssociation(
    args: GetConfiguredAudienceModelAssociationCommandInput,
    options: CleanRoomsRequestOptions,
    cb: (err: any, data?: GetConfiguredAudienceModelAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetConfiguredTableCommand}
   */
  getConfiguredTable(
    args: GetConfiguredTableCommandInput,
    options?: CleanRoomsRequestOptions
  ): Promise<GetConfiguredTableCommandOutput>;
  getConfiguredTable(
    args: GetConfiguredTableCommandInput,
    cb: (err: any, data?: GetConfiguredTableCommandOutput) => void
  ): void;
  getConfiguredTable(
    args: GetConfiguredTableCommandInput,
    options: CleanRoomsRequestOptions,
    cb: (err: any, data?: GetConfiguredTableCommandOutput) => void
  ): void;

  /**
   * @see {@link GetConfiguredTableAnalysisRuleCommand}
   */
  getConfiguredTableAnalysisRule(
    args: GetConfiguredTableAnalysisRuleCommandInput,
    options?: CleanRoomsRequestOptions
  ): Promise<GetConfiguredTableAnalysisRuleCommandOutput>;
  getConfiguredTableAnalysisRule(
    args: GetConfiguredTableAnalysisRuleCommandInput,
    cb: (err: any, data?: GetConfiguredTableAnalysisRuleCommandOutput) => void
  ): void;
  getConfiguredTableAnalysisRule(
    args: GetConfiguredTableAnalysisRuleCommandInput,
    options: CleanRoomsRequestOptions,
    cb: (err: any, data?: GetConfiguredTableAnalysisRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link GetConfiguredTableAssociationCommand}
   */
  getConfiguredTableAssociation(
    args: GetConfiguredTableAssociationCommandInput,
    options?: CleanRoomsRequestOptions
  ): Promise<GetConfiguredTableAssociationCommandOutput>;
  getConfiguredTableAssociation(
    args: GetConfiguredTableAssociationCommandInput,
    cb: (err: any, data?: GetConfiguredTableAssociationCommandOutput) => void
  ): void;
  getConfiguredTableAssociation(
    args: GetConfiguredTableAssociationCommandInput,
    options: CleanRoomsRequestOptions,
    cb: (err: any, data?: GetConfiguredTableAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetConfiguredTableAssociationAnalysisRuleCommand}
   */
  getConfiguredTableAssociationAnalysisRule(
    args: GetConfiguredTableAssociationAnalysisRuleCommandInput,
    options?: CleanRoomsRequestOptions
  ): Promise<GetConfiguredTableAssociationAnalysisRuleCommandOutput>;
  getConfiguredTableAssociationAnalysisRule(
    args: GetConfiguredTableAssociationAnalysisRuleCommandInput,
    cb: (err: any, data?: GetConfiguredTableAssociationAnalysisRuleCommandOutput) => void
  ): void;
  getConfiguredTableAssociationAnalysisRule(
    args: GetConfiguredTableAssociationAnalysisRuleCommandInput,
    options: CleanRoomsRequestOptions,
    cb: (err: any, data?: GetConfiguredTableAssociationAnalysisRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link GetIdMappingTableCommand}
   */
  getIdMappingTable(
    args: GetIdMappingTableCommandInput,
    options?: CleanRoomsRequestOptions
  ): Promise<GetIdMappingTableCommandOutput>;
  getIdMappingTable(
    args: GetIdMappingTableCommandInput,
    cb: (err: any, data?: GetIdMappingTableCommandOutput) => void
  ): void;
  getIdMappingTable(
    args: GetIdMappingTableCommandInput,
    options: CleanRoomsRequestOptions,
    cb: (err: any, data?: GetIdMappingTableCommandOutput) => void
  ): void;

  /**
   * @see {@link GetIdNamespaceAssociationCommand}
   */
  getIdNamespaceAssociation(
    args: GetIdNamespaceAssociationCommandInput,
    options?: CleanRoomsRequestOptions
  ): Promise<GetIdNamespaceAssociationCommandOutput>;
  getIdNamespaceAssociation(
    args: GetIdNamespaceAssociationCommandInput,
    cb: (err: any, data?: GetIdNamespaceAssociationCommandOutput) => void
  ): void;
  getIdNamespaceAssociation(
    args: GetIdNamespaceAssociationCommandInput,
    options: CleanRoomsRequestOptions,
    cb: (err: any, data?: GetIdNamespaceAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetIntermediateTableCommand}
   */
  getIntermediateTable(
    args: GetIntermediateTableCommandInput,
    options?: CleanRoomsRequestOptions
  ): Promise<GetIntermediateTableCommandOutput>;
  getIntermediateTable(
    args: GetIntermediateTableCommandInput,
    cb: (err: any, data?: GetIntermediateTableCommandOutput) => void
  ): void;
  getIntermediateTable(
    args: GetIntermediateTableCommandInput,
    options: CleanRoomsRequestOptions,
    cb: (err: any, data?: GetIntermediateTableCommandOutput) => void
  ): void;

  /**
   * @see {@link GetIntermediateTableAnalysisRuleCommand}
   */
  getIntermediateTableAnalysisRule(
    args: GetIntermediateTableAnalysisRuleCommandInput,
    options?: CleanRoomsRequestOptions
  ): Promise<GetIntermediateTableAnalysisRuleCommandOutput>;
  getIntermediateTableAnalysisRule(
    args: GetIntermediateTableAnalysisRuleCommandInput,
    cb: (err: any, data?: GetIntermediateTableAnalysisRuleCommandOutput) => void
  ): void;
  getIntermediateTableAnalysisRule(
    args: GetIntermediateTableAnalysisRuleCommandInput,
    options: CleanRoomsRequestOptions,
    cb: (err: any, data?: GetIntermediateTableAnalysisRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link GetMembershipCommand}
   */
  getMembership(
    args: GetMembershipCommandInput,
    options?: CleanRoomsRequestOptions
  ): Promise<GetMembershipCommandOutput>;
  getMembership(
    args: GetMembershipCommandInput,
    cb: (err: any, data?: GetMembershipCommandOutput) => void
  ): void;
  getMembership(
    args: GetMembershipCommandInput,
    options: CleanRoomsRequestOptions,
    cb: (err: any, data?: GetMembershipCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPrivacyBudgetTemplateCommand}
   */
  getPrivacyBudgetTemplate(
    args: GetPrivacyBudgetTemplateCommandInput,
    options?: CleanRoomsRequestOptions
  ): Promise<GetPrivacyBudgetTemplateCommandOutput>;
  getPrivacyBudgetTemplate(
    args: GetPrivacyBudgetTemplateCommandInput,
    cb: (err: any, data?: GetPrivacyBudgetTemplateCommandOutput) => void
  ): void;
  getPrivacyBudgetTemplate(
    args: GetPrivacyBudgetTemplateCommandInput,
    options: CleanRoomsRequestOptions,
    cb: (err: any, data?: GetPrivacyBudgetTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link GetProtectedJobCommand}
   */
  getProtectedJob(
    args: GetProtectedJobCommandInput,
    options?: CleanRoomsRequestOptions
  ): Promise<GetProtectedJobCommandOutput>;
  getProtectedJob(
    args: GetProtectedJobCommandInput,
    cb: (err: any, data?: GetProtectedJobCommandOutput) => void
  ): void;
  getProtectedJob(
    args: GetProtectedJobCommandInput,
    options: CleanRoomsRequestOptions,
    cb: (err: any, data?: GetProtectedJobCommandOutput) => void
  ): void;

  /**
   * @see {@link GetProtectedQueryCommand}
   */
  getProtectedQuery(
    args: GetProtectedQueryCommandInput,
    options?: CleanRoomsRequestOptions
  ): Promise<GetProtectedQueryCommandOutput>;
  getProtectedQuery(
    args: GetProtectedQueryCommandInput,
    cb: (err: any, data?: GetProtectedQueryCommandOutput) => void
  ): void;
  getProtectedQuery(
    args: GetProtectedQueryCommandInput,
    options: CleanRoomsRequestOptions,
    cb: (err: any, data?: GetProtectedQueryCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSchemaCommand}
   */
  getSchema(
    args: GetSchemaCommandInput,
    options?: CleanRoomsRequestOptions
  ): Promise<GetSchemaCommandOutput>;
  getSchema(
    args: GetSchemaCommandInput,
    cb: (err: any, data?: GetSchemaCommandOutput) => void
  ): void;
  getSchema(
    args: GetSchemaCommandInput,
    options: CleanRoomsRequestOptions,
    cb: (err: any, data?: GetSchemaCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSchemaAnalysisRuleCommand}
   */
  getSchemaAnalysisRule(
    args: GetSchemaAnalysisRuleCommandInput,
    options?: CleanRoomsRequestOptions
  ): Promise<GetSchemaAnalysisRuleCommandOutput>;
  getSchemaAnalysisRule(
    args: GetSchemaAnalysisRuleCommandInput,
    cb: (err: any, data?: GetSchemaAnalysisRuleCommandOutput) => void
  ): void;
  getSchemaAnalysisRule(
    args: GetSchemaAnalysisRuleCommandInput,
    options: CleanRoomsRequestOptions,
    cb: (err: any, data?: GetSchemaAnalysisRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAnalysisLogExportsCommand}
   */
  listAnalysisLogExports(
    args: ListAnalysisLogExportsCommandInput,
    options?: CleanRoomsRequestOptions
  ): Promise<ListAnalysisLogExportsCommandOutput>;
  listAnalysisLogExports(
    args: ListAnalysisLogExportsCommandInput,
    cb: (err: any, data?: ListAnalysisLogExportsCommandOutput) => void
  ): void;
  listAnalysisLogExports(
    args: ListAnalysisLogExportsCommandInput,
    options: CleanRoomsRequestOptions,
    cb: (err: any, data?: ListAnalysisLogExportsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAnalysisTemplatesCommand}
   */
  listAnalysisTemplates(
    args: ListAnalysisTemplatesCommandInput,
    options?: CleanRoomsRequestOptions
  ): Promise<ListAnalysisTemplatesCommandOutput>;
  listAnalysisTemplates(
    args: ListAnalysisTemplatesCommandInput,
    cb: (err: any, data?: ListAnalysisTemplatesCommandOutput) => void
  ): void;
  listAnalysisTemplates(
    args: ListAnalysisTemplatesCommandInput,
    options: CleanRoomsRequestOptions,
    cb: (err: any, data?: ListAnalysisTemplatesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCollaborationAnalysisTemplatesCommand}
   */
  listCollaborationAnalysisTemplates(
    args: ListCollaborationAnalysisTemplatesCommandInput,
    options?: CleanRoomsRequestOptions
  ): Promise<ListCollaborationAnalysisTemplatesCommandOutput>;
  listCollaborationAnalysisTemplates(
    args: ListCollaborationAnalysisTemplatesCommandInput,
    cb: (err: any, data?: ListCollaborationAnalysisTemplatesCommandOutput) => void
  ): void;
  listCollaborationAnalysisTemplates(
    args: ListCollaborationAnalysisTemplatesCommandInput,
    options: CleanRoomsRequestOptions,
    cb: (err: any, data?: ListCollaborationAnalysisTemplatesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCollaborationChangeRequestsCommand}
   */
  listCollaborationChangeRequests(
    args: ListCollaborationChangeRequestsCommandInput,
    options?: CleanRoomsRequestOptions
  ): Promise<ListCollaborationChangeRequestsCommandOutput>;
  listCollaborationChangeRequests(
    args: ListCollaborationChangeRequestsCommandInput,
    cb: (err: any, data?: ListCollaborationChangeRequestsCommandOutput) => void
  ): void;
  listCollaborationChangeRequests(
    args: ListCollaborationChangeRequestsCommandInput,
    options: CleanRoomsRequestOptions,
    cb: (err: any, data?: ListCollaborationChangeRequestsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCollaborationConfiguredAudienceModelAssociationsCommand}
   */
  listCollaborationConfiguredAudienceModelAssociations(
    args: ListCollaborationConfiguredAudienceModelAssociationsCommandInput,
    options?: CleanRoomsRequestOptions
  ): Promise<ListCollaborationConfiguredAudienceModelAssociationsCommandOutput>;
  listCollaborationConfiguredAudienceModelAssociations(
    args: ListCollaborationConfiguredAudienceModelAssociationsCommandInput,
    cb: (err: any, data?: ListCollaborationConfiguredAudienceModelAssociationsCommandOutput) => void
  ): void;
  listCollaborationConfiguredAudienceModelAssociations(
    args: ListCollaborationConfiguredAudienceModelAssociationsCommandInput,
    options: CleanRoomsRequestOptions,
    cb: (err: any, data?: ListCollaborationConfiguredAudienceModelAssociationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCollaborationIdNamespaceAssociationsCommand}
   */
  listCollaborationIdNamespaceAssociations(
    args: ListCollaborationIdNamespaceAssociationsCommandInput,
    options?: CleanRoomsRequestOptions
  ): Promise<ListCollaborationIdNamespaceAssociationsCommandOutput>;
  listCollaborationIdNamespaceAssociations(
    args: ListCollaborationIdNamespaceAssociationsCommandInput,
    cb: (err: any, data?: ListCollaborationIdNamespaceAssociationsCommandOutput) => void
  ): void;
  listCollaborationIdNamespaceAssociations(
    args: ListCollaborationIdNamespaceAssociationsCommandInput,
    options: CleanRoomsRequestOptions,
    cb: (err: any, data?: ListCollaborationIdNamespaceAssociationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCollaborationPrivacyBudgetsCommand}
   */
  listCollaborationPrivacyBudgets(
    args: ListCollaborationPrivacyBudgetsCommandInput,
    options?: CleanRoomsRequestOptions
  ): Promise<ListCollaborationPrivacyBudgetsCommandOutput>;
  listCollaborationPrivacyBudgets(
    args: ListCollaborationPrivacyBudgetsCommandInput,
    cb: (err: any, data?: ListCollaborationPrivacyBudgetsCommandOutput) => void
  ): void;
  listCollaborationPrivacyBudgets(
    args: ListCollaborationPrivacyBudgetsCommandInput,
    options: CleanRoomsRequestOptions,
    cb: (err: any, data?: ListCollaborationPrivacyBudgetsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCollaborationPrivacyBudgetTemplatesCommand}
   */
  listCollaborationPrivacyBudgetTemplates(
    args: ListCollaborationPrivacyBudgetTemplatesCommandInput,
    options?: CleanRoomsRequestOptions
  ): Promise<ListCollaborationPrivacyBudgetTemplatesCommandOutput>;
  listCollaborationPrivacyBudgetTemplates(
    args: ListCollaborationPrivacyBudgetTemplatesCommandInput,
    cb: (err: any, data?: ListCollaborationPrivacyBudgetTemplatesCommandOutput) => void
  ): void;
  listCollaborationPrivacyBudgetTemplates(
    args: ListCollaborationPrivacyBudgetTemplatesCommandInput,
    options: CleanRoomsRequestOptions,
    cb: (err: any, data?: ListCollaborationPrivacyBudgetTemplatesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCollaborationsCommand}
   */
  listCollaborations(): Promise<ListCollaborationsCommandOutput>;
  listCollaborations(
    args: ListCollaborationsCommandInput,
    options?: CleanRoomsRequestOptions
  ): Promise<ListCollaborationsCommandOutput>;
  listCollaborations(
    args: ListCollaborationsCommandInput,
    cb: (err: any, data?: ListCollaborationsCommandOutput) => void
  ): void;
  listCollaborations(
    args: ListCollaborationsCommandInput,
    options: CleanRoomsRequestOptions,
    cb: (err: any, data?: ListCollaborationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListConfiguredAudienceModelAssociationsCommand}
   */
  listConfiguredAudienceModelAssociations(
    args: ListConfiguredAudienceModelAssociationsCommandInput,
    options?: CleanRoomsRequestOptions
  ): Promise<ListConfiguredAudienceModelAssociationsCommandOutput>;
  listConfiguredAudienceModelAssociations(
    args: ListConfiguredAudienceModelAssociationsCommandInput,
    cb: (err: any, data?: ListConfiguredAudienceModelAssociationsCommandOutput) => void
  ): void;
  listConfiguredAudienceModelAssociations(
    args: ListConfiguredAudienceModelAssociationsCommandInput,
    options: CleanRoomsRequestOptions,
    cb: (err: any, data?: ListConfiguredAudienceModelAssociationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListConfiguredTableAssociationsCommand}
   */
  listConfiguredTableAssociations(
    args: ListConfiguredTableAssociationsCommandInput,
    options?: CleanRoomsRequestOptions
  ): Promise<ListConfiguredTableAssociationsCommandOutput>;
  listConfiguredTableAssociations(
    args: ListConfiguredTableAssociationsCommandInput,
    cb: (err: any, data?: ListConfiguredTableAssociationsCommandOutput) => void
  ): void;
  listConfiguredTableAssociations(
    args: ListConfiguredTableAssociationsCommandInput,
    options: CleanRoomsRequestOptions,
    cb: (err: any, data?: ListConfiguredTableAssociationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListConfiguredTablesCommand}
   */
  listConfiguredTables(): Promise<ListConfiguredTablesCommandOutput>;
  listConfiguredTables(
    args: ListConfiguredTablesCommandInput,
    options?: CleanRoomsRequestOptions
  ): Promise<ListConfiguredTablesCommandOutput>;
  listConfiguredTables(
    args: ListConfiguredTablesCommandInput,
    cb: (err: any, data?: ListConfiguredTablesCommandOutput) => void
  ): void;
  listConfiguredTables(
    args: ListConfiguredTablesCommandInput,
    options: CleanRoomsRequestOptions,
    cb: (err: any, data?: ListConfiguredTablesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListIdMappingTablesCommand}
   */
  listIdMappingTables(
    args: ListIdMappingTablesCommandInput,
    options?: CleanRoomsRequestOptions
  ): Promise<ListIdMappingTablesCommandOutput>;
  listIdMappingTables(
    args: ListIdMappingTablesCommandInput,
    cb: (err: any, data?: ListIdMappingTablesCommandOutput) => void
  ): void;
  listIdMappingTables(
    args: ListIdMappingTablesCommandInput,
    options: CleanRoomsRequestOptions,
    cb: (err: any, data?: ListIdMappingTablesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListIdNamespaceAssociationsCommand}
   */
  listIdNamespaceAssociations(
    args: ListIdNamespaceAssociationsCommandInput,
    options?: CleanRoomsRequestOptions
  ): Promise<ListIdNamespaceAssociationsCommandOutput>;
  listIdNamespaceAssociations(
    args: ListIdNamespaceAssociationsCommandInput,
    cb: (err: any, data?: ListIdNamespaceAssociationsCommandOutput) => void
  ): void;
  listIdNamespaceAssociations(
    args: ListIdNamespaceAssociationsCommandInput,
    options: CleanRoomsRequestOptions,
    cb: (err: any, data?: ListIdNamespaceAssociationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListIntermediateTablesCommand}
   */
  listIntermediateTables(
    args: ListIntermediateTablesCommandInput,
    options?: CleanRoomsRequestOptions
  ): Promise<ListIntermediateTablesCommandOutput>;
  listIntermediateTables(
    args: ListIntermediateTablesCommandInput,
    cb: (err: any, data?: ListIntermediateTablesCommandOutput) => void
  ): void;
  listIntermediateTables(
    args: ListIntermediateTablesCommandInput,
    options: CleanRoomsRequestOptions,
    cb: (err: any, data?: ListIntermediateTablesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListIntermediateTableVersionsCommand}
   */
  listIntermediateTableVersions(
    args: ListIntermediateTableVersionsCommandInput,
    options?: CleanRoomsRequestOptions
  ): Promise<ListIntermediateTableVersionsCommandOutput>;
  listIntermediateTableVersions(
    args: ListIntermediateTableVersionsCommandInput,
    cb: (err: any, data?: ListIntermediateTableVersionsCommandOutput) => void
  ): void;
  listIntermediateTableVersions(
    args: ListIntermediateTableVersionsCommandInput,
    options: CleanRoomsRequestOptions,
    cb: (err: any, data?: ListIntermediateTableVersionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListMembersCommand}
   */
  listMembers(
    args: ListMembersCommandInput,
    options?: CleanRoomsRequestOptions
  ): Promise<ListMembersCommandOutput>;
  listMembers(
    args: ListMembersCommandInput,
    cb: (err: any, data?: ListMembersCommandOutput) => void
  ): void;
  listMembers(
    args: ListMembersCommandInput,
    options: CleanRoomsRequestOptions,
    cb: (err: any, data?: ListMembersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListMembershipsCommand}
   */
  listMemberships(): Promise<ListMembershipsCommandOutput>;
  listMemberships(
    args: ListMembershipsCommandInput,
    options?: CleanRoomsRequestOptions
  ): Promise<ListMembershipsCommandOutput>;
  listMemberships(
    args: ListMembershipsCommandInput,
    cb: (err: any, data?: ListMembershipsCommandOutput) => void
  ): void;
  listMemberships(
    args: ListMembershipsCommandInput,
    options: CleanRoomsRequestOptions,
    cb: (err: any, data?: ListMembershipsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPrivacyBudgetsCommand}
   */
  listPrivacyBudgets(
    args: ListPrivacyBudgetsCommandInput,
    options?: CleanRoomsRequestOptions
  ): Promise<ListPrivacyBudgetsCommandOutput>;
  listPrivacyBudgets(
    args: ListPrivacyBudgetsCommandInput,
    cb: (err: any, data?: ListPrivacyBudgetsCommandOutput) => void
  ): void;
  listPrivacyBudgets(
    args: ListPrivacyBudgetsCommandInput,
    options: CleanRoomsRequestOptions,
    cb: (err: any, data?: ListPrivacyBudgetsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPrivacyBudgetTemplatesCommand}
   */
  listPrivacyBudgetTemplates(
    args: ListPrivacyBudgetTemplatesCommandInput,
    options?: CleanRoomsRequestOptions
  ): Promise<ListPrivacyBudgetTemplatesCommandOutput>;
  listPrivacyBudgetTemplates(
    args: ListPrivacyBudgetTemplatesCommandInput,
    cb: (err: any, data?: ListPrivacyBudgetTemplatesCommandOutput) => void
  ): void;
  listPrivacyBudgetTemplates(
    args: ListPrivacyBudgetTemplatesCommandInput,
    options: CleanRoomsRequestOptions,
    cb: (err: any, data?: ListPrivacyBudgetTemplatesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListProtectedJobsCommand}
   */
  listProtectedJobs(
    args: ListProtectedJobsCommandInput,
    options?: CleanRoomsRequestOptions
  ): Promise<ListProtectedJobsCommandOutput>;
  listProtectedJobs(
    args: ListProtectedJobsCommandInput,
    cb: (err: any, data?: ListProtectedJobsCommandOutput) => void
  ): void;
  listProtectedJobs(
    args: ListProtectedJobsCommandInput,
    options: CleanRoomsRequestOptions,
    cb: (err: any, data?: ListProtectedJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListProtectedQueriesCommand}
   */
  listProtectedQueries(
    args: ListProtectedQueriesCommandInput,
    options?: CleanRoomsRequestOptions
  ): Promise<ListProtectedQueriesCommandOutput>;
  listProtectedQueries(
    args: ListProtectedQueriesCommandInput,
    cb: (err: any, data?: ListProtectedQueriesCommandOutput) => void
  ): void;
  listProtectedQueries(
    args: ListProtectedQueriesCommandInput,
    options: CleanRoomsRequestOptions,
    cb: (err: any, data?: ListProtectedQueriesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSchemasCommand}
   */
  listSchemas(
    args: ListSchemasCommandInput,
    options?: CleanRoomsRequestOptions
  ): Promise<ListSchemasCommandOutput>;
  listSchemas(
    args: ListSchemasCommandInput,
    cb: (err: any, data?: ListSchemasCommandOutput) => void
  ): void;
  listSchemas(
    args: ListSchemasCommandInput,
    options: CleanRoomsRequestOptions,
    cb: (err: any, data?: ListSchemasCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: CleanRoomsRequestOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: CleanRoomsRequestOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link PopulateIdMappingTableCommand}
   */
  populateIdMappingTable(
    args: PopulateIdMappingTableCommandInput,
    options?: CleanRoomsRequestOptions
  ): Promise<PopulateIdMappingTableCommandOutput>;
  populateIdMappingTable(
    args: PopulateIdMappingTableCommandInput,
    cb: (err: any, data?: PopulateIdMappingTableCommandOutput) => void
  ): void;
  populateIdMappingTable(
    args: PopulateIdMappingTableCommandInput,
    options: CleanRoomsRequestOptions,
    cb: (err: any, data?: PopulateIdMappingTableCommandOutput) => void
  ): void;

  /**
   * @see {@link PopulateIntermediateTableCommand}
   */
  populateIntermediateTable(
    args: PopulateIntermediateTableCommandInput,
    options?: CleanRoomsRequestOptions
  ): Promise<PopulateIntermediateTableCommandOutput>;
  populateIntermediateTable(
    args: PopulateIntermediateTableCommandInput,
    cb: (err: any, data?: PopulateIntermediateTableCommandOutput) => void
  ): void;
  populateIntermediateTable(
    args: PopulateIntermediateTableCommandInput,
    options: CleanRoomsRequestOptions,
    cb: (err: any, data?: PopulateIntermediateTableCommandOutput) => void
  ): void;

  /**
   * @see {@link PreviewPrivacyImpactCommand}
   */
  previewPrivacyImpact(
    args: PreviewPrivacyImpactCommandInput,
    options?: CleanRoomsRequestOptions
  ): Promise<PreviewPrivacyImpactCommandOutput>;
  previewPrivacyImpact(
    args: PreviewPrivacyImpactCommandInput,
    cb: (err: any, data?: PreviewPrivacyImpactCommandOutput) => void
  ): void;
  previewPrivacyImpact(
    args: PreviewPrivacyImpactCommandInput,
    options: CleanRoomsRequestOptions,
    cb: (err: any, data?: PreviewPrivacyImpactCommandOutput) => void
  ): void;

  /**
   * @see {@link StartAnalysisLogExportCommand}
   */
  startAnalysisLogExport(
    args: StartAnalysisLogExportCommandInput,
    options?: CleanRoomsRequestOptions
  ): Promise<StartAnalysisLogExportCommandOutput>;
  startAnalysisLogExport(
    args: StartAnalysisLogExportCommandInput,
    cb: (err: any, data?: StartAnalysisLogExportCommandOutput) => void
  ): void;
  startAnalysisLogExport(
    args: StartAnalysisLogExportCommandInput,
    options: CleanRoomsRequestOptions,
    cb: (err: any, data?: StartAnalysisLogExportCommandOutput) => void
  ): void;

  /**
   * @see {@link StartProtectedJobCommand}
   */
  startProtectedJob(
    args: StartProtectedJobCommandInput,
    options?: CleanRoomsRequestOptions
  ): Promise<StartProtectedJobCommandOutput>;
  startProtectedJob(
    args: StartProtectedJobCommandInput,
    cb: (err: any, data?: StartProtectedJobCommandOutput) => void
  ): void;
  startProtectedJob(
    args: StartProtectedJobCommandInput,
    options: CleanRoomsRequestOptions,
    cb: (err: any, data?: StartProtectedJobCommandOutput) => void
  ): void;

  /**
   * @see {@link StartProtectedQueryCommand}
   */
  startProtectedQuery(
    args: StartProtectedQueryCommandInput,
    options?: CleanRoomsRequestOptions
  ): Promise<StartProtectedQueryCommandOutput>;
  startProtectedQuery(
    args: StartProtectedQueryCommandInput,
    cb: (err: any, data?: StartProtectedQueryCommandOutput) => void
  ): void;
  startProtectedQuery(
    args: StartProtectedQueryCommandInput,
    options: CleanRoomsRequestOptions,
    cb: (err: any, data?: StartProtectedQueryCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: CleanRoomsRequestOptions
  ): Promise<TagResourceCommandOutput>;
  tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  tagResource(
    args: TagResourceCommandInput,
    options: CleanRoomsRequestOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: CleanRoomsRequestOptions
  ): Promise<UntagResourceCommandOutput>;
  untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: CleanRoomsRequestOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateAnalysisTemplateCommand}
   */
  updateAnalysisTemplate(
    args: UpdateAnalysisTemplateCommandInput,
    options?: CleanRoomsRequestOptions
  ): Promise<UpdateAnalysisTemplateCommandOutput>;
  updateAnalysisTemplate(
    args: UpdateAnalysisTemplateCommandInput,
    cb: (err: any, data?: UpdateAnalysisTemplateCommandOutput) => void
  ): void;
  updateAnalysisTemplate(
    args: UpdateAnalysisTemplateCommandInput,
    options: CleanRoomsRequestOptions,
    cb: (err: any, data?: UpdateAnalysisTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateCollaborationCommand}
   */
  updateCollaboration(
    args: UpdateCollaborationCommandInput,
    options?: CleanRoomsRequestOptions
  ): Promise<UpdateCollaborationCommandOutput>;
  updateCollaboration(
    args: UpdateCollaborationCommandInput,
    cb: (err: any, data?: UpdateCollaborationCommandOutput) => void
  ): void;
  updateCollaboration(
    args: UpdateCollaborationCommandInput,
    options: CleanRoomsRequestOptions,
    cb: (err: any, data?: UpdateCollaborationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateCollaborationChangeRequestCommand}
   */
  updateCollaborationChangeRequest(
    args: UpdateCollaborationChangeRequestCommandInput,
    options?: CleanRoomsRequestOptions
  ): Promise<UpdateCollaborationChangeRequestCommandOutput>;
  updateCollaborationChangeRequest(
    args: UpdateCollaborationChangeRequestCommandInput,
    cb: (err: any, data?: UpdateCollaborationChangeRequestCommandOutput) => void
  ): void;
  updateCollaborationChangeRequest(
    args: UpdateCollaborationChangeRequestCommandInput,
    options: CleanRoomsRequestOptions,
    cb: (err: any, data?: UpdateCollaborationChangeRequestCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateConfiguredAudienceModelAssociationCommand}
   */
  updateConfiguredAudienceModelAssociation(
    args: UpdateConfiguredAudienceModelAssociationCommandInput,
    options?: CleanRoomsRequestOptions
  ): Promise<UpdateConfiguredAudienceModelAssociationCommandOutput>;
  updateConfiguredAudienceModelAssociation(
    args: UpdateConfiguredAudienceModelAssociationCommandInput,
    cb: (err: any, data?: UpdateConfiguredAudienceModelAssociationCommandOutput) => void
  ): void;
  updateConfiguredAudienceModelAssociation(
    args: UpdateConfiguredAudienceModelAssociationCommandInput,
    options: CleanRoomsRequestOptions,
    cb: (err: any, data?: UpdateConfiguredAudienceModelAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateConfiguredTableCommand}
   */
  updateConfiguredTable(
    args: UpdateConfiguredTableCommandInput,
    options?: CleanRoomsRequestOptions
  ): Promise<UpdateConfiguredTableCommandOutput>;
  updateConfiguredTable(
    args: UpdateConfiguredTableCommandInput,
    cb: (err: any, data?: UpdateConfiguredTableCommandOutput) => void
  ): void;
  updateConfiguredTable(
    args: UpdateConfiguredTableCommandInput,
    options: CleanRoomsRequestOptions,
    cb: (err: any, data?: UpdateConfiguredTableCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateConfiguredTableAnalysisRuleCommand}
   */
  updateConfiguredTableAnalysisRule(
    args: UpdateConfiguredTableAnalysisRuleCommandInput,
    options?: CleanRoomsRequestOptions
  ): Promise<UpdateConfiguredTableAnalysisRuleCommandOutput>;
  updateConfiguredTableAnalysisRule(
    args: UpdateConfiguredTableAnalysisRuleCommandInput,
    cb: (err: any, data?: UpdateConfiguredTableAnalysisRuleCommandOutput) => void
  ): void;
  updateConfiguredTableAnalysisRule(
    args: UpdateConfiguredTableAnalysisRuleCommandInput,
    options: CleanRoomsRequestOptions,
    cb: (err: any, data?: UpdateConfiguredTableAnalysisRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateConfiguredTableAssociationCommand}
   */
  updateConfiguredTableAssociation(
    args: UpdateConfiguredTableAssociationCommandInput,
    options?: CleanRoomsRequestOptions
  ): Promise<UpdateConfiguredTableAssociationCommandOutput>;
  updateConfiguredTableAssociation(
    args: UpdateConfiguredTableAssociationCommandInput,
    cb: (err: any, data?: UpdateConfiguredTableAssociationCommandOutput) => void
  ): void;
  updateConfiguredTableAssociation(
    args: UpdateConfiguredTableAssociationCommandInput,
    options: CleanRoomsRequestOptions,
    cb: (err: any, data?: UpdateConfiguredTableAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateConfiguredTableAssociationAnalysisRuleCommand}
   */
  updateConfiguredTableAssociationAnalysisRule(
    args: UpdateConfiguredTableAssociationAnalysisRuleCommandInput,
    options?: CleanRoomsRequestOptions
  ): Promise<UpdateConfiguredTableAssociationAnalysisRuleCommandOutput>;
  updateConfiguredTableAssociationAnalysisRule(
    args: UpdateConfiguredTableAssociationAnalysisRuleCommandInput,
    cb: (err: any, data?: UpdateConfiguredTableAssociationAnalysisRuleCommandOutput) => void
  ): void;
  updateConfiguredTableAssociationAnalysisRule(
    args: UpdateConfiguredTableAssociationAnalysisRuleCommandInput,
    options: CleanRoomsRequestOptions,
    cb: (err: any, data?: UpdateConfiguredTableAssociationAnalysisRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateIdMappingTableCommand}
   */
  updateIdMappingTable(
    args: UpdateIdMappingTableCommandInput,
    options?: CleanRoomsRequestOptions
  ): Promise<UpdateIdMappingTableCommandOutput>;
  updateIdMappingTable(
    args: UpdateIdMappingTableCommandInput,
    cb: (err: any, data?: UpdateIdMappingTableCommandOutput) => void
  ): void;
  updateIdMappingTable(
    args: UpdateIdMappingTableCommandInput,
    options: CleanRoomsRequestOptions,
    cb: (err: any, data?: UpdateIdMappingTableCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateIdNamespaceAssociationCommand}
   */
  updateIdNamespaceAssociation(
    args: UpdateIdNamespaceAssociationCommandInput,
    options?: CleanRoomsRequestOptions
  ): Promise<UpdateIdNamespaceAssociationCommandOutput>;
  updateIdNamespaceAssociation(
    args: UpdateIdNamespaceAssociationCommandInput,
    cb: (err: any, data?: UpdateIdNamespaceAssociationCommandOutput) => void
  ): void;
  updateIdNamespaceAssociation(
    args: UpdateIdNamespaceAssociationCommandInput,
    options: CleanRoomsRequestOptions,
    cb: (err: any, data?: UpdateIdNamespaceAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateIntermediateTableCommand}
   */
  updateIntermediateTable(
    args: UpdateIntermediateTableCommandInput,
    options?: CleanRoomsRequestOptions
  ): Promise<UpdateIntermediateTableCommandOutput>;
  updateIntermediateTable(
    args: UpdateIntermediateTableCommandInput,
    cb: (err: any, data?: UpdateIntermediateTableCommandOutput) => void
  ): void;
  updateIntermediateTable(
    args: UpdateIntermediateTableCommandInput,
    options: CleanRoomsRequestOptions,
    cb: (err: any, data?: UpdateIntermediateTableCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateIntermediateTableAnalysisRuleCommand}
   */
  updateIntermediateTableAnalysisRule(
    args: UpdateIntermediateTableAnalysisRuleCommandInput,
    options?: CleanRoomsRequestOptions
  ): Promise<UpdateIntermediateTableAnalysisRuleCommandOutput>;
  updateIntermediateTableAnalysisRule(
    args: UpdateIntermediateTableAnalysisRuleCommandInput,
    cb: (err: any, data?: UpdateIntermediateTableAnalysisRuleCommandOutput) => void
  ): void;
  updateIntermediateTableAnalysisRule(
    args: UpdateIntermediateTableAnalysisRuleCommandInput,
    options: CleanRoomsRequestOptions,
    cb: (err: any, data?: UpdateIntermediateTableAnalysisRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateMembershipCommand}
   */
  updateMembership(
    args: UpdateMembershipCommandInput,
    options?: CleanRoomsRequestOptions
  ): Promise<UpdateMembershipCommandOutput>;
  updateMembership(
    args: UpdateMembershipCommandInput,
    cb: (err: any, data?: UpdateMembershipCommandOutput) => void
  ): void;
  updateMembership(
    args: UpdateMembershipCommandInput,
    options: CleanRoomsRequestOptions,
    cb: (err: any, data?: UpdateMembershipCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdatePrivacyBudgetTemplateCommand}
   */
  updatePrivacyBudgetTemplate(
    args: UpdatePrivacyBudgetTemplateCommandInput,
    options?: CleanRoomsRequestOptions
  ): Promise<UpdatePrivacyBudgetTemplateCommandOutput>;
  updatePrivacyBudgetTemplate(
    args: UpdatePrivacyBudgetTemplateCommandInput,
    cb: (err: any, data?: UpdatePrivacyBudgetTemplateCommandOutput) => void
  ): void;
  updatePrivacyBudgetTemplate(
    args: UpdatePrivacyBudgetTemplateCommandInput,
    options: CleanRoomsRequestOptions,
    cb: (err: any, data?: UpdatePrivacyBudgetTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateProtectedJobCommand}
   */
  updateProtectedJob(
    args: UpdateProtectedJobCommandInput,
    options?: CleanRoomsRequestOptions
  ): Promise<UpdateProtectedJobCommandOutput>;
  updateProtectedJob(
    args: UpdateProtectedJobCommandInput,
    cb: (err: any, data?: UpdateProtectedJobCommandOutput) => void
  ): void;
  updateProtectedJob(
    args: UpdateProtectedJobCommandInput,
    options: CleanRoomsRequestOptions,
    cb: (err: any, data?: UpdateProtectedJobCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateProtectedQueryCommand}
   */
  updateProtectedQuery(
    args: UpdateProtectedQueryCommandInput,
    options?: CleanRoomsRequestOptions
  ): Promise<UpdateProtectedQueryCommandOutput>;
  updateProtectedQuery(
    args: UpdateProtectedQueryCommandInput,
    cb: (err: any, data?: UpdateProtectedQueryCommandOutput) => void
  ): void;
  updateProtectedQuery(
    args: UpdateProtectedQueryCommandInput,
    options: CleanRoomsRequestOptions,
    cb: (err: any, data?: UpdateProtectedQueryCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAnalysisLogExportsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAnalysisLogExportsCommandOutput}.
   */
  paginateListAnalysisLogExports(
    args: ListAnalysisLogExportsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAnalysisLogExportsCommandOutput>;

  /**
   * @see {@link ListAnalysisTemplatesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAnalysisTemplatesCommandOutput}.
   */
  paginateListAnalysisTemplates(
    args: ListAnalysisTemplatesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAnalysisTemplatesCommandOutput>;

  /**
   * @see {@link ListCollaborationAnalysisTemplatesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListCollaborationAnalysisTemplatesCommandOutput}.
   */
  paginateListCollaborationAnalysisTemplates(
    args: ListCollaborationAnalysisTemplatesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListCollaborationAnalysisTemplatesCommandOutput>;

  /**
   * @see {@link ListCollaborationChangeRequestsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListCollaborationChangeRequestsCommandOutput}.
   */
  paginateListCollaborationChangeRequests(
    args: ListCollaborationChangeRequestsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListCollaborationChangeRequestsCommandOutput>;

  /**
   * @see {@link ListCollaborationConfiguredAudienceModelAssociationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListCollaborationConfiguredAudienceModelAssociationsCommandOutput}.
   */
  paginateListCollaborationConfiguredAudienceModelAssociations(
    args: ListCollaborationConfiguredAudienceModelAssociationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListCollaborationConfiguredAudienceModelAssociationsCommandOutput>;

  /**
   * @see {@link ListCollaborationIdNamespaceAssociationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListCollaborationIdNamespaceAssociationsCommandOutput}.
   */
  paginateListCollaborationIdNamespaceAssociations(
    args: ListCollaborationIdNamespaceAssociationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListCollaborationIdNamespaceAssociationsCommandOutput>;

  /**
   * @see {@link ListCollaborationPrivacyBudgetsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListCollaborationPrivacyBudgetsCommandOutput}.
   */
  paginateListCollaborationPrivacyBudgets(
    args: ListCollaborationPrivacyBudgetsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListCollaborationPrivacyBudgetsCommandOutput>;

  /**
   * @see {@link ListCollaborationPrivacyBudgetTemplatesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListCollaborationPrivacyBudgetTemplatesCommandOutput}.
   */
  paginateListCollaborationPrivacyBudgetTemplates(
    args: ListCollaborationPrivacyBudgetTemplatesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListCollaborationPrivacyBudgetTemplatesCommandOutput>;

  /**
   * @see {@link ListCollaborationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListCollaborationsCommandOutput}.
   */
  paginateListCollaborations(
    args?: ListCollaborationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListCollaborationsCommandOutput>;

  /**
   * @see {@link ListConfiguredAudienceModelAssociationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListConfiguredAudienceModelAssociationsCommandOutput}.
   */
  paginateListConfiguredAudienceModelAssociations(
    args: ListConfiguredAudienceModelAssociationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListConfiguredAudienceModelAssociationsCommandOutput>;

  /**
   * @see {@link ListConfiguredTableAssociationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListConfiguredTableAssociationsCommandOutput}.
   */
  paginateListConfiguredTableAssociations(
    args: ListConfiguredTableAssociationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListConfiguredTableAssociationsCommandOutput>;

  /**
   * @see {@link ListConfiguredTablesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListConfiguredTablesCommandOutput}.
   */
  paginateListConfiguredTables(
    args?: ListConfiguredTablesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListConfiguredTablesCommandOutput>;

  /**
   * @see {@link ListIdMappingTablesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListIdMappingTablesCommandOutput}.
   */
  paginateListIdMappingTables(
    args: ListIdMappingTablesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListIdMappingTablesCommandOutput>;

  /**
   * @see {@link ListIdNamespaceAssociationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListIdNamespaceAssociationsCommandOutput}.
   */
  paginateListIdNamespaceAssociations(
    args: ListIdNamespaceAssociationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListIdNamespaceAssociationsCommandOutput>;

  /**
   * @see {@link ListIntermediateTablesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListIntermediateTablesCommandOutput}.
   */
  paginateListIntermediateTables(
    args: ListIntermediateTablesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListIntermediateTablesCommandOutput>;

  /**
   * @see {@link ListIntermediateTableVersionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListIntermediateTableVersionsCommandOutput}.
   */
  paginateListIntermediateTableVersions(
    args: ListIntermediateTableVersionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListIntermediateTableVersionsCommandOutput>;

  /**
   * @see {@link ListMembersCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListMembersCommandOutput}.
   */
  paginateListMembers(
    args: ListMembersCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListMembersCommandOutput>;

  /**
   * @see {@link ListMembershipsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListMembershipsCommandOutput}.
   */
  paginateListMemberships(
    args?: ListMembershipsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListMembershipsCommandOutput>;

  /**
   * @see {@link ListPrivacyBudgetsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListPrivacyBudgetsCommandOutput}.
   */
  paginateListPrivacyBudgets(
    args: ListPrivacyBudgetsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListPrivacyBudgetsCommandOutput>;

  /**
   * @see {@link ListPrivacyBudgetTemplatesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListPrivacyBudgetTemplatesCommandOutput}.
   */
  paginateListPrivacyBudgetTemplates(
    args: ListPrivacyBudgetTemplatesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListPrivacyBudgetTemplatesCommandOutput>;

  /**
   * @see {@link ListProtectedJobsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListProtectedJobsCommandOutput}.
   */
  paginateListProtectedJobs(
    args: ListProtectedJobsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListProtectedJobsCommandOutput>;

  /**
   * @see {@link ListProtectedQueriesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListProtectedQueriesCommandOutput}.
   */
  paginateListProtectedQueries(
    args: ListProtectedQueriesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListProtectedQueriesCommandOutput>;

  /**
   * @see {@link ListSchemasCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListSchemasCommandOutput}.
   */
  paginateListSchemas(
    args: ListSchemasCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListSchemasCommandOutput>;
}

/**
 * <p>Welcome to the <i>Clean Rooms API Reference</i>.</p> <p>Clean Rooms is an Amazon Web Services service that helps multiple parties to join their data together in a secure collaboration workspace. In the collaboration, members who can run queries and jobs and receive results can get insights into the collective datasets without either party getting access to the other party's raw data.</p> <p>To learn more about Clean Rooms concepts, procedures, and best practices, see the <a href="https://docs.aws.amazon.com/clean-rooms/latest/userguide/what-is.html">Clean Rooms User Guide</a>.</p> <p>To learn more about SQL commands, functions, and conditions supported in Clean Rooms, see the <a href="https://docs.aws.amazon.com/clean-rooms/latest/sql-reference/sql-reference.html">Clean Rooms SQL Reference</a>.</p>
 * @public
 */
export class CleanRooms extends CleanRoomsClient implements CleanRooms {}
createAggregatedClient(commands, CleanRooms, { paginators });
