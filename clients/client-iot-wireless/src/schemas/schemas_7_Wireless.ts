// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _A,
  _AE,
  _AIm,
  _AK,
  _Ap,
  _Ar,
  _ASK,
  _Ax,
  _CI,
  _CL,
  _CRT,
  _CSl,
  _CWD,
  _CWDR,
  _CWDRr,
  _D,
  _DA,
  _DCe,
  _DCL,
  _DE,
  _DLL,
  _DN,
  _dN,
  _DPI,
  _dPI,
  _DQM,
  _DQMe,
  _DQML,
  _DQMR,
  _DQMRe,
  _DWDe,
  _DWDRer,
  _DWDRere,
  _Ev,
  _Eve,
  _FCS,
  _FDS,
  _FNSIK,
  _FPo,
  _FTELO,
  _FTELOL,
  _FTI,
  _fTI,
  _FTLO,
  _FTLOL,
  _FTLOu,
  _Fu,
  _GAK,
  _GLLBRT,
  _GLLBRTR,
  _GLLBRTRe,
  _GWD,
  _GWDR,
  _GWDRe,
  _h,
  _hQ,
  _I,
  _Id,
  _IT,
  _iT,
  _JE,
  _LL,
  _LQM,
  _LQMR,
  _LQMRi,
  _LRWAN,
  _LRWAND,
  _LRWANLD,
  _LURA,
  _LWD,
  _LWDR,
  _LWDRi,
  _MDSu,
  _MGI,
  _mGI,
  _MGIc,
  _MI,
  _mI,
  _MR,
  _mR,
  _Mu,
  _N,
  _NK,
  _NSEK,
  _NSK,
  _NT,
  _nT,
  _O,
  _Ox,
  _P,
  _PK,
  _PKL,
  _RAe,
  _S,
  _S_,
  _SA,
  _SCWD,
  _SD,
  _SIi,
  _SK,
  _SLD,
  _SMS,
  _SNSIK,
  _SPI,
  _sPI,
  _St,
  _Sx,
  _T,
  _TA,
  _Ta,
  _TM,
  _TN,
  _ULLBRT,
  _ULLBRTR,
  _ULLBRTRp,
  _V,
  _WDELO,
  _WDELOL,
  _WDL,
  _WDLO,
  _WDLOi,
  _WDLOL,
  _WDS,
  _WDSL,
  _WDT,
  _wDT,
  _WGELO,
  _WGELOL,
  _WGLO,
  _WGLOi,
  _WGLOL,
  n0,
  TagList,
} from "./schemas_0";
import { Applications, Positioning } from "./schemas_2_Wireless";
import { LoRaWANSendDataToDevice } from "./schemas_19_Wireless";

/* eslint no-var: 0 */

export var AbpV1_0_x = struct(n0, _Ax, 0, [_DA, _SK, _FCS], [0, () => SessionKeysAbpV1_0_x, 1]);
export var AbpV1_1 = struct(n0, _A, 0, [_DA, _SK, _FCS], [0, () => SessionKeysAbpV1_1, 1]);
export var CertificateList = struct(n0, _CL, 0, [_SA, _V], [0, 0]);
export var CreateWirelessDeviceRequest = struct(
  n0,
  _CWDR,
  0,
  [_T, _N, _D, _DN, _CRT, _LRWAN, _Ta, _P, _S],
  [0, 0, 0, 0, [0, 4], () => LoRaWANDevice, () => TagList, 0, () => SidewalkCreateWirelessDevice]
);
export var CreateWirelessDeviceResponse = struct(n0, _CWDRr, 0, [_Ar, _I], [0, 0]);
export var DeleteQueuedMessagesRequest = struct(
  n0,
  _DQMR,
  0,
  [_I, _MI, _WDT],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _mI,
      },
    ],
    [
      0,
      {
        [_hQ]: _WDT,
      },
    ],
  ]
);
export var DeleteQueuedMessagesResponse = struct(n0, _DQMRe, 0, [], []);
export var DeregisterWirelessDeviceRequest = struct(
  n0,
  _DWDRer,
  0,
  [_Id, _WDT],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _WDT,
      },
    ],
  ]
);
export var DeregisterWirelessDeviceResponse = struct(n0, _DWDRere, 0, [], []);
export var DownlinkQueueMessage = struct(
  n0,
  _DQM,
  0,
  [_MI, _TM, _RAe, _LRWAN],
  [0, 1, 0, () => LoRaWANSendDataToDevice]
);
export var FPorts = struct(n0, _FPo, 0, [_Fu, _Mu, _CSl, _P, _Ap], [1, 1, 1, () => Positioning, () => Applications]);
export var FuotaTaskEventLogOption = struct(n0, _FTELO, 0, [_Eve, _LL], [0, 0]);
export var FuotaTaskLogOption = struct(n0, _FTLO, 0, [_T, _LL, _Ev], [0, 0, () => FuotaTaskEventLogOptionList]);
export var GetLogLevelsByResourceTypesRequest = struct(n0, _GLLBRTR, 0, [], []);
export var GetLogLevelsByResourceTypesResponse = struct(
  n0,
  _GLLBRTRe,
  0,
  [_DLL, _WGLO, _WDLO, _FTLOu],
  [0, () => WirelessGatewayLogOptionList, () => WirelessDeviceLogOptionList, () => FuotaTaskLogOptionList]
);
export var GetWirelessDeviceRequest = struct(
  n0,
  _GWDR,
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
export var GetWirelessDeviceResponse = struct(
  n0,
  _GWDRe,
  0,
  [_T, _N, _D, _DN, _I, _Ar, _TN, _TA, _LRWAN, _S, _P],
  [0, 0, 0, 0, 0, 0, 0, 0, () => LoRaWANDevice, () => SidewalkDevice, 0]
);
export var ListQueuedMessagesRequest = struct(
  n0,
  _LQMR,
  0,
  [_I, _NT, _MR, _WDT],
  [
    [0, 1],
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
    [
      0,
      {
        [_hQ]: _WDT,
      },
    ],
  ]
);
export var ListQueuedMessagesResponse = struct(n0, _LQMRi, 0, [_NT, _DQML], [0, () => DownlinkQueueMessagesList]);
export var ListWirelessDevicesRequest = struct(
  n0,
  _LWDR,
  0,
  [_MR, _NT, _DN, _DPI, _SPI, _WDT, _FTI, _MGI],
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
        [_hQ]: _dN,
      },
    ],
    [
      0,
      {
        [_hQ]: _dPI,
      },
    ],
    [
      0,
      {
        [_hQ]: _sPI,
      },
    ],
    [
      0,
      {
        [_hQ]: _wDT,
      },
    ],
    [
      0,
      {
        [_hQ]: _fTI,
      },
    ],
    [
      0,
      {
        [_hQ]: _mGI,
      },
    ],
  ]
);
export var ListWirelessDevicesResponse = struct(n0, _LWDRi, 0, [_NT, _WDL], [0, () => WirelessDeviceStatisticsList]);
export var LoRaWANDevice = struct(
  n0,
  _LRWAND,
  0,
  [_DE, _DPI, _SPI, _O, _Ox, _A, _Ax, _FPo],
  [0, 0, 0, () => OtaaV1_1, () => OtaaV1_0_x, () => AbpV1_1, () => AbpV1_0_x, () => FPorts]
);
export var LoRaWANListDevice = struct(n0, _LRWANLD, 0, [_DE], [0]);
export var OtaaV1_0_x = struct(n0, _Ox, 0, [_AK, _AE, _JE, _GAK], [0, 0, 0, 0]);
export var OtaaV1_1 = struct(n0, _O, 0, [_AK, _NK, _JE], [0, 0, 0]);
export var SessionKeysAbpV1_0_x = struct(n0, _Sx, 0, [_NSK, _ASK], [0, 0]);
export var SessionKeysAbpV1_1 = struct(n0, _S_, 0, [_FNSIK, _SNSIK, _NSEK, _ASK], [0, 0, 0, 0]);
export var SidewalkCreateWirelessDevice = struct(n0, _SCWD, 0, [_DPI], [0]);
export var SidewalkDevice = struct(
  n0,
  _SD,
  0,
  [_AIm, _SIi, _SMS, _DCe, _PK, _DPI, _CI, _St],
  [0, 0, 0, () => DeviceCertificateList, () => PrivateKeysList, 0, 0, 0]
);
export var SidewalkListDevice = struct(
  n0,
  _SLD,
  0,
  [_AIm, _SIi, _SMS, _DCe, _DPI, _St],
  [0, 0, 0, () => DeviceCertificateList, 0, 0]
);
export var UpdateLogLevelsByResourceTypesRequest = struct(
  n0,
  _ULLBRTR,
  0,
  [_DLL, _FTLOu, _WDLO, _WGLO],
  [0, () => FuotaTaskLogOptionList, () => WirelessDeviceLogOptionList, () => WirelessGatewayLogOptionList]
);
export var UpdateLogLevelsByResourceTypesResponse = struct(n0, _ULLBRTRp, 0, [], []);
export var WirelessDeviceEventLogOption = struct(n0, _WDELO, 0, [_Eve, _LL], [0, 0]);
export var WirelessDeviceLogOption = struct(
  n0,
  _WDLOi,
  0,
  [_T, _LL, _Ev],
  [0, 0, () => WirelessDeviceEventLogOptionList]
);
export var WirelessDeviceStatistics = struct(
  n0,
  _WDS,
  0,
  [_Ar, _I, _T, _N, _DN, _LURA, _LRWAN, _S, _FDS, _MDSu, _MGIc],
  [0, 0, 0, 0, 0, 0, () => LoRaWANListDevice, () => SidewalkListDevice, 0, 0, 1]
);
export var WirelessGatewayEventLogOption = struct(n0, _WGELO, 0, [_Eve, _LL], [0, 0]);
export var WirelessGatewayLogOption = struct(
  n0,
  _WGLOi,
  0,
  [_T, _LL, _Ev],
  [0, 0, () => WirelessGatewayEventLogOptionList]
);
export var DeviceCertificateList = list(n0, _DCL, 0, () => CertificateList);
export var DownlinkQueueMessagesList = list(n0, _DQML, 0, () => DownlinkQueueMessage);
export var FuotaTaskEventLogOptionList = list(n0, _FTELOL, 0, () => FuotaTaskEventLogOption);
export var FuotaTaskLogOptionList = list(n0, _FTLOL, 0, () => FuotaTaskLogOption);
export var PrivateKeysList = list(n0, _PKL, 0, () => CertificateList);
export var WirelessDeviceEventLogOptionList = list(n0, _WDELOL, 0, () => WirelessDeviceEventLogOption);
export var WirelessDeviceLogOptionList = list(n0, _WDLOL, 0, () => WirelessDeviceLogOption);
export var WirelessDeviceStatisticsList = list(n0, _WDSL, 0, () => WirelessDeviceStatistics);
export var WirelessGatewayEventLogOptionList = list(n0, _WGELOL, 0, () => WirelessGatewayEventLogOption);
export var WirelessGatewayLogOptionList = list(n0, _WGLOL, 0, () => WirelessGatewayLogOption);
export var CreateWirelessDevice = op(
  n0,
  _CWD,
  {
    [_h]: ["POST", "/wireless-devices", 201],
  },
  () => CreateWirelessDeviceRequest,
  () => CreateWirelessDeviceResponse
);
export var DeleteQueuedMessages = op(
  n0,
  _DQMe,
  {
    [_h]: ["DELETE", "/wireless-devices/{Id}/data", 204],
  },
  () => DeleteQueuedMessagesRequest,
  () => DeleteQueuedMessagesResponse
);
export var DeregisterWirelessDevice = op(
  n0,
  _DWDe,
  {
    [_h]: ["PATCH", "/wireless-devices/{Identifier}/deregister", 200],
  },
  () => DeregisterWirelessDeviceRequest,
  () => DeregisterWirelessDeviceResponse
);
export var GetLogLevelsByResourceTypes = op(
  n0,
  _GLLBRT,
  {
    [_h]: ["GET", "/log-levels", 200],
  },
  () => GetLogLevelsByResourceTypesRequest,
  () => GetLogLevelsByResourceTypesResponse
);
export var GetWirelessDevice = op(
  n0,
  _GWD,
  {
    [_h]: ["GET", "/wireless-devices/{Identifier}", 200],
  },
  () => GetWirelessDeviceRequest,
  () => GetWirelessDeviceResponse
);
export var ListQueuedMessages = op(
  n0,
  _LQM,
  {
    [_h]: ["GET", "/wireless-devices/{Id}/data", 200],
  },
  () => ListQueuedMessagesRequest,
  () => ListQueuedMessagesResponse
);
export var ListWirelessDevices = op(
  n0,
  _LWD,
  {
    [_h]: ["GET", "/wireless-devices", 200],
  },
  () => ListWirelessDevicesRequest,
  () => ListWirelessDevicesResponse
);
export var UpdateLogLevelsByResourceTypes = op(
  n0,
  _ULLBRT,
  {
    [_h]: ["POST", "/log-levels", 200],
  },
  () => UpdateLogLevelsByResourceTypesRequest,
  () => UpdateLogLevelsByResourceTypesResponse
);
