// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  ClusterNotFoundFault as __ClusterNotFoundFault,
  InvalidClusterStateFault as __InvalidClusterStateFault,
} from "../models/index";
import { _aQE, _c, _CNFF, _CNl, _e, _hE, _ICSF, _LANTU, _LANTUR, _LANTURi, _m, _SDNT, _SUNT, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ClusterNotFoundFault = error(
  n0,
  _CNFF,
  {
    [_e]: _c,
    [_hE]: 404,
    [_aQE]: [`ClusterNotFound`, 404],
  },
  [_m],
  [0],

  __ClusterNotFoundFault
);
export var InvalidClusterStateFault = error(
  n0,
  _ICSF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidClusterState`, 400],
  },
  [_m],
  [0],

  __InvalidClusterStateFault
);
export var ListAllowedNodeTypeUpdatesRequest = struct(n0, _LANTUR, 0, [_CNl], [0]);
export var ListAllowedNodeTypeUpdatesResponse = struct(n0, _LANTURi, 0, [_SUNT, _SDNT], [64 | 0, 64 | 0]);
export var ListAllowedNodeTypeUpdates = op(
  n0,
  _LANTU,
  0,
  () => ListAllowedNodeTypeUpdatesRequest,
  () => ListAllowedNodeTypeUpdatesResponse
);
