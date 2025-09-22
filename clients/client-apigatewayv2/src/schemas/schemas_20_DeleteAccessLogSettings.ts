// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AI, _DALS, _DALSR, _ht, _SN, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteAccessLogSettingsRequest = struct(
  n0,
  _DALSR,
  0,
  [_AI, _SN],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteAccessLogSettings = op(
  n0,
  _DALS,
  {
    [_ht]: ["DELETE", "/v2/apis/{ApiId}/stages/{StageName}/accesslogsettings", 204],
  },
  () => DeleteAccessLogSettingsRequest,
  () => Unit
);
