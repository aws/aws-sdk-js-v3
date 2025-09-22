// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _h, _LTFR, _LTFRI, _LTFRO, _RARN, _T, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ListTagsForResourceInput = struct(n0, _LTFRI, 0, [_RARN], [0]);
export var ListTagsForResourceOutput = struct(n0, _LTFRO, 0, [_T], [128 | 0]);
export var TagMapOutput = 128 | 0;

export var ListTagsForResource = op(
  n0,
  _LTFR,
  {
    [_h]: ["POST", "/ListTagsForResource", 200],
  },
  () => ListTagsForResourceInput,
  () => ListTagsForResourceOutput
);
