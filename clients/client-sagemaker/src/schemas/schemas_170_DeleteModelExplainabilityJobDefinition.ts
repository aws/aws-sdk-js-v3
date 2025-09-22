// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DMEJD, _DMEJDR, _JDN, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteModelExplainabilityJobDefinitionRequest = struct(n0, _DMEJDR, 0, [_JDN], [0]);
export var DeleteModelExplainabilityJobDefinition = op(
  n0,
  _DMEJD,
  0,
  () => DeleteModelExplainabilityJobDefinitionRequest,
  () => Unit
);
