// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _AC,
  _B,
  _CA,
  _EBO,
  _GBAC,
  _GBACO,
  _GBACR,
  _h,
  _hH,
  _hP,
  _PBAC,
  _PBACR,
  _RC,
  _RP,
  _S,
  _xaebo,
  _xarc,
  _xarp,
  _xasca,
  _xN,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AccelerateConfiguration = struct(n0, _AC, 0, [_S], [0]);
export var GetBucketAccelerateConfigurationOutput = struct(
  n0,
  _GBACO,
  {
    [_xN]: _AC,
  },
  [_S, _RC],
  [
    0,
    [
      0,
      {
        [_hH]: _xarc,
      },
    ],
  ]
);
export var GetBucketAccelerateConfigurationRequest = struct(
  n0,
  _GBACR,
  0,
  [_B, _EBO, _RP],
  [
    [0, 1],
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
export var PutBucketAccelerateConfigurationRequest = struct(
  n0,
  _PBACR,
  0,
  [_B, _AC, _EBO, _CA],
  [
    [0, 1],
    [
      () => AccelerateConfiguration,
      {
        [_xN]: _AC,
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
        [_hH]: _xasca,
      },
    ],
  ]
);
export var GetBucketAccelerateConfiguration = op(
  n0,
  _GBAC,
  {
    [_h]: ["GET", "/?accelerate", 200],
  },
  () => GetBucketAccelerateConfigurationRequest,
  () => GetBucketAccelerateConfigurationOutput
);
export var PutBucketAccelerateConfiguration = op(
  n0,
  _PBAC,
  {
    [_h]: ["PUT", "/?accelerate", 200],
  },
  () => PutBucketAccelerateConfigurationRequest,
  () => Unit
);
