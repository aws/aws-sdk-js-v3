// smithy-typescript generated code
import { op, struct, struct as uni } from "@smithy/core/schema";

import {
  _An,
  _APAc,
  _B,
  _DBMCe,
  _DBMCRe,
  _EBO,
  _F,
  _GBMCe,
  _GBMCOe,
  _GBMCRet,
  _h,
  _hH,
  _hP,
  _hQ,
  _I,
  _i,
  _MAO,
  _MCe,
  _MF,
  _P,
  _PBMC,
  _PBMCR,
  _T,
  _Ta,
  _xaebo,
  _xF,
  _xN,
  n0,
  Tag,
  TagSet,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteBucketMetricsConfigurationRequest = struct(
  n0,
  _DBMCRe,
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
export var GetBucketMetricsConfigurationOutput = struct(n0, _GBMCOe, 0, [_MCe], [[() => MetricsConfiguration, 16]]);
export var GetBucketMetricsConfigurationRequest = struct(
  n0,
  _GBMCRet,
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
export var MetricsAndOperator = struct(
  n0,
  _MAO,
  0,
  [_P, _T, _APAc],
  [
    0,
    [
      () => TagSet,
      {
        [_xN]: _Ta,
        [_xF]: 1,
      },
    ],
    0,
  ]
);
export var MetricsConfiguration = struct(n0, _MCe, 0, [_I, _F], [0, [() => MetricsFilter, 0]]);
export var PutBucketMetricsConfigurationRequest = struct(
  n0,
  _PBMCR,
  0,
  [_B, _I, _MCe, _EBO],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _i,
      },
    ],
    [
      () => MetricsConfiguration,
      {
        [_xN]: _MCe,
        [_hP]: 1,
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
export var MetricsFilter = uni(n0, _MF, 0, [_P, _Ta, _APAc, _An], [0, () => Tag, 0, [() => MetricsAndOperator, 0]]);
export var DeleteBucketMetricsConfiguration = op(
  n0,
  _DBMCe,
  {
    [_h]: ["DELETE", "/?metrics", 204],
  },
  () => DeleteBucketMetricsConfigurationRequest,
  () => Unit
);
export var GetBucketMetricsConfiguration = op(
  n0,
  _GBMCe,
  {
    [_h]: ["GET", "/?metrics&x-id=GetBucketMetricsConfiguration", 200],
  },
  () => GetBucketMetricsConfigurationRequest,
  () => GetBucketMetricsConfigurationOutput
);
export var PutBucketMetricsConfiguration = op(
  n0,
  _PBMC,
  {
    [_h]: ["PUT", "/?metrics", 200],
  },
  () => PutBucketMetricsConfigurationRequest,
  () => Unit
);
