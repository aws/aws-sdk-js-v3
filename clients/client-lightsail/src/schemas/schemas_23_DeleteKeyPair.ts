// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DKP, _DKPR, _DKPRe, _eF, _ht, _kPN, _op, n0, Operation } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteKeyPairRequest = struct(n0, _DKPR, 0, [_kPN, _eF], [0, 0]);
export var DeleteKeyPairResult = struct(n0, _DKPRe, 0, [_op], [() => Operation]);
export var DeleteKeyPair = op(
  n0,
  _DKP,
  {
    [_ht]: ["POST", "/ls/api/2016-11-28/DeleteKeyPair", 200],
  },
  () => DeleteKeyPairRequest,
  () => DeleteKeyPairResult
);
