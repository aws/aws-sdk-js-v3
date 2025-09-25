// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _ar, _CDR, _CDr, _CDRr, _cRT, _h, _n, _sVt, _tag, _ty, n0, TagList } from "./schemas_0";

/* eslint no-var: 0 */

export var CreateDimensionRequest = struct(
  n0,
  _CDR,
  0,
  [_n, _ty, _sVt, _tag, _cRT],
  [[0, 1], 0, 64 | 0, () => TagList, [0, 4]]
);
export var CreateDimensionResponse = struct(n0, _CDRr, 0, [_n, _ar], [0, 0]);
export var CreateDimension = op(
  n0,
  _CDr,
  {
    [_h]: ["POST", "/dimensions/{name}", 200],
  },
  () => CreateDimensionRequest,
  () => CreateDimensionResponse
);
