// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DMBJD, _DMBJDR, _JDN, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteModelBiasJobDefinitionRequest = struct(n0, _DMBJDR, 0, [_JDN], [0]);
export var DeleteModelBiasJobDefinition = op(
  n0,
  _DMBJD,
  0,
  () => DeleteModelBiasJobDefinitionRequest,
  () => Unit
);
