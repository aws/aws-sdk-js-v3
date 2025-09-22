// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _AAS, _LCA, _LLSFR, _LLSFRR, _LLSFRRi, _LS, _LSi, _MR, _NT, _RA, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var LicenseSpecification = struct(n0, _LS, 0, [_LCA, _AAS], [0, 0]);
export var ListLicenseSpecificationsForResourceRequest = struct(n0, _LLSFRR, 0, [_RA, _MR, _NT], [0, 1, 0]);
export var ListLicenseSpecificationsForResourceResponse = struct(
  n0,
  _LLSFRRi,
  0,
  [_LSi, _NT],
  [() => LicenseSpecifications, 0]
);
export var LicenseSpecifications = list(n0, _LSi, 0, () => LicenseSpecification);
export var ListLicenseSpecificationsForResource = op(
  n0,
  _LLSFR,
  0,
  () => ListLicenseSpecificationsForResourceRequest,
  () => ListLicenseSpecificationsForResourceResponse
);
