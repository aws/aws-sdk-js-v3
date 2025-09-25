// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AMSK, _AMSKR, _AMSKRs, _c, _ca, _cI, _mSK, _sARN, MacSecKeyList, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var AssociateMacSecKeyRequest = struct(n0, _AMSKR, 0, [_cI, _sARN, _c, _ca], [0, 0, 0, 0]);
export var AssociateMacSecKeyResponse = struct(n0, _AMSKRs, 0, [_cI, _mSK], [0, () => MacSecKeyList]);
export var AssociateMacSecKey = op(
  n0,
  _AMSK,
  0,
  () => AssociateMacSecKeyRequest,
  () => AssociateMacSecKeyResponse
);
