// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DI, _EEM, _MEEM, _MEEMR, _MEEMRo, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ModifyEndpointEncryptionModeRequest = struct(n0, _MEEMR, 0, [_DI, _EEM], [0, 0]);
export var ModifyEndpointEncryptionModeResponse = struct(n0, _MEEMRo, 0, [], []);
export var ModifyEndpointEncryptionMode = op(
  n0,
  _MEEM,
  0,
  () => ModifyEndpointEncryptionModeRequest,
  () => ModifyEndpointEncryptionModeResponse
);
