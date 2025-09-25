// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CLCTFR,
  _CLCTFRR,
  _CLCTFRRr,
  _DLC,
  _LCC,
  _LCTI,
  _PCI,
  _PCL,
  _PCLI,
  _PCr,
  _PCT,
  _RA,
  _SLC,
  _UO,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateLicenseConversionTaskForResourceRequest = struct(
  n0,
  _CLCTFRR,
  0,
  [_RA, _SLC, _DLC],
  [0, () => LicenseConversionContext, () => LicenseConversionContext]
);
export var CreateLicenseConversionTaskForResourceResponse = struct(n0, _CLCTFRRr, 0, [_LCTI], [0]);
export var LicenseConversionContext = struct(n0, _LCC, 0, [_UO, _PCr], [0, () => ProductCodeList]);
export var ProductCodeListItem = struct(n0, _PCLI, 0, [_PCI, _PCT], [0, 0]);
export var ProductCodeList = list(n0, _PCL, 0, () => ProductCodeListItem);
export var CreateLicenseConversionTaskForResource = op(
  n0,
  _CLCTFR,
  0,
  () => CreateLicenseConversionTaskForResourceRequest,
  () => CreateLicenseConversionTaskForResourceResponse
);
