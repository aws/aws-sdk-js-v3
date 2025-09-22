// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _B,
  _CA,
  _CM,
  _CMD,
  _EBO,
  _h,
  _hH,
  _hP,
  _MDf,
  _MFA,
  _MFAD,
  _PBV,
  _PBVR,
  _S,
  _VC,
  _xaebo,
  _xam_,
  _xasca,
  _xN,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var PutBucketVersioningRequest = struct(
  n0,
  _PBVR,
  0,
  [_B, _CMD, _CA, _MFA, _VC, _EBO],
  [
    [0, 1],
    [
      0,
      {
        [_hH]: _CM,
      },
    ],
    [
      0,
      {
        [_hH]: _xasca,
      },
    ],
    [
      0,
      {
        [_hH]: _xam_,
      },
    ],
    [
      () => VersioningConfiguration,
      {
        [_xN]: _VC,
        [_hP]: 1,
      },
    ],
    [
      0,
      {
        [_hH]: _xaebo,
      },
    ],
  ]
);
export var VersioningConfiguration = struct(
  n0,
  _VC,
  0,
  [_MFAD, _S],
  [
    [
      0,
      {
        [_xN]: _MDf,
      },
    ],
    0,
  ]
);
export var PutBucketVersioning = op(
  n0,
  _PBV,
  {
    [_h]: ["PUT", "/?versioning", 200],
  },
  () => PutBucketVersioningRequest,
  () => Unit
);
