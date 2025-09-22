// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _ACO,
  _aI,
  _aIr,
  _aS,
  _c,
  _CMU,
  _CMUI,
  _h,
  _hH,
  _L,
  _l,
  _uI,
  _vN,
  _xaai,
  _xaas,
  _xasth,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ArchiveCreationOutput = struct(
  n0,
  _ACO,
  0,
  [_l, _c, _aIr],
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
        [_hH]: _xasth,
      },
    ],
    [
      0,
      {
        [_hH]: _xaai,
      },
    ],
  ]
);
export var CompleteMultipartUploadInput = struct(
  n0,
  _CMUI,
  0,
  [_aI, _vN, _uI, _aS, _c],
  [
    [0, 1],
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hH]: _xaas,
      },
    ],
    [
      0,
      {
        [_hH]: _xasth,
      },
    ],
  ]
);
export var CompleteMultipartUpload = op(
  n0,
  _CMU,
  {
    [_h]: ["POST", "/{accountId}/vaults/{vaultName}/multipart-uploads/{uploadId}", 201],
  },
  () => CompleteMultipartUploadInput,
  () => ArchiveCreationOutput
);
