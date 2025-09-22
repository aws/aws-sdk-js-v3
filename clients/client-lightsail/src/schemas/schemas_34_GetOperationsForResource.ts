// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _GOFR, _GOFRR, _GOFRRe, _ht, _nPC, _nPT, _o, _pT, _rN, n0, OperationList } from "./schemas_0";

/* eslint no-var: 0 */

export var GetOperationsForResourceRequest = struct(n0, _GOFRR, 0, [_rN, _pT], [0, 0]);
export var GetOperationsForResourceResult = struct(n0, _GOFRRe, 0, [_o, _nPC, _nPT], [() => OperationList, 0, 0]);
export var GetOperationsForResource = op(
  n0,
  _GOFR,
  {
    [_ht]: ["POST", "/ls/api/2016-11-28/GetOperationsForResource", 200],
  },
  () => GetOperationsForResourceRequest,
  () => GetOperationsForResourceResult
);
