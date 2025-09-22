// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _rARN, _ta, _TRa, _TRR, _TRRa, n0, tagList } from "./schemas_0";

/* eslint no-var: 0 */

export var TagResourceRequest = struct(n0, _TRR, 0, [_rARN, _ta], [0, () => tagList]);
export var TagResourceResult = struct(n0, _TRRa, 0, [], []);
export var TagResource = op(
  n0,
  _TRa,
  0,
  () => TagResourceRequest,
  () => TagResourceResult
);
