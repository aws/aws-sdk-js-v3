// smithy-typescript generated code
import { op, struct, struct as uni } from "@smithy/core/schema";

import {
  _AAO,
  _ACn,
  _AED,
  _AF,
  _An,
  _ASBD,
  _B,
  _BAI,
  _DBAC,
  _DBACR,
  _DE,
  _Des,
  _EBO,
  _F,
  _Fo,
  _GBACe,
  _GBACOe,
  _GBACRe,
  _h,
  _hH,
  _hP,
  _hQ,
  _I,
  _i,
  _OSV,
  _P,
  _PBACRu,
  _PBACu,
  _SBD,
  _SCA,
  _SCADE,
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

export var AnalyticsAndOperator = struct(
  n0,
  _AAO,
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
export var AnalyticsConfiguration = struct(
  n0,
  _ACn,
  0,
  [_I, _F, _SCA],
  [0, [() => AnalyticsFilter, 0], () => StorageClassAnalysis]
);
export var AnalyticsExportDestination = struct(n0, _AED, 0, [_SBD], [() => AnalyticsS3BucketDestination]);
export var AnalyticsS3BucketDestination = struct(n0, _ASBD, 0, [_Fo, _BAI, _B, _P], [0, 0, 0, 0]);
export var DeleteBucketAnalyticsConfigurationRequest = struct(
  n0,
  _DBACR,
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
export var GetBucketAnalyticsConfigurationOutput = struct(n0, _GBACOe, 0, [_ACn], [[() => AnalyticsConfiguration, 16]]);
export var GetBucketAnalyticsConfigurationRequest = struct(
  n0,
  _GBACRe,
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
export var PutBucketAnalyticsConfigurationRequest = struct(
  n0,
  _PBACRu,
  0,
  [_B, _I, _ACn, _EBO],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _i,
      },
    ],
    [
      () => AnalyticsConfiguration,
      {
        [_xN]: _ACn,
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
export var StorageClassAnalysis = struct(n0, _SCA, 0, [_DE], [() => StorageClassAnalysisDataExport]);
export var StorageClassAnalysisDataExport = struct(n0, _SCADE, 0, [_OSV, _Des], [0, () => AnalyticsExportDestination]);
export var AnalyticsFilter = uni(n0, _AF, 0, [_P, _Ta, _An], [0, () => Tag, [() => AnalyticsAndOperator, 0]]);
export var DeleteBucketAnalyticsConfiguration = op(
  n0,
  _DBAC,
  {
    [_h]: ["DELETE", "/?analytics", 204],
  },
  () => DeleteBucketAnalyticsConfigurationRequest,
  () => Unit
);
export var GetBucketAnalyticsConfiguration = op(
  n0,
  _GBACe,
  {
    [_h]: ["GET", "/?analytics&x-id=GetBucketAnalyticsConfiguration", 200],
  },
  () => GetBucketAnalyticsConfigurationRequest,
  () => GetBucketAnalyticsConfigurationOutput
);
export var PutBucketAnalyticsConfiguration = op(
  n0,
  _PBACu,
  {
    [_h]: ["PUT", "/?analytics", 200],
  },
  () => PutBucketAnalyticsConfigurationRequest,
  () => Unit
);
