// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ACu,
  _CC,
  _CDN,
  _CIl,
  _DG,
  _DGb,
  _DGL,
  _DNb,
  _DP,
  _DSu,
  _DU,
  _Ex,
  _GCC,
  _GCCM,
  _xN,
  n0,
  SensitiveString,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ClusterCredentials = struct(n0, _CC, 0, [_DU, _DP, _Ex], [0, [() => SensitiveString, 0], 4]);
export var GetClusterCredentialsMessage = struct(
  n0,
  _GCCM,
  0,
  [_DU, _DNb, _CIl, _DSu, _ACu, _DG, _CDN],
  [0, 0, 0, 1, 2, [() => DbGroupList, 0], 0]
);
export var DbGroupList = list(n0, _DGL, 0, [
  0,
  {
    [_xN]: _DGb,
  },
]);
export var GetClusterCredentials = op(
  n0,
  _GCC,
  0,
  () => GetClusterCredentialsMessage,
  () => ClusterCredentials
);
