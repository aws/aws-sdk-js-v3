// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CI, _DLFICC, _DLFICCR, _DLFICCRe, _h, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteLakeFormationIdentityCenterConfigurationRequest = struct(n0, _DLFICCR, 0, [_CI], [0]);
export var DeleteLakeFormationIdentityCenterConfigurationResponse = struct(n0, _DLFICCRe, 0, [], []);
export var DeleteLakeFormationIdentityCenterConfiguration = op(
  n0,
  _DLFICC,
  {
    [_h]: ["POST", "/DeleteLakeFormationIdentityCenterConfiguration", 200],
  },
  () => DeleteLakeFormationIdentityCenterConfigurationRequest,
  () => DeleteLakeFormationIdentityCenterConfigurationResponse
);
