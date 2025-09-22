// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _d, _n, _PL, _PLR, _PLRu, _ta, n0, tagList } from "./schemas_0";

/* eslint no-var: 0 */

export var PutLabelRequest = struct(n0, _PLR, 0, [_n, _d, _ta], [0, 0, () => tagList]);
export var PutLabelResult = struct(n0, _PLRu, 0, [], []);
export var PutLabel = op(
  n0,
  _PL,
  0,
  () => PutLabelRequest,
  () => PutLabelResult
);
