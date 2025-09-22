// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DK, _DKR, _DKRe, _en, _FD, _fD, _h, _hQ, _KN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteKeyRequest = struct(
  n0,
  _DKR,
  0,
  [_KN, _FD],
  [
    [0, 1],
    [
      2,
      {
        [_hQ]: _fD,
      },
    ],
  ]
);
export var DeleteKeyResponse = struct(n0, _DKRe, 0, [], []);
export var DeleteKey = op(
  n0,
  _DK,
  {
    [_h]: ["DELETE", "/metadata/v0/keys/{KeyName}", 200],
    [_en]: ["cp.metadata."],
  },
  () => DeleteKeyRequest,
  () => DeleteKeyResponse
);
