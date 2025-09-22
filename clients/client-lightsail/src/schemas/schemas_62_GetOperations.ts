// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _GOe, _GORet, _GORetp, _ht, _nPT, _o, _pT, n0, OperationList } from "./schemas_0";

/* eslint no-var: 0 */

export var GetOperationsRequest = struct(n0, _GORet, 0, [_pT], [0]);
export var GetOperationsResult = struct(n0, _GORetp, 0, [_o, _nPT], [() => OperationList, 0]);
export var GetOperations = op(
  n0,
  _GOe,
  {
    [_ht]: ["POST", "/ls/api/2016-11-28/GetOperations", 200],
  },
  () => GetOperationsRequest,
  () => GetOperationsResult
);
