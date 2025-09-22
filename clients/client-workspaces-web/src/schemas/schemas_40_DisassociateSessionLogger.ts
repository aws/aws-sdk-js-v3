// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DSLi, _DSLRi, _DSLRis, _h, _pA, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DisassociateSessionLoggerRequest = struct(n0, _DSLRi, 0, [_pA], [[0, 1]]);
export var DisassociateSessionLoggerResponse = struct(n0, _DSLRis, 0, [], []);
export var DisassociateSessionLogger = op(
  n0,
  _DSLi,
  {
    [_h]: ["DELETE", "/portals/{portalArn+}/sessionLogger", 200],
  },
  () => DisassociateSessionLoggerRequest,
  () => DisassociateSessionLoggerResponse
);
