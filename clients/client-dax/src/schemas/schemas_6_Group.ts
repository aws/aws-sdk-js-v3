// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  InvalidParameterGroupStateFault as __InvalidParameterGroupStateFault,
  ParameterGroupAlreadyExistsFault as __ParameterGroupAlreadyExistsFault,
  ParameterGroupQuotaExceededFault as __ParameterGroupQuotaExceededFault,
} from "../models/index";
import { _aQE, _c, _CPG, _CPGR, _CPGRr, _D, _e, _hE, _IPGSF, _m, _PG, _PGAEF, _PGN, _PGQEF, n0 } from "./schemas_0";
import { ParameterGroup } from "./schemas_9_Parameter";

/* eslint no-var: 0 */

export var CreateParameterGroupRequest = struct(n0, _CPGR, 0, [_PGN, _D], [0, 0]);
export var CreateParameterGroupResponse = struct(n0, _CPGRr, 0, [_PG], [() => ParameterGroup]);
export var InvalidParameterGroupStateFault = error(
  n0,
  _IPGSF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidParameterGroupState`, 400],
  },
  [_m],
  [0],

  __InvalidParameterGroupStateFault
);
export var ParameterGroupAlreadyExistsFault = error(
  n0,
  _PGAEF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`ParameterGroupAlreadyExists`, 400],
  },
  [_m],
  [0],

  __ParameterGroupAlreadyExistsFault
);
export var ParameterGroupQuotaExceededFault = error(
  n0,
  _PGQEF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`ParameterGroupQuotaExceeded`, 400],
  },
  [_m],
  [0],

  __ParameterGroupQuotaExceededFault
);
export var CreateParameterGroup = op(
  n0,
  _CPG,
  0,
  () => CreateParameterGroupRequest,
  () => CreateParameterGroupResponse
);
