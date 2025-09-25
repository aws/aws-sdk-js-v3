// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _GHCC, _GHCCR, _GHCCRe, _HCCe, _ht, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetHealthCheckCountRequest = struct(n0, _GHCCR, 0, [], []);
export var GetHealthCheckCountResponse = struct(n0, _GHCCRe, 0, [_HCCe], [1]);
export var GetHealthCheckCount = op(
  n0,
  _GHCC,
  {
    [_ht]: ["GET", "/2013-04-01/healthcheckcount", 200],
  },
  () => GetHealthCheckCountRequest,
  () => GetHealthCheckCountResponse
);
