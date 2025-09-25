// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _a,
  _cA,
  _CCDI,
  _CCDIR,
  _CCDIRr,
  _cDIIu,
  _cT,
  _d,
  _de,
  _GCDI,
  _GCDIR,
  _GCDIRe,
  _h,
  _i,
  _iT,
  _iW,
  _jN,
  _k,
  _mMD,
  _n,
  _oTc,
  _r,
  _sev,
  _sL,
  _SLe,
  _SLL,
  _t,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateCustomDataIdentifierRequest = struct(
  n0,
  _CCDIR,
  0,
  [_cT, _d, _iW, _k, _mMD, _n, _r, _sL, _t],
  [
    [
      0,
      {
        [_jN]: _cT,
        [_iT]: 1,
      },
    ],
    [
      0,
      {
        [_jN]: _d,
      },
    ],
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
        [_jN]: _n,
      },
    ],
    [
      0,
      {
        [_jN]: _r,
      },
    ],
    [
      () => SeverityLevelList,
      {
        [_jN]: _sL,
      },
    ],
    [
      128 | 0,
      {
        [_jN]: _t,
      },
    ],
  ]
);
export var CreateCustomDataIdentifierResponse = struct(
  n0,
  _CCDIRr,
  0,
  [_cDIIu],
  [
    [
      0,
      {
        [_jN]: _cDIIu,
      },
    ],
  ]
);
export var GetCustomDataIdentifierRequest = struct(n0, _GCDIR, 0, [_i], [[0, 1]]);
export var GetCustomDataIdentifierResponse = struct(
  n0,
  _GCDIRe,
  0,
  [_a, _cA, _de, _d, _i, _iW, _k, _mMD, _n, _r, _sL, _t],
  [
    [
      0,
      {
        [_jN]: _a,
      },
    ],
    [
      5,
      {
        [_jN]: _cA,
      },
    ],
    [
      2,
      {
        [_jN]: _de,
      },
    ],
    [
      0,
      {
        [_jN]: _d,
      },
    ],
    [
      0,
      {
        [_jN]: _i,
      },
    ],
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
        [_jN]: _n,
      },
    ],
    [
      0,
      {
        [_jN]: _r,
      },
    ],
    [
      () => SeverityLevelList,
      {
        [_jN]: _sL,
      },
    ],
    [
      128 | 0,
      {
        [_jN]: _t,
      },
    ],
  ]
);
export var SeverityLevel = struct(
  n0,
  _SLe,
  0,
  [_oTc, _sev],
  [
    [
      1,
      {
        [_jN]: _oTc,
      },
    ],
    [
      0,
      {
        [_jN]: _sev,
      },
    ],
  ]
);
export var SeverityLevelList = list(n0, _SLL, 0, [() => SeverityLevel, 0]);
export var CreateCustomDataIdentifier = op(
  n0,
  _CCDI,
  {
    [_h]: ["POST", "/custom-data-identifiers", 200],
  },
  () => CreateCustomDataIdentifierRequest,
  () => CreateCustomDataIdentifierResponse
);
export var GetCustomDataIdentifier = op(
  n0,
  _GCDI,
  {
    [_h]: ["GET", "/custom-data-identifiers/{id}", 200],
  },
  () => GetCustomDataIdentifierRequest,
  () => GetCustomDataIdentifierResponse
);
