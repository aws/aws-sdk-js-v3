// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _BDDPH,
  _BDDPHE,
  _BDDPHEL,
  _BDDPHR,
  _BDDPHRa,
  _BDG,
  _BDGE,
  _BDGEL,
  _BDGR,
  _BDGRa,
  _BIE,
  _C,
  _CN,
  _DI,
  _DIe,
  _E,
  _en,
  _Er,
  _GI,
  _GIe,
  _h,
  _M,
  _TN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var BatchDeleteDevicePositionHistoryError = struct(n0, _BDDPHE, 0, [_DI, _E], [0, () => BatchItemError]);
export var BatchDeleteDevicePositionHistoryRequest = struct(n0, _BDDPHR, 0, [_TN, _DIe], [[0, 1], 64 | 0]);
export var BatchDeleteDevicePositionHistoryResponse = struct(
  n0,
  _BDDPHRa,
  0,
  [_Er],
  [() => BatchDeleteDevicePositionHistoryErrorList]
);
export var BatchDeleteGeofenceError = struct(n0, _BDGE, 0, [_GI, _E], [0, () => BatchItemError]);
export var BatchDeleteGeofenceRequest = struct(n0, _BDGR, 0, [_CN, _GIe], [[0, 1], 64 | 0]);
export var BatchDeleteGeofenceResponse = struct(n0, _BDGRa, 0, [_Er], [() => BatchDeleteGeofenceErrorList]);
export var BatchItemError = struct(n0, _BIE, 0, [_C, _M], [0, 0]);
export var BatchDeleteDevicePositionHistoryErrorList = list(
  n0,
  _BDDPHEL,
  0,
  () => BatchDeleteDevicePositionHistoryError
);
export var BatchDeleteGeofenceErrorList = list(n0, _BDGEL, 0, () => BatchDeleteGeofenceError);
export var DeviceIdsList = 64 | 0;

export var IdList = 64 | 0;

export var BatchDeleteDevicePositionHistory = op(
  n0,
  _BDDPH,
  {
    [_h]: ["POST", "/tracking/v0/trackers/{TrackerName}/delete-positions", 200],
    [_en]: ["tracking."],
  },
  () => BatchDeleteDevicePositionHistoryRequest,
  () => BatchDeleteDevicePositionHistoryResponse
);
export var BatchDeleteGeofence = op(
  n0,
  _BDG,
  {
    [_h]: ["POST", "/geofencing/v0/collections/{CollectionName}/delete-geofences", 200],
    [_en]: ["geofencing."],
  },
  () => BatchDeleteGeofenceRequest,
  () => BatchDeleteGeofenceResponse
);
