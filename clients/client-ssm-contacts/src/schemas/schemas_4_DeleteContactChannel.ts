// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CCI, _DCCe, _DCCRel, _DCCRele, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteContactChannelRequest = struct(n0, _DCCRel, 0, [_CCI], [0]);
export var DeleteContactChannelResult = struct(n0, _DCCRele, 0, [], []);
export var DeleteContactChannel = op(
  n0,
  _DCCe,
  0,
  () => DeleteContactChannelRequest,
  () => DeleteContactChannelResult
);
