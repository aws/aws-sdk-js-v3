// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DMQJD, _DMQJDR, _JDN, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteModelQualityJobDefinitionRequest = struct(n0, _DMQJDR, 0, [_JDN], [0]);
export var DeleteModelQualityJobDefinition = op(
  n0,
  _DMQJD,
  0,
  () => DeleteModelQualityJobDefinitionRequest,
  () => Unit
);
