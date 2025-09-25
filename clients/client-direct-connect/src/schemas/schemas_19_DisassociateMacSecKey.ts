// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _cI, _DMSK, _DMSKR, _DMSKRi, _mSK, _sARN, MacSecKeyList, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DisassociateMacSecKeyRequest = struct(n0, _DMSKR, 0, [_cI, _sARN], [0, 0]);
export var DisassociateMacSecKeyResponse = struct(n0, _DMSKRi, 0, [_cI, _mSK], [0, () => MacSecKeyList]);
export var DisassociateMacSecKey = op(
  n0,
  _DMSK,
  0,
  () => DisassociateMacSecKeyRequest,
  () => DisassociateMacSecKeyResponse
);
