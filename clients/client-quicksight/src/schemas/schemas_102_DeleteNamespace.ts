// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AAI, _DNe, _DNR, _DNRe, _h, _Na, _RI, _St, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteNamespaceRequest = struct(
  n0,
  _DNR,
  0,
  [_AAI, _Na],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteNamespaceResponse = struct(n0, _DNRe, 0, [_RI, _St], [0, [1, 32]]);
export var DeleteNamespace = op(
  n0,
  _DNe,
  {
    [_h]: ["DELETE", "/accounts/{AwsAccountId}/namespaces/{Namespace}", 200],
  },
  () => DeleteNamespaceRequest,
  () => DeleteNamespaceResponse
);
