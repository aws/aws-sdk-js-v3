// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _AI,
  _aI,
  _BEN,
  _bEN,
  _CB,
  _CBR,
  _CBRl,
  _E,
  _e,
  _h,
  _JI,
  _jI,
  _jN,
  _O,
  _o,
  _St,
  _st,
  _TEN,
  _tEN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CloneBackendRequest = struct(
  n0,
  _CBR,
  0,
  [_AI, _BEN, _TEN],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_jN]: _tEN,
      },
    ],
  ]
);
export var CloneBackendResponse = struct(
  n0,
  _CBRl,
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
export var CloneBackend = op(
  n0,
  _CB,
  {
    [_h]: ["POST", "/backend/{AppId}/environments/{BackendEnvironmentName}/clone", 200],
  },
  () => CloneBackendRequest,
  () => CloneBackendResponse
);
