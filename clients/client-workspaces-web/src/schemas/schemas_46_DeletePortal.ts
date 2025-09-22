// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DP, _DPR, _DPRe, _h, _pA, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeletePortalRequest = struct(n0, _DPR, 0, [_pA], [[0, 1]]);
export var DeletePortalResponse = struct(n0, _DPRe, 0, [], []);
export var DeletePortal = op(
  n0,
  _DP,
  {
    [_h]: ["DELETE", "/portals/{portalArn+}", 200],
  },
  () => DeletePortalRequest,
  () => DeletePortalResponse
);
