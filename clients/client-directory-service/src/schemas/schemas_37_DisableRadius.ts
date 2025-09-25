// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DI, _DRi, _DRRi, _DRRis, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DisableRadiusRequest = struct(n0, _DRRi, 0, [_DI], [0]);
export var DisableRadiusResult = struct(n0, _DRRis, 0, [], []);
export var DisableRadius = op(
  n0,
  _DRi,
  0,
  () => DisableRadiusRequest,
  () => DisableRadiusResult
);
