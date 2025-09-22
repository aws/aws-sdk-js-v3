// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { EKSRequestThrottledException as __EKSRequestThrottledException } from "../models/index";
import { _a, _cl, _cP, _cT, _CVC, _CVCR, _CVCRr, _EKSRTE, _er, _h, _hE, _i, _m, _n, _sCI, _ta, n0 } from "./schemas_0";
import { ContainerProvider } from "./schemas_4_Virtual";

/* eslint no-var: 0 */

export var CreateVirtualClusterRequest = struct(
  n0,
  _CVCR,
  0,
  [_n, _cP, _cT, _ta, _sCI],
  [0, () => ContainerProvider, [0, 4], 128 | 0, 0]
);
export var CreateVirtualClusterResponse = struct(n0, _CVCRr, 0, [_i, _n, _a], [0, 0, 0]);
export var EKSRequestThrottledException = error(
  n0,
  _EKSRTE,
  {
    [_er]: _cl,
    [_hE]: 429,
  },
  [_m],
  [0],

  __EKSRequestThrottledException
);
export var CreateVirtualCluster = op(
  n0,
  _CVC,
  {
    [_h]: ["POST", "/virtualclusters", 200],
  },
  () => CreateVirtualClusterRequest,
  () => CreateVirtualClusterResponse
);
