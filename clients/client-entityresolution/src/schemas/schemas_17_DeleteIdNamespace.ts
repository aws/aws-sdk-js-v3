// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DIN, _DINI, _DINO, _ht, _iNN, _m, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteIdNamespaceInput = struct(n0, _DINI, 0, [_iNN], [[0, 1]]);
export var DeleteIdNamespaceOutput = struct(n0, _DINO, 0, [_m], [0]);
export var DeleteIdNamespace = op(
  n0,
  _DIN,
  {
    [_ht]: ["DELETE", "/idnamespaces/{idNamespaceName}", 200],
  },
  () => DeleteIdNamespaceInput,
  () => DeleteIdNamespaceOutput
);
