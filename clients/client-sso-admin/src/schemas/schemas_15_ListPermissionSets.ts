// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _IA, _LPS, _LPSR, _LPSRi, _MR, _NT, _PSe, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ListPermissionSetsRequest = struct(n0, _LPSR, 0, [_IA, _NT, _MR], [0, 0, 1]);
export var ListPermissionSetsResponse = struct(n0, _LPSRi, 0, [_PSe, _NT], [64 | 0, 0]);
export var PermissionSetList = 64 | 0;

export var ListPermissionSets = op(
  n0,
  _LPS,
  0,
  () => ListPermissionSetsRequest,
  () => ListPermissionSetsResponse
);
