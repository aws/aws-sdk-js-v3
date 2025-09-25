// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _h, _jN, _LTFR, _LTFRR, _LTFRRi, _RAe, _t, _TM, _TRa, _TRR, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var ListTagsForResourceRequest = struct(n0, _LTFRR, 0, [_RAe], [[0, 1]]);
export var ListTagsForResourceResponse = struct(n0, _LTFRRi, 0, [_TM], [[() => TagsModel, 16]]);
export var TagResourceRequest = struct(
  n0,
  _TRR,
  0,
  [_RAe, _TM],
  [
    [0, 1],
    [() => TagsModel, 16],
  ]
);
export var TagsModel = struct(
  n0,
  _TM,
  0,
  [_t],
  [
    [
      128 | 0,
      {
        [_jN]: _t,
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
export var TagResource = op(
  n0,
  _TRa,
  {
    [_h]: ["POST", "/v1/tags/{ResourceArn}", 204],
  },
  () => TagResourceRequest,
  () => Unit
);
