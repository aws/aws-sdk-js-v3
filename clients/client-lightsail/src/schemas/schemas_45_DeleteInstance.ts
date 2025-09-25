// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DIe, _DIR, _DIRe, _fDAO, _ht, _iN, _o, n0, OperationList } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteInstanceRequest = struct(n0, _DIR, 0, [_iN, _fDAO], [0, 2]);
export var DeleteInstanceResult = struct(n0, _DIRe, 0, [_o], [() => OperationList]);
export var DeleteInstance = op(
  n0,
  _DIe,
  {
    [_ht]: ["POST", "/ls/api/2016-11-28/DeleteInstance", 200],
  },
  () => DeleteInstanceRequest,
  () => DeleteInstanceResult
);
