// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DMLC, _DMLCR, _ht, _mI, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteMLConfigurationRequest = struct(n0, _DMLCR, 0, [_mI], [[0, 1]]);
export var DeleteMLConfiguration = op(
  n0,
  _DMLC,
  {
    [_ht]: ["DELETE", "/memberships/{membershipIdentifier}/ml-configurations", 200],
  },
  () => DeleteMLConfigurationRequest,
  () => Unit
);
