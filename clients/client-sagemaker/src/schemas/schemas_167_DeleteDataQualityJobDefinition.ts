// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DDQJD, _DDQJDR, _JDN, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteDataQualityJobDefinitionRequest = struct(n0, _DDQJDR, 0, [_JDN], [0]);
export var DeleteDataQualityJobDefinition = op(
  n0,
  _DDQJD,
  0,
  () => DeleteDataQualityJobDefinitionRequest,
  () => Unit
);
