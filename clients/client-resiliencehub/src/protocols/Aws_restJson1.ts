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
  limitedParseDouble as __limitedParseDouble,
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

import {
  AddDraftAppVersionResourceMappingsCommandInput,
  AddDraftAppVersionResourceMappingsCommandOutput,
} from "../commands/AddDraftAppVersionResourceMappingsCommand";
import { CreateAppCommandInput, CreateAppCommandOutput } from "../commands/CreateAppCommand";
import {
  CreateRecommendationTemplateCommandInput,
  CreateRecommendationTemplateCommandOutput,
} from "../commands/CreateRecommendationTemplateCommand";
import {
  CreateResiliencyPolicyCommandInput,
  CreateResiliencyPolicyCommandOutput,
} from "../commands/CreateResiliencyPolicyCommand";
import {
  DeleteAppAssessmentCommandInput,
  DeleteAppAssessmentCommandOutput,
} from "../commands/DeleteAppAssessmentCommand";
import { DeleteAppCommandInput, DeleteAppCommandOutput } from "../commands/DeleteAppCommand";
import {
  DeleteRecommendationTemplateCommandInput,
  DeleteRecommendationTemplateCommandOutput,
} from "../commands/DeleteRecommendationTemplateCommand";
import {
  DeleteResiliencyPolicyCommandInput,
  DeleteResiliencyPolicyCommandOutput,
} from "../commands/DeleteResiliencyPolicyCommand";
import {
  DescribeAppAssessmentCommandInput,
  DescribeAppAssessmentCommandOutput,
} from "../commands/DescribeAppAssessmentCommand";
import { DescribeAppCommandInput, DescribeAppCommandOutput } from "../commands/DescribeAppCommand";
import {
  DescribeAppVersionResourcesResolutionStatusCommandInput,
  DescribeAppVersionResourcesResolutionStatusCommandOutput,
} from "../commands/DescribeAppVersionResourcesResolutionStatusCommand";
import {
  DescribeAppVersionTemplateCommandInput,
  DescribeAppVersionTemplateCommandOutput,
} from "../commands/DescribeAppVersionTemplateCommand";
import {
  DescribeDraftAppVersionResourcesImportStatusCommandInput,
  DescribeDraftAppVersionResourcesImportStatusCommandOutput,
} from "../commands/DescribeDraftAppVersionResourcesImportStatusCommand";
import {
  DescribeResiliencyPolicyCommandInput,
  DescribeResiliencyPolicyCommandOutput,
} from "../commands/DescribeResiliencyPolicyCommand";
import {
  ImportResourcesToDraftAppVersionCommandInput,
  ImportResourcesToDraftAppVersionCommandOutput,
} from "../commands/ImportResourcesToDraftAppVersionCommand";
import {
  ListAlarmRecommendationsCommandInput,
  ListAlarmRecommendationsCommandOutput,
} from "../commands/ListAlarmRecommendationsCommand";
import { ListAppAssessmentsCommandInput, ListAppAssessmentsCommandOutput } from "../commands/ListAppAssessmentsCommand";
import {
  ListAppComponentCompliancesCommandInput,
  ListAppComponentCompliancesCommandOutput,
} from "../commands/ListAppComponentCompliancesCommand";
import {
  ListAppComponentRecommendationsCommandInput,
  ListAppComponentRecommendationsCommandOutput,
} from "../commands/ListAppComponentRecommendationsCommand";
import { ListAppsCommandInput, ListAppsCommandOutput } from "../commands/ListAppsCommand";
import {
  ListAppVersionResourceMappingsCommandInput,
  ListAppVersionResourceMappingsCommandOutput,
} from "../commands/ListAppVersionResourceMappingsCommand";
import {
  ListAppVersionResourcesCommandInput,
  ListAppVersionResourcesCommandOutput,
} from "../commands/ListAppVersionResourcesCommand";
import { ListAppVersionsCommandInput, ListAppVersionsCommandOutput } from "../commands/ListAppVersionsCommand";
import {
  ListRecommendationTemplatesCommandInput,
  ListRecommendationTemplatesCommandOutput,
} from "../commands/ListRecommendationTemplatesCommand";
import {
  ListResiliencyPoliciesCommandInput,
  ListResiliencyPoliciesCommandOutput,
} from "../commands/ListResiliencyPoliciesCommand";
import {
  ListSopRecommendationsCommandInput,
  ListSopRecommendationsCommandOutput,
} from "../commands/ListSopRecommendationsCommand";
import {
  ListSuggestedResiliencyPoliciesCommandInput,
  ListSuggestedResiliencyPoliciesCommandOutput,
} from "../commands/ListSuggestedResiliencyPoliciesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import {
  ListTestRecommendationsCommandInput,
  ListTestRecommendationsCommandOutput,
} from "../commands/ListTestRecommendationsCommand";
import {
  ListUnsupportedAppVersionResourcesCommandInput,
  ListUnsupportedAppVersionResourcesCommandOutput,
} from "../commands/ListUnsupportedAppVersionResourcesCommand";
import { PublishAppVersionCommandInput, PublishAppVersionCommandOutput } from "../commands/PublishAppVersionCommand";
import {
  PutDraftAppVersionTemplateCommandInput,
  PutDraftAppVersionTemplateCommandOutput,
} from "../commands/PutDraftAppVersionTemplateCommand";
import {
  RemoveDraftAppVersionResourceMappingsCommandInput,
  RemoveDraftAppVersionResourceMappingsCommandOutput,
} from "../commands/RemoveDraftAppVersionResourceMappingsCommand";
import {
  ResolveAppVersionResourcesCommandInput,
  ResolveAppVersionResourcesCommandOutput,
} from "../commands/ResolveAppVersionResourcesCommand";
import { StartAppAssessmentCommandInput, StartAppAssessmentCommandOutput } from "../commands/StartAppAssessmentCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateAppCommandInput, UpdateAppCommandOutput } from "../commands/UpdateAppCommand";
import {
  UpdateResiliencyPolicyCommandInput,
  UpdateResiliencyPolicyCommandOutput,
} from "../commands/UpdateResiliencyPolicyCommand";
import {
  AccessDeniedException,
  AlarmRecommendation,
  App,
  AppAssessment,
  AppAssessmentSummary,
  AppComponent,
  AppComponentCompliance,
  AppSummary,
  AppVersionSummary,
  ComponentRecommendation,
  ConfigRecommendation,
  ConflictException,
  Cost,
  DisruptionCompliance,
  DisruptionType,
  FailurePolicy,
  InternalServerException,
  LogicalResourceId,
  PhysicalResource,
  PhysicalResourceId,
  RecommendationDisruptionCompliance,
  RecommendationItem,
  RecommendationTemplate,
  RenderRecommendationType,
  ResiliencyPolicy,
  ResiliencyScore,
  ResourceError,
  ResourceErrorsDetails,
  ResourceMapping,
  ResourceNotFoundException,
  S3Location,
  ServiceQuotaExceededException,
  SopRecommendation,
  TerraformSource,
  TestRecommendation,
  ThrottlingException,
  UnsupportedResource,
  ValidationException,
} from "../models/models_0";
import { ResiliencehubServiceException as __BaseException } from "../models/ResiliencehubServiceException";

export const serializeAws_restJson1AddDraftAppVersionResourceMappingsCommand = async (
  input: AddDraftAppVersionResourceMappingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/add-draft-app-version-resource-mappings";
  let body: any;
  body = JSON.stringify({
    ...(input.appArn != null && { appArn: input.appArn }),
    ...(input.resourceMappings != null && {
      resourceMappings: serializeAws_restJson1ResourceMappingList(input.resourceMappings, context),
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

export const serializeAws_restJson1CreateAppCommand = async (
  input: CreateAppCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/create-app";
  let body: any;
  body = JSON.stringify({
    ...(input.assessmentSchedule != null && { assessmentSchedule: input.assessmentSchedule }),
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.description != null && { description: input.description }),
    ...(input.name != null && { name: input.name }),
    ...(input.policyArn != null && { policyArn: input.policyArn }),
    ...(input.tags != null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
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

export const serializeAws_restJson1CreateRecommendationTemplateCommand = async (
  input: CreateRecommendationTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/create-recommendation-template";
  let body: any;
  body = JSON.stringify({
    ...(input.assessmentArn != null && { assessmentArn: input.assessmentArn }),
    ...(input.bucketName != null && { bucketName: input.bucketName }),
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.format != null && { format: input.format }),
    ...(input.name != null && { name: input.name }),
    ...(input.recommendationIds != null && {
      recommendationIds: serializeAws_restJson1RecommendationIdList(input.recommendationIds, context),
    }),
    ...(input.recommendationTypes != null && {
      recommendationTypes: serializeAws_restJson1RenderRecommendationTypeList(input.recommendationTypes, context),
    }),
    ...(input.tags != null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
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

export const serializeAws_restJson1CreateResiliencyPolicyCommand = async (
  input: CreateResiliencyPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/create-resiliency-policy";
  let body: any;
  body = JSON.stringify({
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.dataLocationConstraint != null && { dataLocationConstraint: input.dataLocationConstraint }),
    ...(input.policy != null && { policy: serializeAws_restJson1DisruptionPolicy(input.policy, context) }),
    ...(input.policyDescription != null && { policyDescription: input.policyDescription }),
    ...(input.policyName != null && { policyName: input.policyName }),
    ...(input.tags != null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
    ...(input.tier != null && { tier: input.tier }),
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

export const serializeAws_restJson1DeleteAppCommand = async (
  input: DeleteAppCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/delete-app";
  let body: any;
  body = JSON.stringify({
    ...(input.appArn != null && { appArn: input.appArn }),
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.forceDelete != null && { forceDelete: input.forceDelete }),
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

export const serializeAws_restJson1DeleteAppAssessmentCommand = async (
  input: DeleteAppAssessmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/delete-app-assessment";
  let body: any;
  body = JSON.stringify({
    ...(input.assessmentArn != null && { assessmentArn: input.assessmentArn }),
    clientToken: input.clientToken ?? generateIdempotencyToken(),
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

export const serializeAws_restJson1DeleteRecommendationTemplateCommand = async (
  input: DeleteRecommendationTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/delete-recommendation-template";
  let body: any;
  body = JSON.stringify({
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.recommendationTemplateArn != null && { recommendationTemplateArn: input.recommendationTemplateArn }),
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

export const serializeAws_restJson1DeleteResiliencyPolicyCommand = async (
  input: DeleteResiliencyPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/delete-resiliency-policy";
  let body: any;
  body = JSON.stringify({
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.policyArn != null && { policyArn: input.policyArn }),
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

export const serializeAws_restJson1DescribeAppCommand = async (
  input: DescribeAppCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/describe-app";
  let body: any;
  body = JSON.stringify({
    ...(input.appArn != null && { appArn: input.appArn }),
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

export const serializeAws_restJson1DescribeAppAssessmentCommand = async (
  input: DescribeAppAssessmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/describe-app-assessment";
  let body: any;
  body = JSON.stringify({
    ...(input.assessmentArn != null && { assessmentArn: input.assessmentArn }),
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

export const serializeAws_restJson1DescribeAppVersionResourcesResolutionStatusCommand = async (
  input: DescribeAppVersionResourcesResolutionStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/describe-app-version-resources-resolution-status";
  let body: any;
  body = JSON.stringify({
    ...(input.appArn != null && { appArn: input.appArn }),
    ...(input.appVersion != null && { appVersion: input.appVersion }),
    ...(input.resolutionId != null && { resolutionId: input.resolutionId }),
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

export const serializeAws_restJson1DescribeAppVersionTemplateCommand = async (
  input: DescribeAppVersionTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/describe-app-version-template";
  let body: any;
  body = JSON.stringify({
    ...(input.appArn != null && { appArn: input.appArn }),
    ...(input.appVersion != null && { appVersion: input.appVersion }),
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

export const serializeAws_restJson1DescribeDraftAppVersionResourcesImportStatusCommand = async (
  input: DescribeDraftAppVersionResourcesImportStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/describe-draft-app-version-resources-import-status";
  let body: any;
  body = JSON.stringify({
    ...(input.appArn != null && { appArn: input.appArn }),
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

export const serializeAws_restJson1DescribeResiliencyPolicyCommand = async (
  input: DescribeResiliencyPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/describe-resiliency-policy";
  let body: any;
  body = JSON.stringify({
    ...(input.policyArn != null && { policyArn: input.policyArn }),
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

export const serializeAws_restJson1ImportResourcesToDraftAppVersionCommand = async (
  input: ImportResourcesToDraftAppVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/import-resources-to-draft-app-version";
  let body: any;
  body = JSON.stringify({
    ...(input.appArn != null && { appArn: input.appArn }),
    ...(input.sourceArns != null && { sourceArns: serializeAws_restJson1ArnList(input.sourceArns, context) }),
    ...(input.terraformSources != null && {
      terraformSources: serializeAws_restJson1TerraformSourceList(input.terraformSources, context),
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

export const serializeAws_restJson1ListAlarmRecommendationsCommand = async (
  input: ListAlarmRecommendationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/list-alarm-recommendations";
  let body: any;
  body = JSON.stringify({
    ...(input.assessmentArn != null && { assessmentArn: input.assessmentArn }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
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

export const serializeAws_restJson1ListAppAssessmentsCommand = async (
  input: ListAppAssessmentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/list-app-assessments";
  const query: any = map({
    appArn: [, input.appArn!],
    assessmentName: [, input.assessmentName!],
    assessmentStatus: [
      () => input.assessmentStatus !== void 0,
      () => (input.assessmentStatus! || []).map((_entry) => _entry as any),
    ],
    complianceStatus: [, input.complianceStatus!],
    invoker: [, input.invoker!],
    reverseOrder: [() => input.reverseOrder !== void 0, () => input.reverseOrder!.toString()],
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

export const serializeAws_restJson1ListAppComponentCompliancesCommand = async (
  input: ListAppComponentCompliancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/list-app-component-compliances";
  let body: any;
  body = JSON.stringify({
    ...(input.assessmentArn != null && { assessmentArn: input.assessmentArn }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
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

export const serializeAws_restJson1ListAppComponentRecommendationsCommand = async (
  input: ListAppComponentRecommendationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/list-app-component-recommendations";
  let body: any;
  body = JSON.stringify({
    ...(input.assessmentArn != null && { assessmentArn: input.assessmentArn }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
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

export const serializeAws_restJson1ListAppsCommand = async (
  input: ListAppsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/list-apps";
  const query: any = map({
    nextToken: [, input.nextToken!],
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
    name: [, input.name!],
    appArn: [, input.appArn!],
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

export const serializeAws_restJson1ListAppVersionResourceMappingsCommand = async (
  input: ListAppVersionResourceMappingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/list-app-version-resource-mappings";
  let body: any;
  body = JSON.stringify({
    ...(input.appArn != null && { appArn: input.appArn }),
    ...(input.appVersion != null && { appVersion: input.appVersion }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
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

export const serializeAws_restJson1ListAppVersionResourcesCommand = async (
  input: ListAppVersionResourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/list-app-version-resources";
  let body: any;
  body = JSON.stringify({
    ...(input.appArn != null && { appArn: input.appArn }),
    ...(input.appVersion != null && { appVersion: input.appVersion }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.resolutionId != null && { resolutionId: input.resolutionId }),
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

export const serializeAws_restJson1ListAppVersionsCommand = async (
  input: ListAppVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/list-app-versions";
  let body: any;
  body = JSON.stringify({
    ...(input.appArn != null && { appArn: input.appArn }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
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

export const serializeAws_restJson1ListRecommendationTemplatesCommand = async (
  input: ListRecommendationTemplatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/list-recommendation-templates";
  const query: any = map({
    assessmentArn: [, __expectNonNull(input.assessmentArn!, `assessmentArn`)],
    reverseOrder: [() => input.reverseOrder !== void 0, () => input.reverseOrder!.toString()],
    status: [() => input.status !== void 0, () => (input.status! || []).map((_entry) => _entry as any)],
    recommendationTemplateArn: [, input.recommendationTemplateArn!],
    name: [, input.name!],
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

export const serializeAws_restJson1ListResiliencyPoliciesCommand = async (
  input: ListResiliencyPoliciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/list-resiliency-policies";
  const query: any = map({
    policyName: [, input.policyName!],
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

export const serializeAws_restJson1ListSopRecommendationsCommand = async (
  input: ListSopRecommendationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/list-sop-recommendations";
  let body: any;
  body = JSON.stringify({
    ...(input.assessmentArn != null && { assessmentArn: input.assessmentArn }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
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

export const serializeAws_restJson1ListSuggestedResiliencyPoliciesCommand = async (
  input: ListSuggestedResiliencyPoliciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/list-suggested-resiliency-policies";
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

export const serializeAws_restJson1ListTagsForResourceCommand = async (
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

export const serializeAws_restJson1ListTestRecommendationsCommand = async (
  input: ListTestRecommendationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/list-test-recommendations";
  let body: any;
  body = JSON.stringify({
    ...(input.assessmentArn != null && { assessmentArn: input.assessmentArn }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
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

export const serializeAws_restJson1ListUnsupportedAppVersionResourcesCommand = async (
  input: ListUnsupportedAppVersionResourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/list-unsupported-app-version-resources";
  let body: any;
  body = JSON.stringify({
    ...(input.appArn != null && { appArn: input.appArn }),
    ...(input.appVersion != null && { appVersion: input.appVersion }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.resolutionId != null && { resolutionId: input.resolutionId }),
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

export const serializeAws_restJson1PublishAppVersionCommand = async (
  input: PublishAppVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/publish-app-version";
  let body: any;
  body = JSON.stringify({
    ...(input.appArn != null && { appArn: input.appArn }),
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

export const serializeAws_restJson1PutDraftAppVersionTemplateCommand = async (
  input: PutDraftAppVersionTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/put-draft-app-version-template";
  let body: any;
  body = JSON.stringify({
    ...(input.appArn != null && { appArn: input.appArn }),
    ...(input.appTemplateBody != null && { appTemplateBody: input.appTemplateBody }),
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

export const serializeAws_restJson1RemoveDraftAppVersionResourceMappingsCommand = async (
  input: RemoveDraftAppVersionResourceMappingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/remove-draft-app-version-resource-mappings";
  let body: any;
  body = JSON.stringify({
    ...(input.appArn != null && { appArn: input.appArn }),
    ...(input.appRegistryAppNames != null && {
      appRegistryAppNames: serializeAws_restJson1EntityNameList(input.appRegistryAppNames, context),
    }),
    ...(input.logicalStackNames != null && {
      logicalStackNames: serializeAws_restJson1String255List(input.logicalStackNames, context),
    }),
    ...(input.resourceGroupNames != null && {
      resourceGroupNames: serializeAws_restJson1EntityNameList(input.resourceGroupNames, context),
    }),
    ...(input.resourceNames != null && {
      resourceNames: serializeAws_restJson1EntityNameList(input.resourceNames, context),
    }),
    ...(input.terraformSourceNames != null && {
      terraformSourceNames: serializeAws_restJson1String255List(input.terraformSourceNames, context),
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

export const serializeAws_restJson1ResolveAppVersionResourcesCommand = async (
  input: ResolveAppVersionResourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/resolve-app-version-resources";
  let body: any;
  body = JSON.stringify({
    ...(input.appArn != null && { appArn: input.appArn }),
    ...(input.appVersion != null && { appVersion: input.appVersion }),
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

export const serializeAws_restJson1StartAppAssessmentCommand = async (
  input: StartAppAssessmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/start-app-assessment";
  let body: any;
  body = JSON.stringify({
    ...(input.appArn != null && { appArn: input.appArn }),
    ...(input.appVersion != null && { appVersion: input.appVersion }),
    ...(input.assessmentName != null && { assessmentName: input.assessmentName }),
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.tags != null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
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
  resolvedPath = __resolvedPath(resolvedPath, input, "resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.tags != null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
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

export const serializeAws_restJson1UpdateAppCommand = async (
  input: UpdateAppCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/update-app";
  let body: any;
  body = JSON.stringify({
    ...(input.appArn != null && { appArn: input.appArn }),
    ...(input.assessmentSchedule != null && { assessmentSchedule: input.assessmentSchedule }),
    ...(input.clearResiliencyPolicyArn != null && { clearResiliencyPolicyArn: input.clearResiliencyPolicyArn }),
    ...(input.description != null && { description: input.description }),
    ...(input.policyArn != null && { policyArn: input.policyArn }),
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

export const serializeAws_restJson1UpdateResiliencyPolicyCommand = async (
  input: UpdateResiliencyPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/update-resiliency-policy";
  let body: any;
  body = JSON.stringify({
    ...(input.dataLocationConstraint != null && { dataLocationConstraint: input.dataLocationConstraint }),
    ...(input.policy != null && { policy: serializeAws_restJson1DisruptionPolicy(input.policy, context) }),
    ...(input.policyArn != null && { policyArn: input.policyArn }),
    ...(input.policyDescription != null && { policyDescription: input.policyDescription }),
    ...(input.policyName != null && { policyName: input.policyName }),
    ...(input.tier != null && { tier: input.tier }),
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

export const deserializeAws_restJson1AddDraftAppVersionResourceMappingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddDraftAppVersionResourceMappingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1AddDraftAppVersionResourceMappingsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.appArn != null) {
    contents.appArn = __expectString(data.appArn);
  }
  if (data.appVersion != null) {
    contents.appVersion = __expectString(data.appVersion);
  }
  if (data.resourceMappings != null) {
    contents.resourceMappings = deserializeAws_restJson1ResourceMappingList(data.resourceMappings, context);
  }
  return contents;
};

const deserializeAws_restJson1AddDraftAppVersionResourceMappingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddDraftAppVersionResourceMappingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.resiliencehub#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.resiliencehub#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.resiliencehub#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.resiliencehub#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.resiliencehub#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.resiliencehub#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateAppCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAppCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateAppCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.app != null) {
    contents.app = deserializeAws_restJson1App(data.app, context);
  }
  return contents;
};

const deserializeAws_restJson1CreateAppCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAppCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.resiliencehub#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.resiliencehub#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.resiliencehub#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.resiliencehub#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.resiliencehub#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.resiliencehub#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.resiliencehub#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateRecommendationTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRecommendationTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateRecommendationTemplateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.recommendationTemplate != null) {
    contents.recommendationTemplate = deserializeAws_restJson1RecommendationTemplate(
      data.recommendationTemplate,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1CreateRecommendationTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRecommendationTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.resiliencehub#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.resiliencehub#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.resiliencehub#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.resiliencehub#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.resiliencehub#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.resiliencehub#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateResiliencyPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateResiliencyPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateResiliencyPolicyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.policy != null) {
    contents.policy = deserializeAws_restJson1ResiliencyPolicy(data.policy, context);
  }
  return contents;
};

const deserializeAws_restJson1CreateResiliencyPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateResiliencyPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.resiliencehub#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.resiliencehub#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.resiliencehub#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.resiliencehub#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.resiliencehub#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.resiliencehub#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteAppCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAppCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteAppCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.appArn != null) {
    contents.appArn = __expectString(data.appArn);
  }
  return contents;
};

const deserializeAws_restJson1DeleteAppCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAppCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.resiliencehub#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.resiliencehub#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.resiliencehub#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.resiliencehub#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.resiliencehub#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteAppAssessmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAppAssessmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteAppAssessmentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.assessmentArn != null) {
    contents.assessmentArn = __expectString(data.assessmentArn);
  }
  if (data.assessmentStatus != null) {
    contents.assessmentStatus = __expectString(data.assessmentStatus);
  }
  return contents;
};

const deserializeAws_restJson1DeleteAppAssessmentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAppAssessmentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.resiliencehub#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.resiliencehub#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.resiliencehub#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.resiliencehub#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.resiliencehub#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.resiliencehub#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteRecommendationTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRecommendationTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteRecommendationTemplateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.recommendationTemplateArn != null) {
    contents.recommendationTemplateArn = __expectString(data.recommendationTemplateArn);
  }
  if (data.status != null) {
    contents.status = __expectString(data.status);
  }
  return contents;
};

const deserializeAws_restJson1DeleteRecommendationTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRecommendationTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.resiliencehub#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.resiliencehub#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.resiliencehub#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.resiliencehub#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.resiliencehub#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteResiliencyPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResiliencyPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteResiliencyPolicyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.policyArn != null) {
    contents.policyArn = __expectString(data.policyArn);
  }
  return contents;
};

const deserializeAws_restJson1DeleteResiliencyPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResiliencyPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.resiliencehub#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.resiliencehub#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.resiliencehub#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.resiliencehub#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.resiliencehub#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.resiliencehub#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DescribeAppCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAppCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeAppCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.app != null) {
    contents.app = deserializeAws_restJson1App(data.app, context);
  }
  return contents;
};

const deserializeAws_restJson1DescribeAppCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAppCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.resiliencehub#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.resiliencehub#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.resiliencehub#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.resiliencehub#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.resiliencehub#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DescribeAppAssessmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAppAssessmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeAppAssessmentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.assessment != null) {
    contents.assessment = deserializeAws_restJson1AppAssessment(data.assessment, context);
  }
  return contents;
};

const deserializeAws_restJson1DescribeAppAssessmentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAppAssessmentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.resiliencehub#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.resiliencehub#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.resiliencehub#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.resiliencehub#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.resiliencehub#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DescribeAppVersionResourcesResolutionStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAppVersionResourcesResolutionStatusCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeAppVersionResourcesResolutionStatusCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.appArn != null) {
    contents.appArn = __expectString(data.appArn);
  }
  if (data.appVersion != null) {
    contents.appVersion = __expectString(data.appVersion);
  }
  if (data.errorMessage != null) {
    contents.errorMessage = __expectString(data.errorMessage);
  }
  if (data.resolutionId != null) {
    contents.resolutionId = __expectString(data.resolutionId);
  }
  if (data.status != null) {
    contents.status = __expectString(data.status);
  }
  return contents;
};

const deserializeAws_restJson1DescribeAppVersionResourcesResolutionStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAppVersionResourcesResolutionStatusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.resiliencehub#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.resiliencehub#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.resiliencehub#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.resiliencehub#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.resiliencehub#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DescribeAppVersionTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAppVersionTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeAppVersionTemplateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.appArn != null) {
    contents.appArn = __expectString(data.appArn);
  }
  if (data.appTemplateBody != null) {
    contents.appTemplateBody = __expectString(data.appTemplateBody);
  }
  if (data.appVersion != null) {
    contents.appVersion = __expectString(data.appVersion);
  }
  return contents;
};

const deserializeAws_restJson1DescribeAppVersionTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAppVersionTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.resiliencehub#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.resiliencehub#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.resiliencehub#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.resiliencehub#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.resiliencehub#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DescribeDraftAppVersionResourcesImportStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDraftAppVersionResourcesImportStatusCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeDraftAppVersionResourcesImportStatusCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.appArn != null) {
    contents.appArn = __expectString(data.appArn);
  }
  if (data.appVersion != null) {
    contents.appVersion = __expectString(data.appVersion);
  }
  if (data.errorMessage != null) {
    contents.errorMessage = __expectString(data.errorMessage);
  }
  if (data.status != null) {
    contents.status = __expectString(data.status);
  }
  if (data.statusChangeTime != null) {
    contents.statusChangeTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.statusChangeTime)));
  }
  return contents;
};

const deserializeAws_restJson1DescribeDraftAppVersionResourcesImportStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDraftAppVersionResourcesImportStatusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.resiliencehub#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.resiliencehub#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.resiliencehub#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.resiliencehub#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.resiliencehub#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DescribeResiliencyPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeResiliencyPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeResiliencyPolicyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.policy != null) {
    contents.policy = deserializeAws_restJson1ResiliencyPolicy(data.policy, context);
  }
  return contents;
};

const deserializeAws_restJson1DescribeResiliencyPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeResiliencyPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.resiliencehub#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.resiliencehub#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.resiliencehub#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.resiliencehub#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.resiliencehub#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ImportResourcesToDraftAppVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportResourcesToDraftAppVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ImportResourcesToDraftAppVersionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.appArn != null) {
    contents.appArn = __expectString(data.appArn);
  }
  if (data.appVersion != null) {
    contents.appVersion = __expectString(data.appVersion);
  }
  if (data.sourceArns != null) {
    contents.sourceArns = deserializeAws_restJson1ArnList(data.sourceArns, context);
  }
  if (data.status != null) {
    contents.status = __expectString(data.status);
  }
  if (data.terraformSources != null) {
    contents.terraformSources = deserializeAws_restJson1TerraformSourceList(data.terraformSources, context);
  }
  return contents;
};

const deserializeAws_restJson1ImportResourcesToDraftAppVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportResourcesToDraftAppVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.resiliencehub#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.resiliencehub#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.resiliencehub#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.resiliencehub#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.resiliencehub#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.resiliencehub#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListAlarmRecommendationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAlarmRecommendationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListAlarmRecommendationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.alarmRecommendations != null) {
    contents.alarmRecommendations = deserializeAws_restJson1AlarmRecommendationList(data.alarmRecommendations, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListAlarmRecommendationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAlarmRecommendationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.resiliencehub#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.resiliencehub#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.resiliencehub#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.resiliencehub#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.resiliencehub#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListAppAssessmentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAppAssessmentsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListAppAssessmentsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.assessmentSummaries != null) {
    contents.assessmentSummaries = deserializeAws_restJson1AppAssessmentSummaryList(data.assessmentSummaries, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListAppAssessmentsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAppAssessmentsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.resiliencehub#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.resiliencehub#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.resiliencehub#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.resiliencehub#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.resiliencehub#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListAppComponentCompliancesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAppComponentCompliancesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListAppComponentCompliancesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.componentCompliances != null) {
    contents.componentCompliances = deserializeAws_restJson1ComponentCompliancesList(
      data.componentCompliances,
      context
    );
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListAppComponentCompliancesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAppComponentCompliancesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.resiliencehub#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.resiliencehub#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.resiliencehub#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.resiliencehub#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.resiliencehub#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListAppComponentRecommendationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAppComponentRecommendationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListAppComponentRecommendationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.componentRecommendations != null) {
    contents.componentRecommendations = deserializeAws_restJson1ComponentRecommendationList(
      data.componentRecommendations,
      context
    );
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListAppComponentRecommendationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAppComponentRecommendationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.resiliencehub#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.resiliencehub#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.resiliencehub#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.resiliencehub#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.resiliencehub#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListAppsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAppsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListAppsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.appSummaries != null) {
    contents.appSummaries = deserializeAws_restJson1AppSummaryList(data.appSummaries, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListAppsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAppsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.resiliencehub#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.resiliencehub#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.resiliencehub#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.resiliencehub#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListAppVersionResourceMappingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAppVersionResourceMappingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListAppVersionResourceMappingsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.resourceMappings != null) {
    contents.resourceMappings = deserializeAws_restJson1ResourceMappingList(data.resourceMappings, context);
  }
  return contents;
};

const deserializeAws_restJson1ListAppVersionResourceMappingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAppVersionResourceMappingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.resiliencehub#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.resiliencehub#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.resiliencehub#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.resiliencehub#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.resiliencehub#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListAppVersionResourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAppVersionResourcesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListAppVersionResourcesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.physicalResources != null) {
    contents.physicalResources = deserializeAws_restJson1PhysicalResourceList(data.physicalResources, context);
  }
  if (data.resolutionId != null) {
    contents.resolutionId = __expectString(data.resolutionId);
  }
  return contents;
};

const deserializeAws_restJson1ListAppVersionResourcesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAppVersionResourcesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.resiliencehub#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.resiliencehub#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.resiliencehub#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.resiliencehub#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.resiliencehub#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.resiliencehub#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListAppVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAppVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListAppVersionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.appVersions != null) {
    contents.appVersions = deserializeAws_restJson1AppVersionList(data.appVersions, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListAppVersionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAppVersionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.resiliencehub#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.resiliencehub#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.resiliencehub#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.resiliencehub#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListRecommendationTemplatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRecommendationTemplatesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListRecommendationTemplatesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.recommendationTemplates != null) {
    contents.recommendationTemplates = deserializeAws_restJson1RecommendationTemplateList(
      data.recommendationTemplates,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1ListRecommendationTemplatesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRecommendationTemplatesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.resiliencehub#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.resiliencehub#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.resiliencehub#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.resiliencehub#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListResiliencyPoliciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResiliencyPoliciesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListResiliencyPoliciesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.resiliencyPolicies != null) {
    contents.resiliencyPolicies = deserializeAws_restJson1ResiliencyPolicies(data.resiliencyPolicies, context);
  }
  return contents;
};

const deserializeAws_restJson1ListResiliencyPoliciesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResiliencyPoliciesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.resiliencehub#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.resiliencehub#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.resiliencehub#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.resiliencehub#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.resiliencehub#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListSopRecommendationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSopRecommendationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListSopRecommendationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.sopRecommendations != null) {
    contents.sopRecommendations = deserializeAws_restJson1SopRecommendationList(data.sopRecommendations, context);
  }
  return contents;
};

const deserializeAws_restJson1ListSopRecommendationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSopRecommendationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.resiliencehub#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.resiliencehub#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.resiliencehub#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.resiliencehub#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.resiliencehub#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.resiliencehub#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListSuggestedResiliencyPoliciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSuggestedResiliencyPoliciesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListSuggestedResiliencyPoliciesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.resiliencyPolicies != null) {
    contents.resiliencyPolicies = deserializeAws_restJson1ResiliencyPolicies(data.resiliencyPolicies, context);
  }
  return contents;
};

const deserializeAws_restJson1ListSuggestedResiliencyPoliciesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSuggestedResiliencyPoliciesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.resiliencehub#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.resiliencehub#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.resiliencehub#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.resiliencehub#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.resiliencehub#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListTagsForResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.tags != null) {
    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
  }
  return contents;
};

const deserializeAws_restJson1ListTagsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.resiliencehub#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.resiliencehub#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.resiliencehub#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.resiliencehub#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.resiliencehub#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListTestRecommendationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTestRecommendationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListTestRecommendationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.testRecommendations != null) {
    contents.testRecommendations = deserializeAws_restJson1TestRecommendationList(data.testRecommendations, context);
  }
  return contents;
};

const deserializeAws_restJson1ListTestRecommendationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTestRecommendationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.resiliencehub#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.resiliencehub#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.resiliencehub#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.resiliencehub#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.resiliencehub#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.resiliencehub#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListUnsupportedAppVersionResourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListUnsupportedAppVersionResourcesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListUnsupportedAppVersionResourcesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.resolutionId != null) {
    contents.resolutionId = __expectString(data.resolutionId);
  }
  if (data.unsupportedResources != null) {
    contents.unsupportedResources = deserializeAws_restJson1UnsupportedResourceList(data.unsupportedResources, context);
  }
  return contents;
};

const deserializeAws_restJson1ListUnsupportedAppVersionResourcesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListUnsupportedAppVersionResourcesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.resiliencehub#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.resiliencehub#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.resiliencehub#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.resiliencehub#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.resiliencehub#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.resiliencehub#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1PublishAppVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PublishAppVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PublishAppVersionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.appArn != null) {
    contents.appArn = __expectString(data.appArn);
  }
  if (data.appVersion != null) {
    contents.appVersion = __expectString(data.appVersion);
  }
  return contents;
};

const deserializeAws_restJson1PublishAppVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PublishAppVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.resiliencehub#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.resiliencehub#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.resiliencehub#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.resiliencehub#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.resiliencehub#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.resiliencehub#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1PutDraftAppVersionTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutDraftAppVersionTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutDraftAppVersionTemplateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.appArn != null) {
    contents.appArn = __expectString(data.appArn);
  }
  if (data.appVersion != null) {
    contents.appVersion = __expectString(data.appVersion);
  }
  return contents;
};

const deserializeAws_restJson1PutDraftAppVersionTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutDraftAppVersionTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.resiliencehub#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.resiliencehub#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.resiliencehub#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.resiliencehub#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.resiliencehub#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.resiliencehub#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1RemoveDraftAppVersionResourceMappingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveDraftAppVersionResourceMappingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1RemoveDraftAppVersionResourceMappingsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.appArn != null) {
    contents.appArn = __expectString(data.appArn);
  }
  if (data.appVersion != null) {
    contents.appVersion = __expectString(data.appVersion);
  }
  return contents;
};

const deserializeAws_restJson1RemoveDraftAppVersionResourceMappingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveDraftAppVersionResourceMappingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.resiliencehub#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.resiliencehub#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.resiliencehub#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.resiliencehub#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.resiliencehub#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.resiliencehub#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ResolveAppVersionResourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResolveAppVersionResourcesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ResolveAppVersionResourcesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.appArn != null) {
    contents.appArn = __expectString(data.appArn);
  }
  if (data.appVersion != null) {
    contents.appVersion = __expectString(data.appVersion);
  }
  if (data.resolutionId != null) {
    contents.resolutionId = __expectString(data.resolutionId);
  }
  if (data.status != null) {
    contents.status = __expectString(data.status);
  }
  return contents;
};

const deserializeAws_restJson1ResolveAppVersionResourcesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResolveAppVersionResourcesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.resiliencehub#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.resiliencehub#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.resiliencehub#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.resiliencehub#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.resiliencehub#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.resiliencehub#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1StartAppAssessmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartAppAssessmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1StartAppAssessmentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.assessment != null) {
    contents.assessment = deserializeAws_restJson1AppAssessment(data.assessment, context);
  }
  return contents;
};

const deserializeAws_restJson1StartAppAssessmentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartAppAssessmentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.resiliencehub#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.resiliencehub#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.resiliencehub#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.resiliencehub#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.resiliencehub#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.resiliencehub#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.resiliencehub#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1TagResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.resiliencehub#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.resiliencehub#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.resiliencehub#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.resiliencehub#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.resiliencehub#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UntagResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.resiliencehub#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.resiliencehub#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.resiliencehub#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.resiliencehub#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.resiliencehub#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateAppCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAppCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateAppCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.app != null) {
    contents.app = deserializeAws_restJson1App(data.app, context);
  }
  return contents;
};

const deserializeAws_restJson1UpdateAppCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAppCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.resiliencehub#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.resiliencehub#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.resiliencehub#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.resiliencehub#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.resiliencehub#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.resiliencehub#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateResiliencyPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateResiliencyPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateResiliencyPolicyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.policy != null) {
    contents.policy = deserializeAws_restJson1ResiliencyPolicy(data.policy, context);
  }
  return contents;
};

const deserializeAws_restJson1UpdateResiliencyPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateResiliencyPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.resiliencehub#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.resiliencehub#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.resiliencehub#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.resiliencehub#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.resiliencehub#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.resiliencehub#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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
const deserializeAws_restJson1AccessDeniedExceptionResponse = async (
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

const deserializeAws_restJson1ConflictExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConflictException> => {
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
  const exception = new ConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1InternalServerExceptionResponse = async (
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

const deserializeAws_restJson1ResourceNotFoundExceptionResponse = async (
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

const deserializeAws_restJson1ServiceQuotaExceededExceptionResponse = async (
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

const deserializeAws_restJson1ThrottlingExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ThrottlingException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  if (data.retryAfterSeconds != null) {
    contents.retryAfterSeconds = __expectInt32(data.retryAfterSeconds);
  }
  const exception = new ThrottlingException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ValidationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ValidationException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const serializeAws_restJson1ArnList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1DisruptionPolicy = (input: Record<string, FailurePolicy>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [DisruptionType | string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = serializeAws_restJson1FailurePolicy(value, context);
    return acc;
  }, {});
};

const serializeAws_restJson1EntityNameList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1FailurePolicy = (input: FailurePolicy, context: __SerdeContext): any => {
  return {
    ...(input.rpoInSecs != null && { rpoInSecs: input.rpoInSecs }),
    ...(input.rtoInSecs != null && { rtoInSecs: input.rtoInSecs }),
  };
};

const serializeAws_restJson1PhysicalResourceId = (input: PhysicalResourceId, context: __SerdeContext): any => {
  return {
    ...(input.awsAccountId != null && { awsAccountId: input.awsAccountId }),
    ...(input.awsRegion != null && { awsRegion: input.awsRegion }),
    ...(input.identifier != null && { identifier: input.identifier }),
    ...(input.type != null && { type: input.type }),
  };
};

const serializeAws_restJson1RecommendationIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1RenderRecommendationTypeList = (
  input: (RenderRecommendationType | string)[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1ResourceMapping = (input: ResourceMapping, context: __SerdeContext): any => {
  return {
    ...(input.appRegistryAppName != null && { appRegistryAppName: input.appRegistryAppName }),
    ...(input.logicalStackName != null && { logicalStackName: input.logicalStackName }),
    ...(input.mappingType != null && { mappingType: input.mappingType }),
    ...(input.physicalResourceId != null && {
      physicalResourceId: serializeAws_restJson1PhysicalResourceId(input.physicalResourceId, context),
    }),
    ...(input.resourceGroupName != null && { resourceGroupName: input.resourceGroupName }),
    ...(input.resourceName != null && { resourceName: input.resourceName }),
    ...(input.terraformSourceName != null && { terraformSourceName: input.terraformSourceName }),
  };
};

const serializeAws_restJson1ResourceMappingList = (input: ResourceMapping[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1ResourceMapping(entry, context);
    });
};

const serializeAws_restJson1String255List = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1TagMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_restJson1TerraformSource = (input: TerraformSource, context: __SerdeContext): any => {
  return {
    ...(input.s3StateFileUrl != null && { s3StateFileUrl: input.s3StateFileUrl }),
  };
};

const serializeAws_restJson1TerraformSourceList = (input: TerraformSource[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1TerraformSource(entry, context);
    });
};

const deserializeAws_restJson1AlarmRecommendation = (output: any, context: __SerdeContext): AlarmRecommendation => {
  return {
    appComponentName: __expectString(output.appComponentName),
    description: __expectString(output.description),
    items: output.items != null ? deserializeAws_restJson1RecommendationItemList(output.items, context) : undefined,
    name: __expectString(output.name),
    prerequisite: __expectString(output.prerequisite),
    recommendationId: __expectString(output.recommendationId),
    referenceId: __expectString(output.referenceId),
    type: __expectString(output.type),
  } as any;
};

const deserializeAws_restJson1AlarmRecommendationList = (
  output: any,
  context: __SerdeContext
): AlarmRecommendation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AlarmRecommendation(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AlarmReferenceIdList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1App = (output: any, context: __SerdeContext): App => {
  return {
    appArn: __expectString(output.appArn),
    assessmentSchedule: __expectString(output.assessmentSchedule),
    complianceStatus: __expectString(output.complianceStatus),
    creationTime:
      output.creationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationTime)))
        : undefined,
    description: __expectString(output.description),
    lastAppComplianceEvaluationTime:
      output.lastAppComplianceEvaluationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastAppComplianceEvaluationTime)))
        : undefined,
    lastResiliencyScoreEvaluationTime:
      output.lastResiliencyScoreEvaluationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastResiliencyScoreEvaluationTime)))
        : undefined,
    name: __expectString(output.name),
    policyArn: __expectString(output.policyArn),
    resiliencyScore: __limitedParseDouble(output.resiliencyScore),
    status: __expectString(output.status),
    tags: output.tags != null ? deserializeAws_restJson1TagMap(output.tags, context) : undefined,
  } as any;
};

const deserializeAws_restJson1AppAssessment = (output: any, context: __SerdeContext): AppAssessment => {
  return {
    appArn: __expectString(output.appArn),
    appVersion: __expectString(output.appVersion),
    assessmentArn: __expectString(output.assessmentArn),
    assessmentName: __expectString(output.assessmentName),
    assessmentStatus: __expectString(output.assessmentStatus),
    compliance:
      output.compliance != null ? deserializeAws_restJson1AssessmentCompliance(output.compliance, context) : undefined,
    complianceStatus: __expectString(output.complianceStatus),
    cost: output.cost != null ? deserializeAws_restJson1Cost(output.cost, context) : undefined,
    endTime:
      output.endTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.endTime))) : undefined,
    invoker: __expectString(output.invoker),
    message: __expectString(output.message),
    policy: output.policy != null ? deserializeAws_restJson1ResiliencyPolicy(output.policy, context) : undefined,
    resiliencyScore:
      output.resiliencyScore != null
        ? deserializeAws_restJson1ResiliencyScore(output.resiliencyScore, context)
        : undefined,
    resourceErrorsDetails:
      output.resourceErrorsDetails != null
        ? deserializeAws_restJson1ResourceErrorsDetails(output.resourceErrorsDetails, context)
        : undefined,
    startTime:
      output.startTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.startTime))) : undefined,
    tags: output.tags != null ? deserializeAws_restJson1TagMap(output.tags, context) : undefined,
  } as any;
};

const deserializeAws_restJson1AppAssessmentSummary = (output: any, context: __SerdeContext): AppAssessmentSummary => {
  return {
    appArn: __expectString(output.appArn),
    appVersion: __expectString(output.appVersion),
    assessmentArn: __expectString(output.assessmentArn),
    assessmentName: __expectString(output.assessmentName),
    assessmentStatus: __expectString(output.assessmentStatus),
    complianceStatus: __expectString(output.complianceStatus),
    cost: output.cost != null ? deserializeAws_restJson1Cost(output.cost, context) : undefined,
    endTime:
      output.endTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.endTime))) : undefined,
    invoker: __expectString(output.invoker),
    message: __expectString(output.message),
    resiliencyScore: __limitedParseDouble(output.resiliencyScore),
    startTime:
      output.startTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.startTime))) : undefined,
  } as any;
};

const deserializeAws_restJson1AppAssessmentSummaryList = (
  output: any,
  context: __SerdeContext
): AppAssessmentSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AppAssessmentSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AppComponent = (output: any, context: __SerdeContext): AppComponent => {
  return {
    name: __expectString(output.name),
    type: __expectString(output.type),
  } as any;
};

const deserializeAws_restJson1AppComponentCompliance = (
  output: any,
  context: __SerdeContext
): AppComponentCompliance => {
  return {
    appComponentName: __expectString(output.appComponentName),
    compliance:
      output.compliance != null ? deserializeAws_restJson1AssessmentCompliance(output.compliance, context) : undefined,
    cost: output.cost != null ? deserializeAws_restJson1Cost(output.cost, context) : undefined,
    message: __expectString(output.message),
    resiliencyScore:
      output.resiliencyScore != null
        ? deserializeAws_restJson1ResiliencyScore(output.resiliencyScore, context)
        : undefined,
    status: __expectString(output.status),
  } as any;
};

const deserializeAws_restJson1AppComponentList = (output: any, context: __SerdeContext): AppComponent[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AppComponent(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AppSummary = (output: any, context: __SerdeContext): AppSummary => {
  return {
    appArn: __expectString(output.appArn),
    assessmentSchedule: __expectString(output.assessmentSchedule),
    complianceStatus: __expectString(output.complianceStatus),
    creationTime:
      output.creationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationTime)))
        : undefined,
    description: __expectString(output.description),
    name: __expectString(output.name),
    resiliencyScore: __limitedParseDouble(output.resiliencyScore),
    status: __expectString(output.status),
  } as any;
};

const deserializeAws_restJson1AppSummaryList = (output: any, context: __SerdeContext): AppSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AppSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AppVersionList = (output: any, context: __SerdeContext): AppVersionSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AppVersionSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AppVersionSummary = (output: any, context: __SerdeContext): AppVersionSummary => {
  return {
    appVersion: __expectString(output.appVersion),
  } as any;
};

const deserializeAws_restJson1ArnList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1AssessmentCompliance = (
  output: any,
  context: __SerdeContext
): Record<string, DisruptionCompliance> => {
  return Object.entries(output).reduce(
    (acc: Record<string, DisruptionCompliance>, [key, value]: [DisruptionType | string, any]) => {
      if (value === null) {
        return acc;
      }
      acc[key] = deserializeAws_restJson1DisruptionCompliance(value, context);
      return acc;
    },
    {}
  );
};

const deserializeAws_restJson1ComponentCompliancesList = (
  output: any,
  context: __SerdeContext
): AppComponentCompliance[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AppComponentCompliance(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ComponentRecommendation = (
  output: any,
  context: __SerdeContext
): ComponentRecommendation => {
  return {
    appComponentName: __expectString(output.appComponentName),
    configRecommendations:
      output.configRecommendations != null
        ? deserializeAws_restJson1ConfigRecommendationList(output.configRecommendations, context)
        : undefined,
    recommendationStatus: __expectString(output.recommendationStatus),
  } as any;
};

const deserializeAws_restJson1ComponentRecommendationList = (
  output: any,
  context: __SerdeContext
): ComponentRecommendation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ComponentRecommendation(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ConfigRecommendation = (output: any, context: __SerdeContext): ConfigRecommendation => {
  return {
    appComponentName: __expectString(output.appComponentName),
    compliance:
      output.compliance != null ? deserializeAws_restJson1AssessmentCompliance(output.compliance, context) : undefined,
    cost: output.cost != null ? deserializeAws_restJson1Cost(output.cost, context) : undefined,
    description: __expectString(output.description),
    haArchitecture: __expectString(output.haArchitecture),
    name: __expectString(output.name),
    optimizationType: __expectString(output.optimizationType),
    recommendationCompliance:
      output.recommendationCompliance != null
        ? deserializeAws_restJson1RecommendationCompliance(output.recommendationCompliance, context)
        : undefined,
    referenceId: __expectString(output.referenceId),
    suggestedChanges:
      output.suggestedChanges != null
        ? deserializeAws_restJson1SuggestedChangesList(output.suggestedChanges, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ConfigRecommendationList = (
  output: any,
  context: __SerdeContext
): ConfigRecommendation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ConfigRecommendation(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1Cost = (output: any, context: __SerdeContext): Cost => {
  return {
    amount: __limitedParseDouble(output.amount),
    currency: __expectString(output.currency),
    frequency: __expectString(output.frequency),
  } as any;
};

const deserializeAws_restJson1DisruptionCompliance = (output: any, context: __SerdeContext): DisruptionCompliance => {
  return {
    achievableRpoInSecs: __expectInt32(output.achievableRpoInSecs),
    achievableRtoInSecs: __expectInt32(output.achievableRtoInSecs),
    complianceStatus: __expectString(output.complianceStatus),
    currentRpoInSecs: __expectInt32(output.currentRpoInSecs),
    currentRtoInSecs: __expectInt32(output.currentRtoInSecs),
    message: __expectString(output.message),
    rpoDescription: __expectString(output.rpoDescription),
    rpoReferenceId: __expectString(output.rpoReferenceId),
    rtoDescription: __expectString(output.rtoDescription),
    rtoReferenceId: __expectString(output.rtoReferenceId),
  } as any;
};

const deserializeAws_restJson1DisruptionPolicy = (
  output: any,
  context: __SerdeContext
): Record<string, FailurePolicy> => {
  return Object.entries(output).reduce(
    (acc: Record<string, FailurePolicy>, [key, value]: [DisruptionType | string, any]) => {
      if (value === null) {
        return acc;
      }
      acc[key] = deserializeAws_restJson1FailurePolicy(value, context);
      return acc;
    },
    {}
  );
};

const deserializeAws_restJson1DisruptionResiliencyScore = (
  output: any,
  context: __SerdeContext
): Record<string, number> => {
  return Object.entries(output).reduce((acc: Record<string, number>, [key, value]: [DisruptionType | string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __limitedParseDouble(value) as any;
    return acc;
  }, {});
};

const deserializeAws_restJson1FailurePolicy = (output: any, context: __SerdeContext): FailurePolicy => {
  return {
    rpoInSecs: __expectInt32(output.rpoInSecs),
    rtoInSecs: __expectInt32(output.rtoInSecs),
  } as any;
};

const deserializeAws_restJson1LogicalResourceId = (output: any, context: __SerdeContext): LogicalResourceId => {
  return {
    identifier: __expectString(output.identifier),
    logicalStackName: __expectString(output.logicalStackName),
    resourceGroupName: __expectString(output.resourceGroupName),
    terraformSourceName: __expectString(output.terraformSourceName),
  } as any;
};

const deserializeAws_restJson1PhysicalResource = (output: any, context: __SerdeContext): PhysicalResource => {
  return {
    appComponents:
      output.appComponents != null
        ? deserializeAws_restJson1AppComponentList(output.appComponents, context)
        : undefined,
    logicalResourceId:
      output.logicalResourceId != null
        ? deserializeAws_restJson1LogicalResourceId(output.logicalResourceId, context)
        : undefined,
    physicalResourceId:
      output.physicalResourceId != null
        ? deserializeAws_restJson1PhysicalResourceId(output.physicalResourceId, context)
        : undefined,
    resourceName: __expectString(output.resourceName),
    resourceType: __expectString(output.resourceType),
  } as any;
};

const deserializeAws_restJson1PhysicalResourceId = (output: any, context: __SerdeContext): PhysicalResourceId => {
  return {
    awsAccountId: __expectString(output.awsAccountId),
    awsRegion: __expectString(output.awsRegion),
    identifier: __expectString(output.identifier),
    type: __expectString(output.type),
  } as any;
};

const deserializeAws_restJson1PhysicalResourceList = (output: any, context: __SerdeContext): PhysicalResource[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1PhysicalResource(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1RecommendationCompliance = (
  output: any,
  context: __SerdeContext
): Record<string, RecommendationDisruptionCompliance> => {
  return Object.entries(output).reduce(
    (acc: Record<string, RecommendationDisruptionCompliance>, [key, value]: [DisruptionType | string, any]) => {
      if (value === null) {
        return acc;
      }
      acc[key] = deserializeAws_restJson1RecommendationDisruptionCompliance(value, context);
      return acc;
    },
    {}
  );
};

const deserializeAws_restJson1RecommendationDisruptionCompliance = (
  output: any,
  context: __SerdeContext
): RecommendationDisruptionCompliance => {
  return {
    expectedComplianceStatus: __expectString(output.expectedComplianceStatus),
    expectedRpoDescription: __expectString(output.expectedRpoDescription),
    expectedRpoInSecs: __expectInt32(output.expectedRpoInSecs),
    expectedRtoDescription: __expectString(output.expectedRtoDescription),
    expectedRtoInSecs: __expectInt32(output.expectedRtoInSecs),
  } as any;
};

const deserializeAws_restJson1RecommendationIdList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1RecommendationItem = (output: any, context: __SerdeContext): RecommendationItem => {
  return {
    alreadyImplemented: __expectBoolean(output.alreadyImplemented),
    resourceId: __expectString(output.resourceId),
    targetAccountId: __expectString(output.targetAccountId),
    targetRegion: __expectString(output.targetRegion),
  } as any;
};

const deserializeAws_restJson1RecommendationItemList = (output: any, context: __SerdeContext): RecommendationItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1RecommendationItem(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1RecommendationTemplate = (
  output: any,
  context: __SerdeContext
): RecommendationTemplate => {
  return {
    appArn: __expectString(output.appArn),
    assessmentArn: __expectString(output.assessmentArn),
    endTime:
      output.endTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.endTime))) : undefined,
    format: __expectString(output.format),
    message: __expectString(output.message),
    name: __expectString(output.name),
    needsReplacements: __expectBoolean(output.needsReplacements),
    recommendationIds:
      output.recommendationIds != null
        ? deserializeAws_restJson1RecommendationIdList(output.recommendationIds, context)
        : undefined,
    recommendationTemplateArn: __expectString(output.recommendationTemplateArn),
    recommendationTypes:
      output.recommendationTypes != null
        ? deserializeAws_restJson1RenderRecommendationTypeList(output.recommendationTypes, context)
        : undefined,
    startTime:
      output.startTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.startTime))) : undefined,
    status: __expectString(output.status),
    tags: output.tags != null ? deserializeAws_restJson1TagMap(output.tags, context) : undefined,
    templatesLocation:
      output.templatesLocation != null
        ? deserializeAws_restJson1S3Location(output.templatesLocation, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1RecommendationTemplateList = (
  output: any,
  context: __SerdeContext
): RecommendationTemplate[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1RecommendationTemplate(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1RenderRecommendationTypeList = (
  output: any,
  context: __SerdeContext
): (RenderRecommendationType | string)[] => {
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

const deserializeAws_restJson1ResiliencyPolicies = (output: any, context: __SerdeContext): ResiliencyPolicy[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ResiliencyPolicy(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ResiliencyPolicy = (output: any, context: __SerdeContext): ResiliencyPolicy => {
  return {
    creationTime:
      output.creationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationTime)))
        : undefined,
    dataLocationConstraint: __expectString(output.dataLocationConstraint),
    estimatedCostTier: __expectString(output.estimatedCostTier),
    policy: output.policy != null ? deserializeAws_restJson1DisruptionPolicy(output.policy, context) : undefined,
    policyArn: __expectString(output.policyArn),
    policyDescription: __expectString(output.policyDescription),
    policyName: __expectString(output.policyName),
    tags: output.tags != null ? deserializeAws_restJson1TagMap(output.tags, context) : undefined,
    tier: __expectString(output.tier),
  } as any;
};

const deserializeAws_restJson1ResiliencyScore = (output: any, context: __SerdeContext): ResiliencyScore => {
  return {
    disruptionScore:
      output.disruptionScore != null
        ? deserializeAws_restJson1DisruptionResiliencyScore(output.disruptionScore, context)
        : undefined,
    score: __limitedParseDouble(output.score),
  } as any;
};

const deserializeAws_restJson1ResourceError = (output: any, context: __SerdeContext): ResourceError => {
  return {
    logicalResourceId: __expectString(output.logicalResourceId),
    physicalResourceId: __expectString(output.physicalResourceId),
    reason: __expectString(output.reason),
  } as any;
};

const deserializeAws_restJson1ResourceErrorList = (output: any, context: __SerdeContext): ResourceError[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ResourceError(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ResourceErrorsDetails = (output: any, context: __SerdeContext): ResourceErrorsDetails => {
  return {
    hasMoreErrors: __expectBoolean(output.hasMoreErrors),
    resourceErrors:
      output.resourceErrors != null
        ? deserializeAws_restJson1ResourceErrorList(output.resourceErrors, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ResourceMapping = (output: any, context: __SerdeContext): ResourceMapping => {
  return {
    appRegistryAppName: __expectString(output.appRegistryAppName),
    logicalStackName: __expectString(output.logicalStackName),
    mappingType: __expectString(output.mappingType),
    physicalResourceId:
      output.physicalResourceId != null
        ? deserializeAws_restJson1PhysicalResourceId(output.physicalResourceId, context)
        : undefined,
    resourceGroupName: __expectString(output.resourceGroupName),
    resourceName: __expectString(output.resourceName),
    terraformSourceName: __expectString(output.terraformSourceName),
  } as any;
};

const deserializeAws_restJson1ResourceMappingList = (output: any, context: __SerdeContext): ResourceMapping[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ResourceMapping(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1S3Location = (output: any, context: __SerdeContext): S3Location => {
  return {
    bucket: __expectString(output.bucket),
    prefix: __expectString(output.prefix),
  } as any;
};

const deserializeAws_restJson1SopRecommendation = (output: any, context: __SerdeContext): SopRecommendation => {
  return {
    appComponentName: __expectString(output.appComponentName),
    description: __expectString(output.description),
    items: output.items != null ? deserializeAws_restJson1RecommendationItemList(output.items, context) : undefined,
    name: __expectString(output.name),
    prerequisite: __expectString(output.prerequisite),
    recommendationId: __expectString(output.recommendationId),
    referenceId: __expectString(output.referenceId),
    serviceType: __expectString(output.serviceType),
  } as any;
};

const deserializeAws_restJson1SopRecommendationList = (output: any, context: __SerdeContext): SopRecommendation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1SopRecommendation(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1SuggestedChangesList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1TagMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_restJson1TerraformSource = (output: any, context: __SerdeContext): TerraformSource => {
  return {
    s3StateFileUrl: __expectString(output.s3StateFileUrl),
  } as any;
};

const deserializeAws_restJson1TerraformSourceList = (output: any, context: __SerdeContext): TerraformSource[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1TerraformSource(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1TestRecommendation = (output: any, context: __SerdeContext): TestRecommendation => {
  return {
    appComponentName: __expectString(output.appComponentName),
    dependsOnAlarms:
      output.dependsOnAlarms != null
        ? deserializeAws_restJson1AlarmReferenceIdList(output.dependsOnAlarms, context)
        : undefined,
    description: __expectString(output.description),
    intent: __expectString(output.intent),
    items: output.items != null ? deserializeAws_restJson1RecommendationItemList(output.items, context) : undefined,
    name: __expectString(output.name),
    prerequisite: __expectString(output.prerequisite),
    recommendationId: __expectString(output.recommendationId),
    referenceId: __expectString(output.referenceId),
    risk: __expectString(output.risk),
    type: __expectString(output.type),
  } as any;
};

const deserializeAws_restJson1TestRecommendationList = (output: any, context: __SerdeContext): TestRecommendation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1TestRecommendation(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1UnsupportedResource = (output: any, context: __SerdeContext): UnsupportedResource => {
  return {
    logicalResourceId:
      output.logicalResourceId != null
        ? deserializeAws_restJson1LogicalResourceId(output.logicalResourceId, context)
        : undefined,
    physicalResourceId:
      output.physicalResourceId != null
        ? deserializeAws_restJson1PhysicalResourceId(output.physicalResourceId, context)
        : undefined,
    resourceType: __expectString(output.resourceType),
  } as any;
};

const deserializeAws_restJson1UnsupportedResourceList = (
  output: any,
  context: __SerdeContext
): UnsupportedResource[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1UnsupportedResource(entry, context);
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
