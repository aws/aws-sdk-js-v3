// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _cT,
  _DM,
  _DMe,
  _DMI,
  _DMIe,
  _DMO,
  _DMOe,
  _EF,
  _eF,
  _hQ,
  _ht,
  _iP,
  _MD,
  _me,
  _met,
  _mN,
  _mO,
  _MS,
  _MSD,
  _MSe,
  _s,
  _sD,
  _st,
  _ty,
  _UM,
  _UMI,
  _UMO,
  n0,
  ResourceMetadata,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteMeshInput = struct(n0, _DMI, 0, [_mN], [[0, 1]]);
export var DeleteMeshOutput = struct(n0, _DMO, 0, [_me], [[() => MeshData, 16]]);
export var DescribeMeshInput = struct(
  n0,
  _DMIe,
  0,
  [_mN, _mO],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _mO,
      },
    ],
  ]
);
export var DescribeMeshOutput = struct(n0, _DMOe, 0, [_me], [[() => MeshData, 16]]);
export var EgressFilter = struct(n0, _EF, 0, [_ty], [0]);
export var MeshData = struct(
  n0,
  _MD,
  0,
  [_mN, _s, _met, _st],
  [0, () => MeshSpec, () => ResourceMetadata, () => MeshStatus]
);
export var MeshServiceDiscovery = struct(n0, _MSD, 0, [_iP], [0]);
export var MeshSpec = struct(n0, _MS, 0, [_eF, _sD], [() => EgressFilter, () => MeshServiceDiscovery]);
export var MeshStatus = struct(n0, _MSe, 0, [_st], [0]);
export var UpdateMeshInput = struct(n0, _UMI, 0, [_mN, _s, _cT], [[0, 1], () => MeshSpec, [0, 4]]);
export var UpdateMeshOutput = struct(n0, _UMO, 0, [_me], [[() => MeshData, 16]]);
export var DeleteMesh = op(
  n0,
  _DM,
  {
    [_ht]: ["DELETE", "/v20190125/meshes/{meshName}", 200],
  },
  () => DeleteMeshInput,
  () => DeleteMeshOutput
);
export var DescribeMesh = op(
  n0,
  _DMe,
  {
    [_ht]: ["GET", "/v20190125/meshes/{meshName}", 200],
  },
  () => DescribeMeshInput,
  () => DescribeMeshOutput
);
export var UpdateMesh = op(
  n0,
  _UM,
  {
    [_ht]: ["PUT", "/v20190125/meshes/{meshName}", 200],
  },
  () => UpdateMeshInput,
  () => UpdateMeshOutput
);
