// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _B, _DBE, _DBER, _EBO, _h, _hH, _xaebo, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteBucketEncryptionRequest = struct(
  n0,
  _DBER,
  0,
  [_B, _EBO],
  [
    [0, 1],
    [
      0,
      {
        [_hH]: _xaebo,
      },
    ],
  ]
);
export var DeleteBucketEncryption = op(
  n0,
  _DBE,
  {
    [_h]: ["DELETE", "/?encryption", 204],
  },
  () => DeleteBucketEncryptionRequest,
  () => Unit
);
