// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _CAo,
  _CN,
  _CT,
  _De,
  _DGCe,
  _DGCRes,
  _DGCResc,
  _DTes,
  _DTRes,
  _DTResc,
  _EBE,
  _en,
  _GC,
  _h,
  _KKEGQ,
  _KKI,
  _PF,
  _PP,
  _PPDS,
  _TA,
  _Ta,
  _TN,
  _UT,
  n0,
  Timestamp,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeGeofenceCollectionRequest = struct(n0, _DGCRes, 0, [_CN], [[0, 1]]);
export var DescribeGeofenceCollectionResponse = struct(
  n0,
  _DGCResc,
  0,
  [_CN, _CAo, _De, _PP, _PPDS, _KKI, _Ta, _CT, _UT, _GC],
  [0, 0, 0, 0, 0, 0, 128 | 0, [() => Timestamp, 0], [() => Timestamp, 0], 1]
);
export var DescribeTrackerRequest = struct(n0, _DTRes, 0, [_TN], [[0, 1]]);
export var DescribeTrackerResponse = struct(
  n0,
  _DTResc,
  0,
  [_TN, _TA, _De, _PP, _PPDS, _Ta, _CT, _UT, _KKI, _PF, _EBE, _KKEGQ],
  [0, 0, 0, 0, 0, 128 | 0, [() => Timestamp, 0], [() => Timestamp, 0], 0, 0, 2, 2]
);
export var DescribeGeofenceCollection = op(
  n0,
  _DGCe,
  {
    [_h]: ["GET", "/geofencing/v0/collections/{CollectionName}", 200],
    [_en]: ["cp.geofencing."],
  },
  () => DescribeGeofenceCollectionRequest,
  () => DescribeGeofenceCollectionResponse
);
export var DescribeTracker = op(
  n0,
  _DTes,
  {
    [_h]: ["GET", "/tracking/v0/trackers/{TrackerName}", 200],
    [_en]: ["cp.tracking."],
  },
  () => DescribeTrackerRequest,
  () => DescribeTrackerResponse
);
