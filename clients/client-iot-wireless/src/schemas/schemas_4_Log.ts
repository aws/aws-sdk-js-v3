// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _Ar,
  _CNAC,
  _CNACR,
  _CNACRr,
  _CNo,
  _CRT,
  _D,
  _GNAC,
  _GNACR,
  _GNACRe,
  _GRLL,
  _GRLLR,
  _GRLLRe,
  _h,
  _hQ,
  _LL,
  _MFI,
  _MG,
  _MGTA,
  _MGTR,
  _N,
  _PRLL,
  _PRLLR,
  _PRLLRu,
  _RIe,
  _RT,
  _rT,
  _Ta,
  _TC,
  _UNAC,
  _UNACR,
  _UNACRp,
  _WD,
  _WDFI,
  _WDTA,
  _WDTR,
  _WG,
  _WGTA,
  _WGTR,
  n0,
  TagList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateNetworkAnalyzerConfigurationRequest = struct(
  n0,
  _CNACR,
  0,
  [_N, _TC, _WD, _WG, _D, _Ta, _CRT, _MG],
  [0, () => TraceContent, 64 | 0, 64 | 0, 0, () => TagList, [0, 4], 64 | 0]
);
export var CreateNetworkAnalyzerConfigurationResponse = struct(n0, _CNACRr, 0, [_Ar, _N], [0, 0]);
export var GetNetworkAnalyzerConfigurationRequest = struct(n0, _GNACR, 0, [_CNo], [[0, 1]]);
export var GetNetworkAnalyzerConfigurationResponse = struct(
  n0,
  _GNACRe,
  0,
  [_TC, _WD, _WG, _D, _Ar, _N, _MG],
  [() => TraceContent, 64 | 0, 64 | 0, 0, 0, 0, 64 | 0]
);
export var GetResourceLogLevelRequest = struct(
  n0,
  _GRLLR,
  0,
  [_RIe, _RT],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _rT,
      },
    ],
  ]
);
export var GetResourceLogLevelResponse = struct(n0, _GRLLRe, 0, [_LL], [0]);
export var PutResourceLogLevelRequest = struct(
  n0,
  _PRLLR,
  0,
  [_RIe, _RT, _LL],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _rT,
      },
    ],
    0,
  ]
);
export var PutResourceLogLevelResponse = struct(n0, _PRLLRu, 0, [], []);
export var TraceContent = struct(n0, _TC, 0, [_WDFI, _LL, _MFI], [0, 0, 0]);
export var UpdateNetworkAnalyzerConfigurationRequest = struct(
  n0,
  _UNACR,
  0,
  [_CNo, _TC, _WDTA, _WDTR, _WGTA, _WGTR, _D, _MGTA, _MGTR],
  [[0, 1], () => TraceContent, 64 | 0, 64 | 0, 64 | 0, 64 | 0, 0, 64 | 0, 64 | 0]
);
export var UpdateNetworkAnalyzerConfigurationResponse = struct(n0, _UNACRp, 0, [], []);
export var NetworkAnalyzerMulticastGroupList = 64 | 0;

export var WirelessDeviceList = 64 | 0;

export var WirelessGatewayList = 64 | 0;

export var CreateNetworkAnalyzerConfiguration = op(
  n0,
  _CNAC,
  {
    [_h]: ["POST", "/network-analyzer-configurations", 201],
  },
  () => CreateNetworkAnalyzerConfigurationRequest,
  () => CreateNetworkAnalyzerConfigurationResponse
);
export var GetNetworkAnalyzerConfiguration = op(
  n0,
  _GNAC,
  {
    [_h]: ["GET", "/network-analyzer-configurations/{ConfigurationName}", 200],
  },
  () => GetNetworkAnalyzerConfigurationRequest,
  () => GetNetworkAnalyzerConfigurationResponse
);
export var GetResourceLogLevel = op(
  n0,
  _GRLL,
  {
    [_h]: ["GET", "/log-levels/{ResourceIdentifier}", 200],
  },
  () => GetResourceLogLevelRequest,
  () => GetResourceLogLevelResponse
);
export var PutResourceLogLevel = op(
  n0,
  _PRLL,
  {
    [_h]: ["PUT", "/log-levels/{ResourceIdentifier}", 200],
  },
  () => PutResourceLogLevelRequest,
  () => PutResourceLogLevelResponse
);
export var UpdateNetworkAnalyzerConfiguration = op(
  n0,
  _UNAC,
  {
    [_h]: ["PATCH", "/network-analyzer-configurations/{ConfigurationName}", 204],
  },
  () => UpdateNetworkAnalyzerConfigurationRequest,
  () => UpdateNetworkAnalyzerConfigurationResponse
);
