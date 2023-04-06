// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  map as __map,
  parseEpochTimestamp as __parseEpochTimestamp,
  resolvedPath as __resolvedPath,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  AssociateAssessmentReportEvidenceFolderCommandInput,
  AssociateAssessmentReportEvidenceFolderCommandOutput,
} from "../commands/AssociateAssessmentReportEvidenceFolderCommand";
import {
  BatchAssociateAssessmentReportEvidenceCommandInput,
  BatchAssociateAssessmentReportEvidenceCommandOutput,
} from "../commands/BatchAssociateAssessmentReportEvidenceCommand";
import {
  BatchCreateDelegationByAssessmentCommandInput,
  BatchCreateDelegationByAssessmentCommandOutput,
} from "../commands/BatchCreateDelegationByAssessmentCommand";
import {
  BatchDeleteDelegationByAssessmentCommandInput,
  BatchDeleteDelegationByAssessmentCommandOutput,
} from "../commands/BatchDeleteDelegationByAssessmentCommand";
import {
  BatchDisassociateAssessmentReportEvidenceCommandInput,
  BatchDisassociateAssessmentReportEvidenceCommandOutput,
} from "../commands/BatchDisassociateAssessmentReportEvidenceCommand";
import {
  BatchImportEvidenceToAssessmentControlCommandInput,
  BatchImportEvidenceToAssessmentControlCommandOutput,
} from "../commands/BatchImportEvidenceToAssessmentControlCommand";
import { CreateAssessmentCommandInput, CreateAssessmentCommandOutput } from "../commands/CreateAssessmentCommand";
import {
  CreateAssessmentFrameworkCommandInput,
  CreateAssessmentFrameworkCommandOutput,
} from "../commands/CreateAssessmentFrameworkCommand";
import {
  CreateAssessmentReportCommandInput,
  CreateAssessmentReportCommandOutput,
} from "../commands/CreateAssessmentReportCommand";
import { CreateControlCommandInput, CreateControlCommandOutput } from "../commands/CreateControlCommand";
import { DeleteAssessmentCommandInput, DeleteAssessmentCommandOutput } from "../commands/DeleteAssessmentCommand";
import {
  DeleteAssessmentFrameworkCommandInput,
  DeleteAssessmentFrameworkCommandOutput,
} from "../commands/DeleteAssessmentFrameworkCommand";
import {
  DeleteAssessmentFrameworkShareCommandInput,
  DeleteAssessmentFrameworkShareCommandOutput,
} from "../commands/DeleteAssessmentFrameworkShareCommand";
import {
  DeleteAssessmentReportCommandInput,
  DeleteAssessmentReportCommandOutput,
} from "../commands/DeleteAssessmentReportCommand";
import { DeleteControlCommandInput, DeleteControlCommandOutput } from "../commands/DeleteControlCommand";
import { DeregisterAccountCommandInput, DeregisterAccountCommandOutput } from "../commands/DeregisterAccountCommand";
import {
  DeregisterOrganizationAdminAccountCommandInput,
  DeregisterOrganizationAdminAccountCommandOutput,
} from "../commands/DeregisterOrganizationAdminAccountCommand";
import {
  DisassociateAssessmentReportEvidenceFolderCommandInput,
  DisassociateAssessmentReportEvidenceFolderCommandOutput,
} from "../commands/DisassociateAssessmentReportEvidenceFolderCommand";
import { GetAccountStatusCommandInput, GetAccountStatusCommandOutput } from "../commands/GetAccountStatusCommand";
import { GetAssessmentCommandInput, GetAssessmentCommandOutput } from "../commands/GetAssessmentCommand";
import {
  GetAssessmentFrameworkCommandInput,
  GetAssessmentFrameworkCommandOutput,
} from "../commands/GetAssessmentFrameworkCommand";
import {
  GetAssessmentReportUrlCommandInput,
  GetAssessmentReportUrlCommandOutput,
} from "../commands/GetAssessmentReportUrlCommand";
import { GetChangeLogsCommandInput, GetChangeLogsCommandOutput } from "../commands/GetChangeLogsCommand";
import { GetControlCommandInput, GetControlCommandOutput } from "../commands/GetControlCommand";
import { GetDelegationsCommandInput, GetDelegationsCommandOutput } from "../commands/GetDelegationsCommand";
import {
  GetEvidenceByEvidenceFolderCommandInput,
  GetEvidenceByEvidenceFolderCommandOutput,
} from "../commands/GetEvidenceByEvidenceFolderCommand";
import { GetEvidenceCommandInput, GetEvidenceCommandOutput } from "../commands/GetEvidenceCommand";
import { GetEvidenceFolderCommandInput, GetEvidenceFolderCommandOutput } from "../commands/GetEvidenceFolderCommand";
import {
  GetEvidenceFoldersByAssessmentCommandInput,
  GetEvidenceFoldersByAssessmentCommandOutput,
} from "../commands/GetEvidenceFoldersByAssessmentCommand";
import {
  GetEvidenceFoldersByAssessmentControlCommandInput,
  GetEvidenceFoldersByAssessmentControlCommandOutput,
} from "../commands/GetEvidenceFoldersByAssessmentControlCommand";
import {
  GetInsightsByAssessmentCommandInput,
  GetInsightsByAssessmentCommandOutput,
} from "../commands/GetInsightsByAssessmentCommand";
import { GetInsightsCommandInput, GetInsightsCommandOutput } from "../commands/GetInsightsCommand";
import {
  GetOrganizationAdminAccountCommandInput,
  GetOrganizationAdminAccountCommandOutput,
} from "../commands/GetOrganizationAdminAccountCommand";
import { GetServicesInScopeCommandInput, GetServicesInScopeCommandOutput } from "../commands/GetServicesInScopeCommand";
import { GetSettingsCommandInput, GetSettingsCommandOutput } from "../commands/GetSettingsCommand";
import {
  ListAssessmentControlInsightsByControlDomainCommandInput,
  ListAssessmentControlInsightsByControlDomainCommandOutput,
} from "../commands/ListAssessmentControlInsightsByControlDomainCommand";
import {
  ListAssessmentFrameworksCommandInput,
  ListAssessmentFrameworksCommandOutput,
} from "../commands/ListAssessmentFrameworksCommand";
import {
  ListAssessmentFrameworkShareRequestsCommandInput,
  ListAssessmentFrameworkShareRequestsCommandOutput,
} from "../commands/ListAssessmentFrameworkShareRequestsCommand";
import {
  ListAssessmentReportsCommandInput,
  ListAssessmentReportsCommandOutput,
} from "../commands/ListAssessmentReportsCommand";
import { ListAssessmentsCommandInput, ListAssessmentsCommandOutput } from "../commands/ListAssessmentsCommand";
import {
  ListControlDomainInsightsByAssessmentCommandInput,
  ListControlDomainInsightsByAssessmentCommandOutput,
} from "../commands/ListControlDomainInsightsByAssessmentCommand";
import {
  ListControlDomainInsightsCommandInput,
  ListControlDomainInsightsCommandOutput,
} from "../commands/ListControlDomainInsightsCommand";
import {
  ListControlInsightsByControlDomainCommandInput,
  ListControlInsightsByControlDomainCommandOutput,
} from "../commands/ListControlInsightsByControlDomainCommand";
import { ListControlsCommandInput, ListControlsCommandOutput } from "../commands/ListControlsCommand";
import {
  ListKeywordsForDataSourceCommandInput,
  ListKeywordsForDataSourceCommandOutput,
} from "../commands/ListKeywordsForDataSourceCommand";
import { ListNotificationsCommandInput, ListNotificationsCommandOutput } from "../commands/ListNotificationsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { RegisterAccountCommandInput, RegisterAccountCommandOutput } from "../commands/RegisterAccountCommand";
import {
  RegisterOrganizationAdminAccountCommandInput,
  RegisterOrganizationAdminAccountCommandOutput,
} from "../commands/RegisterOrganizationAdminAccountCommand";
import {
  StartAssessmentFrameworkShareCommandInput,
  StartAssessmentFrameworkShareCommandOutput,
} from "../commands/StartAssessmentFrameworkShareCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateAssessmentCommandInput, UpdateAssessmentCommandOutput } from "../commands/UpdateAssessmentCommand";
import {
  UpdateAssessmentControlCommandInput,
  UpdateAssessmentControlCommandOutput,
} from "../commands/UpdateAssessmentControlCommand";
import {
  UpdateAssessmentControlSetStatusCommandInput,
  UpdateAssessmentControlSetStatusCommandOutput,
} from "../commands/UpdateAssessmentControlSetStatusCommand";
import {
  UpdateAssessmentFrameworkCommandInput,
  UpdateAssessmentFrameworkCommandOutput,
} from "../commands/UpdateAssessmentFrameworkCommand";
import {
  UpdateAssessmentFrameworkShareCommandInput,
  UpdateAssessmentFrameworkShareCommandOutput,
} from "../commands/UpdateAssessmentFrameworkShareCommand";
import {
  UpdateAssessmentStatusCommandInput,
  UpdateAssessmentStatusCommandOutput,
} from "../commands/UpdateAssessmentStatusCommand";
import { UpdateControlCommandInput, UpdateControlCommandOutput } from "../commands/UpdateControlCommand";
import { UpdateSettingsCommandInput, UpdateSettingsCommandOutput } from "../commands/UpdateSettingsCommand";
import {
  ValidateAssessmentReportIntegrityCommandInput,
  ValidateAssessmentReportIntegrityCommandOutput,
} from "../commands/ValidateAssessmentReportIntegrityCommand";
import { AuditManagerServiceException as __BaseException } from "../models/AuditManagerServiceException";
import {
  AccessDeniedException,
  Assessment,
  AssessmentControl,
  AssessmentControlSet,
  AssessmentEvidenceFolder,
  AssessmentFramework,
  AssessmentFrameworkMetadata,
  AssessmentFrameworkShareRequest,
  AssessmentMetadata,
  AssessmentMetadataItem,
  AssessmentReport,
  AssessmentReportEvidenceError,
  AssessmentReportMetadata,
  AssessmentReportsDestination,
  AWSAccount,
  AWSService,
  BatchCreateDelegationByAssessmentError,
  BatchDeleteDelegationByAssessmentError,
  BatchImportEvidenceToAssessmentControlError,
  ChangeLog,
  Control,
  ControlComment,
  ControlDomainInsights,
  ControlInsightsMetadataByAssessmentItem,
  ControlInsightsMetadataItem,
  ControlMappingSource,
  ControlMetadata,
  ControlSet,
  CreateAssessmentFrameworkControl,
  CreateAssessmentFrameworkControlSet,
  CreateControlMappingSource,
  CreateDelegationRequest,
  Delegation,
  DelegationMetadata,
  DeregistrationPolicy,
  Evidence,
  EvidenceFinderEnablement,
  EvidenceInsights,
  Framework,
  FrameworkMetadata,
  Insights,
  InsightsByAssessment,
  InternalServerException,
  ManualEvidence,
  Notification,
  Resource,
  ResourceNotFoundException,
  Role,
  Scope,
  ServiceMetadata,
  ServiceQuotaExceededException,
  Settings,
  SourceKeyword,
  ThrottlingException,
  UpdateAssessmentFrameworkControlSet,
  URL,
  ValidationException,
  ValidationExceptionField,
} from "../models/models_0";

/**
 * serializeAws_restJson1AssociateAssessmentReportEvidenceFolderCommand
 */
export const se_AssociateAssessmentReportEvidenceFolderCommand = async (
  input: AssociateAssessmentReportEvidenceFolderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/assessments/{assessmentId}/associateToAssessmentReport";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "assessmentId",
    () => input.assessmentId!,
    "{assessmentId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.evidenceFolderId != null && { evidenceFolderId: input.evidenceFolderId }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1BatchAssociateAssessmentReportEvidenceCommand
 */
export const se_BatchAssociateAssessmentReportEvidenceCommand = async (
  input: BatchAssociateAssessmentReportEvidenceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/assessments/{assessmentId}/batchAssociateToAssessmentReport";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "assessmentId",
    () => input.assessmentId!,
    "{assessmentId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.evidenceFolderId != null && { evidenceFolderId: input.evidenceFolderId }),
    ...(input.evidenceIds != null && { evidenceIds: se_EvidenceIds(input.evidenceIds, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1BatchCreateDelegationByAssessmentCommand
 */
export const se_BatchCreateDelegationByAssessmentCommand = async (
  input: BatchCreateDelegationByAssessmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/assessments/{assessmentId}/delegations";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "assessmentId",
    () => input.assessmentId!,
    "{assessmentId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.createDelegationRequests != null && {
      createDelegationRequests: se_CreateDelegationRequests(input.createDelegationRequests, context),
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1BatchDeleteDelegationByAssessmentCommand
 */
export const se_BatchDeleteDelegationByAssessmentCommand = async (
  input: BatchDeleteDelegationByAssessmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/assessments/{assessmentId}/delegations";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "assessmentId",
    () => input.assessmentId!,
    "{assessmentId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.delegationIds != null && { delegationIds: se_DelegationIds(input.delegationIds, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1BatchDisassociateAssessmentReportEvidenceCommand
 */
export const se_BatchDisassociateAssessmentReportEvidenceCommand = async (
  input: BatchDisassociateAssessmentReportEvidenceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/assessments/{assessmentId}/batchDisassociateFromAssessmentReport";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "assessmentId",
    () => input.assessmentId!,
    "{assessmentId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.evidenceFolderId != null && { evidenceFolderId: input.evidenceFolderId }),
    ...(input.evidenceIds != null && { evidenceIds: se_EvidenceIds(input.evidenceIds, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1BatchImportEvidenceToAssessmentControlCommand
 */
export const se_BatchImportEvidenceToAssessmentControlCommand = async (
  input: BatchImportEvidenceToAssessmentControlCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/assessments/{assessmentId}/controlSets/{controlSetId}/controls/{controlId}/evidence";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "assessmentId",
    () => input.assessmentId!,
    "{assessmentId}",
    false
  );
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "controlSetId",
    () => input.controlSetId!,
    "{controlSetId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "controlId", () => input.controlId!, "{controlId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.manualEvidence != null && { manualEvidence: se_ManualEvidenceList(input.manualEvidence, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1CreateAssessmentCommand
 */
export const se_CreateAssessmentCommand = async (
  input: CreateAssessmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/assessments";
  let body: any;
  body = JSON.stringify({
    ...(input.assessmentReportsDestination != null && {
      assessmentReportsDestination: se_AssessmentReportsDestination(input.assessmentReportsDestination, context),
    }),
    ...(input.description != null && { description: input.description }),
    ...(input.frameworkId != null && { frameworkId: input.frameworkId }),
    ...(input.name != null && { name: input.name }),
    ...(input.roles != null && { roles: se_Roles(input.roles, context) }),
    ...(input.scope != null && { scope: se_Scope(input.scope, context) }),
    ...(input.tags != null && { tags: se_TagMap(input.tags, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1CreateAssessmentFrameworkCommand
 */
export const se_CreateAssessmentFrameworkCommand = async (
  input: CreateAssessmentFrameworkCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/assessmentFrameworks";
  let body: any;
  body = JSON.stringify({
    ...(input.complianceType != null && { complianceType: input.complianceType }),
    ...(input.controlSets != null && {
      controlSets: se_CreateAssessmentFrameworkControlSets(input.controlSets, context),
    }),
    ...(input.description != null && { description: input.description }),
    ...(input.name != null && { name: input.name }),
    ...(input.tags != null && { tags: se_TagMap(input.tags, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1CreateAssessmentReportCommand
 */
export const se_CreateAssessmentReportCommand = async (
  input: CreateAssessmentReportCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/assessments/{assessmentId}/reports";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "assessmentId",
    () => input.assessmentId!,
    "{assessmentId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.description != null && { description: input.description }),
    ...(input.name != null && { name: input.name }),
    ...(input.queryStatement != null && { queryStatement: input.queryStatement }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1CreateControlCommand
 */
export const se_CreateControlCommand = async (
  input: CreateControlCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/controls";
  let body: any;
  body = JSON.stringify({
    ...(input.actionPlanInstructions != null && { actionPlanInstructions: input.actionPlanInstructions }),
    ...(input.actionPlanTitle != null && { actionPlanTitle: input.actionPlanTitle }),
    ...(input.controlMappingSources != null && {
      controlMappingSources: se_CreateControlMappingSources(input.controlMappingSources, context),
    }),
    ...(input.description != null && { description: input.description }),
    ...(input.name != null && { name: input.name }),
    ...(input.tags != null && { tags: se_TagMap(input.tags, context) }),
    ...(input.testingInformation != null && { testingInformation: input.testingInformation }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteAssessmentCommand
 */
export const se_DeleteAssessmentCommand = async (
  input: DeleteAssessmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/assessments/{assessmentId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "assessmentId",
    () => input.assessmentId!,
    "{assessmentId}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteAssessmentFrameworkCommand
 */
export const se_DeleteAssessmentFrameworkCommand = async (
  input: DeleteAssessmentFrameworkCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/assessmentFrameworks/{frameworkId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "frameworkId", () => input.frameworkId!, "{frameworkId}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteAssessmentFrameworkShareCommand
 */
export const se_DeleteAssessmentFrameworkShareCommand = async (
  input: DeleteAssessmentFrameworkShareCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/assessmentFrameworkShareRequests/{requestId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "requestId", () => input.requestId!, "{requestId}", false);
  const query: any = map({
    requestType: [, __expectNonNull(input.requestType!, `requestType`)],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteAssessmentReportCommand
 */
export const se_DeleteAssessmentReportCommand = async (
  input: DeleteAssessmentReportCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/assessments/{assessmentId}/reports/{assessmentReportId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "assessmentId",
    () => input.assessmentId!,
    "{assessmentId}",
    false
  );
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "assessmentReportId",
    () => input.assessmentReportId!,
    "{assessmentReportId}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteControlCommand
 */
export const se_DeleteControlCommand = async (
  input: DeleteControlCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/controls/{controlId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "controlId", () => input.controlId!, "{controlId}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DeregisterAccountCommand
 */
export const se_DeregisterAccountCommand = async (
  input: DeregisterAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/account/deregisterAccount";
  let body: any;
  body = "";
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DeregisterOrganizationAdminAccountCommand
 */
export const se_DeregisterOrganizationAdminAccountCommand = async (
  input: DeregisterOrganizationAdminAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/account/deregisterOrganizationAdminAccount";
  let body: any;
  body = JSON.stringify({
    ...(input.adminAccountId != null && { adminAccountId: input.adminAccountId }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DisassociateAssessmentReportEvidenceFolderCommand
 */
export const se_DisassociateAssessmentReportEvidenceFolderCommand = async (
  input: DisassociateAssessmentReportEvidenceFolderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/assessments/{assessmentId}/disassociateFromAssessmentReport";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "assessmentId",
    () => input.assessmentId!,
    "{assessmentId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.evidenceFolderId != null && { evidenceFolderId: input.evidenceFolderId }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetAccountStatusCommand
 */
export const se_GetAccountStatusCommand = async (
  input: GetAccountStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/account/status";
  let body: any;
  body = "";
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetAssessmentCommand
 */
export const se_GetAssessmentCommand = async (
  input: GetAssessmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/assessments/{assessmentId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "assessmentId",
    () => input.assessmentId!,
    "{assessmentId}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetAssessmentFrameworkCommand
 */
export const se_GetAssessmentFrameworkCommand = async (
  input: GetAssessmentFrameworkCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/assessmentFrameworks/{frameworkId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "frameworkId", () => input.frameworkId!, "{frameworkId}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetAssessmentReportUrlCommand
 */
export const se_GetAssessmentReportUrlCommand = async (
  input: GetAssessmentReportUrlCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/assessments/{assessmentId}/reports/{assessmentReportId}/url";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "assessmentReportId",
    () => input.assessmentReportId!,
    "{assessmentReportId}",
    false
  );
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "assessmentId",
    () => input.assessmentId!,
    "{assessmentId}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetChangeLogsCommand
 */
export const se_GetChangeLogsCommand = async (
  input: GetChangeLogsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/assessments/{assessmentId}/changelogs";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "assessmentId",
    () => input.assessmentId!,
    "{assessmentId}",
    false
  );
  const query: any = map({
    controlSetId: [, input.controlSetId!],
    controlId: [, input.controlId!],
    nextToken: [, input.nextToken!],
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1GetControlCommand
 */
export const se_GetControlCommand = async (
  input: GetControlCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/controls/{controlId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "controlId", () => input.controlId!, "{controlId}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetDelegationsCommand
 */
export const se_GetDelegationsCommand = async (
  input: GetDelegationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/delegations";
  const query: any = map({
    nextToken: [, input.nextToken!],
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1GetEvidenceCommand
 */
export const se_GetEvidenceCommand = async (
  input: GetEvidenceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/assessments/{assessmentId}/controlSets/{controlSetId}/evidenceFolders/{evidenceFolderId}/evidence/{evidenceId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "assessmentId",
    () => input.assessmentId!,
    "{assessmentId}",
    false
  );
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "controlSetId",
    () => input.controlSetId!,
    "{controlSetId}",
    false
  );
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "evidenceFolderId",
    () => input.evidenceFolderId!,
    "{evidenceFolderId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "evidenceId", () => input.evidenceId!, "{evidenceId}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetEvidenceByEvidenceFolderCommand
 */
export const se_GetEvidenceByEvidenceFolderCommand = async (
  input: GetEvidenceByEvidenceFolderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/assessments/{assessmentId}/controlSets/{controlSetId}/evidenceFolders/{evidenceFolderId}/evidence";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "assessmentId",
    () => input.assessmentId!,
    "{assessmentId}",
    false
  );
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "controlSetId",
    () => input.controlSetId!,
    "{controlSetId}",
    false
  );
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "evidenceFolderId",
    () => input.evidenceFolderId!,
    "{evidenceFolderId}",
    false
  );
  const query: any = map({
    nextToken: [, input.nextToken!],
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1GetEvidenceFolderCommand
 */
export const se_GetEvidenceFolderCommand = async (
  input: GetEvidenceFolderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/assessments/{assessmentId}/controlSets/{controlSetId}/evidenceFolders/{evidenceFolderId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "assessmentId",
    () => input.assessmentId!,
    "{assessmentId}",
    false
  );
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "controlSetId",
    () => input.controlSetId!,
    "{controlSetId}",
    false
  );
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "evidenceFolderId",
    () => input.evidenceFolderId!,
    "{evidenceFolderId}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetEvidenceFoldersByAssessmentCommand
 */
export const se_GetEvidenceFoldersByAssessmentCommand = async (
  input: GetEvidenceFoldersByAssessmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/assessments/{assessmentId}/evidenceFolders";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "assessmentId",
    () => input.assessmentId!,
    "{assessmentId}",
    false
  );
  const query: any = map({
    nextToken: [, input.nextToken!],
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1GetEvidenceFoldersByAssessmentControlCommand
 */
export const se_GetEvidenceFoldersByAssessmentControlCommand = async (
  input: GetEvidenceFoldersByAssessmentControlCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/assessments/{assessmentId}/evidenceFolders-by-assessment-control/{controlSetId}/{controlId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "assessmentId",
    () => input.assessmentId!,
    "{assessmentId}",
    false
  );
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "controlSetId",
    () => input.controlSetId!,
    "{controlSetId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "controlId", () => input.controlId!, "{controlId}", false);
  const query: any = map({
    nextToken: [, input.nextToken!],
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1GetInsightsCommand
 */
export const se_GetInsightsCommand = async (
  input: GetInsightsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/insights";
  let body: any;
  body = "";
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetInsightsByAssessmentCommand
 */
export const se_GetInsightsByAssessmentCommand = async (
  input: GetInsightsByAssessmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/insights/assessments/{assessmentId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "assessmentId",
    () => input.assessmentId!,
    "{assessmentId}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetOrganizationAdminAccountCommand
 */
export const se_GetOrganizationAdminAccountCommand = async (
  input: GetOrganizationAdminAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/account/organizationAdminAccount";
  let body: any;
  body = "";
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetServicesInScopeCommand
 */
export const se_GetServicesInScopeCommand = async (
  input: GetServicesInScopeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/services";
  let body: any;
  body = "";
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetSettingsCommand
 */
export const se_GetSettingsCommand = async (
  input: GetSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/settings/{attribute}";
  resolvedPath = __resolvedPath(resolvedPath, input, "attribute", () => input.attribute!, "{attribute}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1ListAssessmentControlInsightsByControlDomainCommand
 */
export const se_ListAssessmentControlInsightsByControlDomainCommand = async (
  input: ListAssessmentControlInsightsByControlDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/insights/controls-by-assessment";
  const query: any = map({
    controlDomainId: [, __expectNonNull(input.controlDomainId!, `controlDomainId`)],
    assessmentId: [, __expectNonNull(input.assessmentId!, `assessmentId`)],
    nextToken: [, input.nextToken!],
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1ListAssessmentFrameworksCommand
 */
export const se_ListAssessmentFrameworksCommand = async (
  input: ListAssessmentFrameworksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/assessmentFrameworks";
  const query: any = map({
    frameworkType: [, __expectNonNull(input.frameworkType!, `frameworkType`)],
    nextToken: [, input.nextToken!],
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1ListAssessmentFrameworkShareRequestsCommand
 */
export const se_ListAssessmentFrameworkShareRequestsCommand = async (
  input: ListAssessmentFrameworkShareRequestsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/assessmentFrameworkShareRequests";
  const query: any = map({
    requestType: [, __expectNonNull(input.requestType!, `requestType`)],
    nextToken: [, input.nextToken!],
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1ListAssessmentReportsCommand
 */
export const se_ListAssessmentReportsCommand = async (
  input: ListAssessmentReportsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/assessmentReports";
  const query: any = map({
    nextToken: [, input.nextToken!],
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1ListAssessmentsCommand
 */
export const se_ListAssessmentsCommand = async (
  input: ListAssessmentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/assessments";
  const query: any = map({
    status: [, input.status!],
    nextToken: [, input.nextToken!],
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1ListControlDomainInsightsCommand
 */
export const se_ListControlDomainInsightsCommand = async (
  input: ListControlDomainInsightsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/insights/control-domains";
  const query: any = map({
    nextToken: [, input.nextToken!],
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1ListControlDomainInsightsByAssessmentCommand
 */
export const se_ListControlDomainInsightsByAssessmentCommand = async (
  input: ListControlDomainInsightsByAssessmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/insights/control-domains-by-assessment";
  const query: any = map({
    assessmentId: [, __expectNonNull(input.assessmentId!, `assessmentId`)],
    nextToken: [, input.nextToken!],
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1ListControlInsightsByControlDomainCommand
 */
export const se_ListControlInsightsByControlDomainCommand = async (
  input: ListControlInsightsByControlDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/insights/controls";
  const query: any = map({
    controlDomainId: [, __expectNonNull(input.controlDomainId!, `controlDomainId`)],
    nextToken: [, input.nextToken!],
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1ListControlsCommand
 */
export const se_ListControlsCommand = async (
  input: ListControlsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/controls";
  const query: any = map({
    controlType: [, __expectNonNull(input.controlType!, `controlType`)],
    nextToken: [, input.nextToken!],
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1ListKeywordsForDataSourceCommand
 */
export const se_ListKeywordsForDataSourceCommand = async (
  input: ListKeywordsForDataSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/dataSourceKeywords";
  const query: any = map({
    source: [, __expectNonNull(input.source!, `source`)],
    nextToken: [, input.nextToken!],
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1ListNotificationsCommand
 */
export const se_ListNotificationsCommand = async (
  input: ListNotificationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/notifications";
  const query: any = map({
    nextToken: [, input.nextToken!],
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{resourceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1RegisterAccountCommand
 */
export const se_RegisterAccountCommand = async (
  input: RegisterAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/account/registerAccount";
  let body: any;
  body = JSON.stringify({
    ...(input.delegatedAdminAccount != null && { delegatedAdminAccount: input.delegatedAdminAccount }),
    ...(input.kmsKey != null && { kmsKey: input.kmsKey }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1RegisterOrganizationAdminAccountCommand
 */
export const se_RegisterOrganizationAdminAccountCommand = async (
  input: RegisterOrganizationAdminAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/account/registerOrganizationAdminAccount";
  let body: any;
  body = JSON.stringify({
    ...(input.adminAccountId != null && { adminAccountId: input.adminAccountId }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1StartAssessmentFrameworkShareCommand
 */
export const se_StartAssessmentFrameworkShareCommand = async (
  input: StartAssessmentFrameworkShareCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/assessmentFrameworks/{frameworkId}/shareRequests";
  resolvedPath = __resolvedPath(resolvedPath, input, "frameworkId", () => input.frameworkId!, "{frameworkId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.comment != null && { comment: input.comment }),
    ...(input.destinationAccount != null && { destinationAccount: input.destinationAccount }),
    ...(input.destinationRegion != null && { destinationRegion: input.destinationRegion }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1TagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{resourceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.tags != null && { tags: se_TagMap(input.tags, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{resourceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  const query: any = map({
    tagKeys: [
      __expectNonNull(input.tagKeys, `tagKeys`) != null,
      () => (input.tagKeys! || []).map((_entry) => _entry as any),
    ],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateAssessmentCommand
 */
export const se_UpdateAssessmentCommand = async (
  input: UpdateAssessmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/assessments/{assessmentId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "assessmentId",
    () => input.assessmentId!,
    "{assessmentId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.assessmentDescription != null && { assessmentDescription: input.assessmentDescription }),
    ...(input.assessmentName != null && { assessmentName: input.assessmentName }),
    ...(input.assessmentReportsDestination != null && {
      assessmentReportsDestination: se_AssessmentReportsDestination(input.assessmentReportsDestination, context),
    }),
    ...(input.roles != null && { roles: se_Roles(input.roles, context) }),
    ...(input.scope != null && { scope: se_Scope(input.scope, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateAssessmentControlCommand
 */
export const se_UpdateAssessmentControlCommand = async (
  input: UpdateAssessmentControlCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/assessments/{assessmentId}/controlSets/{controlSetId}/controls/{controlId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "assessmentId",
    () => input.assessmentId!,
    "{assessmentId}",
    false
  );
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "controlSetId",
    () => input.controlSetId!,
    "{controlSetId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "controlId", () => input.controlId!, "{controlId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.commentBody != null && { commentBody: input.commentBody }),
    ...(input.controlStatus != null && { controlStatus: input.controlStatus }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateAssessmentControlSetStatusCommand
 */
export const se_UpdateAssessmentControlSetStatusCommand = async (
  input: UpdateAssessmentControlSetStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/assessments/{assessmentId}/controlSets/{controlSetId}/status";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "assessmentId",
    () => input.assessmentId!,
    "{assessmentId}",
    false
  );
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "controlSetId",
    () => input.controlSetId!,
    "{controlSetId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.comment != null && { comment: input.comment }),
    ...(input.status != null && { status: input.status }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateAssessmentFrameworkCommand
 */
export const se_UpdateAssessmentFrameworkCommand = async (
  input: UpdateAssessmentFrameworkCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/assessmentFrameworks/{frameworkId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "frameworkId", () => input.frameworkId!, "{frameworkId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.complianceType != null && { complianceType: input.complianceType }),
    ...(input.controlSets != null && {
      controlSets: se_UpdateAssessmentFrameworkControlSets(input.controlSets, context),
    }),
    ...(input.description != null && { description: input.description }),
    ...(input.name != null && { name: input.name }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateAssessmentFrameworkShareCommand
 */
export const se_UpdateAssessmentFrameworkShareCommand = async (
  input: UpdateAssessmentFrameworkShareCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/assessmentFrameworkShareRequests/{requestId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "requestId", () => input.requestId!, "{requestId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.action != null && { action: input.action }),
    ...(input.requestType != null && { requestType: input.requestType }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateAssessmentStatusCommand
 */
export const se_UpdateAssessmentStatusCommand = async (
  input: UpdateAssessmentStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/assessments/{assessmentId}/status";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "assessmentId",
    () => input.assessmentId!,
    "{assessmentId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.status != null && { status: input.status }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateControlCommand
 */
export const se_UpdateControlCommand = async (
  input: UpdateControlCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/controls/{controlId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "controlId", () => input.controlId!, "{controlId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.actionPlanInstructions != null && { actionPlanInstructions: input.actionPlanInstructions }),
    ...(input.actionPlanTitle != null && { actionPlanTitle: input.actionPlanTitle }),
    ...(input.controlMappingSources != null && {
      controlMappingSources: se_ControlMappingSources(input.controlMappingSources, context),
    }),
    ...(input.description != null && { description: input.description }),
    ...(input.name != null && { name: input.name }),
    ...(input.testingInformation != null && { testingInformation: input.testingInformation }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateSettingsCommand
 */
export const se_UpdateSettingsCommand = async (
  input: UpdateSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/settings";
  let body: any;
  body = JSON.stringify({
    ...(input.defaultAssessmentReportsDestination != null && {
      defaultAssessmentReportsDestination: se_AssessmentReportsDestination(
        input.defaultAssessmentReportsDestination,
        context
      ),
    }),
    ...(input.defaultProcessOwners != null && { defaultProcessOwners: se_Roles(input.defaultProcessOwners, context) }),
    ...(input.deregistrationPolicy != null && {
      deregistrationPolicy: se_DeregistrationPolicy(input.deregistrationPolicy, context),
    }),
    ...(input.evidenceFinderEnabled != null && { evidenceFinderEnabled: input.evidenceFinderEnabled }),
    ...(input.kmsKey != null && { kmsKey: input.kmsKey }),
    ...(input.snsTopic != null && { snsTopic: input.snsTopic }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1ValidateAssessmentReportIntegrityCommand
 */
export const se_ValidateAssessmentReportIntegrityCommand = async (
  input: ValidateAssessmentReportIntegrityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/assessmentReports/integrity";
  let body: any;
  body = JSON.stringify({
    ...(input.s3RelativePath != null && { s3RelativePath: input.s3RelativePath }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * deserializeAws_restJson1AssociateAssessmentReportEvidenceFolderCommand
 */
export const de_AssociateAssessmentReportEvidenceFolderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateAssessmentReportEvidenceFolderCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_AssociateAssessmentReportEvidenceFolderCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1AssociateAssessmentReportEvidenceFolderCommandError
 */
const de_AssociateAssessmentReportEvidenceFolderCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateAssessmentReportEvidenceFolderCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.auditmanager#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.auditmanager#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.auditmanager#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1BatchAssociateAssessmentReportEvidenceCommand
 */
export const de_BatchAssociateAssessmentReportEvidenceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchAssociateAssessmentReportEvidenceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_BatchAssociateAssessmentReportEvidenceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.errors != null) {
    contents.errors = de_AssessmentReportEvidenceErrors(data.errors, context);
  }
  if (data.evidenceIds != null) {
    contents.evidenceIds = de_EvidenceIds(data.evidenceIds, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1BatchAssociateAssessmentReportEvidenceCommandError
 */
const de_BatchAssociateAssessmentReportEvidenceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchAssociateAssessmentReportEvidenceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.auditmanager#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.auditmanager#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.auditmanager#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1BatchCreateDelegationByAssessmentCommand
 */
export const de_BatchCreateDelegationByAssessmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchCreateDelegationByAssessmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_BatchCreateDelegationByAssessmentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.delegations != null) {
    contents.delegations = de_Delegations(data.delegations, context);
  }
  if (data.errors != null) {
    contents.errors = de_BatchCreateDelegationByAssessmentErrors(data.errors, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1BatchCreateDelegationByAssessmentCommandError
 */
const de_BatchCreateDelegationByAssessmentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchCreateDelegationByAssessmentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.auditmanager#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.auditmanager#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.auditmanager#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1BatchDeleteDelegationByAssessmentCommand
 */
export const de_BatchDeleteDelegationByAssessmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDeleteDelegationByAssessmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_BatchDeleteDelegationByAssessmentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.errors != null) {
    contents.errors = de_BatchDeleteDelegationByAssessmentErrors(data.errors, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1BatchDeleteDelegationByAssessmentCommandError
 */
const de_BatchDeleteDelegationByAssessmentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDeleteDelegationByAssessmentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.auditmanager#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.auditmanager#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.auditmanager#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1BatchDisassociateAssessmentReportEvidenceCommand
 */
export const de_BatchDisassociateAssessmentReportEvidenceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDisassociateAssessmentReportEvidenceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_BatchDisassociateAssessmentReportEvidenceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.errors != null) {
    contents.errors = de_AssessmentReportEvidenceErrors(data.errors, context);
  }
  if (data.evidenceIds != null) {
    contents.evidenceIds = de_EvidenceIds(data.evidenceIds, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1BatchDisassociateAssessmentReportEvidenceCommandError
 */
const de_BatchDisassociateAssessmentReportEvidenceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDisassociateAssessmentReportEvidenceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.auditmanager#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.auditmanager#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.auditmanager#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1BatchImportEvidenceToAssessmentControlCommand
 */
export const de_BatchImportEvidenceToAssessmentControlCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchImportEvidenceToAssessmentControlCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_BatchImportEvidenceToAssessmentControlCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.errors != null) {
    contents.errors = de_BatchImportEvidenceToAssessmentControlErrors(data.errors, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1BatchImportEvidenceToAssessmentControlCommandError
 */
const de_BatchImportEvidenceToAssessmentControlCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchImportEvidenceToAssessmentControlCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.auditmanager#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.auditmanager#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.auditmanager#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1CreateAssessmentCommand
 */
export const de_CreateAssessmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAssessmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateAssessmentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.assessment != null) {
    contents.assessment = de_Assessment(data.assessment, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateAssessmentCommandError
 */
const de_CreateAssessmentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAssessmentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.auditmanager#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.auditmanager#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.auditmanager#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.auditmanager#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1CreateAssessmentFrameworkCommand
 */
export const de_CreateAssessmentFrameworkCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAssessmentFrameworkCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateAssessmentFrameworkCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.framework != null) {
    contents.framework = de_Framework(data.framework, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateAssessmentFrameworkCommandError
 */
const de_CreateAssessmentFrameworkCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAssessmentFrameworkCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.auditmanager#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.auditmanager#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.auditmanager#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.auditmanager#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1CreateAssessmentReportCommand
 */
export const de_CreateAssessmentReportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAssessmentReportCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateAssessmentReportCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.assessmentReport != null) {
    contents.assessmentReport = de_AssessmentReport(data.assessmentReport, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateAssessmentReportCommandError
 */
const de_CreateAssessmentReportCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAssessmentReportCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.auditmanager#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.auditmanager#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.auditmanager#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1CreateControlCommand
 */
export const de_CreateControlCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateControlCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateControlCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.control != null) {
    contents.control = de_Control(data.control, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateControlCommandError
 */
const de_CreateControlCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateControlCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.auditmanager#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.auditmanager#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.auditmanager#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.auditmanager#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeleteAssessmentCommand
 */
export const de_DeleteAssessmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAssessmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteAssessmentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteAssessmentCommandError
 */
const de_DeleteAssessmentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAssessmentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.auditmanager#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.auditmanager#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.auditmanager#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeleteAssessmentFrameworkCommand
 */
export const de_DeleteAssessmentFrameworkCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAssessmentFrameworkCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteAssessmentFrameworkCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteAssessmentFrameworkCommandError
 */
const de_DeleteAssessmentFrameworkCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAssessmentFrameworkCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.auditmanager#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.auditmanager#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.auditmanager#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeleteAssessmentFrameworkShareCommand
 */
export const de_DeleteAssessmentFrameworkShareCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAssessmentFrameworkShareCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteAssessmentFrameworkShareCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteAssessmentFrameworkShareCommandError
 */
const de_DeleteAssessmentFrameworkShareCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAssessmentFrameworkShareCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.auditmanager#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.auditmanager#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.auditmanager#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeleteAssessmentReportCommand
 */
export const de_DeleteAssessmentReportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAssessmentReportCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteAssessmentReportCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteAssessmentReportCommandError
 */
const de_DeleteAssessmentReportCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAssessmentReportCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.auditmanager#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.auditmanager#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.auditmanager#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeleteControlCommand
 */
export const de_DeleteControlCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteControlCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteControlCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteControlCommandError
 */
const de_DeleteControlCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteControlCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.auditmanager#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.auditmanager#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.auditmanager#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeregisterAccountCommand
 */
export const de_DeregisterAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterAccountCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeregisterAccountCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.status != null) {
    contents.status = __expectString(data.status);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DeregisterAccountCommandError
 */
const de_DeregisterAccountCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterAccountCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.auditmanager#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.auditmanager#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.auditmanager#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeregisterOrganizationAdminAccountCommand
 */
export const de_DeregisterOrganizationAdminAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterOrganizationAdminAccountCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeregisterOrganizationAdminAccountCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeregisterOrganizationAdminAccountCommandError
 */
const de_DeregisterOrganizationAdminAccountCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterOrganizationAdminAccountCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.auditmanager#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.auditmanager#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.auditmanager#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DisassociateAssessmentReportEvidenceFolderCommand
 */
export const de_DisassociateAssessmentReportEvidenceFolderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateAssessmentReportEvidenceFolderCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DisassociateAssessmentReportEvidenceFolderCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DisassociateAssessmentReportEvidenceFolderCommandError
 */
const de_DisassociateAssessmentReportEvidenceFolderCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateAssessmentReportEvidenceFolderCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.auditmanager#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.auditmanager#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.auditmanager#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetAccountStatusCommand
 */
export const de_GetAccountStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccountStatusCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetAccountStatusCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.status != null) {
    contents.status = __expectString(data.status);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetAccountStatusCommandError
 */
const de_GetAccountStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccountStatusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetAssessmentCommand
 */
export const de_GetAssessmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAssessmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetAssessmentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.assessment != null) {
    contents.assessment = de_Assessment(data.assessment, context);
  }
  if (data.userRole != null) {
    contents.userRole = de_Role(data.userRole, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetAssessmentCommandError
 */
const de_GetAssessmentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAssessmentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.auditmanager#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.auditmanager#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.auditmanager#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetAssessmentFrameworkCommand
 */
export const de_GetAssessmentFrameworkCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAssessmentFrameworkCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetAssessmentFrameworkCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.framework != null) {
    contents.framework = de_Framework(data.framework, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetAssessmentFrameworkCommandError
 */
const de_GetAssessmentFrameworkCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAssessmentFrameworkCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.auditmanager#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.auditmanager#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.auditmanager#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetAssessmentReportUrlCommand
 */
export const de_GetAssessmentReportUrlCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAssessmentReportUrlCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetAssessmentReportUrlCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.preSignedUrl != null) {
    contents.preSignedUrl = de_URL(data.preSignedUrl, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetAssessmentReportUrlCommandError
 */
const de_GetAssessmentReportUrlCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAssessmentReportUrlCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.auditmanager#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.auditmanager#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.auditmanager#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetChangeLogsCommand
 */
export const de_GetChangeLogsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetChangeLogsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetChangeLogsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.changeLogs != null) {
    contents.changeLogs = de_ChangeLogs(data.changeLogs, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetChangeLogsCommandError
 */
const de_GetChangeLogsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetChangeLogsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.auditmanager#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.auditmanager#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.auditmanager#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetControlCommand
 */
export const de_GetControlCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetControlCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetControlCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.control != null) {
    contents.control = de_Control(data.control, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetControlCommandError
 */
const de_GetControlCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetControlCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.auditmanager#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.auditmanager#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.auditmanager#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetDelegationsCommand
 */
export const de_GetDelegationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDelegationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetDelegationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.delegations != null) {
    contents.delegations = de_DelegationMetadataList(data.delegations, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetDelegationsCommandError
 */
const de_GetDelegationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDelegationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.auditmanager#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.auditmanager#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetEvidenceCommand
 */
export const de_GetEvidenceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEvidenceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetEvidenceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.evidence != null) {
    contents.evidence = de_Evidence(data.evidence, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetEvidenceCommandError
 */
const de_GetEvidenceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEvidenceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.auditmanager#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.auditmanager#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.auditmanager#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetEvidenceByEvidenceFolderCommand
 */
export const de_GetEvidenceByEvidenceFolderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEvidenceByEvidenceFolderCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetEvidenceByEvidenceFolderCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.evidence != null) {
    contents.evidence = de_EvidenceList(data.evidence, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetEvidenceByEvidenceFolderCommandError
 */
const de_GetEvidenceByEvidenceFolderCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEvidenceByEvidenceFolderCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.auditmanager#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.auditmanager#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.auditmanager#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetEvidenceFolderCommand
 */
export const de_GetEvidenceFolderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEvidenceFolderCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetEvidenceFolderCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.evidenceFolder != null) {
    contents.evidenceFolder = de_AssessmentEvidenceFolder(data.evidenceFolder, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetEvidenceFolderCommandError
 */
const de_GetEvidenceFolderCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEvidenceFolderCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.auditmanager#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.auditmanager#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.auditmanager#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetEvidenceFoldersByAssessmentCommand
 */
export const de_GetEvidenceFoldersByAssessmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEvidenceFoldersByAssessmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetEvidenceFoldersByAssessmentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.evidenceFolders != null) {
    contents.evidenceFolders = de_AssessmentEvidenceFolders(data.evidenceFolders, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetEvidenceFoldersByAssessmentCommandError
 */
const de_GetEvidenceFoldersByAssessmentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEvidenceFoldersByAssessmentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.auditmanager#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.auditmanager#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.auditmanager#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetEvidenceFoldersByAssessmentControlCommand
 */
export const de_GetEvidenceFoldersByAssessmentControlCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEvidenceFoldersByAssessmentControlCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetEvidenceFoldersByAssessmentControlCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.evidenceFolders != null) {
    contents.evidenceFolders = de_AssessmentEvidenceFolders(data.evidenceFolders, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetEvidenceFoldersByAssessmentControlCommandError
 */
const de_GetEvidenceFoldersByAssessmentControlCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEvidenceFoldersByAssessmentControlCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.auditmanager#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.auditmanager#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.auditmanager#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetInsightsCommand
 */
export const de_GetInsightsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInsightsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetInsightsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.insights != null) {
    contents.insights = de_Insights(data.insights, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetInsightsCommandError
 */
const de_GetInsightsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInsightsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.auditmanager#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetInsightsByAssessmentCommand
 */
export const de_GetInsightsByAssessmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInsightsByAssessmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetInsightsByAssessmentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.insights != null) {
    contents.insights = de_InsightsByAssessment(data.insights, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetInsightsByAssessmentCommandError
 */
const de_GetInsightsByAssessmentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInsightsByAssessmentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.auditmanager#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.auditmanager#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.auditmanager#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetOrganizationAdminAccountCommand
 */
export const de_GetOrganizationAdminAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOrganizationAdminAccountCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetOrganizationAdminAccountCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.adminAccountId != null) {
    contents.adminAccountId = __expectString(data.adminAccountId);
  }
  if (data.organizationId != null) {
    contents.organizationId = __expectString(data.organizationId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetOrganizationAdminAccountCommandError
 */
const de_GetOrganizationAdminAccountCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOrganizationAdminAccountCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.auditmanager#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.auditmanager#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.auditmanager#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetServicesInScopeCommand
 */
export const de_GetServicesInScopeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetServicesInScopeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetServicesInScopeCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.serviceMetadata != null) {
    contents.serviceMetadata = de_ServiceMetadataList(data.serviceMetadata, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetServicesInScopeCommandError
 */
const de_GetServicesInScopeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetServicesInScopeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.auditmanager#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.auditmanager#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetSettingsCommand
 */
export const de_GetSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetSettingsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.settings != null) {
    contents.settings = de_Settings(data.settings, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetSettingsCommandError
 */
const de_GetSettingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSettingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.auditmanager#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListAssessmentControlInsightsByControlDomainCommand
 */
export const de_ListAssessmentControlInsightsByControlDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAssessmentControlInsightsByControlDomainCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListAssessmentControlInsightsByControlDomainCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.controlInsightsByAssessment != null) {
    contents.controlInsightsByAssessment = de_ControlInsightsMetadataByAssessment(
      data.controlInsightsByAssessment,
      context
    );
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListAssessmentControlInsightsByControlDomainCommandError
 */
const de_ListAssessmentControlInsightsByControlDomainCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAssessmentControlInsightsByControlDomainCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.auditmanager#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.auditmanager#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.auditmanager#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListAssessmentFrameworksCommand
 */
export const de_ListAssessmentFrameworksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAssessmentFrameworksCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListAssessmentFrameworksCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.frameworkMetadataList != null) {
    contents.frameworkMetadataList = de_FrameworkMetadataList(data.frameworkMetadataList, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListAssessmentFrameworksCommandError
 */
const de_ListAssessmentFrameworksCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAssessmentFrameworksCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.auditmanager#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.auditmanager#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListAssessmentFrameworkShareRequestsCommand
 */
export const de_ListAssessmentFrameworkShareRequestsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAssessmentFrameworkShareRequestsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListAssessmentFrameworkShareRequestsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.assessmentFrameworkShareRequests != null) {
    contents.assessmentFrameworkShareRequests = de_AssessmentFrameworkShareRequestList(
      data.assessmentFrameworkShareRequests,
      context
    );
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListAssessmentFrameworkShareRequestsCommandError
 */
const de_ListAssessmentFrameworkShareRequestsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAssessmentFrameworkShareRequestsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.auditmanager#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.auditmanager#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListAssessmentReportsCommand
 */
export const de_ListAssessmentReportsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAssessmentReportsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListAssessmentReportsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.assessmentReports != null) {
    contents.assessmentReports = de_AssessmentReportsMetadata(data.assessmentReports, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListAssessmentReportsCommandError
 */
const de_ListAssessmentReportsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAssessmentReportsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.auditmanager#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.auditmanager#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListAssessmentsCommand
 */
export const de_ListAssessmentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAssessmentsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListAssessmentsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.assessmentMetadata != null) {
    contents.assessmentMetadata = de_ListAssessmentMetadata(data.assessmentMetadata, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListAssessmentsCommandError
 */
const de_ListAssessmentsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAssessmentsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.auditmanager#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.auditmanager#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListControlDomainInsightsCommand
 */
export const de_ListControlDomainInsightsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListControlDomainInsightsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListControlDomainInsightsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.controlDomainInsights != null) {
    contents.controlDomainInsights = de_ControlDomainInsightsList(data.controlDomainInsights, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListControlDomainInsightsCommandError
 */
const de_ListControlDomainInsightsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListControlDomainInsightsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.auditmanager#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.auditmanager#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.auditmanager#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListControlDomainInsightsByAssessmentCommand
 */
export const de_ListControlDomainInsightsByAssessmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListControlDomainInsightsByAssessmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListControlDomainInsightsByAssessmentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.controlDomainInsights != null) {
    contents.controlDomainInsights = de_ControlDomainInsightsList(data.controlDomainInsights, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListControlDomainInsightsByAssessmentCommandError
 */
const de_ListControlDomainInsightsByAssessmentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListControlDomainInsightsByAssessmentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.auditmanager#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.auditmanager#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.auditmanager#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListControlInsightsByControlDomainCommand
 */
export const de_ListControlInsightsByControlDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListControlInsightsByControlDomainCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListControlInsightsByControlDomainCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.controlInsightsMetadata != null) {
    contents.controlInsightsMetadata = de_ControlInsightsMetadata(data.controlInsightsMetadata, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListControlInsightsByControlDomainCommandError
 */
const de_ListControlInsightsByControlDomainCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListControlInsightsByControlDomainCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.auditmanager#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.auditmanager#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.auditmanager#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListControlsCommand
 */
export const de_ListControlsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListControlsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListControlsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.controlMetadataList != null) {
    contents.controlMetadataList = de_ControlMetadataList(data.controlMetadataList, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListControlsCommandError
 */
const de_ListControlsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListControlsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.auditmanager#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.auditmanager#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListKeywordsForDataSourceCommand
 */
export const de_ListKeywordsForDataSourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListKeywordsForDataSourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListKeywordsForDataSourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.keywords != null) {
    contents.keywords = de_Keywords(data.keywords, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListKeywordsForDataSourceCommandError
 */
const de_ListKeywordsForDataSourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListKeywordsForDataSourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.auditmanager#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.auditmanager#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListNotificationsCommand
 */
export const de_ListNotificationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListNotificationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListNotificationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.notifications != null) {
    contents.notifications = de_Notifications(data.notifications, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListNotificationsCommandError
 */
const de_ListNotificationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListNotificationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.auditmanager#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.auditmanager#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.tags != null) {
    contents.tags = de_TagMap(data.tags, context);
  }
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
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.auditmanager#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.auditmanager#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1RegisterAccountCommand
 */
export const de_RegisterAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterAccountCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_RegisterAccountCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.status != null) {
    contents.status = __expectString(data.status);
  }
  return contents;
};

/**
 * deserializeAws_restJson1RegisterAccountCommandError
 */
const de_RegisterAccountCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterAccountCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.auditmanager#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.auditmanager#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.auditmanager#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.auditmanager#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1RegisterOrganizationAdminAccountCommand
 */
export const de_RegisterOrganizationAdminAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterOrganizationAdminAccountCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_RegisterOrganizationAdminAccountCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.adminAccountId != null) {
    contents.adminAccountId = __expectString(data.adminAccountId);
  }
  if (data.organizationId != null) {
    contents.organizationId = __expectString(data.organizationId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1RegisterOrganizationAdminAccountCommandError
 */
const de_RegisterOrganizationAdminAccountCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterOrganizationAdminAccountCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.auditmanager#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.auditmanager#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.auditmanager#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1StartAssessmentFrameworkShareCommand
 */
export const de_StartAssessmentFrameworkShareCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartAssessmentFrameworkShareCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_StartAssessmentFrameworkShareCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.assessmentFrameworkShareRequest != null) {
    contents.assessmentFrameworkShareRequest = de_AssessmentFrameworkShareRequest(
      data.assessmentFrameworkShareRequest,
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_restJson1StartAssessmentFrameworkShareCommandError
 */
const de_StartAssessmentFrameworkShareCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartAssessmentFrameworkShareCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.auditmanager#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.auditmanager#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.auditmanager#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.auditmanager#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.auditmanager#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.auditmanager#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.auditmanager#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UpdateAssessmentCommand
 */
export const de_UpdateAssessmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAssessmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateAssessmentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.assessment != null) {
    contents.assessment = de_Assessment(data.assessment, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateAssessmentCommandError
 */
const de_UpdateAssessmentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAssessmentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.auditmanager#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.auditmanager#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.auditmanager#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UpdateAssessmentControlCommand
 */
export const de_UpdateAssessmentControlCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAssessmentControlCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateAssessmentControlCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.control != null) {
    contents.control = de_AssessmentControl(data.control, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateAssessmentControlCommandError
 */
const de_UpdateAssessmentControlCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAssessmentControlCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.auditmanager#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.auditmanager#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.auditmanager#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UpdateAssessmentControlSetStatusCommand
 */
export const de_UpdateAssessmentControlSetStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAssessmentControlSetStatusCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateAssessmentControlSetStatusCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.controlSet != null) {
    contents.controlSet = de_AssessmentControlSet(data.controlSet, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateAssessmentControlSetStatusCommandError
 */
const de_UpdateAssessmentControlSetStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAssessmentControlSetStatusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.auditmanager#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.auditmanager#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.auditmanager#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UpdateAssessmentFrameworkCommand
 */
export const de_UpdateAssessmentFrameworkCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAssessmentFrameworkCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateAssessmentFrameworkCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.framework != null) {
    contents.framework = de_Framework(data.framework, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateAssessmentFrameworkCommandError
 */
const de_UpdateAssessmentFrameworkCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAssessmentFrameworkCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.auditmanager#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.auditmanager#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.auditmanager#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UpdateAssessmentFrameworkShareCommand
 */
export const de_UpdateAssessmentFrameworkShareCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAssessmentFrameworkShareCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateAssessmentFrameworkShareCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.assessmentFrameworkShareRequest != null) {
    contents.assessmentFrameworkShareRequest = de_AssessmentFrameworkShareRequest(
      data.assessmentFrameworkShareRequest,
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateAssessmentFrameworkShareCommandError
 */
const de_UpdateAssessmentFrameworkShareCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAssessmentFrameworkShareCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.auditmanager#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.auditmanager#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.auditmanager#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.auditmanager#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UpdateAssessmentStatusCommand
 */
export const de_UpdateAssessmentStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAssessmentStatusCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateAssessmentStatusCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.assessment != null) {
    contents.assessment = de_Assessment(data.assessment, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateAssessmentStatusCommandError
 */
const de_UpdateAssessmentStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAssessmentStatusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.auditmanager#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.auditmanager#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.auditmanager#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.auditmanager#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UpdateControlCommand
 */
export const de_UpdateControlCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateControlCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateControlCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.control != null) {
    contents.control = de_Control(data.control, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateControlCommandError
 */
const de_UpdateControlCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateControlCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.auditmanager#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.auditmanager#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.auditmanager#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UpdateSettingsCommand
 */
export const de_UpdateSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateSettingsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.settings != null) {
    contents.settings = de_Settings(data.settings, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateSettingsCommandError
 */
const de_UpdateSettingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSettingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.auditmanager#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.auditmanager#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ValidateAssessmentReportIntegrityCommand
 */
export const de_ValidateAssessmentReportIntegrityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ValidateAssessmentReportIntegrityCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ValidateAssessmentReportIntegrityCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.signatureAlgorithm != null) {
    contents.signatureAlgorithm = __expectString(data.signatureAlgorithm);
  }
  if (data.signatureDateTime != null) {
    contents.signatureDateTime = __expectString(data.signatureDateTime);
  }
  if (data.signatureKeyId != null) {
    contents.signatureKeyId = __expectString(data.signatureKeyId);
  }
  if (data.signatureValid != null) {
    contents.signatureValid = __expectBoolean(data.signatureValid);
  }
  if (data.validationErrors != null) {
    contents.validationErrors = de_ValidationErrors(data.validationErrors, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ValidateAssessmentReportIntegrityCommandError
 */
const de_ValidateAssessmentReportIntegrityCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ValidateAssessmentReportIntegrityCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.auditmanager#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.auditmanager#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.auditmanager#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

const map = __map;
/**
 * deserializeAws_restJson1AccessDeniedExceptionRes
 */
const de_AccessDeniedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new AccessDeniedException({
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
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
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
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  if (data.resourceId != null) {
    contents.resourceId = __expectString(data.resourceId);
  }
  if (data.resourceType != null) {
    contents.resourceType = __expectString(data.resourceType);
  }
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
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
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
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
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
  if (data.fields != null) {
    contents.fields = de_ValidationExceptionFieldList(data.fields, context);
  }
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  if (data.reason != null) {
    contents.reason = __expectString(data.reason);
  }
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * serializeAws_restJson1AssessmentReportsDestination
 */
const se_AssessmentReportsDestination = (input: AssessmentReportsDestination, context: __SerdeContext): any => {
  return {
    ...(input.destination != null && { destination: input.destination }),
    ...(input.destinationType != null && { destinationType: input.destinationType }),
  };
};

/**
 * serializeAws_restJson1AWSAccount
 */
const se_AWSAccount = (input: AWSAccount, context: __SerdeContext): any => {
  return {
    ...(input.emailAddress != null && { emailAddress: input.emailAddress }),
    ...(input.id != null && { id: input.id }),
    ...(input.name != null && { name: input.name }),
  };
};

/**
 * serializeAws_restJson1AWSAccounts
 */
const se_AWSAccounts = (input: AWSAccount[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_AWSAccount(entry, context);
    });
};

/**
 * serializeAws_restJson1AWSService
 */
const se_AWSService = (input: AWSService, context: __SerdeContext): any => {
  return {
    ...(input.serviceName != null && { serviceName: input.serviceName }),
  };
};

/**
 * serializeAws_restJson1AWSServices
 */
const se_AWSServices = (input: AWSService[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_AWSService(entry, context);
    });
};

/**
 * serializeAws_restJson1ControlMappingSource
 */
const se_ControlMappingSource = (input: ControlMappingSource, context: __SerdeContext): any => {
  return {
    ...(input.sourceDescription != null && { sourceDescription: input.sourceDescription }),
    ...(input.sourceFrequency != null && { sourceFrequency: input.sourceFrequency }),
    ...(input.sourceId != null && { sourceId: input.sourceId }),
    ...(input.sourceKeyword != null && { sourceKeyword: se_SourceKeyword(input.sourceKeyword, context) }),
    ...(input.sourceName != null && { sourceName: input.sourceName }),
    ...(input.sourceSetUpOption != null && { sourceSetUpOption: input.sourceSetUpOption }),
    ...(input.sourceType != null && { sourceType: input.sourceType }),
    ...(input.troubleshootingText != null && { troubleshootingText: input.troubleshootingText }),
  };
};

/**
 * serializeAws_restJson1ControlMappingSources
 */
const se_ControlMappingSources = (input: ControlMappingSource[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ControlMappingSource(entry, context);
    });
};

/**
 * serializeAws_restJson1CreateAssessmentFrameworkControl
 */
const se_CreateAssessmentFrameworkControl = (input: CreateAssessmentFrameworkControl, context: __SerdeContext): any => {
  return {
    ...(input.id != null && { id: input.id }),
  };
};

/**
 * serializeAws_restJson1CreateAssessmentFrameworkControls
 */
const se_CreateAssessmentFrameworkControls = (
  input: CreateAssessmentFrameworkControl[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_CreateAssessmentFrameworkControl(entry, context);
    });
};

/**
 * serializeAws_restJson1CreateAssessmentFrameworkControlSet
 */
const se_CreateAssessmentFrameworkControlSet = (
  input: CreateAssessmentFrameworkControlSet,
  context: __SerdeContext
): any => {
  return {
    ...(input.controls != null && { controls: se_CreateAssessmentFrameworkControls(input.controls, context) }),
    ...(input.name != null && { name: input.name }),
  };
};

/**
 * serializeAws_restJson1CreateAssessmentFrameworkControlSets
 */
const se_CreateAssessmentFrameworkControlSets = (
  input: CreateAssessmentFrameworkControlSet[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_CreateAssessmentFrameworkControlSet(entry, context);
    });
};

/**
 * serializeAws_restJson1CreateControlMappingSource
 */
const se_CreateControlMappingSource = (input: CreateControlMappingSource, context: __SerdeContext): any => {
  return {
    ...(input.sourceDescription != null && { sourceDescription: input.sourceDescription }),
    ...(input.sourceFrequency != null && { sourceFrequency: input.sourceFrequency }),
    ...(input.sourceKeyword != null && { sourceKeyword: se_SourceKeyword(input.sourceKeyword, context) }),
    ...(input.sourceName != null && { sourceName: input.sourceName }),
    ...(input.sourceSetUpOption != null && { sourceSetUpOption: input.sourceSetUpOption }),
    ...(input.sourceType != null && { sourceType: input.sourceType }),
    ...(input.troubleshootingText != null && { troubleshootingText: input.troubleshootingText }),
  };
};

/**
 * serializeAws_restJson1CreateControlMappingSources
 */
const se_CreateControlMappingSources = (input: CreateControlMappingSource[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_CreateControlMappingSource(entry, context);
    });
};

/**
 * serializeAws_restJson1CreateDelegationRequest
 */
const se_CreateDelegationRequest = (input: CreateDelegationRequest, context: __SerdeContext): any => {
  return {
    ...(input.comment != null && { comment: input.comment }),
    ...(input.controlSetId != null && { controlSetId: input.controlSetId }),
    ...(input.roleArn != null && { roleArn: input.roleArn }),
    ...(input.roleType != null && { roleType: input.roleType }),
  };
};

/**
 * serializeAws_restJson1CreateDelegationRequests
 */
const se_CreateDelegationRequests = (input: CreateDelegationRequest[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_CreateDelegationRequest(entry, context);
    });
};

/**
 * serializeAws_restJson1DelegationIds
 */
const se_DelegationIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1DeregistrationPolicy
 */
const se_DeregistrationPolicy = (input: DeregistrationPolicy, context: __SerdeContext): any => {
  return {
    ...(input.deleteResources != null && { deleteResources: input.deleteResources }),
  };
};

/**
 * serializeAws_restJson1EvidenceIds
 */
const se_EvidenceIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1ManualEvidence
 */
const se_ManualEvidence = (input: ManualEvidence, context: __SerdeContext): any => {
  return {
    ...(input.s3ResourcePath != null && { s3ResourcePath: input.s3ResourcePath }),
  };
};

/**
 * serializeAws_restJson1ManualEvidenceList
 */
const se_ManualEvidenceList = (input: ManualEvidence[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ManualEvidence(entry, context);
    });
};

/**
 * serializeAws_restJson1Role
 */
const se_Role = (input: Role, context: __SerdeContext): any => {
  return {
    ...(input.roleArn != null && { roleArn: input.roleArn }),
    ...(input.roleType != null && { roleType: input.roleType }),
  };
};

/**
 * serializeAws_restJson1Roles
 */
const se_Roles = (input: Role[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Role(entry, context);
    });
};

/**
 * serializeAws_restJson1Scope
 */
const se_Scope = (input: Scope, context: __SerdeContext): any => {
  return {
    ...(input.awsAccounts != null && { awsAccounts: se_AWSAccounts(input.awsAccounts, context) }),
    ...(input.awsServices != null && { awsServices: se_AWSServices(input.awsServices, context) }),
  };
};

/**
 * serializeAws_restJson1SourceKeyword
 */
const se_SourceKeyword = (input: SourceKeyword, context: __SerdeContext): any => {
  return {
    ...(input.keywordInputType != null && { keywordInputType: input.keywordInputType }),
    ...(input.keywordValue != null && { keywordValue: input.keywordValue }),
  };
};

/**
 * serializeAws_restJson1TagMap
 */
const se_TagMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1UpdateAssessmentFrameworkControlSet
 */
const se_UpdateAssessmentFrameworkControlSet = (
  input: UpdateAssessmentFrameworkControlSet,
  context: __SerdeContext
): any => {
  return {
    ...(input.controls != null && { controls: se_CreateAssessmentFrameworkControls(input.controls, context) }),
    ...(input.id != null && { id: input.id }),
    ...(input.name != null && { name: input.name }),
  };
};

/**
 * serializeAws_restJson1UpdateAssessmentFrameworkControlSets
 */
const se_UpdateAssessmentFrameworkControlSets = (
  input: UpdateAssessmentFrameworkControlSet[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_UpdateAssessmentFrameworkControlSet(entry, context);
    });
};

/**
 * deserializeAws_restJson1Assessment
 */
const de_Assessment = (output: any, context: __SerdeContext): Assessment => {
  return {
    arn: __expectString(output.arn),
    awsAccount: output.awsAccount != null ? de_AWSAccount(output.awsAccount, context) : undefined,
    framework: output.framework != null ? de_AssessmentFramework(output.framework, context) : undefined,
    metadata: output.metadata != null ? de_AssessmentMetadata(output.metadata, context) : undefined,
    tags: output.tags != null ? de_TagMap(output.tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1AssessmentControl
 */
const de_AssessmentControl = (output: any, context: __SerdeContext): AssessmentControl => {
  return {
    assessmentReportEvidenceCount: __expectInt32(output.assessmentReportEvidenceCount),
    comments: output.comments != null ? de_ControlComments(output.comments, context) : undefined,
    description: __expectString(output.description),
    evidenceCount: __expectInt32(output.evidenceCount),
    evidenceSources: output.evidenceSources != null ? de_EvidenceSources(output.evidenceSources, context) : undefined,
    id: __expectString(output.id),
    name: __expectString(output.name),
    response: __expectString(output.response),
    status: __expectString(output.status),
  } as any;
};

/**
 * deserializeAws_restJson1AssessmentControls
 */
const de_AssessmentControls = (output: any, context: __SerdeContext): AssessmentControl[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AssessmentControl(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AssessmentControlSet
 */
const de_AssessmentControlSet = (output: any, context: __SerdeContext): AssessmentControlSet => {
  return {
    controls: output.controls != null ? de_AssessmentControls(output.controls, context) : undefined,
    delegations: output.delegations != null ? de_Delegations(output.delegations, context) : undefined,
    description: __expectString(output.description),
    id: __expectString(output.id),
    manualEvidenceCount: __expectInt32(output.manualEvidenceCount),
    roles: output.roles != null ? de_Roles(output.roles, context) : undefined,
    status: __expectString(output.status),
    systemEvidenceCount: __expectInt32(output.systemEvidenceCount),
  } as any;
};

/**
 * deserializeAws_restJson1AssessmentControlSets
 */
const de_AssessmentControlSets = (output: any, context: __SerdeContext): AssessmentControlSet[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AssessmentControlSet(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AssessmentEvidenceFolder
 */
const de_AssessmentEvidenceFolder = (output: any, context: __SerdeContext): AssessmentEvidenceFolder => {
  return {
    assessmentId: __expectString(output.assessmentId),
    assessmentReportSelectionCount: __expectInt32(output.assessmentReportSelectionCount),
    author: __expectString(output.author),
    controlId: __expectString(output.controlId),
    controlName: __expectString(output.controlName),
    controlSetId: __expectString(output.controlSetId),
    dataSource: __expectString(output.dataSource),
    date: output.date != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.date))) : undefined,
    evidenceAwsServiceSourceCount: __expectInt32(output.evidenceAwsServiceSourceCount),
    evidenceByTypeComplianceCheckCount: __expectInt32(output.evidenceByTypeComplianceCheckCount),
    evidenceByTypeComplianceCheckIssuesCount: __expectInt32(output.evidenceByTypeComplianceCheckIssuesCount),
    evidenceByTypeConfigurationDataCount: __expectInt32(output.evidenceByTypeConfigurationDataCount),
    evidenceByTypeManualCount: __expectInt32(output.evidenceByTypeManualCount),
    evidenceByTypeUserActivityCount: __expectInt32(output.evidenceByTypeUserActivityCount),
    evidenceResourcesIncludedCount: __expectInt32(output.evidenceResourcesIncludedCount),
    id: __expectString(output.id),
    name: __expectString(output.name),
    totalEvidence: __expectInt32(output.totalEvidence),
  } as any;
};

/**
 * deserializeAws_restJson1AssessmentEvidenceFolders
 */
const de_AssessmentEvidenceFolders = (output: any, context: __SerdeContext): AssessmentEvidenceFolder[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AssessmentEvidenceFolder(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AssessmentFramework
 */
const de_AssessmentFramework = (output: any, context: __SerdeContext): AssessmentFramework => {
  return {
    arn: __expectString(output.arn),
    controlSets: output.controlSets != null ? de_AssessmentControlSets(output.controlSets, context) : undefined,
    id: __expectString(output.id),
    metadata: output.metadata != null ? de_FrameworkMetadata(output.metadata, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1AssessmentFrameworkMetadata
 */
const de_AssessmentFrameworkMetadata = (output: any, context: __SerdeContext): AssessmentFrameworkMetadata => {
  return {
    arn: __expectString(output.arn),
    complianceType: __expectString(output.complianceType),
    controlSetsCount: __expectInt32(output.controlSetsCount),
    controlsCount: __expectInt32(output.controlsCount),
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt))) : undefined,
    description: __expectString(output.description),
    id: __expectString(output.id),
    lastUpdatedAt:
      output.lastUpdatedAt != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdatedAt)))
        : undefined,
    logo: __expectString(output.logo),
    name: __expectString(output.name),
    type: __expectString(output.type),
  } as any;
};

/**
 * deserializeAws_restJson1AssessmentFrameworkShareRequest
 */
const de_AssessmentFrameworkShareRequest = (output: any, context: __SerdeContext): AssessmentFrameworkShareRequest => {
  return {
    comment: __expectString(output.comment),
    complianceType: __expectString(output.complianceType),
    creationTime:
      output.creationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationTime)))
        : undefined,
    customControlsCount: __expectInt32(output.customControlsCount),
    destinationAccount: __expectString(output.destinationAccount),
    destinationRegion: __expectString(output.destinationRegion),
    expirationTime:
      output.expirationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.expirationTime)))
        : undefined,
    frameworkDescription: __expectString(output.frameworkDescription),
    frameworkId: __expectString(output.frameworkId),
    frameworkName: __expectString(output.frameworkName),
    id: __expectString(output.id),
    lastUpdated:
      output.lastUpdated != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdated)))
        : undefined,
    sourceAccount: __expectString(output.sourceAccount),
    standardControlsCount: __expectInt32(output.standardControlsCount),
    status: __expectString(output.status),
  } as any;
};

/**
 * deserializeAws_restJson1AssessmentFrameworkShareRequestList
 */
const de_AssessmentFrameworkShareRequestList = (
  output: any,
  context: __SerdeContext
): AssessmentFrameworkShareRequest[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AssessmentFrameworkShareRequest(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AssessmentMetadata
 */
const de_AssessmentMetadata = (output: any, context: __SerdeContext): AssessmentMetadata => {
  return {
    assessmentReportsDestination:
      output.assessmentReportsDestination != null
        ? de_AssessmentReportsDestination(output.assessmentReportsDestination, context)
        : undefined,
    complianceType: __expectString(output.complianceType),
    creationTime:
      output.creationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationTime)))
        : undefined,
    delegations: output.delegations != null ? de_Delegations(output.delegations, context) : undefined,
    description: __expectString(output.description),
    id: __expectString(output.id),
    lastUpdated:
      output.lastUpdated != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdated)))
        : undefined,
    name: __expectString(output.name),
    roles: output.roles != null ? de_Roles(output.roles, context) : undefined,
    scope: output.scope != null ? de_Scope(output.scope, context) : undefined,
    status: __expectString(output.status),
  } as any;
};

/**
 * deserializeAws_restJson1AssessmentMetadataItem
 */
const de_AssessmentMetadataItem = (output: any, context: __SerdeContext): AssessmentMetadataItem => {
  return {
    complianceType: __expectString(output.complianceType),
    creationTime:
      output.creationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationTime)))
        : undefined,
    delegations: output.delegations != null ? de_Delegations(output.delegations, context) : undefined,
    id: __expectString(output.id),
    lastUpdated:
      output.lastUpdated != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdated)))
        : undefined,
    name: __expectString(output.name),
    roles: output.roles != null ? de_Roles(output.roles, context) : undefined,
    status: __expectString(output.status),
  } as any;
};

/**
 * deserializeAws_restJson1AssessmentReport
 */
const de_AssessmentReport = (output: any, context: __SerdeContext): AssessmentReport => {
  return {
    assessmentId: __expectString(output.assessmentId),
    assessmentName: __expectString(output.assessmentName),
    author: __expectString(output.author),
    awsAccountId: __expectString(output.awsAccountId),
    creationTime:
      output.creationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationTime)))
        : undefined,
    description: __expectString(output.description),
    id: __expectString(output.id),
    name: __expectString(output.name),
    status: __expectString(output.status),
  } as any;
};

/**
 * deserializeAws_restJson1AssessmentReportEvidenceError
 */
const de_AssessmentReportEvidenceError = (output: any, context: __SerdeContext): AssessmentReportEvidenceError => {
  return {
    errorCode: __expectString(output.errorCode),
    errorMessage: __expectString(output.errorMessage),
    evidenceId: __expectString(output.evidenceId),
  } as any;
};

/**
 * deserializeAws_restJson1AssessmentReportEvidenceErrors
 */
const de_AssessmentReportEvidenceErrors = (output: any, context: __SerdeContext): AssessmentReportEvidenceError[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AssessmentReportEvidenceError(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AssessmentReportMetadata
 */
const de_AssessmentReportMetadata = (output: any, context: __SerdeContext): AssessmentReportMetadata => {
  return {
    assessmentId: __expectString(output.assessmentId),
    assessmentName: __expectString(output.assessmentName),
    author: __expectString(output.author),
    creationTime:
      output.creationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationTime)))
        : undefined,
    description: __expectString(output.description),
    id: __expectString(output.id),
    name: __expectString(output.name),
    status: __expectString(output.status),
  } as any;
};

/**
 * deserializeAws_restJson1AssessmentReportsDestination
 */
const de_AssessmentReportsDestination = (output: any, context: __SerdeContext): AssessmentReportsDestination => {
  return {
    destination: __expectString(output.destination),
    destinationType: __expectString(output.destinationType),
  } as any;
};

/**
 * deserializeAws_restJson1AssessmentReportsMetadata
 */
const de_AssessmentReportsMetadata = (output: any, context: __SerdeContext): AssessmentReportMetadata[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AssessmentReportMetadata(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AWSAccount
 */
const de_AWSAccount = (output: any, context: __SerdeContext): AWSAccount => {
  return {
    emailAddress: __expectString(output.emailAddress),
    id: __expectString(output.id),
    name: __expectString(output.name),
  } as any;
};

/**
 * deserializeAws_restJson1AWSAccounts
 */
const de_AWSAccounts = (output: any, context: __SerdeContext): AWSAccount[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AWSAccount(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AWSService
 */
const de_AWSService = (output: any, context: __SerdeContext): AWSService => {
  return {
    serviceName: __expectString(output.serviceName),
  } as any;
};

/**
 * deserializeAws_restJson1AWSServices
 */
const de_AWSServices = (output: any, context: __SerdeContext): AWSService[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AWSService(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1BatchCreateDelegationByAssessmentError
 */
const de_BatchCreateDelegationByAssessmentError = (
  output: any,
  context: __SerdeContext
): BatchCreateDelegationByAssessmentError => {
  return {
    createDelegationRequest:
      output.createDelegationRequest != null
        ? de_CreateDelegationRequest(output.createDelegationRequest, context)
        : undefined,
    errorCode: __expectString(output.errorCode),
    errorMessage: __expectString(output.errorMessage),
  } as any;
};

/**
 * deserializeAws_restJson1BatchCreateDelegationByAssessmentErrors
 */
const de_BatchCreateDelegationByAssessmentErrors = (
  output: any,
  context: __SerdeContext
): BatchCreateDelegationByAssessmentError[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_BatchCreateDelegationByAssessmentError(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1BatchDeleteDelegationByAssessmentError
 */
const de_BatchDeleteDelegationByAssessmentError = (
  output: any,
  context: __SerdeContext
): BatchDeleteDelegationByAssessmentError => {
  return {
    delegationId: __expectString(output.delegationId),
    errorCode: __expectString(output.errorCode),
    errorMessage: __expectString(output.errorMessage),
  } as any;
};

/**
 * deserializeAws_restJson1BatchDeleteDelegationByAssessmentErrors
 */
const de_BatchDeleteDelegationByAssessmentErrors = (
  output: any,
  context: __SerdeContext
): BatchDeleteDelegationByAssessmentError[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_BatchDeleteDelegationByAssessmentError(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1BatchImportEvidenceToAssessmentControlError
 */
const de_BatchImportEvidenceToAssessmentControlError = (
  output: any,
  context: __SerdeContext
): BatchImportEvidenceToAssessmentControlError => {
  return {
    errorCode: __expectString(output.errorCode),
    errorMessage: __expectString(output.errorMessage),
    manualEvidence: output.manualEvidence != null ? de_ManualEvidence(output.manualEvidence, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1BatchImportEvidenceToAssessmentControlErrors
 */
const de_BatchImportEvidenceToAssessmentControlErrors = (
  output: any,
  context: __SerdeContext
): BatchImportEvidenceToAssessmentControlError[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_BatchImportEvidenceToAssessmentControlError(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ChangeLog
 */
const de_ChangeLog = (output: any, context: __SerdeContext): ChangeLog => {
  return {
    action: __expectString(output.action),
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt))) : undefined,
    createdBy: __expectString(output.createdBy),
    objectName: __expectString(output.objectName),
    objectType: __expectString(output.objectType),
  } as any;
};

/**
 * deserializeAws_restJson1ChangeLogs
 */
const de_ChangeLogs = (output: any, context: __SerdeContext): ChangeLog[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ChangeLog(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Control
 */
const de_Control = (output: any, context: __SerdeContext): Control => {
  return {
    actionPlanInstructions: __expectString(output.actionPlanInstructions),
    actionPlanTitle: __expectString(output.actionPlanTitle),
    arn: __expectString(output.arn),
    controlMappingSources:
      output.controlMappingSources != null
        ? de_ControlMappingSources(output.controlMappingSources, context)
        : undefined,
    controlSources: __expectString(output.controlSources),
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt))) : undefined,
    createdBy: __expectString(output.createdBy),
    description: __expectString(output.description),
    id: __expectString(output.id),
    lastUpdatedAt:
      output.lastUpdatedAt != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdatedAt)))
        : undefined,
    lastUpdatedBy: __expectString(output.lastUpdatedBy),
    name: __expectString(output.name),
    tags: output.tags != null ? de_TagMap(output.tags, context) : undefined,
    testingInformation: __expectString(output.testingInformation),
    type: __expectString(output.type),
  } as any;
};

/**
 * deserializeAws_restJson1ControlComment
 */
const de_ControlComment = (output: any, context: __SerdeContext): ControlComment => {
  return {
    authorName: __expectString(output.authorName),
    commentBody: __expectString(output.commentBody),
    postedDate:
      output.postedDate != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.postedDate))) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ControlComments
 */
const de_ControlComments = (output: any, context: __SerdeContext): ControlComment[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ControlComment(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ControlDomainInsights
 */
const de_ControlDomainInsights = (output: any, context: __SerdeContext): ControlDomainInsights => {
  return {
    controlsCountByNoncompliantEvidence: __expectInt32(output.controlsCountByNoncompliantEvidence),
    evidenceInsights:
      output.evidenceInsights != null ? de_EvidenceInsights(output.evidenceInsights, context) : undefined,
    id: __expectString(output.id),
    lastUpdated:
      output.lastUpdated != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdated)))
        : undefined,
    name: __expectString(output.name),
    totalControlsCount: __expectInt32(output.totalControlsCount),
  } as any;
};

/**
 * deserializeAws_restJson1ControlDomainInsightsList
 */
const de_ControlDomainInsightsList = (output: any, context: __SerdeContext): ControlDomainInsights[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ControlDomainInsights(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ControlInsightsMetadata
 */
const de_ControlInsightsMetadata = (output: any, context: __SerdeContext): ControlInsightsMetadataItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ControlInsightsMetadataItem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ControlInsightsMetadataByAssessment
 */
const de_ControlInsightsMetadataByAssessment = (
  output: any,
  context: __SerdeContext
): ControlInsightsMetadataByAssessmentItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ControlInsightsMetadataByAssessmentItem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ControlInsightsMetadataByAssessmentItem
 */
const de_ControlInsightsMetadataByAssessmentItem = (
  output: any,
  context: __SerdeContext
): ControlInsightsMetadataByAssessmentItem => {
  return {
    controlSetName: __expectString(output.controlSetName),
    evidenceInsights:
      output.evidenceInsights != null ? de_EvidenceInsights(output.evidenceInsights, context) : undefined,
    id: __expectString(output.id),
    lastUpdated:
      output.lastUpdated != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdated)))
        : undefined,
    name: __expectString(output.name),
  } as any;
};

/**
 * deserializeAws_restJson1ControlInsightsMetadataItem
 */
const de_ControlInsightsMetadataItem = (output: any, context: __SerdeContext): ControlInsightsMetadataItem => {
  return {
    evidenceInsights:
      output.evidenceInsights != null ? de_EvidenceInsights(output.evidenceInsights, context) : undefined,
    id: __expectString(output.id),
    lastUpdated:
      output.lastUpdated != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdated)))
        : undefined,
    name: __expectString(output.name),
  } as any;
};

/**
 * deserializeAws_restJson1ControlMappingSource
 */
const de_ControlMappingSource = (output: any, context: __SerdeContext): ControlMappingSource => {
  return {
    sourceDescription: __expectString(output.sourceDescription),
    sourceFrequency: __expectString(output.sourceFrequency),
    sourceId: __expectString(output.sourceId),
    sourceKeyword: output.sourceKeyword != null ? de_SourceKeyword(output.sourceKeyword, context) : undefined,
    sourceName: __expectString(output.sourceName),
    sourceSetUpOption: __expectString(output.sourceSetUpOption),
    sourceType: __expectString(output.sourceType),
    troubleshootingText: __expectString(output.troubleshootingText),
  } as any;
};

/**
 * deserializeAws_restJson1ControlMappingSources
 */
const de_ControlMappingSources = (output: any, context: __SerdeContext): ControlMappingSource[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ControlMappingSource(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ControlMetadata
 */
const de_ControlMetadata = (output: any, context: __SerdeContext): ControlMetadata => {
  return {
    arn: __expectString(output.arn),
    controlSources: __expectString(output.controlSources),
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt))) : undefined,
    id: __expectString(output.id),
    lastUpdatedAt:
      output.lastUpdatedAt != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdatedAt)))
        : undefined,
    name: __expectString(output.name),
  } as any;
};

/**
 * deserializeAws_restJson1ControlMetadataList
 */
const de_ControlMetadataList = (output: any, context: __SerdeContext): ControlMetadata[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ControlMetadata(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Controls
 */
const de_Controls = (output: any, context: __SerdeContext): Control[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Control(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ControlSet
 */
const de_ControlSet = (output: any, context: __SerdeContext): ControlSet => {
  return {
    controls: output.controls != null ? de_Controls(output.controls, context) : undefined,
    id: __expectString(output.id),
    name: __expectString(output.name),
  } as any;
};

/**
 * deserializeAws_restJson1ControlSets
 */
const de_ControlSets = (output: any, context: __SerdeContext): ControlSet[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ControlSet(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1CreateDelegationRequest
 */
const de_CreateDelegationRequest = (output: any, context: __SerdeContext): CreateDelegationRequest => {
  return {
    comment: __expectString(output.comment),
    controlSetId: __expectString(output.controlSetId),
    roleArn: __expectString(output.roleArn),
    roleType: __expectString(output.roleType),
  } as any;
};

/**
 * deserializeAws_restJson1Delegation
 */
const de_Delegation = (output: any, context: __SerdeContext): Delegation => {
  return {
    assessmentId: __expectString(output.assessmentId),
    assessmentName: __expectString(output.assessmentName),
    comment: __expectString(output.comment),
    controlSetId: __expectString(output.controlSetId),
    createdBy: __expectString(output.createdBy),
    creationTime:
      output.creationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationTime)))
        : undefined,
    id: __expectString(output.id),
    lastUpdated:
      output.lastUpdated != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdated)))
        : undefined,
    roleArn: __expectString(output.roleArn),
    roleType: __expectString(output.roleType),
    status: __expectString(output.status),
  } as any;
};

/**
 * deserializeAws_restJson1DelegationMetadata
 */
const de_DelegationMetadata = (output: any, context: __SerdeContext): DelegationMetadata => {
  return {
    assessmentId: __expectString(output.assessmentId),
    assessmentName: __expectString(output.assessmentName),
    controlSetName: __expectString(output.controlSetName),
    creationTime:
      output.creationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationTime)))
        : undefined,
    id: __expectString(output.id),
    roleArn: __expectString(output.roleArn),
    status: __expectString(output.status),
  } as any;
};

/**
 * deserializeAws_restJson1DelegationMetadataList
 */
const de_DelegationMetadataList = (output: any, context: __SerdeContext): DelegationMetadata[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DelegationMetadata(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Delegations
 */
const de_Delegations = (output: any, context: __SerdeContext): Delegation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Delegation(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1DeregistrationPolicy
 */
const de_DeregistrationPolicy = (output: any, context: __SerdeContext): DeregistrationPolicy => {
  return {
    deleteResources: __expectString(output.deleteResources),
  } as any;
};

/**
 * deserializeAws_restJson1Evidence
 */
const de_Evidence = (output: any, context: __SerdeContext): Evidence => {
  return {
    assessmentReportSelection: __expectString(output.assessmentReportSelection),
    attributes: output.attributes != null ? de_EvidenceAttributes(output.attributes, context) : undefined,
    awsAccountId: __expectString(output.awsAccountId),
    awsOrganization: __expectString(output.awsOrganization),
    complianceCheck: __expectString(output.complianceCheck),
    dataSource: __expectString(output.dataSource),
    eventName: __expectString(output.eventName),
    eventSource: __expectString(output.eventSource),
    evidenceAwsAccountId: __expectString(output.evidenceAwsAccountId),
    evidenceByType: __expectString(output.evidenceByType),
    evidenceFolderId: __expectString(output.evidenceFolderId),
    iamId: __expectString(output.iamId),
    id: __expectString(output.id),
    resourcesIncluded: output.resourcesIncluded != null ? de_Resources(output.resourcesIncluded, context) : undefined,
    time: output.time != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.time))) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1EvidenceAttributes
 */
const de_EvidenceAttributes = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1EvidenceFinderEnablement
 */
const de_EvidenceFinderEnablement = (output: any, context: __SerdeContext): EvidenceFinderEnablement => {
  return {
    backfillStatus: __expectString(output.backfillStatus),
    enablementStatus: __expectString(output.enablementStatus),
    error: __expectString(output.error),
    eventDataStoreArn: __expectString(output.eventDataStoreArn),
  } as any;
};

/**
 * deserializeAws_restJson1EvidenceIds
 */
const de_EvidenceIds = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_restJson1EvidenceInsights
 */
const de_EvidenceInsights = (output: any, context: __SerdeContext): EvidenceInsights => {
  return {
    compliantEvidenceCount: __expectInt32(output.compliantEvidenceCount),
    inconclusiveEvidenceCount: __expectInt32(output.inconclusiveEvidenceCount),
    noncompliantEvidenceCount: __expectInt32(output.noncompliantEvidenceCount),
  } as any;
};

/**
 * deserializeAws_restJson1EvidenceList
 */
const de_EvidenceList = (output: any, context: __SerdeContext): Evidence[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Evidence(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1EvidenceSources
 */
const de_EvidenceSources = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Framework
 */
const de_Framework = (output: any, context: __SerdeContext): Framework => {
  return {
    arn: __expectString(output.arn),
    complianceType: __expectString(output.complianceType),
    controlSets: output.controlSets != null ? de_ControlSets(output.controlSets, context) : undefined,
    controlSources: __expectString(output.controlSources),
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt))) : undefined,
    createdBy: __expectString(output.createdBy),
    description: __expectString(output.description),
    id: __expectString(output.id),
    lastUpdatedAt:
      output.lastUpdatedAt != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdatedAt)))
        : undefined,
    lastUpdatedBy: __expectString(output.lastUpdatedBy),
    logo: __expectString(output.logo),
    name: __expectString(output.name),
    tags: output.tags != null ? de_TagMap(output.tags, context) : undefined,
    type: __expectString(output.type),
  } as any;
};

/**
 * deserializeAws_restJson1FrameworkMetadata
 */
const de_FrameworkMetadata = (output: any, context: __SerdeContext): FrameworkMetadata => {
  return {
    complianceType: __expectString(output.complianceType),
    description: __expectString(output.description),
    logo: __expectString(output.logo),
    name: __expectString(output.name),
  } as any;
};

/**
 * deserializeAws_restJson1FrameworkMetadataList
 */
const de_FrameworkMetadataList = (output: any, context: __SerdeContext): AssessmentFrameworkMetadata[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AssessmentFrameworkMetadata(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Insights
 */
const de_Insights = (output: any, context: __SerdeContext): Insights => {
  return {
    activeAssessmentsCount: __expectInt32(output.activeAssessmentsCount),
    assessmentControlsCountByNoncompliantEvidence: __expectInt32(output.assessmentControlsCountByNoncompliantEvidence),
    compliantEvidenceCount: __expectInt32(output.compliantEvidenceCount),
    inconclusiveEvidenceCount: __expectInt32(output.inconclusiveEvidenceCount),
    lastUpdated:
      output.lastUpdated != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdated)))
        : undefined,
    noncompliantEvidenceCount: __expectInt32(output.noncompliantEvidenceCount),
    totalAssessmentControlsCount: __expectInt32(output.totalAssessmentControlsCount),
  } as any;
};

/**
 * deserializeAws_restJson1InsightsByAssessment
 */
const de_InsightsByAssessment = (output: any, context: __SerdeContext): InsightsByAssessment => {
  return {
    assessmentControlsCountByNoncompliantEvidence: __expectInt32(output.assessmentControlsCountByNoncompliantEvidence),
    compliantEvidenceCount: __expectInt32(output.compliantEvidenceCount),
    inconclusiveEvidenceCount: __expectInt32(output.inconclusiveEvidenceCount),
    lastUpdated:
      output.lastUpdated != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdated)))
        : undefined,
    noncompliantEvidenceCount: __expectInt32(output.noncompliantEvidenceCount),
    totalAssessmentControlsCount: __expectInt32(output.totalAssessmentControlsCount),
  } as any;
};

/**
 * deserializeAws_restJson1Keywords
 */
const de_Keywords = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ListAssessmentMetadata
 */
const de_ListAssessmentMetadata = (output: any, context: __SerdeContext): AssessmentMetadataItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AssessmentMetadataItem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ManualEvidence
 */
const de_ManualEvidence = (output: any, context: __SerdeContext): ManualEvidence => {
  return {
    s3ResourcePath: __expectString(output.s3ResourcePath),
  } as any;
};

/**
 * deserializeAws_restJson1Notification
 */
const de_Notification = (output: any, context: __SerdeContext): Notification => {
  return {
    assessmentId: __expectString(output.assessmentId),
    assessmentName: __expectString(output.assessmentName),
    controlSetId: __expectString(output.controlSetId),
    controlSetName: __expectString(output.controlSetName),
    description: __expectString(output.description),
    eventTime:
      output.eventTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.eventTime))) : undefined,
    id: __expectString(output.id),
    source: __expectString(output.source),
  } as any;
};

/**
 * deserializeAws_restJson1Notifications
 */
const de_Notifications = (output: any, context: __SerdeContext): Notification[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Notification(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Resource
 */
const de_Resource = (output: any, context: __SerdeContext): Resource => {
  return {
    arn: __expectString(output.arn),
    complianceCheck: __expectString(output.complianceCheck),
    value: __expectString(output.value),
  } as any;
};

/**
 * deserializeAws_restJson1Resources
 */
const de_Resources = (output: any, context: __SerdeContext): Resource[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Resource(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Role
 */
const de_Role = (output: any, context: __SerdeContext): Role => {
  return {
    roleArn: __expectString(output.roleArn),
    roleType: __expectString(output.roleType),
  } as any;
};

/**
 * deserializeAws_restJson1Roles
 */
const de_Roles = (output: any, context: __SerdeContext): Role[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Role(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Scope
 */
const de_Scope = (output: any, context: __SerdeContext): Scope => {
  return {
    awsAccounts: output.awsAccounts != null ? de_AWSAccounts(output.awsAccounts, context) : undefined,
    awsServices: output.awsServices != null ? de_AWSServices(output.awsServices, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ServiceMetadata
 */
const de_ServiceMetadata = (output: any, context: __SerdeContext): ServiceMetadata => {
  return {
    category: __expectString(output.category),
    description: __expectString(output.description),
    displayName: __expectString(output.displayName),
    name: __expectString(output.name),
  } as any;
};

/**
 * deserializeAws_restJson1ServiceMetadataList
 */
const de_ServiceMetadataList = (output: any, context: __SerdeContext): ServiceMetadata[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ServiceMetadata(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Settings
 */
const de_Settings = (output: any, context: __SerdeContext): Settings => {
  return {
    defaultAssessmentReportsDestination:
      output.defaultAssessmentReportsDestination != null
        ? de_AssessmentReportsDestination(output.defaultAssessmentReportsDestination, context)
        : undefined,
    defaultProcessOwners:
      output.defaultProcessOwners != null ? de_Roles(output.defaultProcessOwners, context) : undefined,
    deregistrationPolicy:
      output.deregistrationPolicy != null ? de_DeregistrationPolicy(output.deregistrationPolicy, context) : undefined,
    evidenceFinderEnablement:
      output.evidenceFinderEnablement != null
        ? de_EvidenceFinderEnablement(output.evidenceFinderEnablement, context)
        : undefined,
    isAwsOrgEnabled: __expectBoolean(output.isAwsOrgEnabled),
    kmsKey: __expectString(output.kmsKey),
    snsTopic: __expectString(output.snsTopic),
  } as any;
};

/**
 * deserializeAws_restJson1SourceKeyword
 */
const de_SourceKeyword = (output: any, context: __SerdeContext): SourceKeyword => {
  return {
    keywordInputType: __expectString(output.keywordInputType),
    keywordValue: __expectString(output.keywordValue),
  } as any;
};

/**
 * deserializeAws_restJson1TagMap
 */
const de_TagMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1URL
 */
const de_URL = (output: any, context: __SerdeContext): URL => {
  return {
    hyperlinkName: __expectString(output.hyperlinkName),
    link: __expectString(output.link),
  } as any;
};

/**
 * deserializeAws_restJson1ValidationErrors
 */
const de_ValidationErrors = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ValidationExceptionField
 */
const de_ValidationExceptionField = (output: any, context: __SerdeContext): ValidationExceptionField => {
  return {
    message: __expectString(output.message),
    name: __expectString(output.name),
  } as any;
};

/**
 * deserializeAws_restJson1ValidationExceptionFieldList
 */
const de_ValidationExceptionFieldList = (output: any, context: __SerdeContext): ValidationExceptionField[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ValidationExceptionField(entry, context);
    });
  return retVal;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId:
    output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"],
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (streamBody: any = new Uint8Array(), context: __SerdeContext): Promise<Uint8Array> => {
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody: any, context: __SerdeContext): Promise<string> =>
  collectBody(streamBody, context).then((body) => context.utf8Encoder(body));

const isSerializableHeaderValue = (value: any): boolean =>
  value !== undefined &&
  value !== null &&
  value !== "" &&
  (!Object.getOwnPropertyNames(value).includes("length") || value.length != 0) &&
  (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);

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
