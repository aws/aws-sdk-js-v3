// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DR, _eQN, _KKI, _kKI, _MEDKKI, _MEDKKIR, _MEDKKIRo, _xN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ModifyEbsDefaultKmsKeyIdRequest = struct(n0, _MEDKKIR, 0, [_KKI, _DR], [0, 2]);
export var ModifyEbsDefaultKmsKeyIdResult = struct(
  n0,
  _MEDKKIRo,
  0,
  [_KKI],
  [
    [
      0,
      {
        [_eQN]: `KmsKeyId`,
        [_xN]: _kKI,
      },
    ],
  ]
);
export var ModifyEbsDefaultKmsKeyId = op(
  n0,
  _MEDKKI,
  0,
  () => ModifyEbsDefaultKmsKeyIdRequest,
  () => ModifyEbsDefaultKmsKeyIdResult
);
