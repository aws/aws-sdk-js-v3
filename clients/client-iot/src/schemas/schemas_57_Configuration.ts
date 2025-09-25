// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _en, _GPC, _GPCR, _GPCRe, _h, _rA, _VUBJC, _vUBJC, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetPackageConfigurationRequest = struct(n0, _GPCR, 0, [], []);
export var GetPackageConfigurationResponse = struct(n0, _GPCRe, 0, [_vUBJC], [() => VersionUpdateByJobsConfig]);
export var VersionUpdateByJobsConfig = struct(n0, _VUBJC, 0, [_en, _rA], [2, 0]);
export var GetPackageConfiguration = op(
  n0,
  _GPC,
  {
    [_h]: ["GET", "/package-configuration", 200],
  },
  () => GetPackageConfigurationRequest,
  () => GetPackageConfigurationResponse
);
