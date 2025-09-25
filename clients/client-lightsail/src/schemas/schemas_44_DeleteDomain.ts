// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DDel, _DDRelet, _DDRelete, _dNo, _ht, _op, n0, Operation } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteDomainRequest = struct(n0, _DDRelet, 0, [_dNo], [0]);
export var DeleteDomainResult = struct(n0, _DDRelete, 0, [_op], [() => Operation]);
export var DeleteDomain = op(
  n0,
  _DDel,
  {
    [_ht]: ["POST", "/ls/api/2016-11-28/DeleteDomain", 200],
  },
  () => DeleteDomainRequest,
  () => DeleteDomainResult
);
