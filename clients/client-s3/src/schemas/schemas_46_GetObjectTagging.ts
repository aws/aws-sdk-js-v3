// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _B,
  _EBO,
  _GOT,
  _GOTO,
  _GOTR,
  _h,
  _hH,
  _hQ,
  _K,
  _RP,
  _Tag,
  _TS,
  _VI,
  _vI,
  _xaebo,
  _xarp,
  _xavi,
  _xN,
  n0,
  TagSet,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GetObjectTaggingOutput = struct(
  n0,
  _GOTO,
  {
    [_xN]: _Tag,
  },
  [_VI, _TS],
  [
    [
      0,
      {
        [_hH]: _xavi,
      },
    ],
    [() => TagSet, 0],
  ]
);
export var GetObjectTaggingRequest = struct(
  n0,
  _GOTR,
  0,
  [_B, _K, _VI, _EBO, _RP],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hQ]: _vI,
      },
    ],
    [
      0,
      {
        [_hH]: _xaebo,
      },
    ],
    [
      0,
      {
        [_hH]: _xarp,
      },
    ],
  ]
);
export var GetObjectTagging = op(
  n0,
  _GOT,
  {
    [_h]: ["GET", "/{Key+}?tagging", 200],
  },
  () => GetObjectTaggingRequest,
  () => GetObjectTaggingOutput
);
