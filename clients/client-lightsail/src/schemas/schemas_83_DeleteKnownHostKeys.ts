// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DKHK, _DKHKR, _DKHKRe, _ht, _iN, _o, n0, OperationList } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteKnownHostKeysRequest = struct(n0, _DKHKR, 0, [_iN], [0]);
export var DeleteKnownHostKeysResult = struct(n0, _DKHKRe, 0, [_o], [() => OperationList]);
export var DeleteKnownHostKeys = op(
  n0,
  _DKHK,
  {
    [_ht]: ["POST", "/ls/api/2016-11-28/DeleteKnownHostKeys", 200],
  },
  () => DeleteKnownHostKeysRequest,
  () => DeleteKnownHostKeysResult
);
