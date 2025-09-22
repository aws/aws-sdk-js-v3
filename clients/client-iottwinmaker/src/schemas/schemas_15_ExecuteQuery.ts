// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { QueryTimeoutException as __QueryTimeoutException } from "../models/index";
import {
  _c,
  _CD,
  _cD,
  _CDo,
  _e,
  _end,
  _EQ,
  _EQR,
  _EQRx,
  _h,
  _hE,
  _m,
  _mR,
  _n,
  _nTe,
  _qS,
  _QTE,
  _rD,
  _Ro,
  _ro,
  _Row,
  _t,
  _wI,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ColumnDescription = struct(n0, _CD, 0, [_n, _t], [0, 0]);
export var ExecuteQueryRequest = struct(n0, _EQR, 0, [_wI, _qS, _mR, _nTe], [0, 0, 1, 0]);
export var ExecuteQueryResponse = struct(n0, _EQRx, 0, [_cD, _ro, _nTe], [() => ColumnDescriptions, () => Rows, 0]);
export var QueryTimeoutException = error(
  n0,
  _QTE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __QueryTimeoutException
);
export var Row = struct(n0, _Ro, 0, [_rD], [64 | 15]);
export var ColumnDescriptions = list(n0, _CDo, 0, () => ColumnDescription);
export var RowData = 64 | 15;

export var Rows = list(n0, _Row, 0, () => Row);
export var ExecuteQuery = op(
  n0,
  _EQ,
  {
    [_h]: ["POST", "/queries/execution", 200],
    [_end]: ["api."],
  },
  () => ExecuteQueryRequest,
  () => ExecuteQueryResponse
);
