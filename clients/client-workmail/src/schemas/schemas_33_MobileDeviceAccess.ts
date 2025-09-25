// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DMDAR, _DMDARR, _DMDARRe, _MDARI, _OI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteMobileDeviceAccessRuleRequest = struct(n0, _DMDARR, 0, [_OI, _MDARI], [0, 0]);
export var DeleteMobileDeviceAccessRuleResponse = struct(n0, _DMDARRe, 0, [], []);
export var DeleteMobileDeviceAccessRule = op(
  n0,
  _DMDAR,
  0,
  () => DeleteMobileDeviceAccessRuleRequest,
  () => DeleteMobileDeviceAccessRuleResponse
);
