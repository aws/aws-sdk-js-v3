// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _h, _nII, _nOSs, _USNP, _USNPI, _USNPO, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var UpdateSolNetworkPackageInput = struct(n0, _USNPI, 0, [_nII, _nOSs], [[0, 1], 0]);
export var UpdateSolNetworkPackageOutput = struct(n0, _USNPO, 0, [_nOSs], [0]);
export var UpdateSolNetworkPackage = op(
  n0,
  _USNP,
  {
    [_h]: ["PATCH", "/sol/nsd/v1/ns_descriptors/{nsdInfoId}", 200],
  },
  () => UpdateSolNetworkPackageInput,
  () => UpdateSolNetworkPackageOutput
);
