// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _a, _DIC, _DICR, _DICRe, _f, _ht, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteIngestConfigurationRequest = struct(n0, _DICR, 0, [_a, _f], [0, 2]);
export var DeleteIngestConfigurationResponse = struct(n0, _DICRe, 0, [], []);
export var DeleteIngestConfiguration = op(
  n0,
  _DIC,
  {
    [_ht]: ["POST", "/DeleteIngestConfiguration", 200],
  },
  () => DeleteIngestConfigurationRequest,
  () => DeleteIngestConfigurationResponse
);
