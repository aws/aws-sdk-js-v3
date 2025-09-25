// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CRT, _DRT, _DRTI, _h, _hQ, _iT, _TA, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteReviewTemplateInput = struct(
  n0,
  _DRTI,
  0,
  [_TA, _CRT],
  [
    [0, 1],
    [
      0,
      {
        [_iT]: 1,
        [_hQ]: _CRT,
      },
    ],
  ]
);
export var DeleteReviewTemplate = op(
  n0,
  _DRT,
  {
    [_h]: ["DELETE", "/reviewTemplates/{TemplateArn}", 200],
  },
  () => DeleteReviewTemplateInput,
  () => Unit
);
