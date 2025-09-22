// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AIl, _CDon, _CIo, _CPK, _CTA, _GC, _GCR, _GCRe, _h, _SE, _SPK, _STA, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ConnectionDetails = struct(n0, _CDon, 0, [_CPK, _SPK, _SE, _CTA, _STA, _AIl], [0, 0, 0, 0, 0, 64 | 0]);
export var GetConnectionRequest = struct(n0, _GCR, 0, [_CIo], [[0, 1]]);
export var GetConnectionResponse = struct(n0, _GCRe, 0, [_CIo, _CDon], [0, () => ConnectionDetails]);
export var CIDRList = 64 | 0;

export var GetConnection = op(
  n0,
  _GC,
  {
    [_h]: ["GET", "/connections/{ConnectionId}", 200],
  },
  () => GetConnectionRequest,
  () => GetConnectionResponse
);
