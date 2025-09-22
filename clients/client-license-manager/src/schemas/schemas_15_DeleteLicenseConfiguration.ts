// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DLCe, _DLCR, _DLCRe, _LCA, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteLicenseConfigurationRequest = struct(n0, _DLCR, 0, [_LCA], [0]);
export var DeleteLicenseConfigurationResponse = struct(n0, _DLCRe, 0, [], []);
export var DeleteLicenseConfiguration = op(
  n0,
  _DLCe,
  0,
  () => DeleteLicenseConfigurationRequest,
  () => DeleteLicenseConfigurationResponse
);
