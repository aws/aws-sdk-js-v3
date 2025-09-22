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
  _GBJ,
  _GBJR,
  _GBJRe,
  _h,
  _JI,
  _jI,
  _jN,
  _O,
  _o,
  _St,
  _st,
  _UT,
  _uT,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GetBackendJobRequest = struct(
  n0,
  _GBJR,
  0,
  [_AI, _BEN, _JI],
  [
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var GetBackendJobResponse = struct(
  n0,
  _GBJRe,
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
export var GetBackendJob = op(
  n0,
  _GBJ,
  {
    [_h]: ["GET", "/backend/{AppId}/job/{BackendEnvironmentName}/{JobId}", 200],
  },
  () => GetBackendJobRequest,
  () => GetBackendJobResponse
);
