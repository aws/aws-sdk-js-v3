// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DNI, _DNIR, _DR, _dR, _eQN, _NII, _nII, _xN, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteNetworkInterfaceRequest = struct(
  n0,
  _DNIR,
  0,
  [_DR, _NII],
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
  ]
);
export var DeleteNetworkInterface = op(
  n0,
  _DNI,
  0,
  () => DeleteNetworkInterfaceRequest,
  () => Unit
);
