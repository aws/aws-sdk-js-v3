// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DTFS, _DTFSR, _DTFSRe, _SN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteThemeForStackRequest = struct(n0, _DTFSR, 0, [_SN], [0]);
export var DeleteThemeForStackResult = struct(n0, _DTFSRe, 0, [], []);
export var DeleteThemeForStack = op(
  n0,
  _DTFS,
  0,
  () => DeleteThemeForStackRequest,
  () => DeleteThemeForStackResult
);
