// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DRe, _DRR, _DRRe, _OI, _RI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteResourceRequest = struct(n0, _DRR, 0, [_OI, _RI], [0, 0]);
export var DeleteResourceResponse = struct(n0, _DRRe, 0, [], []);
export var DeleteResource = op(
  n0,
  _DRe,
  2,
  () => DeleteResourceRequest,
  () => DeleteResourceResponse
);
