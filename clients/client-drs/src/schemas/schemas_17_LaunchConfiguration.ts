// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DLCT, _DLCTR, _DLCTRe, _ht, _lCTID, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteLaunchConfigurationTemplateRequest = struct(n0, _DLCTR, 0, [_lCTID], [0]);
export var DeleteLaunchConfigurationTemplateResponse = struct(n0, _DLCTRe, 0, [], []);
export var DeleteLaunchConfigurationTemplate = op(
  n0,
  _DLCT,
  {
    [_ht]: ["POST", "/DeleteLaunchConfigurationTemplate", 204],
  },
  () => DeleteLaunchConfigurationTemplateRequest,
  () => DeleteLaunchConfigurationTemplateResponse
);
