// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ASSEBD,
  _B,
  _BKE,
  _CA,
  _CM,
  _CMD,
  _EBO,
  _GBE,
  _GBEO,
  _GBER,
  _h,
  _hH,
  _hP,
  _KMSMKID,
  _PBE,
  _PBER,
  _R,
  _Ru,
  _SSEA,
  _SSEBD,
  _SSEC,
  _SSER,
  _SSERe,
  _xaebo,
  _xasca,
  _xF,
  _xN,
  n0,
  SSEKMSKeyId,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GetBucketEncryptionOutput = struct(n0, _GBEO, 0, [_SSEC], [[() => ServerSideEncryptionConfiguration, 16]]);
export var GetBucketEncryptionRequest = struct(
  n0,
  _GBER,
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
export var PutBucketEncryptionRequest = struct(
  n0,
  _PBER,
  0,
  [_B, _CMD, _CA, _SSEC, _EBO],
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
      () => ServerSideEncryptionConfiguration,
      {
        [_xN]: _SSEC,
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
export var ServerSideEncryptionByDefault = struct(n0, _SSEBD, 0, [_SSEA, _KMSMKID], [0, [() => SSEKMSKeyId, 0]]);
export var ServerSideEncryptionConfiguration = struct(
  n0,
  _SSEC,
  0,
  [_R],
  [
    [
      () => ServerSideEncryptionRules,
      {
        [_xN]: _Ru,
        [_xF]: 1,
      },
    ],
  ]
);
export var ServerSideEncryptionRule = struct(
  n0,
  _SSER,
  0,
  [_ASSEBD, _BKE],
  [[() => ServerSideEncryptionByDefault, 0], 2]
);
export var ServerSideEncryptionRules = list(n0, _SSERe, 0, [() => ServerSideEncryptionRule, 0]);
export var GetBucketEncryption = op(
  n0,
  _GBE,
  {
    [_h]: ["GET", "/?encryption", 200],
  },
  () => GetBucketEncryptionRequest,
  () => GetBucketEncryptionOutput
);
export var PutBucketEncryption = op(
  n0,
  _PBE,
  {
    [_h]: ["PUT", "/?encryption", 200],
  },
  () => PutBucketEncryptionRequest,
  () => Unit
);
