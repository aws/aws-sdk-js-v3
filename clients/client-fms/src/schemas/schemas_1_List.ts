// smithy-typescript generated code
import { error, list, map, op, struct } from "@smithy/core/schema";

import { InvalidTypeException as __InvalidTypeException } from "../models/index";
import {
  _AI,
  _AL,
  _ALA,
  _ALD,
  _ALDp,
  _ALDS,
  _ALp,
  _AN,
  _Ap,
  _c,
  _CPSM,
  _CS,
  _CT,
  _DL,
  _DLe,
  _DR,
  _DRL,
  _DUFMMR,
  _e,
  _ELE,
  _EM,
  _ER,
  _ERTx,
  _ERv,
  _FDM,
  _FE,
  _FRFFE,
  _FRFLE,
  _GAL,
  _GALR,
  _GALRe,
  _GP,
  _GPL,
  _GPLR,
  _GPLRe,
  _GPR,
  _GPRe,
  _I,
  _IIM,
  _IM,
  _ITE,
  _K,
  _LA,
  _LAL,
  _LALR,
  _LALRi,
  _LCS,
  _LCSR,
  _LCSRi,
  _LDR,
  _LDRR,
  _LDRRi,
  _LE,
  _LI,
  _LN,
  _LP,
  _LPL,
  _LPLR,
  _LPLRi,
  _LPR,
  _LPRi,
  _LU,
  _LUT,
  _LUTa,
  _MA,
  _MAIe,
  _Me,
  _MR,
  _MSD,
  _N,
  _NACP,
  _NAEe,
  _NAES,
  _NFP,
  _NT,
  _P,
  _PA,
  _PAL,
  _PALR,
  _PALRu,
  _PALu,
  _PCS,
  _PCSL,
  _PD,
  _PI,
  _PL,
  _PLA,
  _PLD,
  _PLDr,
  _PLDS,
  _PLo,
  _PLr,
  _PN,
  _PO,
  _Po,
  _Pol,
  _POo,
  _PP,
  _PPL,
  _PPLR,
  _PPLRu,
  _PPLu,
  _PPR,
  _PPRu,
  _PS,
  _PSL,
  _PSo,
  _PUT,
  _RE,
  _RSIe,
  _RT,
  _RTe,
  _RTes,
  _RTL,
  _RTLO,
  _SSPD,
  _SST,
  _T,
  _TL,
  _TPFP,
  _URI,
  _Va,
  _VC,
  n0,
} from "./schemas_0";
import { TagList } from "./schemas_2_Resource";
import { NetworkAclEntry } from "./schemas_5_Get";

/* eslint no-var: 0 */

export var App = struct(n0, _Ap, 0, [_AN, _P, _Po], [0, 0, 1]);
export var AppsListData = struct(
  n0,
  _ALD,
  0,
  [_LI, _LN, _LUT, _CT, _LUTa, _AL, _PAL],
  [0, 0, 0, 4, 4, () => AppsList, () => PreviousAppsList]
);
export var AppsListDataSummary = struct(n0, _ALDS, 0, [_LA, _LI, _LN, _AL], [0, 0, 0, () => AppsList]);
export var DiscoveredResource = struct(n0, _DR, 0, [_URI, _AI, _T, _N], [0, 0, 0, 0]);
export var EvaluationResult = struct(n0, _ER, 0, [_CS, _VC, _ELE], [0, 1, 2]);
export var GetAppsListRequest = struct(n0, _GALR, 0, [_LI, _DL], [0, 2]);
export var GetAppsListResponse = struct(n0, _GALRe, 0, [_AL, _ALA], [() => AppsListData, 0]);
export var GetPolicyRequest = struct(n0, _GPR, 0, [_PI], [0]);
export var GetPolicyResponse = struct(n0, _GPRe, 0, [_Pol, _PA], [() => Policy, 0]);
export var GetProtocolsListRequest = struct(n0, _GPLR, 0, [_LI, _DL], [0, 2]);
export var GetProtocolsListResponse = struct(n0, _GPLRe, 0, [_PL, _PLA], [() => ProtocolsListData, 0]);
export var InvalidTypeException = error(
  n0,
  _ITE,
  {
    [_e]: _c,
  },
  [_Me],
  [0],

  __InvalidTypeException
);
export var ListAppsListsRequest = struct(n0, _LALR, 0, [_DLe, _NT, _MR], [2, 0, 1]);
export var ListAppsListsResponse = struct(n0, _LALRi, 0, [_ALp, _NT], [() => AppsListsData, 0]);
export var ListComplianceStatusRequest = struct(n0, _LCSR, 0, [_PI, _NT, _MR], [0, 0, 1]);
export var ListComplianceStatusResponse = struct(n0, _LCSRi, 0, [_PCSL, _NT], [() => PolicyComplianceStatusList, 0]);
export var ListDiscoveredResourcesRequest = struct(n0, _LDRR, 0, [_MAIe, _RT, _MR, _NT], [64 | 0, 0, 1, 0]);
export var ListDiscoveredResourcesResponse = struct(n0, _LDRRi, 0, [_I, _NT], [() => DiscoveredResourceList, 0]);
export var ListPoliciesRequest = struct(n0, _LPR, 0, [_NT, _MR], [0, 1]);
export var ListPoliciesResponse = struct(n0, _LPRi, 0, [_PLo, _NT], [() => PolicySummaryList, 0]);
export var ListProtocolsListsRequest = struct(n0, _LPLR, 0, [_DLe, _NT, _MR], [2, 0, 1]);
export var ListProtocolsListsResponse = struct(n0, _LPLRi, 0, [_PLr, _NT], [() => ProtocolsListsData, 0]);
export var NetworkAclCommonPolicy = struct(n0, _NACP, 0, [_NAES], [() => NetworkAclEntrySet]);
export var NetworkAclEntrySet = struct(
  n0,
  _NAES,
  0,
  [_FE, _FRFFE, _LE, _FRFLE],
  [() => NetworkAclEntries, 2, () => NetworkAclEntries, 2]
);
export var NetworkFirewallPolicy = struct(n0, _NFP, 0, [_FDM], [0]);
export var Policy = struct(
  n0,
  _Pol,
  0,
  [_PI, _PN, _PUT, _SSPD, _RT, _RTL, _RTe, _ERTx, _RE, _DUFMMR, _IM, _EM, _RSIe, _PD, _PS, _RTLO],
  [
    0,
    0,
    0,
    () => SecurityServicePolicyData,
    0,
    64 | 0,
    () => ResourceTags,
    2,
    2,
    2,
    map(n0, _CPSM, 0, 0, 64 | 0),
    map(n0, _CPSM, 0, 0, 64 | 0),
    64 | 0,
    0,
    0,
    0,
  ]
);
export var PolicyComplianceStatus = struct(
  n0,
  _PCS,
  0,
  [_PO, _PI, _PN, _MA, _ERv, _LU, _IIM],
  [0, 0, 0, 0, () => EvaluationResults, 4, 128 | 0]
);
export var PolicyOption = struct(
  n0,
  _POo,
  0,
  [_NFP, _TPFP, _NACP],
  [() => NetworkFirewallPolicy, () => ThirdPartyFirewallPolicy, () => NetworkAclCommonPolicy]
);
export var PolicySummary = struct(n0, _PSo, 0, [_PA, _PI, _PN, _RT, _SST, _RE, _DUFMMR, _PS], [0, 0, 0, 0, 0, 2, 2, 0]);
export var ProtocolsListData = struct(
  n0,
  _PLD,
  0,
  [_LI, _LN, _LUT, _CT, _LUTa, _PL, _PPL],
  [0, 0, 0, 4, 4, 64 | 0, map(n0, _PPL, 0, 0, 64 | 0)]
);
export var ProtocolsListDataSummary = struct(n0, _PLDS, 0, [_LA, _LI, _LN, _PL], [0, 0, 0, 64 | 0]);
export var PutAppsListRequest = struct(n0, _PALR, 0, [_AL, _TL], [() => AppsListData, () => TagList]);
export var PutAppsListResponse = struct(n0, _PALRu, 0, [_AL, _ALA], [() => AppsListData, 0]);
export var PutPolicyRequest = struct(n0, _PPR, 0, [_Pol, _TL], [() => Policy, () => TagList]);
export var PutPolicyResponse = struct(n0, _PPRu, 0, [_Pol, _PA], [() => Policy, 0]);
export var PutProtocolsListRequest = struct(n0, _PPLR, 0, [_PL, _TL], [() => ProtocolsListData, () => TagList]);
export var PutProtocolsListResponse = struct(n0, _PPLRu, 0, [_PL, _PLA], [() => ProtocolsListData, 0]);
export var ResourceTag = struct(n0, _RTes, 0, [_K, _Va], [0, 0]);
export var SecurityServicePolicyData = struct(n0, _SSPD, 0, [_T, _MSD, _POo], [0, 0, () => PolicyOption]);
export var ThirdPartyFirewallPolicy = struct(n0, _TPFP, 0, [_FDM], [0]);
export var AppsList = list(n0, _AL, 0, () => App);
export var AppsListsData = list(n0, _ALDp, 0, () => AppsListDataSummary);
export var AWSAccountIdList = 64 | 0;

export var CustomerPolicyScopeIdList = 64 | 0;

export var DiscoveredResourceList = list(n0, _DRL, 0, () => DiscoveredResource);
export var EvaluationResults = list(n0, _ERv, 0, () => EvaluationResult);
export var NetworkAclEntries = list(n0, _NAEe, 0, () => NetworkAclEntry);
export var PolicyComplianceStatusList = list(n0, _PCSL, 0, () => PolicyComplianceStatus);
export var PolicySummaryList = list(n0, _PSL, 0, () => PolicySummary);
export var ProtocolsList = 64 | 0;

export var ProtocolsListsData = list(n0, _PLDr, 0, () => ProtocolsListDataSummary);
export var ResourceSetIds = 64 | 0;

export var ResourceTags = list(n0, _RTe, 0, () => ResourceTag);
export var CustomerPolicyScopeMap = map(n0, _CPSM, 0, 0, 64 | 0);
export var PreviousAppsList = map(n0, _PAL, 0, 0, () => AppsList);
export var PreviousProtocolsList = map(n0, _PPL, 0, 0, 64 | 0);
export var GetAppsList = op(
  n0,
  _GAL,
  0,
  () => GetAppsListRequest,
  () => GetAppsListResponse
);
export var GetPolicy = op(
  n0,
  _GP,
  0,
  () => GetPolicyRequest,
  () => GetPolicyResponse
);
export var GetProtocolsList = op(
  n0,
  _GPL,
  0,
  () => GetProtocolsListRequest,
  () => GetProtocolsListResponse
);
export var ListAppsLists = op(
  n0,
  _LAL,
  0,
  () => ListAppsListsRequest,
  () => ListAppsListsResponse
);
export var ListComplianceStatus = op(
  n0,
  _LCS,
  0,
  () => ListComplianceStatusRequest,
  () => ListComplianceStatusResponse
);
export var ListDiscoveredResources = op(
  n0,
  _LDR,
  0,
  () => ListDiscoveredResourcesRequest,
  () => ListDiscoveredResourcesResponse
);
export var ListPolicies = op(
  n0,
  _LP,
  0,
  () => ListPoliciesRequest,
  () => ListPoliciesResponse
);
export var ListProtocolsLists = op(
  n0,
  _LPL,
  0,
  () => ListProtocolsListsRequest,
  () => ListProtocolsListsResponse
);
export var PutAppsList = op(
  n0,
  _PALu,
  0,
  () => PutAppsListRequest,
  () => PutAppsListResponse
);
export var PutPolicy = op(
  n0,
  _PP,
  0,
  () => PutPolicyRequest,
  () => PutPolicyResponse
);
export var PutProtocolsList = op(
  n0,
  _PPLu,
  0,
  () => PutProtocolsListRequest,
  () => PutProtocolsListResponse
);
