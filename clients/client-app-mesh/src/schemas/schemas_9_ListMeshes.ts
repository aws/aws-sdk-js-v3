// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ar,
  _cA,
  _hQ,
  _ht,
  _l,
  _LM,
  _LMI,
  _LMO,
  _lUA,
  _mes,
  _ML,
  _mN,
  _mO,
  _MRe,
  _nT,
  _rO,
  _ve,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ListMeshesInput = struct(
  n0,
  _LMI,
  0,
  [_nT, _l],
  [
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _l,
      },
    ],
  ]
);
export var ListMeshesOutput = struct(n0, _LMO, 0, [_mes, _nT], [() => MeshList, 0]);
export var MeshRef = struct(n0, _MRe, 0, [_mN, _mO, _rO, _ar, _ve, _cA, _lUA], [0, 0, 0, 0, 1, 4, 4]);
export var MeshList = list(n0, _ML, 0, () => MeshRef);
export var ListMeshes = op(
  n0,
  _LM,
  {
    [_ht]: ["GET", "/v20190125/meshes", 200],
  },
  () => ListMeshesInput,
  () => ListMeshesOutput
);
