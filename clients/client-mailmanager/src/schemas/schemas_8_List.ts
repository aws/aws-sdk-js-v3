// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AI,
  _AIA,
  _AId,
  _AII,
  _AIr,
  _ALr,
  _AN,
  _ANr,
  _AR,
  _Ar,
  _Arc,
  _AS,
  _ASA,
  _ASd,
  _ASI,
  _ASr,
  _CT,
  _DA,
  _EI,
  _ESL,
  _ESx,
  _Ex,
  _IP,
  _IPI,
  _IPL,
  _IPN,
  _IPn,
  _LA,
  _LAE,
  _LAER,
  _LAERi,
  _LAI,
  _LAIR,
  _LAIRi,
  _LAR,
  _LARi,
  _LAS,
  _LASi,
  _LASR,
  _LASRi,
  _LASRis,
  _LASRist,
  _LIP,
  _LIPR,
  _LIPRi,
  _LMD,
  _LRS,
  _LRSR,
  _LRSRi,
  _LTP,
  _LTPR,
  _LTPRi,
  _LUT,
  _NT,
  _PSa,
  _RS,
  _RSI,
  _RSN,
  _RSu,
  _Se,
  _SI,
  _SSe,
  _SSL,
  _St,
  _TP,
  _TPI,
  _TPL,
  _TPN,
  _TPr,
  _Ty,
  n0,
} from "./schemas_0";
import { ExportStatus, SearchStatus } from "./schemas_2_Archive";

/* eslint no-var: 0 */

export var AddonInstance = struct(n0, _AI, 0, [_AII, _ASI, _AN, _AIA, _CT], [0, 0, 0, 0, 4]);
export var AddonSubscription = struct(n0, _AS, 0, [_ASI, _AN, _ASA, _CT], [0, 0, 0, 4]);
export var Archive = struct(n0, _Ar, 0, [_AIr, _ANr, _ASr, _LUT], [0, 0, 0, 4]);
export var ExportSummary = struct(n0, _ESx, 0, [_EI, _St], [0, () => ExportStatus]);
export var IngressPoint = struct(n0, _IP, 0, [_IPN, _IPI, _St, _Ty, _AR], [0, 0, 0, 0, 0]);
export var ListAddonInstancesRequest = struct(n0, _LAIR, 0, [_NT, _PSa], [0, 1]);
export var ListAddonInstancesResponse = struct(n0, _LAIRi, 0, [_AId, _NT], [() => AddonInstances, 0]);
export var ListAddonSubscriptionsRequest = struct(n0, _LASR, 0, [_NT, _PSa], [0, 1]);
export var ListAddonSubscriptionsResponse = struct(n0, _LASRi, 0, [_ASd, _NT], [() => AddonSubscriptions, 0]);
export var ListArchiveExportsRequest = struct(n0, _LAER, 0, [_AIr, _NT, _PSa], [0, 0, 1]);
export var ListArchiveExportsResponse = struct(n0, _LAERi, 0, [_Ex, _NT], [() => ExportSummaryList, 0]);
export var ListArchiveSearchesRequest = struct(n0, _LASRis, 0, [_AIr, _NT, _PSa], [0, 0, 1]);
export var ListArchiveSearchesResponse = struct(n0, _LASRist, 0, [_Se, _NT], [() => SearchSummaryList, 0]);
export var ListArchivesRequest = struct(n0, _LAR, 0, [_NT, _PSa], [0, 1]);
export var ListArchivesResponse = struct(n0, _LARi, 0, [_Arc, _NT], [() => ArchivesList, 0]);
export var ListIngressPointsRequest = struct(n0, _LIPR, 0, [_PSa, _NT], [1, 0]);
export var ListIngressPointsResponse = struct(n0, _LIPRi, 0, [_IPn, _NT], [() => IngressPointsList, 0]);
export var ListRuleSetsRequest = struct(n0, _LRSR, 0, [_NT, _PSa], [0, 1]);
export var ListRuleSetsResponse = struct(n0, _LRSRi, 0, [_RS, _NT], [() => RuleSets, 0]);
export var ListTrafficPoliciesRequest = struct(n0, _LTPR, 0, [_PSa, _NT], [1, 0]);
export var ListTrafficPoliciesResponse = struct(n0, _LTPRi, 0, [_TP, _NT], [() => TrafficPolicyList, 0]);
export var RuleSet = struct(n0, _RSu, 0, [_RSI, _RSN, _LMD], [0, 0, 4]);
export var SearchSummary = struct(n0, _SSe, 0, [_SI, _St], [0, () => SearchStatus]);
export var TrafficPolicy = struct(n0, _TPr, 0, [_TPN, _TPI, _DA], [0, 0, 0]);
export var AddonInstances = list(n0, _AId, 0, () => AddonInstance);
export var AddonSubscriptions = list(n0, _ASd, 0, () => AddonSubscription);
export var ArchivesList = list(n0, _ALr, 0, () => Archive);
export var ExportSummaryList = list(n0, _ESL, 0, () => ExportSummary);
export var IngressPointsList = list(n0, _IPL, 0, () => IngressPoint);
export var RuleSets = list(n0, _RS, 0, () => RuleSet);
export var SearchSummaryList = list(n0, _SSL, 0, () => SearchSummary);
export var TrafficPolicyList = list(n0, _TPL, 0, () => TrafficPolicy);
export var ListAddonInstances = op(
  n0,
  _LAI,
  0,
  () => ListAddonInstancesRequest,
  () => ListAddonInstancesResponse
);
export var ListAddonSubscriptions = op(
  n0,
  _LAS,
  0,
  () => ListAddonSubscriptionsRequest,
  () => ListAddonSubscriptionsResponse
);
export var ListArchiveExports = op(
  n0,
  _LAE,
  0,
  () => ListArchiveExportsRequest,
  () => ListArchiveExportsResponse
);
export var ListArchives = op(
  n0,
  _LA,
  0,
  () => ListArchivesRequest,
  () => ListArchivesResponse
);
export var ListArchiveSearches = op(
  n0,
  _LASi,
  0,
  () => ListArchiveSearchesRequest,
  () => ListArchiveSearchesResponse
);
export var ListIngressPoints = op(
  n0,
  _LIP,
  0,
  () => ListIngressPointsRequest,
  () => ListIngressPointsResponse
);
export var ListRuleSets = op(
  n0,
  _LRS,
  0,
  () => ListRuleSetsRequest,
  () => ListRuleSetsResponse
);
export var ListTrafficPolicies = op(
  n0,
  _LTP,
  0,
  () => ListTrafficPoliciesRequest,
  () => ListTrafficPoliciesResponse
);
