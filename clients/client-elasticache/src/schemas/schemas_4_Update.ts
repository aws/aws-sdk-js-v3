// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _BAUA,
  _BAUAM,
  _BSUA,
  _BSUAM,
  _CCI,
  _CCIa,
  _CNI,
  _CNUS,
  _CNUSL,
  _DUA,
  _DUAM,
  _E,
  _EMr,
  _ET,
  _ETr,
  _EUT,
  _M,
  _MR,
  _NDD,
  _NGI,
  _NGMUS,
  _NGMUSL,
  _NGUS,
  _NGUSL,
  _NU,
  _NUED,
  _NUIB,
  _NUID,
  _NUS,
  _NUSD,
  _NUSMD,
  _PUA,
  _PUAL,
  _PUAr,
  _RGI,
  _RGIe,
  _SMl,
  _SNLUS,
  _STt,
  _SUN,
  _SURABD,
  _SURD,
  _SUS,
  _SUSe,
  _SUT,
  _SUTR,
  _TRF,
  _UA,
  _UAAD,
  _UAL,
  _UAM,
  _UAp,
  _UARM,
  _UAS,
  _UASMD,
  _UUA,
  _UUAL,
  _UUAn,
  _xN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var BatchApplyUpdateActionMessage = struct(n0, _BAUAM, 0, [_RGI, _CCI, _SUN], [64 | 0, 64 | 0, 0]);
export var BatchStopUpdateActionMessage = struct(n0, _BSUAM, 0, [_RGI, _CCI, _SUN], [64 | 0, 64 | 0, 0]);
export var CacheNodeUpdateStatus = struct(
  n0,
  _CNUS,
  0,
  [_CNI, _NUS, _NDD, _NUSD, _NUED, _NUIB, _NUID, _NUSMD],
  [0, 0, 4, 4, 4, 0, 4, 4]
);
export var DescribeUpdateActionsMessage = struct(
  n0,
  _DUAM,
  0,
  [_SUN, _RGI, _CCI, _E, _SUS, _SUTR, _UAS, _SNLUS, _MR, _M],
  [0, 64 | 0, 64 | 0, 0, 64 | 0, () => TimeRangeFilter, 64 | 0, 2, 1, 0]
);
export var NodeGroupMemberUpdateStatus = struct(
  n0,
  _NGMUS,
  0,
  [_CCIa, _CNI, _NUS, _NDD, _NUSD, _NUED, _NUIB, _NUID, _NUSMD],
  [0, 0, 0, 4, 4, 4, 0, 4, 4]
);
export var NodeGroupUpdateStatus = struct(
  n0,
  _NGUS,
  0,
  [_NGI, _NGMUS],
  [0, [() => NodeGroupMemberUpdateStatusList, 0]]
);
export var ProcessedUpdateAction = struct(n0, _PUA, 0, [_RGIe, _CCIa, _SUN, _UAS], [0, 0, 0, 0]);
export var TimeRangeFilter = struct(n0, _TRF, 0, [_STt, _ET], [4, 4]);
export var UnprocessedUpdateAction = struct(n0, _UUA, 0, [_RGIe, _CCIa, _SUN, _ETr, _EMr], [0, 0, 0, 0, 0]);
export var UpdateAction = struct(
  n0,
  _UA,
  0,
  [_RGIe, _CCIa, _SUN, _SURD, _SUSe, _SUS, _SURABD, _SUT, _UAAD, _UAS, _NU, _UASMD, _SMl, _NGUS, _CNUS, _EUT, _E],
  [
    0,
    0,
    0,
    4,
    0,
    0,
    4,
    0,
    4,
    0,
    0,
    4,
    0,
    [() => NodeGroupUpdateStatusList, 0],
    [() => CacheNodeUpdateStatusList, 0],
    0,
    0,
  ]
);
export var UpdateActionResultsMessage = struct(
  n0,
  _UARM,
  0,
  [_PUAr, _UUAn],
  [
    [() => ProcessedUpdateActionList, 0],
    [() => UnprocessedUpdateActionList, 0],
  ]
);
export var UpdateActionsMessage = struct(n0, _UAM, 0, [_M, _UAp], [0, [() => UpdateActionList, 0]]);
export var CacheClusterIdList = 64 | 0;

export var CacheNodeUpdateStatusList = list(n0, _CNUSL, 0, [
  () => CacheNodeUpdateStatus,
  {
    [_xN]: _CNUS,
  },
]);
export var NodeGroupMemberUpdateStatusList = list(n0, _NGMUSL, 0, [
  () => NodeGroupMemberUpdateStatus,
  {
    [_xN]: _NGMUS,
  },
]);
export var NodeGroupUpdateStatusList = list(n0, _NGUSL, 0, [
  () => NodeGroupUpdateStatus,
  {
    [_xN]: _NGUS,
  },
]);
export var ProcessedUpdateActionList = list(n0, _PUAL, 0, [
  () => ProcessedUpdateAction,
  {
    [_xN]: _PUA,
  },
]);
export var ReplicationGroupIdList = 64 | 0;

export var UnprocessedUpdateActionList = list(n0, _UUAL, 0, [
  () => UnprocessedUpdateAction,
  {
    [_xN]: _UUA,
  },
]);
export var UpdateActionList = list(n0, _UAL, 0, [
  () => UpdateAction,
  {
    [_xN]: _UA,
  },
]);
export var UpdateActionStatusList = 64 | 0;

export var BatchApplyUpdateAction = op(
  n0,
  _BAUA,
  0,
  () => BatchApplyUpdateActionMessage,
  () => UpdateActionResultsMessage
);
export var BatchStopUpdateAction = op(
  n0,
  _BSUA,
  0,
  () => BatchStopUpdateActionMessage,
  () => UpdateActionResultsMessage
);
export var DescribeUpdateActions = op(
  n0,
  _DUA,
  0,
  () => DescribeUpdateActionsMessage,
  () => UpdateActionsMessage
);
