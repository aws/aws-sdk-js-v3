// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _aAss,
  _aIs,
  _ass,
  _cN,
  _hQ,
  _ht,
  _LPIA,
  _LPIAR,
  _LPIARi,
  _mR,
  _nam,
  _nT,
  _oAw,
  _PIAS,
  _PIASo,
  _sA,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ListPodIdentityAssociationsRequest = struct(
  n0,
  _LPIAR,
  0,
  [_cN, _nam, _sA, _mR, _nT],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _nam,
      },
    ],
    [
      0,
      {
        [_hQ]: _sA,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
  ]
);
export var ListPodIdentityAssociationsResponse = struct(
  n0,
  _LPIARi,
  0,
  [_ass, _nT],
  [() => PodIdentityAssociationSummaries, 0]
);
export var PodIdentityAssociationSummary = struct(
  n0,
  _PIAS,
  0,
  [_cN, _nam, _sA, _aAss, _aIs, _oAw],
  [0, 0, 0, 0, 0, 0]
);
export var PodIdentityAssociationSummaries = list(n0, _PIASo, 0, () => PodIdentityAssociationSummary);
export var ListPodIdentityAssociations = op(
  n0,
  _LPIA,
  {
    [_ht]: ["GET", "/clusters/{clusterName}/pod-identity-associations", 200],
  },
  () => ListPodIdentityAssociationsRequest,
  () => ListPodIdentityAssociationsResponse
);
