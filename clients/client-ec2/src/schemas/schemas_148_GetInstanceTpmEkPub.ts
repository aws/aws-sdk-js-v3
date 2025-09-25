// smithy-typescript generated code
import { op, sim, struct } from "@smithy/core/schema";

import {
  _DR,
  _EPKV,
  _eQN,
  _GITEP,
  _GITEPR,
  _GITEPRe,
  _II,
  _iI,
  _KF,
  _kF,
  _KT,
  _kT,
  _KV,
  _kV,
  _xN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var EkPubKeyValue = sim(n0, _EPKV, 0, 8);
export var GetInstanceTpmEkPubRequest = struct(
  n0,
  _GITEPR,
  0,
  [_II, _KT, _KF, _DR],
  [
    [
      0,
      {
        [_xN]: _II,
      },
    ],
    0,
    0,
    2,
  ]
);
export var GetInstanceTpmEkPubResult = struct(
  n0,
  _GITEPRe,
  0,
  [_II, _KT, _KF, _KV],
  [
    [
      0,
      {
        [_eQN]: `InstanceId`,
        [_xN]: _iI,
      },
    ],
    [
      0,
      {
        [_eQN]: `KeyType`,
        [_xN]: _kT,
      },
    ],
    [
      0,
      {
        [_eQN]: `KeyFormat`,
        [_xN]: _kF,
      },
    ],
    [
      () => EkPubKeyValue,
      {
        [_eQN]: `KeyValue`,
        [_xN]: _kV,
      },
    ],
  ]
);
export var GetInstanceTpmEkPub = op(
  n0,
  _GITEP,
  0,
  () => GetInstanceTpmEkPubRequest,
  () => GetInstanceTpmEkPubResult
);
