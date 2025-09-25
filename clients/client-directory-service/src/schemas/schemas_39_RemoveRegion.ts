// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DI, _RRe, _RRR, _RRRe, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var RemoveRegionRequest = struct(n0, _RRR, 0, [_DI], [0]);
export var RemoveRegionResult = struct(n0, _RRRe, 0, [], []);
export var RemoveRegion = op(
  n0,
  _RRe,
  0,
  () => RemoveRegionRequest,
  () => RemoveRegionResult
);
