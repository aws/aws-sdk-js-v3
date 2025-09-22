// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DBe, _DBR, _DBRe, _N, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteBlueprintRequest = struct(n0, _DBR, 0, [_N], [0]);
export var DeleteBlueprintResponse = struct(n0, _DBRe, 0, [_N], [0]);
export var DeleteBlueprint = op(
  n0,
  _DBe,
  0,
  () => DeleteBlueprintRequest,
  () => DeleteBlueprintResponse
);
