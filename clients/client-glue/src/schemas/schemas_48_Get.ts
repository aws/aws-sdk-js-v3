// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _ACl,
  _Ar,
  _ECx,
  _ERSP,
  _JN,
  _JRI,
  _JRQE,
  _MCax,
  _NOW,
  _NP,
  _SC,
  _SJR,
  _SJRR,
  _SJRRt,
  _T,
  _WT,
  n0,
  NotificationProperty,
} from "./schemas_0";

/* eslint no-var: 0 */

export var StartJobRunRequest = struct(
  n0,
  _SJRR,
  0,
  [_JN, _JRQE, _JRI, _Ar, _ACl, _T, _MCax, _SC, _NP, _WT, _NOW, _ECx, _ERSP],
  [0, 2, 0, 128 | 0, 1, 1, 1, 0, () => NotificationProperty, 0, 1, 0, 0]
);
export var StartJobRunResponse = struct(n0, _SJRRt, 0, [_JRI], [0]);
export var StartJobRun = op(
  n0,
  _SJR,
  0,
  () => StartJobRunRequest,
  () => StartJobRunResponse
);
