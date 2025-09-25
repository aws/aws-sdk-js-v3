// smithy-typescript generated code
import { list, map, op, sim, struct } from "@smithy/core/schema";

import {
  _A,
  _Ac,
  _Ad,
  _Adm,
  _AI,
  _AIc,
  _AId,
  _AL,
  _ALd,
  _BGGMD,
  _BGGMDR,
  _BGGMDRa,
  _BGMD,
  _BGMDR,
  _BGMDRa,
  _CM,
  _CMR,
  _CMRr,
  _DEN,
  _DM,
  _DMR,
  _DMRe,
  _DPIH,
  _DPISa,
  _DPUI,
  _DR,
  _DT,
  _EA,
  _EM,
  _EOAA,
  _EOAAR,
  _GA,
  _GAr,
  _GM,
  _GMR,
  _GMRe,
  _h,
  _Inv,
  _ITn,
  _ITnv,
  _LIis,
  _LIRistn,
  _LIRistnv,
  _LM,
  _LMR,
  _LMRi,
  _LOAA,
  _LOAAR,
  _LOAARi,
  _M,
  _MD,
  _MDe,
  _MDem,
  _MDemb,
  _MDL,
  _MDLe,
  _Me,
  _MI,
  _MR,
  _NT,
  _POGU,
  _POGUUT,
  _R,
  _SMM,
  _SMMR,
  _St,
  _UA,
  _UAL,
  _UAn,
  _UG,
  _UGL,
  _UGn,
  _UT,
  _VUBDP,
  _VUIB,
  _VUUT,
  _VUUTo,
  n0,
  Unit,
} from "./schemas_0";
import { LastIngestStateChangeDates } from "./schemas_6_Members";

/* eslint no-var: 0 */

export var EmailAddress = sim(n0, _EA, 0, 8);
export var EmailMessage = sim(n0, _EM, 0, 8);
export var Account = struct(n0, _A, 0, [_AI, _EA], [0, [() => EmailAddress, 0]]);
export var Administrator = struct(n0, _Ad, 0, [_AI, _GA, _DT], [0, 0, 5]);
export var BatchGetGraphMemberDatasourcesRequest = struct(n0, _BGGMDR, 0, [_GA, _AIc], [0, 64 | 0]);
export var BatchGetGraphMemberDatasourcesResponse = struct(
  n0,
  _BGGMDRa,
  0,
  [_MD, _UA],
  [() => MembershipDatasourcesList, () => UnprocessedAccountList]
);
export var BatchGetMembershipDatasourcesRequest = struct(n0, _BGMDR, 0, [_GAr], [64 | 0]);
export var BatchGetMembershipDatasourcesResponse = struct(
  n0,
  _BGMDRa,
  0,
  [_MDe, _UG],
  [() => MembershipDatasourcesList, () => UnprocessedGraphList]
);
export var CreateMembersRequest = struct(
  n0,
  _CMR,
  0,
  [_GA, _M, _DEN, _Ac],
  [0, [() => EmailMessage, 0], 2, [() => AccountList, 0]]
);
export var CreateMembersResponse = struct(
  n0,
  _CMRr,
  0,
  [_Me, _UA],
  [[() => MemberDetailList, 0], () => UnprocessedAccountList]
);
export var DatasourcePackageUsageInfo = struct(n0, _DPUI, 0, [_VUIB, _VUUT], [1, 5]);
export var DeleteMembersRequest = struct(n0, _DMR, 0, [_GA, _AIc], [0, 64 | 0]);
export var DeleteMembersResponse = struct(n0, _DMRe, 0, [_AIc, _UA], [64 | 0, () => UnprocessedAccountList]);
export var EnableOrganizationAdminAccountRequest = struct(n0, _EOAAR, 0, [_AI], [0]);
export var GetMembersRequest = struct(n0, _GMR, 0, [_GA, _AIc], [0, 64 | 0]);
export var GetMembersResponse = struct(
  n0,
  _GMRe,
  0,
  [_MDem, _UA],
  [[() => MemberDetailList, 0], () => UnprocessedAccountList]
);
export var ListInvitationsRequest = struct(n0, _LIRistn, 0, [_NT, _MR], [0, 1]);
export var ListInvitationsResponse = struct(n0, _LIRistnv, 0, [_Inv, _NT], [[() => MemberDetailList, 0], 0]);
export var ListMembersRequest = struct(n0, _LMR, 0, [_GA, _NT, _MR], [0, 0, 1]);
export var ListMembersResponse = struct(n0, _LMRi, 0, [_MDem, _NT], [[() => MemberDetailList, 0], 0]);
export var ListOrganizationAdminAccountsRequest = struct(n0, _LOAAR, 0, [_NT, _MR], [0, 1]);
export var ListOrganizationAdminAccountsResponse = struct(n0, _LOAARi, 0, [_Adm, _NT], [() => AdministratorList, 0]);
export var MemberDetail = struct(
  n0,
  _MDemb,
  0,
  [_AI, _EA, _GA, _MI, _AId, _St, _DR, _ITn, _UT, _VUIB, _VUUTo, _POGU, _POGUUT, _ITnv, _VUBDP, _DPISa],
  [0, [() => EmailAddress, 0], 0, 0, 0, 0, 0, 5, 5, 1, 5, 1, 5, 0, () => VolumeUsageByDatasourcePackage, 128 | 0]
);
export var MembershipDatasources = struct(n0, _MDe, 0, [_AI, _GA, _DPIH], [0, 0, () => DatasourcePackageIngestHistory]);
export var StartMonitoringMemberRequest = struct(n0, _SMMR, 0, [_GA, _AI], [0, 0]);
export var UnprocessedAccount = struct(n0, _UAn, 0, [_AI, _R], [0, 0]);
export var UnprocessedGraph = struct(n0, _UGn, 0, [_GA, _R], [0, 0]);
export var AccountIdExtendedList = 64 | 0;

export var AccountIdList = 64 | 0;

export var AccountList = list(n0, _AL, 0, [() => Account, 0]);
export var AdministratorList = list(n0, _ALd, 0, () => Administrator);
export var GraphArnList = 64 | 0;

export var MemberDetailList = list(n0, _MDL, 0, [() => MemberDetail, 0]);
export var MembershipDatasourcesList = list(n0, _MDLe, 0, () => MembershipDatasources);
export var UnprocessedAccountList = list(n0, _UAL, 0, () => UnprocessedAccount);
export var UnprocessedGraphList = list(n0, _UGL, 0, () => UnprocessedGraph);
export var DatasourcePackageIngestHistory = map(n0, _DPIH, 0, 0, () => LastIngestStateChangeDates);
export var DatasourcePackageIngestStates = 128 | 0;

export var VolumeUsageByDatasourcePackage = map(n0, _VUBDP, 0, 0, () => DatasourcePackageUsageInfo);
export var BatchGetGraphMemberDatasources = op(
  n0,
  _BGGMD,
  {
    [_h]: ["POST", "/graph/datasources/get", 200],
  },
  () => BatchGetGraphMemberDatasourcesRequest,
  () => BatchGetGraphMemberDatasourcesResponse
);
export var BatchGetMembershipDatasources = op(
  n0,
  _BGMD,
  {
    [_h]: ["POST", "/membership/datasources/get", 200],
  },
  () => BatchGetMembershipDatasourcesRequest,
  () => BatchGetMembershipDatasourcesResponse
);
export var CreateMembers = op(
  n0,
  _CM,
  {
    [_h]: ["POST", "/graph/members", 200],
  },
  () => CreateMembersRequest,
  () => CreateMembersResponse
);
export var DeleteMembers = op(
  n0,
  _DM,
  {
    [_h]: ["POST", "/graph/members/removal", 200],
  },
  () => DeleteMembersRequest,
  () => DeleteMembersResponse
);
export var EnableOrganizationAdminAccount = op(
  n0,
  _EOAA,
  {
    [_h]: ["POST", "/orgs/enableAdminAccount", 200],
  },
  () => EnableOrganizationAdminAccountRequest,
  () => Unit
);
export var GetMembers = op(
  n0,
  _GM,
  {
    [_h]: ["POST", "/graph/members/get", 200],
  },
  () => GetMembersRequest,
  () => GetMembersResponse
);
export var ListInvitations = op(
  n0,
  _LIis,
  {
    [_h]: ["POST", "/invitations/list", 200],
  },
  () => ListInvitationsRequest,
  () => ListInvitationsResponse
);
export var ListMembers = op(
  n0,
  _LM,
  {
    [_h]: ["POST", "/graph/members/list", 200],
  },
  () => ListMembersRequest,
  () => ListMembersResponse
);
export var ListOrganizationAdminAccounts = op(
  n0,
  _LOAA,
  {
    [_h]: ["POST", "/orgs/adminAccountslist", 200],
  },
  () => ListOrganizationAdminAccountsRequest,
  () => ListOrganizationAdminAccountsResponse
);
export var StartMonitoringMember = op(
  n0,
  _SMM,
  {
    [_h]: ["POST", "/graph/member/monitoringstate", 200],
  },
  () => StartMonitoringMemberRequest,
  () => Unit
);
