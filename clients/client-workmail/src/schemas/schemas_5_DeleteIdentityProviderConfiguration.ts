// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DIPC, _DIPCR, _DIPCRe, _OI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteIdentityProviderConfigurationRequest = struct(n0, _DIPCR, 0, [_OI], [0]);
export var DeleteIdentityProviderConfigurationResponse = struct(n0, _DIPCRe, 0, [], []);
export var DeleteIdentityProviderConfiguration = op(
  n0,
  _DIPC,
  2,
  () => DeleteIdentityProviderConfigurationRequest,
  () => DeleteIdentityProviderConfigurationResponse
);
