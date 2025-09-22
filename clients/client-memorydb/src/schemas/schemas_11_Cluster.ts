// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { MultiRegionClusterNotFoundFault as __MultiRegionClusterNotFoundFault } from "../models/index";
import { _aQE, _c, _e, _hE, _LAMRCU, _LAMRCUR, _LAMRCURi, _m, _MRCN, _MRCNFF, _SDNT, _SUNT, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ListAllowedMultiRegionClusterUpdatesRequest = struct(n0, _LAMRCUR, 0, [_MRCN], [0]);
export var ListAllowedMultiRegionClusterUpdatesResponse = struct(n0, _LAMRCURi, 0, [_SUNT, _SDNT], [64 | 0, 64 | 0]);
export var MultiRegionClusterNotFoundFault = error(
  n0,
  _MRCNFF,
  {
    [_e]: _c,
    [_hE]: 404,
    [_aQE]: [`MultiRegionClusterNotFound`, 404],
  },
  [_m],
  [0],

  __MultiRegionClusterNotFoundFault
);
export var ListAllowedMultiRegionClusterUpdates = op(
  n0,
  _LAMRCU,
  0,
  () => ListAllowedMultiRegionClusterUpdatesRequest,
  () => ListAllowedMultiRegionClusterUpdatesResponse
);
