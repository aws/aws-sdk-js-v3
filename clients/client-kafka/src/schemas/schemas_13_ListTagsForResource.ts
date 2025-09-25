// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _h, _jN, _LTFR, _LTFRR, _LTFRRi, _RAe, _Ta, _ta, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ListTagsForResourceRequest = struct(n0, _LTFRR, 0, [_RAe], [[0, 1]]);
export var ListTagsForResourceResponse = struct(
  n0,
  _LTFRRi,
  0,
  [_Ta],
  [
    [
      128 | 0,
      {
        [_jN]: _ta,
      },
    ],
  ]
);
export var ListTagsForResource = op(
  n0,
  _LTFR,
  {
    [_h]: ["GET", "/v1/tags/{ResourceArn}", 200],
  },
  () => ListTagsForResourceRequest,
  () => ListTagsForResourceResponse
);
