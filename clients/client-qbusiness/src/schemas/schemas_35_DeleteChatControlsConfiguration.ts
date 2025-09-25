// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _aIp, _DCCC, _DCCCR, _DCCCRe, _ht, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteChatControlsConfigurationRequest = struct(n0, _DCCCR, 0, [_aIp], [[0, 1]]);
export var DeleteChatControlsConfigurationResponse = struct(n0, _DCCCRe, 0, [], []);
export var DeleteChatControlsConfiguration = op(
  n0,
  _DCCC,
  {
    [_ht]: ["DELETE", "/applications/{applicationId}/chatcontrols", 200],
  },
  () => DeleteChatControlsConfigurationRequest,
  () => DeleteChatControlsConfigurationResponse
);
