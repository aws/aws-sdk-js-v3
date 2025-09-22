// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _B,
  _BGR,
  _DM,
  _DOel,
  _DOO,
  _DOR,
  _EBO,
  _h,
  _hH,
  _hQ,
  _IM,
  _IM_,
  _IMLMT,
  _IMS,
  _K,
  _MFA,
  _RC,
  _RP,
  _VI,
  _vI,
  _xabgr,
  _xadm,
  _xaebo,
  _xaimlmt,
  _xaims,
  _xam_,
  _xarc,
  _xarp,
  _xavi,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteObjectOutput = struct(
  n0,
  _DOO,
  0,
  [_DM, _VI, _RC],
  [
    [
      2,
      {
        [_hH]: _xadm,
      },
    ],
    [
      0,
      {
        [_hH]: _xavi,
      },
    ],
    [
      0,
      {
        [_hH]: _xarc,
      },
    ],
  ]
);
export var DeleteObjectRequest = struct(
  n0,
  _DOR,
  0,
  [_B, _K, _MFA, _VI, _RP, _BGR, _EBO, _IM, _IMLMT, _IMS],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hH]: _xam_,
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
        [_hH]: _xarp,
      },
    ],
    [
      2,
      {
        [_hH]: _xabgr,
      },
    ],
    [
      0,
      {
        [_hH]: _xaebo,
      },
    ],
    [
      0,
      {
        [_hH]: _IM_,
      },
    ],
    [
      6,
      {
        [_hH]: _xaimlmt,
      },
    ],
    [
      1,
      {
        [_hH]: _xaims,
      },
    ],
  ]
);
export var DeleteObject = op(
  n0,
  _DOel,
  {
    [_h]: ["DELETE", "/{Key+}?x-id=DeleteObject", 204],
  },
  () => DeleteObjectRequest,
  () => DeleteObjectOutput
);
