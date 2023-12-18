// smithy-typescript generated code
import { awsExpectUnion as __expectUnion } from "@aws-sdk/core";
import { requestBuilder as rb } from "@smithy/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
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
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import {
  BatchGetCollaborationAnalysisTemplateCommandInput,
  BatchGetCollaborationAnalysisTemplateCommandOutput,
} from "../commands/BatchGetCollaborationAnalysisTemplateCommand";
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
  CreateConfiguredTableAssociationCommandInput,
  CreateConfiguredTableAssociationCommandOutput,
} from "../commands/CreateConfiguredTableAssociationCommand";
import {
  CreateConfiguredTableCommandInput,
  CreateConfiguredTableCommandOutput,
} from "../commands/CreateConfiguredTableCommand";
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
  DeleteConfiguredTableAssociationCommandInput,
  DeleteConfiguredTableAssociationCommandOutput,
} from "../commands/DeleteConfiguredTableAssociationCommand";
import {
  DeleteConfiguredTableCommandInput,
  DeleteConfiguredTableCommandOutput,
} from "../commands/DeleteConfiguredTableCommand";
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
  GetConfiguredTableAssociationCommandInput,
  GetConfiguredTableAssociationCommandOutput,
} from "../commands/GetConfiguredTableAssociationCommand";
import { GetConfiguredTableCommandInput, GetConfiguredTableCommandOutput } from "../commands/GetConfiguredTableCommand";
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
  UpdateConfiguredTableAssociationCommandInput,
  UpdateConfiguredTableAssociationCommandOutput,
} from "../commands/UpdateConfiguredTableAssociationCommand";
import {
  UpdateConfiguredTableCommandInput,
  UpdateConfiguredTableCommandOutput,
} from "../commands/UpdateConfiguredTableCommand";
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
  Collaboration,
  CollaborationAnalysisTemplate,
  CollaborationAnalysisTemplateSummary,
  CollaborationConfiguredAudienceModelAssociation,
  CollaborationConfiguredAudienceModelAssociationSummary,
  CollaborationPrivacyBudgetSummary,
  CollaborationPrivacyBudgetTemplate,
  CollaborationPrivacyBudgetTemplateSummary,
  CollaborationSummary,
  ConfiguredAudienceModelAssociation,
  ConfiguredAudienceModelAssociationSummary,
  ConfiguredTable,
  ConfiguredTableAnalysisRule,
  ConfiguredTableAnalysisRulePolicy,
  ConfiguredTableAnalysisRulePolicyV1,
  ConfiguredTableAssociation,
  ConfiguredTableAssociationSummary,
  ConfiguredTableSummary,
  ConflictException,
  DataEncryptionMetadata,
  DifferentialPrivacyColumn,
  DifferentialPrivacyConfiguration,
  DifferentialPrivacyParameters,
  DifferentialPrivacyPreviewParametersInput,
  DifferentialPrivacySensitivityParameters,
  DifferentialPrivacyTemplateParametersInput,
  DifferentialPrivacyTemplateUpdateParameters,
  GlueTableReference,
  InternalServerException,
  JoinOperator,
  MemberAbility,
  Membership,
  MembershipPaymentConfiguration,
  MembershipProtectedQueryOutputConfiguration,
  MembershipProtectedQueryResultConfiguration,
  MembershipQueryComputePaymentConfig,
  MembershipSummary,
  MemberSpecification,
  MemberSummary,
  PaymentConfiguration,
  PreviewPrivacyImpactParametersInput,
  PrivacyBudgetSummary,
  PrivacyBudgetTemplate,
  PrivacyBudgetTemplateParametersInput,
  PrivacyBudgetTemplateSummary,
  PrivacyBudgetTemplateUpdateParameters,
  ProtectedQuery,
  ProtectedQueryOutputConfiguration,
  ProtectedQueryResultConfiguration,
  ProtectedQueryS3OutputConfiguration,
  ProtectedQuerySQLParameters,
  ProtectedQuerySummary,
  QueryComputePaymentConfig,
  ResourceNotFoundException,
  ScalarFunctions,
  Schema,
  SchemaSummary,
  ServiceQuotaExceededException,
  TableReference,
  ThrottlingException,
  ValidationException,
} from "../models/models_0";

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
      creatorDisplayName: [],
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
    [_tK]: [
      __expectNonNull(input.tagKeys, `tagKeys`) != null,
      () => (input[_tK]! || []).map((_entry) => _entry as any),
    ],
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
    return de_BatchGetCollaborationAnalysisTemplateCommandError(output, context);
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
 * deserializeAws_restJson1BatchGetCollaborationAnalysisTemplateCommandError
 */
const de_BatchGetCollaborationAnalysisTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetCollaborationAnalysisTemplateCommandOutput> => {
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
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1BatchGetSchemaCommand
 */
export const de_BatchGetSchemaCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetSchemaCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_BatchGetSchemaCommandError(output, context);
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
 * deserializeAws_restJson1BatchGetSchemaCommandError
 */
const de_BatchGetSchemaCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetSchemaCommandOutput> => {
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
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1CreateAnalysisTemplateCommand
 */
export const de_CreateAnalysisTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAnalysisTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateAnalysisTemplateCommandError(output, context);
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
 * deserializeAws_restJson1CreateAnalysisTemplateCommandError
 */
const de_CreateAnalysisTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAnalysisTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.cleanrooms#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.cleanrooms#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.cleanrooms#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cleanrooms#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.cleanrooms#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.cleanrooms#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.cleanrooms#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1CreateCollaborationCommand
 */
export const de_CreateCollaborationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCollaborationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateCollaborationCommandError(output, context);
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
 * deserializeAws_restJson1CreateCollaborationCommandError
 */
const de_CreateCollaborationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCollaborationCommandOutput> => {
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
    case "ServiceQuotaExceededException":
    case "com.amazonaws.cleanrooms#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.cleanrooms#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.cleanrooms#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1CreateConfiguredAudienceModelAssociationCommand
 */
export const de_CreateConfiguredAudienceModelAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConfiguredAudienceModelAssociationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateConfiguredAudienceModelAssociationCommandError(output, context);
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
 * deserializeAws_restJson1CreateConfiguredAudienceModelAssociationCommandError
 */
const de_CreateConfiguredAudienceModelAssociationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConfiguredAudienceModelAssociationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.cleanrooms#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.cleanrooms#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.cleanrooms#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cleanrooms#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.cleanrooms#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.cleanrooms#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.cleanrooms#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1CreateConfiguredTableCommand
 */
export const de_CreateConfiguredTableCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConfiguredTableCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateConfiguredTableCommandError(output, context);
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
 * deserializeAws_restJson1CreateConfiguredTableCommandError
 */
const de_CreateConfiguredTableCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConfiguredTableCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.cleanrooms#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.cleanrooms#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.cleanrooms#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cleanrooms#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.cleanrooms#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.cleanrooms#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.cleanrooms#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1CreateConfiguredTableAnalysisRuleCommand
 */
export const de_CreateConfiguredTableAnalysisRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConfiguredTableAnalysisRuleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateConfiguredTableAnalysisRuleCommandError(output, context);
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
 * deserializeAws_restJson1CreateConfiguredTableAnalysisRuleCommandError
 */
const de_CreateConfiguredTableAnalysisRuleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConfiguredTableAnalysisRuleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.cleanrooms#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.cleanrooms#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
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
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1CreateConfiguredTableAssociationCommand
 */
export const de_CreateConfiguredTableAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConfiguredTableAssociationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateConfiguredTableAssociationCommandError(output, context);
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
 * deserializeAws_restJson1CreateConfiguredTableAssociationCommandError
 */
const de_CreateConfiguredTableAssociationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConfiguredTableAssociationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.cleanrooms#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.cleanrooms#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.cleanrooms#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cleanrooms#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.cleanrooms#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.cleanrooms#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.cleanrooms#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1CreateMembershipCommand
 */
export const de_CreateMembershipCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMembershipCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateMembershipCommandError(output, context);
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
 * deserializeAws_restJson1CreateMembershipCommandError
 */
const de_CreateMembershipCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMembershipCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.cleanrooms#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.cleanrooms#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.cleanrooms#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cleanrooms#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.cleanrooms#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.cleanrooms#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.cleanrooms#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1CreatePrivacyBudgetTemplateCommand
 */
export const de_CreatePrivacyBudgetTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePrivacyBudgetTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreatePrivacyBudgetTemplateCommandError(output, context);
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
 * deserializeAws_restJson1CreatePrivacyBudgetTemplateCommandError
 */
const de_CreatePrivacyBudgetTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePrivacyBudgetTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.cleanrooms#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.cleanrooms#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
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
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeleteAnalysisTemplateCommand
 */
export const de_DeleteAnalysisTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAnalysisTemplateCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteAnalysisTemplateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteAnalysisTemplateCommandError
 */
const de_DeleteAnalysisTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAnalysisTemplateCommandOutput> => {
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
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeleteCollaborationCommand
 */
export const de_DeleteCollaborationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCollaborationCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteCollaborationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteCollaborationCommandError
 */
const de_DeleteCollaborationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCollaborationCommandOutput> => {
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
    case "ThrottlingException":
    case "com.amazonaws.cleanrooms#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.cleanrooms#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeleteConfiguredAudienceModelAssociationCommand
 */
export const de_DeleteConfiguredAudienceModelAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConfiguredAudienceModelAssociationCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteConfiguredAudienceModelAssociationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteConfiguredAudienceModelAssociationCommandError
 */
const de_DeleteConfiguredAudienceModelAssociationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConfiguredAudienceModelAssociationCommandOutput> => {
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
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeleteConfiguredTableCommand
 */
export const de_DeleteConfiguredTableCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConfiguredTableCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteConfiguredTableCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteConfiguredTableCommandError
 */
const de_DeleteConfiguredTableCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConfiguredTableCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.cleanrooms#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.cleanrooms#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
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
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeleteConfiguredTableAnalysisRuleCommand
 */
export const de_DeleteConfiguredTableAnalysisRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConfiguredTableAnalysisRuleCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteConfiguredTableAnalysisRuleCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteConfiguredTableAnalysisRuleCommandError
 */
const de_DeleteConfiguredTableAnalysisRuleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConfiguredTableAnalysisRuleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.cleanrooms#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.cleanrooms#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
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
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeleteConfiguredTableAssociationCommand
 */
export const de_DeleteConfiguredTableAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConfiguredTableAssociationCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteConfiguredTableAssociationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteConfiguredTableAssociationCommandError
 */
const de_DeleteConfiguredTableAssociationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConfiguredTableAssociationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.cleanrooms#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.cleanrooms#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
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
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeleteMemberCommand
 */
export const de_DeleteMemberCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMemberCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteMemberCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteMemberCommandError
 */
const de_DeleteMemberCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMemberCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.cleanrooms#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.cleanrooms#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
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
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeleteMembershipCommand
 */
export const de_DeleteMembershipCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMembershipCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteMembershipCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteMembershipCommandError
 */
const de_DeleteMembershipCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMembershipCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.cleanrooms#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.cleanrooms#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
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
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeletePrivacyBudgetTemplateCommand
 */
export const de_DeletePrivacyBudgetTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePrivacyBudgetTemplateCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeletePrivacyBudgetTemplateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeletePrivacyBudgetTemplateCommandError
 */
const de_DeletePrivacyBudgetTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePrivacyBudgetTemplateCommandOutput> => {
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
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetAnalysisTemplateCommand
 */
export const de_GetAnalysisTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAnalysisTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetAnalysisTemplateCommandError(output, context);
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
 * deserializeAws_restJson1GetAnalysisTemplateCommandError
 */
const de_GetAnalysisTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAnalysisTemplateCommandOutput> => {
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
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetCollaborationCommand
 */
export const de_GetCollaborationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCollaborationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetCollaborationCommandError(output, context);
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
 * deserializeAws_restJson1GetCollaborationCommandError
 */
const de_GetCollaborationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCollaborationCommandOutput> => {
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
    case "ThrottlingException":
    case "com.amazonaws.cleanrooms#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.cleanrooms#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetCollaborationAnalysisTemplateCommand
 */
export const de_GetCollaborationAnalysisTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCollaborationAnalysisTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetCollaborationAnalysisTemplateCommandError(output, context);
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
 * deserializeAws_restJson1GetCollaborationAnalysisTemplateCommandError
 */
const de_GetCollaborationAnalysisTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCollaborationAnalysisTemplateCommandOutput> => {
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
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetCollaborationConfiguredAudienceModelAssociationCommand
 */
export const de_GetCollaborationConfiguredAudienceModelAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCollaborationConfiguredAudienceModelAssociationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetCollaborationConfiguredAudienceModelAssociationCommandError(output, context);
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
 * deserializeAws_restJson1GetCollaborationConfiguredAudienceModelAssociationCommandError
 */
const de_GetCollaborationConfiguredAudienceModelAssociationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCollaborationConfiguredAudienceModelAssociationCommandOutput> => {
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
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetCollaborationPrivacyBudgetTemplateCommand
 */
export const de_GetCollaborationPrivacyBudgetTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCollaborationPrivacyBudgetTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetCollaborationPrivacyBudgetTemplateCommandError(output, context);
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
 * deserializeAws_restJson1GetCollaborationPrivacyBudgetTemplateCommandError
 */
const de_GetCollaborationPrivacyBudgetTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCollaborationPrivacyBudgetTemplateCommandOutput> => {
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
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetConfiguredAudienceModelAssociationCommand
 */
export const de_GetConfiguredAudienceModelAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConfiguredAudienceModelAssociationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetConfiguredAudienceModelAssociationCommandError(output, context);
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
 * deserializeAws_restJson1GetConfiguredAudienceModelAssociationCommandError
 */
const de_GetConfiguredAudienceModelAssociationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConfiguredAudienceModelAssociationCommandOutput> => {
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
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetConfiguredTableCommand
 */
export const de_GetConfiguredTableCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConfiguredTableCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetConfiguredTableCommandError(output, context);
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
 * deserializeAws_restJson1GetConfiguredTableCommandError
 */
const de_GetConfiguredTableCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConfiguredTableCommandOutput> => {
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
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetConfiguredTableAnalysisRuleCommand
 */
export const de_GetConfiguredTableAnalysisRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConfiguredTableAnalysisRuleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetConfiguredTableAnalysisRuleCommandError(output, context);
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
 * deserializeAws_restJson1GetConfiguredTableAnalysisRuleCommandError
 */
const de_GetConfiguredTableAnalysisRuleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConfiguredTableAnalysisRuleCommandOutput> => {
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
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetConfiguredTableAssociationCommand
 */
export const de_GetConfiguredTableAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConfiguredTableAssociationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetConfiguredTableAssociationCommandError(output, context);
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
 * deserializeAws_restJson1GetConfiguredTableAssociationCommandError
 */
const de_GetConfiguredTableAssociationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConfiguredTableAssociationCommandOutput> => {
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
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetMembershipCommand
 */
export const de_GetMembershipCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMembershipCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetMembershipCommandError(output, context);
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
 * deserializeAws_restJson1GetMembershipCommandError
 */
const de_GetMembershipCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMembershipCommandOutput> => {
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
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetPrivacyBudgetTemplateCommand
 */
export const de_GetPrivacyBudgetTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPrivacyBudgetTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetPrivacyBudgetTemplateCommandError(output, context);
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
 * deserializeAws_restJson1GetPrivacyBudgetTemplateCommandError
 */
const de_GetPrivacyBudgetTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPrivacyBudgetTemplateCommandOutput> => {
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
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetProtectedQueryCommand
 */
export const de_GetProtectedQueryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetProtectedQueryCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetProtectedQueryCommandError(output, context);
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
 * deserializeAws_restJson1GetProtectedQueryCommandError
 */
const de_GetProtectedQueryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetProtectedQueryCommandOutput> => {
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
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetSchemaCommand
 */
export const de_GetSchemaCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSchemaCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetSchemaCommandError(output, context);
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
 * deserializeAws_restJson1GetSchemaCommandError
 */
const de_GetSchemaCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSchemaCommandOutput> => {
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
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetSchemaAnalysisRuleCommand
 */
export const de_GetSchemaAnalysisRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSchemaAnalysisRuleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetSchemaAnalysisRuleCommandError(output, context);
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
 * deserializeAws_restJson1GetSchemaAnalysisRuleCommandError
 */
const de_GetSchemaAnalysisRuleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSchemaAnalysisRuleCommandOutput> => {
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
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListAnalysisTemplatesCommand
 */
export const de_ListAnalysisTemplatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAnalysisTemplatesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListAnalysisTemplatesCommandError(output, context);
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
 * deserializeAws_restJson1ListAnalysisTemplatesCommandError
 */
const de_ListAnalysisTemplatesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAnalysisTemplatesCommandOutput> => {
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
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListCollaborationAnalysisTemplatesCommand
 */
export const de_ListCollaborationAnalysisTemplatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCollaborationAnalysisTemplatesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListCollaborationAnalysisTemplatesCommandError(output, context);
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
 * deserializeAws_restJson1ListCollaborationAnalysisTemplatesCommandError
 */
const de_ListCollaborationAnalysisTemplatesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCollaborationAnalysisTemplatesCommandOutput> => {
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
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListCollaborationConfiguredAudienceModelAssociationsCommand
 */
export const de_ListCollaborationConfiguredAudienceModelAssociationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCollaborationConfiguredAudienceModelAssociationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListCollaborationConfiguredAudienceModelAssociationsCommandError(output, context);
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
 * deserializeAws_restJson1ListCollaborationConfiguredAudienceModelAssociationsCommandError
 */
const de_ListCollaborationConfiguredAudienceModelAssociationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCollaborationConfiguredAudienceModelAssociationsCommandOutput> => {
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
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListCollaborationPrivacyBudgetsCommand
 */
export const de_ListCollaborationPrivacyBudgetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCollaborationPrivacyBudgetsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListCollaborationPrivacyBudgetsCommandError(output, context);
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
 * deserializeAws_restJson1ListCollaborationPrivacyBudgetsCommandError
 */
const de_ListCollaborationPrivacyBudgetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCollaborationPrivacyBudgetsCommandOutput> => {
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
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListCollaborationPrivacyBudgetTemplatesCommand
 */
export const de_ListCollaborationPrivacyBudgetTemplatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCollaborationPrivacyBudgetTemplatesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListCollaborationPrivacyBudgetTemplatesCommandError(output, context);
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
 * deserializeAws_restJson1ListCollaborationPrivacyBudgetTemplatesCommandError
 */
const de_ListCollaborationPrivacyBudgetTemplatesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCollaborationPrivacyBudgetTemplatesCommandOutput> => {
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
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListCollaborationsCommand
 */
export const de_ListCollaborationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCollaborationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListCollaborationsCommandError(output, context);
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
 * deserializeAws_restJson1ListCollaborationsCommandError
 */
const de_ListCollaborationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCollaborationsCommandOutput> => {
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
    case "ThrottlingException":
    case "com.amazonaws.cleanrooms#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.cleanrooms#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListConfiguredAudienceModelAssociationsCommand
 */
export const de_ListConfiguredAudienceModelAssociationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConfiguredAudienceModelAssociationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListConfiguredAudienceModelAssociationsCommandError(output, context);
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
 * deserializeAws_restJson1ListConfiguredAudienceModelAssociationsCommandError
 */
const de_ListConfiguredAudienceModelAssociationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConfiguredAudienceModelAssociationsCommandOutput> => {
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
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListConfiguredTableAssociationsCommand
 */
export const de_ListConfiguredTableAssociationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConfiguredTableAssociationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListConfiguredTableAssociationsCommandError(output, context);
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
 * deserializeAws_restJson1ListConfiguredTableAssociationsCommandError
 */
const de_ListConfiguredTableAssociationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConfiguredTableAssociationsCommandOutput> => {
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
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListConfiguredTablesCommand
 */
export const de_ListConfiguredTablesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConfiguredTablesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListConfiguredTablesCommandError(output, context);
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
 * deserializeAws_restJson1ListConfiguredTablesCommandError
 */
const de_ListConfiguredTablesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConfiguredTablesCommandOutput> => {
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
    case "ThrottlingException":
    case "com.amazonaws.cleanrooms#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.cleanrooms#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListMembersCommand
 */
export const de_ListMembersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMembersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListMembersCommandError(output, context);
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
 * deserializeAws_restJson1ListMembersCommandError
 */
const de_ListMembersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMembersCommandOutput> => {
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
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListMembershipsCommand
 */
export const de_ListMembershipsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMembershipsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListMembershipsCommandError(output, context);
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
 * deserializeAws_restJson1ListMembershipsCommandError
 */
const de_ListMembershipsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMembershipsCommandOutput> => {
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
    case "ThrottlingException":
    case "com.amazonaws.cleanrooms#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.cleanrooms#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListPrivacyBudgetsCommand
 */
export const de_ListPrivacyBudgetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPrivacyBudgetsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListPrivacyBudgetsCommandError(output, context);
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
 * deserializeAws_restJson1ListPrivacyBudgetsCommandError
 */
const de_ListPrivacyBudgetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPrivacyBudgetsCommandOutput> => {
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
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListPrivacyBudgetTemplatesCommand
 */
export const de_ListPrivacyBudgetTemplatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPrivacyBudgetTemplatesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListPrivacyBudgetTemplatesCommandError(output, context);
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
 * deserializeAws_restJson1ListPrivacyBudgetTemplatesCommandError
 */
const de_ListPrivacyBudgetTemplatesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPrivacyBudgetTemplatesCommandOutput> => {
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
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListProtectedQueriesCommand
 */
export const de_ListProtectedQueriesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProtectedQueriesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListProtectedQueriesCommandError(output, context);
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
 * deserializeAws_restJson1ListProtectedQueriesCommandError
 */
const de_ListProtectedQueriesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProtectedQueriesCommandOutput> => {
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
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListSchemasCommand
 */
export const de_ListSchemasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSchemasCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListSchemasCommandError(output, context);
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
 * deserializeAws_restJson1ListSchemasCommandError
 */
const de_ListSchemasCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSchemasCommandOutput> => {
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
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListTagsForResourceCommand
 */
export const de_ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListTagsForResourceCommandError(output, context);
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
 * deserializeAws_restJson1ListTagsForResourceCommandError
 */
const de_ListTagsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.cleanrooms#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.cleanrooms#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1PreviewPrivacyImpactCommand
 */
export const de_PreviewPrivacyImpactCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PreviewPrivacyImpactCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_PreviewPrivacyImpactCommandError(output, context);
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
 * deserializeAws_restJson1PreviewPrivacyImpactCommandError
 */
const de_PreviewPrivacyImpactCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PreviewPrivacyImpactCommandOutput> => {
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
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1StartProtectedQueryCommand
 */
export const de_StartProtectedQueryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartProtectedQueryCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_StartProtectedQueryCommandError(output, context);
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
 * deserializeAws_restJson1StartProtectedQueryCommandError
 */
const de_StartProtectedQueryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartProtectedQueryCommandOutput> => {
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
    case "ServiceQuotaExceededException":
    case "com.amazonaws.cleanrooms#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.cleanrooms#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.cleanrooms#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1TagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_TagResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1TagResourceCommandError
 */
const de_TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.cleanrooms#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.cleanrooms#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UntagResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UntagResourceCommandError
 */
const de_UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.cleanrooms#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.cleanrooms#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UpdateAnalysisTemplateCommand
 */
export const de_UpdateAnalysisTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAnalysisTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateAnalysisTemplateCommandError(output, context);
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
 * deserializeAws_restJson1UpdateAnalysisTemplateCommandError
 */
const de_UpdateAnalysisTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAnalysisTemplateCommandOutput> => {
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
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UpdateCollaborationCommand
 */
export const de_UpdateCollaborationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCollaborationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateCollaborationCommandError(output, context);
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
 * deserializeAws_restJson1UpdateCollaborationCommandError
 */
const de_UpdateCollaborationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCollaborationCommandOutput> => {
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
    case "ThrottlingException":
    case "com.amazonaws.cleanrooms#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.cleanrooms#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UpdateConfiguredAudienceModelAssociationCommand
 */
export const de_UpdateConfiguredAudienceModelAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConfiguredAudienceModelAssociationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateConfiguredAudienceModelAssociationCommandError(output, context);
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
 * deserializeAws_restJson1UpdateConfiguredAudienceModelAssociationCommandError
 */
const de_UpdateConfiguredAudienceModelAssociationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConfiguredAudienceModelAssociationCommandOutput> => {
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
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UpdateConfiguredTableCommand
 */
export const de_UpdateConfiguredTableCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConfiguredTableCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateConfiguredTableCommandError(output, context);
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
 * deserializeAws_restJson1UpdateConfiguredTableCommandError
 */
const de_UpdateConfiguredTableCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConfiguredTableCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.cleanrooms#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.cleanrooms#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
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
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UpdateConfiguredTableAnalysisRuleCommand
 */
export const de_UpdateConfiguredTableAnalysisRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConfiguredTableAnalysisRuleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateConfiguredTableAnalysisRuleCommandError(output, context);
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
 * deserializeAws_restJson1UpdateConfiguredTableAnalysisRuleCommandError
 */
const de_UpdateConfiguredTableAnalysisRuleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConfiguredTableAnalysisRuleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.cleanrooms#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.cleanrooms#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
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
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UpdateConfiguredTableAssociationCommand
 */
export const de_UpdateConfiguredTableAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConfiguredTableAssociationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateConfiguredTableAssociationCommandError(output, context);
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
 * deserializeAws_restJson1UpdateConfiguredTableAssociationCommandError
 */
const de_UpdateConfiguredTableAssociationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConfiguredTableAssociationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.cleanrooms#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.cleanrooms#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
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
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UpdateMembershipCommand
 */
export const de_UpdateMembershipCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMembershipCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateMembershipCommandError(output, context);
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
 * deserializeAws_restJson1UpdateMembershipCommandError
 */
const de_UpdateMembershipCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMembershipCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.cleanrooms#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.cleanrooms#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
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
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UpdatePrivacyBudgetTemplateCommand
 */
export const de_UpdatePrivacyBudgetTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePrivacyBudgetTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdatePrivacyBudgetTemplateCommandError(output, context);
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
 * deserializeAws_restJson1UpdatePrivacyBudgetTemplateCommandError
 */
const de_UpdatePrivacyBudgetTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePrivacyBudgetTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.cleanrooms#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.cleanrooms#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
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
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UpdateProtectedQueryCommand
 */
export const de_UpdateProtectedQueryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateProtectedQueryCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateProtectedQueryCommandError(output, context);
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
 * deserializeAws_restJson1UpdateProtectedQueryCommandError
 */
const de_UpdateProtectedQueryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateProtectedQueryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.cleanrooms#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.cleanrooms#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
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
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
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

// se_AllowedAnalysesList omitted.

// se_AllowedAnalysisProviderList omitted.

// se_AllowedColumnList omitted.

// se_AnalysisParameter omitted.

// se_AnalysisParameterList omitted.

// se_AnalysisRuleAggregation omitted.

// se_AnalysisRuleColumnList omitted.

// se_AnalysisRuleColumnNameList omitted.

// se_AnalysisRuleCustom omitted.

// se_AnalysisRuleList omitted.

// se_AnalysisSource omitted.

// se_AnalysisTemplateArnList omitted.

// se_ConfiguredTableAnalysisRulePolicy omitted.

// se_ConfiguredTableAnalysisRulePolicyV1 omitted.

// se_DataEncryptionMetadata omitted.

// se_DifferentialPrivacyColumn omitted.

// se_DifferentialPrivacyColumnList omitted.

// se_DifferentialPrivacyConfiguration omitted.

// se_DifferentialPrivacyPreviewParametersInput omitted.

// se_DifferentialPrivacyTemplateParametersInput omitted.

// se_DifferentialPrivacyTemplateUpdateParameters omitted.

// se_GlueTableReference omitted.

// se_JoinOperatorsList omitted.

// se_MemberAbilities omitted.

// se_MemberList omitted.

// se_MembershipPaymentConfiguration omitted.

// se_MembershipProtectedQueryOutputConfiguration omitted.

// se_MembershipProtectedQueryResultConfiguration omitted.

// se_MembershipQueryComputePaymentConfig omitted.

// se_MemberSpecification omitted.

// se_ParameterMap omitted.

// se_PaymentConfiguration omitted.

// se_PreviewPrivacyImpactParametersInput omitted.

// se_PrivacyBudgetTemplateParametersInput omitted.

// se_PrivacyBudgetTemplateUpdateParameters omitted.

// se_ProtectedQueryOutputConfiguration omitted.

// se_ProtectedQueryResultConfiguration omitted.

// se_ProtectedQueryS3OutputConfiguration omitted.

// se_ProtectedQuerySQLParameters omitted.

// se_QueryComputePaymentConfig omitted.

// se_ScalarFunctionsList omitted.

// se_TableAliasList omitted.

// se_TableReference omitted.

// se_TagMap omitted.

// de_AggregateColumn omitted.

// de_AggregateColumnList omitted.

// de_AggregationConstraint omitted.

// de_AggregationConstraints omitted.

// de_AllowedAnalysesList omitted.

// de_AllowedAnalysisProviderList omitted.

// de_AllowedColumnList omitted.

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

// de_BatchGetCollaborationAnalysisTemplateError omitted.

// de_BatchGetCollaborationAnalysisTemplateErrorList omitted.

// de_BatchGetSchemaError omitted.

// de_BatchGetSchemaErrorList omitted.

/**
 * deserializeAws_restJson1Collaboration
 */
const de_Collaboration = (output: any, context: __SerdeContext): Collaboration => {
  return take(output, {
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

// de_GlueTableReference omitted.

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
    paymentConfiguration: _json,
    queryLogStatus: __expectString,
    status: __expectString,
    updateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

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
    createTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    differentialPrivacy: (_: any) => de_DifferentialPrivacyParameters(_, context),
    error: _json,
    id: __expectString,
    membershipArn: __expectString,
    membershipId: __expectString,
    result: _json,
    resultConfiguration: _json,
    sqlParameters: _json,
    statistics: _json,
    status: __expectString,
  }) as any;
};

// de_ProtectedQueryError omitted.

// de_ProtectedQueryMemberOutputList omitted.

// de_ProtectedQueryOutput omitted.

// de_ProtectedQueryOutputConfiguration omitted.

// de_ProtectedQueryResult omitted.

// de_ProtectedQueryResultConfiguration omitted.

// de_ProtectedQueryS3Output omitted.

// de_ProtectedQueryS3OutputConfiguration omitted.

// de_ProtectedQuerySingleMemberOutput omitted.

// de_ProtectedQuerySQLParameters omitted.

// de_ProtectedQueryStatistics omitted.

/**
 * deserializeAws_restJson1ProtectedQuerySummary
 */
const de_ProtectedQuerySummary = (output: any, context: __SerdeContext): ProtectedQuerySummary => {
  return take(output, {
    createTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    id: __expectString,
    membershipArn: __expectString,
    membershipId: __expectString,
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

// de_QueryTables omitted.

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
    type: __expectString,
    updateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

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

// de_TableReference omitted.

// de_TagMap omitted.

// de_ValidationExceptionField omitted.

// de_ValidationExceptionFieldList omitted.

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

const isSerializableHeaderValue = (value: any): boolean =>
  value !== undefined &&
  value !== null &&
  value !== "" &&
  (!Object.getOwnPropertyNames(value).includes("length") || value.length != 0) &&
  (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);

const _mR = "maxResults";
const _mS = "memberStatus";
const _nT = "nextToken";
const _pBT = "privacyBudgetType";
const _s = "status";
const _sT = "schemaType";
const _tK = "tagKeys";

const parseBody = (streamBody: any, context: __SerdeContext): any =>
  collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });

const parseErrorBody = async (errorBody: any, context: __SerdeContext) => {
  const value = await parseBody(errorBody, context);
  value.message = value.message ?? value.Message;
  return value;
};

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string | undefined => {
  const findKey = (object: any, key: string) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());

  const sanitizeErrorCode = (rawValue: string | number): string => {
    let cleanValue = rawValue;
    if (typeof cleanValue === "number") {
      cleanValue = cleanValue.toString();
    }
    if (cleanValue.indexOf(",") >= 0) {
      cleanValue = cleanValue.split(",")[0];
    }
    if (cleanValue.indexOf(":") >= 0) {
      cleanValue = cleanValue.split(":")[0];
    }
    if (cleanValue.indexOf("#") >= 0) {
      cleanValue = cleanValue.split("#")[1];
    }
    return cleanValue;
  };

  const headerKey = findKey(output.headers, "x-amzn-errortype");
  if (headerKey !== undefined) {
    return sanitizeErrorCode(output.headers[headerKey]);
  }

  if (data.code !== undefined) {
    return sanitizeErrorCode(data.code);
  }

  if (data["__type"] !== undefined) {
    return sanitizeErrorCode(data["__type"]);
  }
};
