// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AIMU,
  _An,
  _B,
  _BLC,
  _CA,
  _CM,
  _CMD,
  _D,
  _Da,
  _DAI,
  _DRe,
  _E,
  _EBO,
  _EODM,
  _F,
  _GBLC,
  _GBLCO,
  _GBLCR,
  _GOLC,
  _GOLCO,
  _GOLCR,
  _h,
  _hH,
  _hP,
  _ID,
  _LCi,
  _LEi,
  _LR,
  _LRAO,
  _LRF,
  _LRi,
  _Mo,
  _ND,
  _NNV,
  _NVE,
  _NVT,
  _NVTL,
  _NVTo,
  _OLC,
  _OLE,
  _OLRb,
  _OSGT,
  _OSLT,
  _P,
  _PBLC,
  _PBLCO,
  _PBLCR,
  _POLC,
  _POLCO,
  _POLCR,
  _R,
  _RC,
  _RP,
  _Ru,
  _S,
  _SC,
  _T,
  _Ta,
  _TDMOS,
  _TLr,
  _To,
  _Tr,
  _Tra,
  _xabolt,
  _xaebo,
  _xarc,
  _xarp,
  _xasca,
  _xatdmos,
  _xF,
  _xN,
  _Y,
  n0,
  Tag,
  TagSet,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AbortIncompleteMultipartUpload = struct(n0, _AIMU, 0, [_DAI], [1]);
export var BucketLifecycleConfiguration = struct(
  n0,
  _BLC,
  0,
  [_R],
  [
    [
      () => LifecycleRules,
      {
        [_xN]: _Ru,
        [_xF]: 1,
      },
    ],
  ]
);
export var DefaultRetention = struct(n0, _DRe, 0, [_Mo, _D, _Y], [0, 1, 1]);
export var GetBucketLifecycleConfigurationOutput = struct(
  n0,
  _GBLCO,
  {
    [_xN]: _LCi,
  },
  [_R, _TDMOS],
  [
    [
      () => LifecycleRules,
      {
        [_xN]: _Ru,
        [_xF]: 1,
      },
    ],
    [
      0,
      {
        [_hH]: _xatdmos,
      },
    ],
  ]
);
export var GetBucketLifecycleConfigurationRequest = struct(
  n0,
  _GBLCR,
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
export var GetObjectLockConfigurationOutput = struct(n0, _GOLCO, 0, [_OLC], [[() => ObjectLockConfiguration, 16]]);
export var GetObjectLockConfigurationRequest = struct(
  n0,
  _GOLCR,
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
export var LifecycleExpiration = struct(n0, _LEi, 0, [_Da, _D, _EODM], [5, 1, 2]);
export var LifecycleRule = struct(
  n0,
  _LR,
  0,
  [_E, _ID, _P, _F, _S, _Tr, _NVT, _NVE, _AIMU],
  [
    () => LifecycleExpiration,
    0,
    0,
    [() => LifecycleRuleFilter, 0],
    0,
    [
      () => TransitionList,
      {
        [_xN]: _Tra,
        [_xF]: 1,
      },
    ],
    [
      () => NoncurrentVersionTransitionList,
      {
        [_xN]: _NVTo,
        [_xF]: 1,
      },
    ],
    () => NoncurrentVersionExpiration,
    () => AbortIncompleteMultipartUpload,
  ]
);
export var LifecycleRuleAndOperator = struct(
  n0,
  _LRAO,
  0,
  [_P, _T, _OSGT, _OSLT],
  [
    0,
    [
      () => TagSet,
      {
        [_xN]: _Ta,
        [_xF]: 1,
      },
    ],
    1,
    1,
  ]
);
export var LifecycleRuleFilter = struct(
  n0,
  _LRF,
  0,
  [_P, _Ta, _OSGT, _OSLT, _An],
  [0, () => Tag, 1, 1, [() => LifecycleRuleAndOperator, 0]]
);
export var NoncurrentVersionExpiration = struct(n0, _NVE, 0, [_ND, _NNV], [1, 1]);
export var NoncurrentVersionTransition = struct(n0, _NVTo, 0, [_ND, _SC, _NNV], [1, 0, 1]);
export var ObjectLockConfiguration = struct(n0, _OLC, 0, [_OLE, _Ru], [0, () => ObjectLockRule]);
export var ObjectLockRule = struct(n0, _OLRb, 0, [_DRe], [() => DefaultRetention]);
export var PutBucketLifecycleConfigurationOutput = struct(
  n0,
  _PBLCO,
  0,
  [_TDMOS],
  [
    [
      0,
      {
        [_hH]: _xatdmos,
      },
    ],
  ]
);
export var PutBucketLifecycleConfigurationRequest = struct(
  n0,
  _PBLCR,
  0,
  [_B, _CA, _LCi, _EBO, _TDMOS],
  [
    [0, 1],
    [
      0,
      {
        [_hH]: _xasca,
      },
    ],
    [
      () => BucketLifecycleConfiguration,
      {
        [_xN]: _LCi,
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
        [_hH]: _xatdmos,
      },
    ],
  ]
);
export var PutObjectLockConfigurationOutput = struct(
  n0,
  _POLCO,
  0,
  [_RC],
  [
    [
      0,
      {
        [_hH]: _xarc,
      },
    ],
  ]
);
export var PutObjectLockConfigurationRequest = struct(
  n0,
  _POLCR,
  0,
  [_B, _OLC, _RP, _To, _CMD, _CA, _EBO],
  [
    [0, 1],
    [
      () => ObjectLockConfiguration,
      {
        [_xN]: _OLC,
        [_hP]: 1,
      },
    ],
    [
      0,
      {
        [_hH]: _xarp,
      },
    ],
    [
      0,
      {
        [_hH]: _xabolt,
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
export var Transition = struct(n0, _Tra, 0, [_Da, _D, _SC], [5, 1, 0]);
export var LifecycleRules = list(n0, _LRi, 0, [() => LifecycleRule, 0]);
export var NoncurrentVersionTransitionList = list(n0, _NVTL, 0, () => NoncurrentVersionTransition);
export var TransitionList = list(n0, _TLr, 0, () => Transition);
export var GetBucketLifecycleConfiguration = op(
  n0,
  _GBLC,
  {
    [_h]: ["GET", "/?lifecycle", 200],
  },
  () => GetBucketLifecycleConfigurationRequest,
  () => GetBucketLifecycleConfigurationOutput
);
export var GetObjectLockConfiguration = op(
  n0,
  _GOLC,
  {
    [_h]: ["GET", "/?object-lock", 200],
  },
  () => GetObjectLockConfigurationRequest,
  () => GetObjectLockConfigurationOutput
);
export var PutBucketLifecycleConfiguration = op(
  n0,
  _PBLC,
  {
    [_h]: ["PUT", "/?lifecycle", 200],
  },
  () => PutBucketLifecycleConfigurationRequest,
  () => PutBucketLifecycleConfigurationOutput
);
export var PutObjectLockConfiguration = op(
  n0,
  _POLC,
  {
    [_h]: ["PUT", "/?object-lock", 200],
  },
  () => PutObjectLockConfigurationRequest,
  () => PutObjectLockConfigurationOutput
);
