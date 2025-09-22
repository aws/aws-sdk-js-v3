// smithy-typescript generated code
import { op, struct, struct as uni } from "@smithy/core/schema";

import {
  _a,
  _cAr,
  _CI,
  _CP,
  _cP,
  _DVCe,
  _DVCRes,
  _DVCResc,
  _EI,
  _eIk,
  _h,
  _i,
  _in,
  _n,
  _na,
  _nL,
  _s,
  _sCI,
  _t,
  _ta,
  _VC,
  _vC,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ContainerProvider = struct(n0, _CP, 0, [_t, _i, _in], [0, 0, () => ContainerInfo]);
export var DescribeVirtualClusterRequest = struct(n0, _DVCRes, 0, [_i], [[0, 1]]);
export var DescribeVirtualClusterResponse = struct(n0, _DVCResc, 0, [_vC], [() => VirtualCluster]);
export var EksInfo = struct(n0, _EI, 0, [_na, _nL], [0, 0]);
export var VirtualCluster = struct(
  n0,
  _VC,
  0,
  [_i, _n, _a, _s, _cP, _cAr, _ta, _sCI],
  [0, 0, 0, 0, () => ContainerProvider, 5, 128 | 0, 0]
);
export var ContainerInfo = uni(n0, _CI, 0, [_eIk], [() => EksInfo]);
export var DescribeVirtualCluster = op(
  n0,
  _DVCe,
  {
    [_h]: ["GET", "/virtualclusters/{id}", 200],
  },
  () => DescribeVirtualClusterRequest,
  () => DescribeVirtualClusterResponse
);
