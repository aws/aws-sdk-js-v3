// smithy-typescript generated code
import { list, map, op, struct } from "@smithy/core/schema";

import {
  _CN,
  _DSe,
  _DU,
  _EI,
  _en,
  _ETv,
  _FBT,
  _FE,
  _FEL,
  _FEo,
  _FGE,
  _FGEDS,
  _FGER,
  _FGERo,
  _GI,
  _GP,
  _h,
  _IDIG,
  _MR,
  _ND,
  _NT,
  _P,
  _PM,
  _Sp,
  _SU,
  _THM,
  n0,
  Position,
  Timestamp,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ForecastedEvent = struct(
  n0,
  _FE,
  0,
  [_EI, _GI, _IDIG, _ND, _ETv, _FBT, _GP],
  [0, 0, 2, 1, 0, [() => Timestamp, 0], [() => PropertyMap, 0]]
);
export var ForecastGeofenceEventsDeviceState = struct(n0, _FGEDS, 0, [_P, _Sp], [[() => Position, 0], 1]);
export var ForecastGeofenceEventsRequest = struct(
  n0,
  _FGER,
  0,
  [_CN, _DSe, _THM, _DU, _SU, _NT, _MR],
  [[0, 1], [() => ForecastGeofenceEventsDeviceState, 0], 1, 0, 0, 0, 1]
);
export var ForecastGeofenceEventsResponse = struct(
  n0,
  _FGERo,
  0,
  [_FEo, _NT, _DU, _SU],
  [[() => ForecastedEventsList, 0], 0, 0, 0]
);
export var ForecastedEventsList = list(n0, _FEL, 0, [() => ForecastedEvent, 0]);
export var PropertyMap = map(n0, _PM, 8, 0, 0);
export var ForecastGeofenceEvents = op(
  n0,
  _FGE,
  {
    [_en]: ["geofencing."],
    [_h]: ["POST", "/geofencing/v0/collections/{CollectionName}/forecast-geofence-events", 200],
  },
  () => ForecastGeofenceEventsRequest,
  () => ForecastGeofenceEventsResponse
);
