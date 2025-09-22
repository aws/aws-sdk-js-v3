// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _B,
  _CF,
  _CFC,
  _EBC,
  _EBO,
  _Ev,
  _Eve,
  _F,
  _FR,
  _FRi,
  _FRL,
  _GBNC,
  _GBNCR,
  _h,
  _hH,
  _hP,
  _I,
  _K,
  _LFA,
  _LFC,
  _LFCa,
  _LFCL,
  _N,
  _NC,
  _NCF,
  _PBNC,
  _PBNCR,
  _QA,
  _QCL,
  _QCu,
  _QCue,
  _Qu,
  _SDV,
  _SKe,
  _SKF,
  _TAo,
  _TCL,
  _TCo,
  _TCop,
  _Top,
  _V,
  _xaebo,
  _xasdv,
  _xF,
  _xN,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var EventBridgeConfiguration = struct(n0, _EBC, 0, [], []);
export var FilterRule = struct(n0, _FR, 0, [_N, _V], [0, 0]);
export var GetBucketNotificationConfigurationRequest = struct(
  n0,
  _GBNCR,
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
export var LambdaFunctionConfiguration = struct(
  n0,
  _LFC,
  0,
  [_I, _LFA, _Ev, _F],
  [
    0,
    [
      0,
      {
        [_xN]: _CF,
      },
    ],
    [
      64 | 0,
      {
        [_xN]: _Eve,
        [_xF]: 1,
      },
    ],
    [() => NotificationConfigurationFilter, 0],
  ]
);
export var NotificationConfiguration = struct(
  n0,
  _NC,
  0,
  [_TCo, _QCu, _LFCa, _EBC],
  [
    [
      () => TopicConfigurationList,
      {
        [_xN]: _TCop,
        [_xF]: 1,
      },
    ],
    [
      () => QueueConfigurationList,
      {
        [_xN]: _QCue,
        [_xF]: 1,
      },
    ],
    [
      () => LambdaFunctionConfigurationList,
      {
        [_xN]: _CFC,
        [_xF]: 1,
      },
    ],
    () => EventBridgeConfiguration,
  ]
);
export var NotificationConfigurationFilter = struct(
  n0,
  _NCF,
  0,
  [_K],
  [
    [
      () => S3KeyFilter,
      {
        [_xN]: _SKe,
      },
    ],
  ]
);
export var PutBucketNotificationConfigurationRequest = struct(
  n0,
  _PBNCR,
  0,
  [_B, _NC, _EBO, _SDV],
  [
    [0, 1],
    [
      () => NotificationConfiguration,
      {
        [_xN]: _NC,
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
      2,
      {
        [_hH]: _xasdv,
      },
    ],
  ]
);
export var QueueConfiguration = struct(
  n0,
  _QCue,
  0,
  [_I, _QA, _Ev, _F],
  [
    0,
    [
      0,
      {
        [_xN]: _Qu,
      },
    ],
    [
      64 | 0,
      {
        [_xN]: _Eve,
        [_xF]: 1,
      },
    ],
    [() => NotificationConfigurationFilter, 0],
  ]
);
export var S3KeyFilter = struct(
  n0,
  _SKF,
  0,
  [_FRi],
  [
    [
      () => FilterRuleList,
      {
        [_xN]: _FR,
        [_xF]: 1,
      },
    ],
  ]
);
export var TopicConfiguration = struct(
  n0,
  _TCop,
  0,
  [_I, _TAo, _Ev, _F],
  [
    0,
    [
      0,
      {
        [_xN]: _Top,
      },
    ],
    [
      64 | 0,
      {
        [_xN]: _Eve,
        [_xF]: 1,
      },
    ],
    [() => NotificationConfigurationFilter, 0],
  ]
);
export var EventList = 64 | 0;

export var FilterRuleList = list(n0, _FRL, 0, () => FilterRule);
export var LambdaFunctionConfigurationList = list(n0, _LFCL, 0, [() => LambdaFunctionConfiguration, 0]);
export var QueueConfigurationList = list(n0, _QCL, 0, [() => QueueConfiguration, 0]);
export var TopicConfigurationList = list(n0, _TCL, 0, [() => TopicConfiguration, 0]);
export var GetBucketNotificationConfiguration = op(
  n0,
  _GBNC,
  {
    [_h]: ["GET", "/?notification", 200],
  },
  () => GetBucketNotificationConfigurationRequest,
  () => NotificationConfiguration
);
export var PutBucketNotificationConfiguration = op(
  n0,
  _PBNC,
  {
    [_h]: ["PUT", "/?notification", 200],
  },
  () => PutBucketNotificationConfigurationRequest,
  () => Unit
);
