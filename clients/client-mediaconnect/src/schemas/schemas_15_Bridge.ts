// smithy-typescript generated code
import { struct } from "@smithy/core/schema";

import { _FC, _FM, _fM, _jN, _PS, _pS, _RW, _rW, _SP, _sP, _St, _st, _UFC, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var FailoverConfig = struct(
  n0,
  _FC,
  0,
  [_FM, _RW, _SP, _St],
  [
    [
      0,
      {
        [_jN]: _fM,
      },
    ],
    [
      1,
      {
        [_jN]: _rW,
      },
    ],
    [
      () => SourcePriority,
      {
        [_jN]: _sP,
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
export var SourcePriority = struct(
  n0,
  _SP,
  0,
  [_PS],
  [
    [
      0,
      {
        [_jN]: _pS,
      },
    ],
  ]
);
export var UpdateFailoverConfig = struct(
  n0,
  _UFC,
  0,
  [_FM, _RW, _SP, _St],
  [
    [
      0,
      {
        [_jN]: _fM,
      },
    ],
    [
      1,
      {
        [_jN]: _rW,
      },
    ],
    [
      () => SourcePriority,
      {
        [_jN]: _sP,
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
