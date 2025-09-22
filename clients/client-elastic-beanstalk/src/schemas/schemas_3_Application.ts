// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _A,
  _AA,
  _AD,
  _ADL,
  _ADM,
  _ADMp,
  _AN,
  _ANp,
  _Ap,
  _AQ,
  _ARLC,
  _ARLDM,
  _AVLC,
  _AVQ,
  _CPQ,
  _CT,
  _CTQ,
  _D,
  _DAA,
  _DAAR,
  _DAe,
  _DAMe,
  _DC,
  _DSFS,
  _DU,
  _En,
  _EQ,
  _MAID,
  _MAR,
  _Max,
  _MC,
  _MCR,
  _RLC,
  _RQ,
  _RQe,
  _SR,
  _UA,
  _UAM,
  _UARL,
  _UARLM,
  _V,
  _VLC,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ApplicationDescription = struct(
  n0,
  _AD,
  0,
  [_AA, _AN, _D, _DC, _DU, _V, _CT, _RLC],
  [0, 0, 0, 4, 4, 64 | 0, 64 | 0, () => ApplicationResourceLifecycleConfig]
);
export var ApplicationDescriptionMessage = struct(n0, _ADM, 0, [_A], [() => ApplicationDescription]);
export var ApplicationDescriptionsMessage = struct(n0, _ADMp, 0, [_Ap], [() => ApplicationDescriptionList]);
export var ApplicationResourceLifecycleConfig = struct(
  n0,
  _ARLC,
  0,
  [_SR, _VLC],
  [0, () => ApplicationVersionLifecycleConfig]
);
export var ApplicationResourceLifecycleDescriptionMessage = struct(
  n0,
  _ARLDM,
  0,
  [_AN, _RLC],
  [0, () => ApplicationResourceLifecycleConfig]
);
export var ApplicationVersionLifecycleConfig = struct(
  n0,
  _AVLC,
  0,
  [_MCR, _MAR],
  [() => MaxCountRule, () => MaxAgeRule]
);
export var DescribeAccountAttributesResult = struct(n0, _DAAR, 0, [_RQ], [() => ResourceQuotas]);
export var DescribeApplicationsMessage = struct(n0, _DAMe, 0, [_ANp], [64 | 0]);
export var MaxAgeRule = struct(n0, _MAR, 0, [_En, _MAID, _DSFS], [2, 1, 2]);
export var MaxCountRule = struct(n0, _MCR, 0, [_En, _MC, _DSFS], [2, 1, 2]);
export var ResourceQuota = struct(n0, _RQe, 0, [_Max], [1]);
export var ResourceQuotas = struct(
  n0,
  _RQ,
  0,
  [_AQ, _AVQ, _EQ, _CTQ, _CPQ],
  [() => ResourceQuota, () => ResourceQuota, () => ResourceQuota, () => ResourceQuota, () => ResourceQuota]
);
export var UpdateApplicationMessage = struct(n0, _UAM, 0, [_AN, _D], [0, 0]);
export var UpdateApplicationResourceLifecycleMessage = struct(
  n0,
  _UARLM,
  0,
  [_AN, _RLC],
  [0, () => ApplicationResourceLifecycleConfig]
);
export var ApplicationDescriptionList = list(n0, _ADL, 0, () => ApplicationDescription);
export var ApplicationNamesList = 64 | 0;

export var ConfigurationTemplateNamesList = 64 | 0;

export var DescribeAccountAttributes = op(
  n0,
  _DAA,
  0,
  () => Unit,
  () => DescribeAccountAttributesResult
);
export var DescribeApplications = op(
  n0,
  _DAe,
  0,
  () => DescribeApplicationsMessage,
  () => ApplicationDescriptionsMessage
);
export var UpdateApplication = op(
  n0,
  _UA,
  0,
  () => UpdateApplicationMessage,
  () => ApplicationDescriptionMessage
);
export var UpdateApplicationResourceLifecycle = op(
  n0,
  _UARL,
  0,
  () => UpdateApplicationResourceLifecycleMessage,
  () => ApplicationResourceLifecycleDescriptionMessage
);
