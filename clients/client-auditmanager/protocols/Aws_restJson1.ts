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
  GetOrganizationAdminAccountCommandInput,
  GetOrganizationAdminAccountCommandOutput,
} from "../commands/GetOrganizationAdminAccountCommand";
import { GetServicesInScopeCommandInput, GetServicesInScopeCommandOutput } from "../commands/GetServicesInScopeCommand";
import { GetSettingsCommandInput, GetSettingsCommandOutput } from "../commands/GetSettingsCommand";
import {
  ListAssessmentFrameworksCommandInput,
  ListAssessmentFrameworksCommandOutput,
} from "../commands/ListAssessmentFrameworksCommand";
import {
  ListAssessmentReportsCommandInput,
  ListAssessmentReportsCommandOutput,
} from "../commands/ListAssessmentReportsCommand";
import { ListAssessmentsCommandInput, ListAssessmentsCommandOutput } from "../commands/ListAssessmentsCommand";
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
  UpdateAssessmentStatusCommandInput,
  UpdateAssessmentStatusCommandOutput,
} from "../commands/UpdateAssessmentStatusCommand";
import { UpdateControlCommandInput, UpdateControlCommandOutput } from "../commands/UpdateControlCommand";
import { UpdateSettingsCommandInput, UpdateSettingsCommandOutput } from "../commands/UpdateSettingsCommand";
import {
  ValidateAssessmentReportIntegrityCommandInput,
  ValidateAssessmentReportIntegrityCommandOutput,
} from "../commands/ValidateAssessmentReportIntegrityCommand";
import {
  AWSAccount,
  AWSService,
  AccessDeniedException,
  Assessment,
  AssessmentControl,
  AssessmentControlSet,
  AssessmentEvidenceFolder,
  AssessmentFramework,
  AssessmentFrameworkMetadata,
  AssessmentMetadata,
  AssessmentMetadataItem,
  AssessmentReport,
  AssessmentReportEvidenceError,
  AssessmentReportMetadata,
  AssessmentReportsDestination,
  BatchCreateDelegationByAssessmentError,
  BatchDeleteDelegationByAssessmentError,
  BatchImportEvidenceToAssessmentControlError,
  ChangeLog,
  Control,
  ControlComment,
  ControlMappingSource,
  ControlMetadata,
  ControlSet,
  CreateAssessmentFrameworkControl,
  CreateAssessmentFrameworkControlSet,
  CreateControlMappingSource,
  CreateDelegationRequest,
  Delegation,
  DelegationMetadata,
  Evidence,
  Framework,
  FrameworkMetadata,
  InternalServerException,
  ManualEvidence,
  Notification,
  Resource,
  ResourceNotFoundException,
  Role,
  Scope,
  ServiceMetadata,
  Settings,
  SourceKeyword,
  URL,
  UpdateAssessmentFrameworkControlSet,
  ValidationException,
  ValidationExceptionField,
} from "../models/models_0";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  parseEpochTimestamp as __parseEpochTimestamp,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
  SmithyException as __SmithyException,
} from "@aws-sdk/types";

export const serializeAws_restJson1AssociateAssessmentReportEvidenceFolderCommand = async (
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
  if (input.assessmentId !== undefined) {
    const labelValue: string = input.assessmentId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: assessmentId.");
    }
    resolvedPath = resolvedPath.replace("{assessmentId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: assessmentId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.evidenceFolderId !== undefined &&
      input.evidenceFolderId !== null && { evidenceFolderId: input.evidenceFolderId }),
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

export const serializeAws_restJson1BatchAssociateAssessmentReportEvidenceCommand = async (
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
  if (input.assessmentId !== undefined) {
    const labelValue: string = input.assessmentId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: assessmentId.");
    }
    resolvedPath = resolvedPath.replace("{assessmentId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: assessmentId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.evidenceFolderId !== undefined &&
      input.evidenceFolderId !== null && { evidenceFolderId: input.evidenceFolderId }),
    ...(input.evidenceIds !== undefined &&
      input.evidenceIds !== null && { evidenceIds: serializeAws_restJson1EvidenceIds(input.evidenceIds, context) }),
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

export const serializeAws_restJson1BatchCreateDelegationByAssessmentCommand = async (
  input: BatchCreateDelegationByAssessmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/assessments/{assessmentId}/delegations";
  if (input.assessmentId !== undefined) {
    const labelValue: string = input.assessmentId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: assessmentId.");
    }
    resolvedPath = resolvedPath.replace("{assessmentId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: assessmentId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.createDelegationRequests !== undefined &&
      input.createDelegationRequests !== null && {
        createDelegationRequests: serializeAws_restJson1CreateDelegationRequests(
          input.createDelegationRequests,
          context
        ),
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

export const serializeAws_restJson1BatchDeleteDelegationByAssessmentCommand = async (
  input: BatchDeleteDelegationByAssessmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/assessments/{assessmentId}/delegations";
  if (input.assessmentId !== undefined) {
    const labelValue: string = input.assessmentId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: assessmentId.");
    }
    resolvedPath = resolvedPath.replace("{assessmentId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: assessmentId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.delegationIds !== undefined &&
      input.delegationIds !== null && {
        delegationIds: serializeAws_restJson1DelegationIds(input.delegationIds, context),
      }),
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

export const serializeAws_restJson1BatchDisassociateAssessmentReportEvidenceCommand = async (
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
  if (input.assessmentId !== undefined) {
    const labelValue: string = input.assessmentId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: assessmentId.");
    }
    resolvedPath = resolvedPath.replace("{assessmentId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: assessmentId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.evidenceFolderId !== undefined &&
      input.evidenceFolderId !== null && { evidenceFolderId: input.evidenceFolderId }),
    ...(input.evidenceIds !== undefined &&
      input.evidenceIds !== null && { evidenceIds: serializeAws_restJson1EvidenceIds(input.evidenceIds, context) }),
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

export const serializeAws_restJson1BatchImportEvidenceToAssessmentControlCommand = async (
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
  if (input.assessmentId !== undefined) {
    const labelValue: string = input.assessmentId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: assessmentId.");
    }
    resolvedPath = resolvedPath.replace("{assessmentId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: assessmentId.");
  }
  if (input.controlSetId !== undefined) {
    const labelValue: string = input.controlSetId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: controlSetId.");
    }
    resolvedPath = resolvedPath.replace("{controlSetId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: controlSetId.");
  }
  if (input.controlId !== undefined) {
    const labelValue: string = input.controlId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: controlId.");
    }
    resolvedPath = resolvedPath.replace("{controlId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: controlId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.manualEvidence !== undefined &&
      input.manualEvidence !== null && {
        manualEvidence: serializeAws_restJson1ManualEvidenceList(input.manualEvidence, context),
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

export const serializeAws_restJson1CreateAssessmentCommand = async (
  input: CreateAssessmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/assessments";
  let body: any;
  body = JSON.stringify({
    ...(input.assessmentReportsDestination !== undefined &&
      input.assessmentReportsDestination !== null && {
        assessmentReportsDestination: serializeAws_restJson1AssessmentReportsDestination(
          input.assessmentReportsDestination,
          context
        ),
      }),
    ...(input.description !== undefined && input.description !== null && { description: input.description }),
    ...(input.frameworkId !== undefined && input.frameworkId !== null && { frameworkId: input.frameworkId }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.roles !== undefined &&
      input.roles !== null && { roles: serializeAws_restJson1Roles(input.roles, context) }),
    ...(input.scope !== undefined &&
      input.scope !== null && { scope: serializeAws_restJson1Scope(input.scope, context) }),
    ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
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

export const serializeAws_restJson1CreateAssessmentFrameworkCommand = async (
  input: CreateAssessmentFrameworkCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/assessmentFrameworks";
  let body: any;
  body = JSON.stringify({
    ...(input.complianceType !== undefined &&
      input.complianceType !== null && { complianceType: input.complianceType }),
    ...(input.controlSets !== undefined &&
      input.controlSets !== null && {
        controlSets: serializeAws_restJson1CreateAssessmentFrameworkControlSets(input.controlSets, context),
      }),
    ...(input.description !== undefined && input.description !== null && { description: input.description }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
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

export const serializeAws_restJson1CreateAssessmentReportCommand = async (
  input: CreateAssessmentReportCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/assessments/{assessmentId}/reports";
  if (input.assessmentId !== undefined) {
    const labelValue: string = input.assessmentId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: assessmentId.");
    }
    resolvedPath = resolvedPath.replace("{assessmentId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: assessmentId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.description !== undefined && input.description !== null && { description: input.description }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
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

export const serializeAws_restJson1CreateControlCommand = async (
  input: CreateControlCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/controls";
  let body: any;
  body = JSON.stringify({
    ...(input.actionPlanInstructions !== undefined &&
      input.actionPlanInstructions !== null && { actionPlanInstructions: input.actionPlanInstructions }),
    ...(input.actionPlanTitle !== undefined &&
      input.actionPlanTitle !== null && { actionPlanTitle: input.actionPlanTitle }),
    ...(input.controlMappingSources !== undefined &&
      input.controlMappingSources !== null && {
        controlMappingSources: serializeAws_restJson1CreateControlMappingSources(input.controlMappingSources, context),
      }),
    ...(input.description !== undefined && input.description !== null && { description: input.description }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
    ...(input.testingInformation !== undefined &&
      input.testingInformation !== null && { testingInformation: input.testingInformation }),
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

export const serializeAws_restJson1DeleteAssessmentCommand = async (
  input: DeleteAssessmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/assessments/{assessmentId}";
  if (input.assessmentId !== undefined) {
    const labelValue: string = input.assessmentId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: assessmentId.");
    }
    resolvedPath = resolvedPath.replace("{assessmentId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: assessmentId.");
  }
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

export const serializeAws_restJson1DeleteAssessmentFrameworkCommand = async (
  input: DeleteAssessmentFrameworkCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/assessmentFrameworks/{frameworkId}";
  if (input.frameworkId !== undefined) {
    const labelValue: string = input.frameworkId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: frameworkId.");
    }
    resolvedPath = resolvedPath.replace("{frameworkId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: frameworkId.");
  }
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

export const serializeAws_restJson1DeleteAssessmentReportCommand = async (
  input: DeleteAssessmentReportCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/assessments/{assessmentId}/reports/{assessmentReportId}";
  if (input.assessmentId !== undefined) {
    const labelValue: string = input.assessmentId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: assessmentId.");
    }
    resolvedPath = resolvedPath.replace("{assessmentId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: assessmentId.");
  }
  if (input.assessmentReportId !== undefined) {
    const labelValue: string = input.assessmentReportId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: assessmentReportId.");
    }
    resolvedPath = resolvedPath.replace("{assessmentReportId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: assessmentReportId.");
  }
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

export const serializeAws_restJson1DeleteControlCommand = async (
  input: DeleteControlCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/controls/{controlId}";
  if (input.controlId !== undefined) {
    const labelValue: string = input.controlId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: controlId.");
    }
    resolvedPath = resolvedPath.replace("{controlId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: controlId.");
  }
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

export const serializeAws_restJson1DeregisterAccountCommand = async (
  input: DeregisterAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
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

export const serializeAws_restJson1DeregisterOrganizationAdminAccountCommand = async (
  input: DeregisterOrganizationAdminAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/account/deregisterOrganizationAdminAccount";
  let body: any;
  body = JSON.stringify({
    ...(input.adminAccountId !== undefined &&
      input.adminAccountId !== null && { adminAccountId: input.adminAccountId }),
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

export const serializeAws_restJson1DisassociateAssessmentReportEvidenceFolderCommand = async (
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
  if (input.assessmentId !== undefined) {
    const labelValue: string = input.assessmentId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: assessmentId.");
    }
    resolvedPath = resolvedPath.replace("{assessmentId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: assessmentId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.evidenceFolderId !== undefined &&
      input.evidenceFolderId !== null && { evidenceFolderId: input.evidenceFolderId }),
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

export const serializeAws_restJson1GetAccountStatusCommand = async (
  input: GetAccountStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/account/status";
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

export const serializeAws_restJson1GetAssessmentCommand = async (
  input: GetAssessmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/assessments/{assessmentId}";
  if (input.assessmentId !== undefined) {
    const labelValue: string = input.assessmentId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: assessmentId.");
    }
    resolvedPath = resolvedPath.replace("{assessmentId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: assessmentId.");
  }
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

export const serializeAws_restJson1GetAssessmentFrameworkCommand = async (
  input: GetAssessmentFrameworkCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/assessmentFrameworks/{frameworkId}";
  if (input.frameworkId !== undefined) {
    const labelValue: string = input.frameworkId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: frameworkId.");
    }
    resolvedPath = resolvedPath.replace("{frameworkId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: frameworkId.");
  }
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

export const serializeAws_restJson1GetAssessmentReportUrlCommand = async (
  input: GetAssessmentReportUrlCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/assessments/{assessmentId}/reports/{assessmentReportId}/url";
  if (input.assessmentReportId !== undefined) {
    const labelValue: string = input.assessmentReportId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: assessmentReportId.");
    }
    resolvedPath = resolvedPath.replace("{assessmentReportId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: assessmentReportId.");
  }
  if (input.assessmentId !== undefined) {
    const labelValue: string = input.assessmentId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: assessmentId.");
    }
    resolvedPath = resolvedPath.replace("{assessmentId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: assessmentId.");
  }
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

export const serializeAws_restJson1GetChangeLogsCommand = async (
  input: GetChangeLogsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/assessments/{assessmentId}/changelogs";
  if (input.assessmentId !== undefined) {
    const labelValue: string = input.assessmentId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: assessmentId.");
    }
    resolvedPath = resolvedPath.replace("{assessmentId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: assessmentId.");
  }
  const query: any = {
    ...(input.controlSetId !== undefined && { controlSetId: input.controlSetId }),
    ...(input.controlId !== undefined && { controlId: input.controlId }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
  };
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

export const serializeAws_restJson1GetControlCommand = async (
  input: GetControlCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/controls/{controlId}";
  if (input.controlId !== undefined) {
    const labelValue: string = input.controlId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: controlId.");
    }
    resolvedPath = resolvedPath.replace("{controlId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: controlId.");
  }
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

export const serializeAws_restJson1GetDelegationsCommand = async (
  input: GetDelegationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/delegations";
  const query: any = {
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
  };
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

export const serializeAws_restJson1GetEvidenceCommand = async (
  input: GetEvidenceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/assessments/{assessmentId}/controlSets/{controlSetId}/evidenceFolders/{evidenceFolderId}/evidence/{evidenceId}";
  if (input.assessmentId !== undefined) {
    const labelValue: string = input.assessmentId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: assessmentId.");
    }
    resolvedPath = resolvedPath.replace("{assessmentId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: assessmentId.");
  }
  if (input.controlSetId !== undefined) {
    const labelValue: string = input.controlSetId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: controlSetId.");
    }
    resolvedPath = resolvedPath.replace("{controlSetId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: controlSetId.");
  }
  if (input.evidenceFolderId !== undefined) {
    const labelValue: string = input.evidenceFolderId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: evidenceFolderId.");
    }
    resolvedPath = resolvedPath.replace("{evidenceFolderId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: evidenceFolderId.");
  }
  if (input.evidenceId !== undefined) {
    const labelValue: string = input.evidenceId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: evidenceId.");
    }
    resolvedPath = resolvedPath.replace("{evidenceId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: evidenceId.");
  }
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

export const serializeAws_restJson1GetEvidenceByEvidenceFolderCommand = async (
  input: GetEvidenceByEvidenceFolderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/assessments/{assessmentId}/controlSets/{controlSetId}/evidenceFolders/{evidenceFolderId}/evidence";
  if (input.assessmentId !== undefined) {
    const labelValue: string = input.assessmentId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: assessmentId.");
    }
    resolvedPath = resolvedPath.replace("{assessmentId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: assessmentId.");
  }
  if (input.controlSetId !== undefined) {
    const labelValue: string = input.controlSetId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: controlSetId.");
    }
    resolvedPath = resolvedPath.replace("{controlSetId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: controlSetId.");
  }
  if (input.evidenceFolderId !== undefined) {
    const labelValue: string = input.evidenceFolderId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: evidenceFolderId.");
    }
    resolvedPath = resolvedPath.replace("{evidenceFolderId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: evidenceFolderId.");
  }
  const query: any = {
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
  };
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

export const serializeAws_restJson1GetEvidenceFolderCommand = async (
  input: GetEvidenceFolderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/assessments/{assessmentId}/controlSets/{controlSetId}/evidenceFolders/{evidenceFolderId}";
  if (input.assessmentId !== undefined) {
    const labelValue: string = input.assessmentId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: assessmentId.");
    }
    resolvedPath = resolvedPath.replace("{assessmentId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: assessmentId.");
  }
  if (input.controlSetId !== undefined) {
    const labelValue: string = input.controlSetId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: controlSetId.");
    }
    resolvedPath = resolvedPath.replace("{controlSetId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: controlSetId.");
  }
  if (input.evidenceFolderId !== undefined) {
    const labelValue: string = input.evidenceFolderId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: evidenceFolderId.");
    }
    resolvedPath = resolvedPath.replace("{evidenceFolderId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: evidenceFolderId.");
  }
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

export const serializeAws_restJson1GetEvidenceFoldersByAssessmentCommand = async (
  input: GetEvidenceFoldersByAssessmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/assessments/{assessmentId}/evidenceFolders";
  if (input.assessmentId !== undefined) {
    const labelValue: string = input.assessmentId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: assessmentId.");
    }
    resolvedPath = resolvedPath.replace("{assessmentId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: assessmentId.");
  }
  const query: any = {
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
  };
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

export const serializeAws_restJson1GetEvidenceFoldersByAssessmentControlCommand = async (
  input: GetEvidenceFoldersByAssessmentControlCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/assessments/{assessmentId}/evidenceFolders-by-assessment-control/{controlSetId}/{controlId}";
  if (input.assessmentId !== undefined) {
    const labelValue: string = input.assessmentId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: assessmentId.");
    }
    resolvedPath = resolvedPath.replace("{assessmentId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: assessmentId.");
  }
  if (input.controlSetId !== undefined) {
    const labelValue: string = input.controlSetId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: controlSetId.");
    }
    resolvedPath = resolvedPath.replace("{controlSetId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: controlSetId.");
  }
  if (input.controlId !== undefined) {
    const labelValue: string = input.controlId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: controlId.");
    }
    resolvedPath = resolvedPath.replace("{controlId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: controlId.");
  }
  const query: any = {
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
  };
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

export const serializeAws_restJson1GetOrganizationAdminAccountCommand = async (
  input: GetOrganizationAdminAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
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

export const serializeAws_restJson1GetServicesInScopeCommand = async (
  input: GetServicesInScopeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/services";
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

export const serializeAws_restJson1GetSettingsCommand = async (
  input: GetSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/settings/{attribute}";
  if (input.attribute !== undefined) {
    const labelValue: string = input.attribute;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: attribute.");
    }
    resolvedPath = resolvedPath.replace("{attribute}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: attribute.");
  }
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

export const serializeAws_restJson1ListAssessmentFrameworksCommand = async (
  input: ListAssessmentFrameworksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/assessmentFrameworks";
  const query: any = {
    ...(input.frameworkType !== undefined && { frameworkType: input.frameworkType }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
  };
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

export const serializeAws_restJson1ListAssessmentReportsCommand = async (
  input: ListAssessmentReportsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/assessmentReports";
  const query: any = {
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
  };
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

export const serializeAws_restJson1ListAssessmentsCommand = async (
  input: ListAssessmentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/assessments";
  const query: any = {
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
  };
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

export const serializeAws_restJson1ListControlsCommand = async (
  input: ListControlsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/controls";
  const query: any = {
    ...(input.controlType !== undefined && { controlType: input.controlType }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
  };
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

export const serializeAws_restJson1ListKeywordsForDataSourceCommand = async (
  input: ListKeywordsForDataSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/dataSourceKeywords";
  const query: any = {
    ...(input.source !== undefined && { source: input.source }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
  };
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

export const serializeAws_restJson1ListNotificationsCommand = async (
  input: ListNotificationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/notifications";
  const query: any = {
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
  };
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

export const serializeAws_restJson1ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{resourceArn}";
  if (input.resourceArn !== undefined) {
    const labelValue: string = input.resourceArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: resourceArn.");
    }
    resolvedPath = resolvedPath.replace("{resourceArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: resourceArn.");
  }
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

export const serializeAws_restJson1RegisterAccountCommand = async (
  input: RegisterAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/account/registerAccount";
  let body: any;
  body = JSON.stringify({
    ...(input.delegatedAdminAccount !== undefined &&
      input.delegatedAdminAccount !== null && { delegatedAdminAccount: input.delegatedAdminAccount }),
    ...(input.kmsKey !== undefined && input.kmsKey !== null && { kmsKey: input.kmsKey }),
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

export const serializeAws_restJson1RegisterOrganizationAdminAccountCommand = async (
  input: RegisterOrganizationAdminAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/account/registerOrganizationAdminAccount";
  let body: any;
  body = JSON.stringify({
    ...(input.adminAccountId !== undefined &&
      input.adminAccountId !== null && { adminAccountId: input.adminAccountId }),
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

export const serializeAws_restJson1TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{resourceArn}";
  if (input.resourceArn !== undefined) {
    const labelValue: string = input.resourceArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: resourceArn.");
    }
    resolvedPath = resolvedPath.replace("{resourceArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: resourceArn.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
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

export const serializeAws_restJson1UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{resourceArn}";
  if (input.resourceArn !== undefined) {
    const labelValue: string = input.resourceArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: resourceArn.");
    }
    resolvedPath = resolvedPath.replace("{resourceArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: resourceArn.");
  }
  const query: any = {
    ...(input.tagKeys !== undefined && { tagKeys: (input.tagKeys || []).map((_entry) => _entry as any) }),
  };
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

export const serializeAws_restJson1UpdateAssessmentCommand = async (
  input: UpdateAssessmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/assessments/{assessmentId}";
  if (input.assessmentId !== undefined) {
    const labelValue: string = input.assessmentId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: assessmentId.");
    }
    resolvedPath = resolvedPath.replace("{assessmentId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: assessmentId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.assessmentDescription !== undefined &&
      input.assessmentDescription !== null && { assessmentDescription: input.assessmentDescription }),
    ...(input.assessmentName !== undefined &&
      input.assessmentName !== null && { assessmentName: input.assessmentName }),
    ...(input.assessmentReportsDestination !== undefined &&
      input.assessmentReportsDestination !== null && {
        assessmentReportsDestination: serializeAws_restJson1AssessmentReportsDestination(
          input.assessmentReportsDestination,
          context
        ),
      }),
    ...(input.roles !== undefined &&
      input.roles !== null && { roles: serializeAws_restJson1Roles(input.roles, context) }),
    ...(input.scope !== undefined &&
      input.scope !== null && { scope: serializeAws_restJson1Scope(input.scope, context) }),
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

export const serializeAws_restJson1UpdateAssessmentControlCommand = async (
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
  if (input.assessmentId !== undefined) {
    const labelValue: string = input.assessmentId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: assessmentId.");
    }
    resolvedPath = resolvedPath.replace("{assessmentId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: assessmentId.");
  }
  if (input.controlSetId !== undefined) {
    const labelValue: string = input.controlSetId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: controlSetId.");
    }
    resolvedPath = resolvedPath.replace("{controlSetId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: controlSetId.");
  }
  if (input.controlId !== undefined) {
    const labelValue: string = input.controlId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: controlId.");
    }
    resolvedPath = resolvedPath.replace("{controlId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: controlId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.commentBody !== undefined && input.commentBody !== null && { commentBody: input.commentBody }),
    ...(input.controlStatus !== undefined && input.controlStatus !== null && { controlStatus: input.controlStatus }),
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

export const serializeAws_restJson1UpdateAssessmentControlSetStatusCommand = async (
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
  if (input.assessmentId !== undefined) {
    const labelValue: string = input.assessmentId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: assessmentId.");
    }
    resolvedPath = resolvedPath.replace("{assessmentId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: assessmentId.");
  }
  if (input.controlSetId !== undefined) {
    const labelValue: string = input.controlSetId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: controlSetId.");
    }
    resolvedPath = resolvedPath.replace("{controlSetId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: controlSetId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.comment !== undefined && input.comment !== null && { comment: input.comment }),
    ...(input.status !== undefined && input.status !== null && { status: input.status }),
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

export const serializeAws_restJson1UpdateAssessmentFrameworkCommand = async (
  input: UpdateAssessmentFrameworkCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/assessmentFrameworks/{frameworkId}";
  if (input.frameworkId !== undefined) {
    const labelValue: string = input.frameworkId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: frameworkId.");
    }
    resolvedPath = resolvedPath.replace("{frameworkId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: frameworkId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.complianceType !== undefined &&
      input.complianceType !== null && { complianceType: input.complianceType }),
    ...(input.controlSets !== undefined &&
      input.controlSets !== null && {
        controlSets: serializeAws_restJson1UpdateAssessmentFrameworkControlSets(input.controlSets, context),
      }),
    ...(input.description !== undefined && input.description !== null && { description: input.description }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
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

export const serializeAws_restJson1UpdateAssessmentStatusCommand = async (
  input: UpdateAssessmentStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/assessments/{assessmentId}/status";
  if (input.assessmentId !== undefined) {
    const labelValue: string = input.assessmentId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: assessmentId.");
    }
    resolvedPath = resolvedPath.replace("{assessmentId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: assessmentId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.status !== undefined && input.status !== null && { status: input.status }),
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

export const serializeAws_restJson1UpdateControlCommand = async (
  input: UpdateControlCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/controls/{controlId}";
  if (input.controlId !== undefined) {
    const labelValue: string = input.controlId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: controlId.");
    }
    resolvedPath = resolvedPath.replace("{controlId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: controlId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.actionPlanInstructions !== undefined &&
      input.actionPlanInstructions !== null && { actionPlanInstructions: input.actionPlanInstructions }),
    ...(input.actionPlanTitle !== undefined &&
      input.actionPlanTitle !== null && { actionPlanTitle: input.actionPlanTitle }),
    ...(input.controlMappingSources !== undefined &&
      input.controlMappingSources !== null && {
        controlMappingSources: serializeAws_restJson1ControlMappingSources(input.controlMappingSources, context),
      }),
    ...(input.description !== undefined && input.description !== null && { description: input.description }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.testingInformation !== undefined &&
      input.testingInformation !== null && { testingInformation: input.testingInformation }),
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

export const serializeAws_restJson1UpdateSettingsCommand = async (
  input: UpdateSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/settings";
  let body: any;
  body = JSON.stringify({
    ...(input.defaultAssessmentReportsDestination !== undefined &&
      input.defaultAssessmentReportsDestination !== null && {
        defaultAssessmentReportsDestination: serializeAws_restJson1AssessmentReportsDestination(
          input.defaultAssessmentReportsDestination,
          context
        ),
      }),
    ...(input.defaultProcessOwners !== undefined &&
      input.defaultProcessOwners !== null && {
        defaultProcessOwners: serializeAws_restJson1Roles(input.defaultProcessOwners, context),
      }),
    ...(input.kmsKey !== undefined && input.kmsKey !== null && { kmsKey: input.kmsKey }),
    ...(input.snsTopic !== undefined && input.snsTopic !== null && { snsTopic: input.snsTopic }),
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

export const serializeAws_restJson1ValidateAssessmentReportIntegrityCommand = async (
  input: ValidateAssessmentReportIntegrityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/assessmentReports/integrity";
  let body: any;
  body = JSON.stringify({
    ...(input.s3RelativePath !== undefined &&
      input.s3RelativePath !== null && { s3RelativePath: input.s3RelativePath }),
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

export const deserializeAws_restJson1AssociateAssessmentReportEvidenceFolderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateAssessmentReportEvidenceFolderCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1AssociateAssessmentReportEvidenceFolderCommandError(output, context);
  }
  const contents: AssociateAssessmentReportEvidenceFolderCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1AssociateAssessmentReportEvidenceFolderCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateAssessmentReportEvidenceFolderCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.auditmanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.auditmanager#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.auditmanager#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1BatchAssociateAssessmentReportEvidenceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchAssociateAssessmentReportEvidenceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1BatchAssociateAssessmentReportEvidenceCommandError(output, context);
  }
  const contents: BatchAssociateAssessmentReportEvidenceCommandOutput = {
    $metadata: deserializeMetadata(output),
    errors: undefined,
    evidenceIds: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.errors !== undefined && data.errors !== null) {
    contents.errors = deserializeAws_restJson1AssessmentReportEvidenceErrors(data.errors, context);
  }
  if (data.evidenceIds !== undefined && data.evidenceIds !== null) {
    contents.evidenceIds = deserializeAws_restJson1EvidenceIds(data.evidenceIds, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1BatchAssociateAssessmentReportEvidenceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchAssociateAssessmentReportEvidenceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.auditmanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.auditmanager#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.auditmanager#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1BatchCreateDelegationByAssessmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchCreateDelegationByAssessmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1BatchCreateDelegationByAssessmentCommandError(output, context);
  }
  const contents: BatchCreateDelegationByAssessmentCommandOutput = {
    $metadata: deserializeMetadata(output),
    delegations: undefined,
    errors: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.delegations !== undefined && data.delegations !== null) {
    contents.delegations = deserializeAws_restJson1Delegations(data.delegations, context);
  }
  if (data.errors !== undefined && data.errors !== null) {
    contents.errors = deserializeAws_restJson1BatchCreateDelegationByAssessmentErrors(data.errors, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1BatchCreateDelegationByAssessmentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchCreateDelegationByAssessmentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.auditmanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.auditmanager#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.auditmanager#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1BatchDeleteDelegationByAssessmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDeleteDelegationByAssessmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1BatchDeleteDelegationByAssessmentCommandError(output, context);
  }
  const contents: BatchDeleteDelegationByAssessmentCommandOutput = {
    $metadata: deserializeMetadata(output),
    errors: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.errors !== undefined && data.errors !== null) {
    contents.errors = deserializeAws_restJson1BatchDeleteDelegationByAssessmentErrors(data.errors, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1BatchDeleteDelegationByAssessmentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDeleteDelegationByAssessmentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.auditmanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.auditmanager#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.auditmanager#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1BatchDisassociateAssessmentReportEvidenceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDisassociateAssessmentReportEvidenceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1BatchDisassociateAssessmentReportEvidenceCommandError(output, context);
  }
  const contents: BatchDisassociateAssessmentReportEvidenceCommandOutput = {
    $metadata: deserializeMetadata(output),
    errors: undefined,
    evidenceIds: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.errors !== undefined && data.errors !== null) {
    contents.errors = deserializeAws_restJson1AssessmentReportEvidenceErrors(data.errors, context);
  }
  if (data.evidenceIds !== undefined && data.evidenceIds !== null) {
    contents.evidenceIds = deserializeAws_restJson1EvidenceIds(data.evidenceIds, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1BatchDisassociateAssessmentReportEvidenceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDisassociateAssessmentReportEvidenceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.auditmanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.auditmanager#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.auditmanager#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1BatchImportEvidenceToAssessmentControlCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchImportEvidenceToAssessmentControlCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1BatchImportEvidenceToAssessmentControlCommandError(output, context);
  }
  const contents: BatchImportEvidenceToAssessmentControlCommandOutput = {
    $metadata: deserializeMetadata(output),
    errors: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.errors !== undefined && data.errors !== null) {
    contents.errors = deserializeAws_restJson1BatchImportEvidenceToAssessmentControlErrors(data.errors, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1BatchImportEvidenceToAssessmentControlCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchImportEvidenceToAssessmentControlCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.auditmanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.auditmanager#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.auditmanager#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1CreateAssessmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAssessmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateAssessmentCommandError(output, context);
  }
  const contents: CreateAssessmentCommandOutput = {
    $metadata: deserializeMetadata(output),
    assessment: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.assessment !== undefined && data.assessment !== null) {
    contents.assessment = deserializeAws_restJson1Assessment(data.assessment, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateAssessmentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAssessmentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.auditmanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.auditmanager#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.auditmanager#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1CreateAssessmentFrameworkCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAssessmentFrameworkCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateAssessmentFrameworkCommandError(output, context);
  }
  const contents: CreateAssessmentFrameworkCommandOutput = {
    $metadata: deserializeMetadata(output),
    framework: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.framework !== undefined && data.framework !== null) {
    contents.framework = deserializeAws_restJson1Framework(data.framework, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateAssessmentFrameworkCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAssessmentFrameworkCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.auditmanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.auditmanager#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.auditmanager#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1CreateAssessmentReportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAssessmentReportCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateAssessmentReportCommandError(output, context);
  }
  const contents: CreateAssessmentReportCommandOutput = {
    $metadata: deserializeMetadata(output),
    assessmentReport: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.assessmentReport !== undefined && data.assessmentReport !== null) {
    contents.assessmentReport = deserializeAws_restJson1AssessmentReport(data.assessmentReport, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateAssessmentReportCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAssessmentReportCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.auditmanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.auditmanager#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.auditmanager#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1CreateControlCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateControlCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateControlCommandError(output, context);
  }
  const contents: CreateControlCommandOutput = {
    $metadata: deserializeMetadata(output),
    control: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.control !== undefined && data.control !== null) {
    contents.control = deserializeAws_restJson1Control(data.control, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateControlCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateControlCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.auditmanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.auditmanager#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.auditmanager#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteAssessmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAssessmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteAssessmentCommandError(output, context);
  }
  const contents: DeleteAssessmentCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteAssessmentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAssessmentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.auditmanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.auditmanager#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.auditmanager#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteAssessmentFrameworkCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAssessmentFrameworkCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteAssessmentFrameworkCommandError(output, context);
  }
  const contents: DeleteAssessmentFrameworkCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteAssessmentFrameworkCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAssessmentFrameworkCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.auditmanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.auditmanager#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.auditmanager#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteAssessmentReportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAssessmentReportCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteAssessmentReportCommandError(output, context);
  }
  const contents: DeleteAssessmentReportCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteAssessmentReportCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAssessmentReportCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.auditmanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.auditmanager#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.auditmanager#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteControlCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteControlCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteControlCommandError(output, context);
  }
  const contents: DeleteControlCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteControlCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteControlCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.auditmanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.auditmanager#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.auditmanager#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeregisterAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterAccountCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeregisterAccountCommandError(output, context);
  }
  const contents: DeregisterAccountCommandOutput = {
    $metadata: deserializeMetadata(output),
    status: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.status !== undefined && data.status !== null) {
    contents.status = __expectString(data.status);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeregisterAccountCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterAccountCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.auditmanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.auditmanager#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.auditmanager#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeregisterOrganizationAdminAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterOrganizationAdminAccountCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeregisterOrganizationAdminAccountCommandError(output, context);
  }
  const contents: DeregisterOrganizationAdminAccountCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeregisterOrganizationAdminAccountCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterOrganizationAdminAccountCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.auditmanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.auditmanager#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.auditmanager#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DisassociateAssessmentReportEvidenceFolderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateAssessmentReportEvidenceFolderCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DisassociateAssessmentReportEvidenceFolderCommandError(output, context);
  }
  const contents: DisassociateAssessmentReportEvidenceFolderCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DisassociateAssessmentReportEvidenceFolderCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateAssessmentReportEvidenceFolderCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.auditmanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.auditmanager#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.auditmanager#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetAccountStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccountStatusCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetAccountStatusCommandError(output, context);
  }
  const contents: GetAccountStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    status: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.status !== undefined && data.status !== null) {
    contents.status = __expectString(data.status);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetAccountStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccountStatusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetAssessmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAssessmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetAssessmentCommandError(output, context);
  }
  const contents: GetAssessmentCommandOutput = {
    $metadata: deserializeMetadata(output),
    assessment: undefined,
    userRole: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.assessment !== undefined && data.assessment !== null) {
    contents.assessment = deserializeAws_restJson1Assessment(data.assessment, context);
  }
  if (data.userRole !== undefined && data.userRole !== null) {
    contents.userRole = deserializeAws_restJson1Role(data.userRole, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetAssessmentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAssessmentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.auditmanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.auditmanager#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.auditmanager#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetAssessmentFrameworkCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAssessmentFrameworkCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetAssessmentFrameworkCommandError(output, context);
  }
  const contents: GetAssessmentFrameworkCommandOutput = {
    $metadata: deserializeMetadata(output),
    framework: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.framework !== undefined && data.framework !== null) {
    contents.framework = deserializeAws_restJson1Framework(data.framework, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetAssessmentFrameworkCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAssessmentFrameworkCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.auditmanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.auditmanager#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.auditmanager#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetAssessmentReportUrlCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAssessmentReportUrlCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetAssessmentReportUrlCommandError(output, context);
  }
  const contents: GetAssessmentReportUrlCommandOutput = {
    $metadata: deserializeMetadata(output),
    preSignedUrl: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.preSignedUrl !== undefined && data.preSignedUrl !== null) {
    contents.preSignedUrl = deserializeAws_restJson1URL(data.preSignedUrl, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetAssessmentReportUrlCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAssessmentReportUrlCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.auditmanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.auditmanager#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.auditmanager#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetChangeLogsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetChangeLogsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetChangeLogsCommandError(output, context);
  }
  const contents: GetChangeLogsCommandOutput = {
    $metadata: deserializeMetadata(output),
    changeLogs: undefined,
    nextToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.changeLogs !== undefined && data.changeLogs !== null) {
    contents.changeLogs = deserializeAws_restJson1ChangeLogs(data.changeLogs, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetChangeLogsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetChangeLogsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.auditmanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.auditmanager#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.auditmanager#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetControlCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetControlCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetControlCommandError(output, context);
  }
  const contents: GetControlCommandOutput = {
    $metadata: deserializeMetadata(output),
    control: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.control !== undefined && data.control !== null) {
    contents.control = deserializeAws_restJson1Control(data.control, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetControlCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetControlCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.auditmanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.auditmanager#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.auditmanager#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetDelegationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDelegationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetDelegationsCommandError(output, context);
  }
  const contents: GetDelegationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    delegations: undefined,
    nextToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.delegations !== undefined && data.delegations !== null) {
    contents.delegations = deserializeAws_restJson1DelegationMetadataList(data.delegations, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetDelegationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDelegationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.auditmanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.auditmanager#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetEvidenceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEvidenceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetEvidenceCommandError(output, context);
  }
  const contents: GetEvidenceCommandOutput = {
    $metadata: deserializeMetadata(output),
    evidence: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.evidence !== undefined && data.evidence !== null) {
    contents.evidence = deserializeAws_restJson1Evidence(data.evidence, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetEvidenceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEvidenceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.auditmanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.auditmanager#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.auditmanager#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetEvidenceByEvidenceFolderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEvidenceByEvidenceFolderCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetEvidenceByEvidenceFolderCommandError(output, context);
  }
  const contents: GetEvidenceByEvidenceFolderCommandOutput = {
    $metadata: deserializeMetadata(output),
    evidence: undefined,
    nextToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.evidence !== undefined && data.evidence !== null) {
    contents.evidence = deserializeAws_restJson1EvidenceList(data.evidence, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetEvidenceByEvidenceFolderCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEvidenceByEvidenceFolderCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.auditmanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.auditmanager#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.auditmanager#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetEvidenceFolderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEvidenceFolderCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetEvidenceFolderCommandError(output, context);
  }
  const contents: GetEvidenceFolderCommandOutput = {
    $metadata: deserializeMetadata(output),
    evidenceFolder: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.evidenceFolder !== undefined && data.evidenceFolder !== null) {
    contents.evidenceFolder = deserializeAws_restJson1AssessmentEvidenceFolder(data.evidenceFolder, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetEvidenceFolderCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEvidenceFolderCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.auditmanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.auditmanager#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.auditmanager#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetEvidenceFoldersByAssessmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEvidenceFoldersByAssessmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetEvidenceFoldersByAssessmentCommandError(output, context);
  }
  const contents: GetEvidenceFoldersByAssessmentCommandOutput = {
    $metadata: deserializeMetadata(output),
    evidenceFolders: undefined,
    nextToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.evidenceFolders !== undefined && data.evidenceFolders !== null) {
    contents.evidenceFolders = deserializeAws_restJson1AssessmentEvidenceFolders(data.evidenceFolders, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetEvidenceFoldersByAssessmentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEvidenceFoldersByAssessmentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.auditmanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.auditmanager#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.auditmanager#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetEvidenceFoldersByAssessmentControlCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEvidenceFoldersByAssessmentControlCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetEvidenceFoldersByAssessmentControlCommandError(output, context);
  }
  const contents: GetEvidenceFoldersByAssessmentControlCommandOutput = {
    $metadata: deserializeMetadata(output),
    evidenceFolders: undefined,
    nextToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.evidenceFolders !== undefined && data.evidenceFolders !== null) {
    contents.evidenceFolders = deserializeAws_restJson1AssessmentEvidenceFolders(data.evidenceFolders, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetEvidenceFoldersByAssessmentControlCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEvidenceFoldersByAssessmentControlCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.auditmanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.auditmanager#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.auditmanager#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetOrganizationAdminAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOrganizationAdminAccountCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetOrganizationAdminAccountCommandError(output, context);
  }
  const contents: GetOrganizationAdminAccountCommandOutput = {
    $metadata: deserializeMetadata(output),
    adminAccountId: undefined,
    organizationId: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.adminAccountId !== undefined && data.adminAccountId !== null) {
    contents.adminAccountId = __expectString(data.adminAccountId);
  }
  if (data.organizationId !== undefined && data.organizationId !== null) {
    contents.organizationId = __expectString(data.organizationId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetOrganizationAdminAccountCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOrganizationAdminAccountCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.auditmanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.auditmanager#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.auditmanager#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetServicesInScopeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetServicesInScopeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetServicesInScopeCommandError(output, context);
  }
  const contents: GetServicesInScopeCommandOutput = {
    $metadata: deserializeMetadata(output),
    serviceMetadata: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.serviceMetadata !== undefined && data.serviceMetadata !== null) {
    contents.serviceMetadata = deserializeAws_restJson1ServiceMetadataList(data.serviceMetadata, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetServicesInScopeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetServicesInScopeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.auditmanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.auditmanager#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetSettingsCommandError(output, context);
  }
  const contents: GetSettingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    settings: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.settings !== undefined && data.settings !== null) {
    contents.settings = deserializeAws_restJson1Settings(data.settings, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetSettingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSettingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.auditmanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListAssessmentFrameworksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAssessmentFrameworksCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListAssessmentFrameworksCommandError(output, context);
  }
  const contents: ListAssessmentFrameworksCommandOutput = {
    $metadata: deserializeMetadata(output),
    frameworkMetadataList: undefined,
    nextToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.frameworkMetadataList !== undefined && data.frameworkMetadataList !== null) {
    contents.frameworkMetadataList = deserializeAws_restJson1FrameworkMetadataList(data.frameworkMetadataList, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListAssessmentFrameworksCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAssessmentFrameworksCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.auditmanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.auditmanager#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListAssessmentReportsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAssessmentReportsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListAssessmentReportsCommandError(output, context);
  }
  const contents: ListAssessmentReportsCommandOutput = {
    $metadata: deserializeMetadata(output),
    assessmentReports: undefined,
    nextToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.assessmentReports !== undefined && data.assessmentReports !== null) {
    contents.assessmentReports = deserializeAws_restJson1AssessmentReportsMetadata(data.assessmentReports, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListAssessmentReportsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAssessmentReportsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.auditmanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.auditmanager#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListAssessmentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAssessmentsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListAssessmentsCommandError(output, context);
  }
  const contents: ListAssessmentsCommandOutput = {
    $metadata: deserializeMetadata(output),
    assessmentMetadata: undefined,
    nextToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.assessmentMetadata !== undefined && data.assessmentMetadata !== null) {
    contents.assessmentMetadata = deserializeAws_restJson1ListAssessmentMetadata(data.assessmentMetadata, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListAssessmentsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAssessmentsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.auditmanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.auditmanager#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListControlsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListControlsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListControlsCommandError(output, context);
  }
  const contents: ListControlsCommandOutput = {
    $metadata: deserializeMetadata(output),
    controlMetadataList: undefined,
    nextToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.controlMetadataList !== undefined && data.controlMetadataList !== null) {
    contents.controlMetadataList = deserializeAws_restJson1ControlMetadataList(data.controlMetadataList, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListControlsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListControlsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.auditmanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.auditmanager#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListKeywordsForDataSourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListKeywordsForDataSourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListKeywordsForDataSourceCommandError(output, context);
  }
  const contents: ListKeywordsForDataSourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    keywords: undefined,
    nextToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.keywords !== undefined && data.keywords !== null) {
    contents.keywords = deserializeAws_restJson1Keywords(data.keywords, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListKeywordsForDataSourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListKeywordsForDataSourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.auditmanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.auditmanager#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListNotificationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListNotificationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListNotificationsCommandError(output, context);
  }
  const contents: ListNotificationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    nextToken: undefined,
    notifications: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.notifications !== undefined && data.notifications !== null) {
    contents.notifications = deserializeAws_restJson1Notifications(data.notifications, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListNotificationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListNotificationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.auditmanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.auditmanager#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListTagsForResourceCommandError(output, context);
  }
  const contents: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    tags: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.tags !== undefined && data.tags !== null) {
    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListTagsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.auditmanager#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.auditmanager#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1RegisterAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterAccountCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1RegisterAccountCommandError(output, context);
  }
  const contents: RegisterAccountCommandOutput = {
    $metadata: deserializeMetadata(output),
    status: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.status !== undefined && data.status !== null) {
    contents.status = __expectString(data.status);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1RegisterAccountCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterAccountCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.auditmanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.auditmanager#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.auditmanager#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1RegisterOrganizationAdminAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterOrganizationAdminAccountCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1RegisterOrganizationAdminAccountCommandError(output, context);
  }
  const contents: RegisterOrganizationAdminAccountCommandOutput = {
    $metadata: deserializeMetadata(output),
    adminAccountId: undefined,
    organizationId: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.adminAccountId !== undefined && data.adminAccountId !== null) {
    contents.adminAccountId = __expectString(data.adminAccountId);
  }
  if (data.organizationId !== undefined && data.organizationId !== null) {
    contents.organizationId = __expectString(data.organizationId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1RegisterOrganizationAdminAccountCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterOrganizationAdminAccountCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.auditmanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.auditmanager#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.auditmanager#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1TagResourceCommandError(output, context);
  }
  const contents: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.auditmanager#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.auditmanager#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UntagResourceCommandError(output, context);
  }
  const contents: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.auditmanager#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.auditmanager#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateAssessmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAssessmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateAssessmentCommandError(output, context);
  }
  const contents: UpdateAssessmentCommandOutput = {
    $metadata: deserializeMetadata(output),
    assessment: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.assessment !== undefined && data.assessment !== null) {
    contents.assessment = deserializeAws_restJson1Assessment(data.assessment, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateAssessmentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAssessmentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.auditmanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.auditmanager#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.auditmanager#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateAssessmentControlCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAssessmentControlCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateAssessmentControlCommandError(output, context);
  }
  const contents: UpdateAssessmentControlCommandOutput = {
    $metadata: deserializeMetadata(output),
    control: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.control !== undefined && data.control !== null) {
    contents.control = deserializeAws_restJson1AssessmentControl(data.control, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateAssessmentControlCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAssessmentControlCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.auditmanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.auditmanager#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.auditmanager#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateAssessmentControlSetStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAssessmentControlSetStatusCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateAssessmentControlSetStatusCommandError(output, context);
  }
  const contents: UpdateAssessmentControlSetStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    controlSet: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.controlSet !== undefined && data.controlSet !== null) {
    contents.controlSet = deserializeAws_restJson1AssessmentControlSet(data.controlSet, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateAssessmentControlSetStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAssessmentControlSetStatusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.auditmanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.auditmanager#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.auditmanager#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateAssessmentFrameworkCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAssessmentFrameworkCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateAssessmentFrameworkCommandError(output, context);
  }
  const contents: UpdateAssessmentFrameworkCommandOutput = {
    $metadata: deserializeMetadata(output),
    framework: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.framework !== undefined && data.framework !== null) {
    contents.framework = deserializeAws_restJson1Framework(data.framework, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateAssessmentFrameworkCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAssessmentFrameworkCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.auditmanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.auditmanager#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.auditmanager#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateAssessmentStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAssessmentStatusCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateAssessmentStatusCommandError(output, context);
  }
  const contents: UpdateAssessmentStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    assessment: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.assessment !== undefined && data.assessment !== null) {
    contents.assessment = deserializeAws_restJson1Assessment(data.assessment, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateAssessmentStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAssessmentStatusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.auditmanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.auditmanager#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.auditmanager#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateControlCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateControlCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateControlCommandError(output, context);
  }
  const contents: UpdateControlCommandOutput = {
    $metadata: deserializeMetadata(output),
    control: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.control !== undefined && data.control !== null) {
    contents.control = deserializeAws_restJson1Control(data.control, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateControlCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateControlCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.auditmanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.auditmanager#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.auditmanager#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateSettingsCommandError(output, context);
  }
  const contents: UpdateSettingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    settings: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.settings !== undefined && data.settings !== null) {
    contents.settings = deserializeAws_restJson1Settings(data.settings, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateSettingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSettingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.auditmanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.auditmanager#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ValidateAssessmentReportIntegrityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ValidateAssessmentReportIntegrityCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ValidateAssessmentReportIntegrityCommandError(output, context);
  }
  const contents: ValidateAssessmentReportIntegrityCommandOutput = {
    $metadata: deserializeMetadata(output),
    signatureAlgorithm: undefined,
    signatureDateTime: undefined,
    signatureKeyId: undefined,
    signatureValid: undefined,
    validationErrors: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.signatureAlgorithm !== undefined && data.signatureAlgorithm !== null) {
    contents.signatureAlgorithm = __expectString(data.signatureAlgorithm);
  }
  if (data.signatureDateTime !== undefined && data.signatureDateTime !== null) {
    contents.signatureDateTime = __expectString(data.signatureDateTime);
  }
  if (data.signatureKeyId !== undefined && data.signatureKeyId !== null) {
    contents.signatureKeyId = __expectString(data.signatureKeyId);
  }
  if (data.signatureValid !== undefined && data.signatureValid !== null) {
    contents.signatureValid = __expectBoolean(data.signatureValid);
  }
  if (data.validationErrors !== undefined && data.validationErrors !== null) {
    contents.validationErrors = deserializeAws_restJson1ValidationErrors(data.validationErrors, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ValidateAssessmentReportIntegrityCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ValidateAssessmentReportIntegrityCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.auditmanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.auditmanager#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.auditmanager#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.auditmanager#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

const deserializeAws_restJson1AccessDeniedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: AccessDeniedException = {
    name: "AccessDeniedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  return contents;
};

const deserializeAws_restJson1InternalServerExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const contents: InternalServerException = {
    name: "InternalServerException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  return contents;
};

const deserializeAws_restJson1ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const contents: ResourceNotFoundException = {
    name: "ResourceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
    resourceId: undefined,
    resourceType: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  if (data.resourceId !== undefined && data.resourceId !== null) {
    contents.resourceId = __expectString(data.resourceId);
  }
  if (data.resourceType !== undefined && data.resourceType !== null) {
    contents.resourceType = __expectString(data.resourceType);
  }
  return contents;
};

const deserializeAws_restJson1ValidationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ValidationException> => {
  const contents: ValidationException = {
    name: "ValidationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    fields: undefined,
    message: undefined,
    reason: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.fields !== undefined && data.fields !== null) {
    contents.fields = deserializeAws_restJson1ValidationExceptionFieldList(data.fields, context);
  }
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  if (data.reason !== undefined && data.reason !== null) {
    contents.reason = __expectString(data.reason);
  }
  return contents;
};

const serializeAws_restJson1AssessmentReportsDestination = (
  input: AssessmentReportsDestination,
  context: __SerdeContext
): any => {
  return {
    ...(input.destination !== undefined && input.destination !== null && { destination: input.destination }),
    ...(input.destinationType !== undefined &&
      input.destinationType !== null && { destinationType: input.destinationType }),
  };
};

const serializeAws_restJson1AWSAccount = (input: AWSAccount, context: __SerdeContext): any => {
  return {
    ...(input.emailAddress !== undefined && input.emailAddress !== null && { emailAddress: input.emailAddress }),
    ...(input.id !== undefined && input.id !== null && { id: input.id }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
  };
};

const serializeAws_restJson1AWSAccounts = (input: AWSAccount[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1AWSAccount(entry, context);
    });
};

const serializeAws_restJson1AWSService = (input: AWSService, context: __SerdeContext): any => {
  return {
    ...(input.serviceName !== undefined && input.serviceName !== null && { serviceName: input.serviceName }),
  };
};

const serializeAws_restJson1AWSServices = (input: AWSService[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1AWSService(entry, context);
    });
};

const serializeAws_restJson1ControlMappingSource = (input: ControlMappingSource, context: __SerdeContext): any => {
  return {
    ...(input.sourceDescription !== undefined &&
      input.sourceDescription !== null && { sourceDescription: input.sourceDescription }),
    ...(input.sourceFrequency !== undefined &&
      input.sourceFrequency !== null && { sourceFrequency: input.sourceFrequency }),
    ...(input.sourceId !== undefined && input.sourceId !== null && { sourceId: input.sourceId }),
    ...(input.sourceKeyword !== undefined &&
      input.sourceKeyword !== null && {
        sourceKeyword: serializeAws_restJson1SourceKeyword(input.sourceKeyword, context),
      }),
    ...(input.sourceName !== undefined && input.sourceName !== null && { sourceName: input.sourceName }),
    ...(input.sourceSetUpOption !== undefined &&
      input.sourceSetUpOption !== null && { sourceSetUpOption: input.sourceSetUpOption }),
    ...(input.sourceType !== undefined && input.sourceType !== null && { sourceType: input.sourceType }),
    ...(input.troubleshootingText !== undefined &&
      input.troubleshootingText !== null && { troubleshootingText: input.troubleshootingText }),
  };
};

const serializeAws_restJson1ControlMappingSources = (input: ControlMappingSource[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1ControlMappingSource(entry, context);
    });
};

const serializeAws_restJson1CreateAssessmentFrameworkControl = (
  input: CreateAssessmentFrameworkControl,
  context: __SerdeContext
): any => {
  return {
    ...(input.id !== undefined && input.id !== null && { id: input.id }),
  };
};

const serializeAws_restJson1CreateAssessmentFrameworkControls = (
  input: CreateAssessmentFrameworkControl[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1CreateAssessmentFrameworkControl(entry, context);
    });
};

const serializeAws_restJson1CreateAssessmentFrameworkControlSet = (
  input: CreateAssessmentFrameworkControlSet,
  context: __SerdeContext
): any => {
  return {
    ...(input.controls !== undefined &&
      input.controls !== null && {
        controls: serializeAws_restJson1CreateAssessmentFrameworkControls(input.controls, context),
      }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
  };
};

const serializeAws_restJson1CreateAssessmentFrameworkControlSets = (
  input: CreateAssessmentFrameworkControlSet[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1CreateAssessmentFrameworkControlSet(entry, context);
    });
};

const serializeAws_restJson1CreateControlMappingSource = (
  input: CreateControlMappingSource,
  context: __SerdeContext
): any => {
  return {
    ...(input.sourceDescription !== undefined &&
      input.sourceDescription !== null && { sourceDescription: input.sourceDescription }),
    ...(input.sourceFrequency !== undefined &&
      input.sourceFrequency !== null && { sourceFrequency: input.sourceFrequency }),
    ...(input.sourceKeyword !== undefined &&
      input.sourceKeyword !== null && {
        sourceKeyword: serializeAws_restJson1SourceKeyword(input.sourceKeyword, context),
      }),
    ...(input.sourceName !== undefined && input.sourceName !== null && { sourceName: input.sourceName }),
    ...(input.sourceSetUpOption !== undefined &&
      input.sourceSetUpOption !== null && { sourceSetUpOption: input.sourceSetUpOption }),
    ...(input.sourceType !== undefined && input.sourceType !== null && { sourceType: input.sourceType }),
    ...(input.troubleshootingText !== undefined &&
      input.troubleshootingText !== null && { troubleshootingText: input.troubleshootingText }),
  };
};

const serializeAws_restJson1CreateControlMappingSources = (
  input: CreateControlMappingSource[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1CreateControlMappingSource(entry, context);
    });
};

const serializeAws_restJson1CreateDelegationRequest = (
  input: CreateDelegationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.comment !== undefined && input.comment !== null && { comment: input.comment }),
    ...(input.controlSetId !== undefined && input.controlSetId !== null && { controlSetId: input.controlSetId }),
    ...(input.roleArn !== undefined && input.roleArn !== null && { roleArn: input.roleArn }),
    ...(input.roleType !== undefined && input.roleType !== null && { roleType: input.roleType }),
  };
};

const serializeAws_restJson1CreateDelegationRequests = (
  input: CreateDelegationRequest[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1CreateDelegationRequest(entry, context);
    });
};

const serializeAws_restJson1DelegationIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1EvidenceIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1ManualEvidence = (input: ManualEvidence, context: __SerdeContext): any => {
  return {
    ...(input.s3ResourcePath !== undefined &&
      input.s3ResourcePath !== null && { s3ResourcePath: input.s3ResourcePath }),
  };
};

const serializeAws_restJson1ManualEvidenceList = (input: ManualEvidence[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1ManualEvidence(entry, context);
    });
};

const serializeAws_restJson1Role = (input: Role, context: __SerdeContext): any => {
  return {
    ...(input.roleArn !== undefined && input.roleArn !== null && { roleArn: input.roleArn }),
    ...(input.roleType !== undefined && input.roleType !== null && { roleType: input.roleType }),
  };
};

const serializeAws_restJson1Roles = (input: Role[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1Role(entry, context);
    });
};

const serializeAws_restJson1Scope = (input: Scope, context: __SerdeContext): any => {
  return {
    ...(input.awsAccounts !== undefined &&
      input.awsAccounts !== null && { awsAccounts: serializeAws_restJson1AWSAccounts(input.awsAccounts, context) }),
    ...(input.awsServices !== undefined &&
      input.awsServices !== null && { awsServices: serializeAws_restJson1AWSServices(input.awsServices, context) }),
  };
};

const serializeAws_restJson1SourceKeyword = (input: SourceKeyword, context: __SerdeContext): any => {
  return {
    ...(input.keywordInputType !== undefined &&
      input.keywordInputType !== null && { keywordInputType: input.keywordInputType }),
    ...(input.keywordValue !== undefined && input.keywordValue !== null && { keywordValue: input.keywordValue }),
  };
};

const serializeAws_restJson1TagMap = (input: { [key: string]: string }, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: { [key: string]: any }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const serializeAws_restJson1UpdateAssessmentFrameworkControlSet = (
  input: UpdateAssessmentFrameworkControlSet,
  context: __SerdeContext
): any => {
  return {
    ...(input.controls !== undefined &&
      input.controls !== null && {
        controls: serializeAws_restJson1CreateAssessmentFrameworkControls(input.controls, context),
      }),
    ...(input.id !== undefined && input.id !== null && { id: input.id }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
  };
};

const serializeAws_restJson1UpdateAssessmentFrameworkControlSets = (
  input: UpdateAssessmentFrameworkControlSet[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1UpdateAssessmentFrameworkControlSet(entry, context);
    });
};

const deserializeAws_restJson1Assessment = (output: any, context: __SerdeContext): Assessment => {
  return {
    arn: __expectString(output.arn),
    awsAccount:
      output.awsAccount !== undefined && output.awsAccount !== null
        ? deserializeAws_restJson1AWSAccount(output.awsAccount, context)
        : undefined,
    framework:
      output.framework !== undefined && output.framework !== null
        ? deserializeAws_restJson1AssessmentFramework(output.framework, context)
        : undefined,
    metadata:
      output.metadata !== undefined && output.metadata !== null
        ? deserializeAws_restJson1AssessmentMetadata(output.metadata, context)
        : undefined,
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1TagMap(output.tags, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AssessmentControl = (output: any, context: __SerdeContext): AssessmentControl => {
  return {
    assessmentReportEvidenceCount: __expectInt32(output.assessmentReportEvidenceCount),
    comments:
      output.comments !== undefined && output.comments !== null
        ? deserializeAws_restJson1ControlComments(output.comments, context)
        : undefined,
    description: __expectString(output.description),
    evidenceCount: __expectInt32(output.evidenceCount),
    evidenceSources:
      output.evidenceSources !== undefined && output.evidenceSources !== null
        ? deserializeAws_restJson1EvidenceSources(output.evidenceSources, context)
        : undefined,
    id: __expectString(output.id),
    name: __expectString(output.name),
    response: __expectString(output.response),
    status: __expectString(output.status),
  } as any;
};

const deserializeAws_restJson1AssessmentControls = (output: any, context: __SerdeContext): AssessmentControl[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AssessmentControl(entry, context);
    });
};

const deserializeAws_restJson1AssessmentControlSet = (output: any, context: __SerdeContext): AssessmentControlSet => {
  return {
    controls:
      output.controls !== undefined && output.controls !== null
        ? deserializeAws_restJson1AssessmentControls(output.controls, context)
        : undefined,
    delegations:
      output.delegations !== undefined && output.delegations !== null
        ? deserializeAws_restJson1Delegations(output.delegations, context)
        : undefined,
    description: __expectString(output.description),
    id: __expectString(output.id),
    manualEvidenceCount: __expectInt32(output.manualEvidenceCount),
    roles:
      output.roles !== undefined && output.roles !== null
        ? deserializeAws_restJson1Roles(output.roles, context)
        : undefined,
    status: __expectString(output.status),
    systemEvidenceCount: __expectInt32(output.systemEvidenceCount),
  } as any;
};

const deserializeAws_restJson1AssessmentControlSets = (
  output: any,
  context: __SerdeContext
): AssessmentControlSet[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AssessmentControlSet(entry, context);
    });
};

const deserializeAws_restJson1AssessmentEvidenceFolder = (
  output: any,
  context: __SerdeContext
): AssessmentEvidenceFolder => {
  return {
    assessmentId: __expectString(output.assessmentId),
    assessmentReportSelectionCount: __expectInt32(output.assessmentReportSelectionCount),
    author: __expectString(output.author),
    controlId: __expectString(output.controlId),
    controlName: __expectString(output.controlName),
    controlSetId: __expectString(output.controlSetId),
    dataSource: __expectString(output.dataSource),
    date:
      output.date !== undefined && output.date !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.date)))
        : undefined,
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

const deserializeAws_restJson1AssessmentEvidenceFolders = (
  output: any,
  context: __SerdeContext
): AssessmentEvidenceFolder[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AssessmentEvidenceFolder(entry, context);
    });
};

const deserializeAws_restJson1AssessmentFramework = (output: any, context: __SerdeContext): AssessmentFramework => {
  return {
    arn: __expectString(output.arn),
    controlSets:
      output.controlSets !== undefined && output.controlSets !== null
        ? deserializeAws_restJson1AssessmentControlSets(output.controlSets, context)
        : undefined,
    id: __expectString(output.id),
    metadata:
      output.metadata !== undefined && output.metadata !== null
        ? deserializeAws_restJson1FrameworkMetadata(output.metadata, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AssessmentFrameworkMetadata = (
  output: any,
  context: __SerdeContext
): AssessmentFrameworkMetadata => {
  return {
    arn: __expectString(output.arn),
    complianceType: __expectString(output.complianceType),
    controlSetsCount: __expectInt32(output.controlSetsCount),
    controlsCount: __expectInt32(output.controlsCount),
    createdAt:
      output.createdAt !== undefined && output.createdAt !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt)))
        : undefined,
    description: __expectString(output.description),
    id: __expectString(output.id),
    lastUpdatedAt:
      output.lastUpdatedAt !== undefined && output.lastUpdatedAt !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdatedAt)))
        : undefined,
    logo: __expectString(output.logo),
    name: __expectString(output.name),
    type: __expectString(output.type),
  } as any;
};

const deserializeAws_restJson1AssessmentMetadata = (output: any, context: __SerdeContext): AssessmentMetadata => {
  return {
    assessmentReportsDestination:
      output.assessmentReportsDestination !== undefined && output.assessmentReportsDestination !== null
        ? deserializeAws_restJson1AssessmentReportsDestination(output.assessmentReportsDestination, context)
        : undefined,
    complianceType: __expectString(output.complianceType),
    creationTime:
      output.creationTime !== undefined && output.creationTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationTime)))
        : undefined,
    delegations:
      output.delegations !== undefined && output.delegations !== null
        ? deserializeAws_restJson1Delegations(output.delegations, context)
        : undefined,
    description: __expectString(output.description),
    id: __expectString(output.id),
    lastUpdated:
      output.lastUpdated !== undefined && output.lastUpdated !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdated)))
        : undefined,
    name: __expectString(output.name),
    roles:
      output.roles !== undefined && output.roles !== null
        ? deserializeAws_restJson1Roles(output.roles, context)
        : undefined,
    scope:
      output.scope !== undefined && output.scope !== null
        ? deserializeAws_restJson1Scope(output.scope, context)
        : undefined,
    status: __expectString(output.status),
  } as any;
};

const deserializeAws_restJson1AssessmentMetadataItem = (
  output: any,
  context: __SerdeContext
): AssessmentMetadataItem => {
  return {
    complianceType: __expectString(output.complianceType),
    creationTime:
      output.creationTime !== undefined && output.creationTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationTime)))
        : undefined,
    delegations:
      output.delegations !== undefined && output.delegations !== null
        ? deserializeAws_restJson1Delegations(output.delegations, context)
        : undefined,
    id: __expectString(output.id),
    lastUpdated:
      output.lastUpdated !== undefined && output.lastUpdated !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdated)))
        : undefined,
    name: __expectString(output.name),
    roles:
      output.roles !== undefined && output.roles !== null
        ? deserializeAws_restJson1Roles(output.roles, context)
        : undefined,
    status: __expectString(output.status),
  } as any;
};

const deserializeAws_restJson1AssessmentReport = (output: any, context: __SerdeContext): AssessmentReport => {
  return {
    assessmentId: __expectString(output.assessmentId),
    assessmentName: __expectString(output.assessmentName),
    author: __expectString(output.author),
    awsAccountId: __expectString(output.awsAccountId),
    creationTime:
      output.creationTime !== undefined && output.creationTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationTime)))
        : undefined,
    description: __expectString(output.description),
    id: __expectString(output.id),
    name: __expectString(output.name),
    status: __expectString(output.status),
  } as any;
};

const deserializeAws_restJson1AssessmentReportEvidenceError = (
  output: any,
  context: __SerdeContext
): AssessmentReportEvidenceError => {
  return {
    errorCode: __expectString(output.errorCode),
    errorMessage: __expectString(output.errorMessage),
    evidenceId: __expectString(output.evidenceId),
  } as any;
};

const deserializeAws_restJson1AssessmentReportEvidenceErrors = (
  output: any,
  context: __SerdeContext
): AssessmentReportEvidenceError[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AssessmentReportEvidenceError(entry, context);
    });
};

const deserializeAws_restJson1AssessmentReportMetadata = (
  output: any,
  context: __SerdeContext
): AssessmentReportMetadata => {
  return {
    assessmentId: __expectString(output.assessmentId),
    assessmentName: __expectString(output.assessmentName),
    author: __expectString(output.author),
    creationTime:
      output.creationTime !== undefined && output.creationTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationTime)))
        : undefined,
    description: __expectString(output.description),
    id: __expectString(output.id),
    name: __expectString(output.name),
    status: __expectString(output.status),
  } as any;
};

const deserializeAws_restJson1AssessmentReportsDestination = (
  output: any,
  context: __SerdeContext
): AssessmentReportsDestination => {
  return {
    destination: __expectString(output.destination),
    destinationType: __expectString(output.destinationType),
  } as any;
};

const deserializeAws_restJson1AssessmentReportsMetadata = (
  output: any,
  context: __SerdeContext
): AssessmentReportMetadata[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AssessmentReportMetadata(entry, context);
    });
};

const deserializeAws_restJson1AWSAccount = (output: any, context: __SerdeContext): AWSAccount => {
  return {
    emailAddress: __expectString(output.emailAddress),
    id: __expectString(output.id),
    name: __expectString(output.name),
  } as any;
};

const deserializeAws_restJson1AWSAccounts = (output: any, context: __SerdeContext): AWSAccount[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AWSAccount(entry, context);
    });
};

const deserializeAws_restJson1AWSService = (output: any, context: __SerdeContext): AWSService => {
  return {
    serviceName: __expectString(output.serviceName),
  } as any;
};

const deserializeAws_restJson1AWSServices = (output: any, context: __SerdeContext): AWSService[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AWSService(entry, context);
    });
};

const deserializeAws_restJson1BatchCreateDelegationByAssessmentError = (
  output: any,
  context: __SerdeContext
): BatchCreateDelegationByAssessmentError => {
  return {
    createDelegationRequest:
      output.createDelegationRequest !== undefined && output.createDelegationRequest !== null
        ? deserializeAws_restJson1CreateDelegationRequest(output.createDelegationRequest, context)
        : undefined,
    errorCode: __expectString(output.errorCode),
    errorMessage: __expectString(output.errorMessage),
  } as any;
};

const deserializeAws_restJson1BatchCreateDelegationByAssessmentErrors = (
  output: any,
  context: __SerdeContext
): BatchCreateDelegationByAssessmentError[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1BatchCreateDelegationByAssessmentError(entry, context);
    });
};

const deserializeAws_restJson1BatchDeleteDelegationByAssessmentError = (
  output: any,
  context: __SerdeContext
): BatchDeleteDelegationByAssessmentError => {
  return {
    delegationId: __expectString(output.delegationId),
    errorCode: __expectString(output.errorCode),
    errorMessage: __expectString(output.errorMessage),
  } as any;
};

const deserializeAws_restJson1BatchDeleteDelegationByAssessmentErrors = (
  output: any,
  context: __SerdeContext
): BatchDeleteDelegationByAssessmentError[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1BatchDeleteDelegationByAssessmentError(entry, context);
    });
};

const deserializeAws_restJson1BatchImportEvidenceToAssessmentControlError = (
  output: any,
  context: __SerdeContext
): BatchImportEvidenceToAssessmentControlError => {
  return {
    errorCode: __expectString(output.errorCode),
    errorMessage: __expectString(output.errorMessage),
    manualEvidence:
      output.manualEvidence !== undefined && output.manualEvidence !== null
        ? deserializeAws_restJson1ManualEvidence(output.manualEvidence, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1BatchImportEvidenceToAssessmentControlErrors = (
  output: any,
  context: __SerdeContext
): BatchImportEvidenceToAssessmentControlError[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1BatchImportEvidenceToAssessmentControlError(entry, context);
    });
};

const deserializeAws_restJson1ChangeLog = (output: any, context: __SerdeContext): ChangeLog => {
  return {
    action: __expectString(output.action),
    createdAt:
      output.createdAt !== undefined && output.createdAt !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt)))
        : undefined,
    createdBy: __expectString(output.createdBy),
    objectName: __expectString(output.objectName),
    objectType: __expectString(output.objectType),
  } as any;
};

const deserializeAws_restJson1ChangeLogs = (output: any, context: __SerdeContext): ChangeLog[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ChangeLog(entry, context);
    });
};

const deserializeAws_restJson1Control = (output: any, context: __SerdeContext): Control => {
  return {
    actionPlanInstructions: __expectString(output.actionPlanInstructions),
    actionPlanTitle: __expectString(output.actionPlanTitle),
    arn: __expectString(output.arn),
    controlMappingSources:
      output.controlMappingSources !== undefined && output.controlMappingSources !== null
        ? deserializeAws_restJson1ControlMappingSources(output.controlMappingSources, context)
        : undefined,
    controlSources: __expectString(output.controlSources),
    createdAt:
      output.createdAt !== undefined && output.createdAt !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt)))
        : undefined,
    createdBy: __expectString(output.createdBy),
    description: __expectString(output.description),
    id: __expectString(output.id),
    lastUpdatedAt:
      output.lastUpdatedAt !== undefined && output.lastUpdatedAt !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdatedAt)))
        : undefined,
    lastUpdatedBy: __expectString(output.lastUpdatedBy),
    name: __expectString(output.name),
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1TagMap(output.tags, context)
        : undefined,
    testingInformation: __expectString(output.testingInformation),
    type: __expectString(output.type),
  } as any;
};

const deserializeAws_restJson1ControlComment = (output: any, context: __SerdeContext): ControlComment => {
  return {
    authorName: __expectString(output.authorName),
    commentBody: __expectString(output.commentBody),
    postedDate:
      output.postedDate !== undefined && output.postedDate !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.postedDate)))
        : undefined,
  } as any;
};

const deserializeAws_restJson1ControlComments = (output: any, context: __SerdeContext): ControlComment[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ControlComment(entry, context);
    });
};

const deserializeAws_restJson1ControlMappingSource = (output: any, context: __SerdeContext): ControlMappingSource => {
  return {
    sourceDescription: __expectString(output.sourceDescription),
    sourceFrequency: __expectString(output.sourceFrequency),
    sourceId: __expectString(output.sourceId),
    sourceKeyword:
      output.sourceKeyword !== undefined && output.sourceKeyword !== null
        ? deserializeAws_restJson1SourceKeyword(output.sourceKeyword, context)
        : undefined,
    sourceName: __expectString(output.sourceName),
    sourceSetUpOption: __expectString(output.sourceSetUpOption),
    sourceType: __expectString(output.sourceType),
    troubleshootingText: __expectString(output.troubleshootingText),
  } as any;
};

const deserializeAws_restJson1ControlMappingSources = (
  output: any,
  context: __SerdeContext
): ControlMappingSource[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ControlMappingSource(entry, context);
    });
};

const deserializeAws_restJson1ControlMetadata = (output: any, context: __SerdeContext): ControlMetadata => {
  return {
    arn: __expectString(output.arn),
    controlSources: __expectString(output.controlSources),
    createdAt:
      output.createdAt !== undefined && output.createdAt !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt)))
        : undefined,
    id: __expectString(output.id),
    lastUpdatedAt:
      output.lastUpdatedAt !== undefined && output.lastUpdatedAt !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdatedAt)))
        : undefined,
    name: __expectString(output.name),
  } as any;
};

const deserializeAws_restJson1ControlMetadataList = (output: any, context: __SerdeContext): ControlMetadata[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ControlMetadata(entry, context);
    });
};

const deserializeAws_restJson1Controls = (output: any, context: __SerdeContext): Control[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Control(entry, context);
    });
};

const deserializeAws_restJson1ControlSet = (output: any, context: __SerdeContext): ControlSet => {
  return {
    controls:
      output.controls !== undefined && output.controls !== null
        ? deserializeAws_restJson1Controls(output.controls, context)
        : undefined,
    id: __expectString(output.id),
    name: __expectString(output.name),
  } as any;
};

const deserializeAws_restJson1ControlSets = (output: any, context: __SerdeContext): ControlSet[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ControlSet(entry, context);
    });
};

const deserializeAws_restJson1CreateDelegationRequest = (
  output: any,
  context: __SerdeContext
): CreateDelegationRequest => {
  return {
    comment: __expectString(output.comment),
    controlSetId: __expectString(output.controlSetId),
    roleArn: __expectString(output.roleArn),
    roleType: __expectString(output.roleType),
  } as any;
};

const deserializeAws_restJson1Delegation = (output: any, context: __SerdeContext): Delegation => {
  return {
    assessmentId: __expectString(output.assessmentId),
    assessmentName: __expectString(output.assessmentName),
    comment: __expectString(output.comment),
    controlSetId: __expectString(output.controlSetId),
    createdBy: __expectString(output.createdBy),
    creationTime:
      output.creationTime !== undefined && output.creationTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationTime)))
        : undefined,
    id: __expectString(output.id),
    lastUpdated:
      output.lastUpdated !== undefined && output.lastUpdated !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdated)))
        : undefined,
    roleArn: __expectString(output.roleArn),
    roleType: __expectString(output.roleType),
    status: __expectString(output.status),
  } as any;
};

const deserializeAws_restJson1DelegationMetadata = (output: any, context: __SerdeContext): DelegationMetadata => {
  return {
    assessmentId: __expectString(output.assessmentId),
    assessmentName: __expectString(output.assessmentName),
    controlSetName: __expectString(output.controlSetName),
    creationTime:
      output.creationTime !== undefined && output.creationTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationTime)))
        : undefined,
    id: __expectString(output.id),
    roleArn: __expectString(output.roleArn),
    status: __expectString(output.status),
  } as any;
};

const deserializeAws_restJson1DelegationMetadataList = (output: any, context: __SerdeContext): DelegationMetadata[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1DelegationMetadata(entry, context);
    });
};

const deserializeAws_restJson1Delegations = (output: any, context: __SerdeContext): Delegation[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Delegation(entry, context);
    });
};

const deserializeAws_restJson1Evidence = (output: any, context: __SerdeContext): Evidence => {
  return {
    assessmentReportSelection: __expectString(output.assessmentReportSelection),
    attributes:
      output.attributes !== undefined && output.attributes !== null
        ? deserializeAws_restJson1EvidenceAttributes(output.attributes, context)
        : undefined,
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
    resourcesIncluded:
      output.resourcesIncluded !== undefined && output.resourcesIncluded !== null
        ? deserializeAws_restJson1Resources(output.resourcesIncluded, context)
        : undefined,
    time:
      output.time !== undefined && output.time !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.time)))
        : undefined,
  } as any;
};

const deserializeAws_restJson1EvidenceAttributes = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  return Object.entries(output).reduce((acc: { [key: string]: string }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: __expectString(value) as any,
    };
  }, {});
};

const deserializeAws_restJson1EvidenceIds = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_restJson1EvidenceList = (output: any, context: __SerdeContext): Evidence[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Evidence(entry, context);
    });
};

const deserializeAws_restJson1EvidenceSources = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_restJson1Framework = (output: any, context: __SerdeContext): Framework => {
  return {
    arn: __expectString(output.arn),
    complianceType: __expectString(output.complianceType),
    controlSets:
      output.controlSets !== undefined && output.controlSets !== null
        ? deserializeAws_restJson1ControlSets(output.controlSets, context)
        : undefined,
    controlSources: __expectString(output.controlSources),
    createdAt:
      output.createdAt !== undefined && output.createdAt !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt)))
        : undefined,
    createdBy: __expectString(output.createdBy),
    description: __expectString(output.description),
    id: __expectString(output.id),
    lastUpdatedAt:
      output.lastUpdatedAt !== undefined && output.lastUpdatedAt !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdatedAt)))
        : undefined,
    lastUpdatedBy: __expectString(output.lastUpdatedBy),
    logo: __expectString(output.logo),
    name: __expectString(output.name),
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1TagMap(output.tags, context)
        : undefined,
    type: __expectString(output.type),
  } as any;
};

const deserializeAws_restJson1FrameworkMetadata = (output: any, context: __SerdeContext): FrameworkMetadata => {
  return {
    complianceType: __expectString(output.complianceType),
    description: __expectString(output.description),
    logo: __expectString(output.logo),
    name: __expectString(output.name),
  } as any;
};

const deserializeAws_restJson1FrameworkMetadataList = (
  output: any,
  context: __SerdeContext
): AssessmentFrameworkMetadata[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AssessmentFrameworkMetadata(entry, context);
    });
};

const deserializeAws_restJson1Keywords = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_restJson1ListAssessmentMetadata = (
  output: any,
  context: __SerdeContext
): AssessmentMetadataItem[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AssessmentMetadataItem(entry, context);
    });
};

const deserializeAws_restJson1ManualEvidence = (output: any, context: __SerdeContext): ManualEvidence => {
  return {
    s3ResourcePath: __expectString(output.s3ResourcePath),
  } as any;
};

const deserializeAws_restJson1Notification = (output: any, context: __SerdeContext): Notification => {
  return {
    assessmentId: __expectString(output.assessmentId),
    assessmentName: __expectString(output.assessmentName),
    controlSetId: __expectString(output.controlSetId),
    controlSetName: __expectString(output.controlSetName),
    description: __expectString(output.description),
    eventTime:
      output.eventTime !== undefined && output.eventTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.eventTime)))
        : undefined,
    id: __expectString(output.id),
    source: __expectString(output.source),
  } as any;
};

const deserializeAws_restJson1Notifications = (output: any, context: __SerdeContext): Notification[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Notification(entry, context);
    });
};

const deserializeAws_restJson1Resource = (output: any, context: __SerdeContext): Resource => {
  return {
    arn: __expectString(output.arn),
    value: __expectString(output.value),
  } as any;
};

const deserializeAws_restJson1Resources = (output: any, context: __SerdeContext): Resource[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Resource(entry, context);
    });
};

const deserializeAws_restJson1Role = (output: any, context: __SerdeContext): Role => {
  return {
    roleArn: __expectString(output.roleArn),
    roleType: __expectString(output.roleType),
  } as any;
};

const deserializeAws_restJson1Roles = (output: any, context: __SerdeContext): Role[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Role(entry, context);
    });
};

const deserializeAws_restJson1Scope = (output: any, context: __SerdeContext): Scope => {
  return {
    awsAccounts:
      output.awsAccounts !== undefined && output.awsAccounts !== null
        ? deserializeAws_restJson1AWSAccounts(output.awsAccounts, context)
        : undefined,
    awsServices:
      output.awsServices !== undefined && output.awsServices !== null
        ? deserializeAws_restJson1AWSServices(output.awsServices, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ServiceMetadata = (output: any, context: __SerdeContext): ServiceMetadata => {
  return {
    category: __expectString(output.category),
    description: __expectString(output.description),
    displayName: __expectString(output.displayName),
    name: __expectString(output.name),
  } as any;
};

const deserializeAws_restJson1ServiceMetadataList = (output: any, context: __SerdeContext): ServiceMetadata[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ServiceMetadata(entry, context);
    });
};

const deserializeAws_restJson1Settings = (output: any, context: __SerdeContext): Settings => {
  return {
    defaultAssessmentReportsDestination:
      output.defaultAssessmentReportsDestination !== undefined && output.defaultAssessmentReportsDestination !== null
        ? deserializeAws_restJson1AssessmentReportsDestination(output.defaultAssessmentReportsDestination, context)
        : undefined,
    defaultProcessOwners:
      output.defaultProcessOwners !== undefined && output.defaultProcessOwners !== null
        ? deserializeAws_restJson1Roles(output.defaultProcessOwners, context)
        : undefined,
    isAwsOrgEnabled: __expectBoolean(output.isAwsOrgEnabled),
    kmsKey: __expectString(output.kmsKey),
    snsTopic: __expectString(output.snsTopic),
  } as any;
};

const deserializeAws_restJson1SourceKeyword = (output: any, context: __SerdeContext): SourceKeyword => {
  return {
    keywordInputType: __expectString(output.keywordInputType),
    keywordValue: __expectString(output.keywordValue),
  } as any;
};

const deserializeAws_restJson1TagMap = (output: any, context: __SerdeContext): { [key: string]: string } => {
  return Object.entries(output).reduce((acc: { [key: string]: string }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: __expectString(value) as any,
    };
  }, {});
};

const deserializeAws_restJson1URL = (output: any, context: __SerdeContext): URL => {
  return {
    hyperlinkName: __expectString(output.hyperlinkName),
    link: __expectString(output.link),
  } as any;
};

const deserializeAws_restJson1ValidationErrors = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_restJson1ValidationExceptionField = (
  output: any,
  context: __SerdeContext
): ValidationExceptionField => {
  return {
    message: __expectString(output.message),
    name: __expectString(output.name),
  } as any;
};

const deserializeAws_restJson1ValidationExceptionFieldList = (
  output: any,
  context: __SerdeContext
): ValidationExceptionField[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ValidationExceptionField(entry, context);
    });
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"],
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

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string => {
  const findKey = (object: any, key: string) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());

  const sanitizeErrorCode = (rawValue: string): string => {
    let cleanValue = rawValue;
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

  return "";
};
