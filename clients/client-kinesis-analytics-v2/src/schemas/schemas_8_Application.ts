// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AARN, _AMCD, _AMCU, _AMWET, _AMWST, _AMWSTU, _AN, _UAMC, _UAMCR, _UAMCRp, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ApplicationMaintenanceConfigurationDescription = struct(n0, _AMCD, 0, [_AMWST, _AMWET], [0, 0]);
export var ApplicationMaintenanceConfigurationUpdate = struct(n0, _AMCU, 0, [_AMWSTU], [0]);
export var UpdateApplicationMaintenanceConfigurationRequest = struct(
  n0,
  _UAMCR,
  0,
  [_AN, _AMCU],
  [0, () => ApplicationMaintenanceConfigurationUpdate]
);
export var UpdateApplicationMaintenanceConfigurationResponse = struct(
  n0,
  _UAMCRp,
  0,
  [_AARN, _AMCD],
  [0, () => ApplicationMaintenanceConfigurationDescription]
);
export var UpdateApplicationMaintenanceConfiguration = op(
  n0,
  _UAMC,
  0,
  () => UpdateApplicationMaintenanceConfigurationRequest,
  () => UpdateApplicationMaintenanceConfigurationResponse
);
