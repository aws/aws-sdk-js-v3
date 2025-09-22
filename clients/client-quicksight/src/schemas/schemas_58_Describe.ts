// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AAI,
  _an,
  _ANl,
  _Ar,
  _CT,
  _De,
  _DSCata,
  _DTes,
  _DTRes,
  _DTResc,
  _EL,
  _Ent,
  _Er,
  _h,
  _hQ,
  _Ima,
  _LUT,
  _M,
  _N,
  _Pat,
  _RI,
  _SEA,
  _Sh,
  _She,
  _SIh,
  _SLh,
  _St,
  _T,
  _TA,
  _TE,
  _TEL,
  _Tem,
  _TIe,
  _TVe,
  _VE,
  _Ve,
  _VN,
  _vn,
  n0,
} from "./schemas_0";
import { SheetImageList } from "./schemas_5_Describe";
import { DataSetConfigurationList } from "./schemas_30_Template";

/* eslint no-var: 0 */

export var DescribeTemplateRequest = struct(
  n0,
  _DTRes,
  0,
  [_AAI, _TIe, _VN, _ANl],
  [
    [0, 1],
    [0, 1],
    [
      1,
      {
        [_hQ]: _vn,
      },
    ],
    [
      0,
      {
        [_hQ]: _an,
      },
    ],
  ]
);
export var DescribeTemplateResponse = struct(n0, _DTResc, 0, [_Tem, _St, _RI], [() => Template, [1, 32], 0]);
export var Entity = struct(n0, _Ent, 0, [_Pat], [0]);
export var Sheet = struct(n0, _She, 0, [_SIh, _N, _Ima], [0, 0, () => SheetImageList]);
export var Template = struct(n0, _Tem, 0, [_Ar, _N, _Ve, _TIe, _LUT, _CT], [0, 0, () => TemplateVersion, 0, 4, 4]);
export var TemplateError = struct(n0, _TE, 0, [_T, _M, _VE], [0, 0, () => EntityList]);
export var TemplateVersion = struct(
  n0,
  _TVe,
  0,
  [_CT, _Er, _VN, _St, _DSCata, _De, _SEA, _TA, _Sh],
  [4, () => TemplateErrorList, 1, 0, () => DataSetConfigurationList, 0, 0, 0, () => SheetList]
);
export var EntityList = list(n0, _EL, 0, () => Entity);
export var SheetList = list(n0, _SLh, 0, () => Sheet);
export var TemplateErrorList = list(n0, _TEL, 0, () => TemplateError);
export var DescribeTemplate = op(
  n0,
  _DTes,
  {
    [_h]: ["GET", "/accounts/{AwsAccountId}/templates/{TemplateId}", 200],
  },
  () => DescribeTemplateRequest,
  () => DescribeTemplateResponse
);
