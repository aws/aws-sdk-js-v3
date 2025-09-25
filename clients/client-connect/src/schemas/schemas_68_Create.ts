// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _CC,
  _CI,
  _CPNRR,
  _CPNRr,
  _CPNRRr,
  _CT,
  _DTev,
  _DTevi,
  _h,
  _II,
  _IRM,
  _PAA,
  _PR,
  _RIeg,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ContactConfiguration = struct(n0, _CC, 0, [_CI, _PR, _IRM], [0, 0, 2]);
export var CreatePushNotificationRegistrationRequest = struct(
  n0,
  _CPNRR,
  0,
  [_II, _CT, _PAA, _DTev, _DTevi, _CC],
  [[0, 1], [0, 4], 0, 0, 0, () => ContactConfiguration]
);
export var CreatePushNotificationRegistrationResponse = struct(n0, _CPNRRr, 0, [_RIeg], [0]);
export var CreatePushNotificationRegistration = op(
  n0,
  _CPNRr,
  {
    [_h]: ["PUT", "/push-notification/{InstanceId}/registrations", 200],
  },
  () => CreatePushNotificationRegistrationRequest,
  () => CreatePushNotificationRegistrationResponse
);
