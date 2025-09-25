// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CI, _cI, _DPNRel, _DPNRR, _DPNRRe, _h, _hQ, _II, _RIeg, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeletePushNotificationRegistrationRequest = struct(
  n0,
  _DPNRR,
  0,
  [_II, _RIeg, _CI],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hQ]: _cI,
      },
    ],
  ]
);
export var DeletePushNotificationRegistrationResponse = struct(n0, _DPNRRe, 0, [], []);
export var DeletePushNotificationRegistration = op(
  n0,
  _DPNRel,
  {
    [_h]: ["DELETE", "/push-notification/{InstanceId}/registrations/{RegistrationId}", 200],
  },
  () => DeletePushNotificationRegistrationRequest,
  () => DeletePushNotificationRegistrationResponse
);
