// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _B,
  _CA,
  _CM,
  _CMD,
  _EBO,
  _h,
  _hH,
  _hP,
  _hQ,
  _K,
  _PBT,
  _PBTR,
  _POT,
  _POTO,
  _POTR,
  _RP,
  _Tag,
  _TS,
  _VI,
  _vI,
  _xaebo,
  _xarp,
  _xasca,
  _xavi,
  _xN,
  n0,
  TagSet,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var PutBucketTaggingRequest = struct(
  n0,
  _PBTR,
  0,
  [_B, _CMD, _CA, _Tag, _EBO],
  [
    [0, 1],
    [
      0,
      {
        [_hH]: _CM,
      },
    ],
    [
      0,
      {
        [_hH]: _xasca,
      },
    ],
    [
      () => Tagging,
      {
        [_xN]: _Tag,
        [_hP]: 1,
      },
    ],
    [
      0,
      {
        [_hH]: _xaebo,
      },
    ],
  ]
);
export var PutObjectTaggingOutput = struct(
  n0,
  _POTO,
  0,
  [_VI],
  [
    [
      0,
      {
        [_hH]: _xavi,
      },
    ],
  ]
);
export var PutObjectTaggingRequest = struct(
  n0,
  _POTR,
  0,
  [_B, _K, _VI, _CMD, _CA, _Tag, _EBO, _RP],
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
        [_hH]: _CM,
      },
    ],
    [
      0,
      {
        [_hH]: _xasca,
      },
    ],
    [
      () => Tagging,
      {
        [_xN]: _Tag,
        [_hP]: 1,
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
export var Tagging = struct(n0, _Tag, 0, [_TS], [[() => TagSet, 0]]);
export var PutBucketTagging = op(
  n0,
  _PBT,
  {
    [_h]: ["PUT", "/?tagging", 200],
  },
  () => PutBucketTaggingRequest,
  () => Unit
);
export var PutObjectTagging = op(
  n0,
  _POT,
  {
    [_h]: ["PUT", "/{Key+}?tagging", 200],
  },
  () => PutObjectTaggingRequest,
  () => PutObjectTaggingOutput
);
