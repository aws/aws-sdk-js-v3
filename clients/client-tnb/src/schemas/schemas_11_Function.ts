// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _h, _oSp, _USFP, _USFPI, _USFPO, _vPI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var UpdateSolFunctionPackageInput = struct(n0, _USFPI, 0, [_vPI, _oSp], [[0, 1], 0]);
export var UpdateSolFunctionPackageOutput = struct(n0, _USFPO, 0, [_oSp], [0]);
export var UpdateSolFunctionPackage = op(
  n0,
  _USFP,
  {
    [_h]: ["PATCH", "/sol/vnfpkgm/v1/vnf_packages/{vnfPkgId}", 200],
  },
  () => UpdateSolFunctionPackageInput,
  () => UpdateSolFunctionPackageOutput
);
