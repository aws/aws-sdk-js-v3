// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CCSRL, _CCSRLR, _CCSRLRr, _CSRL, _eA, _ht, _pas, _re, _rL, _us, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ContainerServiceRegistryLogin = struct(n0, _CSRL, 0, [_us, _pas, _eA, _re], [0, 0, 4, 0]);
export var CreateContainerServiceRegistryLoginRequest = struct(n0, _CCSRLR, 0, [], []);
export var CreateContainerServiceRegistryLoginResult = struct(
  n0,
  _CCSRLRr,
  0,
  [_rL],
  [() => ContainerServiceRegistryLogin]
);
export var CreateContainerServiceRegistryLogin = op(
  n0,
  _CCSRL,
  {
    [_ht]: ["POST", "/ls/api/2016-11-28/container-registry-login", 200],
  },
  () => CreateContainerServiceRegistryLoginRequest,
  () => CreateContainerServiceRegistryLoginResult
);
