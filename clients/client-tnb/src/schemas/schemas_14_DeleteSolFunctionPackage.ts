// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DSFP, _DSFPI, _h, _vPI, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteSolFunctionPackageInput = struct(n0, _DSFPI, 0, [_vPI], [[0, 1]]);
export var DeleteSolFunctionPackage = op(
  n0,
  _DSFP,
  {
    [_h]: ["DELETE", "/sol/vnfpkgm/v1/vnf_packages/{vnfPkgId}", 204],
  },
  () => DeleteSolFunctionPackageInput,
  () => Unit
);
