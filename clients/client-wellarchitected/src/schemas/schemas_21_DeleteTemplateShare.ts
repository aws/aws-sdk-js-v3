// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CRT, _DTS, _DTSI, _h, _hQ, _iT, _SI, _TA, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteTemplateShareInput = struct(
  n0,
  _DTSI,
  0,
  [_SI, _TA, _CRT],
  [
    [0, 1],
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
export var DeleteTemplateShare = op(
  n0,
  _DTS,
  {
    [_h]: ["DELETE", "/templates/shares/{TemplateArn}/{ShareId}", 200],
  },
  () => DeleteTemplateShareInput,
  () => Unit
);
