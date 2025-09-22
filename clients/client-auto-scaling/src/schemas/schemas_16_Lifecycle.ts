// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ASGN,
  _CLA,
  _CLAA,
  _CLAT,
  _DLH,
  _DLHA,
  _DLHAe,
  _DLHe,
  _DLHT,
  _DLHTe,
  _DR,
  _GT,
  _HTe,
  _IIns,
  _LAR,
  _LAT,
  _LH,
  _LHi,
  _LHN,
  _LHNi,
  _LTi,
  _NM,
  _NTARN,
  _PLH,
  _PLHA,
  _PLHT,
  _RARN,
  _RLAH,
  _RLAHA,
  _RLAHT,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CompleteLifecycleActionAnswer = struct(n0, _CLAA, 0, [], []);
export var CompleteLifecycleActionType = struct(n0, _CLAT, 0, [_LHN, _ASGN, _LAT, _LAR, _IIns], [0, 0, 0, 0, 0]);
export var DeleteLifecycleHookAnswer = struct(n0, _DLHA, 0, [], []);
export var DeleteLifecycleHookType = struct(n0, _DLHT, 0, [_LHN, _ASGN], [0, 0]);
export var DescribeLifecycleHooksAnswer = struct(n0, _DLHAe, 0, [_LH], [() => LifecycleHooks]);
export var DescribeLifecycleHooksType = struct(n0, _DLHTe, 0, [_ASGN, _LHNi], [0, 64 | 0]);
export var LifecycleHook = struct(
  n0,
  _LHi,
  0,
  [_LHN, _ASGN, _LTi, _NTARN, _RARN, _NM, _HTe, _GT, _DR],
  [0, 0, 0, 0, 0, 0, 1, 1, 0]
);
export var PutLifecycleHookAnswer = struct(n0, _PLHA, 0, [], []);
export var PutLifecycleHookType = struct(
  n0,
  _PLHT,
  0,
  [_LHN, _ASGN, _LTi, _RARN, _NTARN, _NM, _HTe, _DR],
  [0, 0, 0, 0, 0, 0, 1, 0]
);
export var RecordLifecycleActionHeartbeatAnswer = struct(n0, _RLAHA, 0, [], []);
export var RecordLifecycleActionHeartbeatType = struct(n0, _RLAHT, 0, [_LHN, _ASGN, _LAT, _IIns], [0, 0, 0, 0]);
export var LifecycleHookNames = 64 | 0;

export var LifecycleHooks = list(n0, _LH, 0, () => LifecycleHook);
export var CompleteLifecycleAction = op(
  n0,
  _CLA,
  0,
  () => CompleteLifecycleActionType,
  () => CompleteLifecycleActionAnswer
);
export var DeleteLifecycleHook = op(
  n0,
  _DLH,
  0,
  () => DeleteLifecycleHookType,
  () => DeleteLifecycleHookAnswer
);
export var DescribeLifecycleHooks = op(
  n0,
  _DLHe,
  0,
  () => DescribeLifecycleHooksType,
  () => DescribeLifecycleHooksAnswer
);
export var PutLifecycleHook = op(
  n0,
  _PLH,
  0,
  () => PutLifecycleHookType,
  () => PutLifecycleHookAnswer
);
export var RecordLifecycleActionHeartbeat = op(
  n0,
  _RLAH,
  0,
  () => RecordLifecycleActionHeartbeatType,
  () => RecordLifecycleActionHeartbeatAnswer
);
