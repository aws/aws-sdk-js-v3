// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DR, _eQN, _GEDKKI, _GEDKKIR, _GEDKKIRe, _KKI, _kKI, _xN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetEbsDefaultKmsKeyIdRequest = struct(n0, _GEDKKIR, 0, [_DR], [2]);
export var GetEbsDefaultKmsKeyIdResult = struct(
  n0,
  _GEDKKIRe,
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
export var GetEbsDefaultKmsKeyId = op(
  n0,
  _GEDKKI,
  0,
  () => GetEbsDefaultKmsKeyIdRequest,
  () => GetEbsDefaultKmsKeyIdResult
);
