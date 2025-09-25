// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CHOO,
  _CHOOO,
  _CHOOOR,
  _CHOOORr,
  _CHOOR,
  _CHOORr,
  _Conf,
  _D,
  _Da,
  _Day,
  _DHOOe,
  _DHOOOe,
  _DHOOORe,
  _DHOOORes,
  _DHOORe,
  _DHOORes,
  _EF,
  _EHOO,
  _EHOOL,
  _End,
  _ETf,
  _ETnd,
  _FD,
  _fD,
  _GEHOO,
  _GEHOOR,
  _GEHOORe,
  _H,
  _h,
  _HOO,
  _HOOA,
  _HOOC,
  _HOOCL,
  _HOOI,
  _HOOO,
  _HOOOC,
  _HOOOCL,
  _HOOOI,
  _HOOOL,
  _HOOTS,
  _hQ,
  _II,
  _LHOOO,
  _LHOOOR,
  _LHOOORi,
  _LMR,
  _LMT,
  _Mi,
  _mR,
  _MRa,
  _N,
  _NT,
  _nT,
  _OH,
  _OHp,
  _OTS,
  _Star,
  _STtar,
  _Ta,
  _TD,
  _tD,
  _TZ,
  _UHOO,
  _UHOOO,
  _UHOOOR,
  _UHOOR,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateHoursOfOperationOverrideRequest = struct(
  n0,
  _CHOOOR,
  0,
  [_II, _HOOI, _N, _D, _Conf, _EF, _ETf],
  [[0, 1], [0, 1], 0, 0, () => HoursOfOperationOverrideConfigList, 0, 0]
);
export var CreateHoursOfOperationOverrideResponse = struct(n0, _CHOOORr, 0, [_HOOOI], [0]);
export var CreateHoursOfOperationRequest = struct(
  n0,
  _CHOOR,
  0,
  [_II, _N, _D, _TZ, _Conf, _Ta],
  [[0, 1], 0, 0, 0, () => HoursOfOperationConfigList, 128 | 0]
);
export var CreateHoursOfOperationResponse = struct(n0, _CHOORr, 0, [_HOOI, _HOOA], [0, 0]);
export var DescribeHoursOfOperationOverrideRequest = struct(
  n0,
  _DHOOORe,
  0,
  [_II, _HOOI, _HOOOI],
  [
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var DescribeHoursOfOperationOverrideResponse = struct(
  n0,
  _DHOOORes,
  0,
  [_HOOO],
  [() => HoursOfOperationOverride]
);
export var DescribeHoursOfOperationRequest = struct(
  n0,
  _DHOORe,
  0,
  [_II, _HOOI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DescribeHoursOfOperationResponse = struct(n0, _DHOORes, 0, [_HOO], [() => HoursOfOperation]);
export var EffectiveHoursOfOperations = struct(n0, _EHOO, 0, [_Da, _OH], [0, () => OperationalHours]);
export var GetEffectiveHoursOfOperationsRequest = struct(
  n0,
  _GEHOOR,
  0,
  [_II, _HOOI, _FD, _TD],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hQ]: _fD,
      },
    ],
    [
      0,
      {
        [_hQ]: _tD,
      },
    ],
  ]
);
export var GetEffectiveHoursOfOperationsResponse = struct(
  n0,
  _GEHOORe,
  0,
  [_EHOOL, _TZ],
  [() => EffectiveHoursOfOperationList, 0]
);
export var HoursOfOperation = struct(
  n0,
  _HOO,
  0,
  [_HOOI, _HOOA, _N, _D, _TZ, _Conf, _Ta, _LMT, _LMR],
  [0, 0, 0, 0, 0, () => HoursOfOperationConfigList, 128 | 0, 4, 0]
);
export var HoursOfOperationConfig = struct(
  n0,
  _HOOC,
  0,
  [_Day, _STtar, _ETnd],
  [0, () => HoursOfOperationTimeSlice, () => HoursOfOperationTimeSlice]
);
export var HoursOfOperationOverride = struct(
  n0,
  _HOOO,
  0,
  [_HOOOI, _HOOI, _HOOA, _N, _D, _Conf, _EF, _ETf],
  [0, 0, 0, 0, 0, () => HoursOfOperationOverrideConfigList, 0, 0]
);
export var HoursOfOperationOverrideConfig = struct(
  n0,
  _HOOOC,
  0,
  [_Day, _STtar, _ETnd],
  [0, () => OverrideTimeSlice, () => OverrideTimeSlice]
);
export var HoursOfOperationTimeSlice = struct(n0, _HOOTS, 0, [_H, _Mi], [1, 1]);
export var ListHoursOfOperationOverridesRequest = struct(
  n0,
  _LHOOOR,
  0,
  [_II, _HOOI, _NT, _MRa],
  [
    [0, 1],
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
  ]
);
export var ListHoursOfOperationOverridesResponse = struct(
  n0,
  _LHOOORi,
  0,
  [_NT, _HOOOL, _LMR, _LMT],
  [0, () => HoursOfOperationOverrideList, 0, 4]
);
export var OperationalHour = struct(n0, _OHp, 0, [_Star, _End], [() => OverrideTimeSlice, () => OverrideTimeSlice]);
export var OverrideTimeSlice = struct(n0, _OTS, 0, [_H, _Mi], [1, 1]);
export var UpdateHoursOfOperationOverrideRequest = struct(
  n0,
  _UHOOOR,
  0,
  [_II, _HOOI, _HOOOI, _N, _D, _Conf, _EF, _ETf],
  [[0, 1], [0, 1], [0, 1], 0, 0, () => HoursOfOperationOverrideConfigList, 0, 0]
);
export var UpdateHoursOfOperationRequest = struct(
  n0,
  _UHOOR,
  0,
  [_II, _HOOI, _N, _D, _TZ, _Conf],
  [[0, 1], [0, 1], 0, 0, 0, () => HoursOfOperationConfigList]
);
export var EffectiveHoursOfOperationList = list(n0, _EHOOL, 0, () => EffectiveHoursOfOperations);
export var HoursOfOperationConfigList = list(n0, _HOOCL, 0, () => HoursOfOperationConfig);
export var HoursOfOperationOverrideConfigList = list(n0, _HOOOCL, 0, () => HoursOfOperationOverrideConfig);
export var HoursOfOperationOverrideList = list(n0, _HOOOL, 0, () => HoursOfOperationOverride);
export var OperationalHours = list(n0, _OH, 0, () => OperationalHour);
export var CreateHoursOfOperation = op(
  n0,
  _CHOO,
  {
    [_h]: ["PUT", "/hours-of-operations/{InstanceId}", 200],
  },
  () => CreateHoursOfOperationRequest,
  () => CreateHoursOfOperationResponse
);
export var CreateHoursOfOperationOverride = op(
  n0,
  _CHOOO,
  {
    [_h]: ["PUT", "/hours-of-operations/{InstanceId}/{HoursOfOperationId}/overrides", 200],
  },
  () => CreateHoursOfOperationOverrideRequest,
  () => CreateHoursOfOperationOverrideResponse
);
export var DescribeHoursOfOperation = op(
  n0,
  _DHOOe,
  {
    [_h]: ["GET", "/hours-of-operations/{InstanceId}/{HoursOfOperationId}", 200],
  },
  () => DescribeHoursOfOperationRequest,
  () => DescribeHoursOfOperationResponse
);
export var DescribeHoursOfOperationOverride = op(
  n0,
  _DHOOOe,
  {
    [_h]: ["GET", "/hours-of-operations/{InstanceId}/{HoursOfOperationId}/overrides/{HoursOfOperationOverrideId}", 200],
  },
  () => DescribeHoursOfOperationOverrideRequest,
  () => DescribeHoursOfOperationOverrideResponse
);
export var GetEffectiveHoursOfOperations = op(
  n0,
  _GEHOO,
  {
    [_h]: ["GET", "/effective-hours-of-operations/{InstanceId}/{HoursOfOperationId}", 200],
  },
  () => GetEffectiveHoursOfOperationsRequest,
  () => GetEffectiveHoursOfOperationsResponse
);
export var ListHoursOfOperationOverrides = op(
  n0,
  _LHOOO,
  {
    [_h]: ["GET", "/hours-of-operations/{InstanceId}/{HoursOfOperationId}/overrides", 200],
  },
  () => ListHoursOfOperationOverridesRequest,
  () => ListHoursOfOperationOverridesResponse
);
export var UpdateHoursOfOperation = op(
  n0,
  _UHOO,
  {
    [_h]: ["POST", "/hours-of-operations/{InstanceId}/{HoursOfOperationId}", 200],
  },
  () => UpdateHoursOfOperationRequest,
  () => Unit
);
export var UpdateHoursOfOperationOverride = op(
  n0,
  _UHOOO,
  {
    [_h]: [
      "POST",
      "/hours-of-operations/{InstanceId}/{HoursOfOperationId}/overrides/{HoursOfOperationOverrideId}",
      200,
    ],
  },
  () => UpdateHoursOfOperationOverrideRequest,
  () => Unit
);
