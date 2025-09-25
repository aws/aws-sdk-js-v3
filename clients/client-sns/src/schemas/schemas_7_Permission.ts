// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AN, _AP, _API, _AWSAI, _L, _RP, _RPI, _TA, n0 } from "./schemas_0";
import { Unit } from "./schemas_2_Phone";

/* eslint no-var: 0 */

export var AddPermissionInput = struct(n0, _API, 0, [_TA, _L, _AWSAI, _AN], [0, 0, 64 | 0, 64 | 0]);
export var RemovePermissionInput = struct(n0, _RPI, 0, [_TA, _L], [0, 0]);
export var ActionsList = 64 | 0;

export var DelegatesList = 64 | 0;

export var AddPermission = op(
  n0,
  _AP,
  0,
  () => AddPermissionInput,
  () => Unit
);
export var RemovePermission = op(
  n0,
  _RP,
  0,
  () => RemovePermissionInput,
  () => Unit
);
