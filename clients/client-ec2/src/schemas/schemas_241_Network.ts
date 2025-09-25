// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _AIs,
  _aIs,
  _DNA,
  _DNAE,
  _DNAER,
  _DNAR,
  _DR,
  _dR,
  _E,
  _e,
  _eQN,
  _NAI,
  _nAI,
  _nAIe,
  _NAIew,
  _rN,
  _RNAA,
  _RNAAR,
  _RNAARe,
  _RNu,
  _xN,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteNetworkAclEntryRequest = struct(
  n0,
  _DNAER,
  0,
  [_DR, _NAI, _RNu, _E],
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
        [_eQN]: `NetworkAclId`,
        [_xN]: _nAI,
      },
    ],
    [
      1,
      {
        [_eQN]: `RuleNumber`,
        [_xN]: _rN,
      },
    ],
    [
      2,
      {
        [_eQN]: `Egress`,
        [_xN]: _e,
      },
    ],
  ]
);
export var DeleteNetworkAclRequest = struct(
  n0,
  _DNAR,
  0,
  [_DR, _NAI],
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
        [_eQN]: `NetworkAclId`,
        [_xN]: _nAI,
      },
    ],
  ]
);
export var ReplaceNetworkAclAssociationRequest = struct(
  n0,
  _RNAAR,
  0,
  [_DR, _AIs, _NAI],
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
        [_eQN]: `AssociationId`,
        [_xN]: _aIs,
      },
    ],
    [
      0,
      {
        [_eQN]: `NetworkAclId`,
        [_xN]: _nAI,
      },
    ],
  ]
);
export var ReplaceNetworkAclAssociationResult = struct(
  n0,
  _RNAARe,
  0,
  [_NAIew],
  [
    [
      0,
      {
        [_eQN]: `NewAssociationId`,
        [_xN]: _nAIe,
      },
    ],
  ]
);
export var DeleteNetworkAcl = op(
  n0,
  _DNA,
  0,
  () => DeleteNetworkAclRequest,
  () => Unit
);
export var DeleteNetworkAclEntry = op(
  n0,
  _DNAE,
  0,
  () => DeleteNetworkAclEntryRequest,
  () => Unit
);
export var ReplaceNetworkAclAssociation = op(
  n0,
  _RNAA,
  0,
  () => ReplaceNetworkAclAssociationRequest,
  () => ReplaceNetworkAclAssociationResult
);
