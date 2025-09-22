// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AI, _aI, _BEN, _bEN, _BMAI, _bMAI, _CBC, _CBCR, _CBCRr, _h, _JI, _jI, _jN, _St, _st, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var CreateBackendConfigRequest = struct(
  n0,
  _CBCR,
  0,
  [_AI, _BMAI],
  [
    [0, 1],
    [
      0,
      {
        [_jN]: _bMAI,
      },
    ],
  ]
);
export var CreateBackendConfigResponse = struct(
  n0,
  _CBCRr,
  0,
  [_AI, _BEN, _JI, _St],
  [
    [
      0,
      {
        [_jN]: _aI,
      },
    ],
    [
      0,
      {
        [_jN]: _bEN,
      },
    ],
    [
      0,
      {
        [_jN]: _jI,
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
export var CreateBackendConfig = op(
  n0,
  _CBC,
  {
    [_h]: ["POST", "/backend/{AppId}/config", 200],
  },
  () => CreateBackendConfigRequest,
  () => CreateBackendConfigResponse
);
