// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _B,
  _CA,
  _CM,
  _CMD,
  _EBO,
  _GOLH,
  _GOLHO,
  _GOLHR,
  _h,
  _hH,
  _hP,
  _hQ,
  _K,
  _LH,
  _OLLH,
  _POLH,
  _POLHO,
  _POLHR,
  _RC,
  _RP,
  _S,
  _VI,
  _vI,
  _xaebo,
  _xarc,
  _xarp,
  _xasca,
  _xN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GetObjectLegalHoldOutput = struct(
  n0,
  _GOLHO,
  0,
  [_LH],
  [
    [
      () => ObjectLockLegalHold,
      {
        [_xN]: _LH,
        [_hP]: 1,
      },
    ],
  ]
);
export var GetObjectLegalHoldRequest = struct(
  n0,
  _GOLHR,
  0,
  [_B, _K, _VI, _RP, _EBO],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hQ]: _vI,
      },
    ],
    [
      0,
      {
        [_hH]: _xarp,
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
export var ObjectLockLegalHold = struct(n0, _OLLH, 0, [_S], [0]);
export var PutObjectLegalHoldOutput = struct(
  n0,
  _POLHO,
  0,
  [_RC],
  [
    [
      0,
      {
        [_hH]: _xarc,
      },
    ],
  ]
);
export var PutObjectLegalHoldRequest = struct(
  n0,
  _POLHR,
  0,
  [_B, _K, _LH, _RP, _VI, _CMD, _CA, _EBO],
  [
    [0, 1],
    [0, 1],
    [
      () => ObjectLockLegalHold,
      {
        [_xN]: _LH,
        [_hP]: 1,
      },
    ],
    [
      0,
      {
        [_hH]: _xarp,
      },
    ],
    [
      0,
      {
        [_hQ]: _vI,
      },
    ],
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
        [_hH]: _xaebo,
      },
    ],
  ]
);
export var Metadata = 128 | 0;

export var GetObjectLegalHold = op(
  n0,
  _GOLH,
  {
    [_h]: ["GET", "/{Key+}?legal-hold", 200],
  },
  () => GetObjectLegalHoldRequest,
  () => GetObjectLegalHoldOutput
);
export var PutObjectLegalHold = op(
  n0,
  _POLH,
  {
    [_h]: ["PUT", "/{Key+}?legal-hold", 200],
  },
  () => PutObjectLegalHoldRequest,
  () => PutObjectLegalHoldOutput
);
