// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DSNP, _DSNPI, _h, _nII, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteSolNetworkPackageInput = struct(n0, _DSNPI, 0, [_nII], [[0, 1]]);
export var DeleteSolNetworkPackage = op(
  n0,
  _DSNP,
  {
    [_h]: ["DELETE", "/sol/nsd/v1/ns_descriptors/{nsdInfoId}", 204],
  },
  () => DeleteSolNetworkPackageInput,
  () => Unit
);
