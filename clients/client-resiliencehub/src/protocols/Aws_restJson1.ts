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
  CreateAppVersionAppComponentCommandInput,
  CreateAppVersionAppComponentCommandOutput,
} from "../commands/CreateAppVersionAppComponentCommand";
import {
  CreateAppVersionResourceCommandInput,
  CreateAppVersionResourceCommandOutput,
} from "../commands/CreateAppVersionResourceCommand";
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
  DeleteAppInputSourceCommandInput,
  DeleteAppInputSourceCommandOutput,
} from "../commands/DeleteAppInputSourceCommand";
import {
  DeleteAppVersionAppComponentCommandInput,
  DeleteAppVersionAppComponentCommandOutput,
} from "../commands/DeleteAppVersionAppComponentCommand";
import {
  DeleteAppVersionResourceCommandInput,
  DeleteAppVersionResourceCommandOutput,
} from "../commands/DeleteAppVersionResourceCommand";
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
  DescribeAppVersionAppComponentCommandInput,
  DescribeAppVersionAppComponentCommandOutput,
} from "../commands/DescribeAppVersionAppComponentCommand";
import { DescribeAppVersionCommandInput, DescribeAppVersionCommandOutput } from "../commands/DescribeAppVersionCommand";
import {
  DescribeAppVersionResourceCommandInput,
  DescribeAppVersionResourceCommandOutput,
} from "../commands/DescribeAppVersionResourceCommand";
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
import {
  ListAppInputSourcesCommandInput,
  ListAppInputSourcesCommandOutput,
} from "../commands/ListAppInputSourcesCommand";
import { ListAppsCommandInput, ListAppsCommandOutput } from "../commands/ListAppsCommand";
import {
  ListAppVersionAppComponentsCommandInput,
  ListAppVersionAppComponentsCommandOutput,
} from "../commands/ListAppVersionAppComponentsCommand";
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
  UpdateAppVersionAppComponentCommandInput,
  UpdateAppVersionAppComponentCommandOutput,
} from "../commands/UpdateAppVersionAppComponentCommand";
import { UpdateAppVersionCommandInput, UpdateAppVersionCommandOutput } from "../commands/UpdateAppVersionCommand";
import {
  UpdateAppVersionResourceCommandInput,
  UpdateAppVersionResourceCommandOutput,
} from "../commands/UpdateAppVersionResourceCommand";
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
  AppInputSource,
  AppSummary,
  AppVersionSummary,
  ComponentRecommendation,
  ConfigRecommendation,
  ConflictException,
  Cost,
  DisruptionCompliance,
  DisruptionType,
  EksSource,
  EksSourceClusterNamespace,
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

/**
 * serializeAws_restJson1AddDraftAppVersionResourceMappingsCommand
 */
export const se_AddDraftAppVersionResourceMappingsCommand = async (
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
      resourceMappings: se_ResourceMappingList(input.resourceMappings, context),
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
 * serializeAws_restJson1CreateAppCommand
 */
export const se_CreateAppCommand = async (
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
 * serializeAws_restJson1CreateAppVersionAppComponentCommand
 */
export const se_CreateAppVersionAppComponentCommand = async (
  input: CreateAppVersionAppComponentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/create-app-version-app-component";
  let body: any;
  body = JSON.stringify({
    ...(input.additionalInfo != null && { additionalInfo: se_AdditionalInfoMap(input.additionalInfo, context) }),
    ...(input.appArn != null && { appArn: input.appArn }),
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.id != null && { id: input.id }),
    ...(input.name != null && { name: input.name }),
    ...(input.type != null && { type: input.type }),
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
 * serializeAws_restJson1CreateAppVersionResourceCommand
 */
export const se_CreateAppVersionResourceCommand = async (
  input: CreateAppVersionResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/create-app-version-resource";
  let body: any;
  body = JSON.stringify({
    ...(input.additionalInfo != null && { additionalInfo: se_AdditionalInfoMap(input.additionalInfo, context) }),
    ...(input.appArn != null && { appArn: input.appArn }),
    ...(input.appComponents != null && { appComponents: se_AppComponentNameList(input.appComponents, context) }),
    ...(input.awsAccountId != null && { awsAccountId: input.awsAccountId }),
    ...(input.awsRegion != null && { awsRegion: input.awsRegion }),
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.logicalResourceId != null && {
      logicalResourceId: se_LogicalResourceId(input.logicalResourceId, context),
    }),
    ...(input.physicalResourceId != null && { physicalResourceId: input.physicalResourceId }),
    ...(input.resourceName != null && { resourceName: input.resourceName }),
    ...(input.resourceType != null && { resourceType: input.resourceType }),
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
 * serializeAws_restJson1CreateRecommendationTemplateCommand
 */
export const se_CreateRecommendationTemplateCommand = async (
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
      recommendationIds: se_RecommendationIdList(input.recommendationIds, context),
    }),
    ...(input.recommendationTypes != null && {
      recommendationTypes: se_RenderRecommendationTypeList(input.recommendationTypes, context),
    }),
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
 * serializeAws_restJson1CreateResiliencyPolicyCommand
 */
export const se_CreateResiliencyPolicyCommand = async (
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
    ...(input.policy != null && { policy: se_DisruptionPolicy(input.policy, context) }),
    ...(input.policyDescription != null && { policyDescription: input.policyDescription }),
    ...(input.policyName != null && { policyName: input.policyName }),
    ...(input.tags != null && { tags: se_TagMap(input.tags, context) }),
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

/**
 * serializeAws_restJson1DeleteAppCommand
 */
export const se_DeleteAppCommand = async (
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

/**
 * serializeAws_restJson1DeleteAppAssessmentCommand
 */
export const se_DeleteAppAssessmentCommand = async (
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

/**
 * serializeAws_restJson1DeleteAppInputSourceCommand
 */
export const se_DeleteAppInputSourceCommand = async (
  input: DeleteAppInputSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/delete-app-input-source";
  let body: any;
  body = JSON.stringify({
    ...(input.appArn != null && { appArn: input.appArn }),
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.eksSourceClusterNamespace != null && {
      eksSourceClusterNamespace: se_EksSourceClusterNamespace(input.eksSourceClusterNamespace, context),
    }),
    ...(input.sourceArn != null && { sourceArn: input.sourceArn }),
    ...(input.terraformSource != null && { terraformSource: se_TerraformSource(input.terraformSource, context) }),
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
 * serializeAws_restJson1DeleteAppVersionAppComponentCommand
 */
export const se_DeleteAppVersionAppComponentCommand = async (
  input: DeleteAppVersionAppComponentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/delete-app-version-app-component";
  let body: any;
  body = JSON.stringify({
    ...(input.appArn != null && { appArn: input.appArn }),
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.id != null && { id: input.id }),
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
 * serializeAws_restJson1DeleteAppVersionResourceCommand
 */
export const se_DeleteAppVersionResourceCommand = async (
  input: DeleteAppVersionResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/delete-app-version-resource";
  let body: any;
  body = JSON.stringify({
    ...(input.appArn != null && { appArn: input.appArn }),
    ...(input.awsAccountId != null && { awsAccountId: input.awsAccountId }),
    ...(input.awsRegion != null && { awsRegion: input.awsRegion }),
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.logicalResourceId != null && {
      logicalResourceId: se_LogicalResourceId(input.logicalResourceId, context),
    }),
    ...(input.physicalResourceId != null && { physicalResourceId: input.physicalResourceId }),
    ...(input.resourceName != null && { resourceName: input.resourceName }),
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
 * serializeAws_restJson1DeleteRecommendationTemplateCommand
 */
export const se_DeleteRecommendationTemplateCommand = async (
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

/**
 * serializeAws_restJson1DeleteResiliencyPolicyCommand
 */
export const se_DeleteResiliencyPolicyCommand = async (
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

/**
 * serializeAws_restJson1DescribeAppCommand
 */
export const se_DescribeAppCommand = async (
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

/**
 * serializeAws_restJson1DescribeAppAssessmentCommand
 */
export const se_DescribeAppAssessmentCommand = async (
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

/**
 * serializeAws_restJson1DescribeAppVersionCommand
 */
export const se_DescribeAppVersionCommand = async (
  input: DescribeAppVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/describe-app-version";
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

/**
 * serializeAws_restJson1DescribeAppVersionAppComponentCommand
 */
export const se_DescribeAppVersionAppComponentCommand = async (
  input: DescribeAppVersionAppComponentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/describe-app-version-app-component";
  let body: any;
  body = JSON.stringify({
    ...(input.appArn != null && { appArn: input.appArn }),
    ...(input.appVersion != null && { appVersion: input.appVersion }),
    ...(input.id != null && { id: input.id }),
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
 * serializeAws_restJson1DescribeAppVersionResourceCommand
 */
export const se_DescribeAppVersionResourceCommand = async (
  input: DescribeAppVersionResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/describe-app-version-resource";
  let body: any;
  body = JSON.stringify({
    ...(input.appArn != null && { appArn: input.appArn }),
    ...(input.appVersion != null && { appVersion: input.appVersion }),
    ...(input.awsAccountId != null && { awsAccountId: input.awsAccountId }),
    ...(input.awsRegion != null && { awsRegion: input.awsRegion }),
    ...(input.logicalResourceId != null && {
      logicalResourceId: se_LogicalResourceId(input.logicalResourceId, context),
    }),
    ...(input.physicalResourceId != null && { physicalResourceId: input.physicalResourceId }),
    ...(input.resourceName != null && { resourceName: input.resourceName }),
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
 * serializeAws_restJson1DescribeAppVersionResourcesResolutionStatusCommand
 */
export const se_DescribeAppVersionResourcesResolutionStatusCommand = async (
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

/**
 * serializeAws_restJson1DescribeAppVersionTemplateCommand
 */
export const se_DescribeAppVersionTemplateCommand = async (
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

/**
 * serializeAws_restJson1DescribeDraftAppVersionResourcesImportStatusCommand
 */
export const se_DescribeDraftAppVersionResourcesImportStatusCommand = async (
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

/**
 * serializeAws_restJson1DescribeResiliencyPolicyCommand
 */
export const se_DescribeResiliencyPolicyCommand = async (
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

/**
 * serializeAws_restJson1ImportResourcesToDraftAppVersionCommand
 */
export const se_ImportResourcesToDraftAppVersionCommand = async (
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
    ...(input.eksSources != null && { eksSources: se_EksSourceList(input.eksSources, context) }),
    ...(input.importStrategy != null && { importStrategy: input.importStrategy }),
    ...(input.sourceArns != null && { sourceArns: se_ArnList(input.sourceArns, context) }),
    ...(input.terraformSources != null && {
      terraformSources: se_TerraformSourceList(input.terraformSources, context),
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
 * serializeAws_restJson1ListAlarmRecommendationsCommand
 */
export const se_ListAlarmRecommendationsCommand = async (
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

/**
 * serializeAws_restJson1ListAppAssessmentsCommand
 */
export const se_ListAppAssessmentsCommand = async (
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

/**
 * serializeAws_restJson1ListAppComponentCompliancesCommand
 */
export const se_ListAppComponentCompliancesCommand = async (
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

/**
 * serializeAws_restJson1ListAppComponentRecommendationsCommand
 */
export const se_ListAppComponentRecommendationsCommand = async (
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

/**
 * serializeAws_restJson1ListAppInputSourcesCommand
 */
export const se_ListAppInputSourcesCommand = async (
  input: ListAppInputSourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/list-app-input-sources";
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

/**
 * serializeAws_restJson1ListAppsCommand
 */
export const se_ListAppsCommand = async (
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

/**
 * serializeAws_restJson1ListAppVersionAppComponentsCommand
 */
export const se_ListAppVersionAppComponentsCommand = async (
  input: ListAppVersionAppComponentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/list-app-version-app-components";
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

/**
 * serializeAws_restJson1ListAppVersionResourceMappingsCommand
 */
export const se_ListAppVersionResourceMappingsCommand = async (
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

/**
 * serializeAws_restJson1ListAppVersionResourcesCommand
 */
export const se_ListAppVersionResourcesCommand = async (
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

/**
 * serializeAws_restJson1ListAppVersionsCommand
 */
export const se_ListAppVersionsCommand = async (
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

/**
 * serializeAws_restJson1ListRecommendationTemplatesCommand
 */
export const se_ListRecommendationTemplatesCommand = async (
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

/**
 * serializeAws_restJson1ListResiliencyPoliciesCommand
 */
export const se_ListResiliencyPoliciesCommand = async (
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

/**
 * serializeAws_restJson1ListSopRecommendationsCommand
 */
export const se_ListSopRecommendationsCommand = async (
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

/**
 * serializeAws_restJson1ListSuggestedResiliencyPoliciesCommand
 */
export const se_ListSuggestedResiliencyPoliciesCommand = async (
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
 * serializeAws_restJson1ListTestRecommendationsCommand
 */
export const se_ListTestRecommendationsCommand = async (
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

/**
 * serializeAws_restJson1ListUnsupportedAppVersionResourcesCommand
 */
export const se_ListUnsupportedAppVersionResourcesCommand = async (
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

/**
 * serializeAws_restJson1PublishAppVersionCommand
 */
export const se_PublishAppVersionCommand = async (
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

/**
 * serializeAws_restJson1PutDraftAppVersionTemplateCommand
 */
export const se_PutDraftAppVersionTemplateCommand = async (
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

/**
 * serializeAws_restJson1RemoveDraftAppVersionResourceMappingsCommand
 */
export const se_RemoveDraftAppVersionResourceMappingsCommand = async (
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
      appRegistryAppNames: se_EntityNameList(input.appRegistryAppNames, context),
    }),
    ...(input.eksSourceNames != null && { eksSourceNames: se_String255List(input.eksSourceNames, context) }),
    ...(input.logicalStackNames != null && { logicalStackNames: se_String255List(input.logicalStackNames, context) }),
    ...(input.resourceGroupNames != null && {
      resourceGroupNames: se_EntityNameList(input.resourceGroupNames, context),
    }),
    ...(input.resourceNames != null && { resourceNames: se_EntityNameList(input.resourceNames, context) }),
    ...(input.terraformSourceNames != null && {
      terraformSourceNames: se_String255List(input.terraformSourceNames, context),
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
 * serializeAws_restJson1ResolveAppVersionResourcesCommand
 */
export const se_ResolveAppVersionResourcesCommand = async (
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

/**
 * serializeAws_restJson1StartAppAssessmentCommand
 */
export const se_StartAppAssessmentCommand = async (
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
 * serializeAws_restJson1UpdateAppCommand
 */
export const se_UpdateAppCommand = async (
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

/**
 * serializeAws_restJson1UpdateAppVersionCommand
 */
export const se_UpdateAppVersionCommand = async (
  input: UpdateAppVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/update-app-version";
  let body: any;
  body = JSON.stringify({
    ...(input.additionalInfo != null && { additionalInfo: se_AdditionalInfoMap(input.additionalInfo, context) }),
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

/**
 * serializeAws_restJson1UpdateAppVersionAppComponentCommand
 */
export const se_UpdateAppVersionAppComponentCommand = async (
  input: UpdateAppVersionAppComponentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/update-app-version-app-component";
  let body: any;
  body = JSON.stringify({
    ...(input.additionalInfo != null && { additionalInfo: se_AdditionalInfoMap(input.additionalInfo, context) }),
    ...(input.appArn != null && { appArn: input.appArn }),
    ...(input.id != null && { id: input.id }),
    ...(input.name != null && { name: input.name }),
    ...(input.type != null && { type: input.type }),
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
 * serializeAws_restJson1UpdateAppVersionResourceCommand
 */
export const se_UpdateAppVersionResourceCommand = async (
  input: UpdateAppVersionResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/update-app-version-resource";
  let body: any;
  body = JSON.stringify({
    ...(input.additionalInfo != null && { additionalInfo: se_AdditionalInfoMap(input.additionalInfo, context) }),
    ...(input.appArn != null && { appArn: input.appArn }),
    ...(input.appComponents != null && { appComponents: se_AppComponentNameList(input.appComponents, context) }),
    ...(input.awsAccountId != null && { awsAccountId: input.awsAccountId }),
    ...(input.awsRegion != null && { awsRegion: input.awsRegion }),
    ...(input.excluded != null && { excluded: input.excluded }),
    ...(input.logicalResourceId != null && {
      logicalResourceId: se_LogicalResourceId(input.logicalResourceId, context),
    }),
    ...(input.physicalResourceId != null && { physicalResourceId: input.physicalResourceId }),
    ...(input.resourceName != null && { resourceName: input.resourceName }),
    ...(input.resourceType != null && { resourceType: input.resourceType }),
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
 * serializeAws_restJson1UpdateResiliencyPolicyCommand
 */
export const se_UpdateResiliencyPolicyCommand = async (
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
    ...(input.policy != null && { policy: se_DisruptionPolicy(input.policy, context) }),
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

/**
 * deserializeAws_restJson1AddDraftAppVersionResourceMappingsCommand
 */
export const de_AddDraftAppVersionResourceMappingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddDraftAppVersionResourceMappingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_AddDraftAppVersionResourceMappingsCommandError(output, context);
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
    contents.resourceMappings = de_ResourceMappingList(data.resourceMappings, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1AddDraftAppVersionResourceMappingsCommandError
 */
const de_AddDraftAppVersionResourceMappingsCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.resiliencehub#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.resiliencehub#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.resiliencehub#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.resiliencehub#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.resiliencehub#ValidationException":
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
 * deserializeAws_restJson1CreateAppCommand
 */
export const de_CreateAppCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAppCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateAppCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.app != null) {
    contents.app = de_App(data.app, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateAppCommandError
 */
const de_CreateAppCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.resiliencehub#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.resiliencehub#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.resiliencehub#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.resiliencehub#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.resiliencehub#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.resiliencehub#ValidationException":
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
 * deserializeAws_restJson1CreateAppVersionAppComponentCommand
 */
export const de_CreateAppVersionAppComponentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAppVersionAppComponentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateAppVersionAppComponentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.appArn != null) {
    contents.appArn = __expectString(data.appArn);
  }
  if (data.appComponent != null) {
    contents.appComponent = de_AppComponent(data.appComponent, context);
  }
  if (data.appVersion != null) {
    contents.appVersion = __expectString(data.appVersion);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateAppVersionAppComponentCommandError
 */
const de_CreateAppVersionAppComponentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAppVersionAppComponentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.resiliencehub#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.resiliencehub#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.resiliencehub#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.resiliencehub#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.resiliencehub#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.resiliencehub#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.resiliencehub#ValidationException":
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
 * deserializeAws_restJson1CreateAppVersionResourceCommand
 */
export const de_CreateAppVersionResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAppVersionResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateAppVersionResourceCommandError(output, context);
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
  if (data.physicalResource != null) {
    contents.physicalResource = de_PhysicalResource(data.physicalResource, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateAppVersionResourceCommandError
 */
const de_CreateAppVersionResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAppVersionResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.resiliencehub#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.resiliencehub#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.resiliencehub#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.resiliencehub#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.resiliencehub#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.resiliencehub#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.resiliencehub#ValidationException":
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
 * deserializeAws_restJson1CreateRecommendationTemplateCommand
 */
export const de_CreateRecommendationTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRecommendationTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateRecommendationTemplateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.recommendationTemplate != null) {
    contents.recommendationTemplate = de_RecommendationTemplate(data.recommendationTemplate, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateRecommendationTemplateCommandError
 */
const de_CreateRecommendationTemplateCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.resiliencehub#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.resiliencehub#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.resiliencehub#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.resiliencehub#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.resiliencehub#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.resiliencehub#ValidationException":
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
 * deserializeAws_restJson1CreateResiliencyPolicyCommand
 */
export const de_CreateResiliencyPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateResiliencyPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateResiliencyPolicyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.policy != null) {
    contents.policy = de_ResiliencyPolicy(data.policy, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateResiliencyPolicyCommandError
 */
const de_CreateResiliencyPolicyCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.resiliencehub#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.resiliencehub#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.resiliencehub#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.resiliencehub#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.resiliencehub#ValidationException":
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
 * deserializeAws_restJson1DeleteAppCommand
 */
export const de_DeleteAppCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAppCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteAppCommandError(output, context);
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

/**
 * deserializeAws_restJson1DeleteAppCommandError
 */
const de_DeleteAppCommandError = async (
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
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.resiliencehub#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.resiliencehub#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.resiliencehub#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.resiliencehub#ValidationException":
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
 * deserializeAws_restJson1DeleteAppAssessmentCommand
 */
export const de_DeleteAppAssessmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAppAssessmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteAppAssessmentCommandError(output, context);
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

/**
 * deserializeAws_restJson1DeleteAppAssessmentCommandError
 */
const de_DeleteAppAssessmentCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.resiliencehub#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.resiliencehub#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.resiliencehub#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.resiliencehub#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.resiliencehub#ValidationException":
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
 * deserializeAws_restJson1DeleteAppInputSourceCommand
 */
export const de_DeleteAppInputSourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAppInputSourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteAppInputSourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.appArn != null) {
    contents.appArn = __expectString(data.appArn);
  }
  if (data.appInputSource != null) {
    contents.appInputSource = de_AppInputSource(data.appInputSource, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DeleteAppInputSourceCommandError
 */
const de_DeleteAppInputSourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAppInputSourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.resiliencehub#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.resiliencehub#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.resiliencehub#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.resiliencehub#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.resiliencehub#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.resiliencehub#ValidationException":
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
 * deserializeAws_restJson1DeleteAppVersionAppComponentCommand
 */
export const de_DeleteAppVersionAppComponentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAppVersionAppComponentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteAppVersionAppComponentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.appArn != null) {
    contents.appArn = __expectString(data.appArn);
  }
  if (data.appComponent != null) {
    contents.appComponent = de_AppComponent(data.appComponent, context);
  }
  if (data.appVersion != null) {
    contents.appVersion = __expectString(data.appVersion);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DeleteAppVersionAppComponentCommandError
 */
const de_DeleteAppVersionAppComponentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAppVersionAppComponentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.resiliencehub#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.resiliencehub#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.resiliencehub#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.resiliencehub#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.resiliencehub#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.resiliencehub#ValidationException":
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
 * deserializeAws_restJson1DeleteAppVersionResourceCommand
 */
export const de_DeleteAppVersionResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAppVersionResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteAppVersionResourceCommandError(output, context);
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
  if (data.physicalResource != null) {
    contents.physicalResource = de_PhysicalResource(data.physicalResource, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DeleteAppVersionResourceCommandError
 */
const de_DeleteAppVersionResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAppVersionResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.resiliencehub#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.resiliencehub#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.resiliencehub#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.resiliencehub#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.resiliencehub#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.resiliencehub#ValidationException":
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
 * deserializeAws_restJson1DeleteRecommendationTemplateCommand
 */
export const de_DeleteRecommendationTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRecommendationTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteRecommendationTemplateCommandError(output, context);
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

/**
 * deserializeAws_restJson1DeleteRecommendationTemplateCommandError
 */
const de_DeleteRecommendationTemplateCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.resiliencehub#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.resiliencehub#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.resiliencehub#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.resiliencehub#ValidationException":
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
 * deserializeAws_restJson1DeleteResiliencyPolicyCommand
 */
export const de_DeleteResiliencyPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResiliencyPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteResiliencyPolicyCommandError(output, context);
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

/**
 * deserializeAws_restJson1DeleteResiliencyPolicyCommandError
 */
const de_DeleteResiliencyPolicyCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.resiliencehub#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.resiliencehub#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.resiliencehub#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.resiliencehub#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.resiliencehub#ValidationException":
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
 * deserializeAws_restJson1DescribeAppCommand
 */
export const de_DescribeAppCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAppCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeAppCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.app != null) {
    contents.app = de_App(data.app, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeAppCommandError
 */
const de_DescribeAppCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.resiliencehub#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.resiliencehub#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.resiliencehub#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.resiliencehub#ValidationException":
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
 * deserializeAws_restJson1DescribeAppAssessmentCommand
 */
export const de_DescribeAppAssessmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAppAssessmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeAppAssessmentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.assessment != null) {
    contents.assessment = de_AppAssessment(data.assessment, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeAppAssessmentCommandError
 */
const de_DescribeAppAssessmentCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.resiliencehub#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.resiliencehub#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.resiliencehub#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.resiliencehub#ValidationException":
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
 * deserializeAws_restJson1DescribeAppVersionCommand
 */
export const de_DescribeAppVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAppVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeAppVersionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.additionalInfo != null) {
    contents.additionalInfo = de_AdditionalInfoMap(data.additionalInfo, context);
  }
  if (data.appArn != null) {
    contents.appArn = __expectString(data.appArn);
  }
  if (data.appVersion != null) {
    contents.appVersion = __expectString(data.appVersion);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeAppVersionCommandError
 */
const de_DescribeAppVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAppVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.resiliencehub#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.resiliencehub#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.resiliencehub#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.resiliencehub#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.resiliencehub#ValidationException":
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
 * deserializeAws_restJson1DescribeAppVersionAppComponentCommand
 */
export const de_DescribeAppVersionAppComponentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAppVersionAppComponentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeAppVersionAppComponentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.appArn != null) {
    contents.appArn = __expectString(data.appArn);
  }
  if (data.appComponent != null) {
    contents.appComponent = de_AppComponent(data.appComponent, context);
  }
  if (data.appVersion != null) {
    contents.appVersion = __expectString(data.appVersion);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeAppVersionAppComponentCommandError
 */
const de_DescribeAppVersionAppComponentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAppVersionAppComponentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.resiliencehub#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.resiliencehub#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.resiliencehub#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.resiliencehub#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.resiliencehub#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.resiliencehub#ValidationException":
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
 * deserializeAws_restJson1DescribeAppVersionResourceCommand
 */
export const de_DescribeAppVersionResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAppVersionResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeAppVersionResourceCommandError(output, context);
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
  if (data.physicalResource != null) {
    contents.physicalResource = de_PhysicalResource(data.physicalResource, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeAppVersionResourceCommandError
 */
const de_DescribeAppVersionResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAppVersionResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.resiliencehub#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.resiliencehub#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.resiliencehub#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.resiliencehub#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.resiliencehub#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.resiliencehub#ValidationException":
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
 * deserializeAws_restJson1DescribeAppVersionResourcesResolutionStatusCommand
 */
export const de_DescribeAppVersionResourcesResolutionStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAppVersionResourcesResolutionStatusCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeAppVersionResourcesResolutionStatusCommandError(output, context);
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

/**
 * deserializeAws_restJson1DescribeAppVersionResourcesResolutionStatusCommandError
 */
const de_DescribeAppVersionResourcesResolutionStatusCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.resiliencehub#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.resiliencehub#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.resiliencehub#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.resiliencehub#ValidationException":
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
 * deserializeAws_restJson1DescribeAppVersionTemplateCommand
 */
export const de_DescribeAppVersionTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAppVersionTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeAppVersionTemplateCommandError(output, context);
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

/**
 * deserializeAws_restJson1DescribeAppVersionTemplateCommandError
 */
const de_DescribeAppVersionTemplateCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.resiliencehub#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.resiliencehub#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.resiliencehub#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.resiliencehub#ValidationException":
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
 * deserializeAws_restJson1DescribeDraftAppVersionResourcesImportStatusCommand
 */
export const de_DescribeDraftAppVersionResourcesImportStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDraftAppVersionResourcesImportStatusCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeDraftAppVersionResourcesImportStatusCommandError(output, context);
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

/**
 * deserializeAws_restJson1DescribeDraftAppVersionResourcesImportStatusCommandError
 */
const de_DescribeDraftAppVersionResourcesImportStatusCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.resiliencehub#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.resiliencehub#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.resiliencehub#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.resiliencehub#ValidationException":
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
 * deserializeAws_restJson1DescribeResiliencyPolicyCommand
 */
export const de_DescribeResiliencyPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeResiliencyPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeResiliencyPolicyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.policy != null) {
    contents.policy = de_ResiliencyPolicy(data.policy, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeResiliencyPolicyCommandError
 */
const de_DescribeResiliencyPolicyCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.resiliencehub#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.resiliencehub#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.resiliencehub#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.resiliencehub#ValidationException":
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
 * deserializeAws_restJson1ImportResourcesToDraftAppVersionCommand
 */
export const de_ImportResourcesToDraftAppVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportResourcesToDraftAppVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ImportResourcesToDraftAppVersionCommandError(output, context);
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
  if (data.eksSources != null) {
    contents.eksSources = de_EksSourceList(data.eksSources, context);
  }
  if (data.sourceArns != null) {
    contents.sourceArns = de_ArnList(data.sourceArns, context);
  }
  if (data.status != null) {
    contents.status = __expectString(data.status);
  }
  if (data.terraformSources != null) {
    contents.terraformSources = de_TerraformSourceList(data.terraformSources, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ImportResourcesToDraftAppVersionCommandError
 */
const de_ImportResourcesToDraftAppVersionCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.resiliencehub#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.resiliencehub#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.resiliencehub#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.resiliencehub#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.resiliencehub#ValidationException":
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
 * deserializeAws_restJson1ListAlarmRecommendationsCommand
 */
export const de_ListAlarmRecommendationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAlarmRecommendationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListAlarmRecommendationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.alarmRecommendations != null) {
    contents.alarmRecommendations = de_AlarmRecommendationList(data.alarmRecommendations, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListAlarmRecommendationsCommandError
 */
const de_ListAlarmRecommendationsCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.resiliencehub#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.resiliencehub#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.resiliencehub#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.resiliencehub#ValidationException":
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
 * deserializeAws_restJson1ListAppAssessmentsCommand
 */
export const de_ListAppAssessmentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAppAssessmentsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListAppAssessmentsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.assessmentSummaries != null) {
    contents.assessmentSummaries = de_AppAssessmentSummaryList(data.assessmentSummaries, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListAppAssessmentsCommandError
 */
const de_ListAppAssessmentsCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.resiliencehub#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.resiliencehub#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.resiliencehub#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.resiliencehub#ValidationException":
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
 * deserializeAws_restJson1ListAppComponentCompliancesCommand
 */
export const de_ListAppComponentCompliancesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAppComponentCompliancesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListAppComponentCompliancesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.componentCompliances != null) {
    contents.componentCompliances = de_ComponentCompliancesList(data.componentCompliances, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListAppComponentCompliancesCommandError
 */
const de_ListAppComponentCompliancesCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.resiliencehub#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.resiliencehub#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.resiliencehub#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.resiliencehub#ValidationException":
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
 * deserializeAws_restJson1ListAppComponentRecommendationsCommand
 */
export const de_ListAppComponentRecommendationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAppComponentRecommendationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListAppComponentRecommendationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.componentRecommendations != null) {
    contents.componentRecommendations = de_ComponentRecommendationList(data.componentRecommendations, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListAppComponentRecommendationsCommandError
 */
const de_ListAppComponentRecommendationsCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.resiliencehub#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.resiliencehub#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.resiliencehub#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.resiliencehub#ValidationException":
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
 * deserializeAws_restJson1ListAppInputSourcesCommand
 */
export const de_ListAppInputSourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAppInputSourcesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListAppInputSourcesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.appInputSources != null) {
    contents.appInputSources = de_AppInputSourceList(data.appInputSources, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListAppInputSourcesCommandError
 */
const de_ListAppInputSourcesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAppInputSourcesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.resiliencehub#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.resiliencehub#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.resiliencehub#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.resiliencehub#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.resiliencehub#ValidationException":
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
 * deserializeAws_restJson1ListAppsCommand
 */
export const de_ListAppsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAppsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListAppsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.appSummaries != null) {
    contents.appSummaries = de_AppSummaryList(data.appSummaries, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListAppsCommandError
 */
const de_ListAppsCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.resiliencehub#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.resiliencehub#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.resiliencehub#ValidationException":
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
 * deserializeAws_restJson1ListAppVersionAppComponentsCommand
 */
export const de_ListAppVersionAppComponentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAppVersionAppComponentsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListAppVersionAppComponentsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.appArn != null) {
    contents.appArn = __expectString(data.appArn);
  }
  if (data.appComponents != null) {
    contents.appComponents = de_AppComponentList(data.appComponents, context);
  }
  if (data.appVersion != null) {
    contents.appVersion = __expectString(data.appVersion);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListAppVersionAppComponentsCommandError
 */
const de_ListAppVersionAppComponentsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAppVersionAppComponentsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.resiliencehub#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.resiliencehub#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.resiliencehub#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.resiliencehub#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.resiliencehub#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.resiliencehub#ValidationException":
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
 * deserializeAws_restJson1ListAppVersionResourceMappingsCommand
 */
export const de_ListAppVersionResourceMappingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAppVersionResourceMappingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListAppVersionResourceMappingsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.resourceMappings != null) {
    contents.resourceMappings = de_ResourceMappingList(data.resourceMappings, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListAppVersionResourceMappingsCommandError
 */
const de_ListAppVersionResourceMappingsCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.resiliencehub#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.resiliencehub#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.resiliencehub#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.resiliencehub#ValidationException":
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
 * deserializeAws_restJson1ListAppVersionResourcesCommand
 */
export const de_ListAppVersionResourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAppVersionResourcesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListAppVersionResourcesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.physicalResources != null) {
    contents.physicalResources = de_PhysicalResourceList(data.physicalResources, context);
  }
  if (data.resolutionId != null) {
    contents.resolutionId = __expectString(data.resolutionId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListAppVersionResourcesCommandError
 */
const de_ListAppVersionResourcesCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.resiliencehub#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.resiliencehub#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.resiliencehub#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.resiliencehub#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.resiliencehub#ValidationException":
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
 * deserializeAws_restJson1ListAppVersionsCommand
 */
export const de_ListAppVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAppVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListAppVersionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.appVersions != null) {
    contents.appVersions = de_AppVersionList(data.appVersions, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListAppVersionsCommandError
 */
const de_ListAppVersionsCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.resiliencehub#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.resiliencehub#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.resiliencehub#ValidationException":
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
 * deserializeAws_restJson1ListRecommendationTemplatesCommand
 */
export const de_ListRecommendationTemplatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRecommendationTemplatesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListRecommendationTemplatesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.recommendationTemplates != null) {
    contents.recommendationTemplates = de_RecommendationTemplateList(data.recommendationTemplates, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListRecommendationTemplatesCommandError
 */
const de_ListRecommendationTemplatesCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.resiliencehub#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.resiliencehub#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.resiliencehub#ValidationException":
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
 * deserializeAws_restJson1ListResiliencyPoliciesCommand
 */
export const de_ListResiliencyPoliciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResiliencyPoliciesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListResiliencyPoliciesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.resiliencyPolicies != null) {
    contents.resiliencyPolicies = de_ResiliencyPolicies(data.resiliencyPolicies, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListResiliencyPoliciesCommandError
 */
const de_ListResiliencyPoliciesCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.resiliencehub#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.resiliencehub#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.resiliencehub#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.resiliencehub#ValidationException":
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
 * deserializeAws_restJson1ListSopRecommendationsCommand
 */
export const de_ListSopRecommendationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSopRecommendationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListSopRecommendationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.sopRecommendations != null) {
    contents.sopRecommendations = de_SopRecommendationList(data.sopRecommendations, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListSopRecommendationsCommandError
 */
const de_ListSopRecommendationsCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.resiliencehub#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.resiliencehub#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.resiliencehub#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.resiliencehub#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.resiliencehub#ValidationException":
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
 * deserializeAws_restJson1ListSuggestedResiliencyPoliciesCommand
 */
export const de_ListSuggestedResiliencyPoliciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSuggestedResiliencyPoliciesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListSuggestedResiliencyPoliciesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.resiliencyPolicies != null) {
    contents.resiliencyPolicies = de_ResiliencyPolicies(data.resiliencyPolicies, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListSuggestedResiliencyPoliciesCommandError
 */
const de_ListSuggestedResiliencyPoliciesCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.resiliencehub#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.resiliencehub#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.resiliencehub#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.resiliencehub#ValidationException":
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
    case "AccessDeniedException":
    case "com.amazonaws.resiliencehub#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.resiliencehub#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.resiliencehub#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.resiliencehub#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.resiliencehub#ValidationException":
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
 * deserializeAws_restJson1ListTestRecommendationsCommand
 */
export const de_ListTestRecommendationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTestRecommendationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListTestRecommendationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.testRecommendations != null) {
    contents.testRecommendations = de_TestRecommendationList(data.testRecommendations, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListTestRecommendationsCommandError
 */
const de_ListTestRecommendationsCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.resiliencehub#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.resiliencehub#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.resiliencehub#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.resiliencehub#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.resiliencehub#ValidationException":
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
 * deserializeAws_restJson1ListUnsupportedAppVersionResourcesCommand
 */
export const de_ListUnsupportedAppVersionResourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListUnsupportedAppVersionResourcesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListUnsupportedAppVersionResourcesCommandError(output, context);
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
    contents.unsupportedResources = de_UnsupportedResourceList(data.unsupportedResources, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListUnsupportedAppVersionResourcesCommandError
 */
const de_ListUnsupportedAppVersionResourcesCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.resiliencehub#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.resiliencehub#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.resiliencehub#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.resiliencehub#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.resiliencehub#ValidationException":
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
 * deserializeAws_restJson1PublishAppVersionCommand
 */
export const de_PublishAppVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PublishAppVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_PublishAppVersionCommandError(output, context);
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

/**
 * deserializeAws_restJson1PublishAppVersionCommandError
 */
const de_PublishAppVersionCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.resiliencehub#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.resiliencehub#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.resiliencehub#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.resiliencehub#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.resiliencehub#ValidationException":
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
 * deserializeAws_restJson1PutDraftAppVersionTemplateCommand
 */
export const de_PutDraftAppVersionTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutDraftAppVersionTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_PutDraftAppVersionTemplateCommandError(output, context);
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

/**
 * deserializeAws_restJson1PutDraftAppVersionTemplateCommandError
 */
const de_PutDraftAppVersionTemplateCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.resiliencehub#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.resiliencehub#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.resiliencehub#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.resiliencehub#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.resiliencehub#ValidationException":
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
 * deserializeAws_restJson1RemoveDraftAppVersionResourceMappingsCommand
 */
export const de_RemoveDraftAppVersionResourceMappingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveDraftAppVersionResourceMappingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_RemoveDraftAppVersionResourceMappingsCommandError(output, context);
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

/**
 * deserializeAws_restJson1RemoveDraftAppVersionResourceMappingsCommandError
 */
const de_RemoveDraftAppVersionResourceMappingsCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.resiliencehub#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.resiliencehub#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.resiliencehub#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.resiliencehub#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.resiliencehub#ValidationException":
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
 * deserializeAws_restJson1ResolveAppVersionResourcesCommand
 */
export const de_ResolveAppVersionResourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResolveAppVersionResourcesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ResolveAppVersionResourcesCommandError(output, context);
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

/**
 * deserializeAws_restJson1ResolveAppVersionResourcesCommandError
 */
const de_ResolveAppVersionResourcesCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.resiliencehub#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.resiliencehub#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.resiliencehub#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.resiliencehub#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.resiliencehub#ValidationException":
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
 * deserializeAws_restJson1StartAppAssessmentCommand
 */
export const de_StartAppAssessmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartAppAssessmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_StartAppAssessmentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.assessment != null) {
    contents.assessment = de_AppAssessment(data.assessment, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1StartAppAssessmentCommandError
 */
const de_StartAppAssessmentCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.resiliencehub#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.resiliencehub#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.resiliencehub#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.resiliencehub#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.resiliencehub#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.resiliencehub#ValidationException":
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
    case "AccessDeniedException":
    case "com.amazonaws.resiliencehub#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.resiliencehub#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.resiliencehub#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.resiliencehub#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.resiliencehub#ValidationException":
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
    case "AccessDeniedException":
    case "com.amazonaws.resiliencehub#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.resiliencehub#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.resiliencehub#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.resiliencehub#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.resiliencehub#ValidationException":
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
 * deserializeAws_restJson1UpdateAppCommand
 */
export const de_UpdateAppCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAppCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateAppCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.app != null) {
    contents.app = de_App(data.app, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateAppCommandError
 */
const de_UpdateAppCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.resiliencehub#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.resiliencehub#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.resiliencehub#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.resiliencehub#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.resiliencehub#ValidationException":
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
 * deserializeAws_restJson1UpdateAppVersionCommand
 */
export const de_UpdateAppVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAppVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateAppVersionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.additionalInfo != null) {
    contents.additionalInfo = de_AdditionalInfoMap(data.additionalInfo, context);
  }
  if (data.appArn != null) {
    contents.appArn = __expectString(data.appArn);
  }
  if (data.appVersion != null) {
    contents.appVersion = __expectString(data.appVersion);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateAppVersionCommandError
 */
const de_UpdateAppVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAppVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.resiliencehub#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.resiliencehub#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.resiliencehub#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.resiliencehub#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.resiliencehub#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.resiliencehub#ValidationException":
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
 * deserializeAws_restJson1UpdateAppVersionAppComponentCommand
 */
export const de_UpdateAppVersionAppComponentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAppVersionAppComponentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateAppVersionAppComponentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.appArn != null) {
    contents.appArn = __expectString(data.appArn);
  }
  if (data.appComponent != null) {
    contents.appComponent = de_AppComponent(data.appComponent, context);
  }
  if (data.appVersion != null) {
    contents.appVersion = __expectString(data.appVersion);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateAppVersionAppComponentCommandError
 */
const de_UpdateAppVersionAppComponentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAppVersionAppComponentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.resiliencehub#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.resiliencehub#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.resiliencehub#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.resiliencehub#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.resiliencehub#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.resiliencehub#ValidationException":
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
 * deserializeAws_restJson1UpdateAppVersionResourceCommand
 */
export const de_UpdateAppVersionResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAppVersionResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateAppVersionResourceCommandError(output, context);
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
  if (data.physicalResource != null) {
    contents.physicalResource = de_PhysicalResource(data.physicalResource, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateAppVersionResourceCommandError
 */
const de_UpdateAppVersionResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAppVersionResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.resiliencehub#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.resiliencehub#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.resiliencehub#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.resiliencehub#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.resiliencehub#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.resiliencehub#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.resiliencehub#ValidationException":
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
 * deserializeAws_restJson1UpdateResiliencyPolicyCommand
 */
export const de_UpdateResiliencyPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateResiliencyPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateResiliencyPolicyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.policy != null) {
    contents.policy = de_ResiliencyPolicy(data.policy, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateResiliencyPolicyCommandError
 */
const de_UpdateResiliencyPolicyCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.resiliencehub#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.resiliencehub#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.resiliencehub#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.resiliencehub#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.resiliencehub#ValidationException":
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
 * deserializeAws_restJson1ConflictExceptionRes
 */
const de_ConflictExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ConflictException> => {
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
  if (data.retryAfterSeconds != null) {
    contents.retryAfterSeconds = __expectInt32(data.retryAfterSeconds);
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
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * serializeAws_restJson1AdditionalInfoMap
 */
const se_AdditionalInfoMap = (input: Record<string, string[]>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_AdditionalInfoValueList(value, context);
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1AdditionalInfoValueList
 */
const se_AdditionalInfoValueList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1AppComponentNameList
 */
const se_AppComponentNameList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1ArnList
 */
const se_ArnList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1DisruptionPolicy
 */
const se_DisruptionPolicy = (input: Record<string, FailurePolicy>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [DisruptionType | string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_FailurePolicy(value, context);
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1EksNamespaceList
 */
const se_EksNamespaceList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1EksSource
 */
const se_EksSource = (input: EksSource, context: __SerdeContext): any => {
  return {
    ...(input.eksClusterArn != null && { eksClusterArn: input.eksClusterArn }),
    ...(input.namespaces != null && { namespaces: se_EksNamespaceList(input.namespaces, context) }),
  };
};

/**
 * serializeAws_restJson1EksSourceClusterNamespace
 */
const se_EksSourceClusterNamespace = (input: EksSourceClusterNamespace, context: __SerdeContext): any => {
  return {
    ...(input.eksClusterArn != null && { eksClusterArn: input.eksClusterArn }),
    ...(input.namespace != null && { namespace: input.namespace }),
  };
};

/**
 * serializeAws_restJson1EksSourceList
 */
const se_EksSourceList = (input: EksSource[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_EksSource(entry, context);
    });
};

/**
 * serializeAws_restJson1EntityNameList
 */
const se_EntityNameList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1FailurePolicy
 */
const se_FailurePolicy = (input: FailurePolicy, context: __SerdeContext): any => {
  return {
    ...(input.rpoInSecs != null && { rpoInSecs: input.rpoInSecs }),
    ...(input.rtoInSecs != null && { rtoInSecs: input.rtoInSecs }),
  };
};

/**
 * serializeAws_restJson1LogicalResourceId
 */
const se_LogicalResourceId = (input: LogicalResourceId, context: __SerdeContext): any => {
  return {
    ...(input.eksSourceName != null && { eksSourceName: input.eksSourceName }),
    ...(input.identifier != null && { identifier: input.identifier }),
    ...(input.logicalStackName != null && { logicalStackName: input.logicalStackName }),
    ...(input.resourceGroupName != null && { resourceGroupName: input.resourceGroupName }),
    ...(input.terraformSourceName != null && { terraformSourceName: input.terraformSourceName }),
  };
};

/**
 * serializeAws_restJson1PhysicalResourceId
 */
const se_PhysicalResourceId = (input: PhysicalResourceId, context: __SerdeContext): any => {
  return {
    ...(input.awsAccountId != null && { awsAccountId: input.awsAccountId }),
    ...(input.awsRegion != null && { awsRegion: input.awsRegion }),
    ...(input.identifier != null && { identifier: input.identifier }),
    ...(input.type != null && { type: input.type }),
  };
};

/**
 * serializeAws_restJson1RecommendationIdList
 */
const se_RecommendationIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1RenderRecommendationTypeList
 */
const se_RenderRecommendationTypeList = (
  input: (RenderRecommendationType | string)[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1ResourceMapping
 */
const se_ResourceMapping = (input: ResourceMapping, context: __SerdeContext): any => {
  return {
    ...(input.appRegistryAppName != null && { appRegistryAppName: input.appRegistryAppName }),
    ...(input.eksSourceName != null && { eksSourceName: input.eksSourceName }),
    ...(input.logicalStackName != null && { logicalStackName: input.logicalStackName }),
    ...(input.mappingType != null && { mappingType: input.mappingType }),
    ...(input.physicalResourceId != null && {
      physicalResourceId: se_PhysicalResourceId(input.physicalResourceId, context),
    }),
    ...(input.resourceGroupName != null && { resourceGroupName: input.resourceGroupName }),
    ...(input.resourceName != null && { resourceName: input.resourceName }),
    ...(input.terraformSourceName != null && { terraformSourceName: input.terraformSourceName }),
  };
};

/**
 * serializeAws_restJson1ResourceMappingList
 */
const se_ResourceMappingList = (input: ResourceMapping[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ResourceMapping(entry, context);
    });
};

/**
 * serializeAws_restJson1String255List
 */
const se_String255List = (input: string[], context: __SerdeContext): any => {
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
 * serializeAws_restJson1TerraformSource
 */
const se_TerraformSource = (input: TerraformSource, context: __SerdeContext): any => {
  return {
    ...(input.s3StateFileUrl != null && { s3StateFileUrl: input.s3StateFileUrl }),
  };
};

/**
 * serializeAws_restJson1TerraformSourceList
 */
const se_TerraformSourceList = (input: TerraformSource[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_TerraformSource(entry, context);
    });
};

/**
 * deserializeAws_restJson1AdditionalInfoMap
 */
const de_AdditionalInfoMap = (output: any, context: __SerdeContext): Record<string, string[]> => {
  return Object.entries(output).reduce((acc: Record<string, string[]>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = de_AdditionalInfoValueList(value, context);
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1AdditionalInfoValueList
 */
const de_AdditionalInfoValueList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1AlarmRecommendation
 */
const de_AlarmRecommendation = (output: any, context: __SerdeContext): AlarmRecommendation => {
  return {
    appComponentName: __expectString(output.appComponentName),
    description: __expectString(output.description),
    items: output.items != null ? de_RecommendationItemList(output.items, context) : undefined,
    name: __expectString(output.name),
    prerequisite: __expectString(output.prerequisite),
    recommendationId: __expectString(output.recommendationId),
    referenceId: __expectString(output.referenceId),
    type: __expectString(output.type),
  } as any;
};

/**
 * deserializeAws_restJson1AlarmRecommendationList
 */
const de_AlarmRecommendationList = (output: any, context: __SerdeContext): AlarmRecommendation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AlarmRecommendation(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AlarmReferenceIdList
 */
const de_AlarmReferenceIdList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1App
 */
const de_App = (output: any, context: __SerdeContext): App => {
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
    tags: output.tags != null ? de_TagMap(output.tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1AppAssessment
 */
const de_AppAssessment = (output: any, context: __SerdeContext): AppAssessment => {
  return {
    appArn: __expectString(output.appArn),
    appVersion: __expectString(output.appVersion),
    assessmentArn: __expectString(output.assessmentArn),
    assessmentName: __expectString(output.assessmentName),
    assessmentStatus: __expectString(output.assessmentStatus),
    compliance: output.compliance != null ? de_AssessmentCompliance(output.compliance, context) : undefined,
    complianceStatus: __expectString(output.complianceStatus),
    cost: output.cost != null ? de_Cost(output.cost, context) : undefined,
    endTime:
      output.endTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.endTime))) : undefined,
    invoker: __expectString(output.invoker),
    message: __expectString(output.message),
    policy: output.policy != null ? de_ResiliencyPolicy(output.policy, context) : undefined,
    resiliencyScore: output.resiliencyScore != null ? de_ResiliencyScore(output.resiliencyScore, context) : undefined,
    resourceErrorsDetails:
      output.resourceErrorsDetails != null
        ? de_ResourceErrorsDetails(output.resourceErrorsDetails, context)
        : undefined,
    startTime:
      output.startTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.startTime))) : undefined,
    tags: output.tags != null ? de_TagMap(output.tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1AppAssessmentSummary
 */
const de_AppAssessmentSummary = (output: any, context: __SerdeContext): AppAssessmentSummary => {
  return {
    appArn: __expectString(output.appArn),
    appVersion: __expectString(output.appVersion),
    assessmentArn: __expectString(output.assessmentArn),
    assessmentName: __expectString(output.assessmentName),
    assessmentStatus: __expectString(output.assessmentStatus),
    complianceStatus: __expectString(output.complianceStatus),
    cost: output.cost != null ? de_Cost(output.cost, context) : undefined,
    endTime:
      output.endTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.endTime))) : undefined,
    invoker: __expectString(output.invoker),
    message: __expectString(output.message),
    resiliencyScore: __limitedParseDouble(output.resiliencyScore),
    startTime:
      output.startTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.startTime))) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1AppAssessmentSummaryList
 */
const de_AppAssessmentSummaryList = (output: any, context: __SerdeContext): AppAssessmentSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AppAssessmentSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AppComponent
 */
const de_AppComponent = (output: any, context: __SerdeContext): AppComponent => {
  return {
    additionalInfo: output.additionalInfo != null ? de_AdditionalInfoMap(output.additionalInfo, context) : undefined,
    id: __expectString(output.id),
    name: __expectString(output.name),
    type: __expectString(output.type),
  } as any;
};

/**
 * deserializeAws_restJson1AppComponentCompliance
 */
const de_AppComponentCompliance = (output: any, context: __SerdeContext): AppComponentCompliance => {
  return {
    appComponentName: __expectString(output.appComponentName),
    compliance: output.compliance != null ? de_AssessmentCompliance(output.compliance, context) : undefined,
    cost: output.cost != null ? de_Cost(output.cost, context) : undefined,
    message: __expectString(output.message),
    resiliencyScore: output.resiliencyScore != null ? de_ResiliencyScore(output.resiliencyScore, context) : undefined,
    status: __expectString(output.status),
  } as any;
};

/**
 * deserializeAws_restJson1AppComponentList
 */
const de_AppComponentList = (output: any, context: __SerdeContext): AppComponent[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AppComponent(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AppInputSource
 */
const de_AppInputSource = (output: any, context: __SerdeContext): AppInputSource => {
  return {
    eksSourceClusterNamespace:
      output.eksSourceClusterNamespace != null
        ? de_EksSourceClusterNamespace(output.eksSourceClusterNamespace, context)
        : undefined,
    importType: __expectString(output.importType),
    resourceCount: __expectInt32(output.resourceCount),
    sourceArn: __expectString(output.sourceArn),
    sourceName: __expectString(output.sourceName),
    terraformSource: output.terraformSource != null ? de_TerraformSource(output.terraformSource, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1AppInputSourceList
 */
const de_AppInputSourceList = (output: any, context: __SerdeContext): AppInputSource[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AppInputSource(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AppSummary
 */
const de_AppSummary = (output: any, context: __SerdeContext): AppSummary => {
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

/**
 * deserializeAws_restJson1AppSummaryList
 */
const de_AppSummaryList = (output: any, context: __SerdeContext): AppSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AppSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AppVersionList
 */
const de_AppVersionList = (output: any, context: __SerdeContext): AppVersionSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AppVersionSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AppVersionSummary
 */
const de_AppVersionSummary = (output: any, context: __SerdeContext): AppVersionSummary => {
  return {
    appVersion: __expectString(output.appVersion),
  } as any;
};

/**
 * deserializeAws_restJson1ArnList
 */
const de_ArnList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1AssessmentCompliance
 */
const de_AssessmentCompliance = (output: any, context: __SerdeContext): Record<string, DisruptionCompliance> => {
  return Object.entries(output).reduce(
    (acc: Record<string, DisruptionCompliance>, [key, value]: [DisruptionType | string, any]) => {
      if (value === null) {
        return acc;
      }
      acc[key] = de_DisruptionCompliance(value, context);
      return acc;
    },
    {}
  );
};

/**
 * deserializeAws_restJson1ComponentCompliancesList
 */
const de_ComponentCompliancesList = (output: any, context: __SerdeContext): AppComponentCompliance[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AppComponentCompliance(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ComponentRecommendation
 */
const de_ComponentRecommendation = (output: any, context: __SerdeContext): ComponentRecommendation => {
  return {
    appComponentName: __expectString(output.appComponentName),
    configRecommendations:
      output.configRecommendations != null
        ? de_ConfigRecommendationList(output.configRecommendations, context)
        : undefined,
    recommendationStatus: __expectString(output.recommendationStatus),
  } as any;
};

/**
 * deserializeAws_restJson1ComponentRecommendationList
 */
const de_ComponentRecommendationList = (output: any, context: __SerdeContext): ComponentRecommendation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ComponentRecommendation(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ConfigRecommendation
 */
const de_ConfigRecommendation = (output: any, context: __SerdeContext): ConfigRecommendation => {
  return {
    appComponentName: __expectString(output.appComponentName),
    compliance: output.compliance != null ? de_AssessmentCompliance(output.compliance, context) : undefined,
    cost: output.cost != null ? de_Cost(output.cost, context) : undefined,
    description: __expectString(output.description),
    haArchitecture: __expectString(output.haArchitecture),
    name: __expectString(output.name),
    optimizationType: __expectString(output.optimizationType),
    recommendationCompliance:
      output.recommendationCompliance != null
        ? de_RecommendationCompliance(output.recommendationCompliance, context)
        : undefined,
    referenceId: __expectString(output.referenceId),
    suggestedChanges:
      output.suggestedChanges != null ? de_SuggestedChangesList(output.suggestedChanges, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ConfigRecommendationList
 */
const de_ConfigRecommendationList = (output: any, context: __SerdeContext): ConfigRecommendation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ConfigRecommendation(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Cost
 */
const de_Cost = (output: any, context: __SerdeContext): Cost => {
  return {
    amount: __limitedParseDouble(output.amount),
    currency: __expectString(output.currency),
    frequency: __expectString(output.frequency),
  } as any;
};

/**
 * deserializeAws_restJson1DisruptionCompliance
 */
const de_DisruptionCompliance = (output: any, context: __SerdeContext): DisruptionCompliance => {
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

/**
 * deserializeAws_restJson1DisruptionPolicy
 */
const de_DisruptionPolicy = (output: any, context: __SerdeContext): Record<string, FailurePolicy> => {
  return Object.entries(output).reduce(
    (acc: Record<string, FailurePolicy>, [key, value]: [DisruptionType | string, any]) => {
      if (value === null) {
        return acc;
      }
      acc[key] = de_FailurePolicy(value, context);
      return acc;
    },
    {}
  );
};

/**
 * deserializeAws_restJson1DisruptionResiliencyScore
 */
const de_DisruptionResiliencyScore = (output: any, context: __SerdeContext): Record<string, number> => {
  return Object.entries(output).reduce((acc: Record<string, number>, [key, value]: [DisruptionType | string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __limitedParseDouble(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1EksNamespaceList
 */
const de_EksNamespaceList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1EksSource
 */
const de_EksSource = (output: any, context: __SerdeContext): EksSource => {
  return {
    eksClusterArn: __expectString(output.eksClusterArn),
    namespaces: output.namespaces != null ? de_EksNamespaceList(output.namespaces, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1EksSourceClusterNamespace
 */
const de_EksSourceClusterNamespace = (output: any, context: __SerdeContext): EksSourceClusterNamespace => {
  return {
    eksClusterArn: __expectString(output.eksClusterArn),
    namespace: __expectString(output.namespace),
  } as any;
};

/**
 * deserializeAws_restJson1EksSourceList
 */
const de_EksSourceList = (output: any, context: __SerdeContext): EksSource[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_EksSource(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1FailurePolicy
 */
const de_FailurePolicy = (output: any, context: __SerdeContext): FailurePolicy => {
  return {
    rpoInSecs: __expectInt32(output.rpoInSecs),
    rtoInSecs: __expectInt32(output.rtoInSecs),
  } as any;
};

/**
 * deserializeAws_restJson1LogicalResourceId
 */
const de_LogicalResourceId = (output: any, context: __SerdeContext): LogicalResourceId => {
  return {
    eksSourceName: __expectString(output.eksSourceName),
    identifier: __expectString(output.identifier),
    logicalStackName: __expectString(output.logicalStackName),
    resourceGroupName: __expectString(output.resourceGroupName),
    terraformSourceName: __expectString(output.terraformSourceName),
  } as any;
};

/**
 * deserializeAws_restJson1PhysicalResource
 */
const de_PhysicalResource = (output: any, context: __SerdeContext): PhysicalResource => {
  return {
    additionalInfo: output.additionalInfo != null ? de_AdditionalInfoMap(output.additionalInfo, context) : undefined,
    appComponents: output.appComponents != null ? de_AppComponentList(output.appComponents, context) : undefined,
    excluded: __expectBoolean(output.excluded),
    logicalResourceId:
      output.logicalResourceId != null ? de_LogicalResourceId(output.logicalResourceId, context) : undefined,
    physicalResourceId:
      output.physicalResourceId != null ? de_PhysicalResourceId(output.physicalResourceId, context) : undefined,
    resourceName: __expectString(output.resourceName),
    resourceType: __expectString(output.resourceType),
  } as any;
};

/**
 * deserializeAws_restJson1PhysicalResourceId
 */
const de_PhysicalResourceId = (output: any, context: __SerdeContext): PhysicalResourceId => {
  return {
    awsAccountId: __expectString(output.awsAccountId),
    awsRegion: __expectString(output.awsRegion),
    identifier: __expectString(output.identifier),
    type: __expectString(output.type),
  } as any;
};

/**
 * deserializeAws_restJson1PhysicalResourceList
 */
const de_PhysicalResourceList = (output: any, context: __SerdeContext): PhysicalResource[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_PhysicalResource(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1RecommendationCompliance
 */
const de_RecommendationCompliance = (
  output: any,
  context: __SerdeContext
): Record<string, RecommendationDisruptionCompliance> => {
  return Object.entries(output).reduce(
    (acc: Record<string, RecommendationDisruptionCompliance>, [key, value]: [DisruptionType | string, any]) => {
      if (value === null) {
        return acc;
      }
      acc[key] = de_RecommendationDisruptionCompliance(value, context);
      return acc;
    },
    {}
  );
};

/**
 * deserializeAws_restJson1RecommendationDisruptionCompliance
 */
const de_RecommendationDisruptionCompliance = (
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

/**
 * deserializeAws_restJson1RecommendationIdList
 */
const de_RecommendationIdList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1RecommendationItem
 */
const de_RecommendationItem = (output: any, context: __SerdeContext): RecommendationItem => {
  return {
    alreadyImplemented: __expectBoolean(output.alreadyImplemented),
    resourceId: __expectString(output.resourceId),
    targetAccountId: __expectString(output.targetAccountId),
    targetRegion: __expectString(output.targetRegion),
  } as any;
};

/**
 * deserializeAws_restJson1RecommendationItemList
 */
const de_RecommendationItemList = (output: any, context: __SerdeContext): RecommendationItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_RecommendationItem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1RecommendationTemplate
 */
const de_RecommendationTemplate = (output: any, context: __SerdeContext): RecommendationTemplate => {
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
      output.recommendationIds != null ? de_RecommendationIdList(output.recommendationIds, context) : undefined,
    recommendationTemplateArn: __expectString(output.recommendationTemplateArn),
    recommendationTypes:
      output.recommendationTypes != null
        ? de_RenderRecommendationTypeList(output.recommendationTypes, context)
        : undefined,
    startTime:
      output.startTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.startTime))) : undefined,
    status: __expectString(output.status),
    tags: output.tags != null ? de_TagMap(output.tags, context) : undefined,
    templatesLocation: output.templatesLocation != null ? de_S3Location(output.templatesLocation, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1RecommendationTemplateList
 */
const de_RecommendationTemplateList = (output: any, context: __SerdeContext): RecommendationTemplate[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_RecommendationTemplate(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1RenderRecommendationTypeList
 */
const de_RenderRecommendationTypeList = (
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

/**
 * deserializeAws_restJson1ResiliencyPolicies
 */
const de_ResiliencyPolicies = (output: any, context: __SerdeContext): ResiliencyPolicy[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ResiliencyPolicy(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ResiliencyPolicy
 */
const de_ResiliencyPolicy = (output: any, context: __SerdeContext): ResiliencyPolicy => {
  return {
    creationTime:
      output.creationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationTime)))
        : undefined,
    dataLocationConstraint: __expectString(output.dataLocationConstraint),
    estimatedCostTier: __expectString(output.estimatedCostTier),
    policy: output.policy != null ? de_DisruptionPolicy(output.policy, context) : undefined,
    policyArn: __expectString(output.policyArn),
    policyDescription: __expectString(output.policyDescription),
    policyName: __expectString(output.policyName),
    tags: output.tags != null ? de_TagMap(output.tags, context) : undefined,
    tier: __expectString(output.tier),
  } as any;
};

/**
 * deserializeAws_restJson1ResiliencyScore
 */
const de_ResiliencyScore = (output: any, context: __SerdeContext): ResiliencyScore => {
  return {
    disruptionScore:
      output.disruptionScore != null ? de_DisruptionResiliencyScore(output.disruptionScore, context) : undefined,
    score: __limitedParseDouble(output.score),
  } as any;
};

/**
 * deserializeAws_restJson1ResourceError
 */
const de_ResourceError = (output: any, context: __SerdeContext): ResourceError => {
  return {
    logicalResourceId: __expectString(output.logicalResourceId),
    physicalResourceId: __expectString(output.physicalResourceId),
    reason: __expectString(output.reason),
  } as any;
};

/**
 * deserializeAws_restJson1ResourceErrorList
 */
const de_ResourceErrorList = (output: any, context: __SerdeContext): ResourceError[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ResourceError(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ResourceErrorsDetails
 */
const de_ResourceErrorsDetails = (output: any, context: __SerdeContext): ResourceErrorsDetails => {
  return {
    hasMoreErrors: __expectBoolean(output.hasMoreErrors),
    resourceErrors: output.resourceErrors != null ? de_ResourceErrorList(output.resourceErrors, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ResourceMapping
 */
const de_ResourceMapping = (output: any, context: __SerdeContext): ResourceMapping => {
  return {
    appRegistryAppName: __expectString(output.appRegistryAppName),
    eksSourceName: __expectString(output.eksSourceName),
    logicalStackName: __expectString(output.logicalStackName),
    mappingType: __expectString(output.mappingType),
    physicalResourceId:
      output.physicalResourceId != null ? de_PhysicalResourceId(output.physicalResourceId, context) : undefined,
    resourceGroupName: __expectString(output.resourceGroupName),
    resourceName: __expectString(output.resourceName),
    terraformSourceName: __expectString(output.terraformSourceName),
  } as any;
};

/**
 * deserializeAws_restJson1ResourceMappingList
 */
const de_ResourceMappingList = (output: any, context: __SerdeContext): ResourceMapping[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ResourceMapping(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1S3Location
 */
const de_S3Location = (output: any, context: __SerdeContext): S3Location => {
  return {
    bucket: __expectString(output.bucket),
    prefix: __expectString(output.prefix),
  } as any;
};

/**
 * deserializeAws_restJson1SopRecommendation
 */
const de_SopRecommendation = (output: any, context: __SerdeContext): SopRecommendation => {
  return {
    appComponentName: __expectString(output.appComponentName),
    description: __expectString(output.description),
    items: output.items != null ? de_RecommendationItemList(output.items, context) : undefined,
    name: __expectString(output.name),
    prerequisite: __expectString(output.prerequisite),
    recommendationId: __expectString(output.recommendationId),
    referenceId: __expectString(output.referenceId),
    serviceType: __expectString(output.serviceType),
  } as any;
};

/**
 * deserializeAws_restJson1SopRecommendationList
 */
const de_SopRecommendationList = (output: any, context: __SerdeContext): SopRecommendation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SopRecommendation(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1SuggestedChangesList
 */
const de_SuggestedChangesList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1TerraformSource
 */
const de_TerraformSource = (output: any, context: __SerdeContext): TerraformSource => {
  return {
    s3StateFileUrl: __expectString(output.s3StateFileUrl),
  } as any;
};

/**
 * deserializeAws_restJson1TerraformSourceList
 */
const de_TerraformSourceList = (output: any, context: __SerdeContext): TerraformSource[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_TerraformSource(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1TestRecommendation
 */
const de_TestRecommendation = (output: any, context: __SerdeContext): TestRecommendation => {
  return {
    appComponentName: __expectString(output.appComponentName),
    dependsOnAlarms:
      output.dependsOnAlarms != null ? de_AlarmReferenceIdList(output.dependsOnAlarms, context) : undefined,
    description: __expectString(output.description),
    intent: __expectString(output.intent),
    items: output.items != null ? de_RecommendationItemList(output.items, context) : undefined,
    name: __expectString(output.name),
    prerequisite: __expectString(output.prerequisite),
    recommendationId: __expectString(output.recommendationId),
    referenceId: __expectString(output.referenceId),
    risk: __expectString(output.risk),
    type: __expectString(output.type),
  } as any;
};

/**
 * deserializeAws_restJson1TestRecommendationList
 */
const de_TestRecommendationList = (output: any, context: __SerdeContext): TestRecommendation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_TestRecommendation(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1UnsupportedResource
 */
const de_UnsupportedResource = (output: any, context: __SerdeContext): UnsupportedResource => {
  return {
    logicalResourceId:
      output.logicalResourceId != null ? de_LogicalResourceId(output.logicalResourceId, context) : undefined,
    physicalResourceId:
      output.physicalResourceId != null ? de_PhysicalResourceId(output.physicalResourceId, context) : undefined,
    resourceType: __expectString(output.resourceType),
    unsupportedResourceStatus: __expectString(output.unsupportedResourceStatus),
  } as any;
};

/**
 * deserializeAws_restJson1UnsupportedResourceList
 */
const de_UnsupportedResourceList = (output: any, context: __SerdeContext): UnsupportedResource[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_UnsupportedResource(entry, context);
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
