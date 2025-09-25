// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _GO, _GOR, _GORe, _ht, _oI, _op, n0, Operation } from "./schemas_0";

/* eslint no-var: 0 */

export var GetOperationRequest = struct(n0, _GOR, 0, [_oI], [0]);
export var GetOperationResult = struct(n0, _GORe, 0, [_op], [() => Operation]);
export var GetOperation = op(
  n0,
  _GO,
  {
    [_ht]: ["POST", "/ls/api/2016-11-28/GetOperation", 200],
  },
  () => GetOperationRequest,
  () => GetOperationResult
);
