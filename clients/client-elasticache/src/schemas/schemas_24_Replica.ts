// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { InvalidCacheClusterStateFault as __InvalidCacheClusterStateFault } from "../models/index";
import {
  _aQE,
  _c,
  _CC,
  _CCIa,
  _CNITR,
  _CSMr,
  _CSr,
  _CSRr,
  _DCC,
  _DCCM,
  _DCCR,
  _e,
  _FSI,
  _hE,
  _ICCSF,
  _KKI,
  _m,
  _RCC,
  _RCCM,
  _RCCR,
  _RGIe,
  _SN,
  _Sn,
  _T,
  n0,
  TagList,
} from "./schemas_0";
import { CacheCluster, CacheNodeIdsList } from "./schemas_11_Cache";
import { Snapshot } from "./schemas_17_Snapshot";

/* eslint no-var: 0 */

export var CreateSnapshotMessage = struct(
  n0,
  _CSMr,
  0,
  [_RGIe, _CCIa, _SN, _KKI, _T],
  [0, 0, 0, 0, [() => TagList, 0]]
);
export var CreateSnapshotResult = struct(n0, _CSRr, 0, [_Sn], [[() => Snapshot, 0]]);
export var DeleteCacheClusterMessage = struct(n0, _DCCM, 0, [_CCIa, _FSI], [0, 0]);
export var DeleteCacheClusterResult = struct(n0, _DCCR, 0, [_CC], [[() => CacheCluster, 0]]);
export var InvalidCacheClusterStateFault = error(
  n0,
  _ICCSF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidCacheClusterState`, 400],
  },
  [_m],
  [0],

  __InvalidCacheClusterStateFault
);
export var RebootCacheClusterMessage = struct(n0, _RCCM, 0, [_CCIa, _CNITR], [0, [() => CacheNodeIdsList, 0]]);
export var RebootCacheClusterResult = struct(n0, _RCCR, 0, [_CC], [[() => CacheCluster, 0]]);
export var CreateSnapshot = op(
  n0,
  _CSr,
  0,
  () => CreateSnapshotMessage,
  () => CreateSnapshotResult
);
export var DeleteCacheCluster = op(
  n0,
  _DCC,
  0,
  () => DeleteCacheClusterMessage,
  () => DeleteCacheClusterResult
);
export var RebootCacheCluster = op(
  n0,
  _RCC,
  0,
  () => RebootCacheClusterMessage,
  () => RebootCacheClusterResult
);
