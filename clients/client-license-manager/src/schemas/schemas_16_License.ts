// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _D,
  _DWNF,
  _LC,
  _LCA,
  _LCHL,
  _LCS,
  _LR,
  _N,
  _PI,
  _PIF,
  _PIFC,
  _PIFL,
  _PIFN,
  _PIFV,
  _PIL,
  _RT,
  _ULC,
  _ULCR,
  _ULCRp,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ProductInformation = struct(n0, _PI, 0, [_RT, _PIFL], [0, () => ProductInformationFilterList]);
export var ProductInformationFilter = struct(n0, _PIF, 0, [_PIFN, _PIFV, _PIFC], [0, 64 | 0, 0]);
export var UpdateLicenseConfigurationRequest = struct(
  n0,
  _ULCR,
  0,
  [_LCA, _LCS, _LR, _LC, _LCHL, _N, _D, _PIL, _DWNF],
  [0, 0, 64 | 0, 1, 2, 0, 0, () => ProductInformationList, 2]
);
export var UpdateLicenseConfigurationResponse = struct(n0, _ULCRp, 0, [], []);
export var ProductInformationFilterList = list(n0, _PIFL, 0, () => ProductInformationFilter);
export var ProductInformationList = list(n0, _PIL, 0, () => ProductInformation);
export var StringList = 64 | 0;

export var UpdateLicenseConfiguration = op(
  n0,
  _ULC,
  0,
  () => UpdateLicenseConfigurationRequest,
  () => UpdateLicenseConfigurationResponse
);
