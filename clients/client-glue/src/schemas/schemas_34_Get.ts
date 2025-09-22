// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  ColumnStatisticsTaskNotRunningException as __ColumnStatisticsTaskNotRunningException,
  ColumnStatisticsTaskStoppingException as __ColumnStatisticsTaskStoppingException,
} from "../models/index";
import {
  _c,
  _CID,
  _CIu,
  _CNLo,
  _CSTNRE,
  _CSTR,
  _CSTRI,
  _CSTRL,
  _CSTRo,
  _CSTSE,
  _CTom,
  _CTre,
  _DN,
  _DPUS,
  _e,
  _EM,
  _ET,
  _GCSTR,
  _GCSTRe,
  _GCSTRR,
  _GCSTRRe,
  _GCSTRRet,
  _GCSTRReto,
  _LU,
  _M,
  _MRax,
  _NOW,
  _NTe,
  _Rol,
  _SC,
  _SCSTRRto,
  _SCSTRRtop,
  _SCSTRt,
  _SSa,
  _St,
  _STta,
  _TN,
  _WT,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ColumnStatisticsTaskNotRunningException = error(
  n0,
  _CSTNRE,
  {
    [_e]: _c,
  },
  [_M],
  [0],

  __ColumnStatisticsTaskNotRunningException
);
export var ColumnStatisticsTaskRun = struct(
  n0,
  _CSTR,
  0,
  [_CIu, _CSTRI, _DN, _TN, _CNLo, _CID, _Rol, _SSa, _SC, _NOW, _WT, _CTom, _St, _CTre, _LU, _STta, _ET, _EM, _DPUS],
  [0, 0, 0, 0, 64 | 0, 0, 0, 1, 0, 1, 0, 0, 0, 4, 4, 4, 4, 0, 1]
);
export var ColumnStatisticsTaskStoppingException = error(
  n0,
  _CSTSE,
  {
    [_e]: _c,
  },
  [_M],
  [0],

  __ColumnStatisticsTaskStoppingException
);
export var GetColumnStatisticsTaskRunRequest = struct(n0, _GCSTRR, 0, [_CSTRI], [0]);
export var GetColumnStatisticsTaskRunResponse = struct(n0, _GCSTRRe, 0, [_CSTR], [() => ColumnStatisticsTaskRun]);
export var GetColumnStatisticsTaskRunsRequest = struct(n0, _GCSTRRet, 0, [_DN, _TN, _MRax, _NTe], [0, 0, 1, 0]);
export var GetColumnStatisticsTaskRunsResponse = struct(
  n0,
  _GCSTRReto,
  0,
  [_CSTRo, _NTe],
  [() => ColumnStatisticsTaskRunsList, 0]
);
export var StopColumnStatisticsTaskRunRequest = struct(n0, _SCSTRRto, 0, [_DN, _TN], [0, 0]);
export var StopColumnStatisticsTaskRunResponse = struct(n0, _SCSTRRtop, 0, [], []);
export var ColumnStatisticsTaskRunsList = list(n0, _CSTRL, 0, () => ColumnStatisticsTaskRun);
export var GetColumnStatisticsTaskRun = op(
  n0,
  _GCSTR,
  0,
  () => GetColumnStatisticsTaskRunRequest,
  () => GetColumnStatisticsTaskRunResponse
);
export var GetColumnStatisticsTaskRuns = op(
  n0,
  _GCSTRe,
  0,
  () => GetColumnStatisticsTaskRunsRequest,
  () => GetColumnStatisticsTaskRunsResponse
);
export var StopColumnStatisticsTaskRun = op(
  n0,
  _SCSTRt,
  0,
  () => StopColumnStatisticsTaskRunRequest,
  () => StopColumnStatisticsTaskRunResponse
);
