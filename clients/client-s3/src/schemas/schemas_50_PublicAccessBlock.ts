// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _B,
  _BPA,
  _BPP,
  _CA,
  _CM,
  _CMD,
  _EBO,
  _GPAB,
  _GPABO,
  _GPABR,
  _h,
  _hH,
  _hP,
  _IPA,
  _PABC,
  _PPAB,
  _PPABR,
  _RPB,
  _xaebo,
  _xasca,
  _xN,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GetPublicAccessBlockOutput = struct(n0, _GPABO, 0, [_PABC], [[() => PublicAccessBlockConfiguration, 16]]);
export var GetPublicAccessBlockRequest = struct(
  n0,
  _GPABR,
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
export var PublicAccessBlockConfiguration = struct(
  n0,
  _PABC,
  0,
  [_BPA, _IPA, _BPP, _RPB],
  [
    [
      2,
      {
        [_xN]: _BPA,
      },
    ],
    [
      2,
      {
        [_xN]: _IPA,
      },
    ],
    [
      2,
      {
        [_xN]: _BPP,
      },
    ],
    [
      2,
      {
        [_xN]: _RPB,
      },
    ],
  ]
);
export var PutPublicAccessBlockRequest = struct(
  n0,
  _PPABR,
  0,
  [_B, _CMD, _CA, _PABC, _EBO],
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
      () => PublicAccessBlockConfiguration,
      {
        [_xN]: _PABC,
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
export var GetPublicAccessBlock = op(
  n0,
  _GPAB,
  {
    [_h]: ["GET", "/?publicAccessBlock", 200],
  },
  () => GetPublicAccessBlockRequest,
  () => GetPublicAccessBlockOutput
);
export var PutPublicAccessBlock = op(
  n0,
  _PPAB,
  {
    [_h]: ["PUT", "/?publicAccessBlock", 200],
  },
  () => PutPublicAccessBlockRequest,
  () => Unit
);
