// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _cT, _dN, _GDLCR, _GDLCRR, _GDLCRRe, _ht, _s, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetDistributionLatestCacheResetRequest = struct(n0, _GDLCRR, 0, [_dN], [0]);
export var GetDistributionLatestCacheResetResult = struct(n0, _GDLCRRe, 0, [_s, _cT], [0, 4]);
export var GetDistributionLatestCacheReset = op(
  n0,
  _GDLCR,
  {
    [_ht]: ["POST", "/ls/api/2016-11-28/GetDistributionLatestCacheReset", 200],
  },
  () => GetDistributionLatestCacheResetRequest,
  () => GetDistributionLatestCacheResetResult
);
