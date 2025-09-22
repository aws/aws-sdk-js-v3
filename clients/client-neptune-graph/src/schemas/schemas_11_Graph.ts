// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { ServiceQuotaExceededException as __ServiceQuotaExceededException } from "../models/index";
import {
  _c,
  _CPGE,
  _CPGEI,
  _CPGEO,
  _e,
  _gIr,
  _h,
  _hE,
  _m,
  _qC,
  _rI,
  _rT,
  _sCe,
  _sI,
  _SQEE,
  _st,
  _vEI,
  _vI,
  _vSGI,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreatePrivateGraphEndpointInput = struct(
  n0,
  _CPGEI,
  0,
  [_gIr, _vI, _sI, _vSGI],
  [[0, 1], 0, 64 | 0, 64 | 0]
);
export var CreatePrivateGraphEndpointOutput = struct(n0, _CPGEO, 0, [_vI, _sI, _st, _vEI], [0, 64 | 0, 0, 0]);
export var ServiceQuotaExceededException = error(
  n0,
  _SQEE,
  {
    [_e]: _c,
    [_hE]: 402,
  },
  [_m, _rI, _rT, _sCe, _qC],
  [0, 0, 0, 0, 0],

  __ServiceQuotaExceededException
);
export var SecurityGroupIds = 64 | 0;

export var CreatePrivateGraphEndpoint = op(
  n0,
  _CPGE,
  {
    [_h]: ["POST", "/graphs/{graphIdentifier}/endpoints/", 201],
  },
  () => CreatePrivateGraphEndpointInput,
  () => CreatePrivateGraphEndpointOutput
);
