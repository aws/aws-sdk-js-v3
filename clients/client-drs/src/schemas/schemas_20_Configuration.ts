// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DRCT, _DRCTR, _DRCTRe, _ht, _rCTID, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteReplicationConfigurationTemplateRequest = struct(n0, _DRCTR, 0, [_rCTID], [0]);
export var DeleteReplicationConfigurationTemplateResponse = struct(n0, _DRCTRe, 0, [], []);
export var DeleteReplicationConfigurationTemplate = op(
  n0,
  _DRCT,
  {
    [_ht]: ["POST", "/DeleteReplicationConfigurationTemplate", 204],
  },
  () => DeleteReplicationConfigurationTemplateRequest,
  () => DeleteReplicationConfigurationTemplateResponse
);
