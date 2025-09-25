// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _GP, _GPR, _GPRe, _mARTS, _mARTSe, _sARTS, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetPreferencesRequest = struct(n0, _GPR, 0, [], []);
export var GetPreferencesResponse = struct(n0, _GPRe, 0, [_mARTS, _mARTSe, _sARTS], [64 | 0, 64 | 0, 64 | 0]);
export var RateTypes = 64 | 0;

export var GetPreferences = op(
  n0,
  _GP,
  0,
  () => GetPreferencesRequest,
  () => GetPreferencesResponse
);
