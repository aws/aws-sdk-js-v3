// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _AI,
  _B,
  _GBV,
  _GBVR,
  _GBVRe,
  _h,
  _hCR,
  _hH,
  _hL,
  _hP,
  _MD,
  _MFA,
  _MFAD,
  _PBV,
  _PBVR,
  _St,
  _VCe,
  _xaai,
  _xam,
  _xN,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GetBucketVersioningRequest = struct(
  n0,
  _GBVR,
  0,
  [_AI, _B],
  [
    [
      0,
      {
        [_hL]: 1,
        [_hH]: _xaai,
      },
    ],
    [0, 1],
  ]
);
export var GetBucketVersioningResult = struct(
  n0,
  _GBVRe,
  0,
  [_St, _MFAD],
  [
    0,
    [
      0,
      {
        [_xN]: _MD,
      },
    ],
  ]
);
export var PutBucketVersioningRequest = struct(
  n0,
  _PBVR,
  0,
  [_AI, _B, _MFA, _VCe],
  [
    [
      0,
      {
        [_hL]: 1,
        [_hH]: _xaai,
      },
    ],
    [0, 1],
    [
      0,
      {
        [_hH]: _xam,
      },
    ],
    [
      () => VersioningConfiguration,
      {
        [_xN]: _VCe,
        [_hP]: 1,
      },
    ],
  ]
);
export var VersioningConfiguration = struct(
  n0,
  _VCe,
  0,
  [_MFAD, _St],
  [
    [
      0,
      {
        [_xN]: _MD,
      },
    ],
    0,
  ]
);
export var GetBucketVersioning = op(
  n0,
  _GBV,
  {
    [_h]: ["GET", "/v20180820/bucket/{Bucket}/versioning", 200],
  },
  () => GetBucketVersioningRequest,
  () => GetBucketVersioningResult
);
export var PutBucketVersioning = op(
  n0,
  _PBV,
  {
    [_h]: ["PUT", "/v20180820/bucket/{Bucket}/versioning", 200],
    [_hCR]: 1,
  },
  () => PutBucketVersioningRequest,
  () => Unit
);
