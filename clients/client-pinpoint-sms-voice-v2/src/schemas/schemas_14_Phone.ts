// smithy-typescript generated code
import { list, map, op, struct } from "@smithy/core/schema";

import {
  _CRS,
  _CRSU,
  _F,
  _GPCCRS,
  _GPCCRSR,
  _GPCCRSRe,
  _ICC,
  _LPOI,
  _LPOIR,
  _LPOIRi,
  _MR,
  _N,
  _NC,
  _NCu,
  _NT,
  _OI,
  _OIA,
  _OIM,
  _OIML,
  _OIr,
  _PA,
  _PCA,
  _PCCRS,
  _PCCRSI,
  _PCI,
  _PI,
  _PN,
  _POIF,
  _POIFL,
  _PS,
  _UPCCRS,
  _UPCCRSR,
  _UPCCRSRp,
  _Va,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GetProtectConfigurationCountryRuleSetRequest = struct(n0, _GPCCRSR, 0, [_PCI, _NC], [0, 0]);
export var GetProtectConfigurationCountryRuleSetResult = struct(
  n0,
  _GPCCRSRe,
  0,
  [_PCA, _PCI, _NC, _CRS],
  [0, 0, 0, () => ProtectConfigurationCountryRuleSet]
);
export var ListPoolOriginationIdentitiesRequest = struct(
  n0,
  _LPOIR,
  0,
  [_PI, _F, _NT, _MR],
  [0, () => PoolOriginationIdentitiesFilterList, 0, 1]
);
export var ListPoolOriginationIdentitiesResult = struct(
  n0,
  _LPOIRi,
  0,
  [_PA, _PI, _OIr, _NT],
  [0, 0, () => OriginationIdentityMetadataList, 0]
);
export var OriginationIdentityMetadata = struct(n0, _OIM, 0, [_OIA, _OI, _ICC, _NCu, _PN], [0, 0, 0, 64 | 0, 0]);
export var PoolOriginationIdentitiesFilter = struct(n0, _POIF, 0, [_N, _Va], [0, 64 | 0]);
export var ProtectConfigurationCountryRuleSetInformation = struct(n0, _PCCRSI, 0, [_PS], [0]);
export var UpdateProtectConfigurationCountryRuleSetRequest = struct(
  n0,
  _UPCCRSR,
  0,
  [_PCI, _NC, _CRSU],
  [0, 0, () => ProtectConfigurationCountryRuleSet]
);
export var UpdateProtectConfigurationCountryRuleSetResult = struct(
  n0,
  _UPCCRSRp,
  0,
  [_PCA, _PCI, _NC, _CRS],
  [0, 0, 0, () => ProtectConfigurationCountryRuleSet]
);
export var NumberCapabilityList = 64 | 0;

export var OriginationIdentityMetadataList = list(n0, _OIML, 0, () => OriginationIdentityMetadata);
export var PoolOriginationIdentitiesFilterList = list(n0, _POIFL, 0, () => PoolOriginationIdentitiesFilter);
export var ProtectConfigurationCountryRuleSet = map(
  n0,
  _PCCRS,
  0,
  0,
  () => ProtectConfigurationCountryRuleSetInformation
);
export var GetProtectConfigurationCountryRuleSet = op(
  n0,
  _GPCCRS,
  0,
  () => GetProtectConfigurationCountryRuleSetRequest,
  () => GetProtectConfigurationCountryRuleSetResult
);
export var ListPoolOriginationIdentities = op(
  n0,
  _LPOI,
  0,
  () => ListPoolOriginationIdentitiesRequest,
  () => ListPoolOriginationIdentitiesResult
);
export var UpdateProtectConfigurationCountryRuleSet = op(
  n0,
  _UPCCRS,
  0,
  () => UpdateProtectConfigurationCountryRuleSetRequest,
  () => UpdateProtectConfigurationCountryRuleSetResult
);
