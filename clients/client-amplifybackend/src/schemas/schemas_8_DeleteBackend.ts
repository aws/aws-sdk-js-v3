// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AI, _aI, _BEN, _bEN, _DB, _DBR, _DBRe, _E, _e, _h, _JI, _jI, _jN, _O, _o, _St, _st, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteBackendRequest = struct(
  n0,
  _DBR,
  0,
  [_AI, _BEN],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteBackendResponse = struct(
  n0,
  _DBRe,
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
export var DeleteBackend = op(
  n0,
  _DB,
  {
    [_h]: ["POST", "/backend/{AppId}/environments/{BackendEnvironmentName}/remove", 200],
  },
  () => DeleteBackendRequest,
  () => DeleteBackendResponse
);
