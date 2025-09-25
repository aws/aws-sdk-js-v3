// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _cAre,
  _cBr,
  _cPI,
  _cPT,
  _eAEI,
  _h,
  _hQ,
  _LVC,
  _LVCR,
  _LVCRi,
  _mR,
  _nT,
  _st,
  _VCi,
  _vCi,
  n0,
} from "./schemas_0";
import { VirtualCluster } from "./schemas_4_Virtual";

/* eslint no-var: 0 */

export var ListVirtualClustersRequest = struct(
  n0,
  _LVCR,
  0,
  [_cPI, _cPT, _cAre, _cBr, _st, _mR, _nT, _eAEI],
  [
    [
      0,
      {
        [_hQ]: _cPI,
      },
    ],
    [
      0,
      {
        [_hQ]: _cPT,
      },
    ],
    [
      5,
      {
        [_hQ]: _cAre,
      },
    ],
    [
      5,
      {
        [_hQ]: _cBr,
      },
    ],
    [
      64 | 0,
      {
        [_hQ]: _st,
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
    [
      2,
      {
        [_hQ]: _eAEI,
      },
    ],
  ]
);
export var ListVirtualClustersResponse = struct(n0, _LVCRi, 0, [_vCi, _nT], [() => VirtualClusters, 0]);
export var VirtualClusters = list(n0, _VCi, 0, () => VirtualCluster);
export var VirtualClusterStates = 64 | 0;

export var ListVirtualClusters = op(
  n0,
  _LVC,
  {
    [_h]: ["GET", "/virtualclusters", 200],
  },
  () => ListVirtualClustersRequest,
  () => ListVirtualClustersResponse
);
