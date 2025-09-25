// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CAo, _CN, _De, _en, _h, _PP, _PPDS, _UGC, _UGCR, _UGCRp, _UT, n0, Timestamp } from "./schemas_0";

/* eslint no-var: 0 */

export var UpdateGeofenceCollectionRequest = struct(n0, _UGCR, 0, [_CN, _PP, _PPDS, _De], [[0, 1], 0, 0, 0]);
export var UpdateGeofenceCollectionResponse = struct(n0, _UGCRp, 0, [_CN, _CAo, _UT], [0, 0, [() => Timestamp, 0]]);
export var UpdateGeofenceCollection = op(
  n0,
  _UGC,
  {
    [_h]: ["PATCH", "/geofencing/v0/collections/{CollectionName}", 200],
    [_en]: ["cp.geofencing."],
  },
  () => UpdateGeofenceCollectionRequest,
  () => UpdateGeofenceCollectionResponse
);
