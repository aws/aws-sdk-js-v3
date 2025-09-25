// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AT, _DRP, _DRPI, _DRPO, _GRP, _GRPI, _GRPO, _h, _P, _PRP, _PRPI, _PRPO, _RA, _SRA, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteResourcePermissionInput = struct(n0, _DRPI, 0, [_AT, _SRA, _RA], [0, 0, 0]);
export var DeleteResourcePermissionOutput = struct(n0, _DRPO, 0, [_P], [0]);
export var GetResourcePermissionInput = struct(n0, _GRPI, 0, [_AT, _RA], [0, 0]);
export var GetResourcePermissionOutput = struct(n0, _GRPO, 0, [_P], [0]);
export var PutResourcePermissionInput = struct(n0, _PRPI, 0, [_AT, _SRA, _RA], [0, 0, 0]);
export var PutResourcePermissionOutput = struct(n0, _PRPO, 0, [_P], [0]);
export var DeleteResourcePermission = op(
  n0,
  _DRP,
  {
    [_h]: ["POST", "/delete-resource-permission", 200],
  },
  () => DeleteResourcePermissionInput,
  () => DeleteResourcePermissionOutput
);
export var GetResourcePermission = op(
  n0,
  _GRP,
  {
    [_h]: ["POST", "/get-resource-permission", 200],
  },
  () => GetResourcePermissionInput,
  () => GetResourcePermissionOutput
);
export var PutResourcePermission = op(
  n0,
  _PRP,
  {
    [_h]: ["POST", "/put-resource-permission", 200],
  },
  () => PutResourcePermissionInput,
  () => PutResourcePermissionOutput
);
