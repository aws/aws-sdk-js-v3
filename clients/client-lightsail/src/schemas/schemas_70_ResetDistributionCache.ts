// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _cT, _dN, _ht, _op, _RDC, _RDCR, _RDCRe, _s, n0, Operation } from "./schemas_0";

/* eslint no-var: 0 */

export var ResetDistributionCacheRequest = struct(n0, _RDCR, 0, [_dN], [0]);
export var ResetDistributionCacheResult = struct(n0, _RDCRe, 0, [_s, _cT, _op], [0, 4, () => Operation]);
export var ResetDistributionCache = op(
  n0,
  _RDC,
  {
    [_ht]: ["POST", "/ls/api/2016-11-28/ResetDistributionCache", 200],
  },
  () => ResetDistributionCacheRequest,
  () => ResetDistributionCacheResult
);
