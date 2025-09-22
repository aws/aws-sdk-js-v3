// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _h, _jN, _LTFR, _LTFRR, _LTFRRi, _RA, _T, _t, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ListTagsForResourcesRequest = struct(n0, _LTFRR, 0, [_RA], [[0, 1]]);
export var ListTagsForResourcesResponse = struct(
  n0,
  _LTFRRi,
  0,
  [_T],
  [
    [
      128 | 0,
      {
        [_jN]: _t,
      },
    ],
  ]
);
export var ListTagsForResources = op(
  n0,
  _LTFR,
  {
    [_h]: ["GET", "/tags/{ResourceArn}", 200],
  },
  () => ListTagsForResourcesRequest,
  () => ListTagsForResourcesResponse
);
