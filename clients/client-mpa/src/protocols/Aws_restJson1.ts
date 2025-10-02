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
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  map,
  parseRfc3339DateTimeWithOffset as __parseRfc3339DateTimeWithOffset,
  resolvedPath as __resolvedPath,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";
import { v4 as generateIdempotencyToken } from "@smithy/uuid";

import { CancelSessionCommandInput, CancelSessionCommandOutput } from "../commands/CancelSessionCommand";
import { CreateApprovalTeamCommandInput, CreateApprovalTeamCommandOutput } from "../commands/CreateApprovalTeamCommand";
import {
  CreateIdentitySourceCommandInput,
  CreateIdentitySourceCommandOutput,
} from "../commands/CreateIdentitySourceCommand";
import {
  DeleteIdentitySourceCommandInput,
  DeleteIdentitySourceCommandOutput,
} from "../commands/DeleteIdentitySourceCommand";
import {
  DeleteInactiveApprovalTeamVersionCommandInput,
  DeleteInactiveApprovalTeamVersionCommandOutput,
} from "../commands/DeleteInactiveApprovalTeamVersionCommand";
import { GetApprovalTeamCommandInput, GetApprovalTeamCommandOutput } from "../commands/GetApprovalTeamCommand";
import { GetIdentitySourceCommandInput, GetIdentitySourceCommandOutput } from "../commands/GetIdentitySourceCommand";
import { GetPolicyVersionCommandInput, GetPolicyVersionCommandOutput } from "../commands/GetPolicyVersionCommand";
import { GetResourcePolicyCommandInput, GetResourcePolicyCommandOutput } from "../commands/GetResourcePolicyCommand";
import { GetSessionCommandInput, GetSessionCommandOutput } from "../commands/GetSessionCommand";
import { ListApprovalTeamsCommandInput, ListApprovalTeamsCommandOutput } from "../commands/ListApprovalTeamsCommand";
import {
  ListIdentitySourcesCommandInput,
  ListIdentitySourcesCommandOutput,
} from "../commands/ListIdentitySourcesCommand";
import { ListPoliciesCommandInput, ListPoliciesCommandOutput } from "../commands/ListPoliciesCommand";
import { ListPolicyVersionsCommandInput, ListPolicyVersionsCommandOutput } from "../commands/ListPolicyVersionsCommand";
import {
  ListResourcePoliciesCommandInput,
  ListResourcePoliciesCommandOutput,
} from "../commands/ListResourcePoliciesCommand";
import { ListSessionsCommandInput, ListSessionsCommandOutput } from "../commands/ListSessionsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import {
  StartActiveApprovalTeamDeletionCommandInput,
  StartActiveApprovalTeamDeletionCommandOutput,
} from "../commands/StartActiveApprovalTeamDeletionCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateApprovalTeamCommandInput, UpdateApprovalTeamCommandOutput } from "../commands/UpdateApprovalTeamCommand";
import {
  AccessDeniedException,
  ApprovalStrategy,
  ApprovalTeamRequestApprover,
  ConflictException,
  Filter,
  GetApprovalTeamResponseApprover,
  GetSessionResponseApproverResponse,
  IamIdentityCenter,
  IdentitySourceForList,
  IdentitySourceParameters,
  InternalServerException,
  InvalidParameterException,
  ListApprovalTeamsResponseApprovalTeam,
  ListSessionsResponseSession,
  MofNApprovalStrategy,
  PendingUpdate,
  PolicyReference,
  PolicyVersion,
  PolicyVersionSummary,
  ResourceNotFoundException,
  ServiceQuotaExceededException,
  ThrottlingException,
  TooManyTagsException,
  ValidationException,
} from "../models/models_0";
import { MPAServiceException as __BaseException } from "../models/MPAServiceException";

/**
 * serializeAws_restJson1CancelSessionCommand
 */
export const se_CancelSessionCommand = async (
  input: CancelSessionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/sessions/{SessionArn}");
  b.p("SessionArn", () => input.SessionArn!, "{SessionArn}", false);
  let body: any;
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateApprovalTeamCommand
 */
export const se_CreateApprovalTeamCommand = async (
  input: CreateApprovalTeamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/approval-teams");
  let body: any;
  body = JSON.stringify(
    take(input, {
      ApprovalStrategy: (_) => _json(_),
      Approvers: (_) => _json(_),
      ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      Description: [],
      Name: [],
      Policies: (_) => _json(_),
      Tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateIdentitySourceCommand
 */
export const se_CreateIdentitySourceCommand = async (
  input: CreateIdentitySourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/identity-sources");
  let body: any;
  body = JSON.stringify(
    take(input, {
      ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      IdentitySourceParameters: (_) => _json(_),
      Tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteIdentitySourceCommand
 */
export const se_DeleteIdentitySourceCommand = async (
  input: DeleteIdentitySourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/identity-sources/{IdentitySourceArn}");
  b.p("IdentitySourceArn", () => input.IdentitySourceArn!, "{IdentitySourceArn}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteInactiveApprovalTeamVersionCommand
 */
export const se_DeleteInactiveApprovalTeamVersionCommand = async (
  input: DeleteInactiveApprovalTeamVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/approval-teams/{Arn}/{VersionId}");
  b.p("Arn", () => input.Arn!, "{Arn}", false);
  b.p("VersionId", () => input.VersionId!, "{VersionId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetApprovalTeamCommand
 */
export const se_GetApprovalTeamCommand = async (
  input: GetApprovalTeamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/approval-teams/{Arn}");
  b.p("Arn", () => input.Arn!, "{Arn}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetIdentitySourceCommand
 */
export const se_GetIdentitySourceCommand = async (
  input: GetIdentitySourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/identity-sources/{IdentitySourceArn}");
  b.p("IdentitySourceArn", () => input.IdentitySourceArn!, "{IdentitySourceArn}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetPolicyVersionCommand
 */
export const se_GetPolicyVersionCommand = async (
  input: GetPolicyVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/policy-versions/{PolicyVersionArn}");
  b.p("PolicyVersionArn", () => input.PolicyVersionArn!, "{PolicyVersionArn}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetResourcePolicyCommand
 */
export const se_GetResourcePolicyCommand = async (
  input: GetResourcePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/GetResourcePolicy");
  let body: any;
  body = JSON.stringify(
    take(input, {
      PolicyName: [],
      PolicyType: [],
      ResourceArn: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetSessionCommand
 */
export const se_GetSessionCommand = async (
  input: GetSessionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/sessions/{SessionArn}");
  b.p("SessionArn", () => input.SessionArn!, "{SessionArn}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListApprovalTeamsCommand
 */
export const se_ListApprovalTeamsCommand = async (
  input: ListApprovalTeamsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/approval-teams");
  const query: any = map({
    [_L]: [, ""],
    [_MR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_NT]: [, input[_NT]!],
  });
  let body: any;
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListIdentitySourcesCommand
 */
export const se_ListIdentitySourcesCommand = async (
  input: ListIdentitySourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/identity-sources");
  const query: any = map({
    [_L]: [, ""],
    [_MR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_NT]: [, input[_NT]!],
  });
  let body: any;
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListPoliciesCommand
 */
export const se_ListPoliciesCommand = async (
  input: ListPoliciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/policies");
  const query: any = map({
    [_L]: [, ""],
    [_MR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_NT]: [, input[_NT]!],
  });
  let body: any;
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListPolicyVersionsCommand
 */
export const se_ListPolicyVersionsCommand = async (
  input: ListPolicyVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/policies/{PolicyArn}");
  b.p("PolicyArn", () => input.PolicyArn!, "{PolicyArn}", false);
  const query: any = map({
    [_L]: [, ""],
    [_MR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_NT]: [, input[_NT]!],
  });
  let body: any;
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListResourcePoliciesCommand
 */
export const se_ListResourcePoliciesCommand = async (
  input: ListResourcePoliciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/resource-policies/{ResourceArn}");
  b.p("ResourceArn", () => input.ResourceArn!, "{ResourceArn}", false);
  const query: any = map({
    [_L]: [, ""],
    [_MR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_NT]: [, input[_NT]!],
  });
  let body: any;
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListSessionsCommand
 */
export const se_ListSessionsCommand = async (
  input: ListSessionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/approval-teams/{ApprovalTeamArn}/sessions");
  b.p("ApprovalTeamArn", () => input.ApprovalTeamArn!, "{ApprovalTeamArn}", false);
  const query: any = map({
    [_L]: [, ""],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      Filters: (_) => _json(_),
      MaxResults: [],
      NextToken: [],
    })
  );
  b.m("POST").h(headers).q(query).b(body);
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
  b.bp("/tags/{ResourceArn}");
  b.p("ResourceArn", () => input.ResourceArn!, "{ResourceArn}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StartActiveApprovalTeamDeletionCommand
 */
export const se_StartActiveApprovalTeamDeletionCommand = async (
  input: StartActiveApprovalTeamDeletionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/approval-teams/{Arn}");
  b.p("Arn", () => input.Arn!, "{Arn}", false);
  const query: any = map({
    [_D]: [, ""],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      PendingWindowDays: [],
    })
  );
  b.m("POST").h(headers).q(query).b(body);
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
  b.bp("/tags/{ResourceArn}");
  b.p("ResourceArn", () => input.ResourceArn!, "{ResourceArn}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Tags: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
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
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/tags/{ResourceArn}");
  b.p("ResourceArn", () => input.ResourceArn!, "{ResourceArn}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      TagKeys: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateApprovalTeamCommand
 */
export const se_UpdateApprovalTeamCommand = async (
  input: UpdateApprovalTeamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/approval-teams/{Arn}");
  b.p("Arn", () => input.Arn!, "{Arn}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      ApprovalStrategy: (_) => _json(_),
      Approvers: (_) => _json(_),
      Description: [],
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1CancelSessionCommand
 */
export const de_CancelSessionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelSessionCommandOutput> => {
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
 * deserializeAws_restJson1CreateApprovalTeamCommand
 */
export const de_CreateApprovalTeamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateApprovalTeamCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    CreationTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    Name: __expectString,
    VersionId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateIdentitySourceCommand
 */
export const de_CreateIdentitySourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateIdentitySourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    CreationTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    IdentitySourceArn: __expectString,
    IdentitySourceType: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteIdentitySourceCommand
 */
export const de_DeleteIdentitySourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteIdentitySourceCommandOutput> => {
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
 * deserializeAws_restJson1DeleteInactiveApprovalTeamVersionCommand
 */
export const de_DeleteInactiveApprovalTeamVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteInactiveApprovalTeamVersionCommandOutput> => {
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
 * deserializeAws_restJson1GetApprovalTeamCommand
 */
export const de_GetApprovalTeamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApprovalTeamCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ApprovalStrategy: (_) => _json(__expectUnion(_)),
    Approvers: (_) => de_GetApprovalTeamResponseApprovers(_, context),
    Arn: __expectString,
    CreationTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    Description: __expectString,
    LastUpdateTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    Name: __expectString,
    NumberOfApprovers: __expectInt32,
    PendingUpdate: (_) => de_PendingUpdate(_, context),
    Policies: _json,
    Status: __expectString,
    StatusCode: __expectString,
    StatusMessage: __expectString,
    UpdateSessionArn: __expectString,
    VersionId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetIdentitySourceCommand
 */
export const de_GetIdentitySourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIdentitySourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    CreationTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    IdentitySourceArn: __expectString,
    IdentitySourceParameters: (_) => _json(__expectUnion(_)),
    IdentitySourceType: __expectString,
    Status: __expectString,
    StatusCode: __expectString,
    StatusMessage: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetPolicyVersionCommand
 */
export const de_GetPolicyVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPolicyVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    PolicyVersion: (_) => de_PolicyVersion(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetResourcePolicyCommand
 */
export const de_GetResourcePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourcePolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    PolicyDocument: __expectString,
    PolicyName: __expectString,
    PolicyType: __expectString,
    PolicyVersionArn: __expectString,
    ResourceArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetSessionCommand
 */
export const de_GetSessionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSessionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ActionCompletionStrategy: __expectString,
    ActionName: __expectString,
    ApprovalStrategy: (_) => _json(__expectUnion(_)),
    ApprovalTeamArn: __expectString,
    ApprovalTeamName: __expectString,
    ApproverResponses: (_) => de_GetSessionResponseApproverResponses(_, context),
    CompletionTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    Description: __expectString,
    ExecutionStatus: __expectString,
    ExpirationTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    InitiationTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    Metadata: _json,
    NumberOfApprovers: __expectInt32,
    ProtectedResourceArn: __expectString,
    RequesterAccountId: __expectString,
    RequesterComment: __expectString,
    RequesterPrincipalArn: __expectString,
    RequesterRegion: __expectString,
    RequesterServicePrincipal: __expectString,
    SessionArn: __expectString,
    Status: __expectString,
    StatusCode: __expectString,
    StatusMessage: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListApprovalTeamsCommand
 */
export const de_ListApprovalTeamsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListApprovalTeamsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ApprovalTeams: (_) => de_ListApprovalTeamsResponseApprovalTeams(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListIdentitySourcesCommand
 */
export const de_ListIdentitySourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListIdentitySourcesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    IdentitySources: (_) => de_IdentitySources(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListPoliciesCommand
 */
export const de_ListPoliciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPoliciesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    Policies: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListPolicyVersionsCommand
 */
export const de_ListPolicyVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPolicyVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    PolicyVersions: (_) => de_PolicyVersions(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListResourcePoliciesCommand
 */
export const de_ListResourcePoliciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResourcePoliciesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    ResourcePolicies: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListSessionsCommand
 */
export const de_ListSessionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSessionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    Sessions: (_) => de_ListSessionsResponseSessions(_, context),
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
    Tags: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1StartActiveApprovalTeamDeletionCommand
 */
export const de_StartActiveApprovalTeamDeletionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartActiveApprovalTeamDeletionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    DeletionCompletionTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    DeletionStartTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
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
 * deserializeAws_restJson1UpdateApprovalTeamCommand
 */
export const de_UpdateApprovalTeamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApprovalTeamCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    VersionId: __expectString,
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
    case "com.amazonaws.mpa#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.mpa#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.mpa#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.mpa#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.mpa#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.mpa#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.mpa#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.mpa#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.mpa#TooManyTagsException":
      throw await de_TooManyTagsExceptionRes(parsedOutput, context);
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
    Message: __expectString,
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
    Message: __expectString,
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
    Message: __expectString,
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
    Message: __expectString,
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
    Message: __expectString,
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
    Message: __expectString,
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
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ThrottlingException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1TooManyTagsExceptionRes
 */
const de_TooManyTagsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyTagsException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
    ResourceName: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new TooManyTagsException({
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
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

// se_ApprovalStrategy omitted.

// se_ApprovalTeamRequestApprover omitted.

// se_ApprovalTeamRequestApprovers omitted.

// se_Filter omitted.

// se_Filters omitted.

// se_IamIdentityCenter omitted.

// se_IdentitySourceParameters omitted.

// se_MofNApprovalStrategy omitted.

// se_PoliciesReferences omitted.

// se_PolicyReference omitted.

// se_TagKeyList omitted.

// se_Tags omitted.

// de_ApprovalStrategyResponse omitted.

/**
 * deserializeAws_restJson1GetApprovalTeamResponseApprover
 */
const de_GetApprovalTeamResponseApprover = (output: any, context: __SerdeContext): GetApprovalTeamResponseApprover => {
  return take(output, {
    ApproverId: __expectString,
    PrimaryIdentityId: __expectString,
    PrimaryIdentitySourceArn: __expectString,
    PrimaryIdentityStatus: __expectString,
    ResponseTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

/**
 * deserializeAws_restJson1GetApprovalTeamResponseApprovers
 */
const de_GetApprovalTeamResponseApprovers = (
  output: any,
  context: __SerdeContext
): GetApprovalTeamResponseApprover[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_GetApprovalTeamResponseApprover(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1GetSessionResponseApproverResponse
 */
const de_GetSessionResponseApproverResponse = (
  output: any,
  context: __SerdeContext
): GetSessionResponseApproverResponse => {
  return take(output, {
    ApproverId: __expectString,
    IdentityId: __expectString,
    IdentitySourceArn: __expectString,
    Response: __expectString,
    ResponseTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

/**
 * deserializeAws_restJson1GetSessionResponseApproverResponses
 */
const de_GetSessionResponseApproverResponses = (
  output: any,
  context: __SerdeContext
): GetSessionResponseApproverResponse[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_GetSessionResponseApproverResponse(entry, context);
    });
  return retVal;
};

// de_IamIdentityCenterForGet omitted.

// de_IamIdentityCenterForList omitted.

/**
 * deserializeAws_restJson1IdentitySourceForList
 */
const de_IdentitySourceForList = (output: any, context: __SerdeContext): IdentitySourceForList => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    IdentitySourceArn: __expectString,
    IdentitySourceParameters: (_: any) => _json(__expectUnion(_)),
    IdentitySourceType: __expectString,
    Status: __expectString,
    StatusCode: __expectString,
    StatusMessage: __expectString,
  }) as any;
};

// de_IdentitySourceParametersForGet omitted.

// de_IdentitySourceParametersForList omitted.

/**
 * deserializeAws_restJson1IdentitySources
 */
const de_IdentitySources = (output: any, context: __SerdeContext): IdentitySourceForList[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_IdentitySourceForList(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ListApprovalTeamsResponseApprovalTeam
 */
const de_ListApprovalTeamsResponseApprovalTeam = (
  output: any,
  context: __SerdeContext
): ListApprovalTeamsResponseApprovalTeam => {
  return take(output, {
    ApprovalStrategy: (_: any) => _json(__expectUnion(_)),
    Arn: __expectString,
    CreationTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    Description: __expectString,
    Name: __expectString,
    NumberOfApprovers: __expectInt32,
    Status: __expectString,
    StatusCode: __expectString,
    StatusMessage: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1ListApprovalTeamsResponseApprovalTeams
 */
const de_ListApprovalTeamsResponseApprovalTeams = (
  output: any,
  context: __SerdeContext
): ListApprovalTeamsResponseApprovalTeam[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ListApprovalTeamsResponseApprovalTeam(entry, context);
    });
  return retVal;
};

// de_ListResourcePoliciesResponseResourcePolicies omitted.

// de_ListResourcePoliciesResponseResourcePolicy omitted.

/**
 * deserializeAws_restJson1ListSessionsResponseSession
 */
const de_ListSessionsResponseSession = (output: any, context: __SerdeContext): ListSessionsResponseSession => {
  return take(output, {
    ActionCompletionStrategy: __expectString,
    ActionName: __expectString,
    ApprovalTeamArn: __expectString,
    ApprovalTeamName: __expectString,
    CompletionTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    Description: __expectString,
    ExpirationTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    InitiationTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    ProtectedResourceArn: __expectString,
    RequesterAccountId: __expectString,
    RequesterPrincipalArn: __expectString,
    RequesterRegion: __expectString,
    RequesterServicePrincipal: __expectString,
    SessionArn: __expectString,
    Status: __expectString,
    StatusCode: __expectString,
    StatusMessage: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1ListSessionsResponseSessions
 */
const de_ListSessionsResponseSessions = (output: any, context: __SerdeContext): ListSessionsResponseSession[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ListSessionsResponseSession(entry, context);
    });
  return retVal;
};

// de_MofNApprovalStrategy omitted.

/**
 * deserializeAws_restJson1PendingUpdate
 */
const de_PendingUpdate = (output: any, context: __SerdeContext): PendingUpdate => {
  return take(output, {
    ApprovalStrategy: (_: any) => _json(__expectUnion(_)),
    Approvers: (_: any) => de_GetApprovalTeamResponseApprovers(_, context),
    Description: __expectString,
    NumberOfApprovers: __expectInt32,
    Status: __expectString,
    StatusCode: __expectString,
    StatusMessage: __expectString,
    UpdateInitiationTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    VersionId: __expectString,
  }) as any;
};

// de_Policies omitted.

// de_PoliciesReferences omitted.

// de_Policy omitted.

// de_PolicyReference omitted.

/**
 * deserializeAws_restJson1PolicyVersion
 */
const de_PolicyVersion = (output: any, context: __SerdeContext): PolicyVersion => {
  return take(output, {
    Arn: __expectString,
    CreationTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    Document: __expectString,
    IsDefault: __expectBoolean,
    LastUpdatedTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    Name: __expectString,
    PolicyArn: __expectString,
    PolicyType: __expectString,
    Status: __expectString,
    VersionId: __expectInt32,
  }) as any;
};

/**
 * deserializeAws_restJson1PolicyVersions
 */
const de_PolicyVersions = (output: any, context: __SerdeContext): PolicyVersionSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_PolicyVersionSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1PolicyVersionSummary
 */
const de_PolicyVersionSummary = (output: any, context: __SerdeContext): PolicyVersionSummary => {
  return take(output, {
    Arn: __expectString,
    CreationTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    IsDefault: __expectBoolean,
    LastUpdatedTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    Name: __expectString,
    PolicyArn: __expectString,
    PolicyType: __expectString,
    Status: __expectString,
    VersionId: __expectInt32,
  }) as any;
};

// de_SessionMetadata omitted.

// de_Tags omitted.

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

const _D = "Delete";
const _L = "List";
const _MR = "MaxResults";
const _NT = "NextToken";
