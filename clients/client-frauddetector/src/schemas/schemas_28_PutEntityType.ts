// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _d, _n, _PET, _PETR, _PETRu, _ta, n0, tagList } from "./schemas_0";

/* eslint no-var: 0 */

export var PutEntityTypeRequest = struct(n0, _PETR, 0, [_n, _d, _ta], [0, 0, () => tagList]);
export var PutEntityTypeResult = struct(n0, _PETRu, 0, [], []);
export var PutEntityType = op(
  n0,
  _PET,
  0,
  () => PutEntityTypeRequest,
  () => PutEntityTypeResult
);
