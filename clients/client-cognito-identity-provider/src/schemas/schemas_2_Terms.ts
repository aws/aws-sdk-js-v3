// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { TermsExistsException as __TermsExistsException } from "../models/index";
import {
  _c,
  _CDr,
  _CI,
  _CT,
  _CTR,
  _CTRr,
  _DTe,
  _DTes,
  _DTR,
  _DTRe,
  _DTRes,
  _e,
  _En,
  _hE,
  _Li,
  _LMD,
  _LT,
  _LTR,
  _LTRi,
  _m,
  _MR,
  _NT,
  _T,
  _TDLT,
  _TDT,
  _TEE,
  _TI,
  _TN,
  _TS,
  _TTe,
  _UPI,
  _UTp,
  _UTR,
  _UTRp,
  ClientIdType,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateTermsRequest = struct(
  n0,
  _CTR,
  0,
  [_UPI, _CI, _TN, _TS, _En, _Li],
  [0, [() => ClientIdType, 0], 0, 0, 0, 128 | 0]
);
export var CreateTermsResponse = struct(n0, _CTRr, 0, [_T], [[() => TermsType, 0]]);
export var DeleteTermsRequest = struct(n0, _DTR, 0, [_TI, _UPI], [0, 0]);
export var DescribeTermsRequest = struct(n0, _DTRe, 0, [_TI, _UPI], [0, 0]);
export var DescribeTermsResponse = struct(n0, _DTRes, 0, [_T], [[() => TermsType, 0]]);
export var ListTermsRequest = struct(n0, _LTR, 0, [_UPI, _MR, _NT], [0, 1, 0]);
export var ListTermsResponse = struct(n0, _LTRi, 0, [_T, _NT], [() => TermsDescriptionListType, 0]);
export var TermsDescriptionType = struct(n0, _TDT, 0, [_TI, _TN, _En, _CDr, _LMD], [0, 0, 0, 4, 4]);
export var TermsExistsException = error(
  n0,
  _TEE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __TermsExistsException
);
export var TermsType = struct(
  n0,
  _TTe,
  0,
  [_TI, _UPI, _CI, _TN, _TS, _En, _Li, _CDr, _LMD],
  [0, 0, [() => ClientIdType, 0], 0, 0, 0, 128 | 0, 4, 4]
);
export var UpdateTermsRequest = struct(n0, _UTR, 0, [_TI, _UPI, _TN, _TS, _En, _Li], [0, 0, 0, 0, 0, 128 | 0]);
export var UpdateTermsResponse = struct(n0, _UTRp, 0, [_T], [[() => TermsType, 0]]);
export var TermsDescriptionListType = list(n0, _TDLT, 0, () => TermsDescriptionType);
export var LinksType = 128 | 0;

export var CreateTerms = op(
  n0,
  _CT,
  0,
  () => CreateTermsRequest,
  () => CreateTermsResponse
);
export var DeleteTerms = op(
  n0,
  _DTe,
  0,
  () => DeleteTermsRequest,
  () => Unit
);
export var DescribeTerms = op(
  n0,
  _DTes,
  0,
  () => DescribeTermsRequest,
  () => DescribeTermsResponse
);
export var ListTerms = op(
  n0,
  _LT,
  0,
  () => ListTermsRequest,
  () => ListTermsResponse
);
export var UpdateTerms = op(
  n0,
  _UTp,
  0,
  () => UpdateTermsRequest,
  () => UpdateTermsResponse
);
