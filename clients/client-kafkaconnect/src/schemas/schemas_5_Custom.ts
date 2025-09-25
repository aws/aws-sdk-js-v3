// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _cPA, _cPS, _DCP, _DCPR, _DCPRe, _h, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteCustomPluginRequest = struct(n0, _DCPR, 0, [_cPA], [[0, 1]]);
export var DeleteCustomPluginResponse = struct(n0, _DCPRe, 0, [_cPA, _cPS], [0, 0]);
export var DeleteCustomPlugin = op(
  n0,
  _DCP,
  {
    [_h]: ["DELETE", "/v1/custom-plugins/{customPluginArn}", 200],
  },
  () => DeleteCustomPluginRequest,
  () => DeleteCustomPluginResponse
);
