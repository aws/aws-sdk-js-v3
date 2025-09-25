// smithy-typescript generated code
import { list, map, op, struct } from "@smithy/core/schema";

import { _BE, _BEl, _BIN, _BR, _De, _GBR, _GBRR, _GBRRe, _h, _hQ, _LT, _RN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var BlacklistEntry = struct(n0, _BE, 0, [_RN, _LT, _De], [0, 4, 0]);
export var GetBlacklistReportsRequest = struct(
  n0,
  _GBRR,
  0,
  [_BIN],
  [
    [
      64 | 0,
      {
        [_hQ]: _BIN,
      },
    ],
  ]
);
export var GetBlacklistReportsResponse = struct(n0, _GBRRe, 0, [_BR], [() => BlacklistReport]);
export var BlacklistEntries = list(n0, _BEl, 0, () => BlacklistEntry);
export var BlacklistItemNames = 64 | 0;

export var BlacklistReport = map(n0, _BR, 0, 0, () => BlacklistEntries);
export var GetBlacklistReports = op(
  n0,
  _GBR,
  {
    [_h]: ["GET", "/v2/email/deliverability-dashboard/blacklist-report", 200],
  },
  () => GetBlacklistReportsRequest,
  () => GetBlacklistReportsResponse
);
