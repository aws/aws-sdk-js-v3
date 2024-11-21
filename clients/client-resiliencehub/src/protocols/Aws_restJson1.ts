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
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  limitedParseDouble as __limitedParseDouble,
  map,
  parseEpochTimestamp as __parseEpochTimestamp,
  resolvedPath as __resolvedPath,
  serializeDateTime as __serializeDateTime,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";
import { v4 as generateIdempotencyToken } from "uuid";

import {
  AcceptResourceGroupingRecommendationsCommandInput,
  AcceptResourceGroupingRecommendationsCommandOutput,
} from "../commands/AcceptResourceGroupingRecommendationsCommand";
import {
  AddDraftAppVersionResourceMappingsCommandInput,
  AddDraftAppVersionResourceMappingsCommandOutput,
} from "../commands/AddDraftAppVersionResourceMappingsCommand";
import {
  BatchUpdateRecommendationStatusCommandInput,
  BatchUpdateRecommendationStatusCommandOutput,
} from "../commands/BatchUpdateRecommendationStatusCommand";
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
  DescribeMetricsExportCommandInput,
  DescribeMetricsExportCommandOutput,
} from "../commands/DescribeMetricsExportCommand";
import {
  DescribeResiliencyPolicyCommandInput,
  DescribeResiliencyPolicyCommandOutput,
} from "../commands/DescribeResiliencyPolicyCommand";
import {
  DescribeResourceGroupingRecommendationTaskCommandInput,
  DescribeResourceGroupingRecommendationTaskCommandOutput,
} from "../commands/DescribeResourceGroupingRecommendationTaskCommand";
import {
  ImportResourcesToDraftAppVersionCommandInput,
  ImportResourcesToDraftAppVersionCommandOutput,
} from "../commands/ImportResourcesToDraftAppVersionCommand";
import {
  ListAlarmRecommendationsCommandInput,
  ListAlarmRecommendationsCommandOutput,
} from "../commands/ListAlarmRecommendationsCommand";
import {
  ListAppAssessmentComplianceDriftsCommandInput,
  ListAppAssessmentComplianceDriftsCommandOutput,
} from "../commands/ListAppAssessmentComplianceDriftsCommand";
import {
  ListAppAssessmentResourceDriftsCommandInput,
  ListAppAssessmentResourceDriftsCommandOutput,
} from "../commands/ListAppAssessmentResourceDriftsCommand";
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
import { ListMetricsCommandInput, ListMetricsCommandOutput } from "../commands/ListMetricsCommand";
import {
  ListRecommendationTemplatesCommandInput,
  ListRecommendationTemplatesCommandOutput,
} from "../commands/ListRecommendationTemplatesCommand";
import {
  ListResiliencyPoliciesCommandInput,
  ListResiliencyPoliciesCommandOutput,
} from "../commands/ListResiliencyPoliciesCommand";
import {
  ListResourceGroupingRecommendationsCommandInput,
  ListResourceGroupingRecommendationsCommandOutput,
} from "../commands/ListResourceGroupingRecommendationsCommand";
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
  RejectResourceGroupingRecommendationsCommandInput,
  RejectResourceGroupingRecommendationsCommandOutput,
} from "../commands/RejectResourceGroupingRecommendationsCommand";
import {
  RemoveDraftAppVersionResourceMappingsCommandInput,
  RemoveDraftAppVersionResourceMappingsCommandOutput,
} from "../commands/RemoveDraftAppVersionResourceMappingsCommand";
import {
  ResolveAppVersionResourcesCommandInput,
  ResolveAppVersionResourcesCommandOutput,
} from "../commands/ResolveAppVersionResourcesCommand";
import { StartAppAssessmentCommandInput, StartAppAssessmentCommandOutput } from "../commands/StartAppAssessmentCommand";
import { StartMetricsExportCommandInput, StartMetricsExportCommandOutput } from "../commands/StartMetricsExportCommand";
import {
  StartResourceGroupingRecommendationTaskCommandInput,
  StartResourceGroupingRecommendationTaskCommandOutput,
} from "../commands/StartResourceGroupingRecommendationTaskCommand";
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
  AcceptGroupingRecommendationEntry,
  AccessDeniedException,
  App,
  AppAssessment,
  AppAssessmentSummary,
  AppComponentCompliance,
  AppSummary,
  AppVersionSummary,
  ComponentRecommendation,
  Condition,
  ConfigRecommendation,
  ConflictException,
  Cost,
  DisruptionType,
  EksSource,
  EksSourceClusterNamespace,
  EventSubscription,
  FailurePolicy,
  Field,
  GroupingRecommendation,
  InternalServerException,
  LogicalResourceId,
  PermissionModel,
  PhysicalResourceId,
  RecommendationTemplate,
  RejectGroupingRecommendationEntry,
  RenderRecommendationType,
  ResiliencyPolicy,
  ResiliencyScore,
  ResiliencyScoreType,
  ResourceMapping,
  ResourceNotFoundException,
  ScoringComponentResiliencyScore,
  ServiceQuotaExceededException,
  Sort,
  TerraformSource,
  ThrottlingException,
  UpdateRecommendationStatusItem,
  UpdateRecommendationStatusRequestEntry,
  ValidationException,
} from "../models/models_0";
import { ResiliencehubServiceException as __BaseException } from "../models/ResiliencehubServiceException";

/**
 * serializeAws_restJson1AcceptResourceGroupingRecommendationsCommand
 */
export const se_AcceptResourceGroupingRecommendationsCommand = async (
  input: AcceptResourceGroupingRecommendationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/accept-resource-grouping-recommendations");
  let body: any;
  body = JSON.stringify(
    take(input, {
      appArn: [],
      entries: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1AddDraftAppVersionResourceMappingsCommand
 */
export const se_AddDraftAppVersionResourceMappingsCommand = async (
  input: AddDraftAppVersionResourceMappingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/add-draft-app-version-resource-mappings");
  let body: any;
  body = JSON.stringify(
    take(input, {
      appArn: [],
      resourceMappings: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1BatchUpdateRecommendationStatusCommand
 */
export const se_BatchUpdateRecommendationStatusCommand = async (
  input: BatchUpdateRecommendationStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/batch-update-recommendation-status");
  let body: any;
  body = JSON.stringify(
    take(input, {
      appArn: [],
      requestEntries: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateAppCommand
 */
export const se_CreateAppCommand = async (
  input: CreateAppCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/create-app");
  let body: any;
  body = JSON.stringify(
    take(input, {
      assessmentSchedule: [],
      awsApplicationArn: [],
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      description: [],
      eventSubscriptions: (_) => _json(_),
      name: [],
      permissionModel: (_) => _json(_),
      policyArn: [],
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateAppVersionAppComponentCommand
 */
export const se_CreateAppVersionAppComponentCommand = async (
  input: CreateAppVersionAppComponentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/create-app-version-app-component");
  let body: any;
  body = JSON.stringify(
    take(input, {
      additionalInfo: (_) => _json(_),
      appArn: [],
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      id: [],
      name: [],
      type: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateAppVersionResourceCommand
 */
export const se_CreateAppVersionResourceCommand = async (
  input: CreateAppVersionResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/create-app-version-resource");
  let body: any;
  body = JSON.stringify(
    take(input, {
      additionalInfo: (_) => _json(_),
      appArn: [],
      appComponents: (_) => _json(_),
      awsAccountId: [],
      awsRegion: [],
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      logicalResourceId: (_) => _json(_),
      physicalResourceId: [],
      resourceName: [],
      resourceType: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateRecommendationTemplateCommand
 */
export const se_CreateRecommendationTemplateCommand = async (
  input: CreateRecommendationTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/create-recommendation-template");
  let body: any;
  body = JSON.stringify(
    take(input, {
      assessmentArn: [],
      bucketName: [],
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      format: [],
      name: [],
      recommendationIds: (_) => _json(_),
      recommendationTypes: (_) => _json(_),
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateResiliencyPolicyCommand
 */
export const se_CreateResiliencyPolicyCommand = async (
  input: CreateResiliencyPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/create-resiliency-policy");
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      dataLocationConstraint: [],
      policy: (_) => _json(_),
      policyDescription: [],
      policyName: [],
      tags: (_) => _json(_),
      tier: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteAppCommand
 */
export const se_DeleteAppCommand = async (
  input: DeleteAppCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/delete-app");
  let body: any;
  body = JSON.stringify(
    take(input, {
      appArn: [],
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      forceDelete: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteAppAssessmentCommand
 */
export const se_DeleteAppAssessmentCommand = async (
  input: DeleteAppAssessmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/delete-app-assessment");
  let body: any;
  body = JSON.stringify(
    take(input, {
      assessmentArn: [],
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteAppInputSourceCommand
 */
export const se_DeleteAppInputSourceCommand = async (
  input: DeleteAppInputSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/delete-app-input-source");
  let body: any;
  body = JSON.stringify(
    take(input, {
      appArn: [],
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      eksSourceClusterNamespace: (_) => _json(_),
      sourceArn: [],
      terraformSource: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteAppVersionAppComponentCommand
 */
export const se_DeleteAppVersionAppComponentCommand = async (
  input: DeleteAppVersionAppComponentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/delete-app-version-app-component");
  let body: any;
  body = JSON.stringify(
    take(input, {
      appArn: [],
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      id: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteAppVersionResourceCommand
 */
export const se_DeleteAppVersionResourceCommand = async (
  input: DeleteAppVersionResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/delete-app-version-resource");
  let body: any;
  body = JSON.stringify(
    take(input, {
      appArn: [],
      awsAccountId: [],
      awsRegion: [],
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      logicalResourceId: (_) => _json(_),
      physicalResourceId: [],
      resourceName: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteRecommendationTemplateCommand
 */
export const se_DeleteRecommendationTemplateCommand = async (
  input: DeleteRecommendationTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/delete-recommendation-template");
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      recommendationTemplateArn: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteResiliencyPolicyCommand
 */
export const se_DeleteResiliencyPolicyCommand = async (
  input: DeleteResiliencyPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/delete-resiliency-policy");
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      policyArn: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeAppCommand
 */
export const se_DescribeAppCommand = async (
  input: DescribeAppCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/describe-app");
  let body: any;
  body = JSON.stringify(
    take(input, {
      appArn: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeAppAssessmentCommand
 */
export const se_DescribeAppAssessmentCommand = async (
  input: DescribeAppAssessmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/describe-app-assessment");
  let body: any;
  body = JSON.stringify(
    take(input, {
      assessmentArn: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeAppVersionCommand
 */
export const se_DescribeAppVersionCommand = async (
  input: DescribeAppVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/describe-app-version");
  let body: any;
  body = JSON.stringify(
    take(input, {
      appArn: [],
      appVersion: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeAppVersionAppComponentCommand
 */
export const se_DescribeAppVersionAppComponentCommand = async (
  input: DescribeAppVersionAppComponentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/describe-app-version-app-component");
  let body: any;
  body = JSON.stringify(
    take(input, {
      appArn: [],
      appVersion: [],
      id: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeAppVersionResourceCommand
 */
export const se_DescribeAppVersionResourceCommand = async (
  input: DescribeAppVersionResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/describe-app-version-resource");
  let body: any;
  body = JSON.stringify(
    take(input, {
      appArn: [],
      appVersion: [],
      awsAccountId: [],
      awsRegion: [],
      logicalResourceId: (_) => _json(_),
      physicalResourceId: [],
      resourceName: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeAppVersionResourcesResolutionStatusCommand
 */
export const se_DescribeAppVersionResourcesResolutionStatusCommand = async (
  input: DescribeAppVersionResourcesResolutionStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/describe-app-version-resources-resolution-status");
  let body: any;
  body = JSON.stringify(
    take(input, {
      appArn: [],
      appVersion: [],
      resolutionId: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeAppVersionTemplateCommand
 */
export const se_DescribeAppVersionTemplateCommand = async (
  input: DescribeAppVersionTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/describe-app-version-template");
  let body: any;
  body = JSON.stringify(
    take(input, {
      appArn: [],
      appVersion: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeDraftAppVersionResourcesImportStatusCommand
 */
export const se_DescribeDraftAppVersionResourcesImportStatusCommand = async (
  input: DescribeDraftAppVersionResourcesImportStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/describe-draft-app-version-resources-import-status");
  let body: any;
  body = JSON.stringify(
    take(input, {
      appArn: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeMetricsExportCommand
 */
export const se_DescribeMetricsExportCommand = async (
  input: DescribeMetricsExportCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/describe-metrics-export");
  let body: any;
  body = JSON.stringify(
    take(input, {
      metricsExportId: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeResiliencyPolicyCommand
 */
export const se_DescribeResiliencyPolicyCommand = async (
  input: DescribeResiliencyPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/describe-resiliency-policy");
  let body: any;
  body = JSON.stringify(
    take(input, {
      policyArn: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeResourceGroupingRecommendationTaskCommand
 */
export const se_DescribeResourceGroupingRecommendationTaskCommand = async (
  input: DescribeResourceGroupingRecommendationTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/describe-resource-grouping-recommendation-task");
  let body: any;
  body = JSON.stringify(
    take(input, {
      appArn: [],
      groupingId: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ImportResourcesToDraftAppVersionCommand
 */
export const se_ImportResourcesToDraftAppVersionCommand = async (
  input: ImportResourcesToDraftAppVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/import-resources-to-draft-app-version");
  let body: any;
  body = JSON.stringify(
    take(input, {
      appArn: [],
      eksSources: (_) => _json(_),
      importStrategy: [],
      sourceArns: (_) => _json(_),
      terraformSources: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListAlarmRecommendationsCommand
 */
export const se_ListAlarmRecommendationsCommand = async (
  input: ListAlarmRecommendationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/list-alarm-recommendations");
  let body: any;
  body = JSON.stringify(
    take(input, {
      assessmentArn: [],
      maxResults: [],
      nextToken: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListAppAssessmentComplianceDriftsCommand
 */
export const se_ListAppAssessmentComplianceDriftsCommand = async (
  input: ListAppAssessmentComplianceDriftsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/list-app-assessment-compliance-drifts");
  let body: any;
  body = JSON.stringify(
    take(input, {
      assessmentArn: [],
      maxResults: [],
      nextToken: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListAppAssessmentResourceDriftsCommand
 */
export const se_ListAppAssessmentResourceDriftsCommand = async (
  input: ListAppAssessmentResourceDriftsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/list-app-assessment-resource-drifts");
  let body: any;
  body = JSON.stringify(
    take(input, {
      assessmentArn: [],
      maxResults: [],
      nextToken: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListAppAssessmentsCommand
 */
export const se_ListAppAssessmentsCommand = async (
  input: ListAppAssessmentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/list-app-assessments");
  const query: any = map({
    [_aA]: [, input[_aA]!],
    [_aN]: [, input[_aN]!],
    [_aS]: [() => input.assessmentStatus !== void 0, () => input[_aS]! || []],
    [_cS]: [, input[_cS]!],
    [_i]: [, input[_i]!],
    [_rO]: [() => input.reverseOrder !== void 0, () => input[_rO]!.toString()],
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListAppComponentCompliancesCommand
 */
export const se_ListAppComponentCompliancesCommand = async (
  input: ListAppComponentCompliancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/list-app-component-compliances");
  let body: any;
  body = JSON.stringify(
    take(input, {
      assessmentArn: [],
      maxResults: [],
      nextToken: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListAppComponentRecommendationsCommand
 */
export const se_ListAppComponentRecommendationsCommand = async (
  input: ListAppComponentRecommendationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/list-app-component-recommendations");
  let body: any;
  body = JSON.stringify(
    take(input, {
      assessmentArn: [],
      maxResults: [],
      nextToken: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListAppInputSourcesCommand
 */
export const se_ListAppInputSourcesCommand = async (
  input: ListAppInputSourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/list-app-input-sources");
  let body: any;
  body = JSON.stringify(
    take(input, {
      appArn: [],
      appVersion: [],
      maxResults: [],
      nextToken: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListAppsCommand
 */
export const se_ListAppsCommand = async (
  input: ListAppsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/list-apps");
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_n]: [, input[_n]!],
    [_aA]: [, input[_aA]!],
    [_fLAT]: [() => input.fromLastAssessmentTime !== void 0, () => __serializeDateTime(input[_fLAT]!).toString()],
    [_tLAT]: [() => input.toLastAssessmentTime !== void 0, () => __serializeDateTime(input[_tLAT]!).toString()],
    [_rO]: [() => input.reverseOrder !== void 0, () => input[_rO]!.toString()],
    [_aAA]: [, input[_aAA]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListAppVersionAppComponentsCommand
 */
export const se_ListAppVersionAppComponentsCommand = async (
  input: ListAppVersionAppComponentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/list-app-version-app-components");
  let body: any;
  body = JSON.stringify(
    take(input, {
      appArn: [],
      appVersion: [],
      maxResults: [],
      nextToken: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListAppVersionResourceMappingsCommand
 */
export const se_ListAppVersionResourceMappingsCommand = async (
  input: ListAppVersionResourceMappingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/list-app-version-resource-mappings");
  let body: any;
  body = JSON.stringify(
    take(input, {
      appArn: [],
      appVersion: [],
      maxResults: [],
      nextToken: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListAppVersionResourcesCommand
 */
export const se_ListAppVersionResourcesCommand = async (
  input: ListAppVersionResourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/list-app-version-resources");
  let body: any;
  body = JSON.stringify(
    take(input, {
      appArn: [],
      appVersion: [],
      maxResults: [],
      nextToken: [],
      resolutionId: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListAppVersionsCommand
 */
export const se_ListAppVersionsCommand = async (
  input: ListAppVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/list-app-versions");
  let body: any;
  body = JSON.stringify(
    take(input, {
      appArn: [],
      endTime: (_) => _.getTime() / 1_000,
      maxResults: [],
      nextToken: [],
      startTime: (_) => _.getTime() / 1_000,
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListMetricsCommand
 */
export const se_ListMetricsCommand = async (
  input: ListMetricsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/list-metrics");
  let body: any;
  body = JSON.stringify(
    take(input, {
      conditions: (_) => _json(_),
      dataSource: [],
      fields: (_) => _json(_),
      maxResults: [],
      nextToken: [],
      sorts: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListRecommendationTemplatesCommand
 */
export const se_ListRecommendationTemplatesCommand = async (
  input: ListRecommendationTemplatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/list-recommendation-templates");
  const query: any = map({
    [_aAs]: [, input[_aAs]!],
    [_rO]: [() => input.reverseOrder !== void 0, () => input[_rO]!.toString()],
    [_s]: [() => input.status !== void 0, () => input[_s]! || []],
    [_rTA]: [, input[_rTA]!],
    [_n]: [, input[_n]!],
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListResiliencyPoliciesCommand
 */
export const se_ListResiliencyPoliciesCommand = async (
  input: ListResiliencyPoliciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/list-resiliency-policies");
  const query: any = map({
    [_pN]: [, input[_pN]!],
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListResourceGroupingRecommendationsCommand
 */
export const se_ListResourceGroupingRecommendationsCommand = async (
  input: ListResourceGroupingRecommendationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/list-resource-grouping-recommendations");
  const query: any = map({
    [_aA]: [, input[_aA]!],
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListSopRecommendationsCommand
 */
export const se_ListSopRecommendationsCommand = async (
  input: ListSopRecommendationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/list-sop-recommendations");
  let body: any;
  body = JSON.stringify(
    take(input, {
      assessmentArn: [],
      maxResults: [],
      nextToken: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListSuggestedResiliencyPoliciesCommand
 */
export const se_ListSuggestedResiliencyPoliciesCommand = async (
  input: ListSuggestedResiliencyPoliciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/list-suggested-resiliency-policies");
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
 * serializeAws_restJson1ListTestRecommendationsCommand
 */
export const se_ListTestRecommendationsCommand = async (
  input: ListTestRecommendationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/list-test-recommendations");
  let body: any;
  body = JSON.stringify(
    take(input, {
      assessmentArn: [],
      maxResults: [],
      nextToken: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListUnsupportedAppVersionResourcesCommand
 */
export const se_ListUnsupportedAppVersionResourcesCommand = async (
  input: ListUnsupportedAppVersionResourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/list-unsupported-app-version-resources");
  let body: any;
  body = JSON.stringify(
    take(input, {
      appArn: [],
      appVersion: [],
      maxResults: [],
      nextToken: [],
      resolutionId: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PublishAppVersionCommand
 */
export const se_PublishAppVersionCommand = async (
  input: PublishAppVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/publish-app-version");
  let body: any;
  body = JSON.stringify(
    take(input, {
      appArn: [],
      versionName: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutDraftAppVersionTemplateCommand
 */
export const se_PutDraftAppVersionTemplateCommand = async (
  input: PutDraftAppVersionTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/put-draft-app-version-template");
  let body: any;
  body = JSON.stringify(
    take(input, {
      appArn: [],
      appTemplateBody: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1RejectResourceGroupingRecommendationsCommand
 */
export const se_RejectResourceGroupingRecommendationsCommand = async (
  input: RejectResourceGroupingRecommendationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/reject-resource-grouping-recommendations");
  let body: any;
  body = JSON.stringify(
    take(input, {
      appArn: [],
      entries: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1RemoveDraftAppVersionResourceMappingsCommand
 */
export const se_RemoveDraftAppVersionResourceMappingsCommand = async (
  input: RemoveDraftAppVersionResourceMappingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/remove-draft-app-version-resource-mappings");
  let body: any;
  body = JSON.stringify(
    take(input, {
      appArn: [],
      appRegistryAppNames: (_) => _json(_),
      eksSourceNames: (_) => _json(_),
      logicalStackNames: (_) => _json(_),
      resourceGroupNames: (_) => _json(_),
      resourceNames: (_) => _json(_),
      terraformSourceNames: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ResolveAppVersionResourcesCommand
 */
export const se_ResolveAppVersionResourcesCommand = async (
  input: ResolveAppVersionResourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/resolve-app-version-resources");
  let body: any;
  body = JSON.stringify(
    take(input, {
      appArn: [],
      appVersion: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StartAppAssessmentCommand
 */
export const se_StartAppAssessmentCommand = async (
  input: StartAppAssessmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/start-app-assessment");
  let body: any;
  body = JSON.stringify(
    take(input, {
      appArn: [],
      appVersion: [],
      assessmentName: [],
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StartMetricsExportCommand
 */
export const se_StartMetricsExportCommand = async (
  input: StartMetricsExportCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/start-metrics-export");
  let body: any;
  body = JSON.stringify(
    take(input, {
      bucketName: [],
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StartResourceGroupingRecommendationTaskCommand
 */
export const se_StartResourceGroupingRecommendationTaskCommand = async (
  input: StartResourceGroupingRecommendationTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/start-resource-grouping-recommendation-task");
  let body: any;
  body = JSON.stringify(
    take(input, {
      appArn: [],
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
 * serializeAws_restJson1UpdateAppCommand
 */
export const se_UpdateAppCommand = async (
  input: UpdateAppCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/update-app");
  let body: any;
  body = JSON.stringify(
    take(input, {
      appArn: [],
      assessmentSchedule: [],
      clearResiliencyPolicyArn: [],
      description: [],
      eventSubscriptions: (_) => _json(_),
      permissionModel: (_) => _json(_),
      policyArn: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateAppVersionCommand
 */
export const se_UpdateAppVersionCommand = async (
  input: UpdateAppVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/update-app-version");
  let body: any;
  body = JSON.stringify(
    take(input, {
      additionalInfo: (_) => _json(_),
      appArn: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateAppVersionAppComponentCommand
 */
export const se_UpdateAppVersionAppComponentCommand = async (
  input: UpdateAppVersionAppComponentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/update-app-version-app-component");
  let body: any;
  body = JSON.stringify(
    take(input, {
      additionalInfo: (_) => _json(_),
      appArn: [],
      id: [],
      name: [],
      type: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateAppVersionResourceCommand
 */
export const se_UpdateAppVersionResourceCommand = async (
  input: UpdateAppVersionResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/update-app-version-resource");
  let body: any;
  body = JSON.stringify(
    take(input, {
      additionalInfo: (_) => _json(_),
      appArn: [],
      appComponents: (_) => _json(_),
      awsAccountId: [],
      awsRegion: [],
      excluded: [],
      logicalResourceId: (_) => _json(_),
      physicalResourceId: [],
      resourceName: [],
      resourceType: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateResiliencyPolicyCommand
 */
export const se_UpdateResiliencyPolicyCommand = async (
  input: UpdateResiliencyPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/update-resiliency-policy");
  let body: any;
  body = JSON.stringify(
    take(input, {
      dataLocationConstraint: [],
      policy: (_) => _json(_),
      policyArn: [],
      policyDescription: [],
      policyName: [],
      tier: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1AcceptResourceGroupingRecommendationsCommand
 */
export const de_AcceptResourceGroupingRecommendationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AcceptResourceGroupingRecommendationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    appArn: __expectString,
    failedEntries: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1AddDraftAppVersionResourceMappingsCommand
 */
export const de_AddDraftAppVersionResourceMappingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddDraftAppVersionResourceMappingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    appArn: __expectString,
    appVersion: __expectString,
    resourceMappings: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1BatchUpdateRecommendationStatusCommand
 */
export const de_BatchUpdateRecommendationStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchUpdateRecommendationStatusCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    appArn: __expectString,
    failedEntries: _json,
    successfulEntries: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateAppCommand
 */
export const de_CreateAppCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAppCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    app: (_) => de_App(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateAppVersionAppComponentCommand
 */
export const de_CreateAppVersionAppComponentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAppVersionAppComponentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    appArn: __expectString,
    appComponent: _json,
    appVersion: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateAppVersionResourceCommand
 */
export const de_CreateAppVersionResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAppVersionResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    appArn: __expectString,
    appVersion: __expectString,
    physicalResource: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateRecommendationTemplateCommand
 */
export const de_CreateRecommendationTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRecommendationTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    recommendationTemplate: (_) => de_RecommendationTemplate(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateResiliencyPolicyCommand
 */
export const de_CreateResiliencyPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateResiliencyPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    policy: (_) => de_ResiliencyPolicy(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteAppCommand
 */
export const de_DeleteAppCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAppCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    appArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteAppAssessmentCommand
 */
export const de_DeleteAppAssessmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAppAssessmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    assessmentArn: __expectString,
    assessmentStatus: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteAppInputSourceCommand
 */
export const de_DeleteAppInputSourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAppInputSourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    appArn: __expectString,
    appInputSource: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteAppVersionAppComponentCommand
 */
export const de_DeleteAppVersionAppComponentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAppVersionAppComponentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    appArn: __expectString,
    appComponent: _json,
    appVersion: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteAppVersionResourceCommand
 */
export const de_DeleteAppVersionResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAppVersionResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    appArn: __expectString,
    appVersion: __expectString,
    physicalResource: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteRecommendationTemplateCommand
 */
export const de_DeleteRecommendationTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRecommendationTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    recommendationTemplateArn: __expectString,
    status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteResiliencyPolicyCommand
 */
export const de_DeleteResiliencyPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResiliencyPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    policyArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeAppCommand
 */
export const de_DescribeAppCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAppCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    app: (_) => de_App(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeAppAssessmentCommand
 */
export const de_DescribeAppAssessmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAppAssessmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    assessment: (_) => de_AppAssessment(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeAppVersionCommand
 */
export const de_DescribeAppVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAppVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    additionalInfo: _json,
    appArn: __expectString,
    appVersion: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeAppVersionAppComponentCommand
 */
export const de_DescribeAppVersionAppComponentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAppVersionAppComponentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    appArn: __expectString,
    appComponent: _json,
    appVersion: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeAppVersionResourceCommand
 */
export const de_DescribeAppVersionResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAppVersionResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    appArn: __expectString,
    appVersion: __expectString,
    physicalResource: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeAppVersionResourcesResolutionStatusCommand
 */
export const de_DescribeAppVersionResourcesResolutionStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAppVersionResourcesResolutionStatusCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    appArn: __expectString,
    appVersion: __expectString,
    errorMessage: __expectString,
    resolutionId: __expectString,
    status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeAppVersionTemplateCommand
 */
export const de_DescribeAppVersionTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAppVersionTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    appArn: __expectString,
    appTemplateBody: __expectString,
    appVersion: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeDraftAppVersionResourcesImportStatusCommand
 */
export const de_DescribeDraftAppVersionResourcesImportStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDraftAppVersionResourcesImportStatusCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    appArn: __expectString,
    appVersion: __expectString,
    errorDetails: _json,
    errorMessage: __expectString,
    status: __expectString,
    statusChangeTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeMetricsExportCommand
 */
export const de_DescribeMetricsExportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMetricsExportCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    errorMessage: __expectString,
    exportLocation: _json,
    metricsExportId: __expectString,
    status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeResiliencyPolicyCommand
 */
export const de_DescribeResiliencyPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeResiliencyPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    policy: (_) => de_ResiliencyPolicy(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeResourceGroupingRecommendationTaskCommand
 */
export const de_DescribeResourceGroupingRecommendationTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeResourceGroupingRecommendationTaskCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    errorMessage: __expectString,
    groupingId: __expectString,
    status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ImportResourcesToDraftAppVersionCommand
 */
export const de_ImportResourcesToDraftAppVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportResourcesToDraftAppVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    appArn: __expectString,
    appVersion: __expectString,
    eksSources: _json,
    sourceArns: _json,
    status: __expectString,
    terraformSources: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListAlarmRecommendationsCommand
 */
export const de_ListAlarmRecommendationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAlarmRecommendationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    alarmRecommendations: _json,
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListAppAssessmentComplianceDriftsCommand
 */
export const de_ListAppAssessmentComplianceDriftsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAppAssessmentComplianceDriftsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    complianceDrifts: _json,
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListAppAssessmentResourceDriftsCommand
 */
export const de_ListAppAssessmentResourceDriftsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAppAssessmentResourceDriftsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    resourceDrifts: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListAppAssessmentsCommand
 */
export const de_ListAppAssessmentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAppAssessmentsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    assessmentSummaries: (_) => de_AppAssessmentSummaryList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListAppComponentCompliancesCommand
 */
export const de_ListAppComponentCompliancesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAppComponentCompliancesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    componentCompliances: (_) => de_ComponentCompliancesList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListAppComponentRecommendationsCommand
 */
export const de_ListAppComponentRecommendationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAppComponentRecommendationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    componentRecommendations: (_) => de_ComponentRecommendationList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListAppInputSourcesCommand
 */
export const de_ListAppInputSourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAppInputSourcesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    appInputSources: _json,
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListAppsCommand
 */
export const de_ListAppsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAppsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    appSummaries: (_) => de_AppSummaryList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListAppVersionAppComponentsCommand
 */
export const de_ListAppVersionAppComponentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAppVersionAppComponentsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    appArn: __expectString,
    appComponents: _json,
    appVersion: __expectString,
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListAppVersionResourceMappingsCommand
 */
export const de_ListAppVersionResourceMappingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAppVersionResourceMappingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    resourceMappings: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListAppVersionResourcesCommand
 */
export const de_ListAppVersionResourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAppVersionResourcesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    physicalResources: _json,
    resolutionId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListAppVersionsCommand
 */
export const de_ListAppVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAppVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    appVersions: (_) => de_AppVersionList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListMetricsCommand
 */
export const de_ListMetricsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMetricsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    rows: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListRecommendationTemplatesCommand
 */
export const de_ListRecommendationTemplatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRecommendationTemplatesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    recommendationTemplates: (_) => de_RecommendationTemplateList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListResiliencyPoliciesCommand
 */
export const de_ListResiliencyPoliciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResiliencyPoliciesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    resiliencyPolicies: (_) => de_ResiliencyPolicies(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListResourceGroupingRecommendationsCommand
 */
export const de_ListResourceGroupingRecommendationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResourceGroupingRecommendationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    groupingRecommendations: (_) => de_GroupingRecommendationList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListSopRecommendationsCommand
 */
export const de_ListSopRecommendationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSopRecommendationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    sopRecommendations: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListSuggestedResiliencyPoliciesCommand
 */
export const de_ListSuggestedResiliencyPoliciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSuggestedResiliencyPoliciesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    resiliencyPolicies: (_) => de_ResiliencyPolicies(_, context),
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
 * deserializeAws_restJson1ListTestRecommendationsCommand
 */
export const de_ListTestRecommendationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTestRecommendationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    testRecommendations: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListUnsupportedAppVersionResourcesCommand
 */
export const de_ListUnsupportedAppVersionResourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListUnsupportedAppVersionResourcesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    resolutionId: __expectString,
    unsupportedResources: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1PublishAppVersionCommand
 */
export const de_PublishAppVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PublishAppVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    appArn: __expectString,
    appVersion: __expectString,
    identifier: __expectLong,
    versionName: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1PutDraftAppVersionTemplateCommand
 */
export const de_PutDraftAppVersionTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutDraftAppVersionTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    appArn: __expectString,
    appVersion: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1RejectResourceGroupingRecommendationsCommand
 */
export const de_RejectResourceGroupingRecommendationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RejectResourceGroupingRecommendationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    appArn: __expectString,
    failedEntries: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1RemoveDraftAppVersionResourceMappingsCommand
 */
export const de_RemoveDraftAppVersionResourceMappingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveDraftAppVersionResourceMappingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    appArn: __expectString,
    appVersion: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ResolveAppVersionResourcesCommand
 */
export const de_ResolveAppVersionResourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResolveAppVersionResourcesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    appArn: __expectString,
    appVersion: __expectString,
    resolutionId: __expectString,
    status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1StartAppAssessmentCommand
 */
export const de_StartAppAssessmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartAppAssessmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    assessment: (_) => de_AppAssessment(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1StartMetricsExportCommand
 */
export const de_StartMetricsExportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartMetricsExportCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    metricsExportId: __expectString,
    status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1StartResourceGroupingRecommendationTaskCommand
 */
export const de_StartResourceGroupingRecommendationTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartResourceGroupingRecommendationTaskCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    appArn: __expectString,
    errorMessage: __expectString,
    groupingId: __expectString,
    status: __expectString,
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
 * deserializeAws_restJson1UpdateAppCommand
 */
export const de_UpdateAppCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAppCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    app: (_) => de_App(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateAppVersionCommand
 */
export const de_UpdateAppVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAppVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    additionalInfo: _json,
    appArn: __expectString,
    appVersion: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateAppVersionAppComponentCommand
 */
export const de_UpdateAppVersionAppComponentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAppVersionAppComponentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    appArn: __expectString,
    appComponent: _json,
    appVersion: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateAppVersionResourceCommand
 */
export const de_UpdateAppVersionResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAppVersionResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    appArn: __expectString,
    appVersion: __expectString,
    physicalResource: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateResiliencyPolicyCommand
 */
export const de_UpdateResiliencyPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateResiliencyPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    policy: (_) => de_ResiliencyPolicy(_, context),
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
    case "ConflictException":
    case "com.amazonaws.resiliencehub#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.resiliencehub#ServiceQuotaExceededException":
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
 * deserializeAws_restJson1ConflictExceptionRes
 */
const de_ConflictExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ConflictException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
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
    retryAfterSeconds: __expectInt32,
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
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

// se_AcceptGroupingRecommendationEntries omitted.

// se_AcceptGroupingRecommendationEntry omitted.

// se_AdditionalInfoMap omitted.

// se_AdditionalInfoValueList omitted.

// se_AppComponentNameList omitted.

// se_ArnList omitted.

// se_Condition omitted.

// se_ConditionList omitted.

// se_DisruptionPolicy omitted.

// se_EksNamespaceList omitted.

// se_EksSource omitted.

// se_EksSourceClusterNamespace omitted.

// se_EksSourceList omitted.

// se_EntityNameList omitted.

// se_EventSubscription omitted.

// se_EventSubscriptionList omitted.

// se_FailurePolicy omitted.

// se_Field omitted.

// se_FieldList omitted.

// se_IamRoleArnList omitted.

// se_LogicalResourceId omitted.

// se_PermissionModel omitted.

// se_PhysicalResourceId omitted.

// se_RecommendationIdList omitted.

// se_RejectGroupingRecommendationEntries omitted.

// se_RejectGroupingRecommendationEntry omitted.

// se_RenderRecommendationTypeList omitted.

// se_ResourceMapping omitted.

// se_ResourceMappingList omitted.

// se_Sort omitted.

// se_SortList omitted.

// se_String255List omitted.

// se_TagMap omitted.

// se_TerraformSource omitted.

// se_TerraformSourceList omitted.

// se_UpdateRecommendationStatusItem omitted.

// se_UpdateRecommendationStatusRequestEntries omitted.

// se_UpdateRecommendationStatusRequestEntry omitted.

// de_AdditionalInfoMap omitted.

// de_AdditionalInfoValueList omitted.

// de_AlarmRecommendation omitted.

// de_AlarmRecommendationList omitted.

// de_AlarmReferenceIdList omitted.

/**
 * deserializeAws_restJson1App
 */
const de_App = (output: any, context: __SerdeContext): App => {
  return take(output, {
    appArn: __expectString,
    assessmentSchedule: __expectString,
    awsApplicationArn: __expectString,
    complianceStatus: __expectString,
    creationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    driftStatus: __expectString,
    eventSubscriptions: _json,
    lastAppComplianceEvaluationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    lastDriftEvaluationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    lastResiliencyScoreEvaluationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    name: __expectString,
    permissionModel: _json,
    policyArn: __expectString,
    resiliencyScore: __limitedParseDouble,
    rpoInSecs: __expectInt32,
    rtoInSecs: __expectInt32,
    status: __expectString,
    tags: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1AppAssessment
 */
const de_AppAssessment = (output: any, context: __SerdeContext): AppAssessment => {
  return take(output, {
    appArn: __expectString,
    appVersion: __expectString,
    assessmentArn: __expectString,
    assessmentName: __expectString,
    assessmentStatus: __expectString,
    compliance: _json,
    complianceStatus: __expectString,
    cost: (_: any) => de_Cost(_, context),
    driftStatus: __expectString,
    endTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    invoker: __expectString,
    message: __expectString,
    policy: (_: any) => de_ResiliencyPolicy(_, context),
    resiliencyScore: (_: any) => de_ResiliencyScore(_, context),
    resourceErrorsDetails: _json,
    startTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    summary: _json,
    tags: _json,
    versionName: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1AppAssessmentSummary
 */
const de_AppAssessmentSummary = (output: any, context: __SerdeContext): AppAssessmentSummary => {
  return take(output, {
    appArn: __expectString,
    appVersion: __expectString,
    assessmentArn: __expectString,
    assessmentName: __expectString,
    assessmentStatus: __expectString,
    complianceStatus: __expectString,
    cost: (_: any) => de_Cost(_, context),
    driftStatus: __expectString,
    endTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    invoker: __expectString,
    message: __expectString,
    resiliencyScore: __limitedParseDouble,
    startTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    versionName: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1AppAssessmentSummaryList
 */
const de_AppAssessmentSummaryList = (output: any, context: __SerdeContext): AppAssessmentSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AppAssessmentSummary(entry, context);
    });
  return retVal;
};

// de_AppComponent omitted.

/**
 * deserializeAws_restJson1AppComponentCompliance
 */
const de_AppComponentCompliance = (output: any, context: __SerdeContext): AppComponentCompliance => {
  return take(output, {
    appComponentName: __expectString,
    compliance: _json,
    cost: (_: any) => de_Cost(_, context),
    message: __expectString,
    resiliencyScore: (_: any) => de_ResiliencyScore(_, context),
    status: __expectString,
  }) as any;
};

// de_AppComponentList omitted.

// de_AppComponentNameList omitted.

// de_AppInputSource omitted.

// de_AppInputSourceList omitted.

/**
 * deserializeAws_restJson1AppSummary
 */
const de_AppSummary = (output: any, context: __SerdeContext): AppSummary => {
  return take(output, {
    appArn: __expectString,
    assessmentSchedule: __expectString,
    awsApplicationArn: __expectString,
    complianceStatus: __expectString,
    creationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    driftStatus: __expectString,
    lastAppComplianceEvaluationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    name: __expectString,
    resiliencyScore: __limitedParseDouble,
    rpoInSecs: __expectInt32,
    rtoInSecs: __expectInt32,
    status: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1AppSummaryList
 */
const de_AppSummaryList = (output: any, context: __SerdeContext): AppSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
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
      return de_AppVersionSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AppVersionSummary
 */
const de_AppVersionSummary = (output: any, context: __SerdeContext): AppVersionSummary => {
  return take(output, {
    appVersion: __expectString,
    creationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    identifier: __expectLong,
    versionName: __expectString,
  }) as any;
};

// de_ArnList omitted.

// de_AssessmentCompliance omitted.

// de_AssessmentRiskRecommendation omitted.

// de_AssessmentRiskRecommendationList omitted.

// de_AssessmentSummary omitted.

// de_BatchUpdateRecommendationStatusFailedEntries omitted.

// de_BatchUpdateRecommendationStatusFailedEntry omitted.

// de_BatchUpdateRecommendationStatusSuccessfulEntries omitted.

// de_BatchUpdateRecommendationStatusSuccessfulEntry omitted.

// de_ComplianceDrift omitted.

// de_ComplianceDriftList omitted.

/**
 * deserializeAws_restJson1ComponentCompliancesList
 */
const de_ComponentCompliancesList = (output: any, context: __SerdeContext): AppComponentCompliance[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AppComponentCompliance(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ComponentRecommendation
 */
const de_ComponentRecommendation = (output: any, context: __SerdeContext): ComponentRecommendation => {
  return take(output, {
    appComponentName: __expectString,
    configRecommendations: (_: any) => de_ConfigRecommendationList(_, context),
    recommendationStatus: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1ComponentRecommendationList
 */
const de_ComponentRecommendationList = (output: any, context: __SerdeContext): ComponentRecommendation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ComponentRecommendation(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ConfigRecommendation
 */
const de_ConfigRecommendation = (output: any, context: __SerdeContext): ConfigRecommendation => {
  return take(output, {
    appComponentName: __expectString,
    compliance: _json,
    cost: (_: any) => de_Cost(_, context),
    description: __expectString,
    haArchitecture: __expectString,
    name: __expectString,
    optimizationType: __expectString,
    recommendationCompliance: _json,
    referenceId: __expectString,
    suggestedChanges: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1ConfigRecommendationList
 */
const de_ConfigRecommendationList = (output: any, context: __SerdeContext): ConfigRecommendation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ConfigRecommendation(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Cost
 */
const de_Cost = (output: any, context: __SerdeContext): Cost => {
  return take(output, {
    amount: __limitedParseDouble,
    currency: __expectString,
    frequency: __expectString,
  }) as any;
};

// de_DisruptionCompliance omitted.

// de_DisruptionPolicy omitted.

/**
 * deserializeAws_restJson1DisruptionResiliencyScore
 */
const de_DisruptionResiliencyScore = (
  output: any,
  context: __SerdeContext
): Partial<Record<DisruptionType, number>> => {
  return Object.entries(output).reduce((acc: Partial<Record<DisruptionType, number>>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key as DisruptionType] = __limitedParseDouble(value) as any;
    return acc;
  }, {} as Partial<Record<DisruptionType, number>>);
};

// de_EksNamespaceList omitted.

// de_EksSource omitted.

// de_EksSourceClusterNamespace omitted.

// de_EksSourceList omitted.

// de_ErrorDetail omitted.

// de_ErrorDetailList omitted.

// de_EventSubscription omitted.

// de_EventSubscriptionList omitted.

// de_FailedGroupingRecommendationEntries omitted.

// de_FailedGroupingRecommendationEntry omitted.

// de_FailurePolicy omitted.

// de_GroupingAppComponent omitted.

/**
 * deserializeAws_restJson1GroupingRecommendation
 */
const de_GroupingRecommendation = (output: any, context: __SerdeContext): GroupingRecommendation => {
  return take(output, {
    confidenceLevel: __expectString,
    creationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    groupingAppComponent: _json,
    groupingRecommendationId: __expectString,
    recommendationReasons: _json,
    rejectionReason: __expectString,
    resources: _json,
    score: __limitedParseDouble,
    status: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1GroupingRecommendationList
 */
const de_GroupingRecommendationList = (output: any, context: __SerdeContext): GroupingRecommendation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_GroupingRecommendation(entry, context);
    });
  return retVal;
};

// de_GroupingResource omitted.

// de_GroupingResourceList omitted.

// de_IamRoleArnList omitted.

// de_LogicalResourceId omitted.

// de_PermissionModel omitted.

// de_PhysicalResource omitted.

// de_PhysicalResourceId omitted.

// de_PhysicalResourceList omitted.

// de_RecommendationCompliance omitted.

// de_RecommendationDisruptionCompliance omitted.

// de_RecommendationIdList omitted.

// de_RecommendationItem omitted.

// de_RecommendationItemList omitted.

/**
 * deserializeAws_restJson1RecommendationTemplate
 */
const de_RecommendationTemplate = (output: any, context: __SerdeContext): RecommendationTemplate => {
  return take(output, {
    appArn: __expectString,
    assessmentArn: __expectString,
    endTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    format: __expectString,
    message: __expectString,
    name: __expectString,
    needsReplacements: __expectBoolean,
    recommendationIds: _json,
    recommendationTemplateArn: __expectString,
    recommendationTypes: _json,
    startTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    status: __expectString,
    tags: _json,
    templatesLocation: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1RecommendationTemplateList
 */
const de_RecommendationTemplateList = (output: any, context: __SerdeContext): RecommendationTemplate[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_RecommendationTemplate(entry, context);
    });
  return retVal;
};

// de_RenderRecommendationTypeList omitted.

/**
 * deserializeAws_restJson1ResiliencyPolicies
 */
const de_ResiliencyPolicies = (output: any, context: __SerdeContext): ResiliencyPolicy[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ResiliencyPolicy(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ResiliencyPolicy
 */
const de_ResiliencyPolicy = (output: any, context: __SerdeContext): ResiliencyPolicy => {
  return take(output, {
    creationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    dataLocationConstraint: __expectString,
    estimatedCostTier: __expectString,
    policy: _json,
    policyArn: __expectString,
    policyDescription: __expectString,
    policyName: __expectString,
    tags: _json,
    tier: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1ResiliencyScore
 */
const de_ResiliencyScore = (output: any, context: __SerdeContext): ResiliencyScore => {
  return take(output, {
    componentScore: (_: any) => de_ScoringComponentResiliencyScores(_, context),
    disruptionScore: (_: any) => de_DisruptionResiliencyScore(_, context),
    score: __limitedParseDouble,
  }) as any;
};

// de_ResourceDrift omitted.

// de_ResourceDriftList omitted.

// de_ResourceError omitted.

// de_ResourceErrorList omitted.

// de_ResourceErrorsDetails omitted.

// de_ResourceIdentifier omitted.

// de_ResourceMapping omitted.

// de_ResourceMappingList omitted.

// de_Row omitted.

// de_RowList omitted.

// de_S3Location omitted.

/**
 * deserializeAws_restJson1ScoringComponentResiliencyScore
 */
const de_ScoringComponentResiliencyScore = (output: any, context: __SerdeContext): ScoringComponentResiliencyScore => {
  return take(output, {
    excludedCount: __expectLong,
    outstandingCount: __expectLong,
    possibleScore: __limitedParseDouble,
    score: __limitedParseDouble,
  }) as any;
};

/**
 * deserializeAws_restJson1ScoringComponentResiliencyScores
 */
const de_ScoringComponentResiliencyScores = (
  output: any,
  context: __SerdeContext
): Partial<Record<ResiliencyScoreType, ScoringComponentResiliencyScore>> => {
  return Object.entries(output).reduce(
    (acc: Partial<Record<ResiliencyScoreType, ScoringComponentResiliencyScore>>, [key, value]: [string, any]) => {
      if (value === null) {
        return acc;
      }
      acc[key as ResiliencyScoreType] = de_ScoringComponentResiliencyScore(value, context);
      return acc;
    },
    {} as Partial<Record<ResiliencyScoreType, ScoringComponentResiliencyScore>>
  );
};

// de_SopRecommendation omitted.

// de_SopRecommendationList omitted.

// de_String255List omitted.

// de_SuggestedChangesList omitted.

// de_TagMap omitted.

// de_TerraformSource omitted.

// de_TerraformSourceList omitted.

// de_TestRecommendation omitted.

// de_TestRecommendationList omitted.

// de_UnsupportedResource omitted.

// de_UnsupportedResourceList omitted.

// de_UpdateRecommendationStatusItem omitted.

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

const _aA = "appArn";
const _aAA = "awsApplicationArn";
const _aAs = "assessmentArn";
const _aN = "assessmentName";
const _aS = "assessmentStatus";
const _cS = "complianceStatus";
const _fLAT = "fromLastAssessmentTime";
const _i = "invoker";
const _mR = "maxResults";
const _n = "name";
const _nT = "nextToken";
const _pN = "policyName";
const _rO = "reverseOrder";
const _rTA = "recommendationTemplateArn";
const _s = "status";
const _tK = "tagKeys";
const _tLAT = "toLastAssessmentTime";
