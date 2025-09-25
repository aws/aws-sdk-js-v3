// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DGICC, _DGICCR, _DGICCRe, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteGlueIdentityCenterConfigurationRequest = struct(n0, _DGICCR, 0, [], []);
export var DeleteGlueIdentityCenterConfigurationResponse = struct(n0, _DGICCRe, 0, [], []);
export var DeleteGlueIdentityCenterConfiguration = op(
  n0,
  _DGICC,
  0,
  () => DeleteGlueIdentityCenterConfigurationRequest,
  () => DeleteGlueIdentityCenterConfigurationResponse
);
