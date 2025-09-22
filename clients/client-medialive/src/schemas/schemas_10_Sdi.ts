// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _Ar,
  _ar,
  _CSSR,
  _CSSr,
  _CSSRr,
  _DSSe,
  _DSSes,
  _DSSR,
  _DSSRe,
  _DSSRes,
  _DSSResc,
  _hQ,
  _ht,
  _I,
  _i,
  _Inp,
  _inp,
  _iTd,
  _jN,
  _lOSSS,
  _LSS,
  _LSSR,
  _LSSRi,
  _Mo,
  _mo,
  _MR,
  _mR,
  _N,
  _n,
  _NT,
  _nT,
  _RIe,
  _rIe,
  _SSd,
  _sSd,
  _SSdi,
  _sSdi,
  _SSId,
  _SSSd,
  _St,
  _st,
  _Ta,
  _ta,
  _Ty,
  _ty,
  _USS,
  _USSR,
  _USSRp,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateSdiSourceRequest = struct(
  n0,
  _CSSR,
  0,
  [_Mo, _N, _RIe, _Ta, _Ty],
  [
    [
      0,
      {
        [_jN]: _mo,
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
        [_jN]: _rIe,
        [_iTd]: 1,
      },
    ],
    [
      128 | 0,
      {
        [_jN]: _ta,
      },
    ],
    [
      0,
      {
        [_jN]: _ty,
      },
    ],
  ]
);
export var CreateSdiSourceResponse = struct(
  n0,
  _CSSRr,
  0,
  [_SSdi],
  [
    [
      () => SdiSource,
      {
        [_jN]: _sSdi,
      },
    ],
  ]
);
export var DeleteSdiSourceRequest = struct(n0, _DSSR, 0, [_SSId], [[0, 1]]);
export var DeleteSdiSourceResponse = struct(
  n0,
  _DSSRe,
  0,
  [_SSdi],
  [
    [
      () => SdiSource,
      {
        [_jN]: _sSdi,
      },
    ],
  ]
);
export var DescribeSdiSourceRequest = struct(n0, _DSSRes, 0, [_SSId], [[0, 1]]);
export var DescribeSdiSourceResponse = struct(
  n0,
  _DSSResc,
  0,
  [_SSdi],
  [
    [
      () => SdiSource,
      {
        [_jN]: _sSdi,
      },
    ],
  ]
);
export var ListSdiSourcesRequest = struct(
  n0,
  _LSSR,
  0,
  [_MR, _NT],
  [
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
  ]
);
export var ListSdiSourcesResponse = struct(
  n0,
  _LSSRi,
  0,
  [_NT, _SSd],
  [
    [
      0,
      {
        [_jN]: _nT,
      },
    ],
    [
      () => __listOfSdiSourceSummary,
      {
        [_jN]: _sSd,
      },
    ],
  ]
);
export var SdiSource = struct(
  n0,
  _SSdi,
  0,
  [_Ar, _I, _Inp, _Mo, _N, _St, _Ty],
  [
    [
      0,
      {
        [_jN]: _ar,
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
        [_jN]: _inp,
      },
    ],
    [
      0,
      {
        [_jN]: _mo,
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
        [_jN]: _st,
      },
    ],
    [
      0,
      {
        [_jN]: _ty,
      },
    ],
  ]
);
export var SdiSourceSummary = struct(
  n0,
  _SSSd,
  0,
  [_Ar, _I, _Inp, _Mo, _N, _St, _Ty],
  [
    [
      0,
      {
        [_jN]: _ar,
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
        [_jN]: _inp,
      },
    ],
    [
      0,
      {
        [_jN]: _mo,
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
        [_jN]: _st,
      },
    ],
    [
      0,
      {
        [_jN]: _ty,
      },
    ],
  ]
);
export var UpdateSdiSourceRequest = struct(
  n0,
  _USSR,
  0,
  [_Mo, _N, _SSId, _Ty],
  [
    [
      0,
      {
        [_jN]: _mo,
      },
    ],
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [0, 1],
    [
      0,
      {
        [_jN]: _ty,
      },
    ],
  ]
);
export var UpdateSdiSourceResponse = struct(
  n0,
  _USSRp,
  0,
  [_SSdi],
  [
    [
      () => SdiSource,
      {
        [_jN]: _sSdi,
      },
    ],
  ]
);
export var __listOfSdiSourceSummary = list(n0, _lOSSS, 0, [() => SdiSourceSummary, 0]);
export var CreateSdiSource = op(
  n0,
  _CSSr,
  {
    [_ht]: ["POST", "/prod/sdiSources", 200],
  },
  () => CreateSdiSourceRequest,
  () => CreateSdiSourceResponse
);
export var DeleteSdiSource = op(
  n0,
  _DSSe,
  {
    [_ht]: ["DELETE", "/prod/sdiSources/{SdiSourceId}", 202],
  },
  () => DeleteSdiSourceRequest,
  () => DeleteSdiSourceResponse
);
export var DescribeSdiSource = op(
  n0,
  _DSSes,
  {
    [_ht]: ["GET", "/prod/sdiSources/{SdiSourceId}", 200],
  },
  () => DescribeSdiSourceRequest,
  () => DescribeSdiSourceResponse
);
export var ListSdiSources = op(
  n0,
  _LSS,
  {
    [_ht]: ["GET", "/prod/sdiSources", 200],
  },
  () => ListSdiSourcesRequest,
  () => ListSdiSourcesResponse
);
export var UpdateSdiSource = op(
  n0,
  _USS,
  {
    [_ht]: ["PUT", "/prod/sdiSources/{SdiSourceId}", 200],
  },
  () => UpdateSdiSourceRequest,
  () => UpdateSdiSourceResponse
);
