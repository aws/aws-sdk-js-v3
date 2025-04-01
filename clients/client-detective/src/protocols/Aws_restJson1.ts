// smithy-typescript generated code
import { loadRestJsonErrorCode, parseJsonBody as parseBody, parseJsonErrorBody as parseErrorBody } from "@aws-sdk/core";
import { requestBuilder as rb } from "@smithy/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  limitedParseDouble as __limitedParseDouble,
  map,
  parseRfc3339DateTimeWithOffset as __parseRfc3339DateTimeWithOffset,
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

import { AcceptInvitationCommandInput, AcceptInvitationCommandOutput } from "../commands/AcceptInvitationCommand";
import {
  BatchGetGraphMemberDatasourcesCommandInput,
  BatchGetGraphMemberDatasourcesCommandOutput,
} from "../commands/BatchGetGraphMemberDatasourcesCommand";
import {
  BatchGetMembershipDatasourcesCommandInput,
  BatchGetMembershipDatasourcesCommandOutput,
} from "../commands/BatchGetMembershipDatasourcesCommand";
import { CreateGraphCommandInput, CreateGraphCommandOutput } from "../commands/CreateGraphCommand";
import { CreateMembersCommandInput, CreateMembersCommandOutput } from "../commands/CreateMembersCommand";
import { DeleteGraphCommandInput, DeleteGraphCommandOutput } from "../commands/DeleteGraphCommand";
import { DeleteMembersCommandInput, DeleteMembersCommandOutput } from "../commands/DeleteMembersCommand";
import {
  DescribeOrganizationConfigurationCommandInput,
  DescribeOrganizationConfigurationCommandOutput,
} from "../commands/DescribeOrganizationConfigurationCommand";
import {
  DisableOrganizationAdminAccountCommandInput,
  DisableOrganizationAdminAccountCommandOutput,
} from "../commands/DisableOrganizationAdminAccountCommand";
import {
  DisassociateMembershipCommandInput,
  DisassociateMembershipCommandOutput,
} from "../commands/DisassociateMembershipCommand";
import {
  EnableOrganizationAdminAccountCommandInput,
  EnableOrganizationAdminAccountCommandOutput,
} from "../commands/EnableOrganizationAdminAccountCommand";
import { GetInvestigationCommandInput, GetInvestigationCommandOutput } from "../commands/GetInvestigationCommand";
import { GetMembersCommandInput, GetMembersCommandOutput } from "../commands/GetMembersCommand";
import {
  ListDatasourcePackagesCommandInput,
  ListDatasourcePackagesCommandOutput,
} from "../commands/ListDatasourcePackagesCommand";
import { ListGraphsCommandInput, ListGraphsCommandOutput } from "../commands/ListGraphsCommand";
import { ListIndicatorsCommandInput, ListIndicatorsCommandOutput } from "../commands/ListIndicatorsCommand";
import { ListInvestigationsCommandInput, ListInvestigationsCommandOutput } from "../commands/ListInvestigationsCommand";
import { ListInvitationsCommandInput, ListInvitationsCommandOutput } from "../commands/ListInvitationsCommand";
import { ListMembersCommandInput, ListMembersCommandOutput } from "../commands/ListMembersCommand";
import {
  ListOrganizationAdminAccountsCommandInput,
  ListOrganizationAdminAccountsCommandOutput,
} from "../commands/ListOrganizationAdminAccountsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { RejectInvitationCommandInput, RejectInvitationCommandOutput } from "../commands/RejectInvitationCommand";
import { StartInvestigationCommandInput, StartInvestigationCommandOutput } from "../commands/StartInvestigationCommand";
import {
  StartMonitoringMemberCommandInput,
  StartMonitoringMemberCommandOutput,
} from "../commands/StartMonitoringMemberCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import {
  UpdateDatasourcePackagesCommandInput,
  UpdateDatasourcePackagesCommandOutput,
} from "../commands/UpdateDatasourcePackagesCommand";
import {
  UpdateInvestigationStateCommandInput,
  UpdateInvestigationStateCommandOutput,
} from "../commands/UpdateInvestigationStateCommand";
import {
  UpdateOrganizationConfigurationCommandInput,
  UpdateOrganizationConfigurationCommandOutput,
} from "../commands/UpdateOrganizationConfigurationCommand";
import { DetectiveServiceException as __BaseException } from "../models/DetectiveServiceException";
import {
  AccessDeniedException,
  Account,
  Administrator,
  ConflictException,
  DatasourcePackage,
  DatasourcePackageIngestDetail,
  DatasourcePackageIngestState,
  DatasourcePackageUsageInfo,
  DateFilter,
  FilterCriteria,
  Graph,
  InternalServerException,
  InvestigationDetail,
  MemberDetail,
  MembershipDatasources,
  ResourceNotFoundException,
  ServiceQuotaExceededException,
  SortCriteria,
  StringFilter,
  TimestampForCollection,
  TooManyRequestsException,
  ValidationException,
} from "../models/models_0";

/**
 * serializeAws_restJson1AcceptInvitationCommand
 */
export const se_AcceptInvitationCommand = async (
  input: AcceptInvitationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/invitation");
  let body: any;
  body = JSON.stringify(
    take(input, {
      GraphArn: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1BatchGetGraphMemberDatasourcesCommand
 */
export const se_BatchGetGraphMemberDatasourcesCommand = async (
  input: BatchGetGraphMemberDatasourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/graph/datasources/get");
  let body: any;
  body = JSON.stringify(
    take(input, {
      AccountIds: (_) => _json(_),
      GraphArn: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1BatchGetMembershipDatasourcesCommand
 */
export const se_BatchGetMembershipDatasourcesCommand = async (
  input: BatchGetMembershipDatasourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/membership/datasources/get");
  let body: any;
  body = JSON.stringify(
    take(input, {
      GraphArns: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateGraphCommand
 */
export const se_CreateGraphCommand = async (
  input: CreateGraphCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/graph");
  let body: any;
  body = JSON.stringify(
    take(input, {
      Tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateMembersCommand
 */
export const se_CreateMembersCommand = async (
  input: CreateMembersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/graph/members");
  let body: any;
  body = JSON.stringify(
    take(input, {
      Accounts: (_) => _json(_),
      DisableEmailNotification: [],
      GraphArn: [],
      Message: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteGraphCommand
 */
export const se_DeleteGraphCommand = async (
  input: DeleteGraphCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/graph/removal");
  let body: any;
  body = JSON.stringify(
    take(input, {
      GraphArn: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteMembersCommand
 */
export const se_DeleteMembersCommand = async (
  input: DeleteMembersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/graph/members/removal");
  let body: any;
  body = JSON.stringify(
    take(input, {
      AccountIds: (_) => _json(_),
      GraphArn: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeOrganizationConfigurationCommand
 */
export const se_DescribeOrganizationConfigurationCommand = async (
  input: DescribeOrganizationConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/orgs/describeOrganizationConfiguration");
  let body: any;
  body = JSON.stringify(
    take(input, {
      GraphArn: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DisableOrganizationAdminAccountCommand
 */
export const se_DisableOrganizationAdminAccountCommand = async (
  input: DisableOrganizationAdminAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/orgs/disableAdminAccount");
  let body: any;
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DisassociateMembershipCommand
 */
export const se_DisassociateMembershipCommand = async (
  input: DisassociateMembershipCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/membership/removal");
  let body: any;
  body = JSON.stringify(
    take(input, {
      GraphArn: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1EnableOrganizationAdminAccountCommand
 */
export const se_EnableOrganizationAdminAccountCommand = async (
  input: EnableOrganizationAdminAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/orgs/enableAdminAccount");
  let body: any;
  body = JSON.stringify(
    take(input, {
      AccountId: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetInvestigationCommand
 */
export const se_GetInvestigationCommand = async (
  input: GetInvestigationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/investigations/getInvestigation");
  let body: any;
  body = JSON.stringify(
    take(input, {
      GraphArn: [],
      InvestigationId: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetMembersCommand
 */
export const se_GetMembersCommand = async (
  input: GetMembersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/graph/members/get");
  let body: any;
  body = JSON.stringify(
    take(input, {
      AccountIds: (_) => _json(_),
      GraphArn: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListDatasourcePackagesCommand
 */
export const se_ListDatasourcePackagesCommand = async (
  input: ListDatasourcePackagesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/graph/datasources/list");
  let body: any;
  body = JSON.stringify(
    take(input, {
      GraphArn: [],
      MaxResults: [],
      NextToken: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListGraphsCommand
 */
export const se_ListGraphsCommand = async (
  input: ListGraphsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/graphs/list");
  let body: any;
  body = JSON.stringify(
    take(input, {
      MaxResults: [],
      NextToken: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListIndicatorsCommand
 */
export const se_ListIndicatorsCommand = async (
  input: ListIndicatorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/investigations/listIndicators");
  let body: any;
  body = JSON.stringify(
    take(input, {
      GraphArn: [],
      IndicatorType: [],
      InvestigationId: [],
      MaxResults: [],
      NextToken: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListInvestigationsCommand
 */
export const se_ListInvestigationsCommand = async (
  input: ListInvestigationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/investigations/listInvestigations");
  let body: any;
  body = JSON.stringify(
    take(input, {
      FilterCriteria: (_) => se_FilterCriteria(_, context),
      GraphArn: [],
      MaxResults: [],
      NextToken: [],
      SortCriteria: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListInvitationsCommand
 */
export const se_ListInvitationsCommand = async (
  input: ListInvitationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/invitations/list");
  let body: any;
  body = JSON.stringify(
    take(input, {
      MaxResults: [],
      NextToken: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListMembersCommand
 */
export const se_ListMembersCommand = async (
  input: ListMembersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/graph/members/list");
  let body: any;
  body = JSON.stringify(
    take(input, {
      GraphArn: [],
      MaxResults: [],
      NextToken: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListOrganizationAdminAccountsCommand
 */
export const se_ListOrganizationAdminAccountsCommand = async (
  input: ListOrganizationAdminAccountsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/orgs/adminAccountslist");
  let body: any;
  body = JSON.stringify(
    take(input, {
      MaxResults: [],
      NextToken: [],
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
  b.bp("/tags/{ResourceArn}");
  b.p("ResourceArn", () => input.ResourceArn!, "{ResourceArn}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1RejectInvitationCommand
 */
export const se_RejectInvitationCommand = async (
  input: RejectInvitationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/invitation/removal");
  let body: any;
  body = JSON.stringify(
    take(input, {
      GraphArn: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StartInvestigationCommand
 */
export const se_StartInvestigationCommand = async (
  input: StartInvestigationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/investigations/startInvestigation");
  let body: any;
  body = JSON.stringify(
    take(input, {
      EntityArn: [],
      GraphArn: [],
      ScopeEndTime: (_) => __serializeDateTime(_),
      ScopeStartTime: (_) => __serializeDateTime(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StartMonitoringMemberCommand
 */
export const se_StartMonitoringMemberCommand = async (
  input: StartMonitoringMemberCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/graph/member/monitoringstate");
  let body: any;
  body = JSON.stringify(
    take(input, {
      AccountId: [],
      GraphArn: [],
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
  b.bp("/tags/{ResourceArn}");
  b.p("ResourceArn", () => input.ResourceArn!, "{ResourceArn}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Tags: (_) => _json(_),
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
  b.bp("/tags/{ResourceArn}");
  b.p("ResourceArn", () => input.ResourceArn!, "{ResourceArn}", false);
  const query: any = map({
    [_tK]: [__expectNonNull(input.TagKeys, `TagKeys`) != null, () => input[_TK]! || []],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateDatasourcePackagesCommand
 */
export const se_UpdateDatasourcePackagesCommand = async (
  input: UpdateDatasourcePackagesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/graph/datasources/update");
  let body: any;
  body = JSON.stringify(
    take(input, {
      DatasourcePackages: (_) => _json(_),
      GraphArn: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateInvestigationStateCommand
 */
export const se_UpdateInvestigationStateCommand = async (
  input: UpdateInvestigationStateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/investigations/updateInvestigationState");
  let body: any;
  body = JSON.stringify(
    take(input, {
      GraphArn: [],
      InvestigationId: [],
      State: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateOrganizationConfigurationCommand
 */
export const se_UpdateOrganizationConfigurationCommand = async (
  input: UpdateOrganizationConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/orgs/updateOrganizationConfiguration");
  let body: any;
  body = JSON.stringify(
    take(input, {
      AutoEnable: [],
      GraphArn: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1AcceptInvitationCommand
 */
export const de_AcceptInvitationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AcceptInvitationCommandOutput> => {
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
 * deserializeAws_restJson1BatchGetGraphMemberDatasourcesCommand
 */
export const de_BatchGetGraphMemberDatasourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetGraphMemberDatasourcesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    MemberDatasources: (_) => de_MembershipDatasourcesList(_, context),
    UnprocessedAccounts: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1BatchGetMembershipDatasourcesCommand
 */
export const de_BatchGetMembershipDatasourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetMembershipDatasourcesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    MembershipDatasources: (_) => de_MembershipDatasourcesList(_, context),
    UnprocessedGraphs: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateGraphCommand
 */
export const de_CreateGraphCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGraphCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    GraphArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateMembersCommand
 */
export const de_CreateMembersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMembersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Members: (_) => de_MemberDetailList(_, context),
    UnprocessedAccounts: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteGraphCommand
 */
export const de_DeleteGraphCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteGraphCommandOutput> => {
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
 * deserializeAws_restJson1DeleteMembersCommand
 */
export const de_DeleteMembersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMembersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    AccountIds: _json,
    UnprocessedAccounts: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeOrganizationConfigurationCommand
 */
export const de_DescribeOrganizationConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeOrganizationConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    AutoEnable: __expectBoolean,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DisableOrganizationAdminAccountCommand
 */
export const de_DisableOrganizationAdminAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableOrganizationAdminAccountCommandOutput> => {
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
 * deserializeAws_restJson1DisassociateMembershipCommand
 */
export const de_DisassociateMembershipCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateMembershipCommandOutput> => {
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
 * deserializeAws_restJson1EnableOrganizationAdminAccountCommand
 */
export const de_EnableOrganizationAdminAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableOrganizationAdminAccountCommandOutput> => {
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
 * deserializeAws_restJson1GetInvestigationCommand
 */
export const de_GetInvestigationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInvestigationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    CreatedTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    EntityArn: __expectString,
    EntityType: __expectString,
    GraphArn: __expectString,
    InvestigationId: __expectString,
    ScopeEndTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    ScopeStartTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    Severity: __expectString,
    State: __expectString,
    Status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetMembersCommand
 */
export const de_GetMembersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMembersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    MemberDetails: (_) => de_MemberDetailList(_, context),
    UnprocessedAccounts: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListDatasourcePackagesCommand
 */
export const de_ListDatasourcePackagesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDatasourcePackagesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    DatasourcePackages: (_) => de_DatasourcePackageIngestDetails(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListGraphsCommand
 */
export const de_ListGraphsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGraphsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    GraphList: (_) => de_GraphList(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListIndicatorsCommand
 */
export const de_ListIndicatorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListIndicatorsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    GraphArn: __expectString,
    Indicators: _json,
    InvestigationId: __expectString,
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListInvestigationsCommand
 */
export const de_ListInvestigationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInvestigationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    InvestigationDetails: (_) => de_InvestigationDetails(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListInvitationsCommand
 */
export const de_ListInvitationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInvitationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Invitations: (_) => de_MemberDetailList(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListMembersCommand
 */
export const de_ListMembersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMembersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    MemberDetails: (_) => de_MemberDetailList(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListOrganizationAdminAccountsCommand
 */
export const de_ListOrganizationAdminAccountsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOrganizationAdminAccountsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Administrators: (_) => de_AdministratorList(_, context),
    NextToken: __expectString,
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
 * deserializeAws_restJson1RejectInvitationCommand
 */
export const de_RejectInvitationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RejectInvitationCommandOutput> => {
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
 * deserializeAws_restJson1StartInvestigationCommand
 */
export const de_StartInvestigationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartInvestigationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    InvestigationId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1StartMonitoringMemberCommand
 */
export const de_StartMonitoringMemberCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartMonitoringMemberCommandOutput> => {
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
 * deserializeAws_restJson1UpdateDatasourcePackagesCommand
 */
export const de_UpdateDatasourcePackagesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDatasourcePackagesCommandOutput> => {
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
 * deserializeAws_restJson1UpdateInvestigationStateCommand
 */
export const de_UpdateInvestigationStateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateInvestigationStateCommandOutput> => {
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
 * deserializeAws_restJson1UpdateOrganizationConfigurationCommand
 */
export const de_UpdateOrganizationConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateOrganizationConfigurationCommandOutput> => {
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
    case "com.amazonaws.detective#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.detective#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.detective#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.detective#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.detective#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.detective#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.detective#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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
    ErrorCode: __expectString,
    ErrorCodeReason: __expectString,
    Message: __expectString,
    SubErrorCode: __expectString,
    SubErrorCodeReason: __expectString,
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
    Resources: _json,
  });
  Object.assign(contents, doc);
  const exception = new ServiceQuotaExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1TooManyRequestsExceptionRes
 */
const de_TooManyRequestsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyRequestsException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new TooManyRequestsException({
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
    ErrorCode: __expectString,
    ErrorCodeReason: __expectString,
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

// se_Account omitted.

// se_AccountIdExtendedList omitted.

// se_AccountIdList omitted.

// se_AccountList omitted.

// se_DatasourcePackageList omitted.

/**
 * serializeAws_restJson1DateFilter
 */
const se_DateFilter = (input: DateFilter, context: __SerdeContext): any => {
  return take(input, {
    EndInclusive: __serializeDateTime,
    StartInclusive: __serializeDateTime,
  });
};

/**
 * serializeAws_restJson1FilterCriteria
 */
const se_FilterCriteria = (input: FilterCriteria, context: __SerdeContext): any => {
  return take(input, {
    CreatedTime: (_) => se_DateFilter(_, context),
    EntityArn: _json,
    Severity: _json,
    State: _json,
    Status: _json,
  });
};

// se_GraphArnList omitted.

// se_SortCriteria omitted.

// se_StringFilter omitted.

// se_TagMap omitted.

// de_AccountIdList omitted.

/**
 * deserializeAws_restJson1Administrator
 */
const de_Administrator = (output: any, context: __SerdeContext): Administrator => {
  return take(output, {
    AccountId: __expectString,
    DelegationTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    GraphArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1AdministratorList
 */
const de_AdministratorList = (output: any, context: __SerdeContext): Administrator[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Administrator(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1DatasourcePackageIngestDetail
 */
const de_DatasourcePackageIngestDetail = (output: any, context: __SerdeContext): DatasourcePackageIngestDetail => {
  return take(output, {
    DatasourcePackageIngestState: __expectString,
    LastIngestStateChange: (_: any) => de_LastIngestStateChangeDates(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1DatasourcePackageIngestDetails
 */
const de_DatasourcePackageIngestDetails = (
  output: any,
  context: __SerdeContext
): Partial<Record<DatasourcePackage, DatasourcePackageIngestDetail>> => {
  return Object.entries(output).reduce(
    (acc: Partial<Record<DatasourcePackage, DatasourcePackageIngestDetail>>, [key, value]: [string, any]) => {
      if (value === null) {
        return acc;
      }
      acc[key as DatasourcePackage] = de_DatasourcePackageIngestDetail(value, context);
      return acc;
    },
    {} as Partial<Record<DatasourcePackage, DatasourcePackageIngestDetail>>
  );
};

/**
 * deserializeAws_restJson1DatasourcePackageIngestHistory
 */
const de_DatasourcePackageIngestHistory = (
  output: any,
  context: __SerdeContext
): Partial<Record<DatasourcePackage, Partial<Record<DatasourcePackageIngestState, TimestampForCollection>>>> => {
  return Object.entries(output).reduce(
    (
      acc: Partial<Record<DatasourcePackage, Partial<Record<DatasourcePackageIngestState, TimestampForCollection>>>>,
      [key, value]: [string, any]
    ) => {
      if (value === null) {
        return acc;
      }
      acc[key as DatasourcePackage] = de_LastIngestStateChangeDates(value, context);
      return acc;
    },
    {} as Partial<Record<DatasourcePackage, Partial<Record<DatasourcePackageIngestState, TimestampForCollection>>>>
  );
};

// de_DatasourcePackageIngestStates omitted.

/**
 * deserializeAws_restJson1DatasourcePackageUsageInfo
 */
const de_DatasourcePackageUsageInfo = (output: any, context: __SerdeContext): DatasourcePackageUsageInfo => {
  return take(output, {
    VolumeUsageInBytes: __expectLong,
    VolumeUsageUpdateTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

// de_FlaggedIpAddressDetail omitted.

/**
 * deserializeAws_restJson1Graph
 */
const de_Graph = (output: any, context: __SerdeContext): Graph => {
  return take(output, {
    Arn: __expectString,
    CreatedTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

/**
 * deserializeAws_restJson1GraphList
 */
const de_GraphList = (output: any, context: __SerdeContext): Graph[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Graph(entry, context);
    });
  return retVal;
};

// de_ImpossibleTravelDetail omitted.

// de_Indicator omitted.

// de_IndicatorDetail omitted.

// de_Indicators omitted.

/**
 * deserializeAws_restJson1InvestigationDetail
 */
const de_InvestigationDetail = (output: any, context: __SerdeContext): InvestigationDetail => {
  return take(output, {
    CreatedTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    EntityArn: __expectString,
    EntityType: __expectString,
    InvestigationId: __expectString,
    Severity: __expectString,
    State: __expectString,
    Status: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1InvestigationDetails
 */
const de_InvestigationDetails = (output: any, context: __SerdeContext): InvestigationDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_InvestigationDetail(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1LastIngestStateChangeDates
 */
const de_LastIngestStateChangeDates = (
  output: any,
  context: __SerdeContext
): Partial<Record<DatasourcePackageIngestState, TimestampForCollection>> => {
  return Object.entries(output).reduce(
    (acc: Partial<Record<DatasourcePackageIngestState, TimestampForCollection>>, [key, value]: [string, any]) => {
      if (value === null) {
        return acc;
      }
      acc[key as DatasourcePackageIngestState] = de_TimestampForCollection(value, context);
      return acc;
    },
    {} as Partial<Record<DatasourcePackageIngestState, TimestampForCollection>>
  );
};

/**
 * deserializeAws_restJson1MemberDetail
 */
const de_MemberDetail = (output: any, context: __SerdeContext): MemberDetail => {
  return take(output, {
    AccountId: __expectString,
    AdministratorId: __expectString,
    DatasourcePackageIngestStates: _json,
    DisabledReason: __expectString,
    EmailAddress: __expectString,
    GraphArn: __expectString,
    InvitationType: __expectString,
    InvitedTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    MasterId: __expectString,
    PercentOfGraphUtilization: __limitedParseDouble,
    PercentOfGraphUtilizationUpdatedTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    Status: __expectString,
    UpdatedTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    VolumeUsageByDatasourcePackage: (_: any) => de_VolumeUsageByDatasourcePackage(_, context),
    VolumeUsageInBytes: __expectLong,
    VolumeUsageUpdatedTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

/**
 * deserializeAws_restJson1MemberDetailList
 */
const de_MemberDetailList = (output: any, context: __SerdeContext): MemberDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_MemberDetail(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1MembershipDatasources
 */
const de_MembershipDatasources = (output: any, context: __SerdeContext): MembershipDatasources => {
  return take(output, {
    AccountId: __expectString,
    DatasourcePackageIngestHistory: (_: any) => de_DatasourcePackageIngestHistory(_, context),
    GraphArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1MembershipDatasourcesList
 */
const de_MembershipDatasourcesList = (output: any, context: __SerdeContext): MembershipDatasources[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_MembershipDatasources(entry, context);
    });
  return retVal;
};

// de_NewAsoDetail omitted.

// de_NewGeolocationDetail omitted.

// de_NewUserAgentDetail omitted.

// de_RelatedFindingDetail omitted.

// de_RelatedFindingGroupDetail omitted.

// de_ResourceList omitted.

// de_TagMap omitted.

/**
 * deserializeAws_restJson1TimestampForCollection
 */
const de_TimestampForCollection = (output: any, context: __SerdeContext): TimestampForCollection => {
  return take(output, {
    Timestamp: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

// de_TTPsObservedDetail omitted.

// de_UnprocessedAccount omitted.

// de_UnprocessedAccountList omitted.

// de_UnprocessedGraph omitted.

// de_UnprocessedGraphList omitted.

/**
 * deserializeAws_restJson1VolumeUsageByDatasourcePackage
 */
const de_VolumeUsageByDatasourcePackage = (
  output: any,
  context: __SerdeContext
): Partial<Record<DatasourcePackage, DatasourcePackageUsageInfo>> => {
  return Object.entries(output).reduce(
    (acc: Partial<Record<DatasourcePackage, DatasourcePackageUsageInfo>>, [key, value]: [string, any]) => {
      if (value === null) {
        return acc;
      }
      acc[key as DatasourcePackage] = de_DatasourcePackageUsageInfo(value, context);
      return acc;
    },
    {} as Partial<Record<DatasourcePackage, DatasourcePackageUsageInfo>>
  );
};

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

const _TK = "TagKeys";
const _tK = "tagKeys";
