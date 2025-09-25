// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _aI, _eV, _GGAEV, _GGAEVR, _GGAEVRe, _h, _PGAEV, _PGAEVR, _PGAEVRu, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetGraphqlApiEnvironmentVariablesRequest = struct(n0, _GGAEVR, 0, [_aI], [[0, 1]]);
export var GetGraphqlApiEnvironmentVariablesResponse = struct(n0, _GGAEVRe, 0, [_eV], [128 | 0]);
export var PutGraphqlApiEnvironmentVariablesRequest = struct(n0, _PGAEVR, 0, [_aI, _eV], [[0, 1], 128 | 0]);
export var PutGraphqlApiEnvironmentVariablesResponse = struct(n0, _PGAEVRu, 0, [_eV], [128 | 0]);
export var EnvironmentVariableMap = 128 | 0;

export var GetGraphqlApiEnvironmentVariables = op(
  n0,
  _GGAEV,
  {
    [_h]: ["GET", "/v1/apis/{apiId}/environmentVariables", 200],
  },
  () => GetGraphqlApiEnvironmentVariablesRequest,
  () => GetGraphqlApiEnvironmentVariablesResponse
);
export var PutGraphqlApiEnvironmentVariables = op(
  n0,
  _PGAEV,
  {
    [_h]: ["PUT", "/v1/apis/{apiId}/environmentVariables", 200],
  },
  () => PutGraphqlApiEnvironmentVariablesRequest,
  () => PutGraphqlApiEnvironmentVariablesResponse
);
