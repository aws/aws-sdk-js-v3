// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _aI, _AMU, _AMUI, _h, _uI, _vN, n0 } from "./schemas_0";
import { Unit } from "./schemas_2_Job";

/* eslint no-var: 0 */

export var AbortMultipartUploadInput = struct(
  n0,
  _AMUI,
  0,
  [_aI, _vN, _uI],
  [
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var AbortMultipartUpload = op(
  n0,
  _AMU,
  {
    [_h]: ["DELETE", "/{accountId}/vaults/{vaultName}/multipart-uploads/{uploadId}", 204],
  },
  () => AbortMultipartUploadInput,
  () => Unit
);
