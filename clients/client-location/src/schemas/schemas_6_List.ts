// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AKF,
  _CAon,
  _CN,
  _CNa,
  _CT,
  _De,
  _DS,
  _En,
  _en,
  _ET,
  _F,
  _h,
  _IN,
  _KN,
  _KS,
  _LGC,
  _LGCR,
  _LGCRE,
  _LGCREL,
  _LGCRi,
  _LK,
  _LKR,
  _LKRE,
  _LKREL,
  _LKRi,
  _LM,
  _LMR,
  _LMRE,
  _LMREL,
  _LMRi,
  _LPI,
  _LPIR,
  _LPIRE,
  _LPIREL,
  _LPIRi,
  _LRC,
  _LRCR,
  _LRCRE,
  _LRCREL,
  _LRCRi,
  _LT,
  _LTC,
  _LTCR,
  _LTCRi,
  _LTR,
  _LTRE,
  _LTREL,
  _LTRi,
  _MN,
  _MR,
  _NT,
  _PP,
  _PPDS,
  _Re,
  _TN,
  _UT,
  n0,
  Timestamp,
} from "./schemas_0";
import { ApiKeyRestrictions } from "./schemas_3_Key";

/* eslint no-var: 0 */

export var ApiKeyFilter = struct(n0, _AKF, 0, [_KS], [0]);
export var ListGeofenceCollectionsRequest = struct(n0, _LGCR, 0, [_MR, _NT], [1, 0]);
export var ListGeofenceCollectionsResponse = struct(
  n0,
  _LGCRi,
  0,
  [_En, _NT],
  [[() => ListGeofenceCollectionsResponseEntryList, 0], 0]
);
export var ListGeofenceCollectionsResponseEntry = struct(
  n0,
  _LGCRE,
  0,
  [_CN, _De, _PP, _PPDS, _CT, _UT],
  [0, 0, 0, 0, [() => Timestamp, 0], [() => Timestamp, 0]]
);
export var ListKeysRequest = struct(n0, _LKR, 0, [_MR, _NT, _F], [1, 0, () => ApiKeyFilter]);
export var ListKeysResponse = struct(n0, _LKRi, 0, [_En, _NT], [[() => ListKeysResponseEntryList, 0], 0]);
export var ListKeysResponseEntry = struct(
  n0,
  _LKRE,
  0,
  [_KN, _ET, _De, _Re, _CT, _UT],
  [0, [() => Timestamp, 0], 0, [() => ApiKeyRestrictions, 0], [() => Timestamp, 0], [() => Timestamp, 0]]
);
export var ListMapsRequest = struct(n0, _LMR, 0, [_MR, _NT], [1, 0]);
export var ListMapsResponse = struct(n0, _LMRi, 0, [_En, _NT], [[() => ListMapsResponseEntryList, 0], 0]);
export var ListMapsResponseEntry = struct(
  n0,
  _LMRE,
  0,
  [_MN, _De, _DS, _PP, _CT, _UT],
  [0, 0, 0, 0, [() => Timestamp, 0], [() => Timestamp, 0]]
);
export var ListPlaceIndexesRequest = struct(n0, _LPIR, 0, [_MR, _NT], [1, 0]);
export var ListPlaceIndexesResponse = struct(
  n0,
  _LPIRi,
  0,
  [_En, _NT],
  [[() => ListPlaceIndexesResponseEntryList, 0], 0]
);
export var ListPlaceIndexesResponseEntry = struct(
  n0,
  _LPIRE,
  0,
  [_IN, _De, _DS, _PP, _CT, _UT],
  [0, 0, 0, 0, [() => Timestamp, 0], [() => Timestamp, 0]]
);
export var ListRouteCalculatorsRequest = struct(n0, _LRCR, 0, [_MR, _NT], [1, 0]);
export var ListRouteCalculatorsResponse = struct(
  n0,
  _LRCRi,
  0,
  [_En, _NT],
  [[() => ListRouteCalculatorsResponseEntryList, 0], 0]
);
export var ListRouteCalculatorsResponseEntry = struct(
  n0,
  _LRCRE,
  0,
  [_CNa, _De, _DS, _PP, _CT, _UT],
  [0, 0, 0, 0, [() => Timestamp, 0], [() => Timestamp, 0]]
);
export var ListTrackerConsumersRequest = struct(n0, _LTCR, 0, [_TN, _MR, _NT], [[0, 1], 1, 0]);
export var ListTrackerConsumersResponse = struct(n0, _LTCRi, 0, [_CAon, _NT], [64 | 0, 0]);
export var ListTrackersRequest = struct(n0, _LTR, 0, [_MR, _NT], [1, 0]);
export var ListTrackersResponse = struct(n0, _LTRi, 0, [_En, _NT], [[() => ListTrackersResponseEntryList, 0], 0]);
export var ListTrackersResponseEntry = struct(
  n0,
  _LTRE,
  0,
  [_TN, _De, _PP, _PPDS, _CT, _UT],
  [0, 0, 0, 0, [() => Timestamp, 0], [() => Timestamp, 0]]
);
export var ArnList = 64 | 0;

export var ListGeofenceCollectionsResponseEntryList = list(n0, _LGCREL, 0, [
  () => ListGeofenceCollectionsResponseEntry,
  0,
]);
export var ListKeysResponseEntryList = list(n0, _LKREL, 0, [() => ListKeysResponseEntry, 0]);
export var ListMapsResponseEntryList = list(n0, _LMREL, 0, [() => ListMapsResponseEntry, 0]);
export var ListPlaceIndexesResponseEntryList = list(n0, _LPIREL, 0, [() => ListPlaceIndexesResponseEntry, 0]);
export var ListRouteCalculatorsResponseEntryList = list(n0, _LRCREL, 0, [() => ListRouteCalculatorsResponseEntry, 0]);
export var ListTrackersResponseEntryList = list(n0, _LTREL, 0, [() => ListTrackersResponseEntry, 0]);
export var ListGeofenceCollections = op(
  n0,
  _LGC,
  {
    [_en]: ["cp.geofencing."],
    [_h]: ["POST", "/geofencing/v0/list-collections", 200],
  },
  () => ListGeofenceCollectionsRequest,
  () => ListGeofenceCollectionsResponse
);
export var ListKeys = op(
  n0,
  _LK,
  {
    [_en]: ["cp.metadata."],
    [_h]: ["POST", "/metadata/v0/list-keys", 200],
  },
  () => ListKeysRequest,
  () => ListKeysResponse
);
export var ListMaps = op(
  n0,
  _LM,
  {
    [_h]: ["POST", "/maps/v0/list-maps", 200],
    [_en]: ["cp.maps."],
  },
  () => ListMapsRequest,
  () => ListMapsResponse
);
export var ListPlaceIndexes = op(
  n0,
  _LPI,
  {
    [_h]: ["POST", "/places/v0/list-indexes", 200],
    [_en]: ["cp.places."],
  },
  () => ListPlaceIndexesRequest,
  () => ListPlaceIndexesResponse
);
export var ListRouteCalculators = op(
  n0,
  _LRC,
  {
    [_h]: ["POST", "/routes/v0/list-calculators", 200],
    [_en]: ["cp.routes."],
  },
  () => ListRouteCalculatorsRequest,
  () => ListRouteCalculatorsResponse
);
export var ListTrackerConsumers = op(
  n0,
  _LTC,
  {
    [_en]: ["cp.tracking."],
    [_h]: ["POST", "/tracking/v0/trackers/{TrackerName}/list-consumers", 200],
  },
  () => ListTrackerConsumersRequest,
  () => ListTrackerConsumersResponse
);
export var ListTrackers = op(
  n0,
  _LT,
  {
    [_en]: ["cp.tracking."],
    [_h]: ["POST", "/tracking/v0/list-trackers", 200],
  },
  () => ListTrackersRequest,
  () => ListTrackersResponse
);
