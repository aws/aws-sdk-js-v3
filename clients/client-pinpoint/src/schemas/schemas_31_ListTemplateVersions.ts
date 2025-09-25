// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CD,
  _DSe,
  _h,
  _hQ,
  _I,
  _LMD,
  _LOTVR,
  _LTV,
  _LTVR,
  _LTVRi,
  _M,
  _NT,
  _nt,
  _PS,
  _ps,
  _RID,
  _TDe,
  _TNe,
  _TT,
  _TVR,
  _TVRe,
  _V,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ListTemplateVersionsRequest = struct(
  n0,
  _LTVR,
  0,
  [_NT, _PS, _TNe, _TT],
  [
    [
      0,
      {
        [_hQ]: _nt,
      },
    ],
    [
      0,
      {
        [_hQ]: _ps,
      },
    ],
    [0, 1],
    [0, 1],
  ]
);
export var ListTemplateVersionsResponse = struct(n0, _LTVRi, 0, [_TVR], [[() => TemplateVersionsResponse, 16]]);
export var TemplateVersionResponse = struct(
  n0,
  _TVRe,
  0,
  [_CD, _DSe, _LMD, _TDe, _TNe, _TT, _V],
  [0, 0, 0, 0, 0, 0, 0]
);
export var TemplateVersionsResponse = struct(
  n0,
  _TVR,
  0,
  [_I, _M, _NT, _RID],
  [() => ListOfTemplateVersionResponse, 0, 0, 0]
);
export var ListOfTemplateVersionResponse = list(n0, _LOTVR, 0, () => TemplateVersionResponse);
export var ListTemplateVersions = op(
  n0,
  _LTV,
  {
    [_h]: ["GET", "/v1/templates/{TemplateName}/{TemplateType}/versions", 200],
  },
  () => ListTemplateVersionsRequest,
  () => ListTemplateVersionsResponse
);
