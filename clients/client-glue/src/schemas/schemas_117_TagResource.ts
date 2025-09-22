// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _RAe, _TRag, _TRR, _TRRa, _TTA, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var TagResourceRequest = struct(n0, _TRR, 0, [_RAe, _TTA], [0, 128 | 0]);
export var TagResourceResponse = struct(n0, _TRRa, 0, [], []);
export var TagResource = op(
  n0,
  _TRag,
  0,
  () => TagResourceRequest,
  () => TagResourceResponse
);
