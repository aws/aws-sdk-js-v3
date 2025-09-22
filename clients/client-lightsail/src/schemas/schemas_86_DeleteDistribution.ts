// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DDe, _DDRel, _DDRele, _dN, _ht, _op, n0, Operation } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteDistributionRequest = struct(n0, _DDRel, 0, [_dN], [0]);
export var DeleteDistributionResult = struct(n0, _DDRele, 0, [_op], [() => Operation]);
export var DeleteDistribution = op(
  n0,
  _DDe,
  {
    [_ht]: ["POST", "/ls/api/2016-11-28/DeleteDistribution", 200],
  },
  () => DeleteDistributionRequest,
  () => DeleteDistributionResult
);
