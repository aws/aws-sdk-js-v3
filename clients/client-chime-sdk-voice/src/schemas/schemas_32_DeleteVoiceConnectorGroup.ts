// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DVCG, _DVCGR, _h, _VCGI, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteVoiceConnectorGroupRequest = struct(n0, _DVCGR, 0, [_VCGI], [[0, 1]]);
export var DeleteVoiceConnectorGroup = op(
  n0,
  _DVCG,
  {
    [_h]: ["DELETE", "/voice-connector-groups/{VoiceConnectorGroupId}", 204],
  },
  () => DeleteVoiceConnectorGroupRequest,
  () => Unit
);
