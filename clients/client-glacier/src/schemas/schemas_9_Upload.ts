// smithy-typescript generated code
import { error, op, sim, struct } from "@smithy/core/schema";

import { RequestTimeoutException as __RequestTimeoutException } from "../models/index";
import {
  _aD,
  _aI,
  _AR,
  _aR,
  _b,
  _c,
  _cl,
  _co,
  _CR,
  _cR,
  _CT,
  _cT,
  _e,
  _GJO,
  _GJOI,
  _GJOO,
  _h,
  _hE,
  _hH,
  _jI,
  _m,
  _r,
  _Ra,
  _RTE,
  _S,
  _s,
  _st,
  _t,
  _UA,
  _UAI,
  _uI,
  _UMP,
  _UMPI,
  _UMPO,
  _vN,
  _xaad,
  _xasth,
  n0,
} from "./schemas_0";
import { ArchiveCreationOutput } from "./schemas_20_Upload";

/* eslint no-var: 0 */

export var _Stream = sim(n0, _S, 42, {
  [_s]: 1,
});
export var GetJobOutputInput = struct(
  n0,
  _GJOI,
  0,
  [_aI, _vN, _jI, _r],
  [
    [0, 1],
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hH]: _Ra,
      },
    ],
  ]
);
export var GetJobOutputOutput = struct(
  n0,
  _GJOO,
  0,
  [_b, _c, _st, _cR, _aR, _cT, _aD],
  [
    [() => _Stream, 16],
    [
      0,
      {
        [_hH]: _xasth,
      },
    ],
    [1, 32],
    [
      0,
      {
        [_hH]: _CR,
      },
    ],
    [
      0,
      {
        [_hH]: _AR,
      },
    ],
    [
      0,
      {
        [_hH]: _CT,
      },
    ],
    [
      0,
      {
        [_hH]: _xaad,
      },
    ],
  ]
);
export var RequestTimeoutException = error(
  n0,
  _RTE,
  {
    [_e]: _cl,
    [_hE]: 408,
  },
  [_t, _co, _m],
  [0, 0, 0],

  __RequestTimeoutException
);
export var UploadArchiveInput = struct(
  n0,
  _UAI,
  0,
  [_vN, _aI, _aD, _c, _b],
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
        [_hH]: _xasth,
      },
    ],
    [() => _Stream, 16],
  ]
);
export var UploadMultipartPartInput = struct(
  n0,
  _UMPI,
  0,
  [_aI, _vN, _uI, _c, _r, _b],
  [
    [0, 1],
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hH]: _xasth,
      },
    ],
    [
      0,
      {
        [_hH]: _CR,
      },
    ],
    [() => _Stream, 16],
  ]
);
export var UploadMultipartPartOutput = struct(
  n0,
  _UMPO,
  0,
  [_c],
  [
    [
      0,
      {
        [_hH]: _xasth,
      },
    ],
  ]
);
export var GetJobOutput = op(
  n0,
  _GJO,
  {
    [_h]: ["GET", "/{accountId}/vaults/{vaultName}/jobs/{jobId}/output", 200],
  },
  () => GetJobOutputInput,
  () => GetJobOutputOutput
);
export var UploadArchive = op(
  n0,
  _UA,
  {
    [_h]: ["POST", "/{accountId}/vaults/{vaultName}/archives", 201],
  },
  () => UploadArchiveInput,
  () => ArchiveCreationOutput
);
export var UploadMultipartPart = op(
  n0,
  _UMP,
  {
    [_h]: ["PUT", "/{accountId}/vaults/{vaultName}/multipart-uploads/{uploadId}", 204],
  },
  () => UploadMultipartPartInput,
  () => UploadMultipartPartOutput
);
