// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DDe, _DDRe, _dNa, _h, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteDatastoreRequest = struct(n0, _DDRe, 0, [_dNa], [[0, 1]]);
export var DeleteDatastore = op(
  n0,
  _DDe,
  {
    [_h]: ["DELETE", "/datastores/{datastoreName}", 204],
  },
  () => DeleteDatastoreRequest,
  () => Unit
);
