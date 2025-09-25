// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _An,
  _AT,
  _B,
  _D,
  _DBITC,
  _DBITCR,
  _EBO,
  _F,
  _GBITC,
  _GBITCO,
  _GBITCR,
  _h,
  _hH,
  _hP,
  _hQ,
  _I,
  _i,
  _ITAO,
  _ITC,
  _ITF,
  _P,
  _PBITC,
  _PBITCR,
  _S,
  _T,
  _Ta,
  _Tie,
  _Tier,
  _TL,
  _xaebo,
  _xF,
  _xN,
  n0,
  Tag,
  TagSet,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteBucketIntelligentTieringConfigurationRequest = struct(
  n0,
  _DBITCR,
  0,
  [_B, _I, _EBO],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _i,
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
export var GetBucketIntelligentTieringConfigurationOutput = struct(
  n0,
  _GBITCO,
  0,
  [_ITC],
  [[() => IntelligentTieringConfiguration, 16]]
);
export var GetBucketIntelligentTieringConfigurationRequest = struct(
  n0,
  _GBITCR,
  0,
  [_B, _I, _EBO],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _i,
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
export var IntelligentTieringAndOperator = struct(
  n0,
  _ITAO,
  0,
  [_P, _T],
  [
    0,
    [
      () => TagSet,
      {
        [_xN]: _Ta,
        [_xF]: 1,
      },
    ],
  ]
);
export var IntelligentTieringConfiguration = struct(
  n0,
  _ITC,
  0,
  [_I, _F, _S, _Tie],
  [
    0,
    [() => IntelligentTieringFilter, 0],
    0,
    [
      () => TieringList,
      {
        [_xN]: _Tier,
        [_xF]: 1,
      },
    ],
  ]
);
export var IntelligentTieringFilter = struct(
  n0,
  _ITF,
  0,
  [_P, _Ta, _An],
  [0, () => Tag, [() => IntelligentTieringAndOperator, 0]]
);
export var PutBucketIntelligentTieringConfigurationRequest = struct(
  n0,
  _PBITCR,
  0,
  [_B, _I, _EBO, _ITC],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _i,
      },
    ],
    [
      0,
      {
        [_hH]: _xaebo,
      },
    ],
    [
      () => IntelligentTieringConfiguration,
      {
        [_xN]: _ITC,
        [_hP]: 1,
      },
    ],
  ]
);
export var Tiering = struct(n0, _Tier, 0, [_D, _AT], [1, 0]);
export var TieringList = list(n0, _TL, 0, () => Tiering);
export var DeleteBucketIntelligentTieringConfiguration = op(
  n0,
  _DBITC,
  {
    [_h]: ["DELETE", "/?intelligent-tiering", 204],
  },
  () => DeleteBucketIntelligentTieringConfigurationRequest,
  () => Unit
);
export var GetBucketIntelligentTieringConfiguration = op(
  n0,
  _GBITC,
  {
    [_h]: ["GET", "/?intelligent-tiering&x-id=GetBucketIntelligentTieringConfiguration", 200],
  },
  () => GetBucketIntelligentTieringConfigurationRequest,
  () => GetBucketIntelligentTieringConfigurationOutput
);
export var PutBucketIntelligentTieringConfiguration = op(
  n0,
  _PBITC,
  {
    [_h]: ["PUT", "/?intelligent-tiering", 200],
  },
  () => PutBucketIntelligentTieringConfigurationRequest,
  () => Unit
);
