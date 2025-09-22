// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _a,
  _bA,
  _DUL,
  _DULR,
  _DULRe,
  _GUL,
  _GULR,
  _GULRe,
  _p,
  _rAe,
  _UL,
  _uL,
  _uLA,
  _uLI,
  _uT,
  _UUL,
  _UULR,
  _UULRp,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteUsageLimitRequest = struct(n0, _DULR, 0, [_uLI], [0]);
export var DeleteUsageLimitResponse = struct(n0, _DULRe, 0, [_uL], [() => UsageLimit]);
export var GetUsageLimitRequest = struct(n0, _GULR, 0, [_uLI], [0]);
export var GetUsageLimitResponse = struct(n0, _GULRe, 0, [_uL], [() => UsageLimit]);
export var UpdateUsageLimitRequest = struct(n0, _UULR, 0, [_uLI, _a, _bA], [0, 1, 0]);
export var UpdateUsageLimitResponse = struct(n0, _UULRp, 0, [_uL], [() => UsageLimit]);
export var UsageLimit = struct(n0, _UL, 0, [_uLI, _uLA, _rAe, _uT, _a, _p, _bA], [0, 0, 0, 0, 1, 0, 0]);
export var DeleteUsageLimit = op(
  n0,
  _DUL,
  2,
  () => DeleteUsageLimitRequest,
  () => DeleteUsageLimitResponse
);
export var GetUsageLimit = op(
  n0,
  _GUL,
  0,
  () => GetUsageLimitRequest,
  () => GetUsageLimitResponse
);
export var UpdateUsageLimit = op(
  n0,
  _UUL,
  0,
  () => UpdateUsageLimitRequest,
  () => UpdateUsageLimitResponse
);
