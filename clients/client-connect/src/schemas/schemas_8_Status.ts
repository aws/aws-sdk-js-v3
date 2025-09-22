// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _A,
  _ACn,
  _AF,
  _ASARN,
  _ASg,
  _ASge,
  _ASI,
  _ASIg,
  _ASL,
  _ASS,
  _ASSC,
  _ASSCL,
  _ASSF,
  _ASSL,
  _AST,
  _ATC,
  _C,
  _CAS,
  _CASR,
  _CASRr,
  _Ch,
  _CMD,
  _CMDC,
  _CMRu,
  _CMRur,
  _CMSC,
  _CMSCMO,
  _CMur,
  _CMurr,
  _Col,
  _Com,
  _D,
  _DAS,
  _DASR,
  _DASRe,
  _Dim,
  _DO,
  _DST,
  _ETnd,
  _Fil,
  _G,
  _GCMD,
  _GCMDR,
  _GCMDRe,
  _GMD,
  _GMDR,
  _GMDRe,
  _h,
  _HM,
  _HMD,
  _HMDC,
  _HMi,
  _HMR,
  _HMRi,
  _hQ,
  _I,
  _II,
  _LAS,
  _LASR,
  _LASRi,
  _LMR,
  _LMT,
  _Met,
  _MR,
  _mR,
  _MRa,
  _N,
  _NT,
  _nT,
  _OC,
  _PUS,
  _PUSR,
  _PUSRu,
  _Q,
  _Qu,
  _RON,
  _RP,
  _RPo,
  _RSE,
  _RSEo,
  _S,
  _SAS,
  _SASR,
  _SASRe,
  _SBM,
  _SC,
  _SCe,
  _SCo,
  _SF,
  _SO,
  _Sta,
  _STtar,
  _T,
  _Ta,
  _Th,
  _TVh,
  _UAS,
  _UASR,
  _UI,
  _Un,
  _V,
  n0,
  StringCondition,
  Unit,
} from "./schemas_0";
import { QueueReference, RoutingProfileReference } from "./schemas_84_Get";
import { ControlPlaneAttributeFilter } from "./schemas_87_Search";

/* eslint no-var: 0 */

export var AgentStatus = struct(
  n0,
  _ASg,
  0,
  [_ASARN, _ASI, _N, _D, _T, _DO, _S, _Ta, _LMT, _LMR],
  [0, 0, 0, 0, 0, 1, 0, 128 | 0, 4, 0]
);
export var AgentStatusIdentifier = struct(n0, _ASIg, 0, [_A, _I], [0, 0]);
export var AgentStatusSearchCriteria = struct(
  n0,
  _ASSC,
  0,
  [_OC, _ACn, _SC],
  [() => AgentStatusSearchConditionList, () => AgentStatusSearchConditionList, () => StringCondition]
);
export var AgentStatusSearchFilter = struct(n0, _ASSF, 0, [_AF], [() => ControlPlaneAttributeFilter]);
export var AgentStatusSummary = struct(n0, _ASS, 0, [_I, _A, _N, _T, _LMT, _LMR], [0, 0, 0, 0, 4, 0]);
export var CreateAgentStatusRequest = struct(n0, _CASR, 0, [_II, _N, _D, _S, _DO, _Ta], [[0, 1], 0, 0, 0, 1, 128 | 0]);
export var CreateAgentStatusResponse = struct(n0, _CASRr, 0, [_ASARN, _ASI], [0, 0]);
export var CurrentMetric = struct(n0, _CMur, 0, [_N, _Un], [0, 0]);
export var CurrentMetricData = struct(n0, _CMD, 0, [_Met, _V], [() => CurrentMetric, 1]);
export var CurrentMetricResult = struct(
  n0,
  _CMRu,
  0,
  [_Dim, _Col],
  [() => Dimensions, () => CurrentMetricDataCollections]
);
export var CurrentMetricSortCriteria = struct(n0, _CMSC, 0, [_SBM, _SO], [0, 0]);
export var DescribeAgentStatusRequest = struct(
  n0,
  _DASR,
  0,
  [_II, _ASI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DescribeAgentStatusResponse = struct(n0, _DASRe, 0, [_ASg], [() => AgentStatus]);
export var Dimensions = struct(
  n0,
  _Dim,
  0,
  [_Q, _C, _RP, _RSE, _ASg],
  [() => QueueReference, 0, () => RoutingProfileReference, 0, () => AgentStatusIdentifier]
);
export var Filters = struct(n0, _Fil, 0, [_Qu, _Ch, _RPo, _RSEo, _ASge], [64 | 0, 64 | 0, 64 | 0, 64 | 0, 64 | 0]);
export var GetCurrentMetricDataRequest = struct(
  n0,
  _GCMDR,
  0,
  [_II, _Fil, _G, _CMurr, _NT, _MRa, _SCo],
  [[0, 1], () => Filters, 64 | 0, () => CurrentMetrics, 0, 1, () => CurrentMetricSortCriteriaMaxOne]
);
export var GetCurrentMetricDataResponse = struct(
  n0,
  _GCMDRe,
  0,
  [_NT, _MR, _DST, _ATC],
  [0, () => CurrentMetricResults, 4, 1]
);
export var GetMetricDataRequest = struct(
  n0,
  _GMDR,
  0,
  [_II, _STtar, _ETnd, _Fil, _G, _HM, _NT, _MRa],
  [[0, 1], 4, 4, () => Filters, 64 | 0, () => HistoricalMetrics, 0, 1]
);
export var GetMetricDataResponse = struct(n0, _GMDRe, 0, [_NT, _MR], [0, () => HistoricalMetricResults]);
export var HistoricalMetric = struct(n0, _HMi, 0, [_N, _Th, _Sta, _Un], [0, () => Threshold, 0, 0]);
export var HistoricalMetricData = struct(n0, _HMD, 0, [_Met, _V], [() => HistoricalMetric, 1]);
export var HistoricalMetricResult = struct(
  n0,
  _HMR,
  0,
  [_Dim, _Col],
  [() => Dimensions, () => HistoricalMetricDataCollections]
);
export var ListAgentStatusRequest = struct(
  n0,
  _LASR,
  0,
  [_II, _NT, _MRa, _AST],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      64 | 0,
      {
        [_hQ]: _AST,
      },
    ],
  ]
);
export var ListAgentStatusResponse = struct(n0, _LASRi, 0, [_NT, _ASSL], [0, () => AgentStatusSummaryList]);
export var PutUserStatusRequest = struct(n0, _PUSR, 0, [_UI, _II, _ASI], [[0, 1], [0, 1], 0]);
export var PutUserStatusResponse = struct(n0, _PUSRu, 0, [], []);
export var SearchAgentStatusesRequest = struct(
  n0,
  _SASR,
  0,
  [_II, _NT, _MRa, _SF, _SCe],
  [0, 0, 1, () => AgentStatusSearchFilter, () => AgentStatusSearchCriteria]
);
export var SearchAgentStatusesResponse = struct(n0, _SASRe, 0, [_ASge, _NT, _ATC], [() => AgentStatusList, 0, 1]);
export var Threshold = struct(n0, _Th, 0, [_Com, _TVh], [0, 1]);
export var UpdateAgentStatusRequest = struct(
  n0,
  _UASR,
  0,
  [_II, _ASI, _N, _D, _S, _DO, _RON],
  [[0, 1], [0, 1], 0, 0, 0, 1, 2]
);
export var AgentStatuses = 64 | 0;

export var AgentStatusList = list(n0, _ASL, 0, () => AgentStatus);
export var AgentStatusSearchConditionList = list(n0, _ASSCL, 0, () => AgentStatusSearchCriteria);
export var AgentStatusSummaryList = list(n0, _ASSL, 0, () => AgentStatusSummary);
export var AgentStatusTypes = 64 | 0;

export var Channels = 64 | 0;

export var CurrentMetricDataCollections = list(n0, _CMDC, 0, () => CurrentMetricData);
export var CurrentMetricResults = list(n0, _CMRur, 0, () => CurrentMetricResult);
export var CurrentMetrics = list(n0, _CMurr, 0, () => CurrentMetric);
export var CurrentMetricSortCriteriaMaxOne = list(n0, _CMSCMO, 0, () => CurrentMetricSortCriteria);
export var Groupings = 64 | 0;

export var HistoricalMetricDataCollections = list(n0, _HMDC, 0, () => HistoricalMetricData);
export var HistoricalMetricResults = list(n0, _HMRi, 0, () => HistoricalMetricResult);
export var HistoricalMetrics = list(n0, _HM, 0, () => HistoricalMetric);
export var RoutingExpressions = 64 | 0;

export var CreateAgentStatus = op(
  n0,
  _CAS,
  {
    [_h]: ["PUT", "/agent-status/{InstanceId}", 200],
  },
  () => CreateAgentStatusRequest,
  () => CreateAgentStatusResponse
);
export var DescribeAgentStatus = op(
  n0,
  _DAS,
  {
    [_h]: ["GET", "/agent-status/{InstanceId}/{AgentStatusId}", 200],
  },
  () => DescribeAgentStatusRequest,
  () => DescribeAgentStatusResponse
);
export var GetCurrentMetricData = op(
  n0,
  _GCMD,
  {
    [_h]: ["POST", "/metrics/current/{InstanceId}", 200],
  },
  () => GetCurrentMetricDataRequest,
  () => GetCurrentMetricDataResponse
);
export var GetMetricData = op(
  n0,
  _GMD,
  {
    [_h]: ["POST", "/metrics/historical/{InstanceId}", 200],
  },
  () => GetMetricDataRequest,
  () => GetMetricDataResponse
);
export var ListAgentStatuses = op(
  n0,
  _LAS,
  {
    [_h]: ["GET", "/agent-status/{InstanceId}", 200],
  },
  () => ListAgentStatusRequest,
  () => ListAgentStatusResponse
);
export var PutUserStatus = op(
  n0,
  _PUS,
  {
    [_h]: ["PUT", "/users/{InstanceId}/{UserId}/status", 200],
  },
  () => PutUserStatusRequest,
  () => PutUserStatusResponse
);
export var SearchAgentStatuses = op(
  n0,
  _SAS,
  {
    [_h]: ["POST", "/search-agent-statuses", 200],
  },
  () => SearchAgentStatusesRequest,
  () => SearchAgentStatusesResponse
);
export var UpdateAgentStatus = op(
  n0,
  _UAS,
  {
    [_h]: ["POST", "/agent-status/{InstanceId}/{AgentStatusId}", 200],
  },
  () => UpdateAgentStatusRequest,
  () => Unit
);
