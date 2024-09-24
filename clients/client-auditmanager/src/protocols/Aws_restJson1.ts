// smithy-typescript generated code
import { loadRestJsonErrorCode, parseJsonBody as parseBody, parseJsonErrorBody as parseErrorBody } from "@aws-sdk/core";
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
import {
  GetEvidenceFileUploadUrlCommandInput,
  GetEvidenceFileUploadUrlCommandOutput,
} from "../commands/GetEvidenceFileUploadUrlCommand";
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
  AssessmentReportMetadata,
  AssessmentReportsDestination,
  AWSAccount,
  AWSService,
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
  DefaultExportDestination,
  Delegation,
  DelegationMetadata,
  DeregistrationPolicy,
  Evidence,
  Framework,
  Insights,
  InsightsByAssessment,
  InternalServerException,
  ManualEvidence,
  Notification,
  ResourceNotFoundException,
  Role,
  Scope,
  ServiceQuotaExceededException,
  SourceKeyword,
  ThrottlingException,
  UpdateAssessmentFrameworkControlSet,
  ValidationException,
} from "../models/models_0";

/**
 * serializeAws_restJson1AssociateAssessmentReportEvidenceFolderCommand
 */
export const se_AssociateAssessmentReportEvidenceFolderCommand = async (
  input: AssociateAssessmentReportEvidenceFolderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/assessments/{assessmentId}/associateToAssessmentReport");
  b.p("assessmentId", () => input.assessmentId!, "{assessmentId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      evidenceFolderId: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1BatchAssociateAssessmentReportEvidenceCommand
 */
export const se_BatchAssociateAssessmentReportEvidenceCommand = async (
  input: BatchAssociateAssessmentReportEvidenceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/assessments/{assessmentId}/batchAssociateToAssessmentReport");
  b.p("assessmentId", () => input.assessmentId!, "{assessmentId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      evidenceFolderId: [],
      evidenceIds: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1BatchCreateDelegationByAssessmentCommand
 */
export const se_BatchCreateDelegationByAssessmentCommand = async (
  input: BatchCreateDelegationByAssessmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/assessments/{assessmentId}/delegations");
  b.p("assessmentId", () => input.assessmentId!, "{assessmentId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      createDelegationRequests: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1BatchDeleteDelegationByAssessmentCommand
 */
export const se_BatchDeleteDelegationByAssessmentCommand = async (
  input: BatchDeleteDelegationByAssessmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/assessments/{assessmentId}/delegations");
  b.p("assessmentId", () => input.assessmentId!, "{assessmentId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      delegationIds: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1BatchDisassociateAssessmentReportEvidenceCommand
 */
export const se_BatchDisassociateAssessmentReportEvidenceCommand = async (
  input: BatchDisassociateAssessmentReportEvidenceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/assessments/{assessmentId}/batchDisassociateFromAssessmentReport");
  b.p("assessmentId", () => input.assessmentId!, "{assessmentId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      evidenceFolderId: [],
      evidenceIds: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1BatchImportEvidenceToAssessmentControlCommand
 */
export const se_BatchImportEvidenceToAssessmentControlCommand = async (
  input: BatchImportEvidenceToAssessmentControlCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/assessments/{assessmentId}/controlSets/{controlSetId}/controls/{controlId}/evidence");
  b.p("assessmentId", () => input.assessmentId!, "{assessmentId}", false);
  b.p("controlSetId", () => input.controlSetId!, "{controlSetId}", false);
  b.p("controlId", () => input.controlId!, "{controlId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      manualEvidence: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateAssessmentCommand
 */
export const se_CreateAssessmentCommand = async (
  input: CreateAssessmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/assessments");
  let body: any;
  body = JSON.stringify(
    take(input, {
      assessmentReportsDestination: (_) => _json(_),
      description: [],
      frameworkId: [],
      name: [],
      roles: (_) => _json(_),
      scope: (_) => _json(_),
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateAssessmentFrameworkCommand
 */
export const se_CreateAssessmentFrameworkCommand = async (
  input: CreateAssessmentFrameworkCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/assessmentFrameworks");
  let body: any;
  body = JSON.stringify(
    take(input, {
      complianceType: [],
      controlSets: (_) => _json(_),
      description: [],
      name: [],
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateAssessmentReportCommand
 */
export const se_CreateAssessmentReportCommand = async (
  input: CreateAssessmentReportCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/assessments/{assessmentId}/reports");
  b.p("assessmentId", () => input.assessmentId!, "{assessmentId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      description: [],
      name: [],
      queryStatement: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateControlCommand
 */
export const se_CreateControlCommand = async (
  input: CreateControlCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/controls");
  let body: any;
  body = JSON.stringify(
    take(input, {
      actionPlanInstructions: [],
      actionPlanTitle: [],
      controlMappingSources: (_) => _json(_),
      description: [],
      name: [],
      tags: (_) => _json(_),
      testingInformation: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteAssessmentCommand
 */
export const se_DeleteAssessmentCommand = async (
  input: DeleteAssessmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/assessments/{assessmentId}");
  b.p("assessmentId", () => input.assessmentId!, "{assessmentId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteAssessmentFrameworkCommand
 */
export const se_DeleteAssessmentFrameworkCommand = async (
  input: DeleteAssessmentFrameworkCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/assessmentFrameworks/{frameworkId}");
  b.p("frameworkId", () => input.frameworkId!, "{frameworkId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteAssessmentFrameworkShareCommand
 */
export const se_DeleteAssessmentFrameworkShareCommand = async (
  input: DeleteAssessmentFrameworkShareCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/assessmentFrameworkShareRequests/{requestId}");
  b.p("requestId", () => input.requestId!, "{requestId}", false);
  const query: any = map({
    [_rT]: [, __expectNonNull(input[_rT]!, `requestType`)],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteAssessmentReportCommand
 */
export const se_DeleteAssessmentReportCommand = async (
  input: DeleteAssessmentReportCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/assessments/{assessmentId}/reports/{assessmentReportId}");
  b.p("assessmentId", () => input.assessmentId!, "{assessmentId}", false);
  b.p("assessmentReportId", () => input.assessmentReportId!, "{assessmentReportId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteControlCommand
 */
export const se_DeleteControlCommand = async (
  input: DeleteControlCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/controls/{controlId}");
  b.p("controlId", () => input.controlId!, "{controlId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeregisterAccountCommand
 */
export const se_DeregisterAccountCommand = async (
  input: DeregisterAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/account/deregisterAccount");
  let body: any;
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeregisterOrganizationAdminAccountCommand
 */
export const se_DeregisterOrganizationAdminAccountCommand = async (
  input: DeregisterOrganizationAdminAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/account/deregisterOrganizationAdminAccount");
  let body: any;
  body = JSON.stringify(
    take(input, {
      adminAccountId: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DisassociateAssessmentReportEvidenceFolderCommand
 */
export const se_DisassociateAssessmentReportEvidenceFolderCommand = async (
  input: DisassociateAssessmentReportEvidenceFolderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/assessments/{assessmentId}/disassociateFromAssessmentReport");
  b.p("assessmentId", () => input.assessmentId!, "{assessmentId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      evidenceFolderId: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetAccountStatusCommand
 */
export const se_GetAccountStatusCommand = async (
  input: GetAccountStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/account/status");
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetAssessmentCommand
 */
export const se_GetAssessmentCommand = async (
  input: GetAssessmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/assessments/{assessmentId}");
  b.p("assessmentId", () => input.assessmentId!, "{assessmentId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetAssessmentFrameworkCommand
 */
export const se_GetAssessmentFrameworkCommand = async (
  input: GetAssessmentFrameworkCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/assessmentFrameworks/{frameworkId}");
  b.p("frameworkId", () => input.frameworkId!, "{frameworkId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetAssessmentReportUrlCommand
 */
export const se_GetAssessmentReportUrlCommand = async (
  input: GetAssessmentReportUrlCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/assessments/{assessmentId}/reports/{assessmentReportId}/url");
  b.p("assessmentReportId", () => input.assessmentReportId!, "{assessmentReportId}", false);
  b.p("assessmentId", () => input.assessmentId!, "{assessmentId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetChangeLogsCommand
 */
export const se_GetChangeLogsCommand = async (
  input: GetChangeLogsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/assessments/{assessmentId}/changelogs");
  b.p("assessmentId", () => input.assessmentId!, "{assessmentId}", false);
  const query: any = map({
    [_cSI]: [, input[_cSI]!],
    [_cI]: [, input[_cI]!],
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetControlCommand
 */
export const se_GetControlCommand = async (
  input: GetControlCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/controls/{controlId}");
  b.p("controlId", () => input.controlId!, "{controlId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetDelegationsCommand
 */
export const se_GetDelegationsCommand = async (
  input: GetDelegationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/delegations");
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetEvidenceCommand
 */
export const se_GetEvidenceCommand = async (
  input: GetEvidenceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp(
    "/assessments/{assessmentId}/controlSets/{controlSetId}/evidenceFolders/{evidenceFolderId}/evidence/{evidenceId}"
  );
  b.p("assessmentId", () => input.assessmentId!, "{assessmentId}", false);
  b.p("controlSetId", () => input.controlSetId!, "{controlSetId}", false);
  b.p("evidenceFolderId", () => input.evidenceFolderId!, "{evidenceFolderId}", false);
  b.p("evidenceId", () => input.evidenceId!, "{evidenceId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetEvidenceByEvidenceFolderCommand
 */
export const se_GetEvidenceByEvidenceFolderCommand = async (
  input: GetEvidenceByEvidenceFolderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/assessments/{assessmentId}/controlSets/{controlSetId}/evidenceFolders/{evidenceFolderId}/evidence");
  b.p("assessmentId", () => input.assessmentId!, "{assessmentId}", false);
  b.p("controlSetId", () => input.controlSetId!, "{controlSetId}", false);
  b.p("evidenceFolderId", () => input.evidenceFolderId!, "{evidenceFolderId}", false);
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetEvidenceFileUploadUrlCommand
 */
export const se_GetEvidenceFileUploadUrlCommand = async (
  input: GetEvidenceFileUploadUrlCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/evidenceFileUploadUrl");
  const query: any = map({
    [_fN]: [, __expectNonNull(input[_fN]!, `fileName`)],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetEvidenceFolderCommand
 */
export const se_GetEvidenceFolderCommand = async (
  input: GetEvidenceFolderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/assessments/{assessmentId}/controlSets/{controlSetId}/evidenceFolders/{evidenceFolderId}");
  b.p("assessmentId", () => input.assessmentId!, "{assessmentId}", false);
  b.p("controlSetId", () => input.controlSetId!, "{controlSetId}", false);
  b.p("evidenceFolderId", () => input.evidenceFolderId!, "{evidenceFolderId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetEvidenceFoldersByAssessmentCommand
 */
export const se_GetEvidenceFoldersByAssessmentCommand = async (
  input: GetEvidenceFoldersByAssessmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/assessments/{assessmentId}/evidenceFolders");
  b.p("assessmentId", () => input.assessmentId!, "{assessmentId}", false);
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetEvidenceFoldersByAssessmentControlCommand
 */
export const se_GetEvidenceFoldersByAssessmentControlCommand = async (
  input: GetEvidenceFoldersByAssessmentControlCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/assessments/{assessmentId}/evidenceFolders-by-assessment-control/{controlSetId}/{controlId}");
  b.p("assessmentId", () => input.assessmentId!, "{assessmentId}", false);
  b.p("controlSetId", () => input.controlSetId!, "{controlSetId}", false);
  b.p("controlId", () => input.controlId!, "{controlId}", false);
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetInsightsCommand
 */
export const se_GetInsightsCommand = async (
  input: GetInsightsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/insights");
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetInsightsByAssessmentCommand
 */
export const se_GetInsightsByAssessmentCommand = async (
  input: GetInsightsByAssessmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/insights/assessments/{assessmentId}");
  b.p("assessmentId", () => input.assessmentId!, "{assessmentId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetOrganizationAdminAccountCommand
 */
export const se_GetOrganizationAdminAccountCommand = async (
  input: GetOrganizationAdminAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/account/organizationAdminAccount");
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetServicesInScopeCommand
 */
export const se_GetServicesInScopeCommand = async (
  input: GetServicesInScopeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/services");
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetSettingsCommand
 */
export const se_GetSettingsCommand = async (
  input: GetSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/settings/{attribute}");
  b.p("attribute", () => input.attribute!, "{attribute}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListAssessmentControlInsightsByControlDomainCommand
 */
export const se_ListAssessmentControlInsightsByControlDomainCommand = async (
  input: ListAssessmentControlInsightsByControlDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/insights/controls-by-assessment");
  const query: any = map({
    [_cDI]: [, __expectNonNull(input[_cDI]!, `controlDomainId`)],
    [_aI]: [, __expectNonNull(input[_aI]!, `assessmentId`)],
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListAssessmentFrameworksCommand
 */
export const se_ListAssessmentFrameworksCommand = async (
  input: ListAssessmentFrameworksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/assessmentFrameworks");
  const query: any = map({
    [_fT]: [, __expectNonNull(input[_fT]!, `frameworkType`)],
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListAssessmentFrameworkShareRequestsCommand
 */
export const se_ListAssessmentFrameworkShareRequestsCommand = async (
  input: ListAssessmentFrameworkShareRequestsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/assessmentFrameworkShareRequests");
  const query: any = map({
    [_rT]: [, __expectNonNull(input[_rT]!, `requestType`)],
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListAssessmentReportsCommand
 */
export const se_ListAssessmentReportsCommand = async (
  input: ListAssessmentReportsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/assessmentReports");
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListAssessmentsCommand
 */
export const se_ListAssessmentsCommand = async (
  input: ListAssessmentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/assessments");
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
 * serializeAws_restJson1ListControlDomainInsightsCommand
 */
export const se_ListControlDomainInsightsCommand = async (
  input: ListControlDomainInsightsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/insights/control-domains");
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListControlDomainInsightsByAssessmentCommand
 */
export const se_ListControlDomainInsightsByAssessmentCommand = async (
  input: ListControlDomainInsightsByAssessmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/insights/control-domains-by-assessment");
  const query: any = map({
    [_aI]: [, __expectNonNull(input[_aI]!, `assessmentId`)],
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListControlInsightsByControlDomainCommand
 */
export const se_ListControlInsightsByControlDomainCommand = async (
  input: ListControlInsightsByControlDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/insights/controls");
  const query: any = map({
    [_cDI]: [, __expectNonNull(input[_cDI]!, `controlDomainId`)],
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListControlsCommand
 */
export const se_ListControlsCommand = async (
  input: ListControlsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/controls");
  const query: any = map({
    [_cT]: [, __expectNonNull(input[_cT]!, `controlType`)],
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_cCI]: [, input[_cCI]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListKeywordsForDataSourceCommand
 */
export const se_ListKeywordsForDataSourceCommand = async (
  input: ListKeywordsForDataSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/dataSourceKeywords");
  const query: any = map({
    [_so]: [, __expectNonNull(input[_so]!, `source`)],
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListNotificationsCommand
 */
export const se_ListNotificationsCommand = async (
  input: ListNotificationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/notifications");
  const query: any = map({
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
 * serializeAws_restJson1RegisterAccountCommand
 */
export const se_RegisterAccountCommand = async (
  input: RegisterAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/account/registerAccount");
  let body: any;
  body = JSON.stringify(
    take(input, {
      delegatedAdminAccount: [],
      kmsKey: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1RegisterOrganizationAdminAccountCommand
 */
export const se_RegisterOrganizationAdminAccountCommand = async (
  input: RegisterOrganizationAdminAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/account/registerOrganizationAdminAccount");
  let body: any;
  body = JSON.stringify(
    take(input, {
      adminAccountId: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StartAssessmentFrameworkShareCommand
 */
export const se_StartAssessmentFrameworkShareCommand = async (
  input: StartAssessmentFrameworkShareCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/assessmentFrameworks/{frameworkId}/shareRequests");
  b.p("frameworkId", () => input.frameworkId!, "{frameworkId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      comment: [],
      destinationAccount: [],
      destinationRegion: [],
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
 * serializeAws_restJson1UpdateAssessmentCommand
 */
export const se_UpdateAssessmentCommand = async (
  input: UpdateAssessmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/assessments/{assessmentId}");
  b.p("assessmentId", () => input.assessmentId!, "{assessmentId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      assessmentDescription: [],
      assessmentName: [],
      assessmentReportsDestination: (_) => _json(_),
      roles: (_) => _json(_),
      scope: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateAssessmentControlCommand
 */
export const se_UpdateAssessmentControlCommand = async (
  input: UpdateAssessmentControlCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/assessments/{assessmentId}/controlSets/{controlSetId}/controls/{controlId}");
  b.p("assessmentId", () => input.assessmentId!, "{assessmentId}", false);
  b.p("controlSetId", () => input.controlSetId!, "{controlSetId}", false);
  b.p("controlId", () => input.controlId!, "{controlId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      commentBody: [],
      controlStatus: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateAssessmentControlSetStatusCommand
 */
export const se_UpdateAssessmentControlSetStatusCommand = async (
  input: UpdateAssessmentControlSetStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/assessments/{assessmentId}/controlSets/{controlSetId}/status");
  b.p("assessmentId", () => input.assessmentId!, "{assessmentId}", false);
  b.p("controlSetId", () => input.controlSetId!, "{controlSetId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      comment: [],
      status: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateAssessmentFrameworkCommand
 */
export const se_UpdateAssessmentFrameworkCommand = async (
  input: UpdateAssessmentFrameworkCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/assessmentFrameworks/{frameworkId}");
  b.p("frameworkId", () => input.frameworkId!, "{frameworkId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      complianceType: [],
      controlSets: (_) => _json(_),
      description: [],
      name: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateAssessmentFrameworkShareCommand
 */
export const se_UpdateAssessmentFrameworkShareCommand = async (
  input: UpdateAssessmentFrameworkShareCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/assessmentFrameworkShareRequests/{requestId}");
  b.p("requestId", () => input.requestId!, "{requestId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      action: [],
      requestType: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateAssessmentStatusCommand
 */
export const se_UpdateAssessmentStatusCommand = async (
  input: UpdateAssessmentStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/assessments/{assessmentId}/status");
  b.p("assessmentId", () => input.assessmentId!, "{assessmentId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      status: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateControlCommand
 */
export const se_UpdateControlCommand = async (
  input: UpdateControlCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/controls/{controlId}");
  b.p("controlId", () => input.controlId!, "{controlId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      actionPlanInstructions: [],
      actionPlanTitle: [],
      controlMappingSources: (_) => _json(_),
      description: [],
      name: [],
      testingInformation: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateSettingsCommand
 */
export const se_UpdateSettingsCommand = async (
  input: UpdateSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/settings");
  let body: any;
  body = JSON.stringify(
    take(input, {
      defaultAssessmentReportsDestination: (_) => _json(_),
      defaultExportDestination: (_) => _json(_),
      defaultProcessOwners: (_) => _json(_),
      deregistrationPolicy: (_) => _json(_),
      evidenceFinderEnabled: [],
      kmsKey: [],
      snsTopic: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ValidateAssessmentReportIntegrityCommand
 */
export const se_ValidateAssessmentReportIntegrityCommand = async (
  input: ValidateAssessmentReportIntegrityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/assessmentReports/integrity");
  let body: any;
  body = JSON.stringify(
    take(input, {
      s3RelativePath: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1AssociateAssessmentReportEvidenceFolderCommand
 */
export const de_AssociateAssessmentReportEvidenceFolderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateAssessmentReportEvidenceFolderCommandOutput> => {
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
 * deserializeAws_restJson1BatchAssociateAssessmentReportEvidenceCommand
 */
export const de_BatchAssociateAssessmentReportEvidenceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchAssociateAssessmentReportEvidenceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    errors: _json,
    evidenceIds: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1BatchCreateDelegationByAssessmentCommand
 */
export const de_BatchCreateDelegationByAssessmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchCreateDelegationByAssessmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    delegations: (_) => de_Delegations(_, context),
    errors: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1BatchDeleteDelegationByAssessmentCommand
 */
export const de_BatchDeleteDelegationByAssessmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDeleteDelegationByAssessmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    errors: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1BatchDisassociateAssessmentReportEvidenceCommand
 */
export const de_BatchDisassociateAssessmentReportEvidenceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDisassociateAssessmentReportEvidenceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    errors: _json,
    evidenceIds: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1BatchImportEvidenceToAssessmentControlCommand
 */
export const de_BatchImportEvidenceToAssessmentControlCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchImportEvidenceToAssessmentControlCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    errors: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateAssessmentCommand
 */
export const de_CreateAssessmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAssessmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    assessment: (_) => de_Assessment(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateAssessmentFrameworkCommand
 */
export const de_CreateAssessmentFrameworkCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAssessmentFrameworkCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    framework: (_) => de_Framework(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateAssessmentReportCommand
 */
export const de_CreateAssessmentReportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAssessmentReportCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    assessmentReport: (_) => de_AssessmentReport(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateControlCommand
 */
export const de_CreateControlCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateControlCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    control: (_) => de_Control(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteAssessmentCommand
 */
export const de_DeleteAssessmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAssessmentCommandOutput> => {
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
 * deserializeAws_restJson1DeleteAssessmentFrameworkCommand
 */
export const de_DeleteAssessmentFrameworkCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAssessmentFrameworkCommandOutput> => {
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
 * deserializeAws_restJson1DeleteAssessmentFrameworkShareCommand
 */
export const de_DeleteAssessmentFrameworkShareCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAssessmentFrameworkShareCommandOutput> => {
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
 * deserializeAws_restJson1DeleteAssessmentReportCommand
 */
export const de_DeleteAssessmentReportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAssessmentReportCommandOutput> => {
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
 * deserializeAws_restJson1DeleteControlCommand
 */
export const de_DeleteControlCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteControlCommandOutput> => {
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
 * deserializeAws_restJson1DeregisterAccountCommand
 */
export const de_DeregisterAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterAccountCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeregisterOrganizationAdminAccountCommand
 */
export const de_DeregisterOrganizationAdminAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterOrganizationAdminAccountCommandOutput> => {
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
 * deserializeAws_restJson1DisassociateAssessmentReportEvidenceFolderCommand
 */
export const de_DisassociateAssessmentReportEvidenceFolderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateAssessmentReportEvidenceFolderCommandOutput> => {
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
 * deserializeAws_restJson1GetAccountStatusCommand
 */
export const de_GetAccountStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccountStatusCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetAssessmentCommand
 */
export const de_GetAssessmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAssessmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    assessment: (_) => de_Assessment(_, context),
    userRole: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetAssessmentFrameworkCommand
 */
export const de_GetAssessmentFrameworkCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAssessmentFrameworkCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    framework: (_) => de_Framework(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetAssessmentReportUrlCommand
 */
export const de_GetAssessmentReportUrlCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAssessmentReportUrlCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    preSignedUrl: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetChangeLogsCommand
 */
export const de_GetChangeLogsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetChangeLogsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    changeLogs: (_) => de_ChangeLogs(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetControlCommand
 */
export const de_GetControlCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetControlCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    control: (_) => de_Control(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetDelegationsCommand
 */
export const de_GetDelegationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDelegationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    delegations: (_) => de_DelegationMetadataList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetEvidenceCommand
 */
export const de_GetEvidenceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEvidenceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    evidence: (_) => de_Evidence(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetEvidenceByEvidenceFolderCommand
 */
export const de_GetEvidenceByEvidenceFolderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEvidenceByEvidenceFolderCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    evidence: (_) => de_EvidenceList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetEvidenceFileUploadUrlCommand
 */
export const de_GetEvidenceFileUploadUrlCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEvidenceFileUploadUrlCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    evidenceFileName: __expectString,
    uploadUrl: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetEvidenceFolderCommand
 */
export const de_GetEvidenceFolderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEvidenceFolderCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    evidenceFolder: (_) => de_AssessmentEvidenceFolder(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetEvidenceFoldersByAssessmentCommand
 */
export const de_GetEvidenceFoldersByAssessmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEvidenceFoldersByAssessmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    evidenceFolders: (_) => de_AssessmentEvidenceFolders(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetEvidenceFoldersByAssessmentControlCommand
 */
export const de_GetEvidenceFoldersByAssessmentControlCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEvidenceFoldersByAssessmentControlCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    evidenceFolders: (_) => de_AssessmentEvidenceFolders(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetInsightsCommand
 */
export const de_GetInsightsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInsightsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    insights: (_) => de_Insights(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetInsightsByAssessmentCommand
 */
export const de_GetInsightsByAssessmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInsightsByAssessmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    insights: (_) => de_InsightsByAssessment(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetOrganizationAdminAccountCommand
 */
export const de_GetOrganizationAdminAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOrganizationAdminAccountCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    adminAccountId: __expectString,
    organizationId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetServicesInScopeCommand
 */
export const de_GetServicesInScopeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetServicesInScopeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    serviceMetadata: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetSettingsCommand
 */
export const de_GetSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    settings: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListAssessmentControlInsightsByControlDomainCommand
 */
export const de_ListAssessmentControlInsightsByControlDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAssessmentControlInsightsByControlDomainCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    controlInsightsByAssessment: (_) => de_ControlInsightsMetadataByAssessment(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListAssessmentFrameworksCommand
 */
export const de_ListAssessmentFrameworksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAssessmentFrameworksCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    frameworkMetadataList: (_) => de_FrameworkMetadataList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListAssessmentFrameworkShareRequestsCommand
 */
export const de_ListAssessmentFrameworkShareRequestsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAssessmentFrameworkShareRequestsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    assessmentFrameworkShareRequests: (_) => de_AssessmentFrameworkShareRequestList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListAssessmentReportsCommand
 */
export const de_ListAssessmentReportsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAssessmentReportsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    assessmentReports: (_) => de_AssessmentReportsMetadata(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListAssessmentsCommand
 */
export const de_ListAssessmentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAssessmentsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    assessmentMetadata: (_) => de_ListAssessmentMetadata(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListControlDomainInsightsCommand
 */
export const de_ListControlDomainInsightsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListControlDomainInsightsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    controlDomainInsights: (_) => de_ControlDomainInsightsList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListControlDomainInsightsByAssessmentCommand
 */
export const de_ListControlDomainInsightsByAssessmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListControlDomainInsightsByAssessmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    controlDomainInsights: (_) => de_ControlDomainInsightsList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListControlInsightsByControlDomainCommand
 */
export const de_ListControlInsightsByControlDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListControlInsightsByControlDomainCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    controlInsightsMetadata: (_) => de_ControlInsightsMetadata(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListControlsCommand
 */
export const de_ListControlsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListControlsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    controlMetadataList: (_) => de_ControlMetadataList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListKeywordsForDataSourceCommand
 */
export const de_ListKeywordsForDataSourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListKeywordsForDataSourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    keywords: _json,
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListNotificationsCommand
 */
export const de_ListNotificationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListNotificationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    notifications: (_) => de_Notifications(_, context),
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
 * deserializeAws_restJson1RegisterAccountCommand
 */
export const de_RegisterAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterAccountCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1RegisterOrganizationAdminAccountCommand
 */
export const de_RegisterOrganizationAdminAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterOrganizationAdminAccountCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    adminAccountId: __expectString,
    organizationId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1StartAssessmentFrameworkShareCommand
 */
export const de_StartAssessmentFrameworkShareCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartAssessmentFrameworkShareCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    assessmentFrameworkShareRequest: (_) => de_AssessmentFrameworkShareRequest(_, context),
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
 * deserializeAws_restJson1UpdateAssessmentCommand
 */
export const de_UpdateAssessmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAssessmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    assessment: (_) => de_Assessment(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateAssessmentControlCommand
 */
export const de_UpdateAssessmentControlCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAssessmentControlCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    control: (_) => de_AssessmentControl(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateAssessmentControlSetStatusCommand
 */
export const de_UpdateAssessmentControlSetStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAssessmentControlSetStatusCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    controlSet: (_) => de_AssessmentControlSet(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateAssessmentFrameworkCommand
 */
export const de_UpdateAssessmentFrameworkCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAssessmentFrameworkCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    framework: (_) => de_Framework(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateAssessmentFrameworkShareCommand
 */
export const de_UpdateAssessmentFrameworkShareCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAssessmentFrameworkShareCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    assessmentFrameworkShareRequest: (_) => de_AssessmentFrameworkShareRequest(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateAssessmentStatusCommand
 */
export const de_UpdateAssessmentStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAssessmentStatusCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    assessment: (_) => de_Assessment(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateControlCommand
 */
export const de_UpdateControlCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateControlCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    control: (_) => de_Control(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateSettingsCommand
 */
export const de_UpdateSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    settings: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ValidateAssessmentReportIntegrityCommand
 */
export const de_ValidateAssessmentReportIntegrityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ValidateAssessmentReportIntegrityCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    signatureAlgorithm: __expectString,
    signatureDateTime: __expectString,
    signatureKeyId: __expectString,
    signatureValid: __expectBoolean,
    validationErrors: _json,
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
    case "ThrottlingException":
    case "com.amazonaws.auditmanager#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.auditmanager#ServiceQuotaExceededException":
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
  });
  Object.assign(contents, doc);
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
    fields: _json,
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

// se_AssessmentReportsDestination omitted.

// se_AWSAccount omitted.

// se_AWSAccounts omitted.

// se_AWSService omitted.

// se_AWSServices omitted.

// se_ControlMappingSource omitted.

// se_ControlMappingSources omitted.

// se_CreateAssessmentFrameworkControl omitted.

// se_CreateAssessmentFrameworkControls omitted.

// se_CreateAssessmentFrameworkControlSet omitted.

// se_CreateAssessmentFrameworkControlSets omitted.

// se_CreateControlMappingSource omitted.

// se_CreateControlMappingSources omitted.

// se_CreateDelegationRequest omitted.

// se_CreateDelegationRequests omitted.

// se_DefaultExportDestination omitted.

// se_DelegationIds omitted.

// se_DeregistrationPolicy omitted.

// se_EvidenceIds omitted.

// se_ManualEvidence omitted.

// se_ManualEvidenceList omitted.

// se_Role omitted.

// se_Roles omitted.

// se_Scope omitted.

// se_SourceKeyword omitted.

// se_TagMap omitted.

// se_UpdateAssessmentFrameworkControlSet omitted.

// se_UpdateAssessmentFrameworkControlSets omitted.

/**
 * deserializeAws_restJson1Assessment
 */
const de_Assessment = (output: any, context: __SerdeContext): Assessment => {
  return take(output, {
    arn: __expectString,
    awsAccount: _json,
    framework: (_: any) => de_AssessmentFramework(_, context),
    metadata: (_: any) => de_AssessmentMetadata(_, context),
    tags: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1AssessmentControl
 */
const de_AssessmentControl = (output: any, context: __SerdeContext): AssessmentControl => {
  return take(output, {
    assessmentReportEvidenceCount: __expectInt32,
    comments: (_: any) => de_ControlComments(_, context),
    description: __expectString,
    evidenceCount: __expectInt32,
    evidenceSources: _json,
    id: __expectString,
    name: __expectString,
    response: __expectString,
    status: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1AssessmentControls
 */
const de_AssessmentControls = (output: any, context: __SerdeContext): AssessmentControl[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AssessmentControl(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AssessmentControlSet
 */
const de_AssessmentControlSet = (output: any, context: __SerdeContext): AssessmentControlSet => {
  return take(output, {
    controls: (_: any) => de_AssessmentControls(_, context),
    delegations: (_: any) => de_Delegations(_, context),
    description: __expectString,
    id: __expectString,
    manualEvidenceCount: __expectInt32,
    roles: _json,
    status: __expectString,
    systemEvidenceCount: __expectInt32,
  }) as any;
};

/**
 * deserializeAws_restJson1AssessmentControlSets
 */
const de_AssessmentControlSets = (output: any, context: __SerdeContext): AssessmentControlSet[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AssessmentControlSet(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AssessmentEvidenceFolder
 */
const de_AssessmentEvidenceFolder = (output: any, context: __SerdeContext): AssessmentEvidenceFolder => {
  return take(output, {
    assessmentId: __expectString,
    assessmentReportSelectionCount: __expectInt32,
    author: __expectString,
    controlId: __expectString,
    controlName: __expectString,
    controlSetId: __expectString,
    dataSource: __expectString,
    date: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    evidenceAwsServiceSourceCount: __expectInt32,
    evidenceByTypeComplianceCheckCount: __expectInt32,
    evidenceByTypeComplianceCheckIssuesCount: __expectInt32,
    evidenceByTypeConfigurationDataCount: __expectInt32,
    evidenceByTypeManualCount: __expectInt32,
    evidenceByTypeUserActivityCount: __expectInt32,
    evidenceResourcesIncludedCount: __expectInt32,
    id: __expectString,
    name: __expectString,
    totalEvidence: __expectInt32,
  }) as any;
};

/**
 * deserializeAws_restJson1AssessmentEvidenceFolders
 */
const de_AssessmentEvidenceFolders = (output: any, context: __SerdeContext): AssessmentEvidenceFolder[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AssessmentEvidenceFolder(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AssessmentFramework
 */
const de_AssessmentFramework = (output: any, context: __SerdeContext): AssessmentFramework => {
  return take(output, {
    arn: __expectString,
    controlSets: (_: any) => de_AssessmentControlSets(_, context),
    id: __expectString,
    metadata: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1AssessmentFrameworkMetadata
 */
const de_AssessmentFrameworkMetadata = (output: any, context: __SerdeContext): AssessmentFrameworkMetadata => {
  return take(output, {
    arn: __expectString,
    complianceType: __expectString,
    controlSetsCount: __expectInt32,
    controlsCount: __expectInt32,
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    id: __expectString,
    lastUpdatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    logo: __expectString,
    name: __expectString,
    type: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1AssessmentFrameworkShareRequest
 */
const de_AssessmentFrameworkShareRequest = (output: any, context: __SerdeContext): AssessmentFrameworkShareRequest => {
  return take(output, {
    comment: __expectString,
    complianceType: __expectString,
    creationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    customControlsCount: __expectInt32,
    destinationAccount: __expectString,
    destinationRegion: __expectString,
    expirationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    frameworkDescription: __expectString,
    frameworkId: __expectString,
    frameworkName: __expectString,
    id: __expectString,
    lastUpdated: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    sourceAccount: __expectString,
    standardControlsCount: __expectInt32,
    status: __expectString,
  }) as any;
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
      return de_AssessmentFrameworkShareRequest(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AssessmentMetadata
 */
const de_AssessmentMetadata = (output: any, context: __SerdeContext): AssessmentMetadata => {
  return take(output, {
    assessmentReportsDestination: _json,
    complianceType: __expectString,
    creationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    delegations: (_: any) => de_Delegations(_, context),
    description: __expectString,
    id: __expectString,
    lastUpdated: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    name: __expectString,
    roles: _json,
    scope: _json,
    status: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1AssessmentMetadataItem
 */
const de_AssessmentMetadataItem = (output: any, context: __SerdeContext): AssessmentMetadataItem => {
  return take(output, {
    complianceType: __expectString,
    creationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    delegations: (_: any) => de_Delegations(_, context),
    id: __expectString,
    lastUpdated: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    name: __expectString,
    roles: _json,
    status: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1AssessmentReport
 */
const de_AssessmentReport = (output: any, context: __SerdeContext): AssessmentReport => {
  return take(output, {
    assessmentId: __expectString,
    assessmentName: __expectString,
    author: __expectString,
    awsAccountId: __expectString,
    creationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    id: __expectString,
    name: __expectString,
    status: __expectString,
  }) as any;
};

// de_AssessmentReportEvidenceError omitted.

// de_AssessmentReportEvidenceErrors omitted.

/**
 * deserializeAws_restJson1AssessmentReportMetadata
 */
const de_AssessmentReportMetadata = (output: any, context: __SerdeContext): AssessmentReportMetadata => {
  return take(output, {
    assessmentId: __expectString,
    assessmentName: __expectString,
    author: __expectString,
    creationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    id: __expectString,
    name: __expectString,
    status: __expectString,
  }) as any;
};

// de_AssessmentReportsDestination omitted.

/**
 * deserializeAws_restJson1AssessmentReportsMetadata
 */
const de_AssessmentReportsMetadata = (output: any, context: __SerdeContext): AssessmentReportMetadata[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AssessmentReportMetadata(entry, context);
    });
  return retVal;
};

// de_AWSAccount omitted.

// de_AWSAccounts omitted.

// de_AWSService omitted.

// de_AWSServices omitted.

// de_BatchCreateDelegationByAssessmentError omitted.

// de_BatchCreateDelegationByAssessmentErrors omitted.

// de_BatchDeleteDelegationByAssessmentError omitted.

// de_BatchDeleteDelegationByAssessmentErrors omitted.

// de_BatchImportEvidenceToAssessmentControlError omitted.

// de_BatchImportEvidenceToAssessmentControlErrors omitted.

/**
 * deserializeAws_restJson1ChangeLog
 */
const de_ChangeLog = (output: any, context: __SerdeContext): ChangeLog => {
  return take(output, {
    action: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    createdBy: __expectString,
    objectName: __expectString,
    objectType: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1ChangeLogs
 */
const de_ChangeLogs = (output: any, context: __SerdeContext): ChangeLog[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ChangeLog(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Control
 */
const de_Control = (output: any, context: __SerdeContext): Control => {
  return take(output, {
    actionPlanInstructions: __expectString,
    actionPlanTitle: __expectString,
    arn: __expectString,
    controlMappingSources: _json,
    controlSources: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    createdBy: __expectString,
    description: __expectString,
    id: __expectString,
    lastUpdatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    lastUpdatedBy: __expectString,
    name: __expectString,
    state: __expectString,
    tags: _json,
    testingInformation: __expectString,
    type: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1ControlComment
 */
const de_ControlComment = (output: any, context: __SerdeContext): ControlComment => {
  return take(output, {
    authorName: __expectString,
    commentBody: __expectString,
    postedDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_restJson1ControlComments
 */
const de_ControlComments = (output: any, context: __SerdeContext): ControlComment[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ControlComment(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ControlDomainInsights
 */
const de_ControlDomainInsights = (output: any, context: __SerdeContext): ControlDomainInsights => {
  return take(output, {
    controlsCountByNoncompliantEvidence: __expectInt32,
    evidenceInsights: _json,
    id: __expectString,
    lastUpdated: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    name: __expectString,
    totalControlsCount: __expectInt32,
  }) as any;
};

/**
 * deserializeAws_restJson1ControlDomainInsightsList
 */
const de_ControlDomainInsightsList = (output: any, context: __SerdeContext): ControlDomainInsights[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
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
  return take(output, {
    controlSetName: __expectString,
    evidenceInsights: _json,
    id: __expectString,
    lastUpdated: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    name: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1ControlInsightsMetadataItem
 */
const de_ControlInsightsMetadataItem = (output: any, context: __SerdeContext): ControlInsightsMetadataItem => {
  return take(output, {
    evidenceInsights: _json,
    id: __expectString,
    lastUpdated: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    name: __expectString,
  }) as any;
};

// de_ControlMappingSource omitted.

// de_ControlMappingSources omitted.

/**
 * deserializeAws_restJson1ControlMetadata
 */
const de_ControlMetadata = (output: any, context: __SerdeContext): ControlMetadata => {
  return take(output, {
    arn: __expectString,
    controlSources: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    id: __expectString,
    lastUpdatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    name: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1ControlMetadataList
 */
const de_ControlMetadataList = (output: any, context: __SerdeContext): ControlMetadata[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
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
      return de_Control(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ControlSet
 */
const de_ControlSet = (output: any, context: __SerdeContext): ControlSet => {
  return take(output, {
    controls: (_: any) => de_Controls(_, context),
    id: __expectString,
    name: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1ControlSets
 */
const de_ControlSets = (output: any, context: __SerdeContext): ControlSet[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ControlSet(entry, context);
    });
  return retVal;
};

// de_CreateDelegationRequest omitted.

// de_DefaultExportDestination omitted.

/**
 * deserializeAws_restJson1Delegation
 */
const de_Delegation = (output: any, context: __SerdeContext): Delegation => {
  return take(output, {
    assessmentId: __expectString,
    assessmentName: __expectString,
    comment: __expectString,
    controlSetId: __expectString,
    createdBy: __expectString,
    creationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    id: __expectString,
    lastUpdated: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    roleArn: __expectString,
    roleType: __expectString,
    status: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1DelegationMetadata
 */
const de_DelegationMetadata = (output: any, context: __SerdeContext): DelegationMetadata => {
  return take(output, {
    assessmentId: __expectString,
    assessmentName: __expectString,
    controlSetName: __expectString,
    creationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    id: __expectString,
    roleArn: __expectString,
    status: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1DelegationMetadataList
 */
const de_DelegationMetadataList = (output: any, context: __SerdeContext): DelegationMetadata[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
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
      return de_Delegation(entry, context);
    });
  return retVal;
};

// de_DeregistrationPolicy omitted.

/**
 * deserializeAws_restJson1Evidence
 */
const de_Evidence = (output: any, context: __SerdeContext): Evidence => {
  return take(output, {
    assessmentReportSelection: __expectString,
    attributes: _json,
    awsAccountId: __expectString,
    awsOrganization: __expectString,
    complianceCheck: __expectString,
    dataSource: __expectString,
    eventName: __expectString,
    eventSource: __expectString,
    evidenceAwsAccountId: __expectString,
    evidenceByType: __expectString,
    evidenceFolderId: __expectString,
    iamId: __expectString,
    id: __expectString,
    resourcesIncluded: _json,
    time: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

// de_EvidenceAttributes omitted.

// de_EvidenceFinderEnablement omitted.

// de_EvidenceIds omitted.

// de_EvidenceInsights omitted.

/**
 * deserializeAws_restJson1EvidenceList
 */
const de_EvidenceList = (output: any, context: __SerdeContext): Evidence[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Evidence(entry, context);
    });
  return retVal;
};

// de_EvidenceSources omitted.

/**
 * deserializeAws_restJson1Framework
 */
const de_Framework = (output: any, context: __SerdeContext): Framework => {
  return take(output, {
    arn: __expectString,
    complianceType: __expectString,
    controlSets: (_: any) => de_ControlSets(_, context),
    controlSources: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    createdBy: __expectString,
    description: __expectString,
    id: __expectString,
    lastUpdatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    lastUpdatedBy: __expectString,
    logo: __expectString,
    name: __expectString,
    tags: _json,
    type: __expectString,
  }) as any;
};

// de_FrameworkMetadata omitted.

/**
 * deserializeAws_restJson1FrameworkMetadataList
 */
const de_FrameworkMetadataList = (output: any, context: __SerdeContext): AssessmentFrameworkMetadata[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AssessmentFrameworkMetadata(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Insights
 */
const de_Insights = (output: any, context: __SerdeContext): Insights => {
  return take(output, {
    activeAssessmentsCount: __expectInt32,
    assessmentControlsCountByNoncompliantEvidence: __expectInt32,
    compliantEvidenceCount: __expectInt32,
    inconclusiveEvidenceCount: __expectInt32,
    lastUpdated: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    noncompliantEvidenceCount: __expectInt32,
    totalAssessmentControlsCount: __expectInt32,
  }) as any;
};

/**
 * deserializeAws_restJson1InsightsByAssessment
 */
const de_InsightsByAssessment = (output: any, context: __SerdeContext): InsightsByAssessment => {
  return take(output, {
    assessmentControlsCountByNoncompliantEvidence: __expectInt32,
    compliantEvidenceCount: __expectInt32,
    inconclusiveEvidenceCount: __expectInt32,
    lastUpdated: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    noncompliantEvidenceCount: __expectInt32,
    totalAssessmentControlsCount: __expectInt32,
  }) as any;
};

// de_Keywords omitted.

/**
 * deserializeAws_restJson1ListAssessmentMetadata
 */
const de_ListAssessmentMetadata = (output: any, context: __SerdeContext): AssessmentMetadataItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AssessmentMetadataItem(entry, context);
    });
  return retVal;
};

// de_ManualEvidence omitted.

/**
 * deserializeAws_restJson1Notification
 */
const de_Notification = (output: any, context: __SerdeContext): Notification => {
  return take(output, {
    assessmentId: __expectString,
    assessmentName: __expectString,
    controlSetId: __expectString,
    controlSetName: __expectString,
    description: __expectString,
    eventTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    id: __expectString,
    source: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1Notifications
 */
const de_Notifications = (output: any, context: __SerdeContext): Notification[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Notification(entry, context);
    });
  return retVal;
};

// de_Resource omitted.

// de_Resources omitted.

// de_Role omitted.

// de_Roles omitted.

// de_Scope omitted.

// de_ServiceMetadata omitted.

// de_ServiceMetadataList omitted.

// de_Settings omitted.

// de_SourceKeyword omitted.

// de_TagMap omitted.

// de_URL omitted.

// de_ValidationErrors omitted.

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

const _aI = "assessmentId";
const _cCI = "controlCatalogId";
const _cDI = "controlDomainId";
const _cI = "controlId";
const _cSI = "controlSetId";
const _cT = "controlType";
const _fN = "fileName";
const _fT = "frameworkType";
const _mR = "maxResults";
const _nT = "nextToken";
const _rT = "requestType";
const _s = "status";
const _so = "source";
const _tK = "tagKeys";
