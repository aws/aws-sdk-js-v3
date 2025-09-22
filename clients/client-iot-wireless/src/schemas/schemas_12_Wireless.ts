// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _Ar,
  _B,
  _BLat,
  _CA,
  _CRT,
  _CWG,
  _CWGR,
  _CWGRr,
  _D,
  _DAl,
  _DE,
  _De,
  _DR,
  _DS,
  _Eve,
  _FIMS,
  _FP,
  _Fr,
  _Fre,
  _FSB,
  _FUI,
  _FUR,
  _Ga,
  _GE,
  _GFT,
  _GFTR,
  _GFTRe,
  _GWDS,
  _GWDSR,
  _GWDSRe,
  _GWG,
  _GWGR,
  _GWGRe,
  _h,
  _hQ,
  _I,
  _Id,
  _IT,
  _iT,
  _JEF,
  _LRWAN,
  _LRWANDM,
  _LRWANFTGI,
  _LRWANG,
  _LRWANGM,
  _LRWANGML,
  _LRWANPGM,
  _LRWANPGML,
  _LURA,
  _LWG,
  _LWGR,
  _LWGRi,
  _ME,
  _MR,
  _mR,
  _N,
  _NIF,
  _NT,
  _nT,
  _PG,
  _PNI,
  _R,
  _RP,
  _RR,
  _S,
  _SB,
  _SDM,
  _Sn,
  _St,
  _STt,
  _TA,
  _Ta,
  _Ti,
  _TN,
  _WDI,
  _WGL,
  _WGS,
  _WGSL,
  n0,
  TagList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var Beaconing = struct(n0, _B, 0, [_DR, _Fr], [1, 64 | 1]);
export var CreateWirelessGatewayRequest = struct(
  n0,
  _CWGR,
  0,
  [_N, _D, _LRWAN, _Ta, _CRT],
  [0, 0, () => LoRaWANGateway, () => TagList, [0, 4]]
);
export var CreateWirelessGatewayResponse = struct(n0, _CWGRr, 0, [_Ar, _I], [0, 0]);
export var GetFuotaTaskRequest = struct(n0, _GFTR, 0, [_I], [[0, 1]]);
export var GetFuotaTaskResponse = struct(
  n0,
  _GFTRe,
  0,
  [_Ar, _I, _St, _N, _D, _LRWAN, _FUI, _FUR, _CA, _RP, _FSB, _FIMS, _De],
  [0, 0, 0, 0, 0, () => LoRaWANFuotaTaskGetInfo, 0, 0, 4, 1, 1, 1, 0]
);
export var GetWirelessDeviceStatisticsRequest = struct(n0, _GWDSR, 0, [_WDI], [[0, 1]]);
export var GetWirelessDeviceStatisticsResponse = struct(
  n0,
  _GWDSRe,
  0,
  [_WDI, _LURA, _LRWAN, _S],
  [0, 0, () => LoRaWANDeviceMetadata, () => SidewalkDeviceMetadata]
);
export var GetWirelessGatewayRequest = struct(
  n0,
  _GWGR,
  0,
  [_Id, _IT],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _iT,
      },
    ],
  ]
);
export var GetWirelessGatewayResponse = struct(
  n0,
  _GWGRe,
  0,
  [_N, _I, _D, _LRWAN, _Ar, _TN, _TA],
  [0, 0, 0, () => LoRaWANGateway, 0, 0, 0]
);
export var ListWirelessGatewaysRequest = struct(
  n0,
  _LWGR,
  0,
  [_NT, _MR],
  [
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
export var ListWirelessGatewaysResponse = struct(n0, _LWGRi, 0, [_NT, _WGL], [0, () => WirelessGatewayStatisticsList]);
export var LoRaWANDeviceMetadata = struct(
  n0,
  _LRWANDM,
  0,
  [_DE, _FP, _DR, _Fre, _Ti, _Ga, _PG],
  [0, 1, 1, 1, 0, () => LoRaWANGatewayMetadataList, () => LoRaWANPublicGatewayMetadataList]
);
export var LoRaWANFuotaTaskGetInfo = struct(n0, _LRWANFTGI, 0, [_RR, _STt], [0, 5]);
export var LoRaWANGateway = struct(
  n0,
  _LRWANG,
  0,
  [_GE, _RR, _JEF, _NIF, _SB, _B, _ME],
  [0, 0, list(n0, _JEF, 0, 64 | 0), 64 | 0, 64 | 1, () => Beaconing, 1]
);
export var LoRaWANGatewayMetadata = struct(n0, _LRWANGM, 0, [_GE, _Sn, _R], [0, 1, 1]);
export var LoRaWANPublicGatewayMetadata = struct(n0, _LRWANPGM, 0, [_PNI, _I, _R, _Sn, _RR, _DAl], [0, 0, 1, 1, 0, 2]);
export var SidewalkDeviceMetadata = struct(n0, _SDM, 0, [_R, _BLat, _Eve, _DS], [1, 0, 0, 0]);
export var WirelessGatewayStatistics = struct(
  n0,
  _WGS,
  0,
  [_Ar, _I, _N, _D, _LRWAN, _LURA],
  [0, 0, 0, 0, () => LoRaWANGateway, 0]
);
export var BeaconingFrequencies = 64 | 1;

export var LoRaWANGatewayMetadataList = list(n0, _LRWANGML, 0, () => LoRaWANGatewayMetadata);
export var LoRaWANPublicGatewayMetadataList = list(n0, _LRWANPGML, 0, () => LoRaWANPublicGatewayMetadata);
export var SubBands = 64 | 1;

export var WirelessGatewayStatisticsList = list(n0, _WGSL, 0, () => WirelessGatewayStatistics);
export var CreateWirelessGateway = op(
  n0,
  _CWG,
  {
    [_h]: ["POST", "/wireless-gateways", 201],
  },
  () => CreateWirelessGatewayRequest,
  () => CreateWirelessGatewayResponse
);
export var GetFuotaTask = op(
  n0,
  _GFT,
  {
    [_h]: ["GET", "/fuota-tasks/{Id}", 200],
  },
  () => GetFuotaTaskRequest,
  () => GetFuotaTaskResponse
);
export var GetWirelessDeviceStatistics = op(
  n0,
  _GWDS,
  {
    [_h]: ["GET", "/wireless-devices/{WirelessDeviceId}/statistics", 200],
  },
  () => GetWirelessDeviceStatisticsRequest,
  () => GetWirelessDeviceStatisticsResponse
);
export var GetWirelessGateway = op(
  n0,
  _GWG,
  {
    [_h]: ["GET", "/wireless-gateways/{Identifier}", 200],
  },
  () => GetWirelessGatewayRequest,
  () => GetWirelessGatewayResponse
);
export var ListWirelessGateways = op(
  n0,
  _LWG,
  {
    [_h]: ["GET", "/wireless-gateways", 200],
  },
  () => ListWirelessGatewaysRequest,
  () => ListWirelessGatewaysResponse
);
