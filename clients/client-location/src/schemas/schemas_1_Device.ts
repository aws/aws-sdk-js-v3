// smithy-typescript generated code
import { list, map, op, sim, struct } from "@smithy/core/schema";

import {
  _A,
  _BEG,
  _BEGa,
  _BEGE,
  _BEGEL,
  _BEGR,
  _BEGRa,
  _BGDP,
  _BGDPE,
  _BGDPEL,
  _BGDPR,
  _BGDPRa,
  _BPG,
  _BPGE,
  _BPGEL,
  _BPGR,
  _BPGRa,
  _BPGRE,
  _BPGREL,
  _BPGS,
  _BPGSL,
  _BUDP,
  _BUDPE,
  _BUDPEL,
  _BUDPR,
  _BUDPRa,
  _Ce,
  _CI,
  _Ci,
  _CN,
  _CS,
  _CT,
  _DD,
  _DI,
  _DIe,
  _DP,
  _DPev,
  _DPL,
  _DPU,
  _DPUe,
  _DPUL,
  _DSe,
  _DU,
  _E,
  _Ea,
  _En,
  _en,
  _Er,
  _ETE,
  _FG,
  _G,
  _GDP,
  _GDPH,
  _GDPHR,
  _GDPHRe,
  _GDPR,
  _GDPRe,
  _Ge,
  _GG,
  _GGe,
  _GGR,
  _GGRe,
  _GI,
  _GP,
  _H,
  _h,
  _IAp,
  _IS,
  _LCD,
  _LCDL,
  _LDP,
  _LDPR,
  _LDPRE,
  _LDPREL,
  _LDPRi,
  _LGi,
  _LGR,
  _LGRE,
  _LGREL,
  _LGRi,
  _LI,
  _LLI,
  _LNM,
  _LNML,
  _LR,
  _LRi,
  _MAa,
  _Mc,
  _MLR,
  _Mn,
  _MP,
  _MR,
  _NC,
  _NM,
  _NT,
  _P,
  _PA,
  _Pc,
  _PD,
  _PGR,
  _PGRu,
  _PGu,
  _Po,
  _PPM,
  _PPo,
  _R,
  _Rs,
  _Rsr,
  _Rss,
  _RT,
  _S,
  _SD,
  _ST,
  _St,
  _STI,
  _Tac,
  _TAi,
  _TFG,
  _TN,
  _U,
  _UT,
  _VDP,
  _VDPR,
  _VDPRe,
  _WFAP,
  _WFAPi,
  _WFAPL,
  n0,
  Position,
  Timestamp,
} from "./schemas_0";
import { BatchItemError } from "./schemas_7_Batch";
import { PropertyMap } from "./schemas_13_Geofence";

/* eslint no-var: 0 */

export var Base64EncodedGeobuf = sim(n0, _BEG, 21, 8);
export var SensitiveDouble = sim(n0, _SD, 1, 8);
export var BatchEvaluateGeofencesError = struct(
  n0,
  _BEGE,
  0,
  [_DI, _ST, _E],
  [0, [() => Timestamp, 0], () => BatchItemError]
);
export var BatchEvaluateGeofencesRequest = struct(
  n0,
  _BEGR,
  0,
  [_CN, _DPU],
  [
    [0, 1],
    [() => DevicePositionUpdateList, 0],
  ]
);
export var BatchEvaluateGeofencesResponse = struct(n0, _BEGRa, 0, [_Er], [[() => BatchEvaluateGeofencesErrorList, 0]]);
export var BatchGetDevicePositionError = struct(n0, _BGDPE, 0, [_DI, _E], [0, () => BatchItemError]);
export var BatchGetDevicePositionRequest = struct(n0, _BGDPR, 0, [_TN, _DIe], [[0, 1], 64 | 0]);
export var BatchGetDevicePositionResponse = struct(
  n0,
  _BGDPRa,
  0,
  [_Er, _DP],
  [() => BatchGetDevicePositionErrorList, [() => DevicePositionList, 0]]
);
export var BatchPutGeofenceError = struct(n0, _BPGE, 0, [_GI, _E], [0, () => BatchItemError]);
export var BatchPutGeofenceRequest = struct(
  n0,
  _BPGR,
  0,
  [_CN, _En],
  [
    [0, 1],
    [() => BatchPutGeofenceRequestEntryList, 0],
  ]
);
export var BatchPutGeofenceRequestEntry = struct(
  n0,
  _BPGRE,
  0,
  [_GI, _G, _GP],
  [0, [() => GeofenceGeometry, 0], [() => PropertyMap, 0]]
);
export var BatchPutGeofenceResponse = struct(
  n0,
  _BPGRa,
  0,
  [_S, _Er],
  [[() => BatchPutGeofenceSuccessList, 0], () => BatchPutGeofenceErrorList]
);
export var BatchPutGeofenceSuccess = struct(
  n0,
  _BPGS,
  0,
  [_GI, _CT, _UT],
  [0, [() => Timestamp, 0], [() => Timestamp, 0]]
);
export var BatchUpdateDevicePositionError = struct(
  n0,
  _BUDPE,
  0,
  [_DI, _ST, _E],
  [0, [() => Timestamp, 0], () => BatchItemError]
);
export var BatchUpdateDevicePositionRequest = struct(
  n0,
  _BUDPR,
  0,
  [_TN, _U],
  [
    [0, 1],
    [() => DevicePositionUpdateList, 0],
  ]
);
export var BatchUpdateDevicePositionResponse = struct(
  n0,
  _BUDPRa,
  0,
  [_Er],
  [[() => BatchUpdateDevicePositionErrorList, 0]]
);
export var CellSignals = struct(n0, _CS, 0, [_LCD], [() => LteCellDetailsList]);
export var Circle = struct(
  n0,
  _Ci,
  8,
  [_Ce, _R],
  [
    [() => Position, 0],
    [() => SensitiveDouble, 0],
  ]
);
export var DevicePosition = struct(
  n0,
  _DPev,
  0,
  [_DI, _ST, _RT, _P, _A, _PPo],
  [
    0,
    [() => Timestamp, 0],
    [() => Timestamp, 0],
    [() => Position, 0],
    [() => PositionalAccuracy, 0],
    [() => PositionPropertyMap, 0],
  ]
);
export var DevicePositionUpdate = struct(
  n0,
  _DPUe,
  0,
  [_DI, _ST, _P, _A, _PPo],
  [0, [() => Timestamp, 0], [() => Position, 0], [() => PositionalAccuracy, 0], [() => PositionPropertyMap, 0]]
);
export var DeviceState = struct(
  n0,
  _DSe,
  0,
  [_DI, _ST, _P, _A, _IAp, _WFAP, _CS],
  [
    0,
    [() => Timestamp, 0],
    [() => Position, 0],
    [() => PositionalAccuracy, 0],
    0,
    () => WiFiAccessPointList,
    () => CellSignals,
  ]
);
export var GeofenceGeometry = struct(
  n0,
  _GG,
  0,
  [_Po, _Ci, _Ge, _MP],
  [
    [() => LinearRings, 0],
    [() => Circle, 0],
    [() => Base64EncodedGeobuf, 0],
    [() => MultiLinearRings, 0],
  ]
);
export var GetDevicePositionHistoryRequest = struct(
  n0,
  _GDPHR,
  0,
  [_TN, _DI, _NT, _STI, _ETE, _MR],
  [[0, 1], [0, 1], 0, [() => Timestamp, 0], [() => Timestamp, 0], 1]
);
export var GetDevicePositionHistoryResponse = struct(n0, _GDPHRe, 0, [_DP, _NT], [[() => DevicePositionList, 0], 0]);
export var GetDevicePositionRequest = struct(
  n0,
  _GDPR,
  0,
  [_TN, _DI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetDevicePositionResponse = struct(
  n0,
  _GDPRe,
  0,
  [_DI, _ST, _RT, _P, _A, _PPo],
  [
    0,
    [() => Timestamp, 0],
    [() => Timestamp, 0],
    [() => Position, 0],
    [() => PositionalAccuracy, 0],
    [() => PositionPropertyMap, 0],
  ]
);
export var GetGeofenceRequest = struct(
  n0,
  _GGR,
  0,
  [_CN, _GI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetGeofenceResponse = struct(
  n0,
  _GGRe,
  0,
  [_GI, _G, _St, _CT, _UT, _GP],
  [0, [() => GeofenceGeometry, 0], 0, [() => Timestamp, 0], [() => Timestamp, 0], [() => PropertyMap, 0]]
);
export var InferredState = struct(
  n0,
  _IS,
  0,
  [_P, _A, _DD, _PD],
  [[() => Position, 0], [() => PositionalAccuracy, 0], 1, 2]
);
export var ListDevicePositionsRequest = struct(
  n0,
  _LDPR,
  0,
  [_TN, _MR, _NT, _FG],
  [[0, 1], 1, 0, [() => TrackingFilterGeometry, 0]]
);
export var ListDevicePositionsResponse = struct(
  n0,
  _LDPRi,
  0,
  [_En, _NT],
  [[() => ListDevicePositionsResponseEntryList, 0], 0]
);
export var ListDevicePositionsResponseEntry = struct(
  n0,
  _LDPRE,
  0,
  [_DI, _ST, _P, _A, _PPo],
  [0, [() => Timestamp, 0], [() => Position, 0], [() => PositionalAccuracy, 0], [() => PositionPropertyMap, 0]]
);
export var ListGeofenceResponseEntry = struct(
  n0,
  _LGRE,
  0,
  [_GI, _G, _St, _CT, _UT, _GP],
  [0, [() => GeofenceGeometry, 0], 0, [() => Timestamp, 0], [() => Timestamp, 0], [() => PropertyMap, 0]]
);
export var ListGeofencesRequest = struct(n0, _LGR, 0, [_CN, _NT, _MR], [[0, 1], 0, 1]);
export var ListGeofencesResponse = struct(n0, _LGRi, 0, [_En, _NT], [[() => ListGeofenceResponseEntryList, 0], 0]);
export var LteCellDetails = struct(
  n0,
  _LCD,
  0,
  [_CI, _Mc, _Mn, _LI, _NM, _TAi, _NC, _Rs, _Rsr, _Tac],
  [1, 1, 1, () => LteLocalId, () => LteNetworkMeasurementsList, 1, 2, 1, 1, 1]
);
export var LteLocalId = struct(n0, _LLI, 0, [_Ea, _Pc], [1, 1]);
export var LteNetworkMeasurements = struct(n0, _LNM, 0, [_Ea, _CI, _Pc, _Rs, _Rsr], [1, 1, 1, 1, 1]);
export var PositionalAccuracy = struct(n0, _PA, 0, [_H], [[() => SensitiveDouble, 0]]);
export var PutGeofenceRequest = struct(
  n0,
  _PGR,
  0,
  [_CN, _GI, _G, _GP],
  [
    [0, 1],
    [0, 1],
    [() => GeofenceGeometry, 0],
    [() => PropertyMap, 0],
  ]
);
export var PutGeofenceResponse = struct(n0, _PGRu, 0, [_GI, _CT, _UT], [0, [() => Timestamp, 0], [() => Timestamp, 0]]);
export var TrackingFilterGeometry = struct(n0, _TFG, 0, [_Po], [[() => LinearRings, 0]]);
export var VerifyDevicePositionRequest = struct(n0, _VDPR, 0, [_TN, _DSe, _DU], [[0, 1], [() => DeviceState, 0], 0]);
export var VerifyDevicePositionResponse = struct(
  n0,
  _VDPRe,
  0,
  [_IS, _DI, _ST, _RT, _DU],
  [[() => InferredState, 0], 0, [() => Timestamp, 0], [() => Timestamp, 0], 0]
);
export var WiFiAccessPoint = struct(n0, _WFAPi, 0, [_MAa, _Rss], [0, 1]);
export var BatchEvaluateGeofencesErrorList = list(n0, _BEGEL, 0, [() => BatchEvaluateGeofencesError, 0]);
export var BatchGetDevicePositionErrorList = list(n0, _BGDPEL, 0, () => BatchGetDevicePositionError);
export var BatchPutGeofenceErrorList = list(n0, _BPGEL, 0, () => BatchPutGeofenceError);
export var BatchPutGeofenceRequestEntryList = list(n0, _BPGREL, 0, [() => BatchPutGeofenceRequestEntry, 0]);
export var BatchPutGeofenceSuccessList = list(n0, _BPGSL, 0, [() => BatchPutGeofenceSuccess, 0]);
export var BatchUpdateDevicePositionErrorList = list(n0, _BUDPEL, 0, [() => BatchUpdateDevicePositionError, 0]);
export var DevicePositionList = list(n0, _DPL, 0, [() => DevicePosition, 0]);
export var DevicePositionUpdateList = list(n0, _DPUL, 0, [() => DevicePositionUpdate, 0]);
export var LinearRing = list(n0, _LR, 0, [() => Position, 0]);
export var LinearRings = list(n0, _LRi, 0, [() => LinearRing, 0]);
export var ListDevicePositionsResponseEntryList = list(n0, _LDPREL, 0, [() => ListDevicePositionsResponseEntry, 0]);
export var ListGeofenceResponseEntryList = list(n0, _LGREL, 0, [() => ListGeofenceResponseEntry, 0]);
export var LteCellDetailsList = list(n0, _LCDL, 0, () => LteCellDetails);
export var LteNetworkMeasurementsList = list(n0, _LNML, 0, () => LteNetworkMeasurements);
export var MultiLinearRings = list(n0, _MLR, 0, [() => LinearRings, 0]);
export var WiFiAccessPointList = list(n0, _WFAPL, 0, () => WiFiAccessPoint);
export var PositionPropertyMap = map(n0, _PPM, 8, 0, 0);
export var BatchEvaluateGeofences = op(
  n0,
  _BEGa,
  {
    [_h]: ["POST", "/geofencing/v0/collections/{CollectionName}/positions", 200],
    [_en]: ["geofencing."],
  },
  () => BatchEvaluateGeofencesRequest,
  () => BatchEvaluateGeofencesResponse
);
export var BatchGetDevicePosition = op(
  n0,
  _BGDP,
  {
    [_h]: ["POST", "/tracking/v0/trackers/{TrackerName}/get-positions", 200],
    [_en]: ["tracking."],
  },
  () => BatchGetDevicePositionRequest,
  () => BatchGetDevicePositionResponse
);
export var BatchPutGeofence = op(
  n0,
  _BPG,
  {
    [_h]: ["POST", "/geofencing/v0/collections/{CollectionName}/put-geofences", 200],
    [_en]: ["geofencing."],
  },
  () => BatchPutGeofenceRequest,
  () => BatchPutGeofenceResponse
);
export var BatchUpdateDevicePosition = op(
  n0,
  _BUDP,
  {
    [_h]: ["POST", "/tracking/v0/trackers/{TrackerName}/positions", 200],
    [_en]: ["tracking."],
  },
  () => BatchUpdateDevicePositionRequest,
  () => BatchUpdateDevicePositionResponse
);
export var GetDevicePosition = op(
  n0,
  _GDP,
  {
    [_h]: ["GET", "/tracking/v0/trackers/{TrackerName}/devices/{DeviceId}/positions/latest", 200],
    [_en]: ["tracking."],
  },
  () => GetDevicePositionRequest,
  () => GetDevicePositionResponse
);
export var GetDevicePositionHistory = op(
  n0,
  _GDPH,
  {
    [_en]: ["tracking."],
    [_h]: ["POST", "/tracking/v0/trackers/{TrackerName}/devices/{DeviceId}/list-positions", 200],
  },
  () => GetDevicePositionHistoryRequest,
  () => GetDevicePositionHistoryResponse
);
export var GetGeofence = op(
  n0,
  _GGe,
  {
    [_h]: ["GET", "/geofencing/v0/collections/{CollectionName}/geofences/{GeofenceId}", 200],
    [_en]: ["geofencing."],
  },
  () => GetGeofenceRequest,
  () => GetGeofenceResponse
);
export var ListDevicePositions = op(
  n0,
  _LDP,
  {
    [_en]: ["tracking."],
    [_h]: ["POST", "/tracking/v0/trackers/{TrackerName}/list-positions", 200],
  },
  () => ListDevicePositionsRequest,
  () => ListDevicePositionsResponse
);
export var ListGeofences = op(
  n0,
  _LGi,
  {
    [_en]: ["geofencing."],
    [_h]: ["POST", "/geofencing/v0/collections/{CollectionName}/list-geofences", 200],
  },
  () => ListGeofencesRequest,
  () => ListGeofencesResponse
);
export var PutGeofence = op(
  n0,
  _PGu,
  {
    [_h]: ["PUT", "/geofencing/v0/collections/{CollectionName}/geofences/{GeofenceId}", 200],
    [_en]: ["geofencing."],
  },
  () => PutGeofenceRequest,
  () => PutGeofenceResponse
);
export var VerifyDevicePosition = op(
  n0,
  _VDP,
  {
    [_h]: ["POST", "/tracking/v0/trackers/{TrackerName}/positions/verify", 200],
    [_en]: ["tracking."],
  },
  () => VerifyDevicePositionRequest,
  () => VerifyDevicePositionResponse
);
