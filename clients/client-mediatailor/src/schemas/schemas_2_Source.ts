// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ABO,
  _ABOd,
  _Ar,
  _CLS,
  _CLSR,
  _CLSRr,
  _CT,
  _CVS,
  _CVSR,
  _CVSRr,
  _DLSe,
  _DLSRes,
  _DLSResc,
  _DVSe,
  _DVSRes,
  _DVSResc,
  _h,
  _HPC,
  _HPCt,
  _hQ,
  _I,
  _jN,
  _LLS,
  _LLSR,
  _LLSRi,
  _LMT,
  _lOLS,
  _lOVS,
  _LS,
  _LSN,
  _LVS,
  _LVSR,
  _LVSRi,
  _MR,
  _mR,
  _NT,
  _nT,
  _OM,
  _Pa,
  _SG,
  _SLN,
  _T,
  _t,
  _Ty,
  _ULS,
  _ULSR,
  _ULSRp,
  _UVS,
  _UVSR,
  _UVSRp,
  _VS,
  _VSN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AdBreakOpportunity = struct(n0, _ABO, 0, [_OM], [1]);
export var CreateLiveSourceRequest = struct(
  n0,
  _CLSR,
  0,
  [_HPC, _LSN, _SLN, _T],
  [
    () => HttpPackageConfigurations,
    [0, 1],
    [0, 1],
    [
      128 | 0,
      {
        [_jN]: _t,
      },
    ],
  ]
);
export var CreateLiveSourceResponse = struct(
  n0,
  _CLSRr,
  0,
  [_Ar, _CT, _HPC, _LMT, _LSN, _SLN, _T],
  [
    0,
    7,
    () => HttpPackageConfigurations,
    7,
    0,
    0,
    [
      128 | 0,
      {
        [_jN]: _t,
      },
    ],
  ]
);
export var CreateVodSourceRequest = struct(
  n0,
  _CVSR,
  0,
  [_HPC, _SLN, _T, _VSN],
  [
    () => HttpPackageConfigurations,
    [0, 1],
    [
      128 | 0,
      {
        [_jN]: _t,
      },
    ],
    [0, 1],
  ]
);
export var CreateVodSourceResponse = struct(
  n0,
  _CVSRr,
  0,
  [_Ar, _CT, _HPC, _LMT, _SLN, _T, _VSN],
  [
    0,
    7,
    () => HttpPackageConfigurations,
    7,
    0,
    [
      128 | 0,
      {
        [_jN]: _t,
      },
    ],
    0,
  ]
);
export var DescribeLiveSourceRequest = struct(
  n0,
  _DLSRes,
  0,
  [_LSN, _SLN],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DescribeLiveSourceResponse = struct(
  n0,
  _DLSResc,
  0,
  [_Ar, _CT, _HPC, _LMT, _LSN, _SLN, _T],
  [
    0,
    7,
    () => HttpPackageConfigurations,
    7,
    0,
    0,
    [
      128 | 0,
      {
        [_jN]: _t,
      },
    ],
  ]
);
export var DescribeVodSourceRequest = struct(
  n0,
  _DVSRes,
  0,
  [_SLN, _VSN],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DescribeVodSourceResponse = struct(
  n0,
  _DVSResc,
  0,
  [_ABOd, _Ar, _CT, _HPC, _LMT, _SLN, _T, _VSN],
  [
    () => AdBreakOpportunities,
    0,
    7,
    () => HttpPackageConfigurations,
    7,
    0,
    [
      128 | 0,
      {
        [_jN]: _t,
      },
    ],
    0,
  ]
);
export var HttpPackageConfiguration = struct(n0, _HPCt, 0, [_Pa, _SG, _Ty], [0, 0, 0]);
export var ListLiveSourcesRequest = struct(
  n0,
  _LLSR,
  0,
  [_MR, _NT, _SLN],
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
    [0, 1],
  ]
);
export var ListLiveSourcesResponse = struct(n0, _LLSRi, 0, [_I, _NT], [[() => __listOfLiveSource, 0], 0]);
export var ListVodSourcesRequest = struct(
  n0,
  _LVSR,
  0,
  [_MR, _NT, _SLN],
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
    [0, 1],
  ]
);
export var ListVodSourcesResponse = struct(n0, _LVSRi, 0, [_I, _NT], [[() => __listOfVodSource, 0], 0]);
export var LiveSource = struct(
  n0,
  _LS,
  0,
  [_Ar, _CT, _HPC, _LMT, _LSN, _SLN, _T],
  [
    0,
    7,
    () => HttpPackageConfigurations,
    7,
    0,
    0,
    [
      128 | 0,
      {
        [_jN]: _t,
      },
    ],
  ]
);
export var UpdateLiveSourceRequest = struct(
  n0,
  _ULSR,
  0,
  [_HPC, _LSN, _SLN],
  [() => HttpPackageConfigurations, [0, 1], [0, 1]]
);
export var UpdateLiveSourceResponse = struct(
  n0,
  _ULSRp,
  0,
  [_Ar, _CT, _HPC, _LMT, _LSN, _SLN, _T],
  [
    0,
    7,
    () => HttpPackageConfigurations,
    7,
    0,
    0,
    [
      128 | 0,
      {
        [_jN]: _t,
      },
    ],
  ]
);
export var UpdateVodSourceRequest = struct(
  n0,
  _UVSR,
  0,
  [_HPC, _SLN, _VSN],
  [() => HttpPackageConfigurations, [0, 1], [0, 1]]
);
export var UpdateVodSourceResponse = struct(
  n0,
  _UVSRp,
  0,
  [_Ar, _CT, _HPC, _LMT, _SLN, _T, _VSN],
  [
    0,
    7,
    () => HttpPackageConfigurations,
    7,
    0,
    [
      128 | 0,
      {
        [_jN]: _t,
      },
    ],
    0,
  ]
);
export var VodSource = struct(
  n0,
  _VS,
  0,
  [_Ar, _CT, _HPC, _LMT, _SLN, _T, _VSN],
  [
    0,
    7,
    () => HttpPackageConfigurations,
    7,
    0,
    [
      128 | 0,
      {
        [_jN]: _t,
      },
    ],
    0,
  ]
);
export var __listOfLiveSource = list(n0, _lOLS, 0, [() => LiveSource, 0]);
export var __listOfVodSource = list(n0, _lOVS, 0, [() => VodSource, 0]);
export var AdBreakOpportunities = list(n0, _ABOd, 0, () => AdBreakOpportunity);
export var HttpPackageConfigurations = list(n0, _HPC, 0, () => HttpPackageConfiguration);
export var CreateLiveSource = op(
  n0,
  _CLS,
  {
    [_h]: ["POST", "/sourceLocation/{SourceLocationName}/liveSource/{LiveSourceName}", 200],
  },
  () => CreateLiveSourceRequest,
  () => CreateLiveSourceResponse
);
export var CreateVodSource = op(
  n0,
  _CVS,
  {
    [_h]: ["POST", "/sourceLocation/{SourceLocationName}/vodSource/{VodSourceName}", 200],
  },
  () => CreateVodSourceRequest,
  () => CreateVodSourceResponse
);
export var DescribeLiveSource = op(
  n0,
  _DLSe,
  {
    [_h]: ["GET", "/sourceLocation/{SourceLocationName}/liveSource/{LiveSourceName}", 200],
  },
  () => DescribeLiveSourceRequest,
  () => DescribeLiveSourceResponse
);
export var DescribeVodSource = op(
  n0,
  _DVSe,
  {
    [_h]: ["GET", "/sourceLocation/{SourceLocationName}/vodSource/{VodSourceName}", 200],
  },
  () => DescribeVodSourceRequest,
  () => DescribeVodSourceResponse
);
export var ListLiveSources = op(
  n0,
  _LLS,
  {
    [_h]: ["GET", "/sourceLocation/{SourceLocationName}/liveSources", 200],
  },
  () => ListLiveSourcesRequest,
  () => ListLiveSourcesResponse
);
export var ListVodSources = op(
  n0,
  _LVS,
  {
    [_h]: ["GET", "/sourceLocation/{SourceLocationName}/vodSources", 200],
  },
  () => ListVodSourcesRequest,
  () => ListVodSourcesResponse
);
export var UpdateLiveSource = op(
  n0,
  _ULS,
  {
    [_h]: ["PUT", "/sourceLocation/{SourceLocationName}/liveSource/{LiveSourceName}", 200],
  },
  () => UpdateLiveSourceRequest,
  () => UpdateLiveSourceResponse
);
export var UpdateVodSource = op(
  n0,
  _UVS,
  {
    [_h]: ["PUT", "/sourceLocation/{SourceLocationName}/vodSource/{VodSourceName}", 200],
  },
  () => UpdateVodSourceRequest,
  () => UpdateVodSourceResponse
);
