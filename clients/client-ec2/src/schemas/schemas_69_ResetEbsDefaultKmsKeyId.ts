// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DR, _eQN, _KKI, _kKI, _REDKKI, _REDKKIR, _REDKKIRe, _xN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ResetEbsDefaultKmsKeyIdRequest = struct(n0, _REDKKIR, 0, [_DR], [2]);
export var ResetEbsDefaultKmsKeyIdResult = struct(
  n0,
  _REDKKIRe,
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
export var ResetEbsDefaultKmsKeyId = op(
  n0,
  _REDKKI,
  0,
  () => ResetEbsDefaultKmsKeyIdRequest,
  () => ResetEbsDefaultKmsKeyIdResult
);
