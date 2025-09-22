// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _acti,
  _Actio,
  _BN,
  _bN,
  _CPR,
  _CSBR,
  _hL,
  _ht,
  _jN,
  _MPPA,
  _MPPI,
  _mPPI,
  _MPPTA,
  _OP,
  _oP,
  _PR,
  _pR,
  _Ro,
  _ro,
  _SB,
  _sB,
  _St,
  _st,
  _Tag,
  _tag,
  _UMPP,
  _UMPPR,
  _UPR,
  _USBR,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateProtectedResource = struct(
  n0,
  _CPR,
  0,
  [_SB],
  [
    [
      () => CreateS3BucketResource,
      {
        [_jN]: _sB,
      },
    ],
  ]
);
export var CreateS3BucketResource = struct(
  n0,
  _CSBR,
  0,
  [_BN, _OP],
  [
    [
      0,
      {
        [_jN]: _bN,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _oP,
      },
    ],
  ]
);
export var MalwareProtectionPlanActions = struct(
  n0,
  _MPPA,
  0,
  [_Tag],
  [
    [
      () => MalwareProtectionPlanTaggingAction,
      {
        [_jN]: _tag,
      },
    ],
  ]
);
export var MalwareProtectionPlanTaggingAction = struct(
  n0,
  _MPPTA,
  0,
  [_St],
  [
    [
      0,
      {
        [_jN]: _st,
      },
    ],
  ]
);
export var UpdateMalwareProtectionPlanRequest = struct(
  n0,
  _UMPPR,
  0,
  [_MPPI, _Ro, _Actio, _PR],
  [
    [
      0,
      {
        [_jN]: _mPPI,
        [_hL]: 1,
      },
    ],
    [
      0,
      {
        [_jN]: _ro,
      },
    ],
    [
      () => MalwareProtectionPlanActions,
      {
        [_jN]: _acti,
      },
    ],
    [
      () => UpdateProtectedResource,
      {
        [_jN]: _pR,
      },
    ],
  ]
);
export var UpdateProtectedResource = struct(
  n0,
  _UPR,
  0,
  [_SB],
  [
    [
      () => UpdateS3BucketResource,
      {
        [_jN]: _sB,
      },
    ],
  ]
);
export var UpdateS3BucketResource = struct(
  n0,
  _USBR,
  0,
  [_OP],
  [
    [
      64 | 0,
      {
        [_jN]: _oP,
      },
    ],
  ]
);
export var MalwareProtectionPlanObjectPrefixesList = 64 | 0;

export var UpdateMalwareProtectionPlan = op(
  n0,
  _UMPP,
  {
    [_ht]: ["PATCH", "/malware-protection-plan/{MalwareProtectionPlanId}", 200],
  },
  () => UpdateMalwareProtectionPlanRequest,
  () => Unit
);
