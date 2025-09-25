// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CPA, _DCPe, _DCPR, _DCPRe, _h, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteControlPanelRequest = struct(n0, _DCPR, 0, [_CPA], [[0, 1]]);
export var DeleteControlPanelResponse = struct(n0, _DCPRe, 0, [], []);
export var DeleteControlPanel = op(
  n0,
  _DCPe,
  {
    [_h]: ["DELETE", "/controlpanel/{ControlPanelArn}", 200],
  },
  () => DeleteControlPanelRequest,
  () => DeleteControlPanelResponse
);
