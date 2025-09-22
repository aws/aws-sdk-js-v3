// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AAI,
  _Ar,
  _CT,
  _De,
  _h,
  _hQ,
  _LTV,
  _LTVR,
  _LTVRi,
  _MR,
  _mr,
  _NT,
  _nt,
  _RI,
  _St,
  _TIe,
  _TVS,
  _TVSL,
  _VN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ListTemplateVersionsRequest = struct(
  n0,
  _LTVR,
  0,
  [_AAI, _TIe, _NT, _MR],
  [
    [0, 1],
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
        [_hQ]: _mr,
      },
    ],
  ]
);
export var ListTemplateVersionsResponse = struct(
  n0,
  _LTVRi,
  0,
  [_TVSL, _NT, _St, _RI],
  [() => TemplateVersionSummaryList, 0, [1, 32], 0]
);
export var TemplateVersionSummary = struct(n0, _TVS, 0, [_Ar, _VN, _CT, _St, _De], [0, 1, 4, 0, 0]);
export var TemplateVersionSummaryList = list(n0, _TVSL, 0, () => TemplateVersionSummary);
export var ListTemplateVersions = op(
  n0,
  _LTV,
  {
    [_h]: ["GET", "/accounts/{AwsAccountId}/templates/{TemplateId}/versions", 200],
  },
  () => ListTemplateVersionsRequest,
  () => ListTemplateVersionsResponse
);
