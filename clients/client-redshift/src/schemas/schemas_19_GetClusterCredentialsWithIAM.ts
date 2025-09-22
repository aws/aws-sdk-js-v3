// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _CDN,
  _CEC,
  _CIl,
  _DNb,
  _DP,
  _DSu,
  _DU,
  _Ex,
  _GCCWIAM,
  _GCCWIAMM,
  _NRT,
  n0,
  SensitiveString,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ClusterExtendedCredentials = struct(
  n0,
  _CEC,
  0,
  [_DU, _DP, _Ex, _NRT],
  [0, [() => SensitiveString, 0], 4, 4]
);
export var GetClusterCredentialsWithIAMMessage = struct(n0, _GCCWIAMM, 0, [_DNb, _CIl, _DSu, _CDN], [0, 0, 1, 0]);
export var GetClusterCredentialsWithIAM = op(
  n0,
  _GCCWIAM,
  0,
  () => GetClusterCredentialsWithIAMMessage,
  () => ClusterExtendedCredentials
);
