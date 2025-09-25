// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DEEBD, _DEEBDR, _DEEBDRi, _DR, _EEBD, _eEBD, _eQN, _xN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DisableEbsEncryptionByDefaultRequest = struct(n0, _DEEBDR, 0, [_DR], [2]);
export var DisableEbsEncryptionByDefaultResult = struct(
  n0,
  _DEEBDRi,
  0,
  [_EEBD],
  [
    [
      2,
      {
        [_eQN]: `EbsEncryptionByDefault`,
        [_xN]: _eEBD,
      },
    ],
  ]
);
export var DisableEbsEncryptionByDefault = op(
  n0,
  _DEEBD,
  0,
  () => DisableEbsEncryptionByDefaultRequest,
  () => DisableEbsEncryptionByDefaultResult
);
