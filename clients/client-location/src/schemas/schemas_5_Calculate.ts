// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AF,
  _AT,
  _ATr,
  _C,
  _CMO,
  _CNa,
  _CR,
  _CRCMO,
  _CRM,
  _CRMR,
  _CRMRa,
  _CRMS,
  _CRR,
  _CRRa,
  _CRS,
  _CRTMO,
  _D,
  _Di,
  _DN,
  _DPe,
  _DPep,
  _DPes,
  _DPest,
  _DS,
  _DSu,
  _DT,
  _DU,
  _E,
  _EC,
  _en,
  _EP,
  _G,
  _GO,
  _h,
  _He,
  _hQ,
  _ILG,
  _K,
  _k,
  _L,
  _Le,
  _Len,
  _LG,
  _LL,
  _LS,
  _M,
  _OF,
  _PL,
  _RBB,
  _RC,
  _RM,
  _RME,
  _RMEE,
  _RMR,
  _SDP,
  _SDPn,
  _SL,
  _SP,
  _Ste,
  _Step,
  _Su,
  _TD,
  _TM,
  _TMO,
  _To,
  _TW,
  _Un,
  _W,
  _Wi,
  _WP,
  _WPL,
  n0,
  Position,
  Timestamp,
} from "./schemas_0";
import { BoundingBox } from "./schemas_24_SearchPlace";
import { ApiKey } from "./schemas_25_Get";

/* eslint no-var: 0 */

export var CalculateRouteCarModeOptions = struct(n0, _CRCMO, 0, [_AF, _AT], [2, 2]);
export var CalculateRouteMatrixRequest = struct(
  n0,
  _CRMR,
  0,
  [_CNa, _DPe, _DPes, _TM, _DT, _DN, _DU, _CMO, _TMO, _K],
  [
    [0, 1],
    [() => PositionList, 0],
    [() => PositionList, 0],
    0,
    [() => Timestamp, 0],
    2,
    0,
    () => CalculateRouteCarModeOptions,
    () => CalculateRouteTruckModeOptions,
    [
      () => ApiKey,
      {
        [_hQ]: _k,
      },
    ],
  ]
);
export var CalculateRouteMatrixResponse = struct(
  n0,
  _CRMRa,
  0,
  [_RM, _SDP, _SDPn, _Su],
  [() => RouteMatrix, [() => PositionList, 0], [() => PositionList, 0], () => CalculateRouteMatrixSummary]
);
export var CalculateRouteMatrixSummary = struct(n0, _CRMS, 0, [_DS, _RC, _EC, _DU], [0, 1, 1, 0]);
export var CalculateRouteRequest = struct(
  n0,
  _CRR,
  0,
  [_CNa, _DPep, _DPest, _WP, _TM, _DT, _DN, _DU, _ILG, _CMO, _TMO, _ATr, _OF, _K],
  [
    [0, 1],
    [() => Position, 0],
    [() => Position, 0],
    [() => WaypointPositionList, 0],
    0,
    [() => Timestamp, 0],
    2,
    0,
    2,
    () => CalculateRouteCarModeOptions,
    () => CalculateRouteTruckModeOptions,
    [() => Timestamp, 0],
    0,
    [
      () => ApiKey,
      {
        [_hQ]: _k,
      },
    ],
  ]
);
export var CalculateRouteResponse = struct(
  n0,
  _CRRa,
  0,
  [_L, _Su],
  [
    [() => LegList, 0],
    [() => CalculateRouteSummary, 0],
  ]
);
export var CalculateRouteSummary = struct(
  n0,
  _CRS,
  0,
  [_RBB, _DS, _D, _DSu, _DU],
  [[() => BoundingBox, 0], 0, 1, 1, 0]
);
export var CalculateRouteTruckModeOptions = struct(
  n0,
  _CRTMO,
  0,
  [_AF, _AT, _Di, _W],
  [2, 2, () => TruckDimensions, () => TruckWeight]
);
export var Leg = struct(
  n0,
  _Le,
  0,
  [_SP, _EP, _D, _DSu, _G, _Ste],
  [[() => Position, 0], [() => Position, 0], 1, 1, [() => LegGeometry, 0], [() => StepList, 0]]
);
export var LegGeometry = struct(n0, _LG, 0, [_LS], [[() => LineString, 0]]);
export var RouteMatrixEntry = struct(n0, _RME, 0, [_D, _DSu, _E], [1, 1, () => RouteMatrixEntryError]);
export var RouteMatrixEntryError = struct(n0, _RMEE, 0, [_C, _M], [0, 0]);
export var Step = struct(n0, _Step, 0, [_SP, _EP, _D, _DSu, _GO], [[() => Position, 0], [() => Position, 0], 1, 1, 1]);
export var TruckDimensions = struct(n0, _TD, 0, [_Len, _He, _Wi, _Un], [1, 1, 1, 0]);
export var TruckWeight = struct(n0, _TW, 0, [_To, _Un], [1, 0]);
export var LegList = list(n0, _LL, 0, [() => Leg, 0]);
export var LineString = list(n0, _LS, 0, [() => Position, 0]);
export var PositionList = list(n0, _PL, 0, [() => Position, 0]);
export var RouteMatrix = list(n0, _RM, 0, () => RouteMatrixRow);
export var RouteMatrixRow = list(n0, _RMR, 0, () => RouteMatrixEntry);
export var StepList = list(n0, _SL, 0, [() => Step, 0]);
export var WaypointPositionList = list(n0, _WPL, 0, [() => Position, 0]);
export var CalculateRoute = op(
  n0,
  _CR,
  {
    [_h]: ["POST", "/routes/v0/calculators/{CalculatorName}/calculate/route", 200],
    [_en]: ["routes."],
  },
  () => CalculateRouteRequest,
  () => CalculateRouteResponse
);
export var CalculateRouteMatrix = op(
  n0,
  _CRM,
  {
    [_h]: ["POST", "/routes/v0/calculators/{CalculatorName}/calculate/route-matrix", 200],
    [_en]: ["routes."],
  },
  () => CalculateRouteMatrixRequest,
  () => CalculateRouteMatrixResponse
);
