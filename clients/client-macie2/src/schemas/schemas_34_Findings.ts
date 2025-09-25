// smithy-typescript generated code
import { map, op, struct } from "@smithy/core/schema";

import {
  _a,
  _act,
  _CAP,
  _CFF,
  _CFFR,
  _CFFRr,
  _Cr,
  _cri,
  _cT,
  _d,
  _eEM,
  _eq,
  _FC,
  _fC,
  _g,
  _GFF,
  _GFFR,
  _GFFRe,
  _gt,
  _h,
  _i,
  _iT,
  _jN,
  _l,
  _lt,
  _n,
  _ne,
  _po,
  _t,
  _UFF,
  _UFFR,
  _UFFRp,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateFindingsFilterRequest = struct(
  n0,
  _CFFR,
  0,
  [_act, _cT, _d, _fC, _n, _po, _t],
  [
    [
      0,
      {
        [_jN]: _act,
      },
    ],
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
      () => FindingCriteria,
      {
        [_jN]: _fC,
      },
    ],
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      1,
      {
        [_jN]: _po,
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
export var CreateFindingsFilterResponse = struct(
  n0,
  _CFFRr,
  0,
  [_a, _i],
  [
    [
      0,
      {
        [_jN]: _a,
      },
    ],
    [
      0,
      {
        [_jN]: _i,
      },
    ],
  ]
);
export var CriterionAdditionalProperties = struct(
  n0,
  _CAP,
  0,
  [_eq, _eEM, _g, _gt, _l, _lt, _ne],
  [
    [
      64 | 0,
      {
        [_jN]: _eq,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _eEM,
      },
    ],
    [
      1,
      {
        [_jN]: _g,
      },
    ],
    [
      1,
      {
        [_jN]: _gt,
      },
    ],
    [
      1,
      {
        [_jN]: _l,
      },
    ],
    [
      1,
      {
        [_jN]: _lt,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _ne,
      },
    ],
  ]
);
export var FindingCriteria = struct(
  n0,
  _FC,
  0,
  [_cri],
  [
    [
      () => Criterion,
      {
        [_jN]: _cri,
      },
    ],
  ]
);
export var GetFindingsFilterRequest = struct(n0, _GFFR, 0, [_i], [[0, 1]]);
export var GetFindingsFilterResponse = struct(
  n0,
  _GFFRe,
  0,
  [_act, _a, _d, _fC, _i, _n, _po, _t],
  [
    [
      0,
      {
        [_jN]: _act,
      },
    ],
    [
      0,
      {
        [_jN]: _a,
      },
    ],
    [
      0,
      {
        [_jN]: _d,
      },
    ],
    [
      () => FindingCriteria,
      {
        [_jN]: _fC,
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
    [
      1,
      {
        [_jN]: _po,
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
export var UpdateFindingsFilterRequest = struct(
  n0,
  _UFFR,
  0,
  [_act, _cT, _d, _fC, _i, _n, _po],
  [
    [
      0,
      {
        [_jN]: _act,
      },
    ],
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
      () => FindingCriteria,
      {
        [_jN]: _fC,
      },
    ],
    [0, 1],
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      1,
      {
        [_jN]: _po,
      },
    ],
  ]
);
export var UpdateFindingsFilterResponse = struct(
  n0,
  _UFFRp,
  0,
  [_a, _i],
  [
    [
      0,
      {
        [_jN]: _a,
      },
    ],
    [
      0,
      {
        [_jN]: _i,
      },
    ],
  ]
);
export var Criterion = map(n0, _Cr, 0, [0, 0], [() => CriterionAdditionalProperties, 0]);
export var CreateFindingsFilter = op(
  n0,
  _CFF,
  {
    [_h]: ["POST", "/findingsfilters", 200],
  },
  () => CreateFindingsFilterRequest,
  () => CreateFindingsFilterResponse
);
export var GetFindingsFilter = op(
  n0,
  _GFF,
  {
    [_h]: ["GET", "/findingsfilters/{id}", 200],
  },
  () => GetFindingsFilterRequest,
  () => GetFindingsFilterResponse
);
export var UpdateFindingsFilter = op(
  n0,
  _UFF,
  {
    [_h]: ["PATCH", "/findingsfilters/{id}", 200],
  },
  () => UpdateFindingsFilterRequest,
  () => UpdateFindingsFilterResponse
);
