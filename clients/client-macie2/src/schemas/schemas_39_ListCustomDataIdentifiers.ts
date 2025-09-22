// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _a, _cA, _CDIS, _d, _h, _i, _it, _jN, _LCDI, _LCDIR, _LCDIRi, _lOCDIS, _mR, _n, _nT, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var CustomDataIdentifierSummary = struct(
  n0,
  _CDIS,
  0,
  [_a, _cA, _d, _i, _n],
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
      0,
      {
        [_jN]: _n,
      },
    ],
  ]
);
export var ListCustomDataIdentifiersRequest = struct(
  n0,
  _LCDIR,
  0,
  [_mR, _nT],
  [
    [
      1,
      {
        [_jN]: _mR,
      },
    ],
    [
      0,
      {
        [_jN]: _nT,
      },
    ],
  ]
);
export var ListCustomDataIdentifiersResponse = struct(
  n0,
  _LCDIRi,
  0,
  [_it, _nT],
  [
    [
      () => __listOfCustomDataIdentifierSummary,
      {
        [_jN]: _it,
      },
    ],
    [
      0,
      {
        [_jN]: _nT,
      },
    ],
  ]
);
export var __listOfCustomDataIdentifierSummary = list(n0, _lOCDIS, 0, [() => CustomDataIdentifierSummary, 0]);
export var ListCustomDataIdentifiers = op(
  n0,
  _LCDI,
  {
    [_h]: ["POST", "/custom-data-identifiers/list", 200],
  },
  () => ListCustomDataIdentifiersRequest,
  () => ListCustomDataIdentifiersResponse
);
