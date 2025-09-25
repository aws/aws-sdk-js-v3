// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _AIs,
  _aIs,
  _AS,
  _aS,
  _DR,
  _dR,
  _eQN,
  _nAIe,
  _NAIew,
  _RRTA,
  _RRTAR,
  _RRTARe,
  _RTAS,
  _RTI,
  _rTI,
  _SMt,
  _sMt,
  _St,
  _st,
  _xN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ReplaceRouteTableAssociationRequest = struct(
  n0,
  _RRTAR,
  0,
  [_DR, _AIs, _RTI],
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
        [_eQN]: `RouteTableId`,
        [_xN]: _rTI,
      },
    ],
  ]
);
export var ReplaceRouteTableAssociationResult = struct(
  n0,
  _RRTARe,
  0,
  [_NAIew, _AS],
  [
    [
      0,
      {
        [_eQN]: `NewAssociationId`,
        [_xN]: _nAIe,
      },
    ],
    [
      () => RouteTableAssociationState,
      {
        [_eQN]: `AssociationState`,
        [_xN]: _aS,
      },
    ],
  ]
);
export var RouteTableAssociationState = struct(
  n0,
  _RTAS,
  0,
  [_St, _SMt],
  [
    [
      0,
      {
        [_eQN]: `State`,
        [_xN]: _st,
      },
    ],
    [
      0,
      {
        [_eQN]: `StatusMessage`,
        [_xN]: _sMt,
      },
    ],
  ]
);
export var ReplaceRouteTableAssociation = op(
  n0,
  _RRTA,
  0,
  () => ReplaceRouteTableAssociationRequest,
  () => ReplaceRouteTableAssociationResult
);
