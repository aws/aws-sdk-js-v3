// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _B,
  _CA,
  _CM,
  _CMD,
  _EBO,
  _GBRP,
  _GBRPO,
  _GBRPR,
  _h,
  _hH,
  _hP,
  _Pay,
  _PBRP,
  _PBRPR,
  _RPC,
  _xaebo,
  _xasca,
  _xN,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GetBucketRequestPaymentOutput = struct(
  n0,
  _GBRPO,
  {
    [_xN]: _RPC,
  },
  [_Pay],
  [0]
);
export var GetBucketRequestPaymentRequest = struct(
  n0,
  _GBRPR,
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
export var PutBucketRequestPaymentRequest = struct(
  n0,
  _PBRPR,
  0,
  [_B, _CMD, _CA, _RPC, _EBO],
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
      () => RequestPaymentConfiguration,
      {
        [_xN]: _RPC,
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
export var RequestPaymentConfiguration = struct(n0, _RPC, 0, [_Pay], [0]);
export var GetBucketRequestPayment = op(
  n0,
  _GBRP,
  {
    [_h]: ["GET", "/?requestPayment", 200],
  },
  () => GetBucketRequestPaymentRequest,
  () => GetBucketRequestPaymentOutput
);
export var PutBucketRequestPayment = op(
  n0,
  _PBRP,
  {
    [_h]: ["PUT", "/?requestPayment", 200],
  },
  () => PutBucketRequestPaymentRequest,
  () => Unit
);
