// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _ASL, _ASLR, _ASLRs, _h, _hQ, _pA, _sLA, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var AssociateSessionLoggerRequest = struct(
  n0,
  _ASLR,
  0,
  [_pA, _sLA],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _sLA,
      },
    ],
  ]
);
export var AssociateSessionLoggerResponse = struct(n0, _ASLRs, 0, [_pA, _sLA], [0, 0]);
export var AssociateSessionLogger = op(
  n0,
  _ASL,
  {
    [_h]: ["PUT", "/portals/{portalArn+}/sessionLogger", 200],
  },
  () => AssociateSessionLoggerRequest,
  () => AssociateSessionLoggerResponse
);
