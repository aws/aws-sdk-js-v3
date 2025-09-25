// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AIET,
  _CS,
  _CSEC,
  _DEET,
  _DRS,
  _DRSEC,
  _ECI,
  _ECL,
  _ENIC,
  _Ev,
  _GEET,
  _GREC,
  _GRECR,
  _GRECRe,
  _h,
  _hQ,
  _Id,
  _IT,
  _iT,
  _J,
  _JEC,
  _LEC,
  _LECR,
  _LECRi,
  _LRWAN,
  _LRWANCSENC,
  _LRWANJENC,
  _MDS,
  _MDSEC,
  _MR,
  _mR,
  _NT,
  _nT,
  _PEC,
  _Pr,
  _PT,
  _pT,
  _RT,
  _rT,
  _S,
  _SENC,
  _UREC,
  _URECR,
  _URECRp,
  _WDIET,
  _WGIET,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ConnectionStatusEventConfiguration = struct(
  n0,
  _CSEC,
  0,
  [_LRWAN, _WGIET],
  [() => LoRaWANConnectionStatusEventNotificationConfigurations, 0]
);
export var DeviceRegistrationStateEventConfiguration = struct(
  n0,
  _DRSEC,
  0,
  [_S, _WDIET],
  [() => SidewalkEventNotificationConfigurations, 0]
);
export var EventConfigurationItem = struct(
  n0,
  _ECI,
  0,
  [_Id, _IT, _PT, _Ev],
  [0, 0, 0, () => EventNotificationItemConfigurations]
);
export var EventNotificationItemConfigurations = struct(
  n0,
  _ENIC,
  0,
  [_DRS, _Pr, _J, _CS, _MDS],
  [
    () => DeviceRegistrationStateEventConfiguration,
    () => ProximityEventConfiguration,
    () => JoinEventConfiguration,
    () => ConnectionStatusEventConfiguration,
    () => MessageDeliveryStatusEventConfiguration,
  ]
);
export var GetResourceEventConfigurationRequest = struct(
  n0,
  _GRECR,
  0,
  [_Id, _IT, _PT],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _iT,
      },
    ],
    [
      0,
      {
        [_hQ]: _pT,
      },
    ],
  ]
);
export var GetResourceEventConfigurationResponse = struct(
  n0,
  _GRECRe,
  0,
  [_DRS, _Pr, _J, _CS, _MDS],
  [
    () => DeviceRegistrationStateEventConfiguration,
    () => ProximityEventConfiguration,
    () => JoinEventConfiguration,
    () => ConnectionStatusEventConfiguration,
    () => MessageDeliveryStatusEventConfiguration,
  ]
);
export var JoinEventConfiguration = struct(
  n0,
  _JEC,
  0,
  [_LRWAN, _WDIET],
  [() => LoRaWANJoinEventNotificationConfigurations, 0]
);
export var ListEventConfigurationsRequest = struct(
  n0,
  _LECR,
  0,
  [_RT, _MR, _NT],
  [
    [
      0,
      {
        [_hQ]: _rT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
  ]
);
export var ListEventConfigurationsResponse = struct(n0, _LECRi, 0, [_NT, _ECL], [0, () => EventConfigurationsList]);
export var LoRaWANConnectionStatusEventNotificationConfigurations = struct(n0, _LRWANCSENC, 0, [_GEET], [0]);
export var LoRaWANJoinEventNotificationConfigurations = struct(n0, _LRWANJENC, 0, [_DEET], [0]);
export var MessageDeliveryStatusEventConfiguration = struct(
  n0,
  _MDSEC,
  0,
  [_S, _WDIET],
  [() => SidewalkEventNotificationConfigurations, 0]
);
export var ProximityEventConfiguration = struct(
  n0,
  _PEC,
  0,
  [_S, _WDIET],
  [() => SidewalkEventNotificationConfigurations, 0]
);
export var SidewalkEventNotificationConfigurations = struct(n0, _SENC, 0, [_AIET], [0]);
export var UpdateResourceEventConfigurationRequest = struct(
  n0,
  _URECR,
  0,
  [_Id, _IT, _PT, _DRS, _Pr, _J, _CS, _MDS],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _iT,
      },
    ],
    [
      0,
      {
        [_hQ]: _pT,
      },
    ],
    () => DeviceRegistrationStateEventConfiguration,
    () => ProximityEventConfiguration,
    () => JoinEventConfiguration,
    () => ConnectionStatusEventConfiguration,
    () => MessageDeliveryStatusEventConfiguration,
  ]
);
export var UpdateResourceEventConfigurationResponse = struct(n0, _URECRp, 0, [], []);
export var EventConfigurationsList = list(n0, _ECL, 0, () => EventConfigurationItem);
export var GetResourceEventConfiguration = op(
  n0,
  _GREC,
  {
    [_h]: ["GET", "/event-configurations/{Identifier}", 200],
  },
  () => GetResourceEventConfigurationRequest,
  () => GetResourceEventConfigurationResponse
);
export var ListEventConfigurations = op(
  n0,
  _LEC,
  {
    [_h]: ["GET", "/event-configurations", 200],
  },
  () => ListEventConfigurationsRequest,
  () => ListEventConfigurationsResponse
);
export var UpdateResourceEventConfiguration = op(
  n0,
  _UREC,
  {
    [_h]: ["PATCH", "/event-configurations/{Identifier}", 204],
  },
  () => UpdateResourceEventConfigurationRequest,
  () => UpdateResourceEventConfigurationResponse
);
