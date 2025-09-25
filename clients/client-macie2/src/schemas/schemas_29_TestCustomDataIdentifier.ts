// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _h, _iW, _jN, _k, _mC, _mMD, _r, _sT, _TCDI, _TCDIR, _TCDIRe, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var TestCustomDataIdentifierRequest = struct(
  n0,
  _TCDIR,
  0,
  [_iW, _k, _mMD, _r, _sT],
  [
    [
      64 | 0,
      {
        [_jN]: _iW,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _k,
      },
    ],
    [
      1,
      {
        [_jN]: _mMD,
      },
    ],
    [
      0,
      {
        [_jN]: _r,
      },
    ],
    [
      0,
      {
        [_jN]: _sT,
      },
    ],
  ]
);
export var TestCustomDataIdentifierResponse = struct(
  n0,
  _TCDIRe,
  0,
  [_mC],
  [
    [
      1,
      {
        [_jN]: _mC,
      },
    ],
  ]
);
export var TestCustomDataIdentifier = op(
  n0,
  _TCDI,
  {
    [_h]: ["POST", "/custom-data-identifiers/test", 200],
  },
  () => TestCustomDataIdentifierRequest,
  () => TestCustomDataIdentifierResponse
);
