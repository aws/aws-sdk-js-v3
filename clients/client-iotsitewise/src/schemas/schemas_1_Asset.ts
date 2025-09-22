// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _aDc,
  _aMCMD,
  _aMCMEI,
  _aMCMI,
  _aMCMN,
  _aMCMP,
  _aMCMPs,
  _aMCMS,
  _aMCMT,
  _aMI,
  _AMP,
  _AMPP,
  _AMPPS,
  _AMPS,
  _AMPs,
  _aMPS,
  _AMPSs,
  _aMV,
  _At,
  _at,
  _CD,
  _cDo,
  _cL,
  _CR,
  _cR,
  _CRI,
  _DAMCMe,
  _DAMCMRes,
  _DAMCMResc,
  _dT,
  _dTS,
  _dV,
  _eI,
  _end,
  _EV,
  _EVx,
  _ex,
  _FC,
  _fC,
  _fil,
  _hIi,
  _hQ,
  _ht,
  _i,
  _iAMI,
  _iAMPI,
  _in,
  _IS,
  _iS,
  _ISn,
  _LAMP,
  _LAMPR,
  _LAMPRi,
  _M,
  _Me,
  _me,
  _met,
  _MPC,
  _MPCe,
  _mR,
  _MW,
  _n,
  _nT,
  _of,
  _pa,
  _pC,
  _pI,
  _pP,
  _PT,
  _st,
  _TPC,
  _Tr,
  _tr,
  _tu,
  _TW,
  _ty,
  _u,
  _v,
  _va,
  _VV,
  _w,
  n0,
} from "./schemas_0";
import { AssetModelCompositeModelPath, AssetModelCompositeModelSummaries } from "./schemas_30_Model";
import { ActionDefinitions } from "./schemas_43_Describe";

/* eslint no-var: 0 */

export var AssetModelProperty = struct(
  n0,
  _AMP,
  0,
  [_i, _eI, _n, _dT, _dTS, _u, _ty, _pa],
  [0, 0, 0, 0, 0, 0, () => PropertyType, () => AssetModelPropertyPath]
);
export var AssetModelPropertyPathSegment = struct(n0, _AMPPS, 0, [_i, _n], [0, 0]);
export var AssetModelPropertySummary = struct(
  n0,
  _AMPS,
  0,
  [_i, _eI, _n, _dT, _dTS, _u, _ty, _aMCMI, _pa, _iS],
  [0, 0, 0, 0, 0, 0, () => PropertyType, 0, () => AssetModelPropertyPath, () => InterfaceSummaries]
);
export var Attribute = struct(n0, _At, 0, [_dV], [0]);
export var CompositionDetails = struct(n0, _CD, 0, [_cR], [() => CompositionRelationship]);
export var CompositionRelationshipItem = struct(n0, _CRI, 0, [_i], [0]);
export var DescribeAssetModelCompositeModelRequest = struct(
  n0,
  _DAMCMRes,
  0,
  [_aMI, _aMCMI, _aMV],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hQ]: _aMV,
      },
    ],
  ]
);
export var DescribeAssetModelCompositeModelResponse = struct(
  n0,
  _DAMCMResc,
  0,
  [_aMI, _aMCMI, _aMCMEI, _aMCMPs, _aMCMN, _aMCMD, _aMCMT, _aMCMP, _cDo, _aMCMS, _aDc],
  [
    0,
    0,
    0,
    () => AssetModelCompositeModelPath,
    0,
    0,
    0,
    () => AssetModelProperties,
    () => CompositionDetails,
    () => AssetModelCompositeModelSummaries,
    () => ActionDefinitions,
  ]
);
export var ExpressionVariable = struct(n0, _EV, 0, [_n, _v], [0, () => VariableValue]);
export var ForwardingConfig = struct(n0, _FC, 0, [_st], [0]);
export var InterfaceSummary = struct(n0, _IS, 0, [_iAMI, _iAMPI], [0, 0]);
export var ListAssetModelPropertiesRequest = struct(
  n0,
  _LAMPR,
  0,
  [_aMI, _nT, _mR, _fil, _aMV],
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
    [
      0,
      {
        [_hQ]: _aMV,
      },
    ],
  ]
);
export var ListAssetModelPropertiesResponse = struct(
  n0,
  _LAMPRi,
  0,
  [_aMPS, _nT],
  [() => AssetModelPropertySummaries, 0]
);
export var Measurement = struct(n0, _M, 0, [_pC], [() => MeasurementProcessingConfig]);
export var MeasurementProcessingConfig = struct(n0, _MPC, 0, [_fC], [() => ForwardingConfig]);
export var Metric = struct(
  n0,
  _Me,
  0,
  [_ex, _va, _w, _pC],
  [0, () => ExpressionVariables, () => MetricWindow, () => MetricProcessingConfig]
);
export var MetricProcessingConfig = struct(n0, _MPCe, 0, [_cL], [0]);
export var MetricWindow = struct(n0, _MW, 0, [_tu], [() => TumblingWindow]);
export var PropertyType = struct(
  n0,
  _PT,
  0,
  [_at, _me, _tr, _met],
  [() => Attribute, () => Measurement, () => Transform, () => Metric]
);
export var Transform = struct(
  n0,
  _Tr,
  0,
  [_ex, _va, _pC],
  [0, () => ExpressionVariables, () => TransformProcessingConfig]
);
export var TransformProcessingConfig = struct(n0, _TPC, 0, [_cL, _fC], [0, () => ForwardingConfig]);
export var TumblingWindow = struct(n0, _TW, 0, [_in, _of], [0, 0]);
export var VariableValue = struct(n0, _VV, 0, [_pI, _hIi, _pP], [0, 0, () => AssetModelPropertyPath]);
export var AssetModelProperties = list(n0, _AMPs, 0, () => AssetModelProperty);
export var AssetModelPropertyPath = list(n0, _AMPP, 0, () => AssetModelPropertyPathSegment);
export var AssetModelPropertySummaries = list(n0, _AMPSs, 0, () => AssetModelPropertySummary);
export var CompositionRelationship = list(n0, _CR, 0, () => CompositionRelationshipItem);
export var ExpressionVariables = list(n0, _EVx, 0, () => ExpressionVariable);
export var InterfaceSummaries = list(n0, _ISn, 0, () => InterfaceSummary);
export var DescribeAssetModelCompositeModel = op(
  n0,
  _DAMCMe,
  {
    [_ht]: ["GET", "/asset-models/{assetModelId}/composite-models/{assetModelCompositeModelId}", 200],
    [_end]: ["api."],
  },
  () => DescribeAssetModelCompositeModelRequest,
  () => DescribeAssetModelCompositeModelResponse
);
export var ListAssetModelProperties = op(
  n0,
  _LAMP,
  {
    [_ht]: ["GET", "/asset-models/{assetModelId}/properties", 200],
    [_end]: ["api."],
  },
  () => ListAssetModelPropertiesRequest,
  () => ListAssetModelPropertiesResponse
);
