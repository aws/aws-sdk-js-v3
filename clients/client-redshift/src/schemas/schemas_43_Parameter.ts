// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  ClusterParameterGroupAlreadyExistsFault as __ClusterParameterGroupAlreadyExistsFault,
  ClusterParameterGroupQuotaExceededFault as __ClusterParameterGroupQuotaExceededFault,
} from "../models/index";
import {
  _aQE,
  _c,
  _CCPG,
  _CCPGM,
  _CCPGR,
  _CPGAEF,
  _CPGl,
  _CPGQEF,
  _D,
  _e,
  _hE,
  _m,
  _PGF,
  _PGN,
  _T,
  n0,
  TagList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ClusterParameterGroup = struct(n0, _CPGl, 0, [_PGN, _PGF, _D, _T], [0, 0, 0, [() => TagList, 0]]);
export var ClusterParameterGroupAlreadyExistsFault = error(
  n0,
  _CPGAEF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`ClusterParameterGroupAlreadyExists`, 400],
  },
  [_m],
  [0],

  __ClusterParameterGroupAlreadyExistsFault
);
export var ClusterParameterGroupQuotaExceededFault = error(
  n0,
  _CPGQEF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`ClusterParameterGroupQuotaExceeded`, 400],
  },
  [_m],
  [0],

  __ClusterParameterGroupQuotaExceededFault
);
export var CreateClusterParameterGroupMessage = struct(
  n0,
  _CCPGM,
  0,
  [_PGN, _PGF, _D, _T],
  [0, 0, 0, [() => TagList, 0]]
);
export var CreateClusterParameterGroupResult = struct(n0, _CCPGR, 0, [_CPGl], [[() => ClusterParameterGroup, 0]]);
export var CreateClusterParameterGroup = op(
  n0,
  _CCPG,
  0,
  () => CreateClusterParameterGroupMessage,
  () => CreateClusterParameterGroupResult
);
