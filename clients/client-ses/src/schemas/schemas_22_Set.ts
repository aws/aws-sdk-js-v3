// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _En, _I, _NTo, _SIHINE, _SIHINER, _SIHINERe, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var SetIdentityHeadersInNotificationsEnabledRequest = struct(n0, _SIHINER, 0, [_I, _NTo, _En], [0, 0, 2]);
export var SetIdentityHeadersInNotificationsEnabledResponse = struct(n0, _SIHINERe, 0, [], []);
export var SetIdentityHeadersInNotificationsEnabled = op(
  n0,
  _SIHINE,
  0,
  () => SetIdentityHeadersInNotificationsEnabledRequest,
  () => SetIdentityHeadersInNotificationsEnabledResponse
);
