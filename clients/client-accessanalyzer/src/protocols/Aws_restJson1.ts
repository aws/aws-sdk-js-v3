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
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  map,
  parseRfc3339DateTimeWithOffset as __parseRfc3339DateTimeWithOffset,
  resolvedPath as __resolvedPath,
  serializeDateTime as __serializeDateTime,
  strictParseInt32 as __strictParseInt32,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";
import { v4 as generateIdempotencyToken } from "uuid";

import { ApplyArchiveRuleCommandInput, ApplyArchiveRuleCommandOutput } from "../commands/ApplyArchiveRuleCommand";
import {
  CancelPolicyGenerationCommandInput,
  CancelPolicyGenerationCommandOutput,
} from "../commands/CancelPolicyGenerationCommand";
import {
  CheckAccessNotGrantedCommandInput,
  CheckAccessNotGrantedCommandOutput,
} from "../commands/CheckAccessNotGrantedCommand";
import { CheckNoNewAccessCommandInput, CheckNoNewAccessCommandOutput } from "../commands/CheckNoNewAccessCommand";
import {
  CheckNoPublicAccessCommandInput,
  CheckNoPublicAccessCommandOutput,
} from "../commands/CheckNoPublicAccessCommand";
import {
  CreateAccessPreviewCommandInput,
  CreateAccessPreviewCommandOutput,
} from "../commands/CreateAccessPreviewCommand";
import { CreateAnalyzerCommandInput, CreateAnalyzerCommandOutput } from "../commands/CreateAnalyzerCommand";
import { CreateArchiveRuleCommandInput, CreateArchiveRuleCommandOutput } from "../commands/CreateArchiveRuleCommand";
import { DeleteAnalyzerCommandInput, DeleteAnalyzerCommandOutput } from "../commands/DeleteAnalyzerCommand";
import { DeleteArchiveRuleCommandInput, DeleteArchiveRuleCommandOutput } from "../commands/DeleteArchiveRuleCommand";
import {
  GenerateFindingRecommendationCommandInput,
  GenerateFindingRecommendationCommandOutput,
} from "../commands/GenerateFindingRecommendationCommand";
import { GetAccessPreviewCommandInput, GetAccessPreviewCommandOutput } from "../commands/GetAccessPreviewCommand";
import {
  GetAnalyzedResourceCommandInput,
  GetAnalyzedResourceCommandOutput,
} from "../commands/GetAnalyzedResourceCommand";
import { GetAnalyzerCommandInput, GetAnalyzerCommandOutput } from "../commands/GetAnalyzerCommand";
import { GetArchiveRuleCommandInput, GetArchiveRuleCommandOutput } from "../commands/GetArchiveRuleCommand";
import { GetFindingCommandInput, GetFindingCommandOutput } from "../commands/GetFindingCommand";
import {
  GetFindingRecommendationCommandInput,
  GetFindingRecommendationCommandOutput,
} from "../commands/GetFindingRecommendationCommand";
import { GetFindingV2CommandInput, GetFindingV2CommandOutput } from "../commands/GetFindingV2Command";
import { GetGeneratedPolicyCommandInput, GetGeneratedPolicyCommandOutput } from "../commands/GetGeneratedPolicyCommand";
import {
  ListAccessPreviewFindingsCommandInput,
  ListAccessPreviewFindingsCommandOutput,
} from "../commands/ListAccessPreviewFindingsCommand";
import { ListAccessPreviewsCommandInput, ListAccessPreviewsCommandOutput } from "../commands/ListAccessPreviewsCommand";
import {
  ListAnalyzedResourcesCommandInput,
  ListAnalyzedResourcesCommandOutput,
} from "../commands/ListAnalyzedResourcesCommand";
import { ListAnalyzersCommandInput, ListAnalyzersCommandOutput } from "../commands/ListAnalyzersCommand";
import { ListArchiveRulesCommandInput, ListArchiveRulesCommandOutput } from "../commands/ListArchiveRulesCommand";
import { ListFindingsCommandInput, ListFindingsCommandOutput } from "../commands/ListFindingsCommand";
import { ListFindingsV2CommandInput, ListFindingsV2CommandOutput } from "../commands/ListFindingsV2Command";
import {
  ListPolicyGenerationsCommandInput,
  ListPolicyGenerationsCommandOutput,
} from "../commands/ListPolicyGenerationsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import {
  StartPolicyGenerationCommandInput,
  StartPolicyGenerationCommandOutput,
} from "../commands/StartPolicyGenerationCommand";
import { StartResourceScanCommandInput, StartResourceScanCommandOutput } from "../commands/StartResourceScanCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateArchiveRuleCommandInput, UpdateArchiveRuleCommandOutput } from "../commands/UpdateArchiveRuleCommand";
import { UpdateFindingsCommandInput, UpdateFindingsCommandOutput } from "../commands/UpdateFindingsCommand";
import { ValidatePolicyCommandInput, ValidatePolicyCommandOutput } from "../commands/ValidatePolicyCommand";
import { AccessAnalyzerServiceException as __BaseException } from "../models/AccessAnalyzerServiceException";
import {
  Access,
  AccessDeniedException,
  AccessPreview,
  AccessPreviewFinding,
  AccessPreviewSummary,
  AclGrantee,
  AnalyzedResource,
  AnalyzerConfiguration,
  AnalyzerSummary,
  ArchiveRuleSummary,
  CloudTrailDetails,
  CloudTrailProperties,
  Configuration,
  ConflictException,
  Criterion,
  DynamodbStreamConfiguration,
  DynamodbTableConfiguration,
  EbsSnapshotConfiguration,
  EcrRepositoryConfiguration,
  EfsFileSystemConfiguration,
  Finding,
  FindingDetails,
  FindingSummary,
  FindingSummaryV2,
  GeneratedPolicyProperties,
  GeneratedPolicyResult,
  IamRoleConfiguration,
  InlineArchiveRule,
  InternalServerException,
  InternetConfiguration,
  InvalidParameterException,
  JobDetails,
  KmsGrantConfiguration,
  KmsGrantConstraints,
  KmsGrantOperation,
  KmsKeyConfiguration,
  NetworkOriginConfiguration,
  PolicyGeneration,
  PolicyGenerationDetails,
  RdsDbClusterSnapshotAttributeValue,
  RdsDbClusterSnapshotConfiguration,
  RdsDbSnapshotAttributeValue,
  RdsDbSnapshotConfiguration,
  RecommendedStep,
  ResourceNotFoundException,
  S3AccessPointConfiguration,
  S3BucketAclGrantConfiguration,
  S3BucketConfiguration,
  S3ExpressDirectoryBucketConfiguration,
  S3PublicAccessBlockConfiguration,
  SecretsManagerSecretConfiguration,
  ServiceQuotaExceededException,
  SnsTopicConfiguration,
  SortCriteria,
  SqsQueueConfiguration,
  ThrottlingException,
  Trail,
  UnprocessableEntityException,
  UnusedAccessConfiguration,
  UnusedAction,
  UnusedIamRoleDetails,
  UnusedIamUserAccessKeyDetails,
  UnusedIamUserPasswordDetails,
  UnusedPermissionDetails,
  UnusedPermissionsRecommendedStep,
  ValidationException,
  VpcConfiguration,
} from "../models/models_0";

/**
 * serializeAws_restJson1ApplyArchiveRuleCommand
 */
export const se_ApplyArchiveRuleCommand = async (
  input: ApplyArchiveRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/archive-rule");
  let body: any;
  body = JSON.stringify(
    take(input, {
      analyzerArn: [],
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      ruleName: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CancelPolicyGenerationCommand
 */
export const se_CancelPolicyGenerationCommand = async (
  input: CancelPolicyGenerationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/policy/generation/{jobId}");
  b.p("jobId", () => input.jobId!, "{jobId}", false);
  let body: any;
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CheckAccessNotGrantedCommand
 */
export const se_CheckAccessNotGrantedCommand = async (
  input: CheckAccessNotGrantedCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/policy/check-access-not-granted");
  let body: any;
  body = JSON.stringify(
    take(input, {
      access: (_) => _json(_),
      policyDocument: [],
      policyType: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CheckNoNewAccessCommand
 */
export const se_CheckNoNewAccessCommand = async (
  input: CheckNoNewAccessCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/policy/check-no-new-access");
  let body: any;
  body = JSON.stringify(
    take(input, {
      existingPolicyDocument: [],
      newPolicyDocument: [],
      policyType: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CheckNoPublicAccessCommand
 */
export const se_CheckNoPublicAccessCommand = async (
  input: CheckNoPublicAccessCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/policy/check-no-public-access");
  let body: any;
  body = JSON.stringify(
    take(input, {
      policyDocument: [],
      resourceType: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateAccessPreviewCommand
 */
export const se_CreateAccessPreviewCommand = async (
  input: CreateAccessPreviewCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/access-preview");
  let body: any;
  body = JSON.stringify(
    take(input, {
      analyzerArn: [],
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      configurations: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateAnalyzerCommand
 */
export const se_CreateAnalyzerCommand = async (
  input: CreateAnalyzerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/analyzer");
  let body: any;
  body = JSON.stringify(
    take(input, {
      analyzerName: [],
      archiveRules: (_) => _json(_),
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      configuration: (_) => _json(_),
      tags: (_) => _json(_),
      type: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateArchiveRuleCommand
 */
export const se_CreateArchiveRuleCommand = async (
  input: CreateArchiveRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/analyzer/{analyzerName}/archive-rule");
  b.p("analyzerName", () => input.analyzerName!, "{analyzerName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      filter: (_) => _json(_),
      ruleName: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteAnalyzerCommand
 */
export const se_DeleteAnalyzerCommand = async (
  input: DeleteAnalyzerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/analyzer/{analyzerName}");
  b.p("analyzerName", () => input.analyzerName!, "{analyzerName}", false);
  const query: any = map({
    [_cT]: [, input[_cT] ?? generateIdempotencyToken()],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteArchiveRuleCommand
 */
export const se_DeleteArchiveRuleCommand = async (
  input: DeleteArchiveRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/analyzer/{analyzerName}/archive-rule/{ruleName}");
  b.p("analyzerName", () => input.analyzerName!, "{analyzerName}", false);
  b.p("ruleName", () => input.ruleName!, "{ruleName}", false);
  const query: any = map({
    [_cT]: [, input[_cT] ?? generateIdempotencyToken()],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GenerateFindingRecommendationCommand
 */
export const se_GenerateFindingRecommendationCommand = async (
  input: GenerateFindingRecommendationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/recommendation/{id}");
  b.p("id", () => input.id!, "{id}", false);
  const query: any = map({
    [_aA]: [, __expectNonNull(input[_aA]!, `analyzerArn`)],
  });
  let body: any;
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetAccessPreviewCommand
 */
export const se_GetAccessPreviewCommand = async (
  input: GetAccessPreviewCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/access-preview/{accessPreviewId}");
  b.p("accessPreviewId", () => input.accessPreviewId!, "{accessPreviewId}", false);
  const query: any = map({
    [_aA]: [, __expectNonNull(input[_aA]!, `analyzerArn`)],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetAnalyzedResourceCommand
 */
export const se_GetAnalyzedResourceCommand = async (
  input: GetAnalyzedResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/analyzed-resource");
  const query: any = map({
    [_aA]: [, __expectNonNull(input[_aA]!, `analyzerArn`)],
    [_rA]: [, __expectNonNull(input[_rA]!, `resourceArn`)],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetAnalyzerCommand
 */
export const se_GetAnalyzerCommand = async (
  input: GetAnalyzerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/analyzer/{analyzerName}");
  b.p("analyzerName", () => input.analyzerName!, "{analyzerName}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetArchiveRuleCommand
 */
export const se_GetArchiveRuleCommand = async (
  input: GetArchiveRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/analyzer/{analyzerName}/archive-rule/{ruleName}");
  b.p("analyzerName", () => input.analyzerName!, "{analyzerName}", false);
  b.p("ruleName", () => input.ruleName!, "{ruleName}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetFindingCommand
 */
export const se_GetFindingCommand = async (
  input: GetFindingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/finding/{id}");
  b.p("id", () => input.id!, "{id}", false);
  const query: any = map({
    [_aA]: [, __expectNonNull(input[_aA]!, `analyzerArn`)],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetFindingRecommendationCommand
 */
export const se_GetFindingRecommendationCommand = async (
  input: GetFindingRecommendationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/recommendation/{id}");
  b.p("id", () => input.id!, "{id}", false);
  const query: any = map({
    [_aA]: [, __expectNonNull(input[_aA]!, `analyzerArn`)],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetFindingV2Command
 */
export const se_GetFindingV2Command = async (
  input: GetFindingV2CommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/findingv2/{id}");
  b.p("id", () => input.id!, "{id}", false);
  const query: any = map({
    [_aA]: [, __expectNonNull(input[_aA]!, `analyzerArn`)],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetGeneratedPolicyCommand
 */
export const se_GetGeneratedPolicyCommand = async (
  input: GetGeneratedPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/policy/generation/{jobId}");
  b.p("jobId", () => input.jobId!, "{jobId}", false);
  const query: any = map({
    [_iRP]: [() => input.includeResourcePlaceholders !== void 0, () => input[_iRP]!.toString()],
    [_iSLT]: [() => input.includeServiceLevelTemplate !== void 0, () => input[_iSLT]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListAccessPreviewFindingsCommand
 */
export const se_ListAccessPreviewFindingsCommand = async (
  input: ListAccessPreviewFindingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/access-preview/{accessPreviewId}");
  b.p("accessPreviewId", () => input.accessPreviewId!, "{accessPreviewId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      analyzerArn: [],
      filter: (_) => _json(_),
      maxResults: [],
      nextToken: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListAccessPreviewsCommand
 */
export const se_ListAccessPreviewsCommand = async (
  input: ListAccessPreviewsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/access-preview");
  const query: any = map({
    [_aA]: [, __expectNonNull(input[_aA]!, `analyzerArn`)],
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListAnalyzedResourcesCommand
 */
export const se_ListAnalyzedResourcesCommand = async (
  input: ListAnalyzedResourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/analyzed-resource");
  let body: any;
  body = JSON.stringify(
    take(input, {
      analyzerArn: [],
      maxResults: [],
      nextToken: [],
      resourceType: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListAnalyzersCommand
 */
export const se_ListAnalyzersCommand = async (
  input: ListAnalyzersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/analyzer");
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_t]: [, input[_t]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListArchiveRulesCommand
 */
export const se_ListArchiveRulesCommand = async (
  input: ListArchiveRulesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/analyzer/{analyzerName}/archive-rule");
  b.p("analyzerName", () => input.analyzerName!, "{analyzerName}", false);
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListFindingsCommand
 */
export const se_ListFindingsCommand = async (
  input: ListFindingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/finding");
  let body: any;
  body = JSON.stringify(
    take(input, {
      analyzerArn: [],
      filter: (_) => _json(_),
      maxResults: [],
      nextToken: [],
      sort: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListFindingsV2Command
 */
export const se_ListFindingsV2Command = async (
  input: ListFindingsV2CommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/findingv2");
  let body: any;
  body = JSON.stringify(
    take(input, {
      analyzerArn: [],
      filter: (_) => _json(_),
      maxResults: [],
      nextToken: [],
      sort: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListPolicyGenerationsCommand
 */
export const se_ListPolicyGenerationsCommand = async (
  input: ListPolicyGenerationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/policy/generation");
  const query: any = map({
    [_pA]: [, input[_pA]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
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
 * serializeAws_restJson1StartPolicyGenerationCommand
 */
export const se_StartPolicyGenerationCommand = async (
  input: StartPolicyGenerationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/policy/generation");
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      cloudTrailDetails: (_) => se_CloudTrailDetails(_, context),
      policyGenerationDetails: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StartResourceScanCommand
 */
export const se_StartResourceScanCommand = async (
  input: StartResourceScanCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/resource/scan");
  let body: any;
  body = JSON.stringify(
    take(input, {
      analyzerArn: [],
      resourceArn: [],
      resourceOwnerAccount: [],
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
 * serializeAws_restJson1UpdateArchiveRuleCommand
 */
export const se_UpdateArchiveRuleCommand = async (
  input: UpdateArchiveRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/analyzer/{analyzerName}/archive-rule/{ruleName}");
  b.p("analyzerName", () => input.analyzerName!, "{analyzerName}", false);
  b.p("ruleName", () => input.ruleName!, "{ruleName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      filter: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateFindingsCommand
 */
export const se_UpdateFindingsCommand = async (
  input: UpdateFindingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/finding");
  let body: any;
  body = JSON.stringify(
    take(input, {
      analyzerArn: [],
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      ids: (_) => _json(_),
      resourceArn: [],
      status: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ValidatePolicyCommand
 */
export const se_ValidatePolicyCommand = async (
  input: ValidatePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/policy/validation");
  const query: any = map({
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      locale: [],
      policyDocument: [],
      policyType: [],
      validatePolicyResourceType: [],
    })
  );
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1ApplyArchiveRuleCommand
 */
export const de_ApplyArchiveRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ApplyArchiveRuleCommandOutput> => {
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
 * deserializeAws_restJson1CancelPolicyGenerationCommand
 */
export const de_CancelPolicyGenerationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelPolicyGenerationCommandOutput> => {
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
 * deserializeAws_restJson1CheckAccessNotGrantedCommand
 */
export const de_CheckAccessNotGrantedCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CheckAccessNotGrantedCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    message: __expectString,
    reasons: _json,
    result: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CheckNoNewAccessCommand
 */
export const de_CheckNoNewAccessCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CheckNoNewAccessCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    message: __expectString,
    reasons: _json,
    result: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CheckNoPublicAccessCommand
 */
export const de_CheckNoPublicAccessCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CheckNoPublicAccessCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    message: __expectString,
    reasons: _json,
    result: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateAccessPreviewCommand
 */
export const de_CreateAccessPreviewCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAccessPreviewCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    id: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateAnalyzerCommand
 */
export const de_CreateAnalyzerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAnalyzerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    arn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateArchiveRuleCommand
 */
export const de_CreateArchiveRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateArchiveRuleCommandOutput> => {
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
 * deserializeAws_restJson1DeleteAnalyzerCommand
 */
export const de_DeleteAnalyzerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAnalyzerCommandOutput> => {
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
 * deserializeAws_restJson1DeleteArchiveRuleCommand
 */
export const de_DeleteArchiveRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteArchiveRuleCommandOutput> => {
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
 * deserializeAws_restJson1GenerateFindingRecommendationCommand
 */
export const de_GenerateFindingRecommendationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GenerateFindingRecommendationCommandOutput> => {
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
 * deserializeAws_restJson1GetAccessPreviewCommand
 */
export const de_GetAccessPreviewCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccessPreviewCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    accessPreview: (_) => de_AccessPreview(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetAnalyzedResourceCommand
 */
export const de_GetAnalyzedResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAnalyzedResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    resource: (_) => de_AnalyzedResource(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetAnalyzerCommand
 */
export const de_GetAnalyzerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAnalyzerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    analyzer: (_) => de_AnalyzerSummary(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetArchiveRuleCommand
 */
export const de_GetArchiveRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetArchiveRuleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    archiveRule: (_) => de_ArchiveRuleSummary(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetFindingCommand
 */
export const de_GetFindingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFindingCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    finding: (_) => de_Finding(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetFindingRecommendationCommand
 */
export const de_GetFindingRecommendationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFindingRecommendationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    completedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    error: _json,
    nextToken: __expectString,
    recommendationType: __expectString,
    recommendedSteps: (_) => de_RecommendedStepList(_, context),
    resourceArn: __expectString,
    startedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetFindingV2Command
 */
export const de_GetFindingV2Command = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFindingV2CommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    analyzedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    createdAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    error: __expectString,
    findingDetails: (_) => de_FindingDetailsList(_, context),
    findingType: __expectString,
    id: __expectString,
    nextToken: __expectString,
    resource: __expectString,
    resourceOwnerAccount: __expectString,
    resourceType: __expectString,
    status: __expectString,
    updatedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetGeneratedPolicyCommand
 */
export const de_GetGeneratedPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGeneratedPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    generatedPolicyResult: (_) => de_GeneratedPolicyResult(_, context),
    jobDetails: (_) => de_JobDetails(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListAccessPreviewFindingsCommand
 */
export const de_ListAccessPreviewFindingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAccessPreviewFindingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    findings: (_) => de_AccessPreviewFindingsList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListAccessPreviewsCommand
 */
export const de_ListAccessPreviewsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAccessPreviewsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    accessPreviews: (_) => de_AccessPreviewsList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListAnalyzedResourcesCommand
 */
export const de_ListAnalyzedResourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAnalyzedResourcesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    analyzedResources: _json,
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListAnalyzersCommand
 */
export const de_ListAnalyzersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAnalyzersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    analyzers: (_) => de_AnalyzersList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListArchiveRulesCommand
 */
export const de_ListArchiveRulesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListArchiveRulesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    archiveRules: (_) => de_ArchiveRulesList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListFindingsCommand
 */
export const de_ListFindingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFindingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    findings: (_) => de_FindingsList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListFindingsV2Command
 */
export const de_ListFindingsV2Command = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFindingsV2CommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    findings: (_) => de_FindingsListV2(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListPolicyGenerationsCommand
 */
export const de_ListPolicyGenerationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPolicyGenerationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    policyGenerations: (_) => de_PolicyGenerationList(_, context),
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
 * deserializeAws_restJson1StartPolicyGenerationCommand
 */
export const de_StartPolicyGenerationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartPolicyGenerationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    jobId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1StartResourceScanCommand
 */
export const de_StartResourceScanCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartResourceScanCommandOutput> => {
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
 * deserializeAws_restJson1UpdateArchiveRuleCommand
 */
export const de_UpdateArchiveRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateArchiveRuleCommandOutput> => {
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
 * deserializeAws_restJson1UpdateFindingsCommand
 */
export const de_UpdateFindingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFindingsCommandOutput> => {
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
 * deserializeAws_restJson1ValidatePolicyCommand
 */
export const de_ValidatePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ValidatePolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    findings: _json,
    nextToken: __expectString,
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
    case "com.amazonaws.accessanalyzer#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.accessanalyzer#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.accessanalyzer#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.accessanalyzer#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.accessanalyzer#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.accessanalyzer#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "UnprocessableEntityException":
    case "com.amazonaws.accessanalyzer#UnprocessableEntityException":
      throw await de_UnprocessableEntityExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.accessanalyzer#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.accessanalyzer#ServiceQuotaExceededException":
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
  const contents: any = map({
    [_rAS]: [() => void 0 !== parsedOutput.headers[_ra], () => __strictParseInt32(parsedOutput.headers[_ra])],
  });
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
 * deserializeAws_restJson1InvalidParameterExceptionRes
 */
const de_InvalidParameterExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new InvalidParameterException({
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
    resourceId: __expectString,
    resourceType: __expectString,
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
  const contents: any = map({
    [_rAS]: [() => void 0 !== parsedOutput.headers[_ra], () => __strictParseInt32(parsedOutput.headers[_ra])],
  });
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
 * deserializeAws_restJson1UnprocessableEntityExceptionRes
 */
const de_UnprocessableEntityExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnprocessableEntityException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new UnprocessableEntityException({
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

// se_Access omitted.

// se_AccessList omitted.

// se_AclGrantee omitted.

// se_ActionsList omitted.

// se_AnalyzerConfiguration omitted.

/**
 * serializeAws_restJson1CloudTrailDetails
 */
const se_CloudTrailDetails = (input: CloudTrailDetails, context: __SerdeContext): any => {
  return take(input, {
    accessRole: [],
    endTime: __serializeDateTime,
    startTime: __serializeDateTime,
    trails: _json,
  });
};

// se_Configuration omitted.

// se_ConfigurationsMap omitted.

// se_Criterion omitted.

// se_DynamodbStreamConfiguration omitted.

// se_DynamodbTableConfiguration omitted.

// se_EbsGroupList omitted.

// se_EbsSnapshotConfiguration omitted.

// se_EbsUserIdList omitted.

// se_EcrRepositoryConfiguration omitted.

// se_EfsFileSystemConfiguration omitted.

// se_FilterCriteriaMap omitted.

// se_FindingIdList omitted.

// se_IamRoleConfiguration omitted.

// se_InlineArchiveRule omitted.

// se_InlineArchiveRulesList omitted.

// se_InternetConfiguration omitted.

// se_KmsConstraintsMap omitted.

// se_KmsGrantConfiguration omitted.

// se_KmsGrantConfigurationsList omitted.

// se_KmsGrantConstraints omitted.

// se_KmsGrantOperationsList omitted.

// se_KmsKeyConfiguration omitted.

// se_KmsKeyPoliciesMap omitted.

// se_NetworkOriginConfiguration omitted.

// se_PolicyGenerationDetails omitted.

// se_RdsDbClusterSnapshotAccountIdsList omitted.

// se_RdsDbClusterSnapshotAttributesMap omitted.

// se_RdsDbClusterSnapshotAttributeValue omitted.

// se_RdsDbClusterSnapshotConfiguration omitted.

// se_RdsDbSnapshotAccountIdsList omitted.

// se_RdsDbSnapshotAttributesMap omitted.

// se_RdsDbSnapshotAttributeValue omitted.

// se_RdsDbSnapshotConfiguration omitted.

// se_RegionList omitted.

// se_ResourcesList omitted.

// se_S3AccessPointConfiguration omitted.

// se_S3AccessPointConfigurationsMap omitted.

// se_S3BucketAclGrantConfiguration omitted.

// se_S3BucketAclGrantConfigurationsList omitted.

// se_S3BucketConfiguration omitted.

// se_S3ExpressDirectoryBucketConfiguration omitted.

// se_S3PublicAccessBlockConfiguration omitted.

// se_SecretsManagerSecretConfiguration omitted.

// se_SnsTopicConfiguration omitted.

// se_SortCriteria omitted.

// se_SqsQueueConfiguration omitted.

// se_TagsMap omitted.

// se_Trail omitted.

// se_TrailList omitted.

// se_UnusedAccessConfiguration omitted.

// se_ValueList omitted.

// se_VpcConfiguration omitted.

/**
 * deserializeAws_restJson1AccessPreview
 */
const de_AccessPreview = (output: any, context: __SerdeContext): AccessPreview => {
  return take(output, {
    analyzerArn: __expectString,
    configurations: _json,
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    id: __expectString,
    status: __expectString,
    statusReason: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1AccessPreviewFinding
 */
const de_AccessPreviewFinding = (output: any, context: __SerdeContext): AccessPreviewFinding => {
  return take(output, {
    action: _json,
    changeType: __expectString,
    condition: _json,
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    error: __expectString,
    existingFindingId: __expectString,
    existingFindingStatus: __expectString,
    id: __expectString,
    isPublic: __expectBoolean,
    principal: _json,
    resource: __expectString,
    resourceControlPolicyRestriction: __expectString,
    resourceOwnerAccount: __expectString,
    resourceType: __expectString,
    sources: _json,
    status: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1AccessPreviewFindingsList
 */
const de_AccessPreviewFindingsList = (output: any, context: __SerdeContext): AccessPreviewFinding[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AccessPreviewFinding(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AccessPreviewsList
 */
const de_AccessPreviewsList = (output: any, context: __SerdeContext): AccessPreviewSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AccessPreviewSummary(entry, context);
    });
  return retVal;
};

// de_AccessPreviewStatusReason omitted.

/**
 * deserializeAws_restJson1AccessPreviewSummary
 */
const de_AccessPreviewSummary = (output: any, context: __SerdeContext): AccessPreviewSummary => {
  return take(output, {
    analyzerArn: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    id: __expectString,
    status: __expectString,
    statusReason: _json,
  }) as any;
};

// de_AclGrantee omitted.

// de_ActionList omitted.

/**
 * deserializeAws_restJson1AnalyzedResource
 */
const de_AnalyzedResource = (output: any, context: __SerdeContext): AnalyzedResource => {
  return take(output, {
    actions: _json,
    analyzedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    error: __expectString,
    isPublic: __expectBoolean,
    resourceArn: __expectString,
    resourceOwnerAccount: __expectString,
    resourceType: __expectString,
    sharedVia: _json,
    status: __expectString,
    updatedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

// de_AnalyzedResourcesList omitted.

// de_AnalyzedResourceSummary omitted.

// de_AnalyzerConfiguration omitted.

/**
 * deserializeAws_restJson1AnalyzersList
 */
const de_AnalyzersList = (output: any, context: __SerdeContext): AnalyzerSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AnalyzerSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AnalyzerSummary
 */
const de_AnalyzerSummary = (output: any, context: __SerdeContext): AnalyzerSummary => {
  return take(output, {
    arn: __expectString,
    configuration: (_: any) => _json(__expectUnion(_)),
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    lastResourceAnalyzed: __expectString,
    lastResourceAnalyzedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    name: __expectString,
    status: __expectString,
    statusReason: _json,
    tags: _json,
    type: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1ArchiveRulesList
 */
const de_ArchiveRulesList = (output: any, context: __SerdeContext): ArchiveRuleSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ArchiveRuleSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ArchiveRuleSummary
 */
const de_ArchiveRuleSummary = (output: any, context: __SerdeContext): ArchiveRuleSummary => {
  return take(output, {
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    filter: _json,
    ruleName: __expectString,
    updatedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

/**
 * deserializeAws_restJson1CloudTrailProperties
 */
const de_CloudTrailProperties = (output: any, context: __SerdeContext): CloudTrailProperties => {
  return take(output, {
    endTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    startTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    trailProperties: _json,
  }) as any;
};

// de_ConditionKeyMap omitted.

// de_Configuration omitted.

// de_ConfigurationsMap omitted.

// de_Criterion omitted.

// de_DynamodbStreamConfiguration omitted.

// de_DynamodbTableConfiguration omitted.

// de_EbsGroupList omitted.

// de_EbsSnapshotConfiguration omitted.

// de_EbsUserIdList omitted.

// de_EcrRepositoryConfiguration omitted.

// de_EfsFileSystemConfiguration omitted.

// de_ExternalAccessDetails omitted.

// de_FilterCriteriaMap omitted.

/**
 * deserializeAws_restJson1Finding
 */
const de_Finding = (output: any, context: __SerdeContext): Finding => {
  return take(output, {
    action: _json,
    analyzedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    condition: _json,
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    error: __expectString,
    id: __expectString,
    isPublic: __expectBoolean,
    principal: _json,
    resource: __expectString,
    resourceControlPolicyRestriction: __expectString,
    resourceOwnerAccount: __expectString,
    resourceType: __expectString,
    sources: _json,
    status: __expectString,
    updatedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

/**
 * deserializeAws_restJson1FindingDetails
 */
const de_FindingDetails = (output: any, context: __SerdeContext): FindingDetails => {
  if (output.externalAccessDetails != null) {
    return {
      externalAccessDetails: _json(output.externalAccessDetails),
    };
  }
  if (output.unusedIamRoleDetails != null) {
    return {
      unusedIamRoleDetails: de_UnusedIamRoleDetails(output.unusedIamRoleDetails, context),
    };
  }
  if (output.unusedIamUserAccessKeyDetails != null) {
    return {
      unusedIamUserAccessKeyDetails: de_UnusedIamUserAccessKeyDetails(output.unusedIamUserAccessKeyDetails, context),
    };
  }
  if (output.unusedIamUserPasswordDetails != null) {
    return {
      unusedIamUserPasswordDetails: de_UnusedIamUserPasswordDetails(output.unusedIamUserPasswordDetails, context),
    };
  }
  if (output.unusedPermissionDetails != null) {
    return {
      unusedPermissionDetails: de_UnusedPermissionDetails(output.unusedPermissionDetails, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restJson1FindingDetailsList
 */
const de_FindingDetailsList = (output: any, context: __SerdeContext): FindingDetails[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_FindingDetails(__expectUnion(entry), context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1FindingsList
 */
const de_FindingsList = (output: any, context: __SerdeContext): FindingSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_FindingSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1FindingsListV2
 */
const de_FindingsListV2 = (output: any, context: __SerdeContext): FindingSummaryV2[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_FindingSummaryV2(entry, context);
    });
  return retVal;
};

// de_FindingSource omitted.

// de_FindingSourceDetail omitted.

// de_FindingSourceList omitted.

/**
 * deserializeAws_restJson1FindingSummary
 */
const de_FindingSummary = (output: any, context: __SerdeContext): FindingSummary => {
  return take(output, {
    action: _json,
    analyzedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    condition: _json,
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    error: __expectString,
    id: __expectString,
    isPublic: __expectBoolean,
    principal: _json,
    resource: __expectString,
    resourceControlPolicyRestriction: __expectString,
    resourceOwnerAccount: __expectString,
    resourceType: __expectString,
    sources: _json,
    status: __expectString,
    updatedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

/**
 * deserializeAws_restJson1FindingSummaryV2
 */
const de_FindingSummaryV2 = (output: any, context: __SerdeContext): FindingSummaryV2 => {
  return take(output, {
    analyzedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    error: __expectString,
    findingType: __expectString,
    id: __expectString,
    resource: __expectString,
    resourceOwnerAccount: __expectString,
    resourceType: __expectString,
    status: __expectString,
    updatedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

// de_GeneratedPolicy omitted.

// de_GeneratedPolicyList omitted.

/**
 * deserializeAws_restJson1GeneratedPolicyProperties
 */
const de_GeneratedPolicyProperties = (output: any, context: __SerdeContext): GeneratedPolicyProperties => {
  return take(output, {
    cloudTrailProperties: (_: any) => de_CloudTrailProperties(_, context),
    isComplete: __expectBoolean,
    principalArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1GeneratedPolicyResult
 */
const de_GeneratedPolicyResult = (output: any, context: __SerdeContext): GeneratedPolicyResult => {
  return take(output, {
    generatedPolicies: _json,
    properties: (_: any) => de_GeneratedPolicyProperties(_, context),
  }) as any;
};

// de_IamRoleConfiguration omitted.

// de_InternetConfiguration omitted.

/**
 * deserializeAws_restJson1JobDetails
 */
const de_JobDetails = (output: any, context: __SerdeContext): JobDetails => {
  return take(output, {
    completedOn: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    jobError: _json,
    jobId: __expectString,
    startedOn: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    status: __expectString,
  }) as any;
};

// de_JobError omitted.

// de_KmsConstraintsMap omitted.

// de_KmsGrantConfiguration omitted.

// de_KmsGrantConfigurationsList omitted.

// de_KmsGrantConstraints omitted.

// de_KmsGrantOperationsList omitted.

// de_KmsKeyConfiguration omitted.

// de_KmsKeyPoliciesMap omitted.

// de_Location omitted.

// de_LocationList omitted.

// de_NetworkOriginConfiguration omitted.

// de_PathElement omitted.

// de_PathElementList omitted.

/**
 * deserializeAws_restJson1PolicyGeneration
 */
const de_PolicyGeneration = (output: any, context: __SerdeContext): PolicyGeneration => {
  return take(output, {
    completedOn: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    jobId: __expectString,
    principalArn: __expectString,
    startedOn: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    status: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1PolicyGenerationList
 */
const de_PolicyGenerationList = (output: any, context: __SerdeContext): PolicyGeneration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_PolicyGeneration(entry, context);
    });
  return retVal;
};

// de_Position omitted.

// de_PrincipalMap omitted.

// de_RdsDbClusterSnapshotAccountIdsList omitted.

// de_RdsDbClusterSnapshotAttributesMap omitted.

// de_RdsDbClusterSnapshotAttributeValue omitted.

// de_RdsDbClusterSnapshotConfiguration omitted.

// de_RdsDbSnapshotAccountIdsList omitted.

// de_RdsDbSnapshotAttributesMap omitted.

// de_RdsDbSnapshotAttributeValue omitted.

// de_RdsDbSnapshotConfiguration omitted.

// de_ReasonSummary omitted.

// de_ReasonSummaryList omitted.

// de_RecommendationError omitted.

/**
 * deserializeAws_restJson1RecommendedStep
 */
const de_RecommendedStep = (output: any, context: __SerdeContext): RecommendedStep => {
  if (output.unusedPermissionsRecommendedStep != null) {
    return {
      unusedPermissionsRecommendedStep: de_UnusedPermissionsRecommendedStep(
        output.unusedPermissionsRecommendedStep,
        context
      ),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restJson1RecommendedStepList
 */
const de_RecommendedStepList = (output: any, context: __SerdeContext): RecommendedStep[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_RecommendedStep(__expectUnion(entry), context);
    });
  return retVal;
};

// de_RegionList omitted.

// de_S3AccessPointConfiguration omitted.

// de_S3AccessPointConfigurationsMap omitted.

// de_S3BucketAclGrantConfiguration omitted.

// de_S3BucketAclGrantConfigurationsList omitted.

// de_S3BucketConfiguration omitted.

// de_S3ExpressDirectoryBucketConfiguration omitted.

// de_S3PublicAccessBlockConfiguration omitted.

// de_SecretsManagerSecretConfiguration omitted.

// de_SharedViaList omitted.

// de_SnsTopicConfiguration omitted.

// de_Span omitted.

// de_SqsQueueConfiguration omitted.

// de_StatusReason omitted.

// de_Substring omitted.

// de_TagsMap omitted.

// de_TrailProperties omitted.

// de_TrailPropertiesList omitted.

// de_UnusedAccessConfiguration omitted.

/**
 * deserializeAws_restJson1UnusedAction
 */
const de_UnusedAction = (output: any, context: __SerdeContext): UnusedAction => {
  return take(output, {
    action: __expectString,
    lastAccessed: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

/**
 * deserializeAws_restJson1UnusedActionList
 */
const de_UnusedActionList = (output: any, context: __SerdeContext): UnusedAction[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_UnusedAction(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1UnusedIamRoleDetails
 */
const de_UnusedIamRoleDetails = (output: any, context: __SerdeContext): UnusedIamRoleDetails => {
  return take(output, {
    lastAccessed: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

/**
 * deserializeAws_restJson1UnusedIamUserAccessKeyDetails
 */
const de_UnusedIamUserAccessKeyDetails = (output: any, context: __SerdeContext): UnusedIamUserAccessKeyDetails => {
  return take(output, {
    accessKeyId: __expectString,
    lastAccessed: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

/**
 * deserializeAws_restJson1UnusedIamUserPasswordDetails
 */
const de_UnusedIamUserPasswordDetails = (output: any, context: __SerdeContext): UnusedIamUserPasswordDetails => {
  return take(output, {
    lastAccessed: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

/**
 * deserializeAws_restJson1UnusedPermissionDetails
 */
const de_UnusedPermissionDetails = (output: any, context: __SerdeContext): UnusedPermissionDetails => {
  return take(output, {
    actions: (_: any) => de_UnusedActionList(_, context),
    lastAccessed: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    serviceNamespace: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1UnusedPermissionsRecommendedStep
 */
const de_UnusedPermissionsRecommendedStep = (
  output: any,
  context: __SerdeContext
): UnusedPermissionsRecommendedStep => {
  return take(output, {
    existingPolicyId: __expectString,
    policyUpdatedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    recommendedAction: __expectString,
    recommendedPolicy: __expectString,
  }) as any;
};

// de_ValidatePolicyFinding omitted.

// de_ValidatePolicyFindingList omitted.

// de_ValidationExceptionField omitted.

// de_ValidationExceptionFieldList omitted.

// de_ValueList omitted.

// de_VpcConfiguration omitted.

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

const _aA = "analyzerArn";
const _cT = "clientToken";
const _iRP = "includeResourcePlaceholders";
const _iSLT = "includeServiceLevelTemplate";
const _mR = "maxResults";
const _nT = "nextToken";
const _pA = "principalArn";
const _rA = "resourceArn";
const _rAS = "retryAfterSeconds";
const _ra = "retry-after";
const _t = "type";
const _tK = "tagKeys";
