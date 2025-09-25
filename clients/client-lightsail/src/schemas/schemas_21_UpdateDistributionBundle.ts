// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _bIu, _dN, _ht, _op, _UDB, _UDBR, _UDBRp, n0, Operation } from "./schemas_0";

/* eslint no-var: 0 */

export var UpdateDistributionBundleRequest = struct(n0, _UDBR, 0, [_dN, _bIu], [0, 0]);
export var UpdateDistributionBundleResult = struct(n0, _UDBRp, 0, [_op], [() => Operation]);
export var UpdateDistributionBundle = op(
  n0,
  _UDB,
  {
    [_ht]: ["POST", "/ls/api/2016-11-28/UpdateDistributionBundle", 200],
  },
  () => UpdateDistributionBundleRequest,
  () => UpdateDistributionBundleResult
);
