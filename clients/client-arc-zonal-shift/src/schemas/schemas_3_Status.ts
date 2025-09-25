// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _GAONS, _GAONSR, _GAONSRe, _h, _s, _UAONS, _UAONSR, _UAONSRp, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetAutoshiftObserverNotificationStatusRequest = struct(n0, _GAONSR, 0, [], []);
export var GetAutoshiftObserverNotificationStatusResponse = struct(n0, _GAONSRe, 0, [_s], [0]);
export var UpdateAutoshiftObserverNotificationStatusRequest = struct(n0, _UAONSR, 0, [_s], [0]);
export var UpdateAutoshiftObserverNotificationStatusResponse = struct(n0, _UAONSRp, 0, [_s], [0]);
export var GetAutoshiftObserverNotificationStatus = op(
  n0,
  _GAONS,
  {
    [_h]: ["GET", "/autoshift-observer-notification", 200],
  },
  () => GetAutoshiftObserverNotificationStatusRequest,
  () => GetAutoshiftObserverNotificationStatusResponse
);
export var UpdateAutoshiftObserverNotificationStatus = op(
  n0,
  _UAONS,
  {
    [_h]: ["PUT", "/autoshift-observer-notification", 200],
  },
  () => UpdateAutoshiftObserverNotificationStatusRequest,
  () => UpdateAutoshiftObserverNotificationStatusResponse
);
