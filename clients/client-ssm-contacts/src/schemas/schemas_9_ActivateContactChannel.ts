// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _ACC, _ACc, _ACCR, _ACCRc, _CCI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ActivateContactChannelRequest = struct(n0, _ACCR, 0, [_CCI, _ACc], [0, 0]);
export var ActivateContactChannelResult = struct(n0, _ACCRc, 0, [], []);
export var ActivateContactChannel = op(
  n0,
  _ACC,
  0,
  () => ActivateContactChannelRequest,
  () => ActivateContactChannelResult
);
