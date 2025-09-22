// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _CV, _EU, _EUL, _EUn, _GLU, _GLUR, _GLURe, _LA, _LU, _MC, _N, _U, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var EntitlementUsage = struct(n0, _EU, 0, [_N, _CV, _MC, _U], [0, 0, 0, 0]);
export var GetLicenseUsageRequest = struct(n0, _GLUR, 0, [_LA], [0]);
export var GetLicenseUsageResponse = struct(n0, _GLURe, 0, [_LU], [() => LicenseUsage]);
export var LicenseUsage = struct(n0, _LU, 0, [_EUn], [() => EntitlementUsageList]);
export var EntitlementUsageList = list(n0, _EUL, 0, () => EntitlementUsage);
export var GetLicenseUsage = op(
  n0,
  _GLU,
  0,
  () => GetLicenseUsageRequest,
  () => GetLicenseUsageResponse
);
