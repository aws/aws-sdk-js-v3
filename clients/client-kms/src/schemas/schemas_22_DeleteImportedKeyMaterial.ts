// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DIKM, _DIKMR, _DIKMRe, _KI, _KMI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteImportedKeyMaterialRequest = struct(n0, _DIKMR, 0, [_KI, _KMI], [0, 0]);
export var DeleteImportedKeyMaterialResponse = struct(n0, _DIKMRe, 0, [_KI, _KMI], [0, 0]);
export var DeleteImportedKeyMaterial = op(
  n0,
  _DIKM,
  0,
  () => DeleteImportedKeyMaterialRequest,
  () => DeleteImportedKeyMaterialResponse
);
