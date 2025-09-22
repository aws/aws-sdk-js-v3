// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _DR,
  _eQN,
  _GMPLA,
  _GMPLAR,
  _GMPLARe,
  _it,
  _MR,
  _NTe,
  _nTe,
  _PLA,
  _PLAre,
  _PLAS,
  _pLAS,
  _PLI,
  _rIe,
  _RIes,
  _rO,
  _ROe,
  _xN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GetManagedPrefixListAssociationsRequest = struct(n0, _GMPLAR, 0, [_DR, _PLI, _MR, _NTe], [2, 0, 1, 0]);
export var GetManagedPrefixListAssociationsResult = struct(
  n0,
  _GMPLARe,
  0,
  [_PLA, _NTe],
  [
    [
      () => PrefixListAssociationSet,
      {
        [_eQN]: `PrefixListAssociationSet`,
        [_xN]: _pLAS,
      },
    ],
    [
      0,
      {
        [_eQN]: `NextToken`,
        [_xN]: _nTe,
      },
    ],
  ]
);
export var PrefixListAssociation = struct(
  n0,
  _PLAre,
  0,
  [_RIes, _ROe],
  [
    [
      0,
      {
        [_eQN]: `ResourceId`,
        [_xN]: _rIe,
      },
    ],
    [
      0,
      {
        [_eQN]: `ResourceOwner`,
        [_xN]: _rO,
      },
    ],
  ]
);
export var PrefixListAssociationSet = list(n0, _PLAS, 0, [
  () => PrefixListAssociation,
  {
    [_xN]: _it,
  },
]);
export var GetManagedPrefixListAssociations = op(
  n0,
  _GMPLA,
  0,
  () => GetManagedPrefixListAssociationsRequest,
  () => GetManagedPrefixListAssociationsResult
);
