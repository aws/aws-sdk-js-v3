// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _BDTV,
  _BDTVR,
  _BDTVRa,
  _CI,
  _DN,
  _DTV,
  _DTVR,
  _DTVRe,
  _E,
  _ED,
  _TN,
  _TVE,
  _TVEa,
  _VI,
  _VIe,
  ErrorDetail,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var BatchDeleteTableVersionRequest = struct(n0, _BDTVR, 0, [_CI, _DN, _TN, _VI], [0, 0, 0, 64 | 0]);
export var BatchDeleteTableVersionResponse = struct(n0, _BDTVRa, 0, [_E], [() => TableVersionErrors]);
export var DeleteTableVersionRequest = struct(n0, _DTVR, 0, [_CI, _DN, _TN, _VIe], [0, 0, 0, 0]);
export var DeleteTableVersionResponse = struct(n0, _DTVRe, 0, [], []);
export var TableVersionError = struct(n0, _TVE, 0, [_TN, _VIe, _ED], [0, 0, () => ErrorDetail]);
export var BatchDeleteTableVersionList = 64 | 0;

export var TableVersionErrors = list(n0, _TVEa, 0, () => TableVersionError);
export var BatchDeleteTableVersion = op(
  n0,
  _BDTV,
  0,
  () => BatchDeleteTableVersionRequest,
  () => BatchDeleteTableVersionResponse
);
export var DeleteTableVersion = op(
  n0,
  _DTV,
  0,
  () => DeleteTableVersionRequest,
  () => DeleteTableVersionResponse
);
