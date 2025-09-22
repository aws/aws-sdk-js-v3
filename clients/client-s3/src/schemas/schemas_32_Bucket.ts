// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AH,
  _AHl,
  _AM,
  _AMl,
  _AO,
  _AOl,
  _B,
  _CA,
  _CM,
  _CMD,
  _CORSC,
  _CORSR,
  _CORSRu,
  _EBO,
  _EH,
  _EHx,
  _GBC,
  _GBCO,
  _GBCR,
  _h,
  _hH,
  _hP,
  _ID,
  _MAS,
  _PBC,
  _PBCR,
  _xaebo,
  _xasca,
  _xF,
  _xN,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CORSConfiguration = struct(
  n0,
  _CORSC,
  0,
  [_CORSR],
  [
    [
      () => CORSRules,
      {
        [_xN]: _CORSRu,
        [_xF]: 1,
      },
    ],
  ]
);
export var CORSRule = struct(
  n0,
  _CORSRu,
  0,
  [_ID, _AH, _AM, _AO, _EH, _MAS],
  [
    0,
    [
      64 | 0,
      {
        [_xN]: _AHl,
        [_xF]: 1,
      },
    ],
    [
      64 | 0,
      {
        [_xN]: _AMl,
        [_xF]: 1,
      },
    ],
    [
      64 | 0,
      {
        [_xN]: _AOl,
        [_xF]: 1,
      },
    ],
    [
      64 | 0,
      {
        [_xN]: _EHx,
        [_xF]: 1,
      },
    ],
    1,
  ]
);
export var GetBucketCorsOutput = struct(
  n0,
  _GBCO,
  {
    [_xN]: _CORSC,
  },
  [_CORSR],
  [
    [
      () => CORSRules,
      {
        [_xN]: _CORSRu,
        [_xF]: 1,
      },
    ],
  ]
);
export var GetBucketCorsRequest = struct(
  n0,
  _GBCR,
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
export var PutBucketCorsRequest = struct(
  n0,
  _PBCR,
  0,
  [_B, _CORSC, _CMD, _CA, _EBO],
  [
    [0, 1],
    [
      () => CORSConfiguration,
      {
        [_xN]: _CORSC,
        [_hP]: 1,
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
      0,
      {
        [_hH]: _xaebo,
      },
    ],
  ]
);
export var AllowedHeaders = 64 | 0;

export var AllowedMethods = 64 | 0;

export var AllowedOrigins = 64 | 0;

export var CORSRules = list(n0, _CORSR, 0, [() => CORSRule, 0]);
export var ExposeHeaders = 64 | 0;

export var GetBucketCors = op(
  n0,
  _GBC,
  {
    [_h]: ["GET", "/?cors", 200],
  },
  () => GetBucketCorsRequest,
  () => GetBucketCorsOutput
);
export var PutBucketCors = op(
  n0,
  _PBC,
  {
    [_h]: ["PUT", "/?cors", 200],
  },
  () => PutBucketCorsRequest,
  () => Unit
);
