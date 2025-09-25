// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _Ar, _ar, _DCe, _DCRel, _DCRele, _h, _jN, _St, _st, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteConfigurationRequest = struct(n0, _DCRel, 0, [_Ar], [[0, 1]]);
export var DeleteConfigurationResponse = struct(
  n0,
  _DCRele,
  0,
  [_Ar, _St],
  [
    [
      0,
      {
        [_jN]: _ar,
      },
    ],
    [
      0,
      {
        [_jN]: _st,
      },
    ],
  ]
);
export var DeleteConfiguration = op(
  n0,
  _DCe,
  {
    [_h]: ["DELETE", "/v1/configurations/{Arn}", 200],
  },
  () => DeleteConfigurationRequest,
  () => DeleteConfigurationResponse
);
