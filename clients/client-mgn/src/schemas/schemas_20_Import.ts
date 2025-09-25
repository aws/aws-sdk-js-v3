// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _aID,
  _aIDc,
  _eD,
  _eDTr,
  _eLTID,
  _eT,
  _ht,
  _i,
  _IE,
  _IED,
  _iID,
  _ITE,
  _LIE,
  _LIER,
  _LIERi,
  _mR,
  _nT,
  _rE,
  _rN,
  _sSIDo,
  _wID,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ImportErrorData = struct(n0, _IED, 0, [_sSIDo, _aID, _wID, _eLTID, _rN, _rE, _aIDc], [0, 0, 0, 0, 1, 0, 0]);
export var ImportTaskError = struct(n0, _ITE, 0, [_eDTr, _eT, _eD], [0, 0, () => ImportErrorData]);
export var ListImportErrorsRequest = struct(n0, _LIER, 0, [_iID, _mR, _nT], [0, 1, 0]);
export var ListImportErrorsResponse = struct(n0, _LIERi, 0, [_i, _nT], [() => ImportErrors, 0]);
export var ImportErrors = list(n0, _IE, 0, () => ImportTaskError);
export var ListImportErrors = op(
  n0,
  _LIE,
  {
    [_ht]: ["POST", "/ListImportErrors", 200],
  },
  () => ListImportErrorsRequest,
  () => ListImportErrorsResponse
);
