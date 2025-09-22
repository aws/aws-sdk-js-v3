// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _AFF,
  _aFF,
  _AI,
  _aI,
  _AMC,
  _aMC,
  _ANp,
  _aNp,
  _BEL,
  _bEL,
  _BEN,
  _bEN,
  _E,
  _e,
  _GB,
  _GBR,
  _GBRe,
  _h,
  _jN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GetBackendRequest = struct(
  n0,
  _GBR,
  0,
  [_AI, _BEN],
  [
    [0, 1],
    [
      0,
      {
        [_jN]: _bEN,
      },
    ],
  ]
);
export var GetBackendResponse = struct(
  n0,
  _GBRe,
  0,
  [_AFF, _AMC, _AI, _ANp, _BEL, _BEN, _E],
  [
    [
      0,
      {
        [_jN]: _aFF,
      },
    ],
    [
      0,
      {
        [_jN]: _aMC,
      },
    ],
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
      64 | 0,
      {
        [_jN]: _bEL,
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
  ]
);
export var ListOf__string = 64 | 0;

export var GetBackend = op(
  n0,
  _GB,
  {
    [_h]: ["POST", "/backend/{AppId}/details", 200],
  },
  () => GetBackendRequest,
  () => GetBackendResponse
);
