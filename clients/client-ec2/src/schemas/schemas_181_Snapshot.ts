// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DR, _DSBPA, _DSBPAR, _DSBPARi, _eQN, _ESBPA, _ESBPAR, _ESBPARn, _St, _st, _xN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DisableSnapshotBlockPublicAccessRequest = struct(n0, _DSBPAR, 0, [_DR], [2]);
export var DisableSnapshotBlockPublicAccessResult = struct(
  n0,
  _DSBPARi,
  0,
  [_St],
  [
    [
      0,
      {
        [_eQN]: `State`,
        [_xN]: _st,
      },
    ],
  ]
);
export var EnableSnapshotBlockPublicAccessRequest = struct(n0, _ESBPAR, 0, [_St, _DR], [0, 2]);
export var EnableSnapshotBlockPublicAccessResult = struct(
  n0,
  _ESBPARn,
  0,
  [_St],
  [
    [
      0,
      {
        [_eQN]: `State`,
        [_xN]: _st,
      },
    ],
  ]
);
export var DisableSnapshotBlockPublicAccess = op(
  n0,
  _DSBPA,
  0,
  () => DisableSnapshotBlockPublicAccessRequest,
  () => DisableSnapshotBlockPublicAccessResult
);
export var EnableSnapshotBlockPublicAccess = op(
  n0,
  _ESBPA,
  0,
  () => EnableSnapshotBlockPublicAccessRequest,
  () => EnableSnapshotBlockPublicAccessResult
);
