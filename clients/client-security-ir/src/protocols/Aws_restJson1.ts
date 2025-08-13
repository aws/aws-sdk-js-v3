// smithy-typescript generated code
import { loadRestJsonErrorCode, parseJsonBody as parseBody, parseJsonErrorBody as parseErrorBody } from "@aws-sdk/core";
import { requestBuilder as rb } from "@smithy/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  map,
  parseEpochTimestamp as __parseEpochTimestamp,
  resolvedPath as __resolvedPath,
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

import {
  BatchGetMemberAccountDetailsCommandInput,
  BatchGetMemberAccountDetailsCommandOutput,
} from "../commands/BatchGetMemberAccountDetailsCommand";
import { CancelMembershipCommandInput, CancelMembershipCommandOutput } from "../commands/CancelMembershipCommand";
import { CloseCaseCommandInput, CloseCaseCommandOutput } from "../commands/CloseCaseCommand";
import { CreateCaseCommandInput, CreateCaseCommandOutput } from "../commands/CreateCaseCommand";
import { CreateCaseCommentCommandInput, CreateCaseCommentCommandOutput } from "../commands/CreateCaseCommentCommand";
import { CreateMembershipCommandInput, CreateMembershipCommandOutput } from "../commands/CreateMembershipCommand";
import {
  GetCaseAttachmentDownloadUrlCommandInput,
  GetCaseAttachmentDownloadUrlCommandOutput,
} from "../commands/GetCaseAttachmentDownloadUrlCommand";
import {
  GetCaseAttachmentUploadUrlCommandInput,
  GetCaseAttachmentUploadUrlCommandOutput,
} from "../commands/GetCaseAttachmentUploadUrlCommand";
import { GetCaseCommandInput, GetCaseCommandOutput } from "../commands/GetCaseCommand";
import { GetMembershipCommandInput, GetMembershipCommandOutput } from "../commands/GetMembershipCommand";
import { ListCaseEditsCommandInput, ListCaseEditsCommandOutput } from "../commands/ListCaseEditsCommand";
import { ListCasesCommandInput, ListCasesCommandOutput } from "../commands/ListCasesCommand";
import { ListCommentsCommandInput, ListCommentsCommandOutput } from "../commands/ListCommentsCommand";
import { ListMembershipsCommandInput, ListMembershipsCommandOutput } from "../commands/ListMembershipsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateCaseCommandInput, UpdateCaseCommandOutput } from "../commands/UpdateCaseCommand";
import { UpdateCaseCommentCommandInput, UpdateCaseCommentCommandOutput } from "../commands/UpdateCaseCommentCommand";
import { UpdateCaseStatusCommandInput, UpdateCaseStatusCommandOutput } from "../commands/UpdateCaseStatusCommand";
import { UpdateMembershipCommandInput, UpdateMembershipCommandOutput } from "../commands/UpdateMembershipCommand";
import { UpdateResolverTypeCommandInput, UpdateResolverTypeCommandOutput } from "../commands/UpdateResolverTypeCommand";
import {
  AccessDeniedException,
  CaseAttachmentAttributes,
  CaseEditItem,
  ConflictException,
  ImpactedAwsRegion,
  IncidentResponder,
  InternalServerException,
  InvalidTokenException,
  ListCasesItem,
  ListCommentsItem,
  MembershipAccountsConfigurationsUpdate,
  OptInFeature,
  ResourceNotFoundException,
  SecurityIncidentResponseNotActiveException,
  ServiceQuotaExceededException,
  ThreatActorIp,
  ThrottlingException,
  ValidationException,
  Watcher,
} from "../models/models_0";
import { SecurityIRServiceException as __BaseException } from "../models/SecurityIRServiceException";

/**
 * serializeAws_restJson1BatchGetMemberAccountDetailsCommand
 */
export const se_BatchGetMemberAccountDetailsCommand = async (
  input: BatchGetMemberAccountDetailsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/membership/{membershipId}/batch-member-details");
  b.p("membershipId", () => input.membershipId!, "{membershipId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      accountIds: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CancelMembershipCommand
 */
export const se_CancelMembershipCommand = async (
  input: CancelMembershipCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/membership/{membershipId}");
  b.p("membershipId", () => input.membershipId!, "{membershipId}", false);
  let body: any;
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CloseCaseCommand
 */
export const se_CloseCaseCommand = async (
  input: CloseCaseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/cases/{caseId}/close-case");
  b.p("caseId", () => input.caseId!, "{caseId}", false);
  let body: any;
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateCaseCommand
 */
export const se_CreateCaseCommand = async (
  input: CreateCaseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/create-case");
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      description: [],
      engagementType: [],
      impactedAccounts: (_) => _json(_),
      impactedAwsRegions: (_) => _json(_),
      impactedServices: (_) => _json(_),
      reportedIncidentStartDate: (_) => _.getTime() / 1_000,
      resolverType: [],
      tags: (_) => _json(_),
      threatActorIpAddresses: (_) => _json(_),
      title: [],
      watchers: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateCaseCommentCommand
 */
export const se_CreateCaseCommentCommand = async (
  input: CreateCaseCommentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/cases/{caseId}/create-comment");
  b.p("caseId", () => input.caseId!, "{caseId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      body: [],
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
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
  b.bp("/v1/membership");
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      coverEntireOrganization: [],
      incidentResponseTeam: (_) => _json(_),
      membershipName: [],
      optInFeatures: (_) => _json(_),
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetCaseCommand
 */
export const se_GetCaseCommand = async (
  input: GetCaseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/cases/{caseId}/get-case");
  b.p("caseId", () => input.caseId!, "{caseId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetCaseAttachmentDownloadUrlCommand
 */
export const se_GetCaseAttachmentDownloadUrlCommand = async (
  input: GetCaseAttachmentDownloadUrlCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/cases/{caseId}/get-presigned-url/{attachmentId}");
  b.p("caseId", () => input.caseId!, "{caseId}", false);
  b.p("attachmentId", () => input.attachmentId!, "{attachmentId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetCaseAttachmentUploadUrlCommand
 */
export const se_GetCaseAttachmentUploadUrlCommand = async (
  input: GetCaseAttachmentUploadUrlCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/cases/{caseId}/get-presigned-url");
  b.p("caseId", () => input.caseId!, "{caseId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      contentLength: [],
      fileName: [],
    })
  );
  b.m("POST").h(headers).b(body);
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
  b.bp("/v1/membership/{membershipId}");
  b.p("membershipId", () => input.membershipId!, "{membershipId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListCaseEditsCommand
 */
export const se_ListCaseEditsCommand = async (
  input: ListCaseEditsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/cases/{caseId}/list-case-edits");
  b.p("caseId", () => input.caseId!, "{caseId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      maxResults: [],
      nextToken: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListCasesCommand
 */
export const se_ListCasesCommand = async (
  input: ListCasesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/list-cases");
  let body: any;
  body = JSON.stringify(
    take(input, {
      maxResults: [],
      nextToken: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListCommentsCommand
 */
export const se_ListCommentsCommand = async (
  input: ListCommentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/cases/{caseId}/list-comments");
  b.p("caseId", () => input.caseId!, "{caseId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      maxResults: [],
      nextToken: [],
    })
  );
  b.m("POST").h(headers).b(body);
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
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/memberships");
  let body: any;
  body = JSON.stringify(
    take(input, {
      maxResults: [],
      nextToken: [],
    })
  );
  b.m("POST").h(headers).b(body);
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
  b.bp("/v1/tags/{resourceArn}");
  b.p("resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
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
  b.bp("/v1/tags/{resourceArn}");
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
  b.bp("/v1/tags/{resourceArn}");
  b.p("resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  const query: any = map({
    [_tK]: [__expectNonNull(input.tagKeys, `tagKeys`) != null, () => input[_tK]! || []],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateCaseCommand
 */
export const se_UpdateCaseCommand = async (
  input: UpdateCaseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/cases/{caseId}/update-case");
  b.p("caseId", () => input.caseId!, "{caseId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      actualIncidentStartDate: (_) => _.getTime() / 1_000,
      description: [],
      engagementType: [],
      impactedAccountsToAdd: (_) => _json(_),
      impactedAccountsToDelete: (_) => _json(_),
      impactedAwsRegionsToAdd: (_) => _json(_),
      impactedAwsRegionsToDelete: (_) => _json(_),
      impactedServicesToAdd: (_) => _json(_),
      impactedServicesToDelete: (_) => _json(_),
      reportedIncidentStartDate: (_) => _.getTime() / 1_000,
      threatActorIpAddressesToAdd: (_) => _json(_),
      threatActorIpAddressesToDelete: (_) => _json(_),
      title: [],
      watchersToAdd: (_) => _json(_),
      watchersToDelete: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateCaseCommentCommand
 */
export const se_UpdateCaseCommentCommand = async (
  input: UpdateCaseCommentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/cases/{caseId}/update-case-comment/{commentId}");
  b.p("caseId", () => input.caseId!, "{caseId}", false);
  b.p("commentId", () => input.commentId!, "{commentId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      body: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateCaseStatusCommand
 */
export const se_UpdateCaseStatusCommand = async (
  input: UpdateCaseStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/cases/{caseId}/update-case-status");
  b.p("caseId", () => input.caseId!, "{caseId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      caseStatus: [],
    })
  );
  b.m("POST").h(headers).b(body);
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
  b.bp("/v1/membership/{membershipId}/update-membership");
  b.p("membershipId", () => input.membershipId!, "{membershipId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      incidentResponseTeam: (_) => _json(_),
      membershipAccountsConfigurationsUpdate: (_) => _json(_),
      membershipName: [],
      optInFeatures: (_) => _json(_),
      undoMembershipCancellation: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateResolverTypeCommand
 */
export const se_UpdateResolverTypeCommand = async (
  input: UpdateResolverTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/cases/{caseId}/update-resolver-type");
  b.p("caseId", () => input.caseId!, "{caseId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      resolverType: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1BatchGetMemberAccountDetailsCommand
 */
export const de_BatchGetMemberAccountDetailsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetMemberAccountDetailsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    errors: _json,
    items: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CancelMembershipCommand
 */
export const de_CancelMembershipCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelMembershipCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    membershipId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CloseCaseCommand
 */
export const de_CloseCaseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CloseCaseCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    caseStatus: __expectString,
    closedDate: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateCaseCommand
 */
export const de_CreateCaseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCaseCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    caseId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateCaseCommentCommand
 */
export const de_CreateCaseCommentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCaseCommentCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    commentId: __expectString,
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
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    membershipId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetCaseCommand
 */
export const de_GetCaseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCaseCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    actualIncidentStartDate: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    caseArn: __expectString,
    caseAttachments: (_) => de_CaseAttachmentsList(_, context),
    caseStatus: __expectString,
    closedDate: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    closureCode: __expectString,
    createdDate: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    engagementType: __expectString,
    impactedAccounts: _json,
    impactedAwsRegions: _json,
    impactedServices: _json,
    lastUpdatedDate: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    pendingAction: __expectString,
    reportedIncidentStartDate: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    resolverType: __expectString,
    threatActorIpAddresses: _json,
    title: __expectString,
    watchers: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetCaseAttachmentDownloadUrlCommand
 */
export const de_GetCaseAttachmentDownloadUrlCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCaseAttachmentDownloadUrlCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    attachmentPresignedUrl: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetCaseAttachmentUploadUrlCommand
 */
export const de_GetCaseAttachmentUploadUrlCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCaseAttachmentUploadUrlCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    attachmentPresignedUrl: __expectString,
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
    accountId: __expectString,
    customerType: __expectString,
    incidentResponseTeam: _json,
    membershipAccountsConfigurations: _json,
    membershipActivationTimestamp: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    membershipArn: __expectString,
    membershipDeactivationTimestamp: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    membershipId: __expectString,
    membershipName: __expectString,
    membershipStatus: __expectString,
    numberOfAccountsCovered: __expectLong,
    optInFeatures: _json,
    region: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListCaseEditsCommand
 */
export const de_ListCaseEditsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCaseEditsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    items: (_) => de_CaseEditItems(_, context),
    nextToken: __expectString,
    total: __expectInt32,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListCasesCommand
 */
export const de_ListCasesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCasesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    items: (_) => de_ListCasesItems(_, context),
    nextToken: __expectString,
    total: __expectLong,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListCommentsCommand
 */
export const de_ListCommentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCommentsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    items: (_) => de_ListCommentsItems(_, context),
    nextToken: __expectString,
    total: __expectInt32,
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
    items: _json,
    nextToken: __expectString,
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
 * deserializeAws_restJson1TagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
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
 * deserializeAws_restJson1UpdateCaseCommand
 */
export const de_UpdateCaseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCaseCommandOutput> => {
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
 * deserializeAws_restJson1UpdateCaseCommentCommand
 */
export const de_UpdateCaseCommentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCaseCommentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    body: __expectString,
    commentId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateCaseStatusCommand
 */
export const de_UpdateCaseStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCaseStatusCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    caseStatus: __expectString,
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
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateResolverTypeCommand
 */
export const de_UpdateResolverTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateResolverTypeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    caseId: __expectString,
    caseStatus: __expectString,
    resolverType: __expectString,
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
    case "com.amazonaws.securityir#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.securityir#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.securityir#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidTokenException":
    case "com.amazonaws.securityir#InvalidTokenException":
      throw await de_InvalidTokenExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.securityir#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "SecurityIncidentResponseNotActiveException":
    case "com.amazonaws.securityir#SecurityIncidentResponseNotActiveException":
      throw await de_SecurityIncidentResponseNotActiveExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.securityir#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.securityir#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.securityir#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1InvalidTokenExceptionRes
 */
const de_InvalidTokenExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidTokenException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new InvalidTokenException({
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
  });
  Object.assign(contents, doc);
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1SecurityIncidentResponseNotActiveExceptionRes
 */
const de_SecurityIncidentResponseNotActiveExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SecurityIncidentResponseNotActiveException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new SecurityIncidentResponseNotActiveException({
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
    quotaCode: __expectString,
    resourceId: __expectString,
    resourceType: __expectString,
    serviceCode: __expectString,
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
    quotaCode: __expectString,
    serviceCode: __expectString,
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

// se_AWSAccountIds omitted.

// se_ImpactedAccounts omitted.

// se_ImpactedAwsRegion omitted.

// se_ImpactedAwsRegionList omitted.

// se_ImpactedServicesList omitted.

// se_IncidentResponder omitted.

// se_IncidentResponseTeam omitted.

// se_MembershipAccountsConfigurationsUpdate omitted.

// se_OptInFeature omitted.

// se_OptInFeatures omitted.

// se_OrganizationalUnits omitted.

// se_TagMap omitted.

// se_ThreatActorIp omitted.

// se_ThreatActorIpList omitted.

// se_Watcher omitted.

// se_Watchers omitted.

/**
 * deserializeAws_restJson1CaseAttachmentAttributes
 */
const de_CaseAttachmentAttributes = (output: any, context: __SerdeContext): CaseAttachmentAttributes => {
  return take(output, {
    attachmentId: __expectString,
    attachmentStatus: __expectString,
    createdDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    creator: __expectString,
    fileName: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1CaseAttachmentsList
 */
const de_CaseAttachmentsList = (output: any, context: __SerdeContext): CaseAttachmentAttributes[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_CaseAttachmentAttributes(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1CaseEditItem
 */
const de_CaseEditItem = (output: any, context: __SerdeContext): CaseEditItem => {
  return take(output, {
    action: __expectString,
    eventTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    message: __expectString,
    principal: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1CaseEditItems
 */
const de_CaseEditItems = (output: any, context: __SerdeContext): CaseEditItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_CaseEditItem(entry, context);
    });
  return retVal;
};

// de_GetMembershipAccountDetailError omitted.

// de_GetMembershipAccountDetailErrors omitted.

// de_GetMembershipAccountDetailItem omitted.

// de_GetMembershipAccountDetailItems omitted.

// de_ImpactedAccounts omitted.

// de_ImpactedAwsRegion omitted.

// de_ImpactedAwsRegionList omitted.

// de_ImpactedServicesList omitted.

// de_IncidentResponder omitted.

// de_IncidentResponseTeam omitted.

/**
 * deserializeAws_restJson1ListCasesItem
 */
const de_ListCasesItem = (output: any, context: __SerdeContext): ListCasesItem => {
  return take(output, {
    caseArn: __expectString,
    caseId: __expectString,
    caseStatus: __expectString,
    closedDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    createdDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    engagementType: __expectString,
    lastUpdatedDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    pendingAction: __expectString,
    resolverType: __expectString,
    title: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1ListCasesItems
 */
const de_ListCasesItems = (output: any, context: __SerdeContext): ListCasesItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ListCasesItem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ListCommentsItem
 */
const de_ListCommentsItem = (output: any, context: __SerdeContext): ListCommentsItem => {
  return take(output, {
    body: __expectString,
    commentId: __expectString,
    createdDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    creator: __expectString,
    lastUpdatedBy: __expectString,
    lastUpdatedDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_restJson1ListCommentsItems
 */
const de_ListCommentsItems = (output: any, context: __SerdeContext): ListCommentsItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ListCommentsItem(entry, context);
    });
  return retVal;
};

// de_ListMembershipItem omitted.

// de_ListMembershipItems omitted.

// de_MembershipAccountsConfigurations omitted.

// de_OptInFeature omitted.

// de_OptInFeatures omitted.

// de_OrganizationalUnits omitted.

// de_TagMap omitted.

// de_ThreatActorIp omitted.

// de_ThreatActorIpList omitted.

// de_ValidationExceptionField omitted.

// de_ValidationExceptionFieldList omitted.

// de_Watcher omitted.

// de_Watchers omitted.

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

const _rAS = "retryAfterSeconds";
const _ra = "retry-after";
const _tK = "tagKeys";
