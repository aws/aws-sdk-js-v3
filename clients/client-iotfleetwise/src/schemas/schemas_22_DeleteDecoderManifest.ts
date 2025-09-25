// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _a, _DDM, _DDMR, _DDMRe, _ht, _n, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteDecoderManifestRequest = struct(n0, _DDMR, 0, [_n], [[0, 1]]);
export var DeleteDecoderManifestResponse = struct(n0, _DDMRe, 0, [_n, _a], [0, 0]);
export var DeleteDecoderManifest = op(
  n0,
  _DDM,
  {
    [_ht]: ["DELETE", "/decoder-manifests/{name}", 200],
  },
  () => DeleteDecoderManifestRequest,
  () => DeleteDecoderManifestResponse
);
