// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DDO, _DDOR, _DOI, _DR, _dR, _eQN, _xN, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteDhcpOptionsRequest = struct(
  n0,
  _DDOR,
  0,
  [_DOI, _DR],
  [
    0,
    [
      2,
      {
        [_eQN]: `DryRun`,
        [_xN]: _dR,
      },
    ],
  ]
);
export var DeleteDhcpOptions = op(
  n0,
  _DDO,
  0,
  () => DeleteDhcpOptionsRequest,
  () => Unit
);
