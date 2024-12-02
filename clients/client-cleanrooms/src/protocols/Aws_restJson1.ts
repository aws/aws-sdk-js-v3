// smithy-typescript generated code
import {
  awsExpectUnion as __expectUnion,
  loadRestJsonErrorCode,
  parseJsonBody as parseBody,
  parseJsonErrorBody as parseErrorBody,
} from "@aws-sdk/core";
import { requestBuilder as rb } from "@smithy/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  limitedParseDouble as __limitedParseDouble,
  limitedParseFloat32 as __limitedParseFloat32,
  map,
  parseEpochTimestamp as __parseEpochTimestamp,
  resolvedPath as __resolvedPath,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  DocumentType as __DocumentType,
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import {
  BatchGetCollaborationAnalysisTemplateCommandInput,
  BatchGetCollaborationAnalysisTemplateCommandOutput,
} from "../commands/BatchGetCollaborationAnalysisTemplateCommand";
import {
  BatchGetSchemaAnalysisRuleCommandInput,
  BatchGetSchemaAnalysisRuleCommandOutput,
} from "../commands/BatchGetSchemaAnalysisRuleCommand";
import { BatchGetSchemaCommandInput, BatchGetSchemaCommandOutput } from "../commands/BatchGetSchemaCommand";
import {
  CreateAnalysisTemplateCommandInput,
  CreateAnalysisTemplateCommandOutput,
} from "../commands/CreateAnalysisTemplateCommand";
import {
  CreateCollaborationCommandInput,
  CreateCollaborationCommandOutput,
} from "../commands/CreateCollaborationCommand";
import {
  CreateConfiguredAudienceModelAssociationCommandInput,
  CreateConfiguredAudienceModelAssociationCommandOutput,
} from "../commands/CreateConfiguredAudienceModelAssociationCommand";
import {
  CreateConfiguredTableAnalysisRuleCommandInput,
  CreateConfiguredTableAnalysisRuleCommandOutput,
} from "../commands/CreateConfiguredTableAnalysisRuleCommand";
import {
  CreateConfiguredTableAssociationAnalysisRuleCommandInput,
  CreateConfiguredTableAssociationAnalysisRuleCommandOutput,
} from "../commands/CreateConfiguredTableAssociationAnalysisRuleCommand";
import {
  CreateConfiguredTableAssociationCommandInput,
  CreateConfiguredTableAssociationCommandOutput,
} from "../commands/CreateConfiguredTableAssociationCommand";
import {
  CreateConfiguredTableCommandInput,
  CreateConfiguredTableCommandOutput,
} from "../commands/CreateConfiguredTableCommand";
import {
  CreateIdMappingTableCommandInput,
  CreateIdMappingTableCommandOutput,
} from "../commands/CreateIdMappingTableCommand";
import {
  CreateIdNamespaceAssociationCommandInput,
  CreateIdNamespaceAssociationCommandOutput,
} from "../commands/CreateIdNamespaceAssociationCommand";
import { CreateMembershipCommandInput, CreateMembershipCommandOutput } from "../commands/CreateMembershipCommand";
import {
  CreatePrivacyBudgetTemplateCommandInput,
  CreatePrivacyBudgetTemplateCommandOutput,
} from "../commands/CreatePrivacyBudgetTemplateCommand";
import {
  DeleteAnalysisTemplateCommandInput,
  DeleteAnalysisTemplateCommandOutput,
} from "../commands/DeleteAnalysisTemplateCommand";
import {
  DeleteCollaborationCommandInput,
  DeleteCollaborationCommandOutput,
} from "../commands/DeleteCollaborationCommand";
import {
  DeleteConfiguredAudienceModelAssociationCommandInput,
  DeleteConfiguredAudienceModelAssociationCommandOutput,
} from "../commands/DeleteConfiguredAudienceModelAssociationCommand";
import {
  DeleteConfiguredTableAnalysisRuleCommandInput,
  DeleteConfiguredTableAnalysisRuleCommandOutput,
} from "../commands/DeleteConfiguredTableAnalysisRuleCommand";
import {
  DeleteConfiguredTableAssociationAnalysisRuleCommandInput,
  DeleteConfiguredTableAssociationAnalysisRuleCommandOutput,
} from "../commands/DeleteConfiguredTableAssociationAnalysisRuleCommand";
import {
  DeleteConfiguredTableAssociationCommandInput,
  DeleteConfiguredTableAssociationCommandOutput,
} from "../commands/DeleteConfiguredTableAssociationCommand";
import {
  DeleteConfiguredTableCommandInput,
  DeleteConfiguredTableCommandOutput,
} from "../commands/DeleteConfiguredTableCommand";
import {
  DeleteIdMappingTableCommandInput,
  DeleteIdMappingTableCommandOutput,
} from "../commands/DeleteIdMappingTableCommand";
import {
  DeleteIdNamespaceAssociationCommandInput,
  DeleteIdNamespaceAssociationCommandOutput,
} from "../commands/DeleteIdNamespaceAssociationCommand";
import { DeleteMemberCommandInput, DeleteMemberCommandOutput } from "../commands/DeleteMemberCommand";
import { DeleteMembershipCommandInput, DeleteMembershipCommandOutput } from "../commands/DeleteMembershipCommand";
import {
  DeletePrivacyBudgetTemplateCommandInput,
  DeletePrivacyBudgetTemplateCommandOutput,
} from "../commands/DeletePrivacyBudgetTemplateCommand";
import {
  GetAnalysisTemplateCommandInput,
  GetAnalysisTemplateCommandOutput,
} from "../commands/GetAnalysisTemplateCommand";
import {
  GetCollaborationAnalysisTemplateCommandInput,
  GetCollaborationAnalysisTemplateCommandOutput,
} from "../commands/GetCollaborationAnalysisTemplateCommand";
import { GetCollaborationCommandInput, GetCollaborationCommandOutput } from "../commands/GetCollaborationCommand";
import {
  GetCollaborationConfiguredAudienceModelAssociationCommandInput,
  GetCollaborationConfiguredAudienceModelAssociationCommandOutput,
} from "../commands/GetCollaborationConfiguredAudienceModelAssociationCommand";
import {
  GetCollaborationIdNamespaceAssociationCommandInput,
  GetCollaborationIdNamespaceAssociationCommandOutput,
} from "../commands/GetCollaborationIdNamespaceAssociationCommand";
import {
  GetCollaborationPrivacyBudgetTemplateCommandInput,
  GetCollaborationPrivacyBudgetTemplateCommandOutput,
} from "../commands/GetCollaborationPrivacyBudgetTemplateCommand";
import {
  GetConfiguredAudienceModelAssociationCommandInput,
  GetConfiguredAudienceModelAssociationCommandOutput,
} from "../commands/GetConfiguredAudienceModelAssociationCommand";
import {
  GetConfiguredTableAnalysisRuleCommandInput,
  GetConfiguredTableAnalysisRuleCommandOutput,
} from "../commands/GetConfiguredTableAnalysisRuleCommand";
import {
  GetConfiguredTableAssociationAnalysisRuleCommandInput,
  GetConfiguredTableAssociationAnalysisRuleCommandOutput,
} from "../commands/GetConfiguredTableAssociationAnalysisRuleCommand";
import {
  GetConfiguredTableAssociationCommandInput,
  GetConfiguredTableAssociationCommandOutput,
} from "../commands/GetConfiguredTableAssociationCommand";
import { GetConfiguredTableCommandInput, GetConfiguredTableCommandOutput } from "../commands/GetConfiguredTableCommand";
import { GetIdMappingTableCommandInput, GetIdMappingTableCommandOutput } from "../commands/GetIdMappingTableCommand";
import {
  GetIdNamespaceAssociationCommandInput,
  GetIdNamespaceAssociationCommandOutput,
} from "../commands/GetIdNamespaceAssociationCommand";
import { GetMembershipCommandInput, GetMembershipCommandOutput } from "../commands/GetMembershipCommand";
import {
  GetPrivacyBudgetTemplateCommandInput,
  GetPrivacyBudgetTemplateCommandOutput,
} from "../commands/GetPrivacyBudgetTemplateCommand";
import { GetProtectedQueryCommandInput, GetProtectedQueryCommandOutput } from "../commands/GetProtectedQueryCommand";
import {
  GetSchemaAnalysisRuleCommandInput,
  GetSchemaAnalysisRuleCommandOutput,
} from "../commands/GetSchemaAnalysisRuleCommand";
import { GetSchemaCommandInput, GetSchemaCommandOutput } from "../commands/GetSchemaCommand";
import {
  ListAnalysisTemplatesCommandInput,
  ListAnalysisTemplatesCommandOutput,
} from "../commands/ListAnalysisTemplatesCommand";
import {
  ListCollaborationAnalysisTemplatesCommandInput,
  ListCollaborationAnalysisTemplatesCommandOutput,
} from "../commands/ListCollaborationAnalysisTemplatesCommand";
import {
  ListCollaborationConfiguredAudienceModelAssociationsCommandInput,
  ListCollaborationConfiguredAudienceModelAssociationsCommandOutput,
} from "../commands/ListCollaborationConfiguredAudienceModelAssociationsCommand";
import {
  ListCollaborationIdNamespaceAssociationsCommandInput,
  ListCollaborationIdNamespaceAssociationsCommandOutput,
} from "../commands/ListCollaborationIdNamespaceAssociationsCommand";
import {
  ListCollaborationPrivacyBudgetsCommandInput,
  ListCollaborationPrivacyBudgetsCommandOutput,
} from "../commands/ListCollaborationPrivacyBudgetsCommand";
import {
  ListCollaborationPrivacyBudgetTemplatesCommandInput,
  ListCollaborationPrivacyBudgetTemplatesCommandOutput,
} from "../commands/ListCollaborationPrivacyBudgetTemplatesCommand";
import { ListCollaborationsCommandInput, ListCollaborationsCommandOutput } from "../commands/ListCollaborationsCommand";
import {
  ListConfiguredAudienceModelAssociationsCommandInput,
  ListConfiguredAudienceModelAssociationsCommandOutput,
} from "../commands/ListConfiguredAudienceModelAssociationsCommand";
import {
  ListConfiguredTableAssociationsCommandInput,
  ListConfiguredTableAssociationsCommandOutput,
} from "../commands/ListConfiguredTableAssociationsCommand";
import {
  ListConfiguredTablesCommandInput,
  ListConfiguredTablesCommandOutput,
} from "../commands/ListConfiguredTablesCommand";
import {
  ListIdMappingTablesCommandInput,
  ListIdMappingTablesCommandOutput,
} from "../commands/ListIdMappingTablesCommand";
import {
  ListIdNamespaceAssociationsCommandInput,
  ListIdNamespaceAssociationsCommandOutput,
} from "../commands/ListIdNamespaceAssociationsCommand";
import { ListMembersCommandInput, ListMembersCommandOutput } from "../commands/ListMembersCommand";
import { ListMembershipsCommandInput, ListMembershipsCommandOutput } from "../commands/ListMembershipsCommand";
import { ListPrivacyBudgetsCommandInput, ListPrivacyBudgetsCommandOutput } from "../commands/ListPrivacyBudgetsCommand";
import {
  ListPrivacyBudgetTemplatesCommandInput,
  ListPrivacyBudgetTemplatesCommandOutput,
} from "../commands/ListPrivacyBudgetTemplatesCommand";
import {
  ListProtectedQueriesCommandInput,
  ListProtectedQueriesCommandOutput,
} from "../commands/ListProtectedQueriesCommand";
import { ListSchemasCommandInput, ListSchemasCommandOutput } from "../commands/ListSchemasCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import {
  PopulateIdMappingTableCommandInput,
  PopulateIdMappingTableCommandOutput,
} from "../commands/PopulateIdMappingTableCommand";
import {
  PreviewPrivacyImpactCommandInput,
  PreviewPrivacyImpactCommandOutput,
} from "../commands/PreviewPrivacyImpactCommand";
import {
  StartProtectedQueryCommandInput,
  StartProtectedQueryCommandOutput,
} from "../commands/StartProtectedQueryCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import {
  UpdateAnalysisTemplateCommandInput,
  UpdateAnalysisTemplateCommandOutput,
} from "../commands/UpdateAnalysisTemplateCommand";
import {
  UpdateCollaborationCommandInput,
  UpdateCollaborationCommandOutput,
} from "../commands/UpdateCollaborationCommand";
import {
  UpdateConfiguredAudienceModelAssociationCommandInput,
  UpdateConfiguredAudienceModelAssociationCommandOutput,
} from "../commands/UpdateConfiguredAudienceModelAssociationCommand";
import {
  UpdateConfiguredTableAnalysisRuleCommandInput,
  UpdateConfiguredTableAnalysisRuleCommandOutput,
} from "../commands/UpdateConfiguredTableAnalysisRuleCommand";
import {
  UpdateConfiguredTableAssociationAnalysisRuleCommandInput,
  UpdateConfiguredTableAssociationAnalysisRuleCommandOutput,
} from "../commands/UpdateConfiguredTableAssociationAnalysisRuleCommand";
import {
  UpdateConfiguredTableAssociationCommandInput,
  UpdateConfiguredTableAssociationCommandOutput,
} from "../commands/UpdateConfiguredTableAssociationCommand";
import {
  UpdateConfiguredTableCommandInput,
  UpdateConfiguredTableCommandOutput,
} from "../commands/UpdateConfiguredTableCommand";
import {
  UpdateIdMappingTableCommandInput,
  UpdateIdMappingTableCommandOutput,
} from "../commands/UpdateIdMappingTableCommand";
import {
  UpdateIdNamespaceAssociationCommandInput,
  UpdateIdNamespaceAssociationCommandOutput,
} from "../commands/UpdateIdNamespaceAssociationCommand";
import { UpdateMembershipCommandInput, UpdateMembershipCommandOutput } from "../commands/UpdateMembershipCommand";
import {
  UpdatePrivacyBudgetTemplateCommandInput,
  UpdatePrivacyBudgetTemplateCommandOutput,
} from "../commands/UpdatePrivacyBudgetTemplateCommand";
import {
  UpdateProtectedQueryCommandInput,
  UpdateProtectedQueryCommandOutput,
} from "../commands/UpdateProtectedQueryCommand";
import { CleanRoomsServiceException as __BaseException } from "../models/CleanRoomsServiceException";
import {
  AccessDeniedException,
  AggregateColumn,
  AggregationConstraint,
  AnalysisParameter,
  AnalysisRule,
  AnalysisRuleAggregation,
  AnalysisRuleCustom,
  AnalysisRuleList,
  AnalysisSource,
  AnalysisTemplate,
  AnalysisTemplateSummary,
  AthenaTableReference,
  BilledResourceUtilization,
  Collaboration,
  CollaborationAnalysisTemplate,
  CollaborationAnalysisTemplateSummary,
  CollaborationConfiguredAudienceModelAssociation,
  CollaborationConfiguredAudienceModelAssociationSummary,
  CollaborationIdNamespaceAssociation,
  CollaborationIdNamespaceAssociationSummary,
  CollaborationPrivacyBudgetSummary,
  CollaborationPrivacyBudgetTemplate,
  CollaborationPrivacyBudgetTemplateSummary,
  CollaborationSummary,
  ComputeConfiguration,
  ConfiguredAudienceModelAssociation,
  ConfiguredAudienceModelAssociationSummary,
  ConfiguredTable,
  ConfiguredTableAnalysisRule,
  ConfiguredTableAnalysisRulePolicy,
  ConfiguredTableAnalysisRulePolicyV1,
  ConfiguredTableAssociation,
  ConfiguredTableAssociationAnalysisRule,
  ConfiguredTableAssociationAnalysisRuleAggregation,
  ConfiguredTableAssociationAnalysisRuleCustom,
  ConfiguredTableAssociationAnalysisRuleList,
  ConfiguredTableAssociationAnalysisRulePolicy,
  ConfiguredTableAssociationAnalysisRulePolicyV1,
  ConfiguredTableAssociationSummary,
  ConfiguredTableSummary,
  ConflictException,
  CustomMLMemberAbility,
  DataEncryptionMetadata,
  DifferentialPrivacyColumn,
  DifferentialPrivacyConfiguration,
  DifferentialPrivacyParameters,
  DifferentialPrivacySensitivityParameters,
  GlueTableReference,
  IdMappingConfig,
  IdMappingTable,
  IdMappingTableInputReferenceConfig,
  IdMappingTableSummary,
  IdNamespaceAssociation,
  IdNamespaceAssociationInputReferenceConfig,
  IdNamespaceAssociationInputReferenceProperties,
  IdNamespaceAssociationSummary,
  InternalServerException,
  JoinOperator,
  MemberAbility,
  Membership,
  MembershipMLPaymentConfig,
  MembershipModelInferencePaymentConfig,
  MembershipModelTrainingPaymentConfig,
  MembershipPaymentConfiguration,
  MembershipProtectedQueryOutputConfiguration,
  MembershipProtectedQueryResultConfiguration,
  MembershipQueryComputePaymentConfig,
  MembershipSummary,
  MemberSpecification,
  MemberSummary,
  MLMemberAbilities,
  MLPaymentConfig,
  ModelInferencePaymentConfig,
  ModelTrainingPaymentConfig,
  PaymentConfiguration,
  PrivacyBudgetSummary,
  ProtectedQuery,
  ProtectedQueryMemberOutputConfiguration,
  ProtectedQueryOutputConfiguration,
  ProtectedQueryResultConfiguration,
  ProtectedQueryS3OutputConfiguration,
  ProtectedQuerySQLParameters,
  ProtectedQueryStatistics,
  QueryComputePaymentConfig,
  ResourceNotFoundException,
  ScalarFunctions,
  Schema,
  SchemaAnalysisRuleRequest,
  SchemaSummary,
  ServiceQuotaExceededException,
  SnowflakeTableReference,
  SnowflakeTableSchema,
  SnowflakeTableSchemaV1,
  TableReference,
  ThrottlingException,
  ValidationException,
  WorkerComputeConfiguration,
} from "../models/models_0";
import {
  DifferentialPrivacyPreviewParametersInput,
  DifferentialPrivacyTemplateParametersInput,
  DifferentialPrivacyTemplateUpdateParameters,
  PreviewPrivacyImpactParametersInput,
  PrivacyBudgetTemplate,
  PrivacyBudgetTemplateParametersInput,
  PrivacyBudgetTemplateSummary,
  PrivacyBudgetTemplateUpdateParameters,
  ProtectedQuerySummary,
} from "../models/models_1";

/**
 * serializeAws_restJson1BatchGetCollaborationAnalysisTemplateCommand
 */
export const se_BatchGetCollaborationAnalysisTemplateCommand = async (
  input: BatchGetCollaborationAnalysisTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/collaborations/{collaborationIdentifier}/batch-analysistemplates");
  b.p("collaborationIdentifier", () => input.collaborationIdentifier!, "{collaborationIdentifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      analysisTemplateArns: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1BatchGetSchemaCommand
 */
export const se_BatchGetSchemaCommand = async (
  input: BatchGetSchemaCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/collaborations/{collaborationIdentifier}/batch-schema");
  b.p("collaborationIdentifier", () => input.collaborationIdentifier!, "{collaborationIdentifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      names: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1BatchGetSchemaAnalysisRuleCommand
 */
export const se_BatchGetSchemaAnalysisRuleCommand = async (
  input: BatchGetSchemaAnalysisRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/collaborations/{collaborationIdentifier}/batch-schema-analysis-rule");
  b.p("collaborationIdentifier", () => input.collaborationIdentifier!, "{collaborationIdentifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      schemaAnalysisRuleRequests: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateAnalysisTemplateCommand
 */
export const se_CreateAnalysisTemplateCommand = async (
  input: CreateAnalysisTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/memberships/{membershipIdentifier}/analysistemplates");
  b.p("membershipIdentifier", () => input.membershipIdentifier!, "{membershipIdentifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      analysisParameters: (_) => _json(_),
      description: [],
      format: [],
      name: [],
      source: (_) => _json(_),
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateCollaborationCommand
 */
export const se_CreateCollaborationCommand = async (
  input: CreateCollaborationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/collaborations");
  let body: any;
  body = JSON.stringify(
    take(input, {
      analyticsEngine: [],
      creatorDisplayName: [],
      creatorMLMemberAbilities: (_) => _json(_),
      creatorMemberAbilities: (_) => _json(_),
      creatorPaymentConfiguration: (_) => _json(_),
      dataEncryptionMetadata: (_) => _json(_),
      description: [],
      members: (_) => _json(_),
      name: [],
      queryLogStatus: [],
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateConfiguredAudienceModelAssociationCommand
 */
export const se_CreateConfiguredAudienceModelAssociationCommand = async (
  input: CreateConfiguredAudienceModelAssociationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/memberships/{membershipIdentifier}/configuredaudiencemodelassociations");
  b.p("membershipIdentifier", () => input.membershipIdentifier!, "{membershipIdentifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      configuredAudienceModelArn: [],
      configuredAudienceModelAssociationName: [],
      description: [],
      manageResourcePolicies: [],
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateConfiguredTableCommand
 */
export const se_CreateConfiguredTableCommand = async (
  input: CreateConfiguredTableCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/configuredTables");
  let body: any;
  body = JSON.stringify(
    take(input, {
      allowedColumns: (_) => _json(_),
      analysisMethod: [],
      description: [],
      name: [],
      tableReference: (_) => _json(_),
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateConfiguredTableAnalysisRuleCommand
 */
export const se_CreateConfiguredTableAnalysisRuleCommand = async (
  input: CreateConfiguredTableAnalysisRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/configuredTables/{configuredTableIdentifier}/analysisRule");
  b.p("configuredTableIdentifier", () => input.configuredTableIdentifier!, "{configuredTableIdentifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      analysisRulePolicy: (_) => _json(_),
      analysisRuleType: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateConfiguredTableAssociationCommand
 */
export const se_CreateConfiguredTableAssociationCommand = async (
  input: CreateConfiguredTableAssociationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/memberships/{membershipIdentifier}/configuredTableAssociations");
  b.p("membershipIdentifier", () => input.membershipIdentifier!, "{membershipIdentifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      configuredTableIdentifier: [],
      description: [],
      name: [],
      roleArn: [],
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateConfiguredTableAssociationAnalysisRuleCommand
 */
export const se_CreateConfiguredTableAssociationAnalysisRuleCommand = async (
  input: CreateConfiguredTableAssociationAnalysisRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp(
    "/memberships/{membershipIdentifier}/configuredTableAssociations/{configuredTableAssociationIdentifier}/analysisRule"
  );
  b.p("membershipIdentifier", () => input.membershipIdentifier!, "{membershipIdentifier}", false);
  b.p(
    "configuredTableAssociationIdentifier",
    () => input.configuredTableAssociationIdentifier!,
    "{configuredTableAssociationIdentifier}",
    false
  );
  let body: any;
  body = JSON.stringify(
    take(input, {
      analysisRulePolicy: (_) => _json(_),
      analysisRuleType: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateIdMappingTableCommand
 */
export const se_CreateIdMappingTableCommand = async (
  input: CreateIdMappingTableCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/memberships/{membershipIdentifier}/idmappingtables");
  b.p("membershipIdentifier", () => input.membershipIdentifier!, "{membershipIdentifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      description: [],
      inputReferenceConfig: (_) => _json(_),
      kmsKeyArn: [],
      name: [],
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateIdNamespaceAssociationCommand
 */
export const se_CreateIdNamespaceAssociationCommand = async (
  input: CreateIdNamespaceAssociationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/memberships/{membershipIdentifier}/idnamespaceassociations");
  b.p("membershipIdentifier", () => input.membershipIdentifier!, "{membershipIdentifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      description: [],
      idMappingConfig: (_) => _json(_),
      inputReferenceConfig: (_) => _json(_),
      name: [],
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateMembershipCommand
 */
export const se_CreateMembershipCommand = async (
  input: CreateMembershipCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/memberships");
  let body: any;
  body = JSON.stringify(
    take(input, {
      collaborationIdentifier: [],
      defaultResultConfiguration: (_) => _json(_),
      paymentConfiguration: (_) => _json(_),
      queryLogStatus: [],
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreatePrivacyBudgetTemplateCommand
 */
export const se_CreatePrivacyBudgetTemplateCommand = async (
  input: CreatePrivacyBudgetTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/memberships/{membershipIdentifier}/privacybudgettemplates");
  b.p("membershipIdentifier", () => input.membershipIdentifier!, "{membershipIdentifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      autoRefresh: [],
      parameters: (_) => _json(_),
      privacyBudgetType: [],
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteAnalysisTemplateCommand
 */
export const se_DeleteAnalysisTemplateCommand = async (
  input: DeleteAnalysisTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/memberships/{membershipIdentifier}/analysistemplates/{analysisTemplateIdentifier}");
  b.p("membershipIdentifier", () => input.membershipIdentifier!, "{membershipIdentifier}", false);
  b.p("analysisTemplateIdentifier", () => input.analysisTemplateIdentifier!, "{analysisTemplateIdentifier}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteCollaborationCommand
 */
export const se_DeleteCollaborationCommand = async (
  input: DeleteCollaborationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/collaborations/{collaborationIdentifier}");
  b.p("collaborationIdentifier", () => input.collaborationIdentifier!, "{collaborationIdentifier}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteConfiguredAudienceModelAssociationCommand
 */
export const se_DeleteConfiguredAudienceModelAssociationCommand = async (
  input: DeleteConfiguredAudienceModelAssociationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp(
    "/memberships/{membershipIdentifier}/configuredaudiencemodelassociations/{configuredAudienceModelAssociationIdentifier}"
  );
  b.p(
    "configuredAudienceModelAssociationIdentifier",
    () => input.configuredAudienceModelAssociationIdentifier!,
    "{configuredAudienceModelAssociationIdentifier}",
    false
  );
  b.p("membershipIdentifier", () => input.membershipIdentifier!, "{membershipIdentifier}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteConfiguredTableCommand
 */
export const se_DeleteConfiguredTableCommand = async (
  input: DeleteConfiguredTableCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/configuredTables/{configuredTableIdentifier}");
  b.p("configuredTableIdentifier", () => input.configuredTableIdentifier!, "{configuredTableIdentifier}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteConfiguredTableAnalysisRuleCommand
 */
export const se_DeleteConfiguredTableAnalysisRuleCommand = async (
  input: DeleteConfiguredTableAnalysisRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/configuredTables/{configuredTableIdentifier}/analysisRule/{analysisRuleType}");
  b.p("configuredTableIdentifier", () => input.configuredTableIdentifier!, "{configuredTableIdentifier}", false);
  b.p("analysisRuleType", () => input.analysisRuleType!, "{analysisRuleType}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteConfiguredTableAssociationCommand
 */
export const se_DeleteConfiguredTableAssociationCommand = async (
  input: DeleteConfiguredTableAssociationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/memberships/{membershipIdentifier}/configuredTableAssociations/{configuredTableAssociationIdentifier}");
  b.p(
    "configuredTableAssociationIdentifier",
    () => input.configuredTableAssociationIdentifier!,
    "{configuredTableAssociationIdentifier}",
    false
  );
  b.p("membershipIdentifier", () => input.membershipIdentifier!, "{membershipIdentifier}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteConfiguredTableAssociationAnalysisRuleCommand
 */
export const se_DeleteConfiguredTableAssociationAnalysisRuleCommand = async (
  input: DeleteConfiguredTableAssociationAnalysisRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp(
    "/memberships/{membershipIdentifier}/configuredTableAssociations/{configuredTableAssociationIdentifier}/analysisRule/{analysisRuleType}"
  );
  b.p("membershipIdentifier", () => input.membershipIdentifier!, "{membershipIdentifier}", false);
  b.p(
    "configuredTableAssociationIdentifier",
    () => input.configuredTableAssociationIdentifier!,
    "{configuredTableAssociationIdentifier}",
    false
  );
  b.p("analysisRuleType", () => input.analysisRuleType!, "{analysisRuleType}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteIdMappingTableCommand
 */
export const se_DeleteIdMappingTableCommand = async (
  input: DeleteIdMappingTableCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/memberships/{membershipIdentifier}/idmappingtables/{idMappingTableIdentifier}");
  b.p("idMappingTableIdentifier", () => input.idMappingTableIdentifier!, "{idMappingTableIdentifier}", false);
  b.p("membershipIdentifier", () => input.membershipIdentifier!, "{membershipIdentifier}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteIdNamespaceAssociationCommand
 */
export const se_DeleteIdNamespaceAssociationCommand = async (
  input: DeleteIdNamespaceAssociationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/memberships/{membershipIdentifier}/idnamespaceassociations/{idNamespaceAssociationIdentifier}");
  b.p(
    "idNamespaceAssociationIdentifier",
    () => input.idNamespaceAssociationIdentifier!,
    "{idNamespaceAssociationIdentifier}",
    false
  );
  b.p("membershipIdentifier", () => input.membershipIdentifier!, "{membershipIdentifier}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteMemberCommand
 */
export const se_DeleteMemberCommand = async (
  input: DeleteMemberCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/collaborations/{collaborationIdentifier}/member/{accountId}");
  b.p("collaborationIdentifier", () => input.collaborationIdentifier!, "{collaborationIdentifier}", false);
  b.p("accountId", () => input.accountId!, "{accountId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteMembershipCommand
 */
export const se_DeleteMembershipCommand = async (
  input: DeleteMembershipCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/memberships/{membershipIdentifier}");
  b.p("membershipIdentifier", () => input.membershipIdentifier!, "{membershipIdentifier}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeletePrivacyBudgetTemplateCommand
 */
export const se_DeletePrivacyBudgetTemplateCommand = async (
  input: DeletePrivacyBudgetTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/memberships/{membershipIdentifier}/privacybudgettemplates/{privacyBudgetTemplateIdentifier}");
  b.p("membershipIdentifier", () => input.membershipIdentifier!, "{membershipIdentifier}", false);
  b.p(
    "privacyBudgetTemplateIdentifier",
    () => input.privacyBudgetTemplateIdentifier!,
    "{privacyBudgetTemplateIdentifier}",
    false
  );
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetAnalysisTemplateCommand
 */
export const se_GetAnalysisTemplateCommand = async (
  input: GetAnalysisTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/memberships/{membershipIdentifier}/analysistemplates/{analysisTemplateIdentifier}");
  b.p("membershipIdentifier", () => input.membershipIdentifier!, "{membershipIdentifier}", false);
  b.p("analysisTemplateIdentifier", () => input.analysisTemplateIdentifier!, "{analysisTemplateIdentifier}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetCollaborationCommand
 */
export const se_GetCollaborationCommand = async (
  input: GetCollaborationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/collaborations/{collaborationIdentifier}");
  b.p("collaborationIdentifier", () => input.collaborationIdentifier!, "{collaborationIdentifier}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetCollaborationAnalysisTemplateCommand
 */
export const se_GetCollaborationAnalysisTemplateCommand = async (
  input: GetCollaborationAnalysisTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/collaborations/{collaborationIdentifier}/analysistemplates/{analysisTemplateArn}");
  b.p("collaborationIdentifier", () => input.collaborationIdentifier!, "{collaborationIdentifier}", false);
  b.p("analysisTemplateArn", () => input.analysisTemplateArn!, "{analysisTemplateArn}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetCollaborationConfiguredAudienceModelAssociationCommand
 */
export const se_GetCollaborationConfiguredAudienceModelAssociationCommand = async (
  input: GetCollaborationConfiguredAudienceModelAssociationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp(
    "/collaborations/{collaborationIdentifier}/configuredaudiencemodelassociations/{configuredAudienceModelAssociationIdentifier}"
  );
  b.p("collaborationIdentifier", () => input.collaborationIdentifier!, "{collaborationIdentifier}", false);
  b.p(
    "configuredAudienceModelAssociationIdentifier",
    () => input.configuredAudienceModelAssociationIdentifier!,
    "{configuredAudienceModelAssociationIdentifier}",
    false
  );
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetCollaborationIdNamespaceAssociationCommand
 */
export const se_GetCollaborationIdNamespaceAssociationCommand = async (
  input: GetCollaborationIdNamespaceAssociationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/collaborations/{collaborationIdentifier}/idnamespaceassociations/{idNamespaceAssociationIdentifier}");
  b.p("collaborationIdentifier", () => input.collaborationIdentifier!, "{collaborationIdentifier}", false);
  b.p(
    "idNamespaceAssociationIdentifier",
    () => input.idNamespaceAssociationIdentifier!,
    "{idNamespaceAssociationIdentifier}",
    false
  );
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetCollaborationPrivacyBudgetTemplateCommand
 */
export const se_GetCollaborationPrivacyBudgetTemplateCommand = async (
  input: GetCollaborationPrivacyBudgetTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/collaborations/{collaborationIdentifier}/privacybudgettemplates/{privacyBudgetTemplateIdentifier}");
  b.p("collaborationIdentifier", () => input.collaborationIdentifier!, "{collaborationIdentifier}", false);
  b.p(
    "privacyBudgetTemplateIdentifier",
    () => input.privacyBudgetTemplateIdentifier!,
    "{privacyBudgetTemplateIdentifier}",
    false
  );
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetConfiguredAudienceModelAssociationCommand
 */
export const se_GetConfiguredAudienceModelAssociationCommand = async (
  input: GetConfiguredAudienceModelAssociationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp(
    "/memberships/{membershipIdentifier}/configuredaudiencemodelassociations/{configuredAudienceModelAssociationIdentifier}"
  );
  b.p(
    "configuredAudienceModelAssociationIdentifier",
    () => input.configuredAudienceModelAssociationIdentifier!,
    "{configuredAudienceModelAssociationIdentifier}",
    false
  );
  b.p("membershipIdentifier", () => input.membershipIdentifier!, "{membershipIdentifier}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetConfiguredTableCommand
 */
export const se_GetConfiguredTableCommand = async (
  input: GetConfiguredTableCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/configuredTables/{configuredTableIdentifier}");
  b.p("configuredTableIdentifier", () => input.configuredTableIdentifier!, "{configuredTableIdentifier}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetConfiguredTableAnalysisRuleCommand
 */
export const se_GetConfiguredTableAnalysisRuleCommand = async (
  input: GetConfiguredTableAnalysisRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/configuredTables/{configuredTableIdentifier}/analysisRule/{analysisRuleType}");
  b.p("configuredTableIdentifier", () => input.configuredTableIdentifier!, "{configuredTableIdentifier}", false);
  b.p("analysisRuleType", () => input.analysisRuleType!, "{analysisRuleType}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetConfiguredTableAssociationCommand
 */
export const se_GetConfiguredTableAssociationCommand = async (
  input: GetConfiguredTableAssociationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/memberships/{membershipIdentifier}/configuredTableAssociations/{configuredTableAssociationIdentifier}");
  b.p(
    "configuredTableAssociationIdentifier",
    () => input.configuredTableAssociationIdentifier!,
    "{configuredTableAssociationIdentifier}",
    false
  );
  b.p("membershipIdentifier", () => input.membershipIdentifier!, "{membershipIdentifier}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetConfiguredTableAssociationAnalysisRuleCommand
 */
export const se_GetConfiguredTableAssociationAnalysisRuleCommand = async (
  input: GetConfiguredTableAssociationAnalysisRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp(
    "/memberships/{membershipIdentifier}/configuredTableAssociations/{configuredTableAssociationIdentifier}/analysisRule/{analysisRuleType}"
  );
  b.p("membershipIdentifier", () => input.membershipIdentifier!, "{membershipIdentifier}", false);
  b.p(
    "configuredTableAssociationIdentifier",
    () => input.configuredTableAssociationIdentifier!,
    "{configuredTableAssociationIdentifier}",
    false
  );
  b.p("analysisRuleType", () => input.analysisRuleType!, "{analysisRuleType}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetIdMappingTableCommand
 */
export const se_GetIdMappingTableCommand = async (
  input: GetIdMappingTableCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/memberships/{membershipIdentifier}/idmappingtables/{idMappingTableIdentifier}");
  b.p("idMappingTableIdentifier", () => input.idMappingTableIdentifier!, "{idMappingTableIdentifier}", false);
  b.p("membershipIdentifier", () => input.membershipIdentifier!, "{membershipIdentifier}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetIdNamespaceAssociationCommand
 */
export const se_GetIdNamespaceAssociationCommand = async (
  input: GetIdNamespaceAssociationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/memberships/{membershipIdentifier}/idnamespaceassociations/{idNamespaceAssociationIdentifier}");
  b.p(
    "idNamespaceAssociationIdentifier",
    () => input.idNamespaceAssociationIdentifier!,
    "{idNamespaceAssociationIdentifier}",
    false
  );
  b.p("membershipIdentifier", () => input.membershipIdentifier!, "{membershipIdentifier}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetMembershipCommand
 */
export const se_GetMembershipCommand = async (
  input: GetMembershipCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/memberships/{membershipIdentifier}");
  b.p("membershipIdentifier", () => input.membershipIdentifier!, "{membershipIdentifier}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetPrivacyBudgetTemplateCommand
 */
export const se_GetPrivacyBudgetTemplateCommand = async (
  input: GetPrivacyBudgetTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/memberships/{membershipIdentifier}/privacybudgettemplates/{privacyBudgetTemplateIdentifier}");
  b.p("membershipIdentifier", () => input.membershipIdentifier!, "{membershipIdentifier}", false);
  b.p(
    "privacyBudgetTemplateIdentifier",
    () => input.privacyBudgetTemplateIdentifier!,
    "{privacyBudgetTemplateIdentifier}",
    false
  );
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetProtectedQueryCommand
 */
export const se_GetProtectedQueryCommand = async (
  input: GetProtectedQueryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/memberships/{membershipIdentifier}/protectedQueries/{protectedQueryIdentifier}");
  b.p("membershipIdentifier", () => input.membershipIdentifier!, "{membershipIdentifier}", false);
  b.p("protectedQueryIdentifier", () => input.protectedQueryIdentifier!, "{protectedQueryIdentifier}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetSchemaCommand
 */
export const se_GetSchemaCommand = async (
  input: GetSchemaCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/collaborations/{collaborationIdentifier}/schemas/{name}");
  b.p("collaborationIdentifier", () => input.collaborationIdentifier!, "{collaborationIdentifier}", false);
  b.p("name", () => input.name!, "{name}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetSchemaAnalysisRuleCommand
 */
export const se_GetSchemaAnalysisRuleCommand = async (
  input: GetSchemaAnalysisRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/collaborations/{collaborationIdentifier}/schemas/{name}/analysisRule/{type}");
  b.p("collaborationIdentifier", () => input.collaborationIdentifier!, "{collaborationIdentifier}", false);
  b.p("name", () => input.name!, "{name}", false);
  b.p("type", () => input.type!, "{type}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListAnalysisTemplatesCommand
 */
export const se_ListAnalysisTemplatesCommand = async (
  input: ListAnalysisTemplatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/memberships/{membershipIdentifier}/analysistemplates");
  b.p("membershipIdentifier", () => input.membershipIdentifier!, "{membershipIdentifier}", false);
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListCollaborationAnalysisTemplatesCommand
 */
export const se_ListCollaborationAnalysisTemplatesCommand = async (
  input: ListCollaborationAnalysisTemplatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/collaborations/{collaborationIdentifier}/analysistemplates");
  b.p("collaborationIdentifier", () => input.collaborationIdentifier!, "{collaborationIdentifier}", false);
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListCollaborationConfiguredAudienceModelAssociationsCommand
 */
export const se_ListCollaborationConfiguredAudienceModelAssociationsCommand = async (
  input: ListCollaborationConfiguredAudienceModelAssociationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/collaborations/{collaborationIdentifier}/configuredaudiencemodelassociations");
  b.p("collaborationIdentifier", () => input.collaborationIdentifier!, "{collaborationIdentifier}", false);
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListCollaborationIdNamespaceAssociationsCommand
 */
export const se_ListCollaborationIdNamespaceAssociationsCommand = async (
  input: ListCollaborationIdNamespaceAssociationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/collaborations/{collaborationIdentifier}/idnamespaceassociations");
  b.p("collaborationIdentifier", () => input.collaborationIdentifier!, "{collaborationIdentifier}", false);
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListCollaborationPrivacyBudgetsCommand
 */
export const se_ListCollaborationPrivacyBudgetsCommand = async (
  input: ListCollaborationPrivacyBudgetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/collaborations/{collaborationIdentifier}/privacybudgets");
  b.p("collaborationIdentifier", () => input.collaborationIdentifier!, "{collaborationIdentifier}", false);
  const query: any = map({
    [_pBT]: [, __expectNonNull(input[_pBT]!, `privacyBudgetType`)],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListCollaborationPrivacyBudgetTemplatesCommand
 */
export const se_ListCollaborationPrivacyBudgetTemplatesCommand = async (
  input: ListCollaborationPrivacyBudgetTemplatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/collaborations/{collaborationIdentifier}/privacybudgettemplates");
  b.p("collaborationIdentifier", () => input.collaborationIdentifier!, "{collaborationIdentifier}", false);
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListCollaborationsCommand
 */
export const se_ListCollaborationsCommand = async (
  input: ListCollaborationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/collaborations");
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_mS]: [, input[_mS]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListConfiguredAudienceModelAssociationsCommand
 */
export const se_ListConfiguredAudienceModelAssociationsCommand = async (
  input: ListConfiguredAudienceModelAssociationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/memberships/{membershipIdentifier}/configuredaudiencemodelassociations");
  b.p("membershipIdentifier", () => input.membershipIdentifier!, "{membershipIdentifier}", false);
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListConfiguredTableAssociationsCommand
 */
export const se_ListConfiguredTableAssociationsCommand = async (
  input: ListConfiguredTableAssociationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/memberships/{membershipIdentifier}/configuredTableAssociations");
  b.p("membershipIdentifier", () => input.membershipIdentifier!, "{membershipIdentifier}", false);
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListConfiguredTablesCommand
 */
export const se_ListConfiguredTablesCommand = async (
  input: ListConfiguredTablesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/configuredTables");
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListIdMappingTablesCommand
 */
export const se_ListIdMappingTablesCommand = async (
  input: ListIdMappingTablesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/memberships/{membershipIdentifier}/idmappingtables");
  b.p("membershipIdentifier", () => input.membershipIdentifier!, "{membershipIdentifier}", false);
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListIdNamespaceAssociationsCommand
 */
export const se_ListIdNamespaceAssociationsCommand = async (
  input: ListIdNamespaceAssociationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/memberships/{membershipIdentifier}/idnamespaceassociations");
  b.p("membershipIdentifier", () => input.membershipIdentifier!, "{membershipIdentifier}", false);
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListMembersCommand
 */
export const se_ListMembersCommand = async (
  input: ListMembersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/collaborations/{collaborationIdentifier}/members");
  b.p("collaborationIdentifier", () => input.collaborationIdentifier!, "{collaborationIdentifier}", false);
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListMembershipsCommand
 */
export const se_ListMembershipsCommand = async (
  input: ListMembershipsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/memberships");
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_s]: [, input[_s]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListPrivacyBudgetsCommand
 */
export const se_ListPrivacyBudgetsCommand = async (
  input: ListPrivacyBudgetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/memberships/{membershipIdentifier}/privacybudgets");
  b.p("membershipIdentifier", () => input.membershipIdentifier!, "{membershipIdentifier}", false);
  const query: any = map({
    [_pBT]: [, __expectNonNull(input[_pBT]!, `privacyBudgetType`)],
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListPrivacyBudgetTemplatesCommand
 */
export const se_ListPrivacyBudgetTemplatesCommand = async (
  input: ListPrivacyBudgetTemplatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/memberships/{membershipIdentifier}/privacybudgettemplates");
  b.p("membershipIdentifier", () => input.membershipIdentifier!, "{membershipIdentifier}", false);
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListProtectedQueriesCommand
 */
export const se_ListProtectedQueriesCommand = async (
  input: ListProtectedQueriesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/memberships/{membershipIdentifier}/protectedQueries");
  b.p("membershipIdentifier", () => input.membershipIdentifier!, "{membershipIdentifier}", false);
  const query: any = map({
    [_s]: [, input[_s]!],
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListSchemasCommand
 */
export const se_ListSchemasCommand = async (
  input: ListSchemasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/collaborations/{collaborationIdentifier}/schemas");
  b.p("collaborationIdentifier", () => input.collaborationIdentifier!, "{collaborationIdentifier}", false);
  const query: any = map({
    [_sT]: [, input[_sT]!],
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/tags/{resourceArn}");
  b.p("resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PopulateIdMappingTableCommand
 */
export const se_PopulateIdMappingTableCommand = async (
  input: PopulateIdMappingTableCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/memberships/{membershipIdentifier}/idmappingtables/{idMappingTableIdentifier}/populate");
  b.p("idMappingTableIdentifier", () => input.idMappingTableIdentifier!, "{idMappingTableIdentifier}", false);
  b.p("membershipIdentifier", () => input.membershipIdentifier!, "{membershipIdentifier}", false);
  let body: any;
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PreviewPrivacyImpactCommand
 */
export const se_PreviewPrivacyImpactCommand = async (
  input: PreviewPrivacyImpactCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/memberships/{membershipIdentifier}/previewprivacyimpact");
  b.p("membershipIdentifier", () => input.membershipIdentifier!, "{membershipIdentifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      parameters: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StartProtectedQueryCommand
 */
export const se_StartProtectedQueryCommand = async (
  input: StartProtectedQueryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/memberships/{membershipIdentifier}/protectedQueries");
  b.p("membershipIdentifier", () => input.membershipIdentifier!, "{membershipIdentifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      computeConfiguration: (_) => _json(_),
      resultConfiguration: (_) => _json(_),
      sqlParameters: (_) => _json(_),
      type: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1TagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/tags/{resourceArn}");
  b.p("resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/tags/{resourceArn}");
  b.p("resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  const query: any = map({
    [_tK]: [__expectNonNull(input.tagKeys, `tagKeys`) != null, () => input[_tK]! || []],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateAnalysisTemplateCommand
 */
export const se_UpdateAnalysisTemplateCommand = async (
  input: UpdateAnalysisTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/memberships/{membershipIdentifier}/analysistemplates/{analysisTemplateIdentifier}");
  b.p("membershipIdentifier", () => input.membershipIdentifier!, "{membershipIdentifier}", false);
  b.p("analysisTemplateIdentifier", () => input.analysisTemplateIdentifier!, "{analysisTemplateIdentifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      description: [],
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateCollaborationCommand
 */
export const se_UpdateCollaborationCommand = async (
  input: UpdateCollaborationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/collaborations/{collaborationIdentifier}");
  b.p("collaborationIdentifier", () => input.collaborationIdentifier!, "{collaborationIdentifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      description: [],
      name: [],
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateConfiguredAudienceModelAssociationCommand
 */
export const se_UpdateConfiguredAudienceModelAssociationCommand = async (
  input: UpdateConfiguredAudienceModelAssociationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp(
    "/memberships/{membershipIdentifier}/configuredaudiencemodelassociations/{configuredAudienceModelAssociationIdentifier}"
  );
  b.p(
    "configuredAudienceModelAssociationIdentifier",
    () => input.configuredAudienceModelAssociationIdentifier!,
    "{configuredAudienceModelAssociationIdentifier}",
    false
  );
  b.p("membershipIdentifier", () => input.membershipIdentifier!, "{membershipIdentifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      description: [],
      name: [],
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateConfiguredTableCommand
 */
export const se_UpdateConfiguredTableCommand = async (
  input: UpdateConfiguredTableCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/configuredTables/{configuredTableIdentifier}");
  b.p("configuredTableIdentifier", () => input.configuredTableIdentifier!, "{configuredTableIdentifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      description: [],
      name: [],
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateConfiguredTableAnalysisRuleCommand
 */
export const se_UpdateConfiguredTableAnalysisRuleCommand = async (
  input: UpdateConfiguredTableAnalysisRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/configuredTables/{configuredTableIdentifier}/analysisRule/{analysisRuleType}");
  b.p("configuredTableIdentifier", () => input.configuredTableIdentifier!, "{configuredTableIdentifier}", false);
  b.p("analysisRuleType", () => input.analysisRuleType!, "{analysisRuleType}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      analysisRulePolicy: (_) => _json(_),
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateConfiguredTableAssociationCommand
 */
export const se_UpdateConfiguredTableAssociationCommand = async (
  input: UpdateConfiguredTableAssociationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/memberships/{membershipIdentifier}/configuredTableAssociations/{configuredTableAssociationIdentifier}");
  b.p(
    "configuredTableAssociationIdentifier",
    () => input.configuredTableAssociationIdentifier!,
    "{configuredTableAssociationIdentifier}",
    false
  );
  b.p("membershipIdentifier", () => input.membershipIdentifier!, "{membershipIdentifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      description: [],
      roleArn: [],
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateConfiguredTableAssociationAnalysisRuleCommand
 */
export const se_UpdateConfiguredTableAssociationAnalysisRuleCommand = async (
  input: UpdateConfiguredTableAssociationAnalysisRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp(
    "/memberships/{membershipIdentifier}/configuredTableAssociations/{configuredTableAssociationIdentifier}/analysisRule/{analysisRuleType}"
  );
  b.p("membershipIdentifier", () => input.membershipIdentifier!, "{membershipIdentifier}", false);
  b.p(
    "configuredTableAssociationIdentifier",
    () => input.configuredTableAssociationIdentifier!,
    "{configuredTableAssociationIdentifier}",
    false
  );
  b.p("analysisRuleType", () => input.analysisRuleType!, "{analysisRuleType}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      analysisRulePolicy: (_) => _json(_),
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateIdMappingTableCommand
 */
export const se_UpdateIdMappingTableCommand = async (
  input: UpdateIdMappingTableCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/memberships/{membershipIdentifier}/idmappingtables/{idMappingTableIdentifier}");
  b.p("idMappingTableIdentifier", () => input.idMappingTableIdentifier!, "{idMappingTableIdentifier}", false);
  b.p("membershipIdentifier", () => input.membershipIdentifier!, "{membershipIdentifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      description: [],
      kmsKeyArn: [],
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateIdNamespaceAssociationCommand
 */
export const se_UpdateIdNamespaceAssociationCommand = async (
  input: UpdateIdNamespaceAssociationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/memberships/{membershipIdentifier}/idnamespaceassociations/{idNamespaceAssociationIdentifier}");
  b.p(
    "idNamespaceAssociationIdentifier",
    () => input.idNamespaceAssociationIdentifier!,
    "{idNamespaceAssociationIdentifier}",
    false
  );
  b.p("membershipIdentifier", () => input.membershipIdentifier!, "{membershipIdentifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      description: [],
      idMappingConfig: (_) => _json(_),
      name: [],
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateMembershipCommand
 */
export const se_UpdateMembershipCommand = async (
  input: UpdateMembershipCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/memberships/{membershipIdentifier}");
  b.p("membershipIdentifier", () => input.membershipIdentifier!, "{membershipIdentifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      defaultResultConfiguration: (_) => _json(_),
      queryLogStatus: [],
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdatePrivacyBudgetTemplateCommand
 */
export const se_UpdatePrivacyBudgetTemplateCommand = async (
  input: UpdatePrivacyBudgetTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/memberships/{membershipIdentifier}/privacybudgettemplates/{privacyBudgetTemplateIdentifier}");
  b.p("membershipIdentifier", () => input.membershipIdentifier!, "{membershipIdentifier}", false);
  b.p(
    "privacyBudgetTemplateIdentifier",
    () => input.privacyBudgetTemplateIdentifier!,
    "{privacyBudgetTemplateIdentifier}",
    false
  );
  let body: any;
  body = JSON.stringify(
    take(input, {
      parameters: (_) => _json(_),
      privacyBudgetType: [],
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateProtectedQueryCommand
 */
export const se_UpdateProtectedQueryCommand = async (
  input: UpdateProtectedQueryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/memberships/{membershipIdentifier}/protectedQueries/{protectedQueryIdentifier}");
  b.p("membershipIdentifier", () => input.membershipIdentifier!, "{membershipIdentifier}", false);
  b.p("protectedQueryIdentifier", () => input.protectedQueryIdentifier!, "{protectedQueryIdentifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      targetStatus: [],
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1BatchGetCollaborationAnalysisTemplateCommand
 */
export const de_BatchGetCollaborationAnalysisTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetCollaborationAnalysisTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    collaborationAnalysisTemplates: (_) => de_CollaborationAnalysisTemplateList(_, context),
    errors: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1BatchGetSchemaCommand
 */
export const de_BatchGetSchemaCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetSchemaCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    errors: _json,
    schemas: (_) => de_SchemaList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1BatchGetSchemaAnalysisRuleCommand
 */
export const de_BatchGetSchemaAnalysisRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetSchemaAnalysisRuleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    analysisRules: (_) => de_SchemaAnalysisRuleList(_, context),
    errors: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateAnalysisTemplateCommand
 */
export const de_CreateAnalysisTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAnalysisTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    analysisTemplate: (_) => de_AnalysisTemplate(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateCollaborationCommand
 */
export const de_CreateCollaborationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCollaborationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    collaboration: (_) => de_Collaboration(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateConfiguredAudienceModelAssociationCommand
 */
export const de_CreateConfiguredAudienceModelAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConfiguredAudienceModelAssociationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    configuredAudienceModelAssociation: (_) => de_ConfiguredAudienceModelAssociation(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateConfiguredTableCommand
 */
export const de_CreateConfiguredTableCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConfiguredTableCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    configuredTable: (_) => de_ConfiguredTable(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateConfiguredTableAnalysisRuleCommand
 */
export const de_CreateConfiguredTableAnalysisRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConfiguredTableAnalysisRuleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    analysisRule: (_) => de_ConfiguredTableAnalysisRule(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateConfiguredTableAssociationCommand
 */
export const de_CreateConfiguredTableAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConfiguredTableAssociationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    configuredTableAssociation: (_) => de_ConfiguredTableAssociation(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateConfiguredTableAssociationAnalysisRuleCommand
 */
export const de_CreateConfiguredTableAssociationAnalysisRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConfiguredTableAssociationAnalysisRuleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    analysisRule: (_) => de_ConfiguredTableAssociationAnalysisRule(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateIdMappingTableCommand
 */
export const de_CreateIdMappingTableCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateIdMappingTableCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    idMappingTable: (_) => de_IdMappingTable(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateIdNamespaceAssociationCommand
 */
export const de_CreateIdNamespaceAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateIdNamespaceAssociationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    idNamespaceAssociation: (_) => de_IdNamespaceAssociation(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateMembershipCommand
 */
export const de_CreateMembershipCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMembershipCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    membership: (_) => de_Membership(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreatePrivacyBudgetTemplateCommand
 */
export const de_CreatePrivacyBudgetTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePrivacyBudgetTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    privacyBudgetTemplate: (_) => de_PrivacyBudgetTemplate(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteAnalysisTemplateCommand
 */
export const de_DeleteAnalysisTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAnalysisTemplateCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteCollaborationCommand
 */
export const de_DeleteCollaborationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCollaborationCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteConfiguredAudienceModelAssociationCommand
 */
export const de_DeleteConfiguredAudienceModelAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConfiguredAudienceModelAssociationCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteConfiguredTableCommand
 */
export const de_DeleteConfiguredTableCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConfiguredTableCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteConfiguredTableAnalysisRuleCommand
 */
export const de_DeleteConfiguredTableAnalysisRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConfiguredTableAnalysisRuleCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteConfiguredTableAssociationCommand
 */
export const de_DeleteConfiguredTableAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConfiguredTableAssociationCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteConfiguredTableAssociationAnalysisRuleCommand
 */
export const de_DeleteConfiguredTableAssociationAnalysisRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConfiguredTableAssociationAnalysisRuleCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteIdMappingTableCommand
 */
export const de_DeleteIdMappingTableCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteIdMappingTableCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteIdNamespaceAssociationCommand
 */
export const de_DeleteIdNamespaceAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteIdNamespaceAssociationCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteMemberCommand
 */
export const de_DeleteMemberCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMemberCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteMembershipCommand
 */
export const de_DeleteMembershipCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMembershipCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeletePrivacyBudgetTemplateCommand
 */
export const de_DeletePrivacyBudgetTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePrivacyBudgetTemplateCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1GetAnalysisTemplateCommand
 */
export const de_GetAnalysisTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAnalysisTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    analysisTemplate: (_) => de_AnalysisTemplate(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetCollaborationCommand
 */
export const de_GetCollaborationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCollaborationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    collaboration: (_) => de_Collaboration(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetCollaborationAnalysisTemplateCommand
 */
export const de_GetCollaborationAnalysisTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCollaborationAnalysisTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    collaborationAnalysisTemplate: (_) => de_CollaborationAnalysisTemplate(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetCollaborationConfiguredAudienceModelAssociationCommand
 */
export const de_GetCollaborationConfiguredAudienceModelAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCollaborationConfiguredAudienceModelAssociationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    collaborationConfiguredAudienceModelAssociation: (_) =>
      de_CollaborationConfiguredAudienceModelAssociation(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetCollaborationIdNamespaceAssociationCommand
 */
export const de_GetCollaborationIdNamespaceAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCollaborationIdNamespaceAssociationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    collaborationIdNamespaceAssociation: (_) => de_CollaborationIdNamespaceAssociation(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetCollaborationPrivacyBudgetTemplateCommand
 */
export const de_GetCollaborationPrivacyBudgetTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCollaborationPrivacyBudgetTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    collaborationPrivacyBudgetTemplate: (_) => de_CollaborationPrivacyBudgetTemplate(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetConfiguredAudienceModelAssociationCommand
 */
export const de_GetConfiguredAudienceModelAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConfiguredAudienceModelAssociationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    configuredAudienceModelAssociation: (_) => de_ConfiguredAudienceModelAssociation(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetConfiguredTableCommand
 */
export const de_GetConfiguredTableCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConfiguredTableCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    configuredTable: (_) => de_ConfiguredTable(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetConfiguredTableAnalysisRuleCommand
 */
export const de_GetConfiguredTableAnalysisRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConfiguredTableAnalysisRuleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    analysisRule: (_) => de_ConfiguredTableAnalysisRule(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetConfiguredTableAssociationCommand
 */
export const de_GetConfiguredTableAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConfiguredTableAssociationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    configuredTableAssociation: (_) => de_ConfiguredTableAssociation(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetConfiguredTableAssociationAnalysisRuleCommand
 */
export const de_GetConfiguredTableAssociationAnalysisRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConfiguredTableAssociationAnalysisRuleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    analysisRule: (_) => de_ConfiguredTableAssociationAnalysisRule(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetIdMappingTableCommand
 */
export const de_GetIdMappingTableCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIdMappingTableCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    idMappingTable: (_) => de_IdMappingTable(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetIdNamespaceAssociationCommand
 */
export const de_GetIdNamespaceAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIdNamespaceAssociationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    idNamespaceAssociation: (_) => de_IdNamespaceAssociation(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetMembershipCommand
 */
export const de_GetMembershipCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMembershipCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    membership: (_) => de_Membership(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetPrivacyBudgetTemplateCommand
 */
export const de_GetPrivacyBudgetTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPrivacyBudgetTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    privacyBudgetTemplate: (_) => de_PrivacyBudgetTemplate(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetProtectedQueryCommand
 */
export const de_GetProtectedQueryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetProtectedQueryCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    protectedQuery: (_) => de_ProtectedQuery(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetSchemaCommand
 */
export const de_GetSchemaCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSchemaCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    schema: (_) => de_Schema(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetSchemaAnalysisRuleCommand
 */
export const de_GetSchemaAnalysisRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSchemaAnalysisRuleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    analysisRule: (_) => de_AnalysisRule(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListAnalysisTemplatesCommand
 */
export const de_ListAnalysisTemplatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAnalysisTemplatesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    analysisTemplateSummaries: (_) => de_AnalysisTemplateSummaryList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListCollaborationAnalysisTemplatesCommand
 */
export const de_ListCollaborationAnalysisTemplatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCollaborationAnalysisTemplatesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    collaborationAnalysisTemplateSummaries: (_) => de_CollaborationAnalysisTemplateSummaryList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListCollaborationConfiguredAudienceModelAssociationsCommand
 */
export const de_ListCollaborationConfiguredAudienceModelAssociationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCollaborationConfiguredAudienceModelAssociationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    collaborationConfiguredAudienceModelAssociationSummaries: (_) =>
      de_CollaborationConfiguredAudienceModelAssociationSummaryList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListCollaborationIdNamespaceAssociationsCommand
 */
export const de_ListCollaborationIdNamespaceAssociationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCollaborationIdNamespaceAssociationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    collaborationIdNamespaceAssociationSummaries: (_) => de_CollaborationIdNamespaceAssociationSummaryList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListCollaborationPrivacyBudgetsCommand
 */
export const de_ListCollaborationPrivacyBudgetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCollaborationPrivacyBudgetsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    collaborationPrivacyBudgetSummaries: (_) => de_CollaborationPrivacyBudgetSummaryList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListCollaborationPrivacyBudgetTemplatesCommand
 */
export const de_ListCollaborationPrivacyBudgetTemplatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCollaborationPrivacyBudgetTemplatesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    collaborationPrivacyBudgetTemplateSummaries: (_) => de_CollaborationPrivacyBudgetTemplateSummaryList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListCollaborationsCommand
 */
export const de_ListCollaborationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCollaborationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    collaborationList: (_) => de_CollaborationSummaryList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListConfiguredAudienceModelAssociationsCommand
 */
export const de_ListConfiguredAudienceModelAssociationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConfiguredAudienceModelAssociationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    configuredAudienceModelAssociationSummaries: (_) => de_ConfiguredAudienceModelAssociationSummaryList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListConfiguredTableAssociationsCommand
 */
export const de_ListConfiguredTableAssociationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConfiguredTableAssociationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    configuredTableAssociationSummaries: (_) => de_ConfiguredTableAssociationSummaryList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListConfiguredTablesCommand
 */
export const de_ListConfiguredTablesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConfiguredTablesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    configuredTableSummaries: (_) => de_ConfiguredTableSummaryList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListIdMappingTablesCommand
 */
export const de_ListIdMappingTablesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListIdMappingTablesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    idMappingTableSummaries: (_) => de_IdMappingTableSummaryList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListIdNamespaceAssociationsCommand
 */
export const de_ListIdNamespaceAssociationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListIdNamespaceAssociationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    idNamespaceAssociationSummaries: (_) => de_IdNamespaceAssociationSummaryList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListMembersCommand
 */
export const de_ListMembersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMembersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    memberSummaries: (_) => de_MemberSummaryList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListMembershipsCommand
 */
export const de_ListMembershipsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMembershipsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    membershipSummaries: (_) => de_MembershipSummaryList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListPrivacyBudgetsCommand
 */
export const de_ListPrivacyBudgetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPrivacyBudgetsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    privacyBudgetSummaries: (_) => de_PrivacyBudgetSummaryList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListPrivacyBudgetTemplatesCommand
 */
export const de_ListPrivacyBudgetTemplatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPrivacyBudgetTemplatesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    privacyBudgetTemplateSummaries: (_) => de_PrivacyBudgetTemplateSummaryList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListProtectedQueriesCommand
 */
export const de_ListProtectedQueriesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProtectedQueriesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    protectedQueries: (_) => de_ProtectedQuerySummaryList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListSchemasCommand
 */
export const de_ListSchemasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSchemasCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    schemaSummaries: (_) => de_SchemaSummaryList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListTagsForResourceCommand
 */
export const de_ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    tags: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1PopulateIdMappingTableCommand
 */
export const de_PopulateIdMappingTableCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PopulateIdMappingTableCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    idMappingJobId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1PreviewPrivacyImpactCommand
 */
export const de_PreviewPrivacyImpactCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PreviewPrivacyImpactCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    privacyImpact: (_) => _json(__expectUnion(_)),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1StartProtectedQueryCommand
 */
export const de_StartProtectedQueryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartProtectedQueryCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    protectedQuery: (_) => de_ProtectedQuery(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1TagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateAnalysisTemplateCommand
 */
export const de_UpdateAnalysisTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAnalysisTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    analysisTemplate: (_) => de_AnalysisTemplate(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateCollaborationCommand
 */
export const de_UpdateCollaborationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCollaborationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    collaboration: (_) => de_Collaboration(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateConfiguredAudienceModelAssociationCommand
 */
export const de_UpdateConfiguredAudienceModelAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConfiguredAudienceModelAssociationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    configuredAudienceModelAssociation: (_) => de_ConfiguredAudienceModelAssociation(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateConfiguredTableCommand
 */
export const de_UpdateConfiguredTableCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConfiguredTableCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    configuredTable: (_) => de_ConfiguredTable(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateConfiguredTableAnalysisRuleCommand
 */
export const de_UpdateConfiguredTableAnalysisRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConfiguredTableAnalysisRuleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    analysisRule: (_) => de_ConfiguredTableAnalysisRule(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateConfiguredTableAssociationCommand
 */
export const de_UpdateConfiguredTableAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConfiguredTableAssociationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    configuredTableAssociation: (_) => de_ConfiguredTableAssociation(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateConfiguredTableAssociationAnalysisRuleCommand
 */
export const de_UpdateConfiguredTableAssociationAnalysisRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConfiguredTableAssociationAnalysisRuleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    analysisRule: (_) => de_ConfiguredTableAssociationAnalysisRule(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateIdMappingTableCommand
 */
export const de_UpdateIdMappingTableCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateIdMappingTableCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    idMappingTable: (_) => de_IdMappingTable(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateIdNamespaceAssociationCommand
 */
export const de_UpdateIdNamespaceAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateIdNamespaceAssociationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    idNamespaceAssociation: (_) => de_IdNamespaceAssociation(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateMembershipCommand
 */
export const de_UpdateMembershipCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMembershipCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    membership: (_) => de_Membership(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdatePrivacyBudgetTemplateCommand
 */
export const de_UpdatePrivacyBudgetTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePrivacyBudgetTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    privacyBudgetTemplate: (_) => de_PrivacyBudgetTemplate(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateProtectedQueryCommand
 */
export const de_UpdateProtectedQueryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateProtectedQueryCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    protectedQuery: (_) => de_ProtectedQuery(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserialize_Aws_restJson1CommandError
 */
const de_CommandError = async (output: __HttpResponse, context: __SerdeContext): Promise<never> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.cleanrooms#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.cleanrooms#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cleanrooms#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.cleanrooms#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.cleanrooms#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.cleanrooms#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.cleanrooms#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      }) as never;
  }
};

const throwDefaultError = withBaseException(__BaseException);
/**
 * deserializeAws_restJson1AccessDeniedExceptionRes
 */
const de_AccessDeniedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
    reason: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ConflictExceptionRes
 */
const de_ConflictExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ConflictException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
    reason: __expectString,
    resourceId: __expectString,
    resourceType: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InternalServerExceptionRes
 */
const de_InternalServerExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new InternalServerException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ResourceNotFoundExceptionRes
 */
const de_ResourceNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
    resourceId: __expectString,
    resourceType: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ServiceQuotaExceededExceptionRes
 */
const de_ServiceQuotaExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceQuotaExceededException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
    quotaName: __expectString,
    quotaValue: __limitedParseDouble,
  });
  Object.assign(contents, doc);
  const exception = new ServiceQuotaExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ThrottlingExceptionRes
 */
const de_ThrottlingExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ThrottlingException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ThrottlingException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ValidationExceptionRes
 */
const de_ValidationExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ValidationException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    fieldList: _json,
    message: __expectString,
    reason: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

// se_AggregateColumn omitted.

// se_AggregateColumnList omitted.

// se_AggregationConstraint omitted.

// se_AggregationConstraints omitted.

// se_AllowedAdditionalAnalyses omitted.

// se_AllowedAnalysesList omitted.

// se_AllowedAnalysisProviderList omitted.

// se_AllowedColumnList omitted.

// se_AllowedResultReceivers omitted.

// se_AnalysisParameter omitted.

// se_AnalysisParameterList omitted.

// se_AnalysisRuleAggregation omitted.

// se_AnalysisRuleColumnList omitted.

// se_AnalysisRuleColumnNameList omitted.

// se_AnalysisRuleCustom omitted.

// se_AnalysisRuleList omitted.

// se_AnalysisSource omitted.

// se_AnalysisTemplateArnList omitted.

// se_AthenaTableReference omitted.

// se_ComputeConfiguration omitted.

// se_ConfiguredTableAnalysisRulePolicy omitted.

// se_ConfiguredTableAnalysisRulePolicyV1 omitted.

// se_ConfiguredTableAssociationAnalysisRuleAggregation omitted.

// se_ConfiguredTableAssociationAnalysisRuleCustom omitted.

// se_ConfiguredTableAssociationAnalysisRuleList omitted.

// se_ConfiguredTableAssociationAnalysisRulePolicy omitted.

// se_ConfiguredTableAssociationAnalysisRulePolicyV1 omitted.

// se_CustomMLMemberAbilities omitted.

// se_DataEncryptionMetadata omitted.

// se_DifferentialPrivacyColumn omitted.

// se_DifferentialPrivacyColumnList omitted.

// se_DifferentialPrivacyConfiguration omitted.

// se_DifferentialPrivacyPreviewParametersInput omitted.

// se_DifferentialPrivacyTemplateParametersInput omitted.

// se_DifferentialPrivacyTemplateUpdateParameters omitted.

// se_GlueTableReference omitted.

// se_IdMappingConfig omitted.

// se_IdMappingTableInputReferenceConfig omitted.

// se_IdNamespaceAssociationInputReferenceConfig omitted.

// se_JoinOperatorsList omitted.

// se_MemberAbilities omitted.

// se_MemberList omitted.

// se_MembershipMLPaymentConfig omitted.

// se_MembershipModelInferencePaymentConfig omitted.

// se_MembershipModelTrainingPaymentConfig omitted.

// se_MembershipPaymentConfiguration omitted.

// se_MembershipProtectedQueryOutputConfiguration omitted.

// se_MembershipProtectedQueryResultConfiguration omitted.

// se_MembershipQueryComputePaymentConfig omitted.

// se_MemberSpecification omitted.

// se_MLMemberAbilities omitted.

// se_MLPaymentConfig omitted.

// se_ModelInferencePaymentConfig omitted.

// se_ModelTrainingPaymentConfig omitted.

// se_ParameterMap omitted.

// se_PaymentConfiguration omitted.

// se_PreviewPrivacyImpactParametersInput omitted.

// se_PrivacyBudgetTemplateParametersInput omitted.

// se_PrivacyBudgetTemplateUpdateParameters omitted.

// se_ProtectedQueryMemberOutputConfiguration omitted.

// se_ProtectedQueryOutputConfiguration omitted.

// se_ProtectedQueryResultConfiguration omitted.

// se_ProtectedQueryS3OutputConfiguration omitted.

// se_ProtectedQuerySQLParameters omitted.

// se_QueryComputePaymentConfig omitted.

// se_ScalarFunctionsList omitted.

// se_SchemaAnalysisRuleRequest omitted.

// se_SchemaAnalysisRuleRequestList omitted.

// se_SnowflakeTableReference omitted.

// se_SnowflakeTableSchema omitted.

// se_SnowflakeTableSchemaList omitted.

// se_SnowflakeTableSchemaV1 omitted.

// se_TableAliasList omitted.

// se_TableReference omitted.

// se_TagMap omitted.

// se_WorkerComputeConfiguration omitted.

// de_AggregateColumn omitted.

// de_AggregateColumnList omitted.

// de_AggregationConstraint omitted.

// de_AggregationConstraints omitted.

// de_AllowedAdditionalAnalyses omitted.

// de_AllowedAnalysesList omitted.

// de_AllowedAnalysisProviderList omitted.

// de_AllowedColumnList omitted.

// de_AllowedResultReceivers omitted.

// de_AnalysisParameter omitted.

// de_AnalysisParameterList omitted.

/**
 * deserializeAws_restJson1AnalysisRule
 */
const de_AnalysisRule = (output: any, context: __SerdeContext): AnalysisRule => {
  return take(output, {
    collaborationId: __expectString,
    createTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    name: __expectString,
    policy: (_: any) => _json(__expectUnion(_)),
    type: __expectString,
    updateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

// de_AnalysisRuleAggregation omitted.

// de_AnalysisRuleColumnList omitted.

// de_AnalysisRuleColumnNameList omitted.

// de_AnalysisRuleCustom omitted.

// de_AnalysisRuleIdMappingTable omitted.

// de_AnalysisRuleList omitted.

// de_AnalysisRulePolicy omitted.

// de_AnalysisRulePolicyV1 omitted.

// de_AnalysisRuleTypeList omitted.

// de_AnalysisSchema omitted.

// de_AnalysisSource omitted.

/**
 * deserializeAws_restJson1AnalysisTemplate
 */
const de_AnalysisTemplate = (output: any, context: __SerdeContext): AnalysisTemplate => {
  return take(output, {
    analysisParameters: _json,
    arn: __expectString,
    collaborationArn: __expectString,
    collaborationId: __expectString,
    createTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    format: __expectString,
    id: __expectString,
    membershipArn: __expectString,
    membershipId: __expectString,
    name: __expectString,
    schema: _json,
    source: (_: any) => _json(__expectUnion(_)),
    updateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    validations: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1AnalysisTemplateSummary
 */
const de_AnalysisTemplateSummary = (output: any, context: __SerdeContext): AnalysisTemplateSummary => {
  return take(output, {
    arn: __expectString,
    collaborationArn: __expectString,
    collaborationId: __expectString,
    createTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    id: __expectString,
    membershipArn: __expectString,
    membershipId: __expectString,
    name: __expectString,
    updateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_restJson1AnalysisTemplateSummaryList
 */
const de_AnalysisTemplateSummaryList = (output: any, context: __SerdeContext): AnalysisTemplateSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AnalysisTemplateSummary(entry, context);
    });
  return retVal;
};

// de_AnalysisTemplateValidationStatusDetail omitted.

// de_AnalysisTemplateValidationStatusDetailList omitted.

// de_AnalysisTemplateValidationStatusReason omitted.

// de_AnalysisTemplateValidationStatusReasonList omitted.

// de_AthenaTableReference omitted.

// de_BatchGetCollaborationAnalysisTemplateError omitted.

// de_BatchGetCollaborationAnalysisTemplateErrorList omitted.

// de_BatchGetSchemaAnalysisRuleError omitted.

// de_BatchGetSchemaAnalysisRuleErrorList omitted.

// de_BatchGetSchemaError omitted.

// de_BatchGetSchemaErrorList omitted.

/**
 * deserializeAws_restJson1BilledResourceUtilization
 */
const de_BilledResourceUtilization = (output: any, context: __SerdeContext): BilledResourceUtilization => {
  return take(output, {
    units: __limitedParseDouble,
  }) as any;
};

/**
 * deserializeAws_restJson1Collaboration
 */
const de_Collaboration = (output: any, context: __SerdeContext): Collaboration => {
  return take(output, {
    analyticsEngine: __expectString,
    arn: __expectString,
    createTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    creatorAccountId: __expectString,
    creatorDisplayName: __expectString,
    dataEncryptionMetadata: _json,
    description: __expectString,
    id: __expectString,
    memberStatus: __expectString,
    membershipArn: __expectString,
    membershipId: __expectString,
    name: __expectString,
    queryLogStatus: __expectString,
    updateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_restJson1CollaborationAnalysisTemplate
 */
const de_CollaborationAnalysisTemplate = (output: any, context: __SerdeContext): CollaborationAnalysisTemplate => {
  return take(output, {
    analysisParameters: _json,
    arn: __expectString,
    collaborationArn: __expectString,
    collaborationId: __expectString,
    createTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    creatorAccountId: __expectString,
    description: __expectString,
    format: __expectString,
    id: __expectString,
    name: __expectString,
    schema: _json,
    source: (_: any) => _json(__expectUnion(_)),
    updateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    validations: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1CollaborationAnalysisTemplateList
 */
const de_CollaborationAnalysisTemplateList = (
  output: any,
  context: __SerdeContext
): CollaborationAnalysisTemplate[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_CollaborationAnalysisTemplate(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1CollaborationAnalysisTemplateSummary
 */
const de_CollaborationAnalysisTemplateSummary = (
  output: any,
  context: __SerdeContext
): CollaborationAnalysisTemplateSummary => {
  return take(output, {
    arn: __expectString,
    collaborationArn: __expectString,
    collaborationId: __expectString,
    createTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    creatorAccountId: __expectString,
    description: __expectString,
    id: __expectString,
    name: __expectString,
    updateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_restJson1CollaborationAnalysisTemplateSummaryList
 */
const de_CollaborationAnalysisTemplateSummaryList = (
  output: any,
  context: __SerdeContext
): CollaborationAnalysisTemplateSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_CollaborationAnalysisTemplateSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1CollaborationConfiguredAudienceModelAssociation
 */
const de_CollaborationConfiguredAudienceModelAssociation = (
  output: any,
  context: __SerdeContext
): CollaborationConfiguredAudienceModelAssociation => {
  return take(output, {
    arn: __expectString,
    collaborationArn: __expectString,
    collaborationId: __expectString,
    configuredAudienceModelArn: __expectString,
    createTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    creatorAccountId: __expectString,
    description: __expectString,
    id: __expectString,
    name: __expectString,
    updateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_restJson1CollaborationConfiguredAudienceModelAssociationSummary
 */
const de_CollaborationConfiguredAudienceModelAssociationSummary = (
  output: any,
  context: __SerdeContext
): CollaborationConfiguredAudienceModelAssociationSummary => {
  return take(output, {
    arn: __expectString,
    collaborationArn: __expectString,
    collaborationId: __expectString,
    createTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    creatorAccountId: __expectString,
    description: __expectString,
    id: __expectString,
    name: __expectString,
    updateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_restJson1CollaborationConfiguredAudienceModelAssociationSummaryList
 */
const de_CollaborationConfiguredAudienceModelAssociationSummaryList = (
  output: any,
  context: __SerdeContext
): CollaborationConfiguredAudienceModelAssociationSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_CollaborationConfiguredAudienceModelAssociationSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1CollaborationIdNamespaceAssociation
 */
const de_CollaborationIdNamespaceAssociation = (
  output: any,
  context: __SerdeContext
): CollaborationIdNamespaceAssociation => {
  return take(output, {
    arn: __expectString,
    collaborationArn: __expectString,
    collaborationId: __expectString,
    createTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    creatorAccountId: __expectString,
    description: __expectString,
    id: __expectString,
    idMappingConfig: _json,
    inputReferenceConfig: _json,
    inputReferenceProperties: (_: any) => de_IdNamespaceAssociationInputReferenceProperties(_, context),
    name: __expectString,
    updateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_restJson1CollaborationIdNamespaceAssociationSummary
 */
const de_CollaborationIdNamespaceAssociationSummary = (
  output: any,
  context: __SerdeContext
): CollaborationIdNamespaceAssociationSummary => {
  return take(output, {
    arn: __expectString,
    collaborationArn: __expectString,
    collaborationId: __expectString,
    createTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    creatorAccountId: __expectString,
    description: __expectString,
    id: __expectString,
    inputReferenceConfig: _json,
    inputReferenceProperties: _json,
    name: __expectString,
    updateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_restJson1CollaborationIdNamespaceAssociationSummaryList
 */
const de_CollaborationIdNamespaceAssociationSummaryList = (
  output: any,
  context: __SerdeContext
): CollaborationIdNamespaceAssociationSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_CollaborationIdNamespaceAssociationSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1CollaborationPrivacyBudgetSummary
 */
const de_CollaborationPrivacyBudgetSummary = (
  output: any,
  context: __SerdeContext
): CollaborationPrivacyBudgetSummary => {
  return take(output, {
    budget: (_: any) => _json(__expectUnion(_)),
    collaborationArn: __expectString,
    collaborationId: __expectString,
    createTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    creatorAccountId: __expectString,
    id: __expectString,
    privacyBudgetTemplateArn: __expectString,
    privacyBudgetTemplateId: __expectString,
    type: __expectString,
    updateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_restJson1CollaborationPrivacyBudgetSummaryList
 */
const de_CollaborationPrivacyBudgetSummaryList = (
  output: any,
  context: __SerdeContext
): CollaborationPrivacyBudgetSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_CollaborationPrivacyBudgetSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1CollaborationPrivacyBudgetTemplate
 */
const de_CollaborationPrivacyBudgetTemplate = (
  output: any,
  context: __SerdeContext
): CollaborationPrivacyBudgetTemplate => {
  return take(output, {
    arn: __expectString,
    autoRefresh: __expectString,
    collaborationArn: __expectString,
    collaborationId: __expectString,
    createTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    creatorAccountId: __expectString,
    id: __expectString,
    parameters: (_: any) => _json(__expectUnion(_)),
    privacyBudgetType: __expectString,
    updateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_restJson1CollaborationPrivacyBudgetTemplateSummary
 */
const de_CollaborationPrivacyBudgetTemplateSummary = (
  output: any,
  context: __SerdeContext
): CollaborationPrivacyBudgetTemplateSummary => {
  return take(output, {
    arn: __expectString,
    collaborationArn: __expectString,
    collaborationId: __expectString,
    createTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    creatorAccountId: __expectString,
    id: __expectString,
    privacyBudgetType: __expectString,
    updateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_restJson1CollaborationPrivacyBudgetTemplateSummaryList
 */
const de_CollaborationPrivacyBudgetTemplateSummaryList = (
  output: any,
  context: __SerdeContext
): CollaborationPrivacyBudgetTemplateSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_CollaborationPrivacyBudgetTemplateSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1CollaborationSummary
 */
const de_CollaborationSummary = (output: any, context: __SerdeContext): CollaborationSummary => {
  return take(output, {
    analyticsEngine: __expectString,
    arn: __expectString,
    createTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    creatorAccountId: __expectString,
    creatorDisplayName: __expectString,
    id: __expectString,
    memberStatus: __expectString,
    membershipArn: __expectString,
    membershipId: __expectString,
    name: __expectString,
    updateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_restJson1CollaborationSummaryList
 */
const de_CollaborationSummaryList = (output: any, context: __SerdeContext): CollaborationSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_CollaborationSummary(entry, context);
    });
  return retVal;
};

// de_Column omitted.

// de_ColumnList omitted.

// de_ComputeConfiguration omitted.

// de_ConfigurationDetails omitted.

/**
 * deserializeAws_restJson1ConfiguredAudienceModelAssociation
 */
const de_ConfiguredAudienceModelAssociation = (
  output: any,
  context: __SerdeContext
): ConfiguredAudienceModelAssociation => {
  return take(output, {
    arn: __expectString,
    collaborationArn: __expectString,
    collaborationId: __expectString,
    configuredAudienceModelArn: __expectString,
    createTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    id: __expectString,
    manageResourcePolicies: __expectBoolean,
    membershipArn: __expectString,
    membershipId: __expectString,
    name: __expectString,
    updateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_restJson1ConfiguredAudienceModelAssociationSummary
 */
const de_ConfiguredAudienceModelAssociationSummary = (
  output: any,
  context: __SerdeContext
): ConfiguredAudienceModelAssociationSummary => {
  return take(output, {
    arn: __expectString,
    collaborationArn: __expectString,
    collaborationId: __expectString,
    configuredAudienceModelArn: __expectString,
    createTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    id: __expectString,
    membershipArn: __expectString,
    membershipId: __expectString,
    name: __expectString,
    updateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_restJson1ConfiguredAudienceModelAssociationSummaryList
 */
const de_ConfiguredAudienceModelAssociationSummaryList = (
  output: any,
  context: __SerdeContext
): ConfiguredAudienceModelAssociationSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ConfiguredAudienceModelAssociationSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ConfiguredTable
 */
const de_ConfiguredTable = (output: any, context: __SerdeContext): ConfiguredTable => {
  return take(output, {
    allowedColumns: _json,
    analysisMethod: __expectString,
    analysisRuleTypes: _json,
    arn: __expectString,
    createTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    id: __expectString,
    name: __expectString,
    tableReference: (_: any) => _json(__expectUnion(_)),
    updateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_restJson1ConfiguredTableAnalysisRule
 */
const de_ConfiguredTableAnalysisRule = (output: any, context: __SerdeContext): ConfiguredTableAnalysisRule => {
  return take(output, {
    configuredTableArn: __expectString,
    configuredTableId: __expectString,
    createTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    policy: (_: any) => _json(__expectUnion(_)),
    type: __expectString,
    updateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

// de_ConfiguredTableAnalysisRulePolicy omitted.

// de_ConfiguredTableAnalysisRulePolicyV1 omitted.

// de_ConfiguredTableAnalysisRuleTypeList omitted.

/**
 * deserializeAws_restJson1ConfiguredTableAssociation
 */
const de_ConfiguredTableAssociation = (output: any, context: __SerdeContext): ConfiguredTableAssociation => {
  return take(output, {
    analysisRuleTypes: _json,
    arn: __expectString,
    configuredTableArn: __expectString,
    configuredTableId: __expectString,
    createTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    id: __expectString,
    membershipArn: __expectString,
    membershipId: __expectString,
    name: __expectString,
    roleArn: __expectString,
    updateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_restJson1ConfiguredTableAssociationAnalysisRule
 */
const de_ConfiguredTableAssociationAnalysisRule = (
  output: any,
  context: __SerdeContext
): ConfiguredTableAssociationAnalysisRule => {
  return take(output, {
    configuredTableAssociationArn: __expectString,
    configuredTableAssociationId: __expectString,
    createTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    membershipIdentifier: __expectString,
    policy: (_: any) => _json(__expectUnion(_)),
    type: __expectString,
    updateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

// de_ConfiguredTableAssociationAnalysisRuleAggregation omitted.

// de_ConfiguredTableAssociationAnalysisRuleCustom omitted.

// de_ConfiguredTableAssociationAnalysisRuleList omitted.

// de_ConfiguredTableAssociationAnalysisRulePolicy omitted.

// de_ConfiguredTableAssociationAnalysisRulePolicyV1 omitted.

// de_ConfiguredTableAssociationAnalysisRuleTypeList omitted.

/**
 * deserializeAws_restJson1ConfiguredTableAssociationSummary
 */
const de_ConfiguredTableAssociationSummary = (
  output: any,
  context: __SerdeContext
): ConfiguredTableAssociationSummary => {
  return take(output, {
    arn: __expectString,
    configuredTableId: __expectString,
    createTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    id: __expectString,
    membershipArn: __expectString,
    membershipId: __expectString,
    name: __expectString,
    updateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_restJson1ConfiguredTableAssociationSummaryList
 */
const de_ConfiguredTableAssociationSummaryList = (
  output: any,
  context: __SerdeContext
): ConfiguredTableAssociationSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ConfiguredTableAssociationSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ConfiguredTableSummary
 */
const de_ConfiguredTableSummary = (output: any, context: __SerdeContext): ConfiguredTableSummary => {
  return take(output, {
    analysisMethod: __expectString,
    analysisRuleTypes: _json,
    arn: __expectString,
    createTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    id: __expectString,
    name: __expectString,
    updateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_restJson1ConfiguredTableSummaryList
 */
const de_ConfiguredTableSummaryList = (output: any, context: __SerdeContext): ConfiguredTableSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ConfiguredTableSummary(entry, context);
    });
  return retVal;
};

// de_CustomMLMemberAbilities omitted.

// de_DataEncryptionMetadata omitted.

// de_DifferentialPrivacyColumn omitted.

// de_DifferentialPrivacyColumnList omitted.

// de_DifferentialPrivacyConfiguration omitted.

/**
 * deserializeAws_restJson1DifferentialPrivacyParameters
 */
const de_DifferentialPrivacyParameters = (output: any, context: __SerdeContext): DifferentialPrivacyParameters => {
  return take(output, {
    sensitivityParameters: (_: any) => de_DifferentialPrivacySensitivityParametersList(_, context),
  }) as any;
};

// de_DifferentialPrivacyPreviewAggregation omitted.

// de_DifferentialPrivacyPreviewAggregationList omitted.

// de_DifferentialPrivacyPrivacyBudget omitted.

// de_DifferentialPrivacyPrivacyBudgetAggregation omitted.

// de_DifferentialPrivacyPrivacyBudgetAggregationList omitted.

// de_DifferentialPrivacyPrivacyImpact omitted.

/**
 * deserializeAws_restJson1DifferentialPrivacySensitivityParameters
 */
const de_DifferentialPrivacySensitivityParameters = (
  output: any,
  context: __SerdeContext
): DifferentialPrivacySensitivityParameters => {
  return take(output, {
    aggregationExpression: __expectString,
    aggregationType: __expectString,
    maxColumnValue: __limitedParseFloat32,
    minColumnValue: __limitedParseFloat32,
    userContributionLimit: __expectInt32,
  }) as any;
};

/**
 * deserializeAws_restJson1DifferentialPrivacySensitivityParametersList
 */
const de_DifferentialPrivacySensitivityParametersList = (
  output: any,
  context: __SerdeContext
): DifferentialPrivacySensitivityParameters[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DifferentialPrivacySensitivityParameters(entry, context);
    });
  return retVal;
};

// de_DifferentialPrivacyTemplateParametersOutput omitted.

// de_DirectAnalysisConfigurationDetails omitted.

// de_GlueTableReference omitted.

// de_IdMappingConfig omitted.

/**
 * deserializeAws_restJson1IdMappingTable
 */
const de_IdMappingTable = (output: any, context: __SerdeContext): IdMappingTable => {
  return take(output, {
    arn: __expectString,
    collaborationArn: __expectString,
    collaborationId: __expectString,
    createTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    id: __expectString,
    inputReferenceConfig: _json,
    inputReferenceProperties: _json,
    kmsKeyArn: __expectString,
    membershipArn: __expectString,
    membershipId: __expectString,
    name: __expectString,
    updateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

// de_IdMappingTableInputReferenceConfig omitted.

// de_IdMappingTableInputReferenceProperties omitted.

// de_IdMappingTableInputSource omitted.

// de_IdMappingTableInputSourceList omitted.

// de_IdMappingTableSchemaTypeProperties omitted.

/**
 * deserializeAws_restJson1IdMappingTableSummary
 */
const de_IdMappingTableSummary = (output: any, context: __SerdeContext): IdMappingTableSummary => {
  return take(output, {
    arn: __expectString,
    collaborationArn: __expectString,
    collaborationId: __expectString,
    createTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    id: __expectString,
    inputReferenceConfig: _json,
    membershipArn: __expectString,
    membershipId: __expectString,
    name: __expectString,
    updateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_restJson1IdMappingTableSummaryList
 */
const de_IdMappingTableSummaryList = (output: any, context: __SerdeContext): IdMappingTableSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_IdMappingTableSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1IdMappingWorkflowsSupported
 */
const de_IdMappingWorkflowsSupported = (output: any, context: __SerdeContext): __DocumentType[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Document(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1IdNamespaceAssociation
 */
const de_IdNamespaceAssociation = (output: any, context: __SerdeContext): IdNamespaceAssociation => {
  return take(output, {
    arn: __expectString,
    collaborationArn: __expectString,
    collaborationId: __expectString,
    createTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    id: __expectString,
    idMappingConfig: _json,
    inputReferenceConfig: _json,
    inputReferenceProperties: (_: any) => de_IdNamespaceAssociationInputReferenceProperties(_, context),
    membershipArn: __expectString,
    membershipId: __expectString,
    name: __expectString,
    updateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

// de_IdNamespaceAssociationInputReferenceConfig omitted.

/**
 * deserializeAws_restJson1IdNamespaceAssociationInputReferenceProperties
 */
const de_IdNamespaceAssociationInputReferenceProperties = (
  output: any,
  context: __SerdeContext
): IdNamespaceAssociationInputReferenceProperties => {
  return take(output, {
    idMappingWorkflowsSupported: (_: any) => de_IdMappingWorkflowsSupported(_, context),
    idNamespaceType: __expectString,
  }) as any;
};

// de_IdNamespaceAssociationInputReferencePropertiesSummary omitted.

/**
 * deserializeAws_restJson1IdNamespaceAssociationSummary
 */
const de_IdNamespaceAssociationSummary = (output: any, context: __SerdeContext): IdNamespaceAssociationSummary => {
  return take(output, {
    arn: __expectString,
    collaborationArn: __expectString,
    collaborationId: __expectString,
    createTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    id: __expectString,
    inputReferenceConfig: _json,
    inputReferenceProperties: _json,
    membershipArn: __expectString,
    membershipId: __expectString,
    name: __expectString,
    updateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_restJson1IdNamespaceAssociationSummaryList
 */
const de_IdNamespaceAssociationSummaryList = (
  output: any,
  context: __SerdeContext
): IdNamespaceAssociationSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_IdNamespaceAssociationSummary(entry, context);
    });
  return retVal;
};

// de_JoinOperatorsList omitted.

// de_MemberAbilities omitted.

/**
 * deserializeAws_restJson1Membership
 */
const de_Membership = (output: any, context: __SerdeContext): Membership => {
  return take(output, {
    arn: __expectString,
    collaborationArn: __expectString,
    collaborationCreatorAccountId: __expectString,
    collaborationCreatorDisplayName: __expectString,
    collaborationId: __expectString,
    collaborationName: __expectString,
    createTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    defaultResultConfiguration: _json,
    id: __expectString,
    memberAbilities: _json,
    mlMemberAbilities: _json,
    paymentConfiguration: _json,
    queryLogStatus: __expectString,
    status: __expectString,
    updateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

// de_MembershipMLPaymentConfig omitted.

// de_MembershipModelInferencePaymentConfig omitted.

// de_MembershipModelTrainingPaymentConfig omitted.

// de_MembershipPaymentConfiguration omitted.

// de_MembershipProtectedQueryOutputConfiguration omitted.

// de_MembershipProtectedQueryResultConfiguration omitted.

// de_MembershipQueryComputePaymentConfig omitted.

/**
 * deserializeAws_restJson1MembershipSummary
 */
const de_MembershipSummary = (output: any, context: __SerdeContext): MembershipSummary => {
  return take(output, {
    arn: __expectString,
    collaborationArn: __expectString,
    collaborationCreatorAccountId: __expectString,
    collaborationCreatorDisplayName: __expectString,
    collaborationId: __expectString,
    collaborationName: __expectString,
    createTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    id: __expectString,
    memberAbilities: _json,
    mlMemberAbilities: _json,
    paymentConfiguration: _json,
    status: __expectString,
    updateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_restJson1MembershipSummaryList
 */
const de_MembershipSummaryList = (output: any, context: __SerdeContext): MembershipSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_MembershipSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1MemberSummary
 */
const de_MemberSummary = (output: any, context: __SerdeContext): MemberSummary => {
  return take(output, {
    abilities: _json,
    accountId: __expectString,
    createTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    displayName: __expectString,
    membershipArn: __expectString,
    membershipId: __expectString,
    mlAbilities: _json,
    paymentConfiguration: _json,
    status: __expectString,
    updateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_restJson1MemberSummaryList
 */
const de_MemberSummaryList = (output: any, context: __SerdeContext): MemberSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_MemberSummary(entry, context);
    });
  return retVal;
};

// de_MLMemberAbilities omitted.

// de_MLPaymentConfig omitted.

// de_ModelInferencePaymentConfig omitted.

// de_ModelTrainingPaymentConfig omitted.

// de_ParameterMap omitted.

// de_PaymentConfiguration omitted.

// de_PrivacyBudget omitted.

/**
 * deserializeAws_restJson1PrivacyBudgetSummary
 */
const de_PrivacyBudgetSummary = (output: any, context: __SerdeContext): PrivacyBudgetSummary => {
  return take(output, {
    budget: (_: any) => _json(__expectUnion(_)),
    collaborationArn: __expectString,
    collaborationId: __expectString,
    createTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    id: __expectString,
    membershipArn: __expectString,
    membershipId: __expectString,
    privacyBudgetTemplateArn: __expectString,
    privacyBudgetTemplateId: __expectString,
    type: __expectString,
    updateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_restJson1PrivacyBudgetSummaryList
 */
const de_PrivacyBudgetSummaryList = (output: any, context: __SerdeContext): PrivacyBudgetSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_PrivacyBudgetSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1PrivacyBudgetTemplate
 */
const de_PrivacyBudgetTemplate = (output: any, context: __SerdeContext): PrivacyBudgetTemplate => {
  return take(output, {
    arn: __expectString,
    autoRefresh: __expectString,
    collaborationArn: __expectString,
    collaborationId: __expectString,
    createTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    id: __expectString,
    membershipArn: __expectString,
    membershipId: __expectString,
    parameters: (_: any) => _json(__expectUnion(_)),
    privacyBudgetType: __expectString,
    updateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

// de_PrivacyBudgetTemplateParametersOutput omitted.

/**
 * deserializeAws_restJson1PrivacyBudgetTemplateSummary
 */
const de_PrivacyBudgetTemplateSummary = (output: any, context: __SerdeContext): PrivacyBudgetTemplateSummary => {
  return take(output, {
    arn: __expectString,
    collaborationArn: __expectString,
    collaborationId: __expectString,
    createTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    id: __expectString,
    membershipArn: __expectString,
    membershipId: __expectString,
    privacyBudgetType: __expectString,
    updateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_restJson1PrivacyBudgetTemplateSummaryList
 */
const de_PrivacyBudgetTemplateSummaryList = (output: any, context: __SerdeContext): PrivacyBudgetTemplateSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_PrivacyBudgetTemplateSummary(entry, context);
    });
  return retVal;
};

// de_PrivacyImpact omitted.

/**
 * deserializeAws_restJson1ProtectedQuery
 */
const de_ProtectedQuery = (output: any, context: __SerdeContext): ProtectedQuery => {
  return take(output, {
    computeConfiguration: (_: any) => _json(__expectUnion(_)),
    createTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    differentialPrivacy: (_: any) => de_DifferentialPrivacyParameters(_, context),
    error: _json,
    id: __expectString,
    membershipArn: __expectString,
    membershipId: __expectString,
    result: _json,
    resultConfiguration: _json,
    sqlParameters: _json,
    statistics: (_: any) => de_ProtectedQueryStatistics(_, context),
    status: __expectString,
  }) as any;
};

// de_ProtectedQueryError omitted.

// de_ProtectedQueryMemberOutputConfiguration omitted.

// de_ProtectedQueryMemberOutputList omitted.

// de_ProtectedQueryOutput omitted.

// de_ProtectedQueryOutputConfiguration omitted.

// de_ProtectedQueryResult omitted.

// de_ProtectedQueryResultConfiguration omitted.

// de_ProtectedQueryS3Output omitted.

// de_ProtectedQueryS3OutputConfiguration omitted.

// de_ProtectedQuerySingleMemberOutput omitted.

// de_ProtectedQuerySQLParameters omitted.

/**
 * deserializeAws_restJson1ProtectedQueryStatistics
 */
const de_ProtectedQueryStatistics = (output: any, context: __SerdeContext): ProtectedQueryStatistics => {
  return take(output, {
    billedResourceUtilization: (_: any) => de_BilledResourceUtilization(_, context),
    totalDurationInMillis: __expectLong,
  }) as any;
};

/**
 * deserializeAws_restJson1ProtectedQuerySummary
 */
const de_ProtectedQuerySummary = (output: any, context: __SerdeContext): ProtectedQuerySummary => {
  return take(output, {
    createTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    id: __expectString,
    membershipArn: __expectString,
    membershipId: __expectString,
    receiverConfigurations: _json,
    status: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1ProtectedQuerySummaryList
 */
const de_ProtectedQuerySummaryList = (output: any, context: __SerdeContext): ProtectedQuerySummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ProtectedQuerySummary(entry, context);
    });
  return retVal;
};

// de_QueryComputePaymentConfig omitted.

// de_QueryConstraint omitted.

// de_QueryConstraintList omitted.

// de_QueryConstraintRequireOverlap omitted.

// de_QueryTables omitted.

// de_ReceiverAccountIds omitted.

// de_ReceiverConfiguration omitted.

// de_ReceiverConfigurationsList omitted.

// de_ScalarFunctionsList omitted.

/**
 * deserializeAws_restJson1Schema
 */
const de_Schema = (output: any, context: __SerdeContext): Schema => {
  return take(output, {
    analysisMethod: __expectString,
    analysisRuleTypes: _json,
    collaborationArn: __expectString,
    collaborationId: __expectString,
    columns: _json,
    createTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    creatorAccountId: __expectString,
    description: __expectString,
    name: __expectString,
    partitionKeys: _json,
    schemaStatusDetails: _json,
    schemaTypeProperties: (_: any) => _json(__expectUnion(_)),
    type: __expectString,
    updateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_restJson1SchemaAnalysisRuleList
 */
const de_SchemaAnalysisRuleList = (output: any, context: __SerdeContext): AnalysisRule[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AnalysisRule(entry, context);
    });
  return retVal;
};

// de_SchemaConfigurationList omitted.

/**
 * deserializeAws_restJson1SchemaList
 */
const de_SchemaList = (output: any, context: __SerdeContext): Schema[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Schema(entry, context);
    });
  return retVal;
};

// de_SchemaStatusDetail omitted.

// de_SchemaStatusDetailList omitted.

// de_SchemaStatusReason omitted.

// de_SchemaStatusReasonList omitted.

/**
 * deserializeAws_restJson1SchemaSummary
 */
const de_SchemaSummary = (output: any, context: __SerdeContext): SchemaSummary => {
  return take(output, {
    analysisMethod: __expectString,
    analysisRuleTypes: _json,
    collaborationArn: __expectString,
    collaborationId: __expectString,
    createTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    creatorAccountId: __expectString,
    name: __expectString,
    type: __expectString,
    updateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_restJson1SchemaSummaryList
 */
const de_SchemaSummaryList = (output: any, context: __SerdeContext): SchemaSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_SchemaSummary(entry, context);
    });
  return retVal;
};

// de_SchemaTypeProperties omitted.

// de_SnowflakeTableReference omitted.

// de_SnowflakeTableSchema omitted.

// de_SnowflakeTableSchemaList omitted.

// de_SnowflakeTableSchemaV1 omitted.

// de_TableReference omitted.

// de_TagMap omitted.

// de_ValidationExceptionField omitted.

// de_ValidationExceptionFieldList omitted.

// de_WorkerComputeConfiguration omitted.

/**
 * deserializeAws_restJson1Document
 */
const de_Document = (output: any, context: __SerdeContext): __DocumentType => {
  return output;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId:
    output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"],
});

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody: any, context: __SerdeContext): Promise<string> =>
  collectBody(streamBody, context).then((body) => context.utf8Encoder(body));

const _mR = "maxResults";
const _mS = "memberStatus";
const _nT = "nextToken";
const _pBT = "privacyBudgetType";
const _s = "status";
const _sT = "schemaType";
const _tK = "tagKeys";
