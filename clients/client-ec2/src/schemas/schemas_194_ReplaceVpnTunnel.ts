// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _APM, _DR, _eQN, _R, _r, _RVT, _RVTR, _RVTRe, _VCI, _VTOIA, _xN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ReplaceVpnTunnelRequest = struct(n0, _RVTR, 0, [_VCI, _VTOIA, _APM, _DR], [0, 0, 2, 2]);
export var ReplaceVpnTunnelResult = struct(
  n0,
  _RVTRe,
  0,
  [_R],
  [
    [
      2,
      {
        [_eQN]: `Return`,
        [_xN]: _r,
      },
    ],
  ]
);
export var ReplaceVpnTunnel = op(
  n0,
  _RVT,
  0,
  () => ReplaceVpnTunnelRequest,
  () => ReplaceVpnTunnelResult
);
