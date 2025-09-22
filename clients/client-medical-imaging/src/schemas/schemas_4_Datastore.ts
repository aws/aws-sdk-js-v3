// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DD, _DDR, _DDRe, _dI, _dS, _h, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteDatastoreRequest = struct(n0, _DDR, 0, [_dI], [[0, 1]]);
export var DeleteDatastoreResponse = struct(n0, _DDRe, 0, [_dI, _dS], [0, 0]);
export var DeleteDatastore = op(
  n0,
  _DD,
  {
    [_h]: ["DELETE", "/datastore/{datastoreId}", 200],
  },
  () => DeleteDatastoreRequest,
  () => DeleteDatastoreResponse
);
