// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DS, _DSI, _DSO, _h, _SI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteSiteInput = struct(n0, _DSI, 0, [_SI], [[0, 1]]);
export var DeleteSiteOutput = struct(n0, _DSO, 0, [], []);
export var DeleteSite = op(
  n0,
  _DS,
  {
    [_h]: ["DELETE", "/sites/{SiteId}", 200],
  },
  () => DeleteSiteInput,
  () => DeleteSiteOutput
);
