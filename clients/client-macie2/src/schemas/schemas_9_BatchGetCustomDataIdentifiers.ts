// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _a,
  _BGCDI,
  _BGCDIR,
  _BGCDIRa,
  _BGCDIS,
  _cA,
  _cDI,
  _d,
  _de,
  _h,
  _i,
  _id,
  _jN,
  _lOBGCDIS,
  _n,
  _nFII,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var BatchGetCustomDataIdentifiersRequest = struct(
  n0,
  _BGCDIR,
  0,
  [_id],
  [
    [
      64 | 0,
      {
        [_jN]: _id,
      },
    ],
  ]
);
export var BatchGetCustomDataIdentifiersResponse = struct(
  n0,
  _BGCDIRa,
  0,
  [_cDI, _nFII],
  [
    [
      () => __listOfBatchGetCustomDataIdentifierSummary,
      {
        [_jN]: _cDI,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _nFII,
      },
    ],
  ]
);
export var BatchGetCustomDataIdentifierSummary = struct(
  n0,
  _BGCDIS,
  0,
  [_a, _cA, _de, _d, _i, _n],
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
      0,
      {
        [_jN]: _n,
      },
    ],
  ]
);
export var __listOfBatchGetCustomDataIdentifierSummary = list(n0, _lOBGCDIS, 0, [
  () => BatchGetCustomDataIdentifierSummary,
  0,
]);
export var BatchGetCustomDataIdentifiers = op(
  n0,
  _BGCDI,
  {
    [_h]: ["POST", "/custom-data-identifiers/get", 200],
  },
  () => BatchGetCustomDataIdentifiersRequest,
  () => BatchGetCustomDataIdentifiersResponse
);
