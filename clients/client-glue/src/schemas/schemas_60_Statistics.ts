// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { ColumnStatisticsTaskRunningException as __ColumnStatisticsTaskRunningException } from "../models/index";
import {
  _c,
  _CID,
  _CNLo,
  _CSTRE,
  _CSTRI,
  _DN,
  _e,
  _M,
  _Rol,
  _SC,
  _SCSTR,
  _SCSTRR,
  _SCSTRRt,
  _SSa,
  _TN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ColumnStatisticsTaskRunningException = error(
  n0,
  _CSTRE,
  {
    [_e]: _c,
  },
  [_M],
  [0],

  __ColumnStatisticsTaskRunningException
);
export var StartColumnStatisticsTaskRunRequest = struct(
  n0,
  _SCSTRR,
  0,
  [_DN, _TN, _CNLo, _Rol, _SSa, _CID, _SC],
  [0, 0, 64 | 0, 0, 1, 0, 0]
);
export var StartColumnStatisticsTaskRunResponse = struct(n0, _SCSTRRt, 0, [_CSTRI], [0]);
export var ColumnNameList = 64 | 0;

export var StartColumnStatisticsTaskRun = op(
  n0,
  _SCSTR,
  0,
  () => StartColumnStatisticsTaskRunRequest,
  () => StartColumnStatisticsTaskRunResponse
);
