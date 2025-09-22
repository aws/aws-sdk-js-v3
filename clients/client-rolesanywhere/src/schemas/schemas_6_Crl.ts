// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _cA,
  _cAr,
  _CD,
  _cD,
  _CDR,
  _CDr,
  _cI,
  _cr,
  _crl,
  _DC,
  _DCi,
  _EC,
  _en,
  _GC,
  _h,
  _IC,
  _ICR,
  _LC,
  _LCR,
  _n,
  _nT,
  _SCR,
  _t,
  _tAA,
  _uA,
  _UC,
  _UCR,
  n0,
} from "./schemas_0";
import { ListRequest } from "./schemas_3_List";
import { TagList } from "./schemas_4_Resource";

/* eslint no-var: 0 */

export var CrlDetail = struct(n0, _CD, 0, [_cI, _cA, _n, _en, _cD, _tAA, _cAr, _uA], [0, 0, 0, 2, 21, 0, 5, 5]);
export var CrlDetailResponse = struct(n0, _CDR, 0, [_cr], [() => CrlDetail]);
export var ImportCrlRequest = struct(n0, _ICR, 0, [_n, _cD, _en, _t, _tAA], [0, 21, 2, [() => TagList, 0], 0]);
export var ListCrlsResponse = struct(n0, _LCR, 0, [_nT, _crl], [0, () => CrlDetails]);
export var ScalarCrlRequest = struct(n0, _SCR, 0, [_cI], [[0, 1]]);
export var UpdateCrlRequest = struct(n0, _UCR, 0, [_cI, _n, _cD], [[0, 1], 0, 21]);
export var CrlDetails = list(n0, _CDr, 0, () => CrlDetail);
export var DeleteCrl = op(
  n0,
  _DC,
  {
    [_h]: ["DELETE", "/crl/{crlId}", 200],
  },
  () => ScalarCrlRequest,
  () => CrlDetailResponse
);
export var DisableCrl = op(
  n0,
  _DCi,
  {
    [_h]: ["POST", "/crl/{crlId}/disable", 200],
  },
  () => ScalarCrlRequest,
  () => CrlDetailResponse
);
export var EnableCrl = op(
  n0,
  _EC,
  {
    [_h]: ["POST", "/crl/{crlId}/enable", 200],
  },
  () => ScalarCrlRequest,
  () => CrlDetailResponse
);
export var GetCrl = op(
  n0,
  _GC,
  {
    [_h]: ["GET", "/crl/{crlId}", 200],
  },
  () => ScalarCrlRequest,
  () => CrlDetailResponse
);
export var ImportCrl = op(
  n0,
  _IC,
  {
    [_h]: ["POST", "/crls", 201],
  },
  () => ImportCrlRequest,
  () => CrlDetailResponse
);
export var ListCrls = op(
  n0,
  _LC,
  {
    [_h]: ["GET", "/crls", 200],
  },
  () => ListRequest,
  () => ListCrlsResponse
);
export var UpdateCrl = op(
  n0,
  _UC,
  {
    [_h]: ["PATCH", "/crl/{crlId}", 200],
  },
  () => UpdateCrlRequest,
  () => CrlDetailResponse
);
