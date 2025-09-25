// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AAI,
  _Ar,
  _CGCS,
  _CGCSL,
  _CGS,
  _CGSL,
  _CSL,
  _CSolu,
  _CT,
  _DSC,
  _DSCL,
  _DSS,
  _DTa,
  _GR,
  _h,
  _hQ,
  _LTi,
  _LTR,
  _LTRi,
  _LUT,
  _LVN,
  _MR,
  _mr_,
  _N,
  _NT,
  _nt,
  _Pl,
  _RI,
  _St,
  _TIe,
  _TSe,
  _TSL,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ColumnGroupColumnSchema = struct(n0, _CGCS, 0, [_N], [0]);
export var ColumnGroupSchema = struct(n0, _CGS, 0, [_N, _CGCSL], [0, () => ColumnGroupColumnSchemaList]);
export var ColumnSchema = struct(n0, _CSolu, 0, [_N, _DTa, _GR], [0, 0, 0]);
export var DataSetConfiguration = struct(
  n0,
  _DSC,
  0,
  [_Pl, _DSS, _CGSL],
  [0, () => DataSetSchema, () => ColumnGroupSchemaList]
);
export var DataSetSchema = struct(n0, _DSS, 0, [_CSL], [() => ColumnSchemaList]);
export var ListTemplatesRequest = struct(
  n0,
  _LTR,
  0,
  [_AAI, _NT, _MR],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _nt,
      },
    ],
    [
      1,
      {
        [_hQ]: _mr_,
      },
    ],
  ]
);
export var ListTemplatesResponse = struct(
  n0,
  _LTRi,
  0,
  [_TSL, _NT, _St, _RI],
  [() => TemplateSummaryList, 0, [1, 32], 0]
);
export var TemplateSummary = struct(n0, _TSe, 0, [_Ar, _TIe, _N, _LVN, _CT, _LUT], [0, 0, 0, 1, 4, 4]);
export var ColumnGroupColumnSchemaList = list(n0, _CGCSL, 0, () => ColumnGroupColumnSchema);
export var ColumnGroupSchemaList = list(n0, _CGSL, 0, () => ColumnGroupSchema);
export var ColumnSchemaList = list(n0, _CSL, 0, () => ColumnSchema);
export var DataSetConfigurationList = list(n0, _DSCL, 0, () => DataSetConfiguration);
export var TemplateSummaryList = list(n0, _TSL, 0, () => TemplateSummary);
export var ListTemplates = op(
  n0,
  _LTi,
  {
    [_h]: ["GET", "/accounts/{AwsAccountId}/templates", 200],
  },
  () => ListTemplatesRequest,
  () => ListTemplatesResponse
);
