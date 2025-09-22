// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DSMA, _DSMAR, _h, _SMAI, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteSipMediaApplicationRequest = struct(n0, _DSMAR, 0, [_SMAI], [[0, 1]]);
export var DeleteSipMediaApplication = op(
  n0,
  _DSMA,
  {
    [_h]: ["DELETE", "/sip-media-applications/{SipMediaApplicationId}", 204],
  },
  () => DeleteSipMediaApplicationRequest,
  () => Unit
);
