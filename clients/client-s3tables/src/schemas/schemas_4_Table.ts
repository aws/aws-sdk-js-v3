// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CN, _CNR, _CNRr, _h, _n, _tBARN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var CreateNamespaceRequest = struct(n0, _CNR, 0, [_tBARN, _n], [[0, 1], 64 | 0]);
export var CreateNamespaceResponse = struct(n0, _CNRr, 0, [_tBARN, _n], [0, 64 | 0]);
export var NamespaceList = 64 | 0;

export var CreateNamespace = op(
  n0,
  _CN,
  {
    [_h]: ["PUT", "/namespaces/{tableBucketARN}", 200],
  },
  () => CreateNamespaceRequest,
  () => CreateNamespaceResponse
);
