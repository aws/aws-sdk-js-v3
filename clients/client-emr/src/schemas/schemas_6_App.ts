// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AIp, _APC, _ERA, _GPAUIPURL, _GPAUIPURLI, _GPAUIPURLO, _PAUII, _PAUIT, _PURL, _PURLR, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetPersistentAppUIPresignedURLInput = struct(
  n0,
  _GPAUIPURLI,
  0,
  [_PAUII, _PAUIT, _AIp, _APC, _ERA],
  [0, 0, 0, 2, 0]
);
export var GetPersistentAppUIPresignedURLOutput = struct(n0, _GPAUIPURLO, 0, [_PURLR, _PURL], [2, 0]);
export var GetPersistentAppUIPresignedURL = op(
  n0,
  _GPAUIPURL,
  0,
  () => GetPersistentAppUIPresignedURLInput,
  () => GetPersistentAppUIPresignedURLOutput
);
