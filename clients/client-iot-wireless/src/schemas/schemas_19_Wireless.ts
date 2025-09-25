// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AMRDS,
  _DF,
  _DMo,
  _FP,
  _GI,
  _GL,
  _GLI,
  _h,
  _I,
  _LRWAN,
  _LRWANMM,
  _LRWANSDTD,
  _MI,
  _MT,
  _MWM,
  _PD,
  _PGa,
  _S,
  _SDTMG,
  _SDTMGR,
  _SDTMGRe,
  _SDTWD,
  _SDTWDR,
  _SDTWDRe,
  _Se,
  _SSDTD,
  _TI,
  _TM,
  _WM,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GatewayListItem = struct(n0, _GLI, 0, [_GI, _DF], [0, 1]);
export var LoRaWANMulticastMetadata = struct(n0, _LRWANMM, 0, [_FP], [1]);
export var LoRaWANSendDataToDevice = struct(n0, _LRWANSDTD, 0, [_FP, _PGa], [1, () => ParticipatingGateways]);
export var MulticastWirelessMetadata = struct(n0, _MWM, 0, [_LRWAN], [() => LoRaWANMulticastMetadata]);
export var ParticipatingGateways = struct(n0, _PGa, 0, [_DMo, _GL, _TI], [0, () => GatewayList, 1]);
export var SendDataToMulticastGroupRequest = struct(
  n0,
  _SDTMGR,
  0,
  [_I, _PD, _WM],
  [[0, 1], 0, () => MulticastWirelessMetadata]
);
export var SendDataToMulticastGroupResponse = struct(n0, _SDTMGRe, 0, [_MI], [0]);
export var SendDataToWirelessDeviceRequest = struct(
  n0,
  _SDTWDR,
  0,
  [_I, _TM, _PD, _WM],
  [[0, 1], 1, 0, () => WirelessMetadata]
);
export var SendDataToWirelessDeviceResponse = struct(n0, _SDTWDRe, 0, [_MI], [0]);
export var SidewalkSendDataToDevice = struct(n0, _SSDTD, 0, [_Se, _MT, _AMRDS], [1, 0, 1]);
export var WirelessMetadata = struct(
  n0,
  _WM,
  0,
  [_LRWAN, _S],
  [() => LoRaWANSendDataToDevice, () => SidewalkSendDataToDevice]
);
export var GatewayList = list(n0, _GL, 0, () => GatewayListItem);
export var SendDataToMulticastGroup = op(
  n0,
  _SDTMG,
  {
    [_h]: ["POST", "/multicast-groups/{Id}/data", 201],
  },
  () => SendDataToMulticastGroupRequest,
  () => SendDataToMulticastGroupResponse
);
export var SendDataToWirelessDevice = op(
  n0,
  _SDTWD,
  {
    [_h]: ["POST", "/wireless-devices/{Id}/data", 202],
  },
  () => SendDataToWirelessDeviceRequest,
  () => SendDataToWirelessDeviceResponse
);
