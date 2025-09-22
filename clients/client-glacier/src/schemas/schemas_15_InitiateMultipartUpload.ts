// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _aD, _aI, _h, _hH, _IMU, _IMUI, _IMUO, _L, _l, _pS, _uI, _vN, _xaad, _xamui, _xaps, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var InitiateMultipartUploadInput = struct(
  n0,
  _IMUI,
  0,
  [_aI, _vN, _aD, _pS],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hH]: _xaad,
      },
    ],
    [
      0,
      {
        [_hH]: _xaps,
      },
    ],
  ]
);
export var InitiateMultipartUploadOutput = struct(
  n0,
  _IMUO,
  0,
  [_l, _uI],
  [
    [
      0,
      {
        [_hH]: _L,
      },
    ],
    [
      0,
      {
        [_hH]: _xamui,
      },
    ],
  ]
);
export var InitiateMultipartUpload = op(
  n0,
  _IMU,
  {
    [_h]: ["POST", "/{accountId}/vaults/{vaultName}/multipart-uploads", 201],
  },
  () => InitiateMultipartUploadInput,
  () => InitiateMultipartUploadOutput
);
