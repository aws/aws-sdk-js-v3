// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _CS,
  _CSRTEC,
  _DRS,
  _DRSRTEC,
  _GECBRT,
  _GECBRTR,
  _GECBRTRe,
  _h,
  _J,
  _JRTEC,
  _LRWAN,
  _LRWANCSRTEC,
  _LRWANJRTEC,
  _MDS,
  _MDSRTEC,
  _Pr,
  _PRTEC,
  _S,
  _SRTEC,
  _UECBRT,
  _UECBRTR,
  _UECBRTRp,
  _WDET,
  _WGET,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ConnectionStatusResourceTypeEventConfiguration = struct(
  n0,
  _CSRTEC,
  0,
  [_LRWAN],
  [() => LoRaWANConnectionStatusResourceTypeEventConfiguration]
);
export var DeviceRegistrationStateResourceTypeEventConfiguration = struct(
  n0,
  _DRSRTEC,
  0,
  [_S],
  [() => SidewalkResourceTypeEventConfiguration]
);
export var GetEventConfigurationByResourceTypesRequest = struct(n0, _GECBRTR, 0, [], []);
export var GetEventConfigurationByResourceTypesResponse = struct(
  n0,
  _GECBRTRe,
  0,
  [_DRS, _Pr, _J, _CS, _MDS],
  [
    () => DeviceRegistrationStateResourceTypeEventConfiguration,
    () => ProximityResourceTypeEventConfiguration,
    () => JoinResourceTypeEventConfiguration,
    () => ConnectionStatusResourceTypeEventConfiguration,
    () => MessageDeliveryStatusResourceTypeEventConfiguration,
  ]
);
export var JoinResourceTypeEventConfiguration = struct(
  n0,
  _JRTEC,
  0,
  [_LRWAN],
  [() => LoRaWANJoinResourceTypeEventConfiguration]
);
export var LoRaWANConnectionStatusResourceTypeEventConfiguration = struct(n0, _LRWANCSRTEC, 0, [_WGET], [0]);
export var LoRaWANJoinResourceTypeEventConfiguration = struct(n0, _LRWANJRTEC, 0, [_WDET], [0]);
export var MessageDeliveryStatusResourceTypeEventConfiguration = struct(
  n0,
  _MDSRTEC,
  0,
  [_S],
  [() => SidewalkResourceTypeEventConfiguration]
);
export var ProximityResourceTypeEventConfiguration = struct(
  n0,
  _PRTEC,
  0,
  [_S],
  [() => SidewalkResourceTypeEventConfiguration]
);
export var SidewalkResourceTypeEventConfiguration = struct(n0, _SRTEC, 0, [_WDET], [0]);
export var UpdateEventConfigurationByResourceTypesRequest = struct(
  n0,
  _UECBRTR,
  0,
  [_DRS, _Pr, _J, _CS, _MDS],
  [
    () => DeviceRegistrationStateResourceTypeEventConfiguration,
    () => ProximityResourceTypeEventConfiguration,
    () => JoinResourceTypeEventConfiguration,
    () => ConnectionStatusResourceTypeEventConfiguration,
    () => MessageDeliveryStatusResourceTypeEventConfiguration,
  ]
);
export var UpdateEventConfigurationByResourceTypesResponse = struct(n0, _UECBRTRp, 0, [], []);
export var GetEventConfigurationByResourceTypes = op(
  n0,
  _GECBRT,
  {
    [_h]: ["GET", "/event-configurations-resource-types", 200],
  },
  () => GetEventConfigurationByResourceTypesRequest,
  () => GetEventConfigurationByResourceTypesResponse
);
export var UpdateEventConfigurationByResourceTypes = op(
  n0,
  _UECBRT,
  {
    [_h]: ["PATCH", "/event-configurations-resource-types", 204],
  },
  () => UpdateEventConfigurationByResourceTypesRequest,
  () => UpdateEventConfigurationByResourceTypesResponse
);
