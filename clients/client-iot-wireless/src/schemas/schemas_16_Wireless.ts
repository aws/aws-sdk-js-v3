// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ACT,
  _Ar,
  _CRT,
  _CV,
  _CWGT,
  _CWGTD,
  _CWGTDR,
  _CWGTDRr,
  _CWGTR,
  _CWGTRr,
  _DWGTD,
  _DWGTDR,
  _DWGTDRe,
  _GWGTD,
  _GWGTDR,
  _GWGTDRe,
  _h,
  _hQ,
  _I,
  _LRWAN,
  _LRWANUGTC,
  _LRWANUGTE,
  _LWGTD,
  _LWGTDR,
  _LWGTDRi,
  _MR,
  _mR,
  _N,
  _NT,
  _nT,
  _SKC,
  _St,
  _Ta,
  _TD,
  _TDT,
  _tDT,
  _U,
  _UDRpd,
  _UDSp,
  _US,
  _UV,
  _UWGTC,
  _UWGTE,
  _WGTDI,
  _WGTDL,
  n0,
  TagList,
} from "./schemas_0";
import { LoRaWANGatewayVersion } from "./schemas_18_Wireless";

/* eslint no-var: 0 */

export var CreateWirelessGatewayTaskDefinitionRequest = struct(
  n0,
  _CWGTDR,
  0,
  [_ACT, _N, _U, _CRT, _Ta],
  [2, 0, () => UpdateWirelessGatewayTaskCreate, [0, 4], () => TagList]
);
export var CreateWirelessGatewayTaskDefinitionResponse = struct(n0, _CWGTDRr, 0, [_I, _Ar], [0, 0]);
export var CreateWirelessGatewayTaskRequest = struct(n0, _CWGTR, 0, [_I, _WGTDI], [[0, 1], 0]);
export var CreateWirelessGatewayTaskResponse = struct(n0, _CWGTRr, 0, [_WGTDI, _St], [0, 0]);
export var DeleteWirelessGatewayTaskDefinitionRequest = struct(n0, _DWGTDR, 0, [_I], [[0, 1]]);
export var DeleteWirelessGatewayTaskDefinitionResponse = struct(n0, _DWGTDRe, 0, [], []);
export var GetWirelessGatewayTaskDefinitionRequest = struct(n0, _GWGTDR, 0, [_I], [[0, 1]]);
export var GetWirelessGatewayTaskDefinitionResponse = struct(
  n0,
  _GWGTDRe,
  0,
  [_ACT, _N, _U, _Ar],
  [2, 0, () => UpdateWirelessGatewayTaskCreate, 0]
);
export var ListWirelessGatewayTaskDefinitionsRequest = struct(
  n0,
  _LWGTDR,
  0,
  [_MR, _NT, _TDT],
  [
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
    [
      0,
      {
        [_hQ]: _tDT,
      },
    ],
  ]
);
export var ListWirelessGatewayTaskDefinitionsResponse = struct(
  n0,
  _LWGTDRi,
  0,
  [_NT, _TD],
  [0, () => WirelessGatewayTaskDefinitionList]
);
export var LoRaWANUpdateGatewayTaskCreate = struct(
  n0,
  _LRWANUGTC,
  0,
  [_US, _SKC, _CV, _UV],
  [0, 1, () => LoRaWANGatewayVersion, () => LoRaWANGatewayVersion]
);
export var LoRaWANUpdateGatewayTaskEntry = struct(
  n0,
  _LRWANUGTE,
  0,
  [_CV, _UV],
  [() => LoRaWANGatewayVersion, () => LoRaWANGatewayVersion]
);
export var UpdateWirelessGatewayTaskCreate = struct(
  n0,
  _UWGTC,
  0,
  [_UDSp, _UDRpd, _LRWAN],
  [0, 0, () => LoRaWANUpdateGatewayTaskCreate]
);
export var UpdateWirelessGatewayTaskEntry = struct(
  n0,
  _UWGTE,
  0,
  [_I, _LRWAN, _Ar],
  [0, () => LoRaWANUpdateGatewayTaskEntry, 0]
);
export var WirelessGatewayTaskDefinitionList = list(n0, _WGTDL, 0, () => UpdateWirelessGatewayTaskEntry);
export var CreateWirelessGatewayTask = op(
  n0,
  _CWGT,
  {
    [_h]: ["POST", "/wireless-gateways/{Id}/tasks", 201],
  },
  () => CreateWirelessGatewayTaskRequest,
  () => CreateWirelessGatewayTaskResponse
);
export var CreateWirelessGatewayTaskDefinition = op(
  n0,
  _CWGTD,
  {
    [_h]: ["POST", "/wireless-gateway-task-definitions", 201],
  },
  () => CreateWirelessGatewayTaskDefinitionRequest,
  () => CreateWirelessGatewayTaskDefinitionResponse
);
export var DeleteWirelessGatewayTaskDefinition = op(
  n0,
  _DWGTD,
  {
    [_h]: ["DELETE", "/wireless-gateway-task-definitions/{Id}", 204],
  },
  () => DeleteWirelessGatewayTaskDefinitionRequest,
  () => DeleteWirelessGatewayTaskDefinitionResponse
);
export var GetWirelessGatewayTaskDefinition = op(
  n0,
  _GWGTD,
  {
    [_h]: ["GET", "/wireless-gateway-task-definitions/{Id}", 200],
  },
  () => GetWirelessGatewayTaskDefinitionRequest,
  () => GetWirelessGatewayTaskDefinitionResponse
);
export var ListWirelessGatewayTaskDefinitions = op(
  n0,
  _LWGTD,
  {
    [_h]: ["GET", "/wireless-gateway-task-definitions", 200],
  },
  () => ListWirelessGatewayTaskDefinitionsRequest,
  () => ListWirelessGatewayTaskDefinitionsResponse
);
