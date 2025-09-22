// smithy-typescript generated code
import { error, op, sim, struct } from "@smithy/core/schema";

import { ResourceNotFoundException as __ResourceNotFoundException } from "../models/index";
import { _c, _CCT, _CCTR, _CCTRr, _CT, _e, _en, _h, _hE, _m, _N, _RNFE, _T, _WSH, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var Token = sim(n0, _T, 0, 8);
export var CreateCliTokenRequest = struct(n0, _CCTR, 0, [_N], [[0, 1]]);
export var CreateCliTokenResponse = struct(n0, _CCTRr, 0, [_CT, _WSH], [[() => Token, 0], 0]);
export var ResourceNotFoundException = error(
  n0,
  _RNFE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_m],
  [0],

  __ResourceNotFoundException
);
export var CreateCliToken = op(
  n0,
  _CCT,
  {
    [_h]: ["POST", "/clitoken/{Name}", 200],
    [_en]: ["env."],
  },
  () => CreateCliTokenRequest,
  () => CreateCliTokenResponse
);
