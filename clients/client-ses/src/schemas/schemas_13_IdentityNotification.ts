// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _I, _NTo, _SINT, _SINTR, _SINTRe, _ST, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var SetIdentityNotificationTopicRequest = struct(n0, _SINTR, 0, [_I, _NTo, _ST], [0, 0, 0]);
export var SetIdentityNotificationTopicResponse = struct(n0, _SINTRe, 0, [], []);
export var SetIdentityNotificationTopic = op(
  n0,
  _SINT,
  0,
  () => SetIdentityNotificationTopicRequest,
  () => SetIdentityNotificationTopicResponse
);
