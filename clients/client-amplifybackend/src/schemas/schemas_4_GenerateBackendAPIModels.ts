// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _AI,
  _aI,
  _BEN,
  _bEN,
  _E,
  _e,
  _GBAPIM,
  _GBAPIMR,
  _GBAPIMRe,
  _h,
  _JI,
  _jI,
  _jN,
  _O,
  _o,
  _RN,
  _rN,
  _St,
  _st,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GenerateBackendAPIModelsRequest = struct(
  n0,
  _GBAPIMR,
  0,
  [_AI, _BEN, _RN],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_jN]: _rN,
      },
    ],
  ]
);
export var GenerateBackendAPIModelsResponse = struct(
  n0,
  _GBAPIMRe,
  0,
  [_AI, _BEN, _E, _JI, _O, _St],
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
        [_jN]: _e,
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
        [_jN]: _o,
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
export var GenerateBackendAPIModels = op(
  n0,
  _GBAPIM,
  {
    [_h]: ["POST", "/backend/{AppId}/api/{BackendEnvironmentName}/generateModels", 200],
  },
  () => GenerateBackendAPIModelsRequest,
  () => GenerateBackendAPIModelsResponse
);
