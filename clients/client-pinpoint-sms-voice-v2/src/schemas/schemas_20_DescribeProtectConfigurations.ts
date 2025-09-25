// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AD,
  _CTr,
  _DPCe,
  _DPCRes,
  _DPCResc,
  _DPE,
  _F,
  _MR,
  _N,
  _NT,
  _PC,
  _PCA,
  _PCF,
  _PCFL,
  _PCI,
  _PCIL,
  _PCIr,
  _PCIro,
  _Va,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeProtectConfigurationsRequest = struct(
  n0,
  _DPCRes,
  0,
  [_PCIr, _F, _NT, _MR],
  [64 | 0, () => ProtectConfigurationFilterList, 0, 1]
);
export var DescribeProtectConfigurationsResult = struct(
  n0,
  _DPCResc,
  0,
  [_PC, _NT],
  [() => ProtectConfigurationInformationList, 0]
);
export var ProtectConfigurationFilter = struct(n0, _PCF, 0, [_N, _Va], [0, 64 | 0]);
export var ProtectConfigurationInformation = struct(n0, _PCIro, 0, [_PCA, _PCI, _CTr, _AD, _DPE], [0, 0, 4, 2, 2]);
export var ProtectConfigurationFilterList = list(n0, _PCFL, 0, () => ProtectConfigurationFilter);
export var ProtectConfigurationIdList = 64 | 0;

export var ProtectConfigurationInformationList = list(n0, _PCIL, 0, () => ProtectConfigurationInformation);
export var DescribeProtectConfigurations = op(
  n0,
  _DPCe,
  0,
  () => DescribeProtectConfigurationsRequest,
  () => DescribeProtectConfigurationsResult
);
