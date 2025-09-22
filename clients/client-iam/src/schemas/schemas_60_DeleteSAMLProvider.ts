// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DSAMLP, _DSAMLPR, _SAMLPA, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteSAMLProviderRequest = struct(n0, _DSAMLPR, 0, [_SAMLPA], [0]);
export var DeleteSAMLProvider = op(
  n0,
  _DSAMLP,
  0,
  () => DeleteSAMLProviderRequest,
  () => Unit
);
