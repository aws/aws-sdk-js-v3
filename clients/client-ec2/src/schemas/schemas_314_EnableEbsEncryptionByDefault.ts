// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DR, _EEBD, _eEBD, _EEEBD, _EEEBDR, _EEEBDRn, _eQN, _xN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var EnableEbsEncryptionByDefaultRequest = struct(n0, _EEEBDR, 0, [_DR], [2]);
export var EnableEbsEncryptionByDefaultResult = struct(
  n0,
  _EEEBDRn,
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
export var EnableEbsEncryptionByDefault = op(
  n0,
  _EEEBD,
  0,
  () => EnableEbsEncryptionByDefaultRequest,
  () => EnableEbsEncryptionByDefaultResult
);
