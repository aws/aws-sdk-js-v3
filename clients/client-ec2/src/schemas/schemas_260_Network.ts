// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DNIPe, _DNIPRel, _DNIPRele, _DR, _eQN, _F, _NIPIe, _R, _r, _xN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteNetworkInterfacePermissionRequest = struct(n0, _DNIPRel, 0, [_NIPIe, _F, _DR], [0, 2, 2]);
export var DeleteNetworkInterfacePermissionResult = struct(
  n0,
  _DNIPRele,
  0,
  [_R],
  [
    [
      2,
      {
        [_eQN]: `Return`,
        [_xN]: _r,
      },
    ],
  ]
);
export var DeleteNetworkInterfacePermission = op(
  n0,
  _DNIPe,
  0,
  () => DeleteNetworkInterfacePermissionRequest,
  () => DeleteNetworkInterfacePermissionResult
);
