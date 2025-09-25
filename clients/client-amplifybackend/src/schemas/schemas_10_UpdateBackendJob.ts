// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _AI,
  _aI,
  _BEN,
  _bEN,
  _CT,
  _cT,
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
  _UBJ,
  _UBJR,
  _UBJRp,
  _UT,
  _uT,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var UpdateBackendJobRequest = struct(
  n0,
  _UBJR,
  0,
  [_AI, _BEN, _JI, _O, _St],
  [
    [0, 1],
    [0, 1],
    [0, 1],
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
export var UpdateBackendJobResponse = struct(
  n0,
  _UBJRp,
  0,
  [_AI, _BEN, _CT, _E, _JI, _O, _St, _UT],
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
        [_jN]: _cT,
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
    [
      0,
      {
        [_jN]: _uT,
      },
    ],
  ]
);
export var UpdateBackendJob = op(
  n0,
  _UBJ,
  {
    [_h]: ["POST", "/backend/{AppId}/job/{BackendEnvironmentName}/{JobId}", 200],
  },
  () => UpdateBackendJobRequest,
  () => UpdateBackendJobResponse
);
