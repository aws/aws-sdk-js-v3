// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _a, _DMM, _DMMR, _DMMRe, _ht, _n, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteModelManifestRequest = struct(n0, _DMMR, 0, [_n], [[0, 1]]);
export var DeleteModelManifestResponse = struct(n0, _DMMRe, 0, [_n, _a], [0, 0]);
export var DeleteModelManifest = op(
  n0,
  _DMM,
  {
    [_ht]: ["DELETE", "/model-manifests/{name}", 200],
  },
  () => DeleteModelManifestRequest,
  () => DeleteModelManifestResponse
);
