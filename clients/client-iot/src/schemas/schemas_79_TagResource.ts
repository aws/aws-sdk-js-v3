// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _h, _rAes, _tag, _TRa, _TRR, _TRRa, n0, TagList } from "./schemas_0";

/* eslint no-var: 0 */

export var TagResourceRequest = struct(n0, _TRR, 0, [_rAes, _tag], [0, () => TagList]);
export var TagResourceResponse = struct(n0, _TRRa, 0, [], []);
export var TagResource = op(
  n0,
  _TRa,
  {
    [_h]: ["POST", "/tags", 200],
  },
  () => TagResourceRequest,
  () => TagResourceResponse
);
