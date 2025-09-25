// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AA, _CGICC, _CGICCR, _CGICCRr, _IAn, _Sco, _UGICC, _UGICCR, _UGICCRp, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var CreateGlueIdentityCenterConfigurationRequest = struct(n0, _CGICCR, 0, [_IAn, _Sco], [0, 64 | 0]);
export var CreateGlueIdentityCenterConfigurationResponse = struct(n0, _CGICCRr, 0, [_AA], [0]);
export var UpdateGlueIdentityCenterConfigurationRequest = struct(n0, _UGICCR, 0, [_Sco], [64 | 0]);
export var UpdateGlueIdentityCenterConfigurationResponse = struct(n0, _UGICCRp, 0, [], []);
export var IdentityCenterScopesList = 64 | 0;

export var CreateGlueIdentityCenterConfiguration = op(
  n0,
  _CGICC,
  0,
  () => CreateGlueIdentityCenterConfigurationRequest,
  () => CreateGlueIdentityCenterConfigurationResponse
);
export var UpdateGlueIdentityCenterConfiguration = op(
  n0,
  _UGICC,
  0,
  () => UpdateGlueIdentityCenterConfigurationRequest,
  () => UpdateGlueIdentityCenterConfigurationResponse
);
