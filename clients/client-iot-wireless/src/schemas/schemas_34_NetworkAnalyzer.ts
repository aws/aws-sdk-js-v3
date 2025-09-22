// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _Ar,
  _CNo,
  _DNAC,
  _DNACR,
  _DNACRe,
  _h,
  _hQ,
  _LNAC,
  _LNACR,
  _LNACRi,
  _MR,
  _mR,
  _N,
  _NAC,
  _NACL,
  _NT,
  _nT,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteNetworkAnalyzerConfigurationRequest = struct(n0, _DNACR, 0, [_CNo], [[0, 1]]);
export var DeleteNetworkAnalyzerConfigurationResponse = struct(n0, _DNACRe, 0, [], []);
export var ListNetworkAnalyzerConfigurationsRequest = struct(
  n0,
  _LNACR,
  0,
  [_MR, _NT],
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
  ]
);
export var ListNetworkAnalyzerConfigurationsResponse = struct(
  n0,
  _LNACRi,
  0,
  [_NT, _NACL],
  [0, () => NetworkAnalyzerConfigurationList]
);
export var NetworkAnalyzerConfigurations = struct(n0, _NAC, 0, [_Ar, _N], [0, 0]);
export var NetworkAnalyzerConfigurationList = list(n0, _NACL, 0, () => NetworkAnalyzerConfigurations);
export var DeleteNetworkAnalyzerConfiguration = op(
  n0,
  _DNAC,
  {
    [_h]: ["DELETE", "/network-analyzer-configurations/{ConfigurationName}", 204],
  },
  () => DeleteNetworkAnalyzerConfigurationRequest,
  () => DeleteNetworkAnalyzerConfigurationResponse
);
export var ListNetworkAnalyzerConfigurations = op(
  n0,
  _LNAC,
  {
    [_h]: ["GET", "/network-analyzer-configurations", 200],
  },
  () => ListNetworkAnalyzerConfigurationsRequest,
  () => ListNetworkAnalyzerConfigurationsResponse
);
