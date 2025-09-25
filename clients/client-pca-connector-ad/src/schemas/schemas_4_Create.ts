// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _h, _LTFR, _LTFRR, _LTFRRi, _RA, _T, _TRa, _TRR, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var ListTagsForResourceRequest = struct(n0, _LTFRR, 0, [_RA], [[0, 1]]);
export var ListTagsForResourceResponse = struct(n0, _LTFRRi, 0, [_T], [128 | 0]);
export var TagResourceRequest = struct(n0, _TRR, 0, [_RA, _T], [[0, 1], 128 | 0]);
export var Tags = 128 | 0;

export var ListTagsForResource = op(
  n0,
  _LTFR,
  {
    [_h]: ["GET", "/tags/{ResourceArn}", 200],
  },
  () => ListTagsForResourceRequest,
  () => ListTagsForResourceResponse
);
export var TagResource = op(
  n0,
  _TRa,
  {
    [_h]: ["POST", "/tags/{ResourceArn}", 204],
  },
  () => TagResourceRequest,
  () => Unit
);
