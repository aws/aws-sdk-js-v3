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
import { v4 as generateIdempotencyToken } from "uuid";

import { AssociateLensesCommandInput, AssociateLensesCommandOutput } from "../commands/AssociateLensesCommand";
import { CreateLensShareCommandInput, CreateLensShareCommandOutput } from "../commands/CreateLensShareCommand";
import { CreateLensVersionCommandInput, CreateLensVersionCommandOutput } from "../commands/CreateLensVersionCommand";
import { CreateMilestoneCommandInput, CreateMilestoneCommandOutput } from "../commands/CreateMilestoneCommand";
import { CreateWorkloadCommandInput, CreateWorkloadCommandOutput } from "../commands/CreateWorkloadCommand";
import {
  CreateWorkloadShareCommandInput,
  CreateWorkloadShareCommandOutput,
} from "../commands/CreateWorkloadShareCommand";
import { DeleteLensCommandInput, DeleteLensCommandOutput } from "../commands/DeleteLensCommand";
import { DeleteLensShareCommandInput, DeleteLensShareCommandOutput } from "../commands/DeleteLensShareCommand";
import { DeleteWorkloadCommandInput, DeleteWorkloadCommandOutput } from "../commands/DeleteWorkloadCommand";
import {
  DeleteWorkloadShareCommandInput,
  DeleteWorkloadShareCommandOutput,
} from "../commands/DeleteWorkloadShareCommand";
import { DisassociateLensesCommandInput, DisassociateLensesCommandOutput } from "../commands/DisassociateLensesCommand";
import { ExportLensCommandInput, ExportLensCommandOutput } from "../commands/ExportLensCommand";
import { GetAnswerCommandInput, GetAnswerCommandOutput } from "../commands/GetAnswerCommand";
import {
  GetConsolidatedReportCommandInput,
  GetConsolidatedReportCommandOutput,
} from "../commands/GetConsolidatedReportCommand";
import { GetLensCommandInput, GetLensCommandOutput } from "../commands/GetLensCommand";
import { GetLensReviewCommandInput, GetLensReviewCommandOutput } from "../commands/GetLensReviewCommand";
import {
  GetLensReviewReportCommandInput,
  GetLensReviewReportCommandOutput,
} from "../commands/GetLensReviewReportCommand";
import {
  GetLensVersionDifferenceCommandInput,
  GetLensVersionDifferenceCommandOutput,
} from "../commands/GetLensVersionDifferenceCommand";
import { GetMilestoneCommandInput, GetMilestoneCommandOutput } from "../commands/GetMilestoneCommand";
import { GetWorkloadCommandInput, GetWorkloadCommandOutput } from "../commands/GetWorkloadCommand";
import { ImportLensCommandInput, ImportLensCommandOutput } from "../commands/ImportLensCommand";
import { ListAnswersCommandInput, ListAnswersCommandOutput } from "../commands/ListAnswersCommand";
import { ListCheckDetailsCommandInput, ListCheckDetailsCommandOutput } from "../commands/ListCheckDetailsCommand";
import { ListCheckSummariesCommandInput, ListCheckSummariesCommandOutput } from "../commands/ListCheckSummariesCommand";
import { ListLensesCommandInput, ListLensesCommandOutput } from "../commands/ListLensesCommand";
import {
  ListLensReviewImprovementsCommandInput,
  ListLensReviewImprovementsCommandOutput,
} from "../commands/ListLensReviewImprovementsCommand";
import { ListLensReviewsCommandInput, ListLensReviewsCommandOutput } from "../commands/ListLensReviewsCommand";
import { ListLensSharesCommandInput, ListLensSharesCommandOutput } from "../commands/ListLensSharesCommand";
import { ListMilestonesCommandInput, ListMilestonesCommandOutput } from "../commands/ListMilestonesCommand";
import { ListNotificationsCommandInput, ListNotificationsCommandOutput } from "../commands/ListNotificationsCommand";
import {
  ListShareInvitationsCommandInput,
  ListShareInvitationsCommandOutput,
} from "../commands/ListShareInvitationsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { ListWorkloadsCommandInput, ListWorkloadsCommandOutput } from "../commands/ListWorkloadsCommand";
import { ListWorkloadSharesCommandInput, ListWorkloadSharesCommandOutput } from "../commands/ListWorkloadSharesCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateAnswerCommandInput, UpdateAnswerCommandOutput } from "../commands/UpdateAnswerCommand";
import {
  UpdateGlobalSettingsCommandInput,
  UpdateGlobalSettingsCommandOutput,
} from "../commands/UpdateGlobalSettingsCommand";
import { UpdateLensReviewCommandInput, UpdateLensReviewCommandOutput } from "../commands/UpdateLensReviewCommand";
import {
  UpdateShareInvitationCommandInput,
  UpdateShareInvitationCommandOutput,
} from "../commands/UpdateShareInvitationCommand";
import { UpdateWorkloadCommandInput, UpdateWorkloadCommandOutput } from "../commands/UpdateWorkloadCommand";
import {
  UpdateWorkloadShareCommandInput,
  UpdateWorkloadShareCommandOutput,
} from "../commands/UpdateWorkloadShareCommand";
import { UpgradeLensReviewCommandInput, UpgradeLensReviewCommandOutput } from "../commands/UpgradeLensReviewCommand";
import {
  AccessDeniedException,
  AdditionalResources,
  Answer,
  AnswerSummary,
  BestPractice,
  CheckDetail,
  CheckStatus,
  CheckSummary,
  Choice,
  ChoiceAnswer,
  ChoiceAnswerSummary,
  ChoiceContent,
  ChoiceImprovementPlan,
  ChoiceUpdate,
  ConflictException,
  ConsolidatedReportMetric,
  ImprovementSummary,
  InternalServerException,
  Lens,
  LensMetric,
  LensReview,
  LensReviewReport,
  LensReviewSummary,
  LensShareSummary,
  LensSummary,
  LensUpgradeSummary,
  Milestone,
  MilestoneSummary,
  NotificationSummary,
  PillarDifference,
  PillarMetric,
  PillarReviewSummary,
  QuestionDifference,
  QuestionMetric,
  ResourceNotFoundException,
  Risk,
  ServiceQuotaExceededException,
  ShareInvitation,
  ShareInvitationSummary,
  ThrottlingException,
  ValidationException,
  ValidationExceptionField,
  VersionDifferences,
  Workload,
  WorkloadDiscoveryConfig,
  WorkloadShare,
  WorkloadShareSummary,
  WorkloadSummary,
} from "../models/models_0";
import { WellArchitectedServiceException as __BaseException } from "../models/WellArchitectedServiceException";

/**
 * serializeAws_restJson1AssociateLensesCommand
 */
export const se_AssociateLensesCommand = async (
  input: AssociateLensesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/workloads/{WorkloadId}/associateLenses";
  resolvedPath = __resolvedPath(resolvedPath, input, "WorkloadId", () => input.WorkloadId!, "{WorkloadId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.LensAliases != null && { LensAliases: se_LensAliases(input.LensAliases, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1CreateLensShareCommand
 */
export const se_CreateLensShareCommand = async (
  input: CreateLensShareCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/lenses/{LensAlias}/shares";
  resolvedPath = __resolvedPath(resolvedPath, input, "LensAlias", () => input.LensAlias!, "{LensAlias}", false);
  let body: any;
  body = JSON.stringify({
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.SharedWith != null && { SharedWith: input.SharedWith }),
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
 * serializeAws_restJson1CreateLensVersionCommand
 */
export const se_CreateLensVersionCommand = async (
  input: CreateLensVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/lenses/{LensAlias}/versions";
  resolvedPath = __resolvedPath(resolvedPath, input, "LensAlias", () => input.LensAlias!, "{LensAlias}", false);
  let body: any;
  body = JSON.stringify({
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.IsMajorVersion != null && { IsMajorVersion: input.IsMajorVersion }),
    ...(input.LensVersion != null && { LensVersion: input.LensVersion }),
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
 * serializeAws_restJson1CreateMilestoneCommand
 */
export const se_CreateMilestoneCommand = async (
  input: CreateMilestoneCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/workloads/{WorkloadId}/milestones";
  resolvedPath = __resolvedPath(resolvedPath, input, "WorkloadId", () => input.WorkloadId!, "{WorkloadId}", false);
  let body: any;
  body = JSON.stringify({
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.MilestoneName != null && { MilestoneName: input.MilestoneName }),
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
 * serializeAws_restJson1CreateWorkloadCommand
 */
export const se_CreateWorkloadCommand = async (
  input: CreateWorkloadCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/workloads";
  let body: any;
  body = JSON.stringify({
    ...(input.AccountIds != null && { AccountIds: se_WorkloadAccountIds(input.AccountIds, context) }),
    ...(input.Applications != null && { Applications: se_WorkloadApplications(input.Applications, context) }),
    ...(input.ArchitecturalDesign != null && { ArchitecturalDesign: input.ArchitecturalDesign }),
    ...(input.AwsRegions != null && { AwsRegions: se_WorkloadAwsRegions(input.AwsRegions, context) }),
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.DiscoveryConfig != null && {
      DiscoveryConfig: se_WorkloadDiscoveryConfig(input.DiscoveryConfig, context),
    }),
    ...(input.Environment != null && { Environment: input.Environment }),
    ...(input.Industry != null && { Industry: input.Industry }),
    ...(input.IndustryType != null && { IndustryType: input.IndustryType }),
    ...(input.Lenses != null && { Lenses: se_WorkloadLenses(input.Lenses, context) }),
    ...(input.NonAwsRegions != null && { NonAwsRegions: se_WorkloadNonAwsRegions(input.NonAwsRegions, context) }),
    ...(input.Notes != null && { Notes: input.Notes }),
    ...(input.PillarPriorities != null && {
      PillarPriorities: se_WorkloadPillarPriorities(input.PillarPriorities, context),
    }),
    ...(input.ReviewOwner != null && { ReviewOwner: input.ReviewOwner }),
    ...(input.Tags != null && { Tags: se_TagMap(input.Tags, context) }),
    ...(input.WorkloadName != null && { WorkloadName: input.WorkloadName }),
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
 * serializeAws_restJson1CreateWorkloadShareCommand
 */
export const se_CreateWorkloadShareCommand = async (
  input: CreateWorkloadShareCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/workloads/{WorkloadId}/shares";
  resolvedPath = __resolvedPath(resolvedPath, input, "WorkloadId", () => input.WorkloadId!, "{WorkloadId}", false);
  let body: any;
  body = JSON.stringify({
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.PermissionType != null && { PermissionType: input.PermissionType }),
    ...(input.SharedWith != null && { SharedWith: input.SharedWith }),
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
 * serializeAws_restJson1DeleteLensCommand
 */
export const se_DeleteLensCommand = async (
  input: DeleteLensCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/lenses/{LensAlias}";
  resolvedPath = __resolvedPath(resolvedPath, input, "LensAlias", () => input.LensAlias!, "{LensAlias}", false);
  const query: any = map({
    ClientRequestToken: [, __expectNonNull(input.ClientRequestToken!, `ClientRequestToken`)],
    LensStatus: [, __expectNonNull(input.LensStatus!, `LensStatus`)],
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
 * serializeAws_restJson1DeleteLensShareCommand
 */
export const se_DeleteLensShareCommand = async (
  input: DeleteLensShareCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/lenses/{LensAlias}/shares/{ShareId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ShareId", () => input.ShareId!, "{ShareId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "LensAlias", () => input.LensAlias!, "{LensAlias}", false);
  const query: any = map({
    ClientRequestToken: [, __expectNonNull(input.ClientRequestToken!, `ClientRequestToken`)],
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
 * serializeAws_restJson1DeleteWorkloadCommand
 */
export const se_DeleteWorkloadCommand = async (
  input: DeleteWorkloadCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/workloads/{WorkloadId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "WorkloadId", () => input.WorkloadId!, "{WorkloadId}", false);
  const query: any = map({
    ClientRequestToken: [, __expectNonNull(input.ClientRequestToken!, `ClientRequestToken`)],
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
 * serializeAws_restJson1DeleteWorkloadShareCommand
 */
export const se_DeleteWorkloadShareCommand = async (
  input: DeleteWorkloadShareCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/workloads/{WorkloadId}/shares/{ShareId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ShareId", () => input.ShareId!, "{ShareId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "WorkloadId", () => input.WorkloadId!, "{WorkloadId}", false);
  const query: any = map({
    ClientRequestToken: [, __expectNonNull(input.ClientRequestToken!, `ClientRequestToken`)],
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
 * serializeAws_restJson1DisassociateLensesCommand
 */
export const se_DisassociateLensesCommand = async (
  input: DisassociateLensesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/workloads/{WorkloadId}/disassociateLenses";
  resolvedPath = __resolvedPath(resolvedPath, input, "WorkloadId", () => input.WorkloadId!, "{WorkloadId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.LensAliases != null && { LensAliases: se_LensAliases(input.LensAliases, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1ExportLensCommand
 */
export const se_ExportLensCommand = async (
  input: ExportLensCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/lenses/{LensAlias}/export";
  resolvedPath = __resolvedPath(resolvedPath, input, "LensAlias", () => input.LensAlias!, "{LensAlias}", false);
  const query: any = map({
    LensVersion: [, input.LensVersion!],
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
 * serializeAws_restJson1GetAnswerCommand
 */
export const se_GetAnswerCommand = async (
  input: GetAnswerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/workloads/{WorkloadId}/lensReviews/{LensAlias}/answers/{QuestionId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "WorkloadId", () => input.WorkloadId!, "{WorkloadId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "LensAlias", () => input.LensAlias!, "{LensAlias}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "QuestionId", () => input.QuestionId!, "{QuestionId}", false);
  const query: any = map({
    MilestoneNumber: [() => input.MilestoneNumber !== void 0, () => input.MilestoneNumber!.toString()],
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
 * serializeAws_restJson1GetConsolidatedReportCommand
 */
export const se_GetConsolidatedReportCommand = async (
  input: GetConsolidatedReportCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/consolidatedReport";
  const query: any = map({
    Format: [, __expectNonNull(input.Format!, `Format`)],
    IncludeSharedResources: [
      () => input.IncludeSharedResources !== void 0,
      () => input.IncludeSharedResources!.toString(),
    ],
    NextToken: [, input.NextToken!],
    MaxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
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
 * serializeAws_restJson1GetLensCommand
 */
export const se_GetLensCommand = async (
  input: GetLensCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/lenses/{LensAlias}";
  resolvedPath = __resolvedPath(resolvedPath, input, "LensAlias", () => input.LensAlias!, "{LensAlias}", false);
  const query: any = map({
    LensVersion: [, input.LensVersion!],
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
 * serializeAws_restJson1GetLensReviewCommand
 */
export const se_GetLensReviewCommand = async (
  input: GetLensReviewCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/workloads/{WorkloadId}/lensReviews/{LensAlias}";
  resolvedPath = __resolvedPath(resolvedPath, input, "WorkloadId", () => input.WorkloadId!, "{WorkloadId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "LensAlias", () => input.LensAlias!, "{LensAlias}", false);
  const query: any = map({
    MilestoneNumber: [() => input.MilestoneNumber !== void 0, () => input.MilestoneNumber!.toString()],
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
 * serializeAws_restJson1GetLensReviewReportCommand
 */
export const se_GetLensReviewReportCommand = async (
  input: GetLensReviewReportCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/workloads/{WorkloadId}/lensReviews/{LensAlias}/report";
  resolvedPath = __resolvedPath(resolvedPath, input, "WorkloadId", () => input.WorkloadId!, "{WorkloadId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "LensAlias", () => input.LensAlias!, "{LensAlias}", false);
  const query: any = map({
    MilestoneNumber: [() => input.MilestoneNumber !== void 0, () => input.MilestoneNumber!.toString()],
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
 * serializeAws_restJson1GetLensVersionDifferenceCommand
 */
export const se_GetLensVersionDifferenceCommand = async (
  input: GetLensVersionDifferenceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/lenses/{LensAlias}/versionDifference";
  resolvedPath = __resolvedPath(resolvedPath, input, "LensAlias", () => input.LensAlias!, "{LensAlias}", false);
  const query: any = map({
    BaseLensVersion: [, input.BaseLensVersion!],
    TargetLensVersion: [, input.TargetLensVersion!],
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
 * serializeAws_restJson1GetMilestoneCommand
 */
export const se_GetMilestoneCommand = async (
  input: GetMilestoneCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/workloads/{WorkloadId}/milestones/{MilestoneNumber}";
  resolvedPath = __resolvedPath(resolvedPath, input, "WorkloadId", () => input.WorkloadId!, "{WorkloadId}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "MilestoneNumber",
    () => input.MilestoneNumber!.toString(),
    "{MilestoneNumber}",
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
 * serializeAws_restJson1GetWorkloadCommand
 */
export const se_GetWorkloadCommand = async (
  input: GetWorkloadCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/workloads/{WorkloadId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "WorkloadId", () => input.WorkloadId!, "{WorkloadId}", false);
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
 * serializeAws_restJson1ImportLensCommand
 */
export const se_ImportLensCommand = async (
  input: ImportLensCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/importLens";
  let body: any;
  body = JSON.stringify({
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.JSONString != null && { JSONString: input.JSONString }),
    ...(input.LensAlias != null && { LensAlias: input.LensAlias }),
    ...(input.Tags != null && { Tags: se_TagMap(input.Tags, context) }),
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
 * serializeAws_restJson1ListAnswersCommand
 */
export const se_ListAnswersCommand = async (
  input: ListAnswersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/workloads/{WorkloadId}/lensReviews/{LensAlias}/answers";
  resolvedPath = __resolvedPath(resolvedPath, input, "WorkloadId", () => input.WorkloadId!, "{WorkloadId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "LensAlias", () => input.LensAlias!, "{LensAlias}", false);
  const query: any = map({
    PillarId: [, input.PillarId!],
    MilestoneNumber: [() => input.MilestoneNumber !== void 0, () => input.MilestoneNumber!.toString()],
    NextToken: [, input.NextToken!],
    MaxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
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
 * serializeAws_restJson1ListCheckDetailsCommand
 */
export const se_ListCheckDetailsCommand = async (
  input: ListCheckDetailsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/workloads/{WorkloadId}/checks";
  resolvedPath = __resolvedPath(resolvedPath, input, "WorkloadId", () => input.WorkloadId!, "{WorkloadId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.ChoiceId != null && { ChoiceId: input.ChoiceId }),
    ...(input.LensArn != null && { LensArn: input.LensArn }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.PillarId != null && { PillarId: input.PillarId }),
    ...(input.QuestionId != null && { QuestionId: input.QuestionId }),
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
 * serializeAws_restJson1ListCheckSummariesCommand
 */
export const se_ListCheckSummariesCommand = async (
  input: ListCheckSummariesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/workloads/{WorkloadId}/checkSummaries";
  resolvedPath = __resolvedPath(resolvedPath, input, "WorkloadId", () => input.WorkloadId!, "{WorkloadId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.ChoiceId != null && { ChoiceId: input.ChoiceId }),
    ...(input.LensArn != null && { LensArn: input.LensArn }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.PillarId != null && { PillarId: input.PillarId }),
    ...(input.QuestionId != null && { QuestionId: input.QuestionId }),
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
 * serializeAws_restJson1ListLensesCommand
 */
export const se_ListLensesCommand = async (
  input: ListLensesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/lenses";
  const query: any = map({
    NextToken: [, input.NextToken!],
    MaxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    LensType: [, input.LensType!],
    LensStatus: [, input.LensStatus!],
    LensName: [, input.LensName!],
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
 * serializeAws_restJson1ListLensReviewImprovementsCommand
 */
export const se_ListLensReviewImprovementsCommand = async (
  input: ListLensReviewImprovementsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/workloads/{WorkloadId}/lensReviews/{LensAlias}/improvements";
  resolvedPath = __resolvedPath(resolvedPath, input, "WorkloadId", () => input.WorkloadId!, "{WorkloadId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "LensAlias", () => input.LensAlias!, "{LensAlias}", false);
  const query: any = map({
    PillarId: [, input.PillarId!],
    MilestoneNumber: [() => input.MilestoneNumber !== void 0, () => input.MilestoneNumber!.toString()],
    NextToken: [, input.NextToken!],
    MaxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
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
 * serializeAws_restJson1ListLensReviewsCommand
 */
export const se_ListLensReviewsCommand = async (
  input: ListLensReviewsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/workloads/{WorkloadId}/lensReviews";
  resolvedPath = __resolvedPath(resolvedPath, input, "WorkloadId", () => input.WorkloadId!, "{WorkloadId}", false);
  const query: any = map({
    MilestoneNumber: [() => input.MilestoneNumber !== void 0, () => input.MilestoneNumber!.toString()],
    NextToken: [, input.NextToken!],
    MaxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
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
 * serializeAws_restJson1ListLensSharesCommand
 */
export const se_ListLensSharesCommand = async (
  input: ListLensSharesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/lenses/{LensAlias}/shares";
  resolvedPath = __resolvedPath(resolvedPath, input, "LensAlias", () => input.LensAlias!, "{LensAlias}", false);
  const query: any = map({
    SharedWithPrefix: [, input.SharedWithPrefix!],
    NextToken: [, input.NextToken!],
    MaxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    Status: [, input.Status!],
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
 * serializeAws_restJson1ListMilestonesCommand
 */
export const se_ListMilestonesCommand = async (
  input: ListMilestonesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/workloads/{WorkloadId}/milestonesSummaries";
  resolvedPath = __resolvedPath(resolvedPath, input, "WorkloadId", () => input.WorkloadId!, "{WorkloadId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
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
 * serializeAws_restJson1ListNotificationsCommand
 */
export const se_ListNotificationsCommand = async (
  input: ListNotificationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/notifications";
  let body: any;
  body = JSON.stringify({
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.WorkloadId != null && { WorkloadId: input.WorkloadId }),
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
 * serializeAws_restJson1ListShareInvitationsCommand
 */
export const se_ListShareInvitationsCommand = async (
  input: ListShareInvitationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/shareInvitations";
  const query: any = map({
    WorkloadNamePrefix: [, input.WorkloadNamePrefix!],
    LensNamePrefix: [, input.LensNamePrefix!],
    ShareResourceType: [, input.ShareResourceType!],
    NextToken: [, input.NextToken!],
    MaxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{WorkloadArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "WorkloadArn", () => input.WorkloadArn!, "{WorkloadArn}", false);
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
 * serializeAws_restJson1ListWorkloadsCommand
 */
export const se_ListWorkloadsCommand = async (
  input: ListWorkloadsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/workloadsSummaries";
  let body: any;
  body = JSON.stringify({
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.WorkloadNamePrefix != null && { WorkloadNamePrefix: input.WorkloadNamePrefix }),
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
 * serializeAws_restJson1ListWorkloadSharesCommand
 */
export const se_ListWorkloadSharesCommand = async (
  input: ListWorkloadSharesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/workloads/{WorkloadId}/shares";
  resolvedPath = __resolvedPath(resolvedPath, input, "WorkloadId", () => input.WorkloadId!, "{WorkloadId}", false);
  const query: any = map({
    SharedWithPrefix: [, input.SharedWithPrefix!],
    NextToken: [, input.NextToken!],
    MaxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    Status: [, input.Status!],
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{WorkloadArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "WorkloadArn", () => input.WorkloadArn!, "{WorkloadArn}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.Tags != null && { Tags: se_TagMap(input.Tags, context) }),
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{WorkloadArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "WorkloadArn", () => input.WorkloadArn!, "{WorkloadArn}", false);
  const query: any = map({
    tagKeys: [
      __expectNonNull(input.TagKeys, `TagKeys`) != null,
      () => (input.TagKeys! || []).map((_entry) => _entry as any),
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
 * serializeAws_restJson1UpdateAnswerCommand
 */
export const se_UpdateAnswerCommand = async (
  input: UpdateAnswerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/workloads/{WorkloadId}/lensReviews/{LensAlias}/answers/{QuestionId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "WorkloadId", () => input.WorkloadId!, "{WorkloadId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "LensAlias", () => input.LensAlias!, "{LensAlias}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "QuestionId", () => input.QuestionId!, "{QuestionId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.ChoiceUpdates != null && { ChoiceUpdates: se_ChoiceUpdates(input.ChoiceUpdates, context) }),
    ...(input.IsApplicable != null && { IsApplicable: input.IsApplicable }),
    ...(input.Notes != null && { Notes: input.Notes }),
    ...(input.Reason != null && { Reason: input.Reason }),
    ...(input.SelectedChoices != null && { SelectedChoices: se_SelectedChoices(input.SelectedChoices, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateGlobalSettingsCommand
 */
export const se_UpdateGlobalSettingsCommand = async (
  input: UpdateGlobalSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/global-settings";
  let body: any;
  body = JSON.stringify({
    ...(input.OrganizationSharingStatus != null && { OrganizationSharingStatus: input.OrganizationSharingStatus }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateLensReviewCommand
 */
export const se_UpdateLensReviewCommand = async (
  input: UpdateLensReviewCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/workloads/{WorkloadId}/lensReviews/{LensAlias}";
  resolvedPath = __resolvedPath(resolvedPath, input, "WorkloadId", () => input.WorkloadId!, "{WorkloadId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "LensAlias", () => input.LensAlias!, "{LensAlias}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.LensNotes != null && { LensNotes: input.LensNotes }),
    ...(input.PillarNotes != null && { PillarNotes: se_PillarNotes(input.PillarNotes, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateShareInvitationCommand
 */
export const se_UpdateShareInvitationCommand = async (
  input: UpdateShareInvitationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/shareInvitations/{ShareInvitationId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ShareInvitationId",
    () => input.ShareInvitationId!,
    "{ShareInvitationId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.ShareInvitationAction != null && { ShareInvitationAction: input.ShareInvitationAction }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateWorkloadCommand
 */
export const se_UpdateWorkloadCommand = async (
  input: UpdateWorkloadCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/workloads/{WorkloadId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "WorkloadId", () => input.WorkloadId!, "{WorkloadId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.AccountIds != null && { AccountIds: se_WorkloadAccountIds(input.AccountIds, context) }),
    ...(input.Applications != null && { Applications: se_WorkloadApplications(input.Applications, context) }),
    ...(input.ArchitecturalDesign != null && { ArchitecturalDesign: input.ArchitecturalDesign }),
    ...(input.AwsRegions != null && { AwsRegions: se_WorkloadAwsRegions(input.AwsRegions, context) }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.DiscoveryConfig != null && {
      DiscoveryConfig: se_WorkloadDiscoveryConfig(input.DiscoveryConfig, context),
    }),
    ...(input.Environment != null && { Environment: input.Environment }),
    ...(input.ImprovementStatus != null && { ImprovementStatus: input.ImprovementStatus }),
    ...(input.Industry != null && { Industry: input.Industry }),
    ...(input.IndustryType != null && { IndustryType: input.IndustryType }),
    ...(input.IsReviewOwnerUpdateAcknowledged != null && {
      IsReviewOwnerUpdateAcknowledged: input.IsReviewOwnerUpdateAcknowledged,
    }),
    ...(input.NonAwsRegions != null && { NonAwsRegions: se_WorkloadNonAwsRegions(input.NonAwsRegions, context) }),
    ...(input.Notes != null && { Notes: input.Notes }),
    ...(input.PillarPriorities != null && {
      PillarPriorities: se_WorkloadPillarPriorities(input.PillarPriorities, context),
    }),
    ...(input.ReviewOwner != null && { ReviewOwner: input.ReviewOwner }),
    ...(input.WorkloadName != null && { WorkloadName: input.WorkloadName }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateWorkloadShareCommand
 */
export const se_UpdateWorkloadShareCommand = async (
  input: UpdateWorkloadShareCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/workloads/{WorkloadId}/shares/{ShareId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ShareId", () => input.ShareId!, "{ShareId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "WorkloadId", () => input.WorkloadId!, "{WorkloadId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.PermissionType != null && { PermissionType: input.PermissionType }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UpgradeLensReviewCommand
 */
export const se_UpgradeLensReviewCommand = async (
  input: UpgradeLensReviewCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/workloads/{WorkloadId}/lensReviews/{LensAlias}/upgrade";
  resolvedPath = __resolvedPath(resolvedPath, input, "WorkloadId", () => input.WorkloadId!, "{WorkloadId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "LensAlias", () => input.LensAlias!, "{LensAlias}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.ClientRequestToken != null && { ClientRequestToken: input.ClientRequestToken }),
    ...(input.MilestoneName != null && { MilestoneName: input.MilestoneName }),
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
 * deserializeAws_restJson1AssociateLensesCommand
 */
export const de_AssociateLensesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateLensesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_AssociateLensesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1AssociateLensesCommandError
 */
const de_AssociateLensesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateLensesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.wellarchitected#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.wellarchitected#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.wellarchitected#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.wellarchitected#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.wellarchitected#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.wellarchitected#ValidationException":
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
 * deserializeAws_restJson1CreateLensShareCommand
 */
export const de_CreateLensShareCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLensShareCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateLensShareCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ShareId != null) {
    contents.ShareId = __expectString(data.ShareId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateLensShareCommandError
 */
const de_CreateLensShareCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLensShareCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.wellarchitected#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.wellarchitected#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.wellarchitected#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.wellarchitected#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.wellarchitected#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.wellarchitected#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.wellarchitected#ValidationException":
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
 * deserializeAws_restJson1CreateLensVersionCommand
 */
export const de_CreateLensVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLensVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateLensVersionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.LensArn != null) {
    contents.LensArn = __expectString(data.LensArn);
  }
  if (data.LensVersion != null) {
    contents.LensVersion = __expectString(data.LensVersion);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateLensVersionCommandError
 */
const de_CreateLensVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLensVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.wellarchitected#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.wellarchitected#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.wellarchitected#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.wellarchitected#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.wellarchitected#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.wellarchitected#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.wellarchitected#ValidationException":
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
 * deserializeAws_restJson1CreateMilestoneCommand
 */
export const de_CreateMilestoneCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMilestoneCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateMilestoneCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.MilestoneNumber != null) {
    contents.MilestoneNumber = __expectInt32(data.MilestoneNumber);
  }
  if (data.WorkloadId != null) {
    contents.WorkloadId = __expectString(data.WorkloadId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateMilestoneCommandError
 */
const de_CreateMilestoneCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMilestoneCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.wellarchitected#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.wellarchitected#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.wellarchitected#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.wellarchitected#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.wellarchitected#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.wellarchitected#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.wellarchitected#ValidationException":
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
 * deserializeAws_restJson1CreateWorkloadCommand
 */
export const de_CreateWorkloadCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWorkloadCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateWorkloadCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.WorkloadArn != null) {
    contents.WorkloadArn = __expectString(data.WorkloadArn);
  }
  if (data.WorkloadId != null) {
    contents.WorkloadId = __expectString(data.WorkloadId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateWorkloadCommandError
 */
const de_CreateWorkloadCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWorkloadCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.wellarchitected#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.wellarchitected#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.wellarchitected#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.wellarchitected#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.wellarchitected#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.wellarchitected#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.wellarchitected#ValidationException":
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
 * deserializeAws_restJson1CreateWorkloadShareCommand
 */
export const de_CreateWorkloadShareCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWorkloadShareCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateWorkloadShareCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ShareId != null) {
    contents.ShareId = __expectString(data.ShareId);
  }
  if (data.WorkloadId != null) {
    contents.WorkloadId = __expectString(data.WorkloadId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateWorkloadShareCommandError
 */
const de_CreateWorkloadShareCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWorkloadShareCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.wellarchitected#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.wellarchitected#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.wellarchitected#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.wellarchitected#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.wellarchitected#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.wellarchitected#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.wellarchitected#ValidationException":
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
 * deserializeAws_restJson1DeleteLensCommand
 */
export const de_DeleteLensCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLensCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteLensCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteLensCommandError
 */
const de_DeleteLensCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLensCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.wellarchitected#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.wellarchitected#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.wellarchitected#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.wellarchitected#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.wellarchitected#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.wellarchitected#ValidationException":
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
 * deserializeAws_restJson1DeleteLensShareCommand
 */
export const de_DeleteLensShareCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLensShareCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteLensShareCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteLensShareCommandError
 */
const de_DeleteLensShareCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLensShareCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.wellarchitected#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.wellarchitected#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.wellarchitected#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.wellarchitected#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.wellarchitected#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.wellarchitected#ValidationException":
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
 * deserializeAws_restJson1DeleteWorkloadCommand
 */
export const de_DeleteWorkloadCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWorkloadCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteWorkloadCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteWorkloadCommandError
 */
const de_DeleteWorkloadCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWorkloadCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.wellarchitected#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.wellarchitected#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.wellarchitected#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.wellarchitected#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.wellarchitected#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.wellarchitected#ValidationException":
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
 * deserializeAws_restJson1DeleteWorkloadShareCommand
 */
export const de_DeleteWorkloadShareCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWorkloadShareCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteWorkloadShareCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteWorkloadShareCommandError
 */
const de_DeleteWorkloadShareCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWorkloadShareCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.wellarchitected#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.wellarchitected#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.wellarchitected#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.wellarchitected#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.wellarchitected#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.wellarchitected#ValidationException":
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
 * deserializeAws_restJson1DisassociateLensesCommand
 */
export const de_DisassociateLensesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateLensesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DisassociateLensesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DisassociateLensesCommandError
 */
const de_DisassociateLensesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateLensesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.wellarchitected#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.wellarchitected#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.wellarchitected#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.wellarchitected#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.wellarchitected#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.wellarchitected#ValidationException":
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
 * deserializeAws_restJson1ExportLensCommand
 */
export const de_ExportLensCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExportLensCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ExportLensCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.LensJSON != null) {
    contents.LensJSON = __expectString(data.LensJSON);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ExportLensCommandError
 */
const de_ExportLensCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExportLensCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.wellarchitected#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.wellarchitected#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.wellarchitected#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.wellarchitected#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.wellarchitected#ValidationException":
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
 * deserializeAws_restJson1GetAnswerCommand
 */
export const de_GetAnswerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAnswerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetAnswerCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Answer != null) {
    contents.Answer = de_Answer(data.Answer, context);
  }
  if (data.LensAlias != null) {
    contents.LensAlias = __expectString(data.LensAlias);
  }
  if (data.LensArn != null) {
    contents.LensArn = __expectString(data.LensArn);
  }
  if (data.MilestoneNumber != null) {
    contents.MilestoneNumber = __expectInt32(data.MilestoneNumber);
  }
  if (data.WorkloadId != null) {
    contents.WorkloadId = __expectString(data.WorkloadId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetAnswerCommandError
 */
const de_GetAnswerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAnswerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.wellarchitected#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.wellarchitected#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.wellarchitected#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.wellarchitected#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.wellarchitected#ValidationException":
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
 * deserializeAws_restJson1GetConsolidatedReportCommand
 */
export const de_GetConsolidatedReportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConsolidatedReportCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetConsolidatedReportCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Base64String != null) {
    contents.Base64String = __expectString(data.Base64String);
  }
  if (data.Metrics != null) {
    contents.Metrics = de_ConsolidatedReportMetrics(data.Metrics, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetConsolidatedReportCommandError
 */
const de_GetConsolidatedReportCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConsolidatedReportCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.wellarchitected#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.wellarchitected#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.wellarchitected#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.wellarchitected#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.wellarchitected#ValidationException":
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
 * deserializeAws_restJson1GetLensCommand
 */
export const de_GetLensCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLensCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetLensCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Lens != null) {
    contents.Lens = de_Lens(data.Lens, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetLensCommandError
 */
const de_GetLensCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLensCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.wellarchitected#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.wellarchitected#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.wellarchitected#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.wellarchitected#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.wellarchitected#ValidationException":
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
 * deserializeAws_restJson1GetLensReviewCommand
 */
export const de_GetLensReviewCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLensReviewCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetLensReviewCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.LensReview != null) {
    contents.LensReview = de_LensReview(data.LensReview, context);
  }
  if (data.MilestoneNumber != null) {
    contents.MilestoneNumber = __expectInt32(data.MilestoneNumber);
  }
  if (data.WorkloadId != null) {
    contents.WorkloadId = __expectString(data.WorkloadId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetLensReviewCommandError
 */
const de_GetLensReviewCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLensReviewCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.wellarchitected#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.wellarchitected#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.wellarchitected#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.wellarchitected#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.wellarchitected#ValidationException":
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
 * deserializeAws_restJson1GetLensReviewReportCommand
 */
export const de_GetLensReviewReportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLensReviewReportCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetLensReviewReportCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.LensReviewReport != null) {
    contents.LensReviewReport = de_LensReviewReport(data.LensReviewReport, context);
  }
  if (data.MilestoneNumber != null) {
    contents.MilestoneNumber = __expectInt32(data.MilestoneNumber);
  }
  if (data.WorkloadId != null) {
    contents.WorkloadId = __expectString(data.WorkloadId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetLensReviewReportCommandError
 */
const de_GetLensReviewReportCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLensReviewReportCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.wellarchitected#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.wellarchitected#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.wellarchitected#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.wellarchitected#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.wellarchitected#ValidationException":
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
 * deserializeAws_restJson1GetLensVersionDifferenceCommand
 */
export const de_GetLensVersionDifferenceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLensVersionDifferenceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetLensVersionDifferenceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.BaseLensVersion != null) {
    contents.BaseLensVersion = __expectString(data.BaseLensVersion);
  }
  if (data.LatestLensVersion != null) {
    contents.LatestLensVersion = __expectString(data.LatestLensVersion);
  }
  if (data.LensAlias != null) {
    contents.LensAlias = __expectString(data.LensAlias);
  }
  if (data.LensArn != null) {
    contents.LensArn = __expectString(data.LensArn);
  }
  if (data.TargetLensVersion != null) {
    contents.TargetLensVersion = __expectString(data.TargetLensVersion);
  }
  if (data.VersionDifferences != null) {
    contents.VersionDifferences = de_VersionDifferences(data.VersionDifferences, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetLensVersionDifferenceCommandError
 */
const de_GetLensVersionDifferenceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLensVersionDifferenceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.wellarchitected#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.wellarchitected#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.wellarchitected#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.wellarchitected#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.wellarchitected#ValidationException":
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
 * deserializeAws_restJson1GetMilestoneCommand
 */
export const de_GetMilestoneCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMilestoneCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetMilestoneCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Milestone != null) {
    contents.Milestone = de_Milestone(data.Milestone, context);
  }
  if (data.WorkloadId != null) {
    contents.WorkloadId = __expectString(data.WorkloadId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetMilestoneCommandError
 */
const de_GetMilestoneCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMilestoneCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.wellarchitected#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.wellarchitected#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.wellarchitected#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.wellarchitected#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.wellarchitected#ValidationException":
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
 * deserializeAws_restJson1GetWorkloadCommand
 */
export const de_GetWorkloadCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWorkloadCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetWorkloadCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Workload != null) {
    contents.Workload = de_Workload(data.Workload, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetWorkloadCommandError
 */
const de_GetWorkloadCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWorkloadCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.wellarchitected#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.wellarchitected#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.wellarchitected#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.wellarchitected#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.wellarchitected#ValidationException":
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
 * deserializeAws_restJson1ImportLensCommand
 */
export const de_ImportLensCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportLensCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ImportLensCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.LensArn != null) {
    contents.LensArn = __expectString(data.LensArn);
  }
  if (data.Status != null) {
    contents.Status = __expectString(data.Status);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ImportLensCommandError
 */
const de_ImportLensCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportLensCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.wellarchitected#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.wellarchitected#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.wellarchitected#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.wellarchitected#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.wellarchitected#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.wellarchitected#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.wellarchitected#ValidationException":
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
 * deserializeAws_restJson1ListAnswersCommand
 */
export const de_ListAnswersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAnswersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListAnswersCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AnswerSummaries != null) {
    contents.AnswerSummaries = de_AnswerSummaries(data.AnswerSummaries, context);
  }
  if (data.LensAlias != null) {
    contents.LensAlias = __expectString(data.LensAlias);
  }
  if (data.LensArn != null) {
    contents.LensArn = __expectString(data.LensArn);
  }
  if (data.MilestoneNumber != null) {
    contents.MilestoneNumber = __expectInt32(data.MilestoneNumber);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.WorkloadId != null) {
    contents.WorkloadId = __expectString(data.WorkloadId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListAnswersCommandError
 */
const de_ListAnswersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAnswersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.wellarchitected#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.wellarchitected#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.wellarchitected#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.wellarchitected#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.wellarchitected#ValidationException":
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
 * deserializeAws_restJson1ListCheckDetailsCommand
 */
export const de_ListCheckDetailsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCheckDetailsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListCheckDetailsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CheckDetails != null) {
    contents.CheckDetails = de_CheckDetails(data.CheckDetails, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListCheckDetailsCommandError
 */
const de_ListCheckDetailsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCheckDetailsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.wellarchitected#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.wellarchitected#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.wellarchitected#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.wellarchitected#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.wellarchitected#ValidationException":
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
 * deserializeAws_restJson1ListCheckSummariesCommand
 */
export const de_ListCheckSummariesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCheckSummariesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListCheckSummariesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CheckSummaries != null) {
    contents.CheckSummaries = de_CheckSummaries(data.CheckSummaries, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListCheckSummariesCommandError
 */
const de_ListCheckSummariesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCheckSummariesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.wellarchitected#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.wellarchitected#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.wellarchitected#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.wellarchitected#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.wellarchitected#ValidationException":
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
 * deserializeAws_restJson1ListLensesCommand
 */
export const de_ListLensesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLensesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListLensesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.LensSummaries != null) {
    contents.LensSummaries = de_LensSummaries(data.LensSummaries, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListLensesCommandError
 */
const de_ListLensesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLensesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.wellarchitected#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.wellarchitected#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.wellarchitected#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.wellarchitected#ValidationException":
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
 * deserializeAws_restJson1ListLensReviewImprovementsCommand
 */
export const de_ListLensReviewImprovementsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLensReviewImprovementsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListLensReviewImprovementsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ImprovementSummaries != null) {
    contents.ImprovementSummaries = de_ImprovementSummaries(data.ImprovementSummaries, context);
  }
  if (data.LensAlias != null) {
    contents.LensAlias = __expectString(data.LensAlias);
  }
  if (data.LensArn != null) {
    contents.LensArn = __expectString(data.LensArn);
  }
  if (data.MilestoneNumber != null) {
    contents.MilestoneNumber = __expectInt32(data.MilestoneNumber);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.WorkloadId != null) {
    contents.WorkloadId = __expectString(data.WorkloadId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListLensReviewImprovementsCommandError
 */
const de_ListLensReviewImprovementsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLensReviewImprovementsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.wellarchitected#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.wellarchitected#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.wellarchitected#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.wellarchitected#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.wellarchitected#ValidationException":
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
 * deserializeAws_restJson1ListLensReviewsCommand
 */
export const de_ListLensReviewsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLensReviewsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListLensReviewsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.LensReviewSummaries != null) {
    contents.LensReviewSummaries = de_LensReviewSummaries(data.LensReviewSummaries, context);
  }
  if (data.MilestoneNumber != null) {
    contents.MilestoneNumber = __expectInt32(data.MilestoneNumber);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.WorkloadId != null) {
    contents.WorkloadId = __expectString(data.WorkloadId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListLensReviewsCommandError
 */
const de_ListLensReviewsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLensReviewsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.wellarchitected#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.wellarchitected#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.wellarchitected#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.wellarchitected#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.wellarchitected#ValidationException":
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
 * deserializeAws_restJson1ListLensSharesCommand
 */
export const de_ListLensSharesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLensSharesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListLensSharesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.LensShareSummaries != null) {
    contents.LensShareSummaries = de_LensShareSummaries(data.LensShareSummaries, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListLensSharesCommandError
 */
const de_ListLensSharesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLensSharesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.wellarchitected#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.wellarchitected#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.wellarchitected#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.wellarchitected#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.wellarchitected#ValidationException":
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
 * deserializeAws_restJson1ListMilestonesCommand
 */
export const de_ListMilestonesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMilestonesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListMilestonesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.MilestoneSummaries != null) {
    contents.MilestoneSummaries = de_MilestoneSummaries(data.MilestoneSummaries, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.WorkloadId != null) {
    contents.WorkloadId = __expectString(data.WorkloadId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListMilestonesCommandError
 */
const de_ListMilestonesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMilestonesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.wellarchitected#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.wellarchitected#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.wellarchitected#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.wellarchitected#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.wellarchitected#ValidationException":
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
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.NotificationSummaries != null) {
    contents.NotificationSummaries = de_NotificationSummaries(data.NotificationSummaries, context);
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
    case "com.amazonaws.wellarchitected#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.wellarchitected#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.wellarchitected#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.wellarchitected#ValidationException":
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
 * deserializeAws_restJson1ListShareInvitationsCommand
 */
export const de_ListShareInvitationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListShareInvitationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListShareInvitationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.ShareInvitationSummaries != null) {
    contents.ShareInvitationSummaries = de_ShareInvitationSummaries(data.ShareInvitationSummaries, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListShareInvitationsCommandError
 */
const de_ListShareInvitationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListShareInvitationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.wellarchitected#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.wellarchitected#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.wellarchitected#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.wellarchitected#ValidationException":
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
  if (data.Tags != null) {
    contents.Tags = de_TagMap(data.Tags, context);
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
    case "com.amazonaws.wellarchitected#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.wellarchitected#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListWorkloadsCommand
 */
export const de_ListWorkloadsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWorkloadsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListWorkloadsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.WorkloadSummaries != null) {
    contents.WorkloadSummaries = de_WorkloadSummaries(data.WorkloadSummaries, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListWorkloadsCommandError
 */
const de_ListWorkloadsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWorkloadsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.wellarchitected#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.wellarchitected#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.wellarchitected#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.wellarchitected#ValidationException":
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
 * deserializeAws_restJson1ListWorkloadSharesCommand
 */
export const de_ListWorkloadSharesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWorkloadSharesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListWorkloadSharesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.WorkloadId != null) {
    contents.WorkloadId = __expectString(data.WorkloadId);
  }
  if (data.WorkloadShareSummaries != null) {
    contents.WorkloadShareSummaries = de_WorkloadShareSummaries(data.WorkloadShareSummaries, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListWorkloadSharesCommandError
 */
const de_ListWorkloadSharesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWorkloadSharesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.wellarchitected#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.wellarchitected#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.wellarchitected#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.wellarchitected#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.wellarchitected#ValidationException":
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
    case "com.amazonaws.wellarchitected#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.wellarchitected#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
    case "com.amazonaws.wellarchitected#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.wellarchitected#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1UpdateAnswerCommand
 */
export const de_UpdateAnswerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAnswerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateAnswerCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Answer != null) {
    contents.Answer = de_Answer(data.Answer, context);
  }
  if (data.LensAlias != null) {
    contents.LensAlias = __expectString(data.LensAlias);
  }
  if (data.LensArn != null) {
    contents.LensArn = __expectString(data.LensArn);
  }
  if (data.WorkloadId != null) {
    contents.WorkloadId = __expectString(data.WorkloadId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateAnswerCommandError
 */
const de_UpdateAnswerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAnswerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.wellarchitected#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.wellarchitected#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.wellarchitected#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.wellarchitected#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.wellarchitected#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.wellarchitected#ValidationException":
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
 * deserializeAws_restJson1UpdateGlobalSettingsCommand
 */
export const de_UpdateGlobalSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGlobalSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateGlobalSettingsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateGlobalSettingsCommandError
 */
const de_UpdateGlobalSettingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGlobalSettingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.wellarchitected#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.wellarchitected#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.wellarchitected#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.wellarchitected#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.wellarchitected#ValidationException":
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
 * deserializeAws_restJson1UpdateLensReviewCommand
 */
export const de_UpdateLensReviewCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLensReviewCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateLensReviewCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.LensReview != null) {
    contents.LensReview = de_LensReview(data.LensReview, context);
  }
  if (data.WorkloadId != null) {
    contents.WorkloadId = __expectString(data.WorkloadId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateLensReviewCommandError
 */
const de_UpdateLensReviewCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLensReviewCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.wellarchitected#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.wellarchitected#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.wellarchitected#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.wellarchitected#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.wellarchitected#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.wellarchitected#ValidationException":
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
 * deserializeAws_restJson1UpdateShareInvitationCommand
 */
export const de_UpdateShareInvitationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateShareInvitationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateShareInvitationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ShareInvitation != null) {
    contents.ShareInvitation = de_ShareInvitation(data.ShareInvitation, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateShareInvitationCommandError
 */
const de_UpdateShareInvitationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateShareInvitationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.wellarchitected#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.wellarchitected#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.wellarchitected#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.wellarchitected#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.wellarchitected#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.wellarchitected#ValidationException":
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
 * deserializeAws_restJson1UpdateWorkloadCommand
 */
export const de_UpdateWorkloadCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateWorkloadCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateWorkloadCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Workload != null) {
    contents.Workload = de_Workload(data.Workload, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateWorkloadCommandError
 */
const de_UpdateWorkloadCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateWorkloadCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.wellarchitected#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.wellarchitected#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.wellarchitected#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.wellarchitected#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.wellarchitected#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.wellarchitected#ValidationException":
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
 * deserializeAws_restJson1UpdateWorkloadShareCommand
 */
export const de_UpdateWorkloadShareCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateWorkloadShareCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateWorkloadShareCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.WorkloadId != null) {
    contents.WorkloadId = __expectString(data.WorkloadId);
  }
  if (data.WorkloadShare != null) {
    contents.WorkloadShare = de_WorkloadShare(data.WorkloadShare, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateWorkloadShareCommandError
 */
const de_UpdateWorkloadShareCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateWorkloadShareCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.wellarchitected#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.wellarchitected#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.wellarchitected#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.wellarchitected#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.wellarchitected#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.wellarchitected#ValidationException":
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
 * deserializeAws_restJson1UpgradeLensReviewCommand
 */
export const de_UpgradeLensReviewCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpgradeLensReviewCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpgradeLensReviewCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpgradeLensReviewCommandError
 */
const de_UpgradeLensReviewCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpgradeLensReviewCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.wellarchitected#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.wellarchitected#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.wellarchitected#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.wellarchitected#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.wellarchitected#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.wellarchitected#ValidationException":
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
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
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
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.ResourceId != null) {
    contents.ResourceId = __expectString(data.ResourceId);
  }
  if (data.ResourceType != null) {
    contents.ResourceType = __expectString(data.ResourceType);
  }
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
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
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
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.ResourceId != null) {
    contents.ResourceId = __expectString(data.ResourceId);
  }
  if (data.ResourceType != null) {
    contents.ResourceType = __expectString(data.ResourceType);
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
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.QuotaCode != null) {
    contents.QuotaCode = __expectString(data.QuotaCode);
  }
  if (data.ResourceId != null) {
    contents.ResourceId = __expectString(data.ResourceId);
  }
  if (data.ResourceType != null) {
    contents.ResourceType = __expectString(data.ResourceType);
  }
  if (data.ServiceCode != null) {
    contents.ServiceCode = __expectString(data.ServiceCode);
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
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.QuotaCode != null) {
    contents.QuotaCode = __expectString(data.QuotaCode);
  }
  if (data.ServiceCode != null) {
    contents.ServiceCode = __expectString(data.ServiceCode);
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
  if (data.Fields != null) {
    contents.Fields = de_ValidationExceptionFieldList(data.Fields, context);
  }
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.Reason != null) {
    contents.Reason = __expectString(data.Reason);
  }
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * serializeAws_restJson1ChoiceUpdate
 */
const se_ChoiceUpdate = (input: ChoiceUpdate, context: __SerdeContext): any => {
  return {
    ...(input.Notes != null && { Notes: input.Notes }),
    ...(input.Reason != null && { Reason: input.Reason }),
    ...(input.Status != null && { Status: input.Status }),
  };
};

/**
 * serializeAws_restJson1ChoiceUpdates
 */
const se_ChoiceUpdates = (input: Record<string, ChoiceUpdate>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_ChoiceUpdate(value, context);
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1LensAliases
 */
const se_LensAliases = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1PillarNotes
 */
const se_PillarNotes = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1SelectedChoices
 */
const se_SelectedChoices = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
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
 * serializeAws_restJson1WorkloadAccountIds
 */
const se_WorkloadAccountIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1WorkloadApplications
 */
const se_WorkloadApplications = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1WorkloadAwsRegions
 */
const se_WorkloadAwsRegions = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1WorkloadDiscoveryConfig
 */
const se_WorkloadDiscoveryConfig = (input: WorkloadDiscoveryConfig, context: __SerdeContext): any => {
  return {
    ...(input.TrustedAdvisorIntegrationStatus != null && {
      TrustedAdvisorIntegrationStatus: input.TrustedAdvisorIntegrationStatus,
    }),
  };
};

/**
 * serializeAws_restJson1WorkloadLenses
 */
const se_WorkloadLenses = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1WorkloadNonAwsRegions
 */
const se_WorkloadNonAwsRegions = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1WorkloadPillarPriorities
 */
const se_WorkloadPillarPriorities = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * deserializeAws_restJson1AccountSummary
 */
const de_AccountSummary = (output: any, context: __SerdeContext): Record<string, number> => {
  return Object.entries(output).reduce((acc: Record<string, number>, [key, value]: [CheckStatus | string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectInt32(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1AdditionalResources
 */
const de_AdditionalResources = (output: any, context: __SerdeContext): AdditionalResources => {
  return {
    Content: output.Content != null ? de_Urls(output.Content, context) : undefined,
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_restJson1AdditionalResourcesList
 */
const de_AdditionalResourcesList = (output: any, context: __SerdeContext): AdditionalResources[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AdditionalResources(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Answer
 */
const de_Answer = (output: any, context: __SerdeContext): Answer => {
  return {
    ChoiceAnswers: output.ChoiceAnswers != null ? de_ChoiceAnswers(output.ChoiceAnswers, context) : undefined,
    Choices: output.Choices != null ? de_Choices(output.Choices, context) : undefined,
    HelpfulResourceDisplayText: __expectString(output.HelpfulResourceDisplayText),
    HelpfulResourceUrl: __expectString(output.HelpfulResourceUrl),
    ImprovementPlanUrl: __expectString(output.ImprovementPlanUrl),
    IsApplicable: __expectBoolean(output.IsApplicable),
    Notes: __expectString(output.Notes),
    PillarId: __expectString(output.PillarId),
    QuestionDescription: __expectString(output.QuestionDescription),
    QuestionId: __expectString(output.QuestionId),
    QuestionTitle: __expectString(output.QuestionTitle),
    Reason: __expectString(output.Reason),
    Risk: __expectString(output.Risk),
    SelectedChoices: output.SelectedChoices != null ? de_SelectedChoices(output.SelectedChoices, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1AnswerSummaries
 */
const de_AnswerSummaries = (output: any, context: __SerdeContext): AnswerSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AnswerSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AnswerSummary
 */
const de_AnswerSummary = (output: any, context: __SerdeContext): AnswerSummary => {
  return {
    ChoiceAnswerSummaries:
      output.ChoiceAnswerSummaries != null
        ? de_ChoiceAnswerSummaries(output.ChoiceAnswerSummaries, context)
        : undefined,
    Choices: output.Choices != null ? de_Choices(output.Choices, context) : undefined,
    IsApplicable: __expectBoolean(output.IsApplicable),
    PillarId: __expectString(output.PillarId),
    QuestionId: __expectString(output.QuestionId),
    QuestionTitle: __expectString(output.QuestionTitle),
    Reason: __expectString(output.Reason),
    Risk: __expectString(output.Risk),
    SelectedChoices: output.SelectedChoices != null ? de_SelectedChoices(output.SelectedChoices, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1BestPractice
 */
const de_BestPractice = (output: any, context: __SerdeContext): BestPractice => {
  return {
    ChoiceId: __expectString(output.ChoiceId),
    ChoiceTitle: __expectString(output.ChoiceTitle),
  } as any;
};

/**
 * deserializeAws_restJson1BestPractices
 */
const de_BestPractices = (output: any, context: __SerdeContext): BestPractice[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_BestPractice(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1CheckDetail
 */
const de_CheckDetail = (output: any, context: __SerdeContext): CheckDetail => {
  return {
    AccountId: __expectString(output.AccountId),
    ChoiceId: __expectString(output.ChoiceId),
    Description: __expectString(output.Description),
    FlaggedResources: __expectInt32(output.FlaggedResources),
    Id: __expectString(output.Id),
    LensArn: __expectString(output.LensArn),
    Name: __expectString(output.Name),
    PillarId: __expectString(output.PillarId),
    Provider: __expectString(output.Provider),
    QuestionId: __expectString(output.QuestionId),
    Reason: __expectString(output.Reason),
    Status: __expectString(output.Status),
    UpdatedAt:
      output.UpdatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.UpdatedAt))) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1CheckDetails
 */
const de_CheckDetails = (output: any, context: __SerdeContext): CheckDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_CheckDetail(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1CheckSummaries
 */
const de_CheckSummaries = (output: any, context: __SerdeContext): CheckSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_CheckSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1CheckSummary
 */
const de_CheckSummary = (output: any, context: __SerdeContext): CheckSummary => {
  return {
    AccountSummary: output.AccountSummary != null ? de_AccountSummary(output.AccountSummary, context) : undefined,
    ChoiceId: __expectString(output.ChoiceId),
    Description: __expectString(output.Description),
    Id: __expectString(output.Id),
    LensArn: __expectString(output.LensArn),
    Name: __expectString(output.Name),
    PillarId: __expectString(output.PillarId),
    Provider: __expectString(output.Provider),
    QuestionId: __expectString(output.QuestionId),
    Status: __expectString(output.Status),
    UpdatedAt:
      output.UpdatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.UpdatedAt))) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1Choice
 */
const de_Choice = (output: any, context: __SerdeContext): Choice => {
  return {
    AdditionalResources:
      output.AdditionalResources != null ? de_AdditionalResourcesList(output.AdditionalResources, context) : undefined,
    ChoiceId: __expectString(output.ChoiceId),
    Description: __expectString(output.Description),
    HelpfulResource: output.HelpfulResource != null ? de_ChoiceContent(output.HelpfulResource, context) : undefined,
    ImprovementPlan: output.ImprovementPlan != null ? de_ChoiceContent(output.ImprovementPlan, context) : undefined,
    Title: __expectString(output.Title),
  } as any;
};

/**
 * deserializeAws_restJson1ChoiceAnswer
 */
const de_ChoiceAnswer = (output: any, context: __SerdeContext): ChoiceAnswer => {
  return {
    ChoiceId: __expectString(output.ChoiceId),
    Notes: __expectString(output.Notes),
    Reason: __expectString(output.Reason),
    Status: __expectString(output.Status),
  } as any;
};

/**
 * deserializeAws_restJson1ChoiceAnswers
 */
const de_ChoiceAnswers = (output: any, context: __SerdeContext): ChoiceAnswer[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ChoiceAnswer(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ChoiceAnswerSummaries
 */
const de_ChoiceAnswerSummaries = (output: any, context: __SerdeContext): ChoiceAnswerSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ChoiceAnswerSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ChoiceAnswerSummary
 */
const de_ChoiceAnswerSummary = (output: any, context: __SerdeContext): ChoiceAnswerSummary => {
  return {
    ChoiceId: __expectString(output.ChoiceId),
    Reason: __expectString(output.Reason),
    Status: __expectString(output.Status),
  } as any;
};

/**
 * deserializeAws_restJson1ChoiceContent
 */
const de_ChoiceContent = (output: any, context: __SerdeContext): ChoiceContent => {
  return {
    DisplayText: __expectString(output.DisplayText),
    Url: __expectString(output.Url),
  } as any;
};

/**
 * deserializeAws_restJson1ChoiceImprovementPlan
 */
const de_ChoiceImprovementPlan = (output: any, context: __SerdeContext): ChoiceImprovementPlan => {
  return {
    ChoiceId: __expectString(output.ChoiceId),
    DisplayText: __expectString(output.DisplayText),
    ImprovementPlanUrl: __expectString(output.ImprovementPlanUrl),
  } as any;
};

/**
 * deserializeAws_restJson1ChoiceImprovementPlans
 */
const de_ChoiceImprovementPlans = (output: any, context: __SerdeContext): ChoiceImprovementPlan[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ChoiceImprovementPlan(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Choices
 */
const de_Choices = (output: any, context: __SerdeContext): Choice[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Choice(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ConsolidatedReportMetric
 */
const de_ConsolidatedReportMetric = (output: any, context: __SerdeContext): ConsolidatedReportMetric => {
  return {
    Lenses: output.Lenses != null ? de_LensMetrics(output.Lenses, context) : undefined,
    LensesAppliedCount: __expectInt32(output.LensesAppliedCount),
    MetricType: __expectString(output.MetricType),
    RiskCounts: output.RiskCounts != null ? de_RiskCounts(output.RiskCounts, context) : undefined,
    UpdatedAt:
      output.UpdatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.UpdatedAt))) : undefined,
    WorkloadArn: __expectString(output.WorkloadArn),
    WorkloadId: __expectString(output.WorkloadId),
    WorkloadName: __expectString(output.WorkloadName),
  } as any;
};

/**
 * deserializeAws_restJson1ConsolidatedReportMetrics
 */
const de_ConsolidatedReportMetrics = (output: any, context: __SerdeContext): ConsolidatedReportMetric[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ConsolidatedReportMetric(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ImprovementSummaries
 */
const de_ImprovementSummaries = (output: any, context: __SerdeContext): ImprovementSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ImprovementSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ImprovementSummary
 */
const de_ImprovementSummary = (output: any, context: __SerdeContext): ImprovementSummary => {
  return {
    ImprovementPlanUrl: __expectString(output.ImprovementPlanUrl),
    ImprovementPlans:
      output.ImprovementPlans != null ? de_ChoiceImprovementPlans(output.ImprovementPlans, context) : undefined,
    PillarId: __expectString(output.PillarId),
    QuestionId: __expectString(output.QuestionId),
    QuestionTitle: __expectString(output.QuestionTitle),
    Risk: __expectString(output.Risk),
  } as any;
};

/**
 * deserializeAws_restJson1Lens
 */
const de_Lens = (output: any, context: __SerdeContext): Lens => {
  return {
    Description: __expectString(output.Description),
    LensArn: __expectString(output.LensArn),
    LensVersion: __expectString(output.LensVersion),
    Name: __expectString(output.Name),
    Owner: __expectString(output.Owner),
    ShareInvitationId: __expectString(output.ShareInvitationId),
    Tags: output.Tags != null ? de_TagMap(output.Tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1LensMetric
 */
const de_LensMetric = (output: any, context: __SerdeContext): LensMetric => {
  return {
    LensArn: __expectString(output.LensArn),
    Pillars: output.Pillars != null ? de_PillarMetrics(output.Pillars, context) : undefined,
    RiskCounts: output.RiskCounts != null ? de_RiskCounts(output.RiskCounts, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1LensMetrics
 */
const de_LensMetrics = (output: any, context: __SerdeContext): LensMetric[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_LensMetric(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1LensReview
 */
const de_LensReview = (output: any, context: __SerdeContext): LensReview => {
  return {
    LensAlias: __expectString(output.LensAlias),
    LensArn: __expectString(output.LensArn),
    LensName: __expectString(output.LensName),
    LensStatus: __expectString(output.LensStatus),
    LensVersion: __expectString(output.LensVersion),
    NextToken: __expectString(output.NextToken),
    Notes: __expectString(output.Notes),
    PillarReviewSummaries:
      output.PillarReviewSummaries != null
        ? de_PillarReviewSummaries(output.PillarReviewSummaries, context)
        : undefined,
    RiskCounts: output.RiskCounts != null ? de_RiskCounts(output.RiskCounts, context) : undefined,
    UpdatedAt:
      output.UpdatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.UpdatedAt))) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1LensReviewReport
 */
const de_LensReviewReport = (output: any, context: __SerdeContext): LensReviewReport => {
  return {
    Base64String: __expectString(output.Base64String),
    LensAlias: __expectString(output.LensAlias),
    LensArn: __expectString(output.LensArn),
  } as any;
};

/**
 * deserializeAws_restJson1LensReviewSummaries
 */
const de_LensReviewSummaries = (output: any, context: __SerdeContext): LensReviewSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_LensReviewSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1LensReviewSummary
 */
const de_LensReviewSummary = (output: any, context: __SerdeContext): LensReviewSummary => {
  return {
    LensAlias: __expectString(output.LensAlias),
    LensArn: __expectString(output.LensArn),
    LensName: __expectString(output.LensName),
    LensStatus: __expectString(output.LensStatus),
    LensVersion: __expectString(output.LensVersion),
    RiskCounts: output.RiskCounts != null ? de_RiskCounts(output.RiskCounts, context) : undefined,
    UpdatedAt:
      output.UpdatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.UpdatedAt))) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1LensShareSummaries
 */
const de_LensShareSummaries = (output: any, context: __SerdeContext): LensShareSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_LensShareSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1LensShareSummary
 */
const de_LensShareSummary = (output: any, context: __SerdeContext): LensShareSummary => {
  return {
    ShareId: __expectString(output.ShareId),
    SharedWith: __expectString(output.SharedWith),
    Status: __expectString(output.Status),
    StatusMessage: __expectString(output.StatusMessage),
  } as any;
};

/**
 * deserializeAws_restJson1LensSummaries
 */
const de_LensSummaries = (output: any, context: __SerdeContext): LensSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_LensSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1LensSummary
 */
const de_LensSummary = (output: any, context: __SerdeContext): LensSummary => {
  return {
    CreatedAt:
      output.CreatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedAt))) : undefined,
    Description: __expectString(output.Description),
    LensAlias: __expectString(output.LensAlias),
    LensArn: __expectString(output.LensArn),
    LensName: __expectString(output.LensName),
    LensStatus: __expectString(output.LensStatus),
    LensType: __expectString(output.LensType),
    LensVersion: __expectString(output.LensVersion),
    Owner: __expectString(output.Owner),
    UpdatedAt:
      output.UpdatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.UpdatedAt))) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1LensUpgradeSummary
 */
const de_LensUpgradeSummary = (output: any, context: __SerdeContext): LensUpgradeSummary => {
  return {
    CurrentLensVersion: __expectString(output.CurrentLensVersion),
    LatestLensVersion: __expectString(output.LatestLensVersion),
    LensAlias: __expectString(output.LensAlias),
    LensArn: __expectString(output.LensArn),
    WorkloadId: __expectString(output.WorkloadId),
    WorkloadName: __expectString(output.WorkloadName),
  } as any;
};

/**
 * deserializeAws_restJson1Milestone
 */
const de_Milestone = (output: any, context: __SerdeContext): Milestone => {
  return {
    MilestoneName: __expectString(output.MilestoneName),
    MilestoneNumber: __expectInt32(output.MilestoneNumber),
    RecordedAt:
      output.RecordedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.RecordedAt))) : undefined,
    Workload: output.Workload != null ? de_Workload(output.Workload, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1MilestoneSummaries
 */
const de_MilestoneSummaries = (output: any, context: __SerdeContext): MilestoneSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_MilestoneSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1MilestoneSummary
 */
const de_MilestoneSummary = (output: any, context: __SerdeContext): MilestoneSummary => {
  return {
    MilestoneName: __expectString(output.MilestoneName),
    MilestoneNumber: __expectInt32(output.MilestoneNumber),
    RecordedAt:
      output.RecordedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.RecordedAt))) : undefined,
    WorkloadSummary: output.WorkloadSummary != null ? de_WorkloadSummary(output.WorkloadSummary, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1NotificationSummaries
 */
const de_NotificationSummaries = (output: any, context: __SerdeContext): NotificationSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_NotificationSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1NotificationSummary
 */
const de_NotificationSummary = (output: any, context: __SerdeContext): NotificationSummary => {
  return {
    LensUpgradeSummary:
      output.LensUpgradeSummary != null ? de_LensUpgradeSummary(output.LensUpgradeSummary, context) : undefined,
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_restJson1PillarDifference
 */
const de_PillarDifference = (output: any, context: __SerdeContext): PillarDifference => {
  return {
    DifferenceStatus: __expectString(output.DifferenceStatus),
    PillarId: __expectString(output.PillarId),
    PillarName: __expectString(output.PillarName),
    QuestionDifferences:
      output.QuestionDifferences != null ? de_QuestionDifferences(output.QuestionDifferences, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1PillarDifferences
 */
const de_PillarDifferences = (output: any, context: __SerdeContext): PillarDifference[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_PillarDifference(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1PillarMetric
 */
const de_PillarMetric = (output: any, context: __SerdeContext): PillarMetric => {
  return {
    PillarId: __expectString(output.PillarId),
    Questions: output.Questions != null ? de_QuestionMetrics(output.Questions, context) : undefined,
    RiskCounts: output.RiskCounts != null ? de_RiskCounts(output.RiskCounts, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1PillarMetrics
 */
const de_PillarMetrics = (output: any, context: __SerdeContext): PillarMetric[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_PillarMetric(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1PillarReviewSummaries
 */
const de_PillarReviewSummaries = (output: any, context: __SerdeContext): PillarReviewSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_PillarReviewSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1PillarReviewSummary
 */
const de_PillarReviewSummary = (output: any, context: __SerdeContext): PillarReviewSummary => {
  return {
    Notes: __expectString(output.Notes),
    PillarId: __expectString(output.PillarId),
    PillarName: __expectString(output.PillarName),
    RiskCounts: output.RiskCounts != null ? de_RiskCounts(output.RiskCounts, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1QuestionDifference
 */
const de_QuestionDifference = (output: any, context: __SerdeContext): QuestionDifference => {
  return {
    DifferenceStatus: __expectString(output.DifferenceStatus),
    QuestionId: __expectString(output.QuestionId),
    QuestionTitle: __expectString(output.QuestionTitle),
  } as any;
};

/**
 * deserializeAws_restJson1QuestionDifferences
 */
const de_QuestionDifferences = (output: any, context: __SerdeContext): QuestionDifference[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_QuestionDifference(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1QuestionMetric
 */
const de_QuestionMetric = (output: any, context: __SerdeContext): QuestionMetric => {
  return {
    BestPractices: output.BestPractices != null ? de_BestPractices(output.BestPractices, context) : undefined,
    QuestionId: __expectString(output.QuestionId),
    Risk: __expectString(output.Risk),
  } as any;
};

/**
 * deserializeAws_restJson1QuestionMetrics
 */
const de_QuestionMetrics = (output: any, context: __SerdeContext): QuestionMetric[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_QuestionMetric(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1RiskCounts
 */
const de_RiskCounts = (output: any, context: __SerdeContext): Record<string, number> => {
  return Object.entries(output).reduce((acc: Record<string, number>, [key, value]: [Risk | string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectInt32(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1SelectedChoices
 */
const de_SelectedChoices = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1ShareInvitation
 */
const de_ShareInvitation = (output: any, context: __SerdeContext): ShareInvitation => {
  return {
    LensAlias: __expectString(output.LensAlias),
    LensArn: __expectString(output.LensArn),
    ShareInvitationId: __expectString(output.ShareInvitationId),
    ShareResourceType: __expectString(output.ShareResourceType),
    WorkloadId: __expectString(output.WorkloadId),
  } as any;
};

/**
 * deserializeAws_restJson1ShareInvitationSummaries
 */
const de_ShareInvitationSummaries = (output: any, context: __SerdeContext): ShareInvitationSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ShareInvitationSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ShareInvitationSummary
 */
const de_ShareInvitationSummary = (output: any, context: __SerdeContext): ShareInvitationSummary => {
  return {
    LensArn: __expectString(output.LensArn),
    LensName: __expectString(output.LensName),
    PermissionType: __expectString(output.PermissionType),
    ShareInvitationId: __expectString(output.ShareInvitationId),
    ShareResourceType: __expectString(output.ShareResourceType),
    SharedBy: __expectString(output.SharedBy),
    SharedWith: __expectString(output.SharedWith),
    WorkloadId: __expectString(output.WorkloadId),
    WorkloadName: __expectString(output.WorkloadName),
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
 * deserializeAws_restJson1Urls
 */
const de_Urls = (output: any, context: __SerdeContext): ChoiceContent[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ChoiceContent(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ValidationExceptionField
 */
const de_ValidationExceptionField = (output: any, context: __SerdeContext): ValidationExceptionField => {
  return {
    Message: __expectString(output.Message),
    Name: __expectString(output.Name),
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

/**
 * deserializeAws_restJson1VersionDifferences
 */
const de_VersionDifferences = (output: any, context: __SerdeContext): VersionDifferences => {
  return {
    PillarDifferences:
      output.PillarDifferences != null ? de_PillarDifferences(output.PillarDifferences, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1Workload
 */
const de_Workload = (output: any, context: __SerdeContext): Workload => {
  return {
    AccountIds: output.AccountIds != null ? de_WorkloadAccountIds(output.AccountIds, context) : undefined,
    Applications: output.Applications != null ? de_WorkloadApplications(output.Applications, context) : undefined,
    ArchitecturalDesign: __expectString(output.ArchitecturalDesign),
    AwsRegions: output.AwsRegions != null ? de_WorkloadAwsRegions(output.AwsRegions, context) : undefined,
    Description: __expectString(output.Description),
    DiscoveryConfig:
      output.DiscoveryConfig != null ? de_WorkloadDiscoveryConfig(output.DiscoveryConfig, context) : undefined,
    Environment: __expectString(output.Environment),
    ImprovementStatus: __expectString(output.ImprovementStatus),
    Industry: __expectString(output.Industry),
    IndustryType: __expectString(output.IndustryType),
    IsReviewOwnerUpdateAcknowledged: __expectBoolean(output.IsReviewOwnerUpdateAcknowledged),
    Lenses: output.Lenses != null ? de_WorkloadLenses(output.Lenses, context) : undefined,
    NonAwsRegions: output.NonAwsRegions != null ? de_WorkloadNonAwsRegions(output.NonAwsRegions, context) : undefined,
    Notes: __expectString(output.Notes),
    Owner: __expectString(output.Owner),
    PillarPriorities:
      output.PillarPriorities != null ? de_WorkloadPillarPriorities(output.PillarPriorities, context) : undefined,
    ReviewOwner: __expectString(output.ReviewOwner),
    ReviewRestrictionDate:
      output.ReviewRestrictionDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ReviewRestrictionDate)))
        : undefined,
    RiskCounts: output.RiskCounts != null ? de_RiskCounts(output.RiskCounts, context) : undefined,
    ShareInvitationId: __expectString(output.ShareInvitationId),
    Tags: output.Tags != null ? de_TagMap(output.Tags, context) : undefined,
    UpdatedAt:
      output.UpdatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.UpdatedAt))) : undefined,
    WorkloadArn: __expectString(output.WorkloadArn),
    WorkloadId: __expectString(output.WorkloadId),
    WorkloadName: __expectString(output.WorkloadName),
  } as any;
};

/**
 * deserializeAws_restJson1WorkloadAccountIds
 */
const de_WorkloadAccountIds = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1WorkloadApplications
 */
const de_WorkloadApplications = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1WorkloadAwsRegions
 */
const de_WorkloadAwsRegions = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1WorkloadDiscoveryConfig
 */
const de_WorkloadDiscoveryConfig = (output: any, context: __SerdeContext): WorkloadDiscoveryConfig => {
  return {
    TrustedAdvisorIntegrationStatus: __expectString(output.TrustedAdvisorIntegrationStatus),
  } as any;
};

/**
 * deserializeAws_restJson1WorkloadLenses
 */
const de_WorkloadLenses = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1WorkloadNonAwsRegions
 */
const de_WorkloadNonAwsRegions = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1WorkloadPillarPriorities
 */
const de_WorkloadPillarPriorities = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1WorkloadShare
 */
const de_WorkloadShare = (output: any, context: __SerdeContext): WorkloadShare => {
  return {
    PermissionType: __expectString(output.PermissionType),
    ShareId: __expectString(output.ShareId),
    SharedBy: __expectString(output.SharedBy),
    SharedWith: __expectString(output.SharedWith),
    Status: __expectString(output.Status),
    WorkloadId: __expectString(output.WorkloadId),
    WorkloadName: __expectString(output.WorkloadName),
  } as any;
};

/**
 * deserializeAws_restJson1WorkloadShareSummaries
 */
const de_WorkloadShareSummaries = (output: any, context: __SerdeContext): WorkloadShareSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_WorkloadShareSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1WorkloadShareSummary
 */
const de_WorkloadShareSummary = (output: any, context: __SerdeContext): WorkloadShareSummary => {
  return {
    PermissionType: __expectString(output.PermissionType),
    ShareId: __expectString(output.ShareId),
    SharedWith: __expectString(output.SharedWith),
    Status: __expectString(output.Status),
    StatusMessage: __expectString(output.StatusMessage),
  } as any;
};

/**
 * deserializeAws_restJson1WorkloadSummaries
 */
const de_WorkloadSummaries = (output: any, context: __SerdeContext): WorkloadSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_WorkloadSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1WorkloadSummary
 */
const de_WorkloadSummary = (output: any, context: __SerdeContext): WorkloadSummary => {
  return {
    ImprovementStatus: __expectString(output.ImprovementStatus),
    Lenses: output.Lenses != null ? de_WorkloadLenses(output.Lenses, context) : undefined,
    Owner: __expectString(output.Owner),
    RiskCounts: output.RiskCounts != null ? de_RiskCounts(output.RiskCounts, context) : undefined,
    UpdatedAt:
      output.UpdatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.UpdatedAt))) : undefined,
    WorkloadArn: __expectString(output.WorkloadArn),
    WorkloadId: __expectString(output.WorkloadId),
    WorkloadName: __expectString(output.WorkloadName),
  } as any;
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
