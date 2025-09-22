// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _h, _RAeso, _RI, _St, _Ta, _TRa, _TRR, _TRRa, n0, TagList } from "./schemas_0";

/* eslint no-var: 0 */

export var TagResourceRequest = struct(n0, _TRR, 0, [_RAeso, _Ta], [[0, 1], () => TagList]);
export var TagResourceResponse = struct(n0, _TRRa, 0, [_RI, _St], [0, [1, 32]]);
export var TagResource = op(
  n0,
  _TRa,
  {
    [_h]: ["POST", "/resources/{ResourceArn}/tags", 200],
  },
  () => TagResourceRequest,
  () => TagResourceResponse
);
