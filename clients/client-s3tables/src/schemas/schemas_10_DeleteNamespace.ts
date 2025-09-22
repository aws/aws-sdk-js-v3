// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DN, _DNR, _h, _n, _tBARN, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteNamespaceRequest = struct(
  n0,
  _DNR,
  0,
  [_tBARN, _n],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteNamespace = op(
  n0,
  _DN,
  {
    [_h]: ["DELETE", "/namespaces/{tableBucketARN}/{namespace}", 204],
  },
  () => DeleteNamespaceRequest,
  () => Unit
);
