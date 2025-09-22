// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { NoSuchResource as __NoSuchResource } from "../models/index";
import {
  _c,
  _DIL,
  _DKG,
  _DKGR,
  _e,
  _ET,
  _GKG,
  _GKGC,
  _GKGCR,
  _GKGCRe,
  _GKGR,
  _GKGRe,
  _h,
  _hE,
  _hH,
  _hP,
  _hQ,
  _Id,
  _IM,
  _IM_,
  _KG,
  _KGC,
  _KGI,
  _LDBKG,
  _LDBKGR,
  _LDBKGRi,
  _M,
  _Ma,
  _MI,
  _NSR,
  _UKG,
  _UKGR,
  _UKGRp,
  _xN,
  n0,
  Unit,
} from "./schemas_0";
import { KeyGroup, KeyGroupConfig } from "./schemas_12_Key";
import { DistributionIdList } from "./schemas_39_ListDistributions";

/* eslint no-var: 0 */

export var DeleteKeyGroupRequest = struct(
  n0,
  _DKGR,
  0,
  [_Id, _IM],
  [
    [0, 1],
    [
      0,
      {
        [_hH]: _IM_,
      },
    ],
  ]
);
export var GetKeyGroupConfigRequest = struct(n0, _GKGCR, 0, [_Id], [[0, 1]]);
export var GetKeyGroupConfigResult = struct(
  n0,
  _GKGCRe,
  0,
  [_KGC, _ET],
  [
    [() => KeyGroupConfig, 16],
    [
      0,
      {
        [_hH]: _ET,
      },
    ],
  ]
);
export var GetKeyGroupRequest = struct(n0, _GKGR, 0, [_Id], [[0, 1]]);
export var GetKeyGroupResult = struct(
  n0,
  _GKGRe,
  0,
  [_KG, _ET],
  [
    [() => KeyGroup, 16],
    [
      0,
      {
        [_hH]: _ET,
      },
    ],
  ]
);
export var ListDistributionsByKeyGroupRequest = struct(
  n0,
  _LDBKGR,
  0,
  [_Ma, _MI, _KGI],
  [
    [
      0,
      {
        [_hQ]: _Ma,
      },
    ],
    [
      1,
      {
        [_hQ]: _MI,
      },
    ],
    [0, 1],
  ]
);
export var ListDistributionsByKeyGroupResult = struct(n0, _LDBKGRi, 0, [_DIL], [[() => DistributionIdList, 16]]);
export var NoSuchResource = error(
  n0,
  _NSR,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_M],
  [0],

  __NoSuchResource
);
export var UpdateKeyGroupRequest = struct(
  n0,
  _UKGR,
  0,
  [_KGC, _Id, _IM],
  [
    [
      () => KeyGroupConfig,
      {
        [_xN]: _KGC,
        [_hP]: 1,
      },
    ],
    [0, 1],
    [
      0,
      {
        [_hH]: _IM_,
      },
    ],
  ]
);
export var UpdateKeyGroupResult = struct(
  n0,
  _UKGRp,
  0,
  [_KG, _ET],
  [
    [() => KeyGroup, 16],
    [
      0,
      {
        [_hH]: _ET,
      },
    ],
  ]
);
export var DeleteKeyGroup = op(
  n0,
  _DKG,
  {
    [_h]: ["DELETE", "/2020-05-31/key-group/{Id}", 204],
  },
  () => DeleteKeyGroupRequest,
  () => Unit
);
export var GetKeyGroup = op(
  n0,
  _GKG,
  {
    [_h]: ["GET", "/2020-05-31/key-group/{Id}", 200],
  },
  () => GetKeyGroupRequest,
  () => GetKeyGroupResult
);
export var GetKeyGroupConfig = op(
  n0,
  _GKGC,
  {
    [_h]: ["GET", "/2020-05-31/key-group/{Id}/config", 200],
  },
  () => GetKeyGroupConfigRequest,
  () => GetKeyGroupConfigResult
);
export var ListDistributionsByKeyGroup = op(
  n0,
  _LDBKG,
  {
    [_h]: ["GET", "/2020-05-31/distributionsByKeyGroupId/{KeyGroupId}", 200],
  },
  () => ListDistributionsByKeyGroupRequest,
  () => ListDistributionsByKeyGroupResult
);
export var UpdateKeyGroup = op(
  n0,
  _UKG,
  {
    [_h]: ["PUT", "/2020-05-31/key-group/{Id}", 200],
  },
  () => UpdateKeyGroupRequest,
  () => UpdateKeyGroupResult
);
