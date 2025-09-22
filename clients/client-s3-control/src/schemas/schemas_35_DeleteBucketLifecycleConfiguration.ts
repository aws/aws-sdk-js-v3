// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AI, _B, _DBLC, _DBLCR, _h, _hH, _hL, _xaai, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteBucketLifecycleConfigurationRequest = struct(
  n0,
  _DBLCR,
  0,
  [_AI, _B],
  [
    [
      0,
      {
        [_hL]: 1,
        [_hH]: _xaai,
      },
    ],
    [0, 1],
  ]
);
export var DeleteBucketLifecycleConfiguration = op(
  n0,
  _DBLC,
  {
    [_h]: ["DELETE", "/v20180820/bucket/{Bucket}/lifecycleconfiguration", 200],
  },
  () => DeleteBucketLifecycleConfigurationRequest,
  () => Unit
);
