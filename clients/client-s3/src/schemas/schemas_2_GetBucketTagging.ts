// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _B, _EBO, _GBT, _GBTO, _GBTR, _h, _hH, _Tag, _TS, _xaebo, _xN, n0, TagSet } from "./schemas_0";

/* eslint no-var: 0 */

export var GetBucketTaggingOutput = struct(
  n0,
  _GBTO,
  {
    [_xN]: _Tag,
  },
  [_TS],
  [[() => TagSet, 0]]
);
export var GetBucketTaggingRequest = struct(
  n0,
  _GBTR,
  0,
  [_B, _EBO],
  [
    [0, 1],
    [
      0,
      {
        [_hH]: _xaebo,
      },
    ],
  ]
);
export var GetBucketTagging = op(
  n0,
  _GBT,
  {
    [_h]: ["GET", "/?tagging", 200],
  },
  () => GetBucketTaggingRequest,
  () => GetBucketTaggingOutput
);
