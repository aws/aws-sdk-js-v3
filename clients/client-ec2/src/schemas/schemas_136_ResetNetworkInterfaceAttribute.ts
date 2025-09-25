// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DR, _dR, _eQN, _NII, _nII, _RNIA, _RNIAR, _SDC, _sDC, _xN, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var ResetNetworkInterfaceAttributeRequest = struct(
  n0,
  _RNIAR,
  0,
  [_DR, _NII, _SDC],
  [
    [
      2,
      {
        [_eQN]: `DryRun`,
        [_xN]: _dR,
      },
    ],
    [
      0,
      {
        [_eQN]: `NetworkInterfaceId`,
        [_xN]: _nII,
      },
    ],
    [
      0,
      {
        [_eQN]: `SourceDestCheck`,
        [_xN]: _sDC,
      },
    ],
  ]
);
export var ResetNetworkInterfaceAttribute = op(
  n0,
  _RNIA,
  0,
  () => ResetNetworkInterfaceAttributeRequest,
  () => Unit
);
