// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _h,
  _hQ,
  _It,
  _LPOTT,
  _LPOTTI,
  _LPOTTR,
  _LPOTTRi,
  _MR,
  _mr,
  _NT,
  _nt,
  _POTTL,
  _SN,
  _SO,
  _TI,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ListProfileObjectTypeTemplateItem = struct(n0, _LPOTTI, 0, [_TI, _SN, _SO], [0, 0, 0]);
export var ListProfileObjectTypeTemplatesRequest = struct(
  n0,
  _LPOTTR,
  0,
  [_NT, _MR],
  [
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
export var ListProfileObjectTypeTemplatesResponse = struct(
  n0,
  _LPOTTRi,
  0,
  [_It, _NT],
  [() => ProfileObjectTypeTemplateList, 0]
);
export var ProfileObjectTypeTemplateList = list(n0, _POTTL, 0, () => ListProfileObjectTypeTemplateItem);
export var ListProfileObjectTypeTemplates = op(
  n0,
  _LPOTT,
  {
    [_h]: ["GET", "/templates", 200],
  },
  () => ListProfileObjectTypeTemplatesRequest,
  () => ListProfileObjectTypeTemplatesResponse
);
