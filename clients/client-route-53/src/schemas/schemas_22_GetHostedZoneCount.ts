// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _GHZC, _GHZCR, _GHZCRe, _ht, _HZCo, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetHostedZoneCountRequest = struct(n0, _GHZCR, 0, [], []);
export var GetHostedZoneCountResponse = struct(n0, _GHZCRe, 0, [_HZCo], [1]);
export var GetHostedZoneCount = op(
  n0,
  _GHZC,
  {
    [_ht]: ["GET", "/2013-04-01/hostedzonecount", 200],
  },
  () => GetHostedZoneCountRequest,
  () => GetHostedZoneCountResponse
);
