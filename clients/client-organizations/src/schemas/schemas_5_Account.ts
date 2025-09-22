// smithy-typescript generated code
import { error, list, op, sim, struct } from "@smithy/core/schema";

import { CreateAccountStatusNotFoundException as __CreateAccountStatusNotFoundException } from "../models/index";
import {
  _AI,
  _AN,
  _c,
  _CAN,
  _CARI,
  _CAS,
  _CASNFE,
  _CASr,
  _CT,
  _DCAS,
  _DCASR,
  _DCASRe,
  _e,
  _FR,
  _GCAI,
  _hE,
  _I,
  _LCAS,
  _LCASR,
  _LCASRi,
  _M,
  _MR,
  _NT,
  _RT,
  _St,
  _Sta,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateAccountName = sim(n0, _CAN, 0, 8);
export var CreateAccountStatus = struct(
  n0,
  _CAS,
  0,
  [_I, _AN, _St, _RT, _CT, _AI, _GCAI, _FR],
  [0, [() => CreateAccountName, 0], 0, 4, 4, 0, 0, 0]
);
export var CreateAccountStatusNotFoundException = error(
  n0,
  _CASNFE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_M],
  [0],

  __CreateAccountStatusNotFoundException
);
export var DescribeCreateAccountStatusRequest = struct(n0, _DCASR, 0, [_CARI], [0]);
export var DescribeCreateAccountStatusResponse = struct(n0, _DCASRe, 0, [_CAS], [[() => CreateAccountStatus, 0]]);
export var ListCreateAccountStatusRequest = struct(n0, _LCASR, 0, [_Sta, _NT, _MR], [64 | 0, 0, 1]);
export var ListCreateAccountStatusResponse = struct(
  n0,
  _LCASRi,
  0,
  [_CASr, _NT],
  [[() => CreateAccountStatuses, 0], 0]
);
export var CreateAccountStates = 64 | 0;

export var CreateAccountStatuses = list(n0, _CASr, 0, [() => CreateAccountStatus, 0]);
export var DescribeCreateAccountStatus = op(
  n0,
  _DCAS,
  0,
  () => DescribeCreateAccountStatusRequest,
  () => DescribeCreateAccountStatusResponse
);
export var ListCreateAccountStatus = op(
  n0,
  _LCAS,
  0,
  () => ListCreateAccountStatusRequest,
  () => ListCreateAccountStatusResponse
);
