// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CAl,
  _CAre,
  _CB,
  _CBr,
  _CCSC,
  _CCSCR,
  _CCSCRr,
  _CSCA,
  _CSCI,
  _CSCS,
  _CSCSL,
  _CSCSl,
  _CSCV,
  _CT,
  _D,
  _DCSC,
  _DCSCe,
  _DCSCR,
  _DCSCRe,
  _DCSCRes,
  _FR,
  _FSa,
  _LCSC,
  _LCSCR,
  _LCSCRi,
  _LMB,
  _LMT,
  _MR,
  _N,
  _NCa,
  _NT,
  _PCL,
  _PCri,
  _PCrio,
  _SBo,
  _SCc,
  _SO,
  _St,
  _T,
  _TVar,
  _UCSC,
  _UCSCR,
  _UCSCRp,
  _We,
  n0,
  TagList,
  Unit,
  UserContext,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ClusterSchedulerConfigSummary = struct(
  n0,
  _CSCS,
  0,
  [_CSCA, _CSCI, _CSCV, _N, _CT, _LMT, _St, _CAl],
  [0, 0, 1, 0, 4, 4, 0, 0]
);
export var CreateClusterSchedulerConfigRequest = struct(
  n0,
  _CCSCR,
  0,
  [_N, _CAl, _SCc, _D, _T],
  [0, 0, () => SchedulerConfig, 0, () => TagList]
);
export var CreateClusterSchedulerConfigResponse = struct(n0, _CCSCRr, 0, [_CSCA, _CSCI], [0, 0]);
export var DeleteClusterSchedulerConfigRequest = struct(n0, _DCSCR, 0, [_CSCI], [0]);
export var DescribeClusterSchedulerConfigRequest = struct(n0, _DCSCRe, 0, [_CSCI, _CSCV], [0, 1]);
export var DescribeClusterSchedulerConfigResponse = struct(
  n0,
  _DCSCRes,
  0,
  [_CSCA, _CSCI, _N, _CSCV, _St, _FR, _CAl, _SCc, _D, _CT, _CB, _LMT, _LMB],
  [0, 0, 0, 1, 0, 0, 0, () => SchedulerConfig, 0, 4, () => UserContext, 4, () => UserContext]
);
export var ListClusterSchedulerConfigsRequest = struct(
  n0,
  _LCSCR,
  0,
  [_CAre, _CBr, _NCa, _CAl, _St, _SBo, _SO, _NT, _MR],
  [4, 4, 0, 0, 0, 0, 0, 0, 1]
);
export var ListClusterSchedulerConfigsResponse = struct(
  n0,
  _LCSCRi,
  0,
  [_CSCSl, _NT],
  [() => ClusterSchedulerConfigSummaryList, 0]
);
export var PriorityClass = struct(n0, _PCri, 0, [_N, _We], [0, 1]);
export var SchedulerConfig = struct(n0, _SCc, 0, [_PCrio, _FSa], [() => PriorityClassList, 0]);
export var UpdateClusterSchedulerConfigRequest = struct(
  n0,
  _UCSCR,
  0,
  [_CSCI, _TVar, _SCc, _D],
  [0, 1, () => SchedulerConfig, 0]
);
export var UpdateClusterSchedulerConfigResponse = struct(n0, _UCSCRp, 0, [_CSCA, _CSCV], [0, 1]);
export var ClusterSchedulerConfigSummaryList = list(n0, _CSCSL, 0, () => ClusterSchedulerConfigSummary);
export var PriorityClassList = list(n0, _PCL, 0, () => PriorityClass);
export var CreateClusterSchedulerConfig = op(
  n0,
  _CCSC,
  0,
  () => CreateClusterSchedulerConfigRequest,
  () => CreateClusterSchedulerConfigResponse
);
export var DeleteClusterSchedulerConfig = op(
  n0,
  _DCSC,
  0,
  () => DeleteClusterSchedulerConfigRequest,
  () => Unit
);
export var DescribeClusterSchedulerConfig = op(
  n0,
  _DCSCe,
  0,
  () => DescribeClusterSchedulerConfigRequest,
  () => DescribeClusterSchedulerConfigResponse
);
export var ListClusterSchedulerConfigs = op(
  n0,
  _LCSC,
  0,
  () => ListClusterSchedulerConfigsRequest,
  () => ListClusterSchedulerConfigsResponse
);
export var UpdateClusterSchedulerConfig = op(
  n0,
  _UCSC,
  0,
  () => UpdateClusterSchedulerConfigRequest,
  () => UpdateClusterSchedulerConfigResponse
);
