// smithy-typescript generated code
import { op } from "@smithy/core/schema";

import { _DESR, _h, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteElasticsearchServiceRole = op(
  n0,
  _DESR,
  {
    [_h]: ["DELETE", "/2015-01-01/es/role", 200],
  },
  () => Unit,
  () => Unit
);
