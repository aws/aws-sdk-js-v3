// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _ht, _iBVA, _IP, _IPL, _iPL, _LIP, _LIPR, _LIPRi, _mR, _nT, _pN, _pV, _rI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ImagePackage = struct(n0, _IP, 0, [_pN, _pV], [0, 0]);
export var ListImagePackagesRequest = struct(n0, _LIPR, 0, [_iBVA, _mR, _nT], [0, 1, 0]);
export var ListImagePackagesResponse = struct(n0, _LIPRi, 0, [_rI, _iPL, _nT], [0, () => ImagePackageList, 0]);
export var ImagePackageList = list(n0, _IPL, 0, () => ImagePackage);
export var ListImagePackages = op(
  n0,
  _LIP,
  {
    [_ht]: ["POST", "/ListImagePackages", 200],
  },
  () => ListImagePackagesRequest,
  () => ListImagePackagesResponse
);
