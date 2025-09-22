// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _A,
  _CT,
  _CTr,
  _DPCRSNO,
  _DPCRSNOR,
  _DPCRSNORe,
  _DPN,
  _ET,
  _F,
  _ICC,
  _LPCRSNO,
  _LPCRSNOF,
  _LPCRSNOR,
  _LPCRSNORi,
  _MR,
  _N,
  _NT,
  _PCA,
  _PCI,
  _PCRSNO,
  _PCRSNOFI,
  _PCRSNOL,
  _PPCRSNO,
  _PPCRSNOR,
  _PPCRSNORu,
  _RSNO,
  _Va,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteProtectConfigurationRuleSetNumberOverrideRequest = struct(n0, _DPCRSNOR, 0, [_PCI, _DPN], [0, 0]);
export var DeleteProtectConfigurationRuleSetNumberOverrideResult = struct(
  n0,
  _DPCRSNORe,
  0,
  [_PCA, _PCI, _DPN, _CTr, _A, _ICC, _ET],
  [0, 0, 0, 4, 0, 0, 4]
);
export var ListProtectConfigurationRuleSetNumberOverridesRequest = struct(
  n0,
  _LPCRSNOR,
  0,
  [_PCI, _F, _NT, _MR],
  [0, () => ListProtectConfigurationRuleSetNumberOverrideFilter, 0, 1]
);
export var ListProtectConfigurationRuleSetNumberOverridesResult = struct(
  n0,
  _LPCRSNORi,
  0,
  [_PCA, _PCI, _RSNO, _NT],
  [0, 0, () => ProtectConfigurationRuleSetNumberOverrideList, 0]
);
export var ProtectConfigurationRuleSetNumberOverride = struct(
  n0,
  _PCRSNO,
  0,
  [_DPN, _CTr, _A, _ICC, _ET],
  [0, 4, 0, 0, 4]
);
export var ProtectConfigurationRuleSetNumberOverrideFilterItem = struct(n0, _PCRSNOFI, 0, [_N, _Va], [0, 64 | 0]);
export var PutProtectConfigurationRuleSetNumberOverrideRequest = struct(
  n0,
  _PPCRSNOR,
  0,
  [_CT, _PCI, _DPN, _A, _ET],
  [[0, 4], 0, 0, 0, 4]
);
export var PutProtectConfigurationRuleSetNumberOverrideResult = struct(
  n0,
  _PPCRSNORu,
  0,
  [_PCA, _PCI, _DPN, _CTr, _A, _ICC, _ET],
  [0, 0, 0, 4, 0, 0, 4]
);
export var ListProtectConfigurationRuleSetNumberOverrideFilter = list(
  n0,
  _LPCRSNOF,
  0,
  () => ProtectConfigurationRuleSetNumberOverrideFilterItem
);
export var ProtectConfigurationRuleSetNumberOverrideList = list(
  n0,
  _PCRSNOL,
  0,
  () => ProtectConfigurationRuleSetNumberOverride
);
export var DeleteProtectConfigurationRuleSetNumberOverride = op(
  n0,
  _DPCRSNO,
  0,
  () => DeleteProtectConfigurationRuleSetNumberOverrideRequest,
  () => DeleteProtectConfigurationRuleSetNumberOverrideResult
);
export var ListProtectConfigurationRuleSetNumberOverrides = op(
  n0,
  _LPCRSNO,
  0,
  () => ListProtectConfigurationRuleSetNumberOverridesRequest,
  () => ListProtectConfigurationRuleSetNumberOverridesResult
);
export var PutProtectConfigurationRuleSetNumberOverride = op(
  n0,
  _PPCRSNO,
  0,
  () => PutProtectConfigurationRuleSetNumberOverrideRequest,
  () => PutProtectConfigurationRuleSetNumberOverrideResult
);
