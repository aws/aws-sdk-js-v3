// smithy-typescript generated code
import { struct } from "@smithy/core/schema";

import { _EDv, _eDv, _EIv, _eQN, _EST, _eST, _II, _iI, _xN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var EventInformation = struct(
  n0,
  _EIv,
  0,
  [_EDv, _EST, _II],
  [
    [
      0,
      {
        [_eQN]: `EventDescription`,
        [_xN]: _eDv,
      },
    ],
    [
      0,
      {
        [_eQN]: `EventSubType`,
        [_xN]: _eST,
      },
    ],
    [
      0,
      {
        [_eQN]: `InstanceId`,
        [_xN]: _iI,
      },
    ],
  ]
);
