// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CD,
  _CDR,
  _CDRr,
  _d,
  _eK,
  _hQ,
  _ht,
  _k,
  _LTFR,
  _LTFRR,
  _LTFRRi,
  _rA,
  _T,
  _t,
  _tK,
  _TL,
  _TR,
  _TRR,
  _TRRa,
  _URn,
  _URR,
  _URRn,
  _va,
  n0,
} from "./schemas_0";
import { DomainDescription } from "./schemas_9_Domain";

/* eslint no-var: 0 */

export var CreateDomainRequest = struct(
  n0,
  _CDR,
  0,
  [_d, _eK, _t],
  [
    [
      0,
      {
        [_hQ]: _d,
      },
    ],
    0,
    () => TagList,
  ]
);
export var CreateDomainResult = struct(n0, _CDRr, 0, [_d], [() => DomainDescription]);
export var ListTagsForResourceRequest = struct(
  n0,
  _LTFRR,
  0,
  [_rA],
  [
    [
      0,
      {
        [_hQ]: _rA,
      },
    ],
  ]
);
export var ListTagsForResourceResult = struct(n0, _LTFRRi, 0, [_t], [() => TagList]);
export var Tag = struct(n0, _T, 0, [_k, _va], [0, 0]);
export var TagResourceRequest = struct(
  n0,
  _TRR,
  0,
  [_rA, _t],
  [
    [
      0,
      {
        [_hQ]: _rA,
      },
    ],
    () => TagList,
  ]
);
export var TagResourceResult = struct(n0, _TRRa, 0, [], []);
export var UntagResourceRequest = struct(
  n0,
  _URR,
  0,
  [_rA, _tK],
  [
    [
      0,
      {
        [_hQ]: _rA,
      },
    ],
    64 | 0,
  ]
);
export var UntagResourceResult = struct(n0, _URRn, 0, [], []);
export var TagKeyList = 64 | 0;

export var TagList = list(n0, _TL, 0, () => Tag);
export var CreateDomain = op(
  n0,
  _CD,
  {
    [_ht]: ["POST", "/v1/domain", 200],
  },
  () => CreateDomainRequest,
  () => CreateDomainResult
);
export var ListTagsForResource = op(
  n0,
  _LTFR,
  {
    [_ht]: ["POST", "/v1/tags", 200],
  },
  () => ListTagsForResourceRequest,
  () => ListTagsForResourceResult
);
export var TagResource = op(
  n0,
  _TR,
  {
    [_ht]: ["POST", "/v1/tag", 200],
  },
  () => TagResourceRequest,
  () => TagResourceResult
);
export var UntagResource = op(
  n0,
  _URn,
  {
    [_ht]: ["POST", "/v1/untag", 200],
  },
  () => UntagResourceRequest,
  () => UntagResourceResult
);
