// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CN, _DGC, _DGCR, _DGCRe, _en, _h, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteGeofenceCollectionRequest = struct(n0, _DGCR, 0, [_CN], [[0, 1]]);
export var DeleteGeofenceCollectionResponse = struct(n0, _DGCRe, 0, [], []);
export var DeleteGeofenceCollection = op(
  n0,
  _DGC,
  {
    [_h]: ["DELETE", "/geofencing/v0/collections/{CollectionName}", 200],
    [_en]: ["cp.geofencing."],
  },
  () => DeleteGeofenceCollectionRequest,
  () => DeleteGeofenceCollectionResponse
);
