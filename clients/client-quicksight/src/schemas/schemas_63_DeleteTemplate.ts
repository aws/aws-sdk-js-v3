// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AAI, _Ar, _DTel, _DTR, _DTRe, _h, _hQ, _RI, _St, _TIe, _VN, _vn, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteTemplateRequest = struct(
  n0,
  _DTR,
  0,
  [_AAI, _TIe, _VN],
  [
    [0, 1],
    [0, 1],
    [
      1,
      {
        [_hQ]: _vn,
      },
    ],
  ]
);
export var DeleteTemplateResponse = struct(n0, _DTRe, 0, [_RI, _Ar, _TIe, _St], [0, 0, 0, [1, 32]]);
export var DeleteTemplate = op(
  n0,
  _DTel,
  {
    [_h]: ["DELETE", "/accounts/{AwsAccountId}/templates/{TemplateId}", 200],
  },
  () => DeleteTemplateRequest,
  () => DeleteTemplateResponse
);
