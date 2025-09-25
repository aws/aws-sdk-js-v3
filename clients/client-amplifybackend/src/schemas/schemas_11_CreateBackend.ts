// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _AI,
  _aI,
  _ANp,
  _aNp,
  _BEN,
  _bEN,
  _CBr,
  _CBRr,
  _CBRre,
  _E,
  _e,
  _h,
  _JI,
  _jI,
  _jN,
  _O,
  _o,
  _RC,
  _rC,
  _RN,
  _rN,
  _St,
  _st,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateBackendRequest = struct(
  n0,
  _CBRr,
  0,
  [_AI, _ANp, _BEN, _RC, _RN],
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
        [_jN]: _aNp,
      },
    ],
    [
      0,
      {
        [_jN]: _bEN,
      },
    ],
    [
      () => ResourceConfig,
      {
        [_jN]: _rC,
      },
    ],
    [
      0,
      {
        [_jN]: _rN,
      },
    ],
  ]
);
export var CreateBackendResponse = struct(
  n0,
  _CBRre,
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
export var ResourceConfig = struct(n0, _RC, 0, [], []);
export var CreateBackend = op(
  n0,
  _CBr,
  {
    [_h]: ["POST", "/backend", 200],
  },
  () => CreateBackendRequest,
  () => CreateBackendResponse
);
