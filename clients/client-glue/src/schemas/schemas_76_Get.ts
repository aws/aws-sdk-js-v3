// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AA, _GGICC, _GGICCR, _GGICCRe, _IAn, _Sco, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetGlueIdentityCenterConfigurationRequest = struct(n0, _GGICCR, 0, [], []);
export var GetGlueIdentityCenterConfigurationResponse = struct(n0, _GGICCRe, 0, [_AA, _IAn, _Sco], [0, 0, 64 | 0]);
export var OrchestrationStringList = 64 | 0;

export var GetGlueIdentityCenterConfiguration = op(
  n0,
  _GGICC,
  0,
  () => GetGlueIdentityCenterConfigurationRequest,
  () => GetGlueIdentityCenterConfigurationResponse
);
