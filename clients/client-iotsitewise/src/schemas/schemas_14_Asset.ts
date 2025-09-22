// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _aA,
  _aCD,
  _ACM,
  _aCM,
  _aCMD,
  _aCMEI,
  _aCMI,
  _aCMN,
  _ACMP,
  _aCMP,
  _ACMPS,
  _aCMPs,
  _ACMS,
  _ACMs,
  _aCMS,
  _ACMSs,
  _aCMT,
  _aDc,
  _aDs,
  _aEI,
  _aH,
  _aIs,
  _al,
  _aLUD,
  _aMI,
  _aNs,
  _aP,
  _aPl,
  _APP,
  _APPS,
  _APs,
  _aPs,
  _APSs,
  _APss,
  _aPSs,
  _APSss,
  _aS,
  _ATSTAP,
  _ATSTAPR,
  _cM,
  _CMP,
  _cT,
  _d,
  _DACM,
  _DACMR,
  _DACMRe,
  _DAes,
  _DAPes,
  _DAPRescr,
  _DAPRescri,
  _DARescr,
  _DARescri,
  _dT,
  _DTS,
  _dTS,
  _DTSe,
  _DTSFAP,
  _DTSFAPR,
  _DTSR,
  _DTSRe,
  _DTSRes,
  _eI,
  _end,
  _eP,
  _fil,
  _hQ,
  _ht,
  _i,
  _LAPi,
  _LAPRis,
  _LAPRist,
  _LTS,
  _LTSR,
  _LTSRi,
  _mR,
  _n,
  _no,
  _nT,
  _pA,
  _pa,
  _pI,
  _PN,
  _pNS,
  _Pr,
  _pr,
  _pU,
  _st,
  _to,
  _tSA,
  _tSCD,
  _tSI,
  _tSLUD,
  _TSS,
  _TSSi,
  _tST,
  _ty,
  _u,
  _UAPp,
  _UAPRpd,
  n0,
  Unit,
} from "./schemas_0";
import { PropertyType } from "./schemas_1_Asset";
import { AssetHierarchies, AssetStatus } from "./schemas_18_Asset";
import { ActionDefinitions } from "./schemas_43_Describe";

/* eslint no-var: 0 */

export var AssetCompositeModel = struct(
  n0,
  _ACM,
  0,
  [_n, _d, _ty, _pr, _i, _eI],
  [0, 0, 0, () => AssetProperties, 0, 0]
);
export var AssetCompositeModelPathSegment = struct(n0, _ACMPS, 0, [_i, _n], [0, 0]);
export var AssetCompositeModelSummary = struct(
  n0,
  _ACMS,
  0,
  [_i, _eI, _n, _ty, _d, _pa],
  [0, 0, 0, 0, 0, () => AssetCompositeModelPath]
);
export var AssetProperty = struct(
  n0,
  _APs,
  0,
  [_i, _eI, _n, _al, _no, _dT, _dTS, _u, _pa],
  [0, 0, 0, 0, () => PropertyNotification, 0, 0, 0, () => AssetPropertyPath]
);
export var AssetPropertyPathSegment = struct(n0, _APPS, 0, [_i, _n], [0, 0]);
export var AssetPropertySummary = struct(
  n0,
  _APSs,
  0,
  [_i, _eI, _al, _u, _no, _aCMI, _pa],
  [0, 0, 0, 0, () => PropertyNotification, 0, () => AssetPropertyPath]
);
export var AssociateTimeSeriesToAssetPropertyRequest = struct(
  n0,
  _ATSTAPR,
  0,
  [_al, _aIs, _pI, _cT],
  [
    [
      0,
      {
        [_hQ]: _al,
      },
    ],
    [
      0,
      {
        [_hQ]: _aIs,
      },
    ],
    [
      0,
      {
        [_hQ]: _pI,
      },
    ],
    [0, 4],
  ]
);
export var CompositeModelProperty = struct(n0, _CMP, 0, [_n, _ty, _aP, _i, _eI], [0, 0, () => Property, 0, 0]);
export var DeleteTimeSeriesRequest = struct(
  n0,
  _DTSR,
  0,
  [_al, _aIs, _pI, _cT],
  [
    [
      0,
      {
        [_hQ]: _al,
      },
    ],
    [
      0,
      {
        [_hQ]: _aIs,
      },
    ],
    [
      0,
      {
        [_hQ]: _pI,
      },
    ],
    [0, 4],
  ]
);
export var DescribeAssetCompositeModelRequest = struct(
  n0,
  _DACMR,
  0,
  [_aIs, _aCMI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DescribeAssetCompositeModelResponse = struct(
  n0,
  _DACMRe,
  0,
  [_aIs, _aCMI, _aCMEI, _aCMP, _aCMN, _aCMD, _aCMT, _aCMPs, _aCMS, _aDc],
  [
    0,
    0,
    0,
    () => AssetCompositeModelPath,
    0,
    0,
    0,
    () => AssetProperties,
    () => AssetCompositeModelSummaries,
    () => ActionDefinitions,
  ]
);
export var DescribeAssetPropertyRequest = struct(
  n0,
  _DAPRescr,
  0,
  [_aIs, _pI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DescribeAssetPropertyResponse = struct(
  n0,
  _DAPRescri,
  0,
  [_aIs, _aEI, _aNs, _aMI, _aP, _cM],
  [0, 0, 0, 0, () => Property, () => CompositeModelProperty]
);
export var DescribeAssetRequest = struct(
  n0,
  _DARescr,
  0,
  [_aIs, _eP],
  [
    [0, 1],
    [
      2,
      {
        [_hQ]: _eP,
      },
    ],
  ]
);
export var DescribeAssetResponse = struct(
  n0,
  _DARescri,
  0,
  [_aIs, _aEI, _aA, _aNs, _aMI, _aPs, _aH, _aCM, _aCD, _aLUD, _aS, _aDs, _aCMS],
  [
    0,
    0,
    0,
    0,
    0,
    () => AssetProperties,
    () => AssetHierarchies,
    () => AssetCompositeModels,
    4,
    4,
    () => AssetStatus,
    0,
    () => AssetCompositeModelSummaries,
  ]
);
export var DescribeTimeSeriesRequest = struct(
  n0,
  _DTSRe,
  0,
  [_al, _aIs, _pI],
  [
    [
      0,
      {
        [_hQ]: _al,
      },
    ],
    [
      0,
      {
        [_hQ]: _aIs,
      },
    ],
    [
      0,
      {
        [_hQ]: _pI,
      },
    ],
  ]
);
export var DescribeTimeSeriesResponse = struct(
  n0,
  _DTSRes,
  0,
  [_aIs, _pI, _al, _tSI, _dT, _dTS, _tSCD, _tSLUD, _tSA],
  [0, 0, 0, 0, 0, 0, 4, 4, 0]
);
export var DisassociateTimeSeriesFromAssetPropertyRequest = struct(
  n0,
  _DTSFAPR,
  0,
  [_al, _aIs, _pI, _cT],
  [
    [
      0,
      {
        [_hQ]: _al,
      },
    ],
    [
      0,
      {
        [_hQ]: _aIs,
      },
    ],
    [
      0,
      {
        [_hQ]: _pI,
      },
    ],
    [0, 4],
  ]
);
export var ListAssetPropertiesRequest = struct(
  n0,
  _LAPRis,
  0,
  [_aIs, _nT, _mR, _fil],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _fil,
      },
    ],
  ]
);
export var ListAssetPropertiesResponse = struct(n0, _LAPRist, 0, [_aPSs, _nT], [() => AssetPropertySummaries, 0]);
export var ListTimeSeriesRequest = struct(
  n0,
  _LTSR,
  0,
  [_nT, _mR, _aIs, _aPl, _tST],
  [
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _aIs,
      },
    ],
    [
      0,
      {
        [_hQ]: _aPl,
      },
    ],
    [
      0,
      {
        [_hQ]: _tST,
      },
    ],
  ]
);
export var ListTimeSeriesResponse = struct(n0, _LTSRi, 0, [_TSS, _nT], [() => TimeSeriesSummaries, 0]);
export var Property = struct(
  n0,
  _Pr,
  0,
  [_i, _eI, _n, _al, _no, _dT, _u, _ty, _pa],
  [0, 0, 0, 0, () => PropertyNotification, 0, 0, () => PropertyType, () => AssetPropertyPath]
);
export var PropertyNotification = struct(n0, _PN, 0, [_to, _st], [0, 0]);
export var TimeSeriesSummary = struct(
  n0,
  _TSSi,
  0,
  [_aIs, _pI, _al, _tSI, _dT, _dTS, _tSCD, _tSLUD, _tSA],
  [0, 0, 0, 0, 0, 0, 4, 4, 0]
);
export var UpdateAssetPropertyRequest = struct(
  n0,
  _UAPRpd,
  0,
  [_aIs, _pI, _pA, _pNS, _cT, _pU],
  [[0, 1], [0, 1], 0, 0, [0, 4], 0]
);
export var AssetCompositeModelPath = list(n0, _ACMP, 0, () => AssetCompositeModelPathSegment);
export var AssetCompositeModels = list(n0, _ACMs, 0, () => AssetCompositeModel);
export var AssetCompositeModelSummaries = list(n0, _ACMSs, 0, () => AssetCompositeModelSummary);
export var AssetProperties = list(n0, _APss, 0, () => AssetProperty);
export var AssetPropertyPath = list(n0, _APP, 0, () => AssetPropertyPathSegment);
export var AssetPropertySummaries = list(n0, _APSss, 0, () => AssetPropertySummary);
export var TimeSeriesSummaries = list(n0, _TSS, 0, () => TimeSeriesSummary);
export var AssociateTimeSeriesToAssetProperty = op(
  n0,
  _ATSTAP,
  {
    [_ht]: ["POST", "/timeseries/associate", 200],
    [_end]: ["api."],
  },
  () => AssociateTimeSeriesToAssetPropertyRequest,
  () => Unit
);
export var DeleteTimeSeries = op(
  n0,
  _DTS,
  {
    [_ht]: ["POST", "/timeseries/delete", 200],
    [_end]: ["api."],
  },
  () => DeleteTimeSeriesRequest,
  () => Unit
);
export var DescribeAsset = op(
  n0,
  _DAes,
  {
    [_ht]: ["GET", "/assets/{assetId}", 200],
    [_end]: ["api."],
  },
  () => DescribeAssetRequest,
  () => DescribeAssetResponse
);
export var DescribeAssetCompositeModel = op(
  n0,
  _DACM,
  {
    [_ht]: ["GET", "/assets/{assetId}/composite-models/{assetCompositeModelId}", 200],
    [_end]: ["api."],
  },
  () => DescribeAssetCompositeModelRequest,
  () => DescribeAssetCompositeModelResponse
);
export var DescribeAssetProperty = op(
  n0,
  _DAPes,
  {
    [_ht]: ["GET", "/assets/{assetId}/properties/{propertyId}", 200],
    [_end]: ["api."],
  },
  () => DescribeAssetPropertyRequest,
  () => DescribeAssetPropertyResponse
);
export var DescribeTimeSeries = op(
  n0,
  _DTSe,
  {
    [_ht]: ["GET", "/timeseries/describe", 200],
    [_end]: ["api."],
  },
  () => DescribeTimeSeriesRequest,
  () => DescribeTimeSeriesResponse
);
export var DisassociateTimeSeriesFromAssetProperty = op(
  n0,
  _DTSFAP,
  {
    [_ht]: ["POST", "/timeseries/disassociate", 200],
    [_end]: ["api."],
  },
  () => DisassociateTimeSeriesFromAssetPropertyRequest,
  () => Unit
);
export var ListAssetProperties = op(
  n0,
  _LAPi,
  {
    [_ht]: ["GET", "/assets/{assetId}/properties", 200],
    [_end]: ["api."],
  },
  () => ListAssetPropertiesRequest,
  () => ListAssetPropertiesResponse
);
export var ListTimeSeries = op(
  n0,
  _LTS,
  {
    [_ht]: ["GET", "/timeseries", 200],
    [_end]: ["api."],
  },
  () => ListTimeSeriesRequest,
  () => ListTimeSeriesResponse
);
export var UpdateAssetProperty = op(
  n0,
  _UAPp,
  {
    [_ht]: ["PUT", "/assets/{assetId}/properties/{propertyId}", 200],
    [_end]: ["api."],
  },
  () => UpdateAssetPropertyRequest,
  () => Unit
);
