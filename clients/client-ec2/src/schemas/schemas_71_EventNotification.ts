// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _DIENA,
  _DIENAe,
  _DIENAR,
  _DIENARe,
  _DIENARes,
  _DIENAResc,
  _DITAR,
  _DR,
  _eQN,
  _IATOI,
  _iATOI,
  _it,
  _ITA,
  _iTA,
  _ITK,
  _ITKn,
  _ITKS,
  _iTKS,
  _ITNA,
  _RIENA,
  _RIENAR,
  _RIENARe,
  _RITAR,
  _xN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DeregisterInstanceEventNotificationAttributesRequest = struct(
  n0,
  _DIENAR,
  0,
  [_DR, _ITA],
  [2, [() => DeregisterInstanceTagAttributeRequest, 0]]
);
export var DeregisterInstanceEventNotificationAttributesResult = struct(
  n0,
  _DIENARe,
  0,
  [_ITA],
  [
    [
      () => InstanceTagNotificationAttribute,
      {
        [_eQN]: `InstanceTagAttribute`,
        [_xN]: _iTA,
      },
    ],
  ]
);
export var DeregisterInstanceTagAttributeRequest = struct(
  n0,
  _DITAR,
  0,
  [_IATOI, _ITK],
  [
    2,
    [
      () => InstanceTagKeySet,
      {
        [_xN]: _ITKn,
      },
    ],
  ]
);
export var DescribeInstanceEventNotificationAttributesRequest = struct(n0, _DIENARes, 0, [_DR], [2]);
export var DescribeInstanceEventNotificationAttributesResult = struct(
  n0,
  _DIENAResc,
  0,
  [_ITA],
  [
    [
      () => InstanceTagNotificationAttribute,
      {
        [_eQN]: `InstanceTagAttribute`,
        [_xN]: _iTA,
      },
    ],
  ]
);
export var InstanceTagNotificationAttribute = struct(
  n0,
  _ITNA,
  0,
  [_ITK, _IATOI],
  [
    [
      () => InstanceTagKeySet,
      {
        [_eQN]: `InstanceTagKeySet`,
        [_xN]: _iTKS,
      },
    ],
    [
      2,
      {
        [_eQN]: `IncludeAllTagsOfInstance`,
        [_xN]: _iATOI,
      },
    ],
  ]
);
export var RegisterInstanceEventNotificationAttributesRequest = struct(
  n0,
  _RIENAR,
  0,
  [_DR, _ITA],
  [2, [() => RegisterInstanceTagAttributeRequest, 0]]
);
export var RegisterInstanceEventNotificationAttributesResult = struct(
  n0,
  _RIENARe,
  0,
  [_ITA],
  [
    [
      () => InstanceTagNotificationAttribute,
      {
        [_eQN]: `InstanceTagAttribute`,
        [_xN]: _iTA,
      },
    ],
  ]
);
export var RegisterInstanceTagAttributeRequest = struct(
  n0,
  _RITAR,
  0,
  [_IATOI, _ITK],
  [
    2,
    [
      () => InstanceTagKeySet,
      {
        [_xN]: _ITKn,
      },
    ],
  ]
);
export var InstanceTagKeySet = list(n0, _ITKS, 0, [
  0,
  {
    [_xN]: _it,
  },
]);
export var DeregisterInstanceEventNotificationAttributes = op(
  n0,
  _DIENA,
  0,
  () => DeregisterInstanceEventNotificationAttributesRequest,
  () => DeregisterInstanceEventNotificationAttributesResult
);
export var DescribeInstanceEventNotificationAttributes = op(
  n0,
  _DIENAe,
  0,
  () => DescribeInstanceEventNotificationAttributesRequest,
  () => DescribeInstanceEventNotificationAttributesResult
);
export var RegisterInstanceEventNotificationAttributes = op(
  n0,
  _RIENA,
  0,
  () => RegisterInstanceEventNotificationAttributesRequest,
  () => RegisterInstanceEventNotificationAttributesResult
);
