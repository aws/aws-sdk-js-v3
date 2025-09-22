// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CCI, _DCC, _DCCR, _DCCRe, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeactivateContactChannelRequest = struct(n0, _DCCR, 0, [_CCI], [0]);
export var DeactivateContactChannelResult = struct(n0, _DCCRe, 0, [], []);
export var DeactivateContactChannel = op(
  n0,
  _DCC,
  0,
  () => DeactivateContactChannelRequest,
  () => DeactivateContactChannelResult
);
