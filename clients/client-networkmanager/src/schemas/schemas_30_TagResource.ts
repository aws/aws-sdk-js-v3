// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _h, _RA, _T, _TR, _TRR, _TRRa, n0, TagList } from "./schemas_0";

/* eslint no-var: 0 */

export var TagResourceRequest = struct(n0, _TRR, 0, [_RA, _T], [[0, 1], () => TagList]);
export var TagResourceResponse = struct(n0, _TRRa, 0, [], []);
export var TagResource = op(
  n0,
  _TR,
  {
    [_h]: ["POST", "/tags/{ResourceArn}", 200],
  },
  () => TagResourceRequest,
  () => TagResourceResponse
);
