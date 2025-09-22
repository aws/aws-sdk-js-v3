// smithy-typescript generated code
import { op, sim, struct } from "@smithy/core/schema";

import {
  _CKP,
  _CKPR,
  _DR,
  _dR,
  _eQN,
  _KF,
  _KFe,
  _kFe,
  _KM,
  _kM,
  _KN,
  _kN,
  _KPe,
  _KPI,
  _kPI,
  _KT,
  _SUD,
  _T,
  _TS,
  _tS,
  _TSa,
  _xN,
  n0,
  TagList,
  TagSpecificationList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var SensitiveUserData = sim(n0, _SUD, 0, 8);
export var CreateKeyPairRequest = struct(
  n0,
  _CKPR,
  0,
  [_KN, _KT, _TS, _KF, _DR],
  [
    0,
    0,
    [
      () => TagSpecificationList,
      {
        [_xN]: _TSa,
      },
    ],
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
export var KeyPair = struct(
  n0,
  _KPe,
  0,
  [_KPI, _T, _KN, _KFe, _KM],
  [
    [
      0,
      {
        [_eQN]: `KeyPairId`,
        [_xN]: _kPI,
      },
    ],
    [
      () => TagList,
      {
        [_eQN]: `TagSet`,
        [_xN]: _tS,
      },
    ],
    [
      0,
      {
        [_eQN]: `KeyName`,
        [_xN]: _kN,
      },
    ],
    [
      0,
      {
        [_eQN]: `KeyFingerprint`,
        [_xN]: _kFe,
      },
    ],
    [
      () => SensitiveUserData,
      {
        [_eQN]: `KeyMaterial`,
        [_xN]: _kM,
      },
    ],
  ]
);
export var CreateKeyPair = op(
  n0,
  _CKP,
  0,
  () => CreateKeyPairRequest,
  () => KeyPair
);
