// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _Co, _co, _CVEI, _CVES, _DCVE, _DCVER, _DCVERe, _DR, _eQN, _Me, _me, _Sta, _sta, _xN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ClientVpnEndpointStatus = struct(
  n0,
  _CVES,
  0,
  [_Co, _Me],
  [
    [
      0,
      {
        [_eQN]: `Code`,
        [_xN]: _co,
      },
    ],
    [
      0,
      {
        [_eQN]: `Message`,
        [_xN]: _me,
      },
    ],
  ]
);
export var DeleteClientVpnEndpointRequest = struct(n0, _DCVER, 0, [_CVEI, _DR], [0, 2]);
export var DeleteClientVpnEndpointResult = struct(
  n0,
  _DCVERe,
  0,
  [_Sta],
  [
    [
      () => ClientVpnEndpointStatus,
      {
        [_eQN]: `Status`,
        [_xN]: _sta,
      },
    ],
  ]
);
export var DeleteClientVpnEndpoint = op(
  n0,
  _DCVE,
  0,
  () => DeleteClientVpnEndpointRequest,
  () => DeleteClientVpnEndpointResult
);
