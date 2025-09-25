// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _EC, _ECR, _eI, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var ExportConfigurationsResponse = struct(n0, _ECR, 0, [_eI], [0]);
export var ExportConfigurations = op(
  n0,
  _EC,
  0,
  () => Unit,
  () => ExportConfigurationsResponse
);
