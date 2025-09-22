// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _aMp,
  _aTp,
  _aV,
  _de,
  _dT,
  _GRDP,
  _GRDPR,
  _GRDPRe,
  _ht,
  _iM,
  _nPT,
  _o,
  _par,
  _pN,
  _pT,
  _pVa,
  _rDN,
  _RDP,
  _RDPL,
  _URDP,
  _URDPR,
  _URDPRp,
  n0,
  OperationList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GetRelationalDatabaseParametersRequest = struct(n0, _GRDPR, 0, [_rDN, _pT], [0, 0]);
export var GetRelationalDatabaseParametersResult = struct(
  n0,
  _GRDPRe,
  0,
  [_par, _nPT],
  [() => RelationalDatabaseParameterList, 0]
);
export var RelationalDatabaseParameter = struct(
  n0,
  _RDP,
  0,
  [_aV, _aMp, _aTp, _dT, _de, _iM, _pN, _pVa],
  [0, 0, 0, 0, 0, 2, 0, 0]
);
export var UpdateRelationalDatabaseParametersRequest = struct(
  n0,
  _URDPR,
  0,
  [_rDN, _par],
  [0, () => RelationalDatabaseParameterList]
);
export var UpdateRelationalDatabaseParametersResult = struct(n0, _URDPRp, 0, [_o], [() => OperationList]);
export var RelationalDatabaseParameterList = list(n0, _RDPL, 0, () => RelationalDatabaseParameter);
export var GetRelationalDatabaseParameters = op(
  n0,
  _GRDP,
  {
    [_ht]: ["POST", "/ls/api/2016-11-28/GetRelationalDatabaseParameters", 200],
  },
  () => GetRelationalDatabaseParametersRequest,
  () => GetRelationalDatabaseParametersResult
);
export var UpdateRelationalDatabaseParameters = op(
  n0,
  _URDP,
  {
    [_ht]: ["POST", "/ls/api/2016-11-28/UpdateRelationalDatabaseParameters", 200],
  },
  () => UpdateRelationalDatabaseParametersRequest,
  () => UpdateRelationalDatabaseParametersResult
);
