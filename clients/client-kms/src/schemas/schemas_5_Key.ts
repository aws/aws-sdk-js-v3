// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CMKS, _EAn, _GPK, _GPKR, _GPKRe, _GT, _KAAe, _KI, _KS, _KU, _PK, _SA, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetPublicKeyRequest = struct(n0, _GPKR, 0, [_KI, _GT], [0, 64 | 0]);
export var GetPublicKeyResponse = struct(
  n0,
  _GPKRe,
  0,
  [_KI, _PK, _CMKS, _KS, _KU, _EAn, _SA, _KAAe],
  [0, 21, 0, 0, 0, 64 | 0, 64 | 0, 64 | 0]
);
export var EncryptionAlgorithmSpecList = 64 | 0;

export var KeyAgreementAlgorithmSpecList = 64 | 0;

export var SigningAlgorithmSpecList = 64 | 0;

export var GetPublicKey = op(
  n0,
  _GPK,
  0,
  () => GetPublicKeyRequest,
  () => GetPublicKeyResponse
);
