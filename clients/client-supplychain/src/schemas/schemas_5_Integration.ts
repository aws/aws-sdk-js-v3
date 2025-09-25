// smithy-typescript generated code
import { list, op, sim, struct } from "@smithy/core/schema";

import {
  _cT,
  _data,
  _dI,
  _DIE,
  _DIED,
  _DIEDLED,
  _DIEDTC,
  _DIEDTD,
  _DIEL,
  _dLE,
  _dT,
  _dTD,
  _eGI,
  _eI,
  _eT,
  _eTv,
  _ev,
  _eve,
  _GDIE,
  _GDIER,
  _GDIERe,
  _h,
  _hQ,
  _iI,
  _LDIE,
  _LDIER,
  _LDIERi,
  _m,
  _mR,
  _nT,
  _oT,
  _s,
  _SDIE,
  _SDIER,
  _SDIERe,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DataIntegrationEventData = sim(n0, _DIED, 0, 8);
export var DataIntegrationEvent = struct(
  n0,
  _DIE,
  0,
  [_iI, _eI, _eT, _eGI, _eTv, _dTD],
  [0, 0, 0, 0, 4, () => DataIntegrationEventDatasetTargetDetails]
);
export var DataIntegrationEventDatasetLoadExecutionDetails = struct(n0, _DIEDLED, 0, [_s, _m], [0, 0]);
export var DataIntegrationEventDatasetTargetConfiguration = struct(n0, _DIEDTC, 0, [_dI, _oT], [0, 0]);
export var DataIntegrationEventDatasetTargetDetails = struct(
  n0,
  _DIEDTD,
  0,
  [_dI, _oT, _dLE],
  [0, 0, () => DataIntegrationEventDatasetLoadExecutionDetails]
);
export var GetDataIntegrationEventRequest = struct(
  n0,
  _GDIER,
  0,
  [_iI, _eI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetDataIntegrationEventResponse = struct(n0, _GDIERe, 0, [_ev], [() => DataIntegrationEvent]);
export var ListDataIntegrationEventsRequest = struct(
  n0,
  _LDIER,
  0,
  [_iI, _eT, _nT, _mR],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _eT,
      },
    ],
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
export var ListDataIntegrationEventsResponse = struct(n0, _LDIERi, 0, [_eve, _nT], [() => DataIntegrationEventList, 0]);
export var SendDataIntegrationEventRequest = struct(
  n0,
  _SDIER,
  0,
  [_iI, _eT, _data, _eGI, _eTv, _cT, _dT],
  [[0, 1], 0, [() => DataIntegrationEventData, 0], 0, 7, [0, 4], () => DataIntegrationEventDatasetTargetConfiguration]
);
export var SendDataIntegrationEventResponse = struct(n0, _SDIERe, 0, [_eI], [0]);
export var DataIntegrationEventList = list(n0, _DIEL, 0, () => DataIntegrationEvent);
export var GetDataIntegrationEvent = op(
  n0,
  _GDIE,
  {
    [_h]: ["GET", "/api-data/data-integration/instance/{instanceId}/data-integration-events/{eventId}", 200],
  },
  () => GetDataIntegrationEventRequest,
  () => GetDataIntegrationEventResponse
);
export var ListDataIntegrationEvents = op(
  n0,
  _LDIE,
  {
    [_h]: ["GET", "/api-data/data-integration/instance/{instanceId}/data-integration-events", 200],
  },
  () => ListDataIntegrationEventsRequest,
  () => ListDataIntegrationEventsResponse
);
export var SendDataIntegrationEvent = op(
  n0,
  _SDIE,
  {
    [_h]: ["POST", "/api-data/data-integration/instance/{instanceId}/data-integration-events", 200],
  },
  () => SendDataIntegrationEventRequest,
  () => SendDataIntegrationEventResponse
);
