// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _a,
  _aSB,
  _cT,
  _d,
  _DD,
  _DDe,
  _DDes,
  _DDR,
  _DDRe,
  _DDRes,
  _DDResc,
  _dO,
  _do,
  _eK,
  _hQ,
  _ht,
  _n,
  _o,
  _rC,
  _sBA,
  _st,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteDomainRequest = struct(
  n0,
  _DDR,
  0,
  [_d, _dO],
  [
    [
      0,
      {
        [_hQ]: _d,
      },
    ],
    [
      0,
      {
        [_hQ]: _do,
      },
    ],
  ]
);
export var DeleteDomainResult = struct(n0, _DDRe, 0, [_d], [() => DomainDescription]);
export var DescribeDomainRequest = struct(
  n0,
  _DDRes,
  0,
  [_d, _dO],
  [
    [
      0,
      {
        [_hQ]: _d,
      },
    ],
    [
      0,
      {
        [_hQ]: _do,
      },
    ],
  ]
);
export var DescribeDomainResult = struct(n0, _DDResc, 0, [_d], [() => DomainDescription]);
export var DomainDescription = struct(
  n0,
  _DD,
  0,
  [_n, _o, _a, _st, _cT, _eK, _rC, _aSB, _sBA],
  [0, 0, 0, 0, 4, 0, 1, 1, 0]
);
export var DeleteDomain = op(
  n0,
  _DDe,
  {
    [_ht]: ["DELETE", "/v1/domain", 200],
  },
  () => DeleteDomainRequest,
  () => DeleteDomainResult
);
export var DescribeDomain = op(
  n0,
  _DDes,
  {
    [_ht]: ["GET", "/v1/domain", 200],
  },
  () => DescribeDomainRequest,
  () => DescribeDomainResult
);
