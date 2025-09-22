// smithy-typescript generated code
import { list, map, op, struct } from "@smithy/core/schema";

import {
  _AC,
  _ACE,
  _ACL,
  _AIc,
  _AW,
  _AWR,
  _AWRd,
  _C,
  _CC,
  _CN,
  _CR,
  _DCC,
  _DCCR,
  _DCCRe,
  _DCCRes,
  _DCCRR,
  _DCCRRe,
  _DCe,
  _DCRes,
  _DCResc,
  _DW,
  _DWe,
  _DWR,
  _DWRe,
  _ETn,
  _LCi,
  _LCR,
  _LCRi,
  _LPi,
  _LPR,
  _LPRi,
  _LW,
  _LWR,
  _LWRi,
  _Mo,
  _MR,
  _MWC,
  _NT,
  _OT,
  _PL,
  _RGN,
  _RL,
  _RT,
  _RTe,
  _RW,
  _RWR,
  _RWRe,
  _ST,
  _T,
  _UCC,
  _UCCR,
  _UCCRp,
  _UW,
  _UWR,
  _UWRp,
  _V,
  _W,
  _WC,
  _WI,
  _WL,
  _WN,
  _WR,
  n0,
} from "./schemas_0";
import { Problem } from "./schemas_3_Describe";

/* eslint no-var: 0 */

export var AddWorkloadRequest = struct(n0, _AWR, 0, [_RGN, _CN, _WC], [0, 0, () => WorkloadConfiguration]);
export var AddWorkloadResponse = struct(n0, _AWRd, 0, [_WI, _WC], [0, () => WorkloadConfiguration]);
export var ApplicationComponent = struct(
  n0,
  _AC,
  0,
  [_CN, _CR, _RT, _OT, _T, _Mo, _DW],
  [0, 0, 0, 0, 0, 2, map(n0, _DW, 0, 0, 128 | 0)]
);
export var DescribeComponentConfigurationRecommendationRequest = struct(
  n0,
  _DCCRR,
  0,
  [_RGN, _CN, _T, _WN, _RTe],
  [0, 0, 0, 0, 0]
);
export var DescribeComponentConfigurationRecommendationResponse = struct(n0, _DCCRRe, 0, [_CC], [0]);
export var DescribeComponentConfigurationRequest = struct(n0, _DCCR, 0, [_RGN, _CN, _AIc], [0, 0, 0]);
export var DescribeComponentConfigurationResponse = struct(n0, _DCCRe, 0, [_Mo, _T, _CC], [2, 0, 0]);
export var DescribeComponentRequest = struct(n0, _DCRes, 0, [_RGN, _CN, _AIc], [0, 0, 0]);
export var DescribeComponentResponse = struct(n0, _DCResc, 0, [_AC, _RL], [() => ApplicationComponent, 64 | 0]);
export var DescribeWorkloadRequest = struct(n0, _DWR, 0, [_RGN, _CN, _WI, _AIc], [0, 0, 0, 0]);
export var DescribeWorkloadResponse = struct(n0, _DWRe, 0, [_WI, _WR, _WC], [0, 0, () => WorkloadConfiguration]);
export var ListComponentsRequest = struct(n0, _LCR, 0, [_RGN, _MR, _NT, _AIc], [0, 1, 0, 0]);
export var ListComponentsResponse = struct(n0, _LCRi, 0, [_ACL, _NT], [() => ApplicationComponentList, 0]);
export var ListProblemsRequest = struct(
  n0,
  _LPR,
  0,
  [_AIc, _RGN, _ST, _ETn, _MR, _NT, _CN, _V],
  [0, 0, 4, 4, 1, 0, 0, 0]
);
export var ListProblemsResponse = struct(n0, _LPRi, 0, [_PL, _NT, _RGN, _AIc], [() => ProblemList, 0, 0, 0]);
export var ListWorkloadsRequest = struct(n0, _LWR, 0, [_RGN, _CN, _MR, _NT, _AIc], [0, 0, 1, 0, 0]);
export var ListWorkloadsResponse = struct(n0, _LWRi, 0, [_WL, _NT], [() => WorkloadList, 0]);
export var RemoveWorkloadRequest = struct(n0, _RWR, 0, [_RGN, _CN, _WI], [0, 0, 0]);
export var RemoveWorkloadResponse = struct(n0, _RWRe, 0, [], []);
export var UpdateComponentConfigurationRequest = struct(
  n0,
  _UCCR,
  0,
  [_RGN, _CN, _Mo, _T, _CC, _ACE],
  [0, 0, 2, 0, 0, 2]
);
export var UpdateComponentConfigurationResponse = struct(n0, _UCCRp, 0, [], []);
export var UpdateWorkloadRequest = struct(n0, _UWR, 0, [_RGN, _CN, _WI, _WC], [0, 0, 0, () => WorkloadConfiguration]);
export var UpdateWorkloadResponse = struct(n0, _UWRp, 0, [_WI, _WC], [0, () => WorkloadConfiguration]);
export var Workload = struct(n0, _W, 0, [_WI, _CN, _WN, _T, _WR, _MWC], [0, 0, 0, 0, 0, 2]);
export var WorkloadConfiguration = struct(n0, _WC, 0, [_WN, _T, _C], [0, 0, 0]);
export var ApplicationComponentList = list(n0, _ACL, 0, () => ApplicationComponent);
export var ProblemList = list(n0, _PL, 0, () => Problem);
export var WorkloadList = list(n0, _WL, 0, () => Workload);
export var DetectedWorkload = map(n0, _DW, 0, 0, 128 | 0);
export var WorkloadMetaData = 128 | 0;

export var AddWorkload = op(
  n0,
  _AW,
  0,
  () => AddWorkloadRequest,
  () => AddWorkloadResponse
);
export var DescribeComponent = op(
  n0,
  _DCe,
  0,
  () => DescribeComponentRequest,
  () => DescribeComponentResponse
);
export var DescribeComponentConfiguration = op(
  n0,
  _DCC,
  0,
  () => DescribeComponentConfigurationRequest,
  () => DescribeComponentConfigurationResponse
);
export var DescribeComponentConfigurationRecommendation = op(
  n0,
  _DCCRes,
  0,
  () => DescribeComponentConfigurationRecommendationRequest,
  () => DescribeComponentConfigurationRecommendationResponse
);
export var DescribeWorkload = op(
  n0,
  _DWe,
  0,
  () => DescribeWorkloadRequest,
  () => DescribeWorkloadResponse
);
export var ListComponents = op(
  n0,
  _LCi,
  0,
  () => ListComponentsRequest,
  () => ListComponentsResponse
);
export var ListProblems = op(
  n0,
  _LPi,
  0,
  () => ListProblemsRequest,
  () => ListProblemsResponse
);
export var ListWorkloads = op(
  n0,
  _LW,
  0,
  () => ListWorkloadsRequest,
  () => ListWorkloadsResponse
);
export var RemoveWorkload = op(
  n0,
  _RW,
  0,
  () => RemoveWorkloadRequest,
  () => RemoveWorkloadResponse
);
export var UpdateComponentConfiguration = op(
  n0,
  _UCC,
  0,
  () => UpdateComponentConfigurationRequest,
  () => UpdateComponentConfigurationResponse
);
export var UpdateWorkload = op(
  n0,
  _UW,
  0,
  () => UpdateWorkloadRequest,
  () => UpdateWorkloadResponse
);
